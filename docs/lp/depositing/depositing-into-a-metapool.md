Metapools is a new concept to Curve Finance, it allows a single coin to be pooled with all the coins in another (base) pool without diluting its liquidity. Currently, the most common base pool is the 3Pool. It uses the three most liquid stable coins (USDT-USDC-DAI).

[Base & MetaPools](../../lp/pools.md)

## **Depositing**

Metapools offer several options for deposits. For example, in the [GUSD/3Pool](https://curve.fi/#/ethereum/pools/gusd/deposit) Metapool you can deposit the following:

*   GUSD
*   Any of the 3Pool (DAI-USDC-USDT)
*   3Pool LP token (3crv)

<figure markdown>
![](../../images/gusd1_deposit.png){ width="300" }
<figcaption></figcaption>
</figure>

When becoming a liquidity provider, you don't have to deposit all the coins, you can deposit one or several of the coins in the pool and it won't affect your returns. Depositing the coin with the smallest share in the pool will result in a small deposit bonus.

Second, once you deposit one stable coin, **it gets split over the four different coins in the pool which means you now have exposure to all of them**. The first checkbox (Add all coins in a balanced proportion) allows you to deposit all four coins in the same proportion they currently are in the pool, resulting in no slippage occurrence.

The **deposit wrapped** option lets you deposit the base pool token (usually 3Pool).

<figure markdown>
![](../../images/gusd_wrapped_deposit.png){ width="300" }
<figcaption></figcaption>
</figure>

When depositing coins into a metapool, and thus having exposure to a base pool token (e.g., 3CRV) and its paired token, you will earn at the rate of the metapool gauge. However, you'll receive trading fees from both the base and metapool.

## **Confirming and staking**

You will then be asked to approve the Curve Finance contract, follow by a deposit transaction which will wrap your stable coins and deposit them into the pool. This transaction can be expensive so you ideally want to wait for gas to be fairly cheap if this will impact the size of your deposit.

After depositing in the pool, you receive liquidity provider (LP) tokens. They represent your share of ownership in the pool and you will need them to stake for CRV.

After depositing, you will be prompted with a new transaction that will deposit your LP tokens in the DAO liquidity gauge. Confirming the transaction **will let you mine CRV.** This second transaction will only pop up if you deposited your tokens under the "Deposit and stake" tab. Otherwise it will just deposit the tokens in the pool.

If you already have LP tokens, you can also directly stake them into the gauge under the 'Stake' tab.

**Once that's done, you're providing liquidity and staking so all that's left to do is wait for your trading fees to accrue.**

*You can click the link below to learn how to boost your CRV rewards by locking CRV on the Curve DAO:*

- [Boosting your CRV Rewards](../../reward-gauges/boosting-your-crv-rewards.md)
- [Staking your $CRV](../../crv-token/locking-your-crv.md)
