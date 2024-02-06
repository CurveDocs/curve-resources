<h1>veCRV: Overview</h1>

!!!info
    veCRV, an acronym for **vote-escrowed CRV**, represents CRV tokens that are locked in the voting escrow contract for a specified period. These tokens can only be obtained by locking CRV tokens, and are **not transferable**.


To obtain the following benefits, users must [lock CRV tokens](../vecrv/locking-your-crv.md):

1. ### **Governance**

    The veCRV balance represents the voting power of a user, which allows them to **vote on on-chain proposals**. Additionally, a crucial part of Curve governance are **gauge weight votes**. Curve token emissions are created in a way that allows **veCRV holders to choose how future emissions are allocated**. Liquidity pools on Curve can be added to the GaugeController via a successfully passed DAO vote, making them eligible to receive CRV token emissions. The gauge weights determine how much CRV each pool receives. Every **Thursday at 00:00 UTC**, the updated gauge weights are applied.

    [Voting](../governance/voting.md)  
    [Gauge Weights](../reward-gauges/gauge-weights.md)


2. ### **Earning Fees**

    Starting on the 19th of September 2020, **50% of all trading fees are distributed to veCRV holders**, while the remaining 50% goes to the respective liquidity providers of the pools. This distribution was implemented following a community-led proposal, aimed at aligning the incentives between liquidity providers and governance participants (veCRV holders). Additionally, since the launch of Curve's own stablecoin (crvUSD), **100% of the accrued interest from crvUSD markets** also goes to veCRV holders.

    The collected fees are converted to [`3CRV`](https://etherscan.io/address/0x6c3f90f043a72fa612cbac8115ee7e52bde6e490) (the LP token for 3Pool) and distributed among veCRV holders.

    [Claiming Trading Fees](../crv-token/claiming-trading-fees.md)


3. ### **Boosting LP**

    One of the primary incentives for vote-locking is the **boost mechanism**. Users who provide liquidity to a pool and have some vote-locked CRV **receive boosted CRV rewards**.

    [Boosting your CRV rewards](../reward-gauges/boosting-your-crv-rewards.md)


### **CRV Matrix**

<figure markdown>
  ![](../images/crv_matrix.png){ width="700" }
  <figcaption></figcaption>
</figure>