<h1>What to Do During Liquidation</h1>

This section explains what steps you can take if your loan enters liquidation. If you're not familiar with how liquidation works or how it compares to other protocols, we recommend starting with this guide.

A loan enters the liquidation range when the value of the collateral falls within a specific price range—see the liquidation range for more details. Liquidation doesn’t occur at a fixed price; instead, it happens when your loan’s health reaches 0%. This is why it's crucial to regularly monitor your loan’s health and take action if it starts to decline.

If your loan is in liquidation, you have two main options:

- **Close your loan**: This stops further losses happening in liquidation. You can close your loan at any time and open a new one if desired.
- **Keep your loan open**: Staying within the liquidation range exposes your loan to increasing losses as its health percentage continues to drop. Keep a close eye on it to avoid complete liquidation.

---

# **Closing Your Loan**

When your loan enters liquidation (also known as the liquidation range), one way to manage your risk is to close the loan entirely. There are two ways to do this:

- **Repay your full debt:** This is the most straightforward option — you simply repay everything you owe. This can be done at any time, not just during liquidation, and will immediately close your loan. [See how to do that here.](./open-and-close.md#step-6-closing-your-loan)

- **Self-liquidate:** This option is only available while your loan is in the liquidation range. It allows you to close your position before your health reaches 0%, avoiding further liquidation losses *and* skipping the usual liquidation penalty.  
Self-liquidation is only possible if there’s enough crvUSD backing your loan. If it's available, the UI will show the option. [More details here.](todo)

---

# **Keeping Your Loan Open**

Keeping your loan open while it’s within the liquidation range exposes you to further losses. If your loan health reaches 0%, it will be fully liquidated.

If you choose to keep your position open, it's critical to monitor your loan health closely to avoid reaching 0%.

To help with monitoring, you can use the [Llamalend Telegram bot](https://news.curve.fi/llamalend-telegram-bot/) to track your loan health and receive alerts in real time.


<figure markdown="span">
  ![https://news.curve.fi/llamalend-telegram-bot/](../../../images/crvusd/new/monitor_bot.png){ width="400" }
  <figcaption></figcaption>
</figure>

