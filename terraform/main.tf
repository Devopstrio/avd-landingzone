# Devopstrio AVD Landing Zone
# Global Foundation Infrastructure (Terraform)
# Target: Azure RM

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.90"
    }
  }
}

provider "azurerm" {
  features {}
}

# 1. Management Hub Resource Group
resource "azurerm_resource_group" "hub_rg" {
  name     = "rg-avd-mgt-hub-prd"
  location = "uksouth"
  tags = {
    Environment = "Production"
    Role        = "Hub"
  }
}

# 2. Hub Virtual Network (The Connectivity Core)
resource "azurerm_virtual_network" "hub_vnet" {
  name                = "vnet-avd-global-hub"
  address_space       = ["10.100.0.0/16"]
  location            = azurerm_resource_group.hub_rg.location
  resource_group_name = azurerm_resource_group.hub_rg.name
}

resource "azurerm_subnet" "gateway_subnet" {
  name                 = "GatewaySubnet"
  resource_group_name  = azurerm_resource_group.hub_rg.name
  virtual_network_name = azurerm_virtual_network.hub_vnet.name
  address_prefixes     = ["10.100.1.0/24"]
}

# 3. Regional Spoke Blueprints (Iterative Deployment)
resource "azurerm_resource_group" "spoke_rg" {
  for_each = toset(["uksouth", "eastus"])
  name     = "rg-avd-spoke-${each.key}-prd"
  location = each.key
}

# 4. Shared FSLogix Storage (Premium Files)
resource "azurerm_storage_account" "profiles" {
  for_each                 = azurerm_resource_group.spoke_rg
  name                     = "stavdprof${each.value.location}prd"
  resource_group_name      = each.value.name
  location                 = each.value.location
  account_tier             = "Premium"
  account_replication_type = "ZRS" # Zone Redundant for HA profile access
  account_kind             = "FileStorage"
}

# 5. Log Analytics Workspace (Standardized Telemetry)
resource "azurerm_log_analytics_workspace" "monitoring" {
  name                = "log-avd-global-foundation"
  location            = azurerm_resource_group.hub_rg.location
  resource_group_name = azurerm_resource_group.hub_rg.name
  sku                 = "PerGB2018"
}

# 6. Global Workspace Discovery
resource "azurerm_virtual_desktop_workspace" "global_ws" {
  name                = "vdws-avd-enterprise"
  location            = azurerm_resource_group.hub_rg.location
  resource_group_name = azurerm_resource_group.hub_rg.name
  friendly_name       = "Devopstrio Global Enterprise Workspace"
}

# Outputs
output "hub_vnet_id" {
  value = azurerm_virtual_network.hub_vnet.id
}

output "log_analytics_id" {
  value = azurerm_log_analytics_workspace.monitoring.id
}
