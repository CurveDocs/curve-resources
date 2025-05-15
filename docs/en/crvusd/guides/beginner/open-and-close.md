<h1>Creating a Loan</h1>

By borrowing on Curve, users can unlock **liquidity** against their crypto assets **without selling them**. They provide **blue-chip crypto assets** like **ETH or BTC** as collateral and borrow **crvUSD**, a fully **decentralized CDP stablecoin** in return.

As with other lending protocols, users must ensure that their **debt remains sufficiently collateralized**. If not, the loan becomes **subject to liquidation**.

What makes borrowing on Curve unique is that **there is no fixed collateralization price at which a loan is liquidated**. Instead, liquidation only occurs if the loan’s **health reaches 0%**. This design provides **greater flexibility and security**, potentially protecting loans **from sudden price crashes** that would otherwise trigger instant liquidation.

---

# **Connect Wallet**

To start borrowing, go to [Curve's crvUSD markets](https://curve.finance/crvusd/ethereum/markets/), then connect your wallet and select your wallet provider (e.g., Rabby or MetaMask).

<figure markdown="span">
  ![Image title](../../../images/crvusd/guides/open-close/connect_light.png#only-light){ width="500" }
  ![Image title](../../../images/crvusd/guides/open-close/connect_dark.png#only-dark){ width="500" }
  <figcaption></figcaption>
</figure>


---

# **Select a Market**

Once connected, explore the available crvUSD markets and choose your preferred collateral. Borrow rates are interconnected - only wstETH and sfrxETH have rates that are 2% higher - and they fluctuate together.

<figure markdown="span">
  ![Image title](../../../images/crvusd/guides/open-close/markets_light.png#only-light){ width="800" }
  ![Image title](../../../images/crvusd/guides/open-close/markets_dark.png#only-dark){ width="800" }
  <figcaption></figcaption>
</figure>

---

# **Specify Loan Parameters**

Simply **enter the amount of collateral** you want to use and choose **how much crvUSD to borrow**.

<figure markdown="span">
  ![Image title](../../../images/crvusd/guides/open-close/open_light.png#only-light){ width="400" }
  ![Image title](../../../images/crvusd/guides/open-close/open_dark.png#only-dark){ width="400" }
  <figcaption></figcaption>
</figure>

The UI shows you the health and borrow rate of your loan after the creation.

When borrowing on Curve, users are **not liquidated at a specific price or collateralization threshold**. Instead, **loans are only liquidated when their health reaches 0%**.

Each loan has a **liquidation range**, which is simply a **price range** for the collateral asset. The amount you choose to borrow determines **where your liquidation range starts**, and this is displayed as an **orange area** on the graph. Your loan enters this range when the **collateral price (blue line) falls within it**.

Once the price enters the liquidation range, **losses begin to accumulate**, further reducing the loan’s health. If the loan’s **health reaches 0%**, it will be **fully liquidated**.

<figure markdown="span">
  ![Image title](../../../images/crvusd/guides/open-close/liq_range_light.png#only-light){ width="700" }
  ![Image title](../../../images/crvusd/guides/open-close/liq_range_dark.png#only-dark){ width="700" }
  <figcaption></figcaption>
</figure>


!!!info "**Two Important Mentions**"
    - **Full liquidation does not occur at the bounds of the liquidation range.** A common misconception is that a loan is liquidated when it reaches the **upper or lower bound** of the liquidation range. This is **not true** - a loan is **only liquidated if its health reaches 0%**.
    - **A loan can still be fully liquidated even if the collateral price is increasing (in liquidation range).** Past experiences have shown that users were surprised to be **fully liquidated** (loan health reaching 0%) **even as the collateral price was rising within the liquidation range**. This can happen if **losses within the liquidation range exceed the health restored by the increasing collateral value**. To avoid this, it’s crucial to **maintain sufficient loan health** while in the liquidation range.

---

# **Approving and Creating Loan**

To complete the borrowing process, you need to **sign two transactions**.

First, you must approve the spending of your collateral. This allows the system to use your collateral as security for your loan.

<figure markdown="span">
  ![Image title](../../../images/crvusd/guides/open-close/approve_light.png#only-light){ width="350" }
  ![Image title](../../../images/crvusd/guides/open-close/approve_dark.png#only-dark){ width="350" }
  <figcaption></figcaption>
</figure>


Once the approval is complete, you can create your loan. Your collateral assets will be transferred out of your wallet and locked as security. In return, the borrowed crvUSD tokens will be deposited into your wallet, giving you full flexibility to use them however you choose.

<figure markdown="span">
  ![Image title](../../../images/crvusd/guides/open-close/create_light.png#only-light){ width="350" }
  ![Image title](../../../images/crvusd/guides/open-close/create_dark.png#only-dark){ width="350" }
  <figcaption></figcaption>
</figure>

---

# **Monitoring Your Loan Status**

After creating a loan, the UI will display key information about your position.

The UI provides critical loan details, including:

- **Health status & percentage** – A measure of how safe your loan is.
- **Liquidation range** – The price range where liquidation would start.
- **Collateral details** – The assets backing your loan.
- **LLAMMA Balances** - More about this in the advanced guide.

<figure markdown="span">
  ![Image title](../../../images/crvusd/guides/open-close/position_overview_light.png#only-light){ width="700" }
  ![Image title](../../../images/crvusd/guides/open-close/position_overview_dark.png#only-dark){ width="700" }
  <figcaption></figcaption>
</figure>


Since loans on Curve are **liquidated when health reaches 0%**, it’s crucial to **regularly monitor your loan’s health**. If the collateral price drops and your loan enters the **liquidation range**, health can start **declining rapidly** due to the extra losses in this range.

To mitigate this, consider **repaying some debt** or **adding more collateral** before your loan enters the liquidation range. This will **restore health** and simultaneously **push the liquidation range lower**, reducing your risk.

To track and monitor your position using a Telegram bot, check out this article: [Telegram Llamalend Bot](https://news.curve.finance/llamalend-telegram-bot/).

<figure markdown="span">
  ![https://news.curve.finance/llamalend-telegram-bot/](../../../images/crvusd/new/monitor_bot.png){ width="400" }
  <figcaption></figcaption>
</figure>

---

# **Closing Your Loan**

You can close your loan at any time by repaying the full debt. However, full repayment isn't required — you also have the option to repay partially. Learn more about partial repayments [here](./loan-management.md#re).

To fully close the loan, simply check the “Repay in full and close loan” option. This will repay your entire debt and automatically return your collateral to your wallet.

<figure markdown="span">
  ![Image title](../../../images/crvusd/guides/open-close/close_light.png#only-light){ width="400" }
  ![Image title](../../../images/crvusd/guides/open-close/close_dark.png#only-dark){ width="400" }
  <figcaption></figcaption>
</figure>