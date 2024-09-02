<h1>Pools Overview</h1>>

If you are new to Ethereum or DeFi, liquidity pools are a seemingly complicated concept to understand.  

Pools hold multiple assets, allowing users to swap between them. Liquidity providers who deposit assets earn fees from these swaps.

In Curve, pools can be 2 different types, these are:

* **Stableswap Pools** for coins that are pegged to each other, for example USDC and USDT, or stETH and ETH.  
* **Cryptoswap Pools** which are for assets which fluctuate in value against each other, for example USDT and ETH, or CRV and ETH.

It’s important to understand that when you provide liquidity to a pool, no matter what coin you deposit, you essentially **gain exposure to all the coins in the pool** which means you want to find a pool with coins you are comfortable holding.

!!!danger "Liquidity Pool Risks"
    Before using liquidity pools, it's advisable to review our [risk disclaimer](../risks-security/risks/pool.md) page for a comprehensive overview of potential risks.

---

## **Stableswap** (**Curve V1**)

Stableswap pools have assets pegged to each other.  For example USDC and USDT, as their value should always be **close to a 1:1 ratio**.

Let's look at an example about how it works for a liquidity provider:

![Stableswap](../images/pools/stableswap.svg){: .full-width }

---

## **Cryptoswap** (**Curve V2**)

Cryptoswap pools contain unpaired assets like USDC and ETH, whose relative values fluctuate. This necessitates a different pool design than Stableswap.

Cryptoswap pools maintain an equal value balance between their assets. For example, $1,000,000 in USDC would be matched by $1,000,000 worth of ETH.

Let's look at an example about how it works for a liquidity provider:

![Cryptoswap](../images/pools/cryptoswap.svg){: .full-width }

---

## **Pool Fees**

Pool fees are specific to each pool, they typically range from 0.01%-0.04%.  They are shown under the **`pool details`** tab on the pool's page.   All new pools also have dynamic fees, so in times of high volatility, fees earned by the pools increase.

**50% of the pool fees go to the Liquidity Providers** increasing the value of LP tokens, and **50% to DAO (veCRV holders)**.

**Balanced deposits and withdrawals are free**.  Imbalanced deposits and withdrawals have a small fee.   If fees were 0%, users could, for example, deposit in USDC and withdraw in USDT for free.

---

## **Rewards & Yield**

Liquidity providers are rewarded with 2 different types of yield:

* **Base vAPY**: This is how much the LP token value is increasing due to accruing pool fees.
* **Rewards tAPR**: These are CRV inflation rewards, other token incentives, and points. Staking LP tokens is required to earn CRV and other token rewards, which accrue through the pool's gauge. Points programs are project-specific; many don't require LP token staking. Refer to each project's point program for the most accurate information.

![Rewards](../images/pools/rewards.png){: .centered style="width: 70%;" }

Some pools contain yield-bearing tokens, such as sUSDe and sDAI. These tokens generate additional yield within themselves, separate from the pool's operations.