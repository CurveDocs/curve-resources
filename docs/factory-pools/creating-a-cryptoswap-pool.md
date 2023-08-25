# Creating a Cryptoswap Pool

The v2 Curve Factory supports pools of assets with volatile prices, with no expectation of price stability.

[Understanding Curve v2](/base-features/understanding-crypto-pools)

## Creating a Pool

The factory can be used to create a pool between any two or three ERC20 tokens. Based on trading activity in the pool, the v2 pools update an internal price oracle that the pool uses to rebalance itself.

If the pool is using [wrapped Ethereum](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2) as one of the two assets, the pool will also support depositing either raw ETH or wrapped Ethereum.

## Tokens in Pool

The token selection tab can be used to select up to three tokens.

<figure markdown>
  ![](../images/trifactory_1.png){ width="700" }
  <figcaption></figcaption>
</figure>

The order of the tokens can matter for the performance of the AMM. Make sure to select the token with the higher price is first. If the tokens are supported by CoinGecko, you can see the "Initial Price" under the **Pool Setup** panel, choose the token order to maximize this value.

On Ethereum at the top of the token selection popup you can see any Curve basepools suggested up top. These allow you to create a [metapool](/lp/base-and-metapools), where the other asset can trade with any of the underlying basepool assets.

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FzA1s58lMlKYtYHwiHG6m%2Fimage.png?alt=media&token=72702952-9cbc-4b0c-b842-cbc8545593d9)

You can search by name for any token already added to Curve, or paste a token address

## Pool Presets

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2F24DrjmNDNVG7XyIcvYVS%2FScreenshot%202023-03-05%20at%203.48.30%20AM.png?alt=media&token=8e869851-cd1a-42d8-86d1-731722fdfdd1)

<figure markdown>
  ![](../images/tri2.png){ width="700" }
  <figcaption></figcaption>
</figure>

The "Pool Presets" tab provides scenarios that prepopulate appropriate parameters for users who are unfamiliar with advanced aspects of Curve pools. Some examples:

*   **Crypto:** Used volatile pairings for tokens which are likely to deviate heavily in price
    

*   **Forex:** Pairings that have low volatility
    

*   **Liquid Staking Derivatives:** Similar to [$cbETH](https://curve.fi/#/ethereum/pools/factory-crypto-91/deposit) and [$rETH](https://curve.fi/#/ethereum/pools/factory-crypto-210/deposit) which handle Ethereum LSDs

*   **Tricrypto:** Suitable for pools containing a USD stablecoin, BTC stablecoin and ETH.
    

*   **Three Coin Volatile:** Suitable for pools containing a volatile token which is paired against ETH and USD stablecoins.
    

## Parameters

On the parameters tab you can review and adjust the defaults populated by your selection on the "pool presets" tab. Crypto v2 pools contain a lot of parameters. If you are uncertain of which parameters to use, you may want to ask for help in any Curve channel before deploying. Some parameters can be tuned after the fact.

<figure markdown>
  ![](../images/tri3.png){ width="700" }
  <figcaption></figcaption>
</figure>

The basic parameters include the fees charged to users who interact with the pool. This is divided dynamically into a "Mid fee" and "Out fee" parameter, which represent the minimum and maximum fee during periods of low and high volatility.

*   **Mid Fee:** \[.005% to 1%\] Percentage. Fee when the pool is maximally balanced. This is the minimum fee. The fee is calculated as `mid_fee * f + out_fee * (10^18 - f)`
*   **Out Fee:** \[Mid Fee to 1%\] Fee when the pool is imbalanced. Must be larger than the Mid Fee and represents the maximum fee.
    
The initial prices fetch current prices from Coingecko to set the initial liquidity concentration. If your tokens do not exist on Coingecko you will need to populate these values manually, otherwise they will be filled automatically.

The Advanced toggle allows you to adjust several of the other parameters under the hood.

*   **Amplification Parameter (A):** \[4,000 to 4,000,000,000\] Larger values of A make the curve better resemble a straight line in the center (when pool is near balance). Highly volatile assets should use a lower value, while assets that are closer together may be best with a higher value.
*   **Gamma:** \[.00000001 to .02\] The gamma parameter can further adjust the shape of the curve. Default values recommend .000145 for volatile assets and .0001 for less volatile assets.
*   **Allowed Extra Profit:** \[0 to .01\] As the pool takes profit, the allowed extra profit parameter allows for greater values. Recommended 0.000002 for volatile assets and 0.00000001 for less volatile assets.
*   **Fee Gamma:** \[0 to 1\] Adjusts how fast the fee increases from Mid Fee to Out Fee. Lower values cause fees to increase faster with imbalance. Recommended value of .0023 for volatile assets and .005 for less volatile assets.
*   **Adjustment Step:** \[0 to 1\] As the pool rebalances, it will must do so in units larger than the adjustment step size. Volatile assets are suggested to use larger values (0.000146), while less volatile assets do not move as frequently and may use smaller step sizes (default 0.0000055)
*   **Moving Average Time:** \[0 to 604,800\] In seconds -- the price oracle uses an exponential moving average to dampen the effect of changes. This parameter adjusts the half life used.
    

A more thorough reader on the parameters [can be found here](https://nagaking.substack.com/p/deep-dive-curve-v2-parameters?s=curve). You can [use this interactive tool](https://www.desmos.com/calculator/vbhbicc7mw) to see how some of the parameters interact.

After deployment, make sure to seed initial liquidity and [create a gauge](/factory-pools/creating-a-factory-pool) just like [regular factory pools](/factory-pools/creating-a-factory-pool).

[Creating a Pool Gauge](/reward-gauges/creating-a-pool-gauge)
