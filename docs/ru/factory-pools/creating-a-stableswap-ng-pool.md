<h1>Creating a Stableswap-NG pool</h1>

The Stableswap pool creation is appropriate for assets expected to hold a price peg very close to each other, like a pair of dollarcoins. The creation wizard will guide you through the process of creating a pool, but if you have questions throughout you are encouraged to speak with a member of the Curve team in the [**Telegram**](https://t.me/curvefi) or [**Discord**](https://discord.gg/rgrfS7W).

Stableswap pools are liquidity pools containing **up to eight tokens** using the StableSwap algorithm (Curve V1). For a better understanding of Curve V1, please see here: [**Understanding Curve V1**](../base-features/understanding-curve.md).


!!!info "Stableswap-NG"
    StableSwap-NG is an improved and refined version of the first StableSwap implementation. It is highly gas optimized and also includes dynamic fees which increases as liquidity utilization increases.


---


## **Tokens in Pool**

The token selection tab can be used to select **between two and eight tokens**. A token can be selected by searching for the symbol of any token that is already being used on Curve, or by pasting the pool's address. Additional tokens can be added through the blue **`Add token`** button.

When creating a metapool, only two tokens can be selected. One is the LP token, and the other is the token to pair against it.

!!!warning
    - **`ERC20:`** Users are advised to do careful due diligence on ERC20 tokens that they interact with, as this contract **cannot differentiate between harmless and malicious** ERC20 tokens.
    - **`Oracle:`** When using tokens with oracles, it is important to know that they **may be controlled externally by an EOA**.
    - **`Rebasing:`** Users and integrators are advised to understand how the AMM contract works with rebasing balances.
    - **`ERC4626:`** Some ERC4626 implementations **may be susceptible to Donation/Inflation attacks**. Users are advised to proceed with caution.


---


*For the AMM to function correctly, the appropriate asset type needs to be chosen when selecting the assets. The following asset types are supported:*

### **Standard ERC-20**

Standard ERC-20 tokens do not need any additional configuration.

<figure markdown="span">
  ![](../images/pool_creation/ss_erc20_dark.png#only-dark){ width="400" }
  ![](../images/pool_creation/ss_erc20_light.png#only-light){ width="400" }
  <figcaption></figcaption>
</figure>



### **Tokens with Oracles**

!!!warning "Oracle Precision"
    The precision of the rate oracle **must be $10^{18}$**. Otherwise, the liquidity pool will not function correctly, as the exchange rate will be broken.

Some tokens might require an external rate oracle to ensure correct calculations within the AMM. This is especially useful for tokens with rates against their underlying tokens, such as rETH against ETH. In this case, when selecting a token with an oracle, the corresponding box needs to be ticked, and an extra section for the contract address and oracle price method will appear. Some tokens might source their price oracle from a contract other than the token contract.

<figure markdown="span">
  ![](../images/pool_creation/ss_oracle_dark.png#only-dark){ width="400" }
  ![](../images/pool_creation/ss_oracle_light.png#only-light){ width="400" }
  <figcaption></figcaption>
</figure>



### **Rebasing Tokens**

Rebasing tokens in crypto are cryptocurrencies that automatically adjust their supply periodically based on a predetermined algorithm, typically to maintain a stable value or peg to another asset. 

<figure markdown="span">
  ![](../images/pool_creation/ss_rebasing_dark.png#only-dark){ width="400" }
  ![](../images/pool_creation/ss_rebasing_light.png#only-light){ width="400" }
  <figcaption></figcaption>
</figure>



### **ERC-4626**

ERC-4626 is a standard designed to optimize and unify the technical parameters of yield-bearing vaults. It provides a standard API for tokenized yield-bearing vaults that represent shares of a single underlying ERC-20 token. When using these kinds of tokens, the pool calculates the underlying amount as if the underlying tokens were in the pool.

<figure markdown="span">
  ![](../images/pool_creation/ss_erc4626_dark.png#only-dark){ width="400" }
  ![](../images/pool_creation/ss_erc4626_light.png#only-light){ width="400" }
  <figcaption></figcaption>
</figure>


---


## **Parameters**

*Stableswap-NG offers three different default Pool Parameter Presets:*

<figure markdown="span">
  ![](../images/pool_creation/ss_presets_dark.png#only-dark){ width="400" }
  ![](../images/pool_creation/ss_presets_light.png#only-light){ width="400" }
  <figcaption></figcaption>
</figure>


---


<figure markdown="span">
  ![](../images/pool_creation/ss_parameters_advanced_dark.png#only-dark){ width="400" }
  ![](../images/pool_creation/ss_parameters_advanced_light.png#only-light){ width="400" }
  <figcaption></figcaption>
</figure>


- **`Swap Fee ranging from 0% to 1%`**: The swap fee charged during transactions.
- **`A ranging from 1 to 5,000`**: `A` is an amplification coefficient, which defines the pool's liquidity depth. The higher the value of `A`, the deeper the liquidity.
- **`Offpeg Fee Multiplier from 0 to 12.5`**: A multiplier that adjusts the Swap Fee based on the pool's state.
- **`Moving Average Time ranging from 60 to 3600 seconds`**: The moving average time window for the built-in oracle.


!!!info "`Offpeg Fee Multiplier`"

    Stableswap-NG introduces a **dynamic fee**. The use of the `Offpeg Fee Multiplier` allows the system to dynamically adjust the fee based on the pool's state.

    A tool to play around with the dynamic fee: [https://www.desmos.com/calculator/zhrwbvcipo?](https://www.desmos.com/calculator/zhrwbvcipo?)


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
  ![](../images/pool_creation/ss_summary_dark.png#only-dark){ width="300" }
  ![](../images/pool_creation/ss_summary_light.png#only-light){ width="300" }
  <figcaption></figcaption>
</figure>

After deployment, make sure to seed initial liquidity and potentially [**create a gauge**](../reward-gauges/creating-a-pool-gauge.md).