<h1>Loan Health</h1>

The health of a loan indicates how well-collateralized it is and essentially shows how much of your collateral value can be decreased until a loan is fully liquidated.

The **health** of a loan is the most important—and ultimately the only—factor to monitor when it comes to liquidations. Once a loan’s health reaches **0%**, it becomes subject to **hard liquidation**. This results in the loan being closed and the collateral being removed. The borrower retains full control over the assets originally borrowed.

---

## **Out of Liquidation**

When a loan is not in liquidation, health can still decline due to two main factors:

- **Collateral price decrease:** A drop in the price of the collateral reduces loan health. The larger the decrease, the lower the health.
- **Interest (borrow) rate:** Interest accrues on the borrowed amount over time, gradually increasing the total debt and lowering loan health.

Conversely, if the price of the collateral increases, loan health improves.

---

## **In Liquidation**

Once a loan enters liquidation, loan health can no longer increase—it becomes strictly **down only** from that point onward. During this phase, the position is subject to **unpredictable losses** resulting from the ongoing rebalancing between the collateral asset and crvUSD.

These losses gradually reduce the loan’s health and are influenced by several external factors, including:

- **Loan configuration:** Parameters such as the number of bands and the loan’s position within the liquidation range affect how efficiently rebalancing occurs.
- **Collateral liquidity:** Illiquid assets are more prone to losses due to wider price spreads and less efficient arbitrage.
- **Market volatility:** Sudden or unpredictable price movements increase slippage and reduce the efficiency of liquidation mechanisms.
- **Other market dynamics**

Because loan health cannot recover while in liquidation, proactive monitoring and early adjustments—**before** entering the liquidation range—are critical to avoiding a **hard liquidation**.

---

## **Observing Loan Health**

While Curve’s unique liquidation mechanism offers greater flexibility and safety compared to other protocols, it is still crucial to monitor the health of a loan. **Positions can be fully liquidated once health reaches 0%.** To avoid this outcome, it is highly recommended to monitor loan status regularly and take action when needed.

To simplify this process, a dedicated [Telegram Bot](https://news.curve.fi/llamalend-telegram-bot/) has been developed to continuously track and monitor loan positions. Its features include:

- **Multi-Address Monitoring:** Track multiple wallet addresses simultaneously.
- **Cross-Chain Coverage:** Monitor positions across Ethereum, Arbitrum, Fraxtal, and Optimism.
- **Automated Health Checks:** Perform regular position checks every 5–10 minutes.
- **Prompt Alerts:** Receive notifications when a loan enters liquidation protection (soft-liquidation) or becomes eligible for liquidation (hard-liquidation).
- **On-Demand Information:** Access current on-chain data for monitored positions.

<figure markdown="span">
  ![](../images/crvusd/education/health/monitor-bot.png){ width="500" }
  <figcaption>Check out this article for more information on how to set up the Telegram Bot: https://news.curve.fi/llamalend-telegram-bot/</figcaption>
</figure>