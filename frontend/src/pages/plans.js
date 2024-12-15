import React, { useState } from "react";
import API from "../api";

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState("basic");

  const handlePurchase = async () => {
    try {
      const token = localStorage.getItem("token");
      await API.post(
        "/orders",
        { planType: selectedPlan, duration: "monthly" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Plan purchased successfully!");
    } catch (err) {
      alert("Purchase failed: " + err.response.data);
    }
  };

  return (
    <div>
      <h1>VPS Plans</h1>
      <div>
        <label>
          <input
            type="radio"
            value="basic"
            checked={selectedPlan === "basic"}
            onChange={() => setSelectedPlan("basic")}
          />
          Basic Plan - 2 Cores, 4GB RAM, 50GB Disk ($10/month)
        </label>
        <label>
          <input
            type="radio"
            value="pro"
            checked={selectedPlan === "pro"}
            onChange={() => setSelectedPlan("pro")}
          />
          Pro Plan - 4 Cores, 8GB RAM, 100GB Disk ($20/month)
        </label>
        <label>
          <input
            type="radio"
            value="enterprise"
            checked={selectedPlan === "enterprise"}
            onChange={() => setSelectedPlan("enterprise")}
          />
          Enterprise Plan - 8 Cores, 16GB RAM, 200GB Disk ($50/month)
        </label>
      </div>
      <button onClick={handlePurchase}>Purchase</button>
    </div>
  );
};

export default Plans;
