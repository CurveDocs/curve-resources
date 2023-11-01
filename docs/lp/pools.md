# **Curve Pool Architecture**

Curve introduces a system of base- and metapools.

The basepool/metapool mechanism is currently only available for the stableswap pools with one exception: Curve on Polygon has an [atricrypto3](https://curve.fi/#/polygon/pools/atricrypto3/deposit) basepool, which was - for instance - paired with CRV, creating a [CRV/TRICRYPTO](https://curve.fi/#/polygon/pools/factory-crypto-1/deposit) metapool. 

Other than some pools on Polygon, all base pools and metapools are pure stableswap pools.

!!!danger "Risk"
    Pools are exposed to various risk factors depending on the type of pool and the coins they contain. Before using Curve pools, please make sure to check these out. The [Curve UI](https://curve.fi/) displays an overview of the associated risks with the pool at the bottom of the pool page when clicking the following button:
    <figure markdown>
    ![](../images/pool_risk_1.png){ width="700" }
    <figcaption></figcaption>
    </figure>



## **Base Pool**
Basepools were first introduced by Curve Finance. A "basepool" is a primary liquidity pool upon which other pools can build. Instead of interacting directly with the underlying assets, these secondary pools interface with the basepool. This design promotes capital efficiency and provides users with additional liquidity provision options. Moreover, the interconnected design of this system enables secondary pools to access the deep liquidity available in basepools. Basepools are also plain pools but with the added "basepool feature".

The first basepool introduced was the [Threepool](https://curve.fi/#/ethereum/pools/3pool/deposit), consisting of DAI, USDC, and USDT. When another token is paired with a basepool, it is called a metapool.

!!!note
    Not every pool is or can be a basepool. Adding a new one to the system requires a successfully passed DAO vote.


## **Meta Pools**
Metapools allow one token to seamlessly trade with another underlying base pool. This means we could create, for example, the [Gemini USD metapool](https://curve.fi/#/ethereum/pools/gusd/deposit).

In this example, users could seamlessly trade GUSD between the three coins in the 3Pool (DAI/USDC/USDT). This is beneficial in several ways:

*   Prevents diluting existing pools
*   Allows Curve to list less liquid assets
*   More volume and more trading fees for the DAO
    
The Metapool in question would take GUSD and 3Pool LP tokens. This means that liquidity providers of the 3Pool **who do not provide liquidity in the GUSD Metapool are shielded from systemic risks from the Metapool.**

**Metapools** in the UI will have a [deposit wrapped](/lp/deposit-faqs#wrapped) option to deposit the 3pool token.


# **StableSwap Pools**

Stableswap pools utilize the stableswap invariant within liquidity pools. For a better understanding of how it works, see [Understanding Curve (v1)](https://resources.curve.fi/base-features/understanding-curve/) or read the [whitepaper](https://docs.curve.fi/pdf/stableswap-paper.pdf).



## **Plain Pools**
A plain pool is the simplest and earliest implementation of Curve, where all assets in the pool are ordinary ERC-20 tokens pegged to the same price.

One of the [largest is TriPool](https://curve.fi/#/ethereum/pools/3pool/deposit), holding only the three biggest stable coins (USDC/USDT/DAI). It's a non-lending gas optimised pool similar to the sUSD one.

[Depositing into the Tri-Pool](../lp/depositing/depositing-into-the-tri-pool.md).


## **Lending Pools**
A small number of v1 pools are lending pools, which means you earn interest from lending as well as trading fees.

The [Compound pool](https://curve.fi/#/ethereum/pools/compound/deposit) is the first and oldest. The (c) you see above stands for cTokens which are Compound native tokens. This means your stable coins in the Compound pool would only be lent on the Compound protocol.

Pools like [AAVE](https://curve.fi/#/ethereum/pools/aave/deposit) and [sAAVE](https://curve.fi/#/ethereum/pools/saave/deposit) also lend on AAVE v2. Lending pools are generally more expensive to interact with.



# **StableSwap New-Generation**

StableSwap-NG is a new implementation of the stableswap invariant design. It offers several improvements over previous pools, such as dynamic fees or support for rebasing tokens, tokens with oracles, or ERC-4626. These improvements work for plain pools as well as metapools. For more technical documentation, see [here](https://docs.curve.fi/stableswap-ng_exchange/pools/overview/).


## **Standard ERC-20 Pool**
This is the most basic of stableswap pools, consisting of standard ERC-20 tokens.


## **Pools with Oracles**
These pools support tokens with rate oracles, such as wstETH.

!!!note "Note"
    Oracles might be controlled externally by an EOA. Users are advised to proceed with caution.


## **Rebasing Assets**
This pool type supports rebasing assets like stETH.

!!!warning "Rebasing Tokens"
    Pools including rebasing tokens function slightly differently from others. The pool ensures that liquidity providers retain all rebases.


## **ERC-4626 Assets**
ERC-4626 is a standard to optimize and unify the technical parameters of yield-bearing vaults. It provides a standard API for tokenized yield-bearing vaults representing shares of a single underlying ERC-20 token. ERC-4626 also outlines an optional extension for tokenized vaults utilizing ERC-20, offering basic functionality for depositing, withdrawing tokens, and reading balances.

These pools contain tokens such as sDAI, which has a `convertToAssets` method.



# **Crypto Pools**
Crypto pools are pools that use a different market-making algorithm than the stableswap pools. For a better understanding of how pools with volatile assets work, see [Understanding CryptoPools (v2)](https://resources.curve.fi/base-features/understanding-curve/) or read the [whitepaper](https://docs.curve.fi/pdf/crypto-pools-paper.pdf).

Cryptoswap pools are pools that contain two volatile tokens.

An example for this kind of pool is the [CVX<>ETH](https://curve.fi/#/ethereum/pools/cvxeth/deposit) pool.


## **Tricrypto Pools**
Tricrypto pools are pools which contain three volatile tokens.

There is also a new cryptoswap implementation, comparable to stableswap-ng, called Tricrypto-NG. These pools consist of three volatile assets and have several improvements, such as gas efficiency, compared to the prior version. 

An example for this kind of tricrypto-ng pool is the [TricryptoUSDT](https://curve.fi/#/ethereum/pools/factory-tricrypto-1/deposit) pool.