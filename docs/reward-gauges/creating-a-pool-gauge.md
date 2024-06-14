# **Deploy a Gauge**

You can deploy the gauge directly through the UI if the pool is on Ethereum through the following page: [https://classic.curve.fi/factory/create\_gauge](https://classic.curve.fi/factory/create_gauge).

Simply input the pool address (0x...) and the pool type: stable pool for pools with pegged assets (pool with USDC and USDT), or crypto pool for volatile assets (pool with USDC and ETH).

![Deploy Gauge UI](../images/ui/deploy-gauge.png)

If the pool is not on Ethereum please ask in the [Telegram](https://t.me/curvefi) or directly interact with the factory contract using Etherscan, etc using the guide below.

# **Deploy a Gauge via Etherscan**

In addition to the UI, there is an option to deploy the gauge directly through Etherscan. If the pool was deployed recently, check the [Deployment Addresses](https://docs.curve.fi/references/deployed-contracts/) for the factory contracts, otherwise use the deployment transaction to find which contract deployed the pool/lending market, this will be the factory contract.

!!!warning
    Calling **`deploy_gauge`** on Etherscan will only work if the function is called on the Factory contract that also deployed the pool, and the 

To navigate to this page, first search for the corresponding Factory contract on Etherscan. Then, go to **`Contract -> Write Contract -> deploy_gauge`**.  
Then insert the pool address you want to add a gauge for, press on **`Write`** and sign the transaction.  

Before deploying the gauge, ensure you connect your wallet by clicking the **`Connect to Web3`** button.

<figure markdown>
  ![](../images/gauge_etherscan1.png){ width="800" }
  <figcaption></figcaption>
</figure>



# **Submit a DAO Vote**

In order for a gauge to become eligible to receive CRV emissions, it has to be added to the GaugeController. This needs to be approved by the DAO.

Once you've created your gauge, and if the pool is on Ethereum, you can submit it to the DAO for a vote. [https://classic.curve.fi/factory/create\_vote](https://classic.curve.fi/factory/create_vote)​.  If the pool is not on Ethereum please ask in [Telegram](https://t.me/curvefi) about the steps to deploy a vote.

The address that submits must have 2500 veCRV in order to create a vote.

![Create Gauge Vote UI](../images/ui/create-gauge-vote.png)

Once the gauge has been submitted, politics take over. You may want to visit the governance forum and explain why your pool should be made eligible for rewards.

[Governance Forum](https://gov.curve.fi/)
