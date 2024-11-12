<h1>Depositing into a Stableswap Pool</h1>

Stableswap pools contain two or more (up to eight) assets which should have prices very close to one another (e.g. a pool of USD stablecoins, or wrapped BTC variants).  Because their price for each asset should always be very close, the percentages of assets in the pool can change dramatically with only small price changes, e.g. for a USDT/crvUSD pool with USD$10M TVL, there may be USD$1M crvUSD, and USD$9M USDT, but swapping 1 crvUSD will give 1.001 USDT.  Because of this, only deposit into pools if you are comfortable holding all assets within the pool.

[Learn more about Stableswap pools](./overview.md)

*This guide will use the [USDC/USDT/DAI pool](https://curve.fi/#/ethereum/pools/3pool/deposit) (also called 3Pool or 3CRV pool), to show you how to deposit and start earning rewards.  You can also watch the video below:*

<iframe width="560" height="315" src="https://www.youtube.com/embed/OsRrGij9Ou8?si=zglQ5gl1J9LkbLPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

There are two steps to this process, **`depositing`** (depositing assets and receiving LP tokens), and `staking` (depositing the LP tokens to the [rewards gauge](../reward-gauges/overview.md) to receive rewards such as CRV tokens).  These steps are described below, but can be done together in a single **`Deposit and Stake`** transaction.

---

## **Depositing**

Visit the deposit page ([https://curve.fi/#/ethereum/pools/3pool/deposit](https://curve.fi/#/ethereum/pools/3pool/deposit)). You will need at least one of the three tokens in the pool to deposit. The 3Pool pool consists of USDT, USDC, and DAI.

<figure markdown>
  ![](../images/3crv_deposit.png){ width="300" }
  <figcaption></figcaption>
</figure>

First, it's important to understand that you don't have to deposit all coins, you can deposit one or several of the coins in the pool, and you also may get a 'bonus' for doing so.  When you deposit into a Stableswap pool, your assets are added to the pool and you receive LP tokens representing your share of all assets within the pool.  Because of this, if you deposit more of the asset with lower liquidity in the pool, you will help re-balance the pool, and receive a small 'bonus' in LP tokens because you sold the higher priced asset into the pool, and bought the lower priced asset for cheaper than you deem it to be worth.

So, once you deposit one coin, **it gets split into a share of the different coins in the pool**. The first checkbox (Add all coins in a balanced proportion) allows you to deposit all three coins in the same proportion they currently are in the pool, resulting in no price impact.

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