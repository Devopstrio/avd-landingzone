import pytest
from fastapi.testclient import TestClient
from backend.src.main import app

# Devopstrio AVD Landing Zone
# Integration Tests for Multi-Region Foundation Orchestration

client = TestClient(app)

def test_health_check_operational():
    """Verify that the platform services are reportable and live."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "operational"

def test_regional_inventory_listing():
    """Ensure the platform can retrieve active AVD foundation regions."""
    response = client.get("/regions")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 2
    assert "vnet" in data[0]

def test_landingzone_deployment_acceptance():
    """Verify that a foundation deployment request is accepted and queued."""
    payload = {
        "name": "enterprise-london-zone",
        "region_primary": "uksouth",
        "blueprint": "Enterprise-Shared",
        "environment": "Prod"
    }
    response = client.post("/landingzone/deploy", json=payload)
    assert response.status_code == 202
    assert "job_id" in response.json()
    assert response.json()["status"] == "In-Progress"

def test_governance_scorecard_retrieval():
    """Ensure compliance scores are reportable and within SLA thresholds."""
    response = client.get("/governance/score")
    assert response.status_code == 200
    data = response.json()
    assert data["overall_score"] > 80
    assert data["policy_drift_detected"] is False

def test_finops_consumption_summary():
    """Verify that AVD landing zone spend data is reportable."""
    response = client.get("/costs/summary")
    assert response.status_code == 200
    assert "monthly_spend" in response.json()
    assert float(response.json()["monthly_spend"]) > 0

def test_security_posture_validation():
    """Check that the security engine provides a verified readiness status."""
    response = client.get("/security/posture")
    assert response.status_code == 200
    assert response.json()["readiness_score"] == "Verified"
