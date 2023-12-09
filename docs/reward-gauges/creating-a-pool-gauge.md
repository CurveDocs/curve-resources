# **Deploy a Gauge**

You can deploy the gauge directly through the UI simply by posting the address: [https://classic.curve.fi/factory/create\_gauge](https://classic.curve.fi/factory/create_gauge)

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MFA0rQI3SzfbVFgp3Ic%2F-MkP0d42v-hL3Bh1F0C0%2F-MkP6iK3aIYXPARQ9vry%2FScreen%20Shot%202021-09-24%20at%204.23.11%20PM.png?alt=media&token=0269d4f4-23cd-490b-bbd1-50537414c8b2)

# **Deploy a Gauge via Etherscan**

In addition to the UI, there is an option to deploy the gauge directly through Etherscan. 

!!!warning
    Calling **`deploy_gauge`** on Etherscan will only work if the function is called on the Factory contract that also deployed the pool.

To navigate to this page, first search for the corresponding Factory contract on Etherscan. Then, go to **`Contract -> Write Contract -> deploy_gauge`**.  
Then insert the pool address you want to add a gauge for, press on **`Write`** and sign the transaction.  

Before deploying the gauge, ensure you connect your wallet by clicking the **`Connect to Web3`** button.

<figure markdown>
  ![](../images/gauge_etherscan1.png){ width="800" }
  <figcaption></figcaption>
</figure>



# **Submit a DAO Vote**

Once you've created your gauge, you need to submit it to the DAO for a vote. [https://classic.curve.fi/factory/create\_vote](https://classic.curve.fi/factory/create_vote)​

The address that submits must have 2500 veCRV in order to create a vote.

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MFA0rQI3SzfbVFgp3Ic%2F-MkP0d42v-hL3Bh1F0C0%2F-MkP751_FVeykfdjJfGZ%2FScreen%20Shot%202021-09-24%20at%204.24.48%20PM.png?alt=media&token=eace7dbd-6f54-472b-b328-d572d257d437)

Once the gauge has been submitted, politics take over. You may want to visit the governance forum and explain why your pool should be made eligible for rewards.

[Governance Forum](https://gov.curve.fi/)
