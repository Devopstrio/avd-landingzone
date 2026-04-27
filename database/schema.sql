-- Devopstrio AVD Landing Zone Platform
-- Core Infrastructure & Governance Ledger Schema
-- Target: PostgreSQL 15+

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Identity & Tenancy
CREATE TABLE IF NOT EXISTS tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    azure_tenant_id VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'PlatformEngineer', -- Admin, Lead, Analyst
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Landing Zone Foundations
CREATE TABLE IF NOT EXISTS landing_zones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    name VARCHAR(255) NOT NULL,
    environment VARCHAR(50) NOT NULL, -- Prod, Dev, Sandbox
    governance_score INT DEFAULT 100,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS regions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lz_id UUID REFERENCES landing_zones(id) ON DELETE CASCADE,
    region_name VARCHAR(100) NOT NULL, -- uksouth, eastus
    vnet_id VARCHAR(255),
    address_space TEXT[],
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. AVD Resource Management
CREATE TABLE IF NOT EXISTS host_pools (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    region_id UUID REFERENCES regions(id),
    name VARCHAR(255) NOT NULL,
    pool_type VARCHAR(50), -- Pooled, Personal
    load_balancer VARCHAR(50) DEFAULT 'BreadthFirst',
    max_sessions INT DEFAULT 12,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS session_hosts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pool_id UUID REFERENCES host_pools(id),
    vm_name VARCHAR(255) NOT NULL,
    vm_id VARCHAR(255),
    status VARCHAR(50) DEFAULT 'Available', -- Available, Draining, Unavailable
    ip_address VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Governance & Compliance
CREATE TABLE IF NOT EXISTS policies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lz_id UUID REFERENCES landing_zones(id),
    name VARCHAR(255) NOT NULL,
    policy_id VARCHAR(255) NOT NULL, -- Azure Policy Definition ID
    compliance_state VARCHAR(50), -- Compliant, Non-Compliant
    last_eval TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Cost & Consumption Analytics
CREATE TABLE IF NOT EXISTS cost_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lz_id UUID REFERENCES landing_zones(id),
    billing_period VARCHAR(50),
    amount FLOAT NOT NULL,
    currency VARCHAR(10) DEFAULT 'USD',
    service_name VARCHAR(100),
    recorded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Audit & Analytics
CREATE TABLE IF NOT EXISTS reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    type VARCHAR(100) NOT NULL, -- ExecutiveScorecard, ComplianceSummary
    file_path TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    user_id UUID REFERENCES users(id),
    action VARCHAR(255) NOT NULL,
    resource_id VARCHAR(255),
    details JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Strategic Performance Indexes
CREATE INDEX idx_lz_tenant ON landing_zones(tenant_id);
CREATE INDEX idx_host_pool_region ON host_pools(region_id);
CREATE INDEX idx_session_host_pool ON session_hosts(pool_id);
CREATE INDEX idx_policy_compliance ON policies(compliance_state);
CREATE INDEX idx_cost_lz ON cost_records(lz_id);
