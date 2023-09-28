## **Plain v1 Pools**

A plain pool is the simplest and earliest implementation of Curve, where all assets in the pool are ordinary ERC-20 tokens pegged to the same price.

One of the [largest is TriPool](https://curve.fi/#/ethereum/pools/3pool/deposit), holding only the three biggest stable coins (USDC/USDT/DAI). It's a non-lending gas optimised pool similar to the sUSD one.

[Depositing into the Tri-Pool](/lp/depositing/depositing-into-the-tri-pool)

**In plain pools, your risks are as follow:**

*   Smart contract issues with Curve
*   Systemic issues with the stable coins in those pools
*   Systemic issues with Synthetix (for sUSD)
    
As you can see, risks are different which might make this pool a better choice for you depending on what your concerns in the cryptosphere are.

## **Lending Pools**

A small number of v1 pools are lending pools, which means you earn interest from lending as well as trading fees.

The [Compound pool](https://curve.fi/#/ethereum/pools/compound/deposit) is the first and oldest. The (c) you see above stands for cTokens which are Compound native tokens. This means your stable coins in the Compound pool would only be lent on the Compound protocol.

Another pool is [yPool](https://curve.fi/#/ethereum/pools/y/deposit) which are tokens for Yearn Finance, a yield aggregator. You might think that Compound doesn’t always have the best lending rates and you would be right and thus the yToken balances automatically rebalance your stable coin to the protocol(s) with the better rates (Compound, Aave and dYdX). It’s free and non-custodial (as is Curve) but it is also why the yPools are considered more risky as you use a series of protocols that could themselves have critical vulnerabilities.

Pools like [AAVE](https://curve.fi/#/ethereum/pools/aave/deposit) and [sAAVE](https://curve.fi/#/ethereum/pools/saave/deposit) also lend on AAVE v2. Lending pools are generally more expensive to interact with.

**In those pools, your risks are as follow:**

*   Smart contract issues with lending protocols
*   Smart contract issues with Curve
*   Smart contract issues with iEarn
*   Systemic issues with the stable coins in those pools
    
Whilst it’s important to not underplay risks associated with providing liquidity on Curve or DeFi in general, it’s worth noting that all the protocols mentioned above have existed for several months (or more for Compound or iEarn) meaning they have been extensively time tested and exploit attempts have been numerous.

## **MetaPools**

Metapools allow for one token to seemingly trade with another underlying base pool. This means we could create, for example, the [Gemini USD metapool](https://curve.fi/#/ethereum/pools/gusd/deposit): \[GUSD, \[3Pool\]\].

In this example users could seamlessly trade GUSD between the three coins in the 3Pool (DAI/USDC/USDT). This is helpful in multiple ways:

*   Prevents diluting existing pools
*   Allows Curve to list less liquid assets
*   More volume and more trading fees for the DAO
    
The Metapool in question would take GUSD and 3Pool LP tokens. This means that liquidity providers of the 3Pool **who do not provide liquidity in the GUSD Metapool are shielded from systemic risks from the Metapool.**

**Metapools** in the UI will have a [deposit wrapped](/lp/deposit-faqs#wrapped) option to deposit the 3pool token.
