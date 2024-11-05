<h1>Creating a Tricrypto-NG Pool</h1>

A tricrypto-NG pool is a liquidity pool containing three volatile assets using the CryptoSwap algorithm (Curve V2). For a better understanding of Curve v2, please see here: [**Understanding Curve v2**](../base-features/understanding-crypto-pools.md).

Due to safety reasons, the use of plain ETH is no longer possible. Instead, [wrapped ETH (wETH)](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2) needs to be used.


---


*The following documentation will present a rundown of the process of creating such a pool using the [Pool Creation Interface](https://curve.fi/#/ethereum/create-pool):*

## **Tokens in Pool**

In the token selection tab, three tokens can be chosen. By default, the UI allows a user to select two tokens, but clicking on the blue `Add token` button will extend the token selection by one more token.

<figure markdown="span">
  ![](../images/pool_creation/tri_tokens_dark.png#only-dark){ width="400" }
  ![](../images/pool_creation/tri_tokens_light.png#only-light){ width="400" }
  <figcaption></figcaption>
</figure>


---


## **Parameters**

*The UI provides two presets for parameter values:*

<figure markdown="span">
  ![](../images/pool_creation/tri_presets_dark.png#only-dark){ width="300" }
  ![](../images/pool_creation/tri_presets_light.png#only-light){ width="300" }
  <figcaption></figcaption>
</figure>



- **`Tricrypto`:** Suitable for pools containing a USD stablecoin, BTC (e.g., tBTC or wBTC), and ETH.
- **`Three Coin Volatile`:** Suitable for pools containing a volatile token paired with ETH and USD stablecoins.

    
---


On the parameters tab, you can review and adjust the predefined parameters from the preset. Crypto v2 pools contain many parameters. If you are uncertain which parameters to use, you may want to ask for help in any Curve channel before deploying.

<figure markdown="span">
  ![](../images/pool_creation/tri_parameters_dark.png#only-dark){ width="400" }
  ![](../images/pool_creation/tri_parameters_light.png#only-light){ width="400" }
  <figcaption></figcaption>
</figure>

The basic parameters include the fees charged to users who interact with the pool. This is divided dynamically into a `Mid fee` and `Out fee` parameter, which represent the minimum and maximum fees during periods of low and high volatility.

- **`Mid Fee ranging from 0.005% to 3%`**: This is the minimum fee and is charged when the pool is perfectly balanced.
- **`Out Fee ranging from 0.01% to 3%`**: This is the maximum fee and is charged when the pool is completely out of balance.

In CryptoSwap pools, the liquidity is concentrated. These initial liquidity concentration prices are fetched from [CoinGecko](https://www.coingecko.com/). If the tokens do not exist there or for some reason cannot be fetched, the user must set these values manually.



---

*The Advanced toggle allows you to adjust several other parameters under the hood.*

!!!tip
    A great article on understanding parameters can be found here: [https://nagaking.substack.com/p/deep-dive-curve-v2-parameters?s=curve](https://nagaking.substack.com/p/deep-dive-curve-v2-parameters?s=curve).

<figure markdown="span">
  ![](../images/pool_creation/tri_parameters_advanced_dark.png#only-dark){ width="400" }
  ![](../images/pool_creation/tri_parameters_advanced_light.png#only-light){ width="400" }
  <figcaption></figcaption>
</figure>

- **`Amplification Parameter (A) ranging from 4,000 to 400,000,000`**: Larger values of A make the curve better resemble a straight line in the center (when the pool is near balance). Highly volatile assets should use a lower value, while assets that are closer together may be best with a higher value.
- **`Gamma ranging from 0.00000001 to 0.002`**: The gamma parameter can further adjust the shape of the curve. Default values recommend 0.000145 for volatile assets and 0.0001 for less volatile assets.
- **`Allowed Extra Profit ranging from 0 to 0.01`**: As the pool takes profit, the allowed extra profit parameter allows for greater values. Recommended 0.000002 for volatile assets and 0.00000001 for less volatile assets.
- **`Fee Gamma ranging from 0 to 1`**: Adjusts how fast the fee increases from Mid Fee to Out Fee. Lower values cause fees to increase faster with imbalance. Recommended value of 0.0023 for volatile assets and 0.005 for less volatile assets.
- **`Adjustment Step ranging from 0 to 1`**: As the pool rebalances, it must do so in units larger than the adjustment step size. Volatile assets are suggested to use larger values (0.000146), while less volatile assets do not move as frequently and may use smaller step sizes (default 0.0000055).
- **`Moving Average Time ranging from 0 to 604,800 seconds`**: The price oracle uses an exponential moving average to dampen the effect of changes. This parameter adjusts the half-life used.


---


## **Pool Info**

Finally, after setting all the parameters, a **`Pool Name`** and **`Pool Symbol`** can be chosen:

<figure markdown="span">
  ![](../images/pool_creation/ss_info_dark.png#only-dark){ width="400" }
  ![](../images/pool_creation/ss_info_light.png#only-light){ width="400" }
  <figcaption></figcaption>
</figure>


---


## **Deploying the Pool**

On the right-hand side, there is a tab that summarizes all the tokens, parameters, and information. The pool can finally be deployed by pressing the blue **`Create Pool`** button at the bottom.

<figure markdown="span">
  ![](../images/pool_creation/tri_summary_dark.png#only-dark){ width="300" }
  ![](../images/pool_creation/tri_summary_light.png#only-light){ width="300" }
  <figcaption></figcaption>
</figure>

After deployment, make sure to seed initial liquidity and [**create a gauge**](../reward-gauges/creating-a-pool-gauge.md).
