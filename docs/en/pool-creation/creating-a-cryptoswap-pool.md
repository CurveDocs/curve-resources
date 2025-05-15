<h1>Creating a Cryptoswap Pool</h1>

AA Cryptoswap pool (Curve V2) is a liquidity pool for two or three volatile assets that maintains equal value across all assets. For example, in an WETH/USDT pool with WETH at \$1,000, 10 WETH (\$10,000) would be balanced with 10,000 USDT.  See the [Pool overview](../pools/overview.md) for a simple explanation of CryptoSwap pools.

!!!warning "Warning"
    Due to safety reasons, plain ETH cannot be used in Cryptoswap pools. Instead, please use [wrapped ETH (WETH)](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)


---


*The following documentation will present a rundown of the process of creating such a pool using the [Pool Creation Interface](https://curve.finance/#/ethereum/create-pool):*

## **Tokens in Pool**

In the token selection tab, a default of two tokens are shown, to add a third token, click on the blue `Add token` button.

<figure markdown="span">
  ![](../images/pool_creation/two_tokens_dark.png#only-dark){ width="400" }
  ![](../images/pool_creation/two_tokens_light.png#only-light){ width="400" }
  <figcaption></figcaption>
</figure>

Once you have chosen your desired pool assets and pressed `Next`, the parameter selection screen will be shown.  The `parameter` screen will differ slightly based on whether two or three tokens were chosen.

## **Parameters**

The parameter presets you can choose differ based on whether two or three tokens are your pool.

### **Two Asset Pool Presets**

*In two asset pools, the UI provides four presets for parameter values:*

<figure markdown="span">
  ![](../images/pool_creation/two_presets_dark.png#only-dark){ width="300" }
  ![](../images/pool_creation/two_presets_light.png#only-light){ width="300" }
  <figcaption></figcaption>
</figure>

*The presets shown above are:*

- **`Crypto`:** Suitable for most volatile pairs such as LDO <> ETH
- **`Forex`:** Suitable for forex pairs with low relative volatility such as crvUSD <> EURe
- **`Liquidity Staking Derivatives`:** Suitable for liquid staking derivatives soft-pegged to its underlying asset such as wETH <> cbETH
- **`Liquid Restaking Tokens`:** Suitable for liquid restaking tokens such as WETH <> pufETH.

### **Three Asset Pool Presets**

*In three asset pools, the UI provides two presets for parameter values:*

<figure markdown="span">
  ![](../images/pool_creation/tri_presets_dark.png#only-dark){ width="300" }
  ![](../images/pool_creation/tri_presets_light.png#only-light){ width="300" }
  <figcaption></figcaption>
</figure>

*The presets shown above are:*

- **`Tricrypto`:** Suitable for pools containing a USD stablecoin, BTC (e.g., tBTC or wBTC), and ETH.
- **`Three Coin Volatile`:** Suitable for pools containing a volatile token paired with ETH and USD stablecoins.

### **Manual Parameter Configuration**

After choosing a preset, on the parameters tab, you can review and adjust the predefined parameters from the preset. Cryptoswap pools contain many parameters. If you are uncertain which parameters to use, you may want to ask for help in any Curve channel before deploying.

<figure markdown="span">
  ![](../images/pool_creation/two_parameters_dark.png#only-dark){ width="400" }
  ![](../images/pool_creation/two_parameters_light.png#only-light){ width="400" }
  <figcaption></figcaption>
</figure>

The basic parameters include the fees charged to users who interact with the pool. This is divided dynamically into a `Mid fee` and `Out fee` parameter, which represent the minimum and maximum fees during periods of low and high volatility.

- **`Mid Fee`**: This is the minimum fee and is charged when the pool is perfectly balanced.
- **`Out Fee`**: This is the maximum fee and is charged when the pool is completely out of balance.

In CryptoSwap pools, the liquidity is concentrated. These initial liquidity concentration prices are fetched from [CoinGecko](https://www.coingecko.com/). If the tokens do not exist there or for some reason cannot be fetched, the user must set these values manually.


### **Advanced Parameter Configuration**

*The Advanced toggle allows you to adjust several other parameters under the hood.*

!!!tip
    A great article on understanding parameters can be found here: [https://nagaking.substack.com/p/deep-dive-curve-v2-parameters?s=curve](https://nagaking.substack.com/p/deep-dive-curve-v2-parameters?s=curve).

<figure markdown="span">
  ![](../images/pool_creation/two_parameters_advanced_dark.png#only-dark){ width="400" }
  ![](../images/pool_creation/two_parameters_advanced_light.png#only-light){ width="400" }
  <figcaption></figcaption>
</figure>

- **`Amplification Parameter (A)`**: Larger values of A make the curve better resemble a straight line in the center (when the pool is near balance). Highly volatile assets should use a lower value, while assets that are closer together may be best with a higher value.
- **`Gamma`**: The gamma parameter can further adjust the shape of the curve. Default values recommend 0.000145 for volatile assets and 0.0001 for less volatile assets.
- **`Allowed Extra Profit`**: As the pool takes profit, the allowed extra profit parameter allows for greater values. Recommended 0.000002 for volatile assets and 0.00000001 for less volatile assets.
- **`Fee Gamma`**: Adjusts how fast the fee increases from Mid Fee to Out Fee. Lower values cause fees to increase faster with imbalance. Recommended value of 0.0023 for volatile assets and 0.005 for less volatile assets.
- **`Adjustment Step`**: As the pool rebalances, it must do so in units larger than the adjustment step size. Volatile assets are suggested to use larger values (0.000146), while less volatile assets do not move as frequently and may use smaller step sizes (default 0.0000055).
- **`Moving Average Time`**: The price oracle uses an exponential moving average to dampen the effect of changes. This parameter adjusts the half-life used.

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