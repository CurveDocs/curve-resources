<h1>Depositing into a Cryptoswap Pool</h1>

Cryptoswap pools contain two or three volatile assets and are designed to offer deep liquidity for a wide variety of assets with different levels of volatility.  Cryptoswap pools always have the TVL split evenly between the assets in the pool, e.g. for a USDT/ETH/BTC Cryptoswap pool with USD$3M TVL, there will be approx. USD$1M USDT, USD$1M ETH, USD$1M BTC in the pool.  Because of this, only deposit into pools if you are comfortable holding all assets within the pool.

[Learn more about Cryptoswap pools](./overview.md)

*This guide will use the [TriCRV pool](https://curve.fi/#/ethereum/pools/factory-tricrypto-4/deposit), to show you how to deposit and start earning rewards.*

There are two steps to this process, **`depositing`** (depositing assets and receiving LP tokens), and `staking` (depositing the LP tokens to the [rewards gauge](../reward-gauges/overview.md) to receive rewards such as CRV tokens).  These steps are described below, but can be done together in a single **`Deposit and Stake`** transaction.

---

## **Depositing**

Visit the deposit page ([https://curve.fi/#/ethereum/pools/factory-tricrypto-4/deposit](https://curve.fi/#/ethereum/pools/factory-tricrypto-4/deposit)). You will need at least one of the three tokens in the pool to deposit. The TriCRV pool consists of CRV, crvUSD, and ETH.

<figure markdown>
  ![](../images/tricrv_deposit.png){ width="300" }
  <figcaption></figcaption>
</figure>

First, it's important to understand that you don't have to deposit all coins, you can deposit one or several of the coins in the pool and it won't affect your returns. Cryptoswap pools have a re-balancing mechanism so as asset prices change, assets are swapped to maintain equal value of assets in the pool.  As such, if the pool is slightly off balance, depositing the coin with the smallest share in the pool will result in a small positive price impact, giving the depositor slightly more pool tokens.

Second, once you deposit one coin, **it gets split over the three different coins in the pool which means you now have exposure to all of them**. The first checkbox (Add all coins in a balanced proportion) allows you to deposit all three coins in the same proportion they currently are in the pool, resulting in no price impact.

The second checkbox (Deposit Wrapped) allows users to deposit wrapped ETH instead of plain ETH.

Once you choose the amount of assets and click `deposit` you will be asked to approve the Curve Finance contract, this is followed by a deposit transaction which will deposit your assets into the pool. This transaction can be expensive so you ideally want to wait for gas to be fairly cheap if this will impact the size of your deposit.

In the deposit transaction your assets will be swapped for Liquidity provider (LP tokens) representing your assets in the pool.  To later withdraw, LP tokens are returned to the pool, and the pool sends back your share of the pool assets.

You start earning pool fees as soon as you are deposited, but to earn any asset based rewards such as CRV, you must `Stake` your LP tokens in the pool's [rewards gauge](../reward-gauges/overview.md).

---

## **Staking**

Curve was designed to be modular, flexible and secure, because of this, you don't start earning CRV and other asset rewards as soon as you own LP tokens.  This functionality was created in a separate smart contract called a [rewards gauge](../reward-gauges/overview.md).  Each pool will have their own unique gauge, to earn token based rewards such as CRV, etc, users with LP tokens must stake their LP tokens in this rewards gauge.

To stake, click on the `Stake` tab at the top of the depositing page.  Select the amount of LP tokens to stake (for most users this should just be the maximum amount), and click the `Stake` blue button at the bottom of the screen, confirming the transaction in the wallet of your choice.  Once this transaction is confirmed, you will start earning any asset based available rewards, such as CRV.

---

## **Depositing and Staking together**

Depositing and Staking can be done together in a single set of transactions.  To do so simply click the `Deposit & Stake` tab at the top of the deposit page.  Input the assets you would like to deposit, and approve the neccessary transactions in your wallet of choice.  This will deposit your chosen assets into the pool, then stake all received LP tokens in the pool's reward gauge.  

---

**Once you are deposited and staked, all that's left to do is wait for your trading fees and other rewards to accrue.**

*You can click the link below to learn how to boost your CRV rewards by locking CRV on the Curve DAO:*

- [Boosting your CRV Rewards](../reward-gauges/boosting-your-crv-rewards.md)
- [Locking your CRV](../vecrv/locking-your-crv.md)