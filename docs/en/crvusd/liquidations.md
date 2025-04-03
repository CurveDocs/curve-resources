<h1>Liquidations</h1>

Liquidations on Curve work differently from most other DeFi platforms. While most protocols liquidate a position instantly once it crosses a fixed price threshold, Curve introduces a more flexible mechanism called the **liquidation range**, where liquidation happens gradually.

Simply put: when a loan enters the liquidation range, losses start to occur. If a loan's health reaches 0%, the position is **fully liquidated**. Liquidation does not happen at a single price point — instead, it’s a process that unfolds over time as the collateral price moves within the liquidation range.

This system gives borrowers more time and more control compared to traditional liquidation methods.  
**Even if a loan briefly enters the liquidation range, it can potentially recover without being fully liquidated — avoiding the hard-liquidation penalties common on other platforms.**

!!!warning "Important"
    Because liquidations happen over a range — not at a fixed price — it's important for users to take action (or at least closely monitor their positions) as soon as a loan enters the liquidation range. A user can either repay or close the loan to prevent further losses. If loan health reaches 0%, the position will be hard-liquidated.

    Learn what actions users can take during liquidation: [**What to do in liquidation**](./guides/liquidation.md)

---

## **Liquidation Range**

The liquidation range is defined by two price points for the collateral asset: a high and a low. A loan enters the liquidation range when the collateral price drops into this range.

<figure markdown="span">
    ![Image title](../images/crvusd/education/liquidation/liq_range_light.png#only-light){ width="600" }
    ![Image title](../images/crvusd/education/liquidation/liq_range_dark.png#only-dark){ width="600" }
<figcaption>The liquidation range is between $1000 and $800. If the collateral price falls within this range, the loan enters the liquidation range.</figcaption>
</figure>

!!!question "How does it compare to other protocols?"
    In most lending protocols, a loan is liquidated immediately when the collateral price drops below a specific threshold. With crvUSD, the loan isn't liquidated all at once. Instead, it enters the liquidation range and begins accumulating losses gradually. This gives borrowers more time to react—for example, by repaying part of the loan or closing the position entirely. However, if the loan remains in the range for too long and its health reaches 0%, it will be fully liquidated.

---

## **Losses In Liquidation**

While a loan is within the liquidation range, the borrower will incur losses that reduce the total value of their collateral. These losses depend on several factors, including market volatility, liquidity conditions, and more. Because of this, it is not possible to precisely predict how much will be lost. This makes it especially important to monitor loan health closely when it approaches or enters the liquidation range.

Another key factor that influences the amount of potential losses is the number of **bands** selected when opening the loan. Learn more about bands and how to customize them when creating a loan [here](todo).

!!!question "Do losses always occur?"
    No. Losses occur **only** when a loan is within the liquidation range. As long as the loan remains outside this range, no losses are incurred, regardless of market conditions.

---

## **Liquidation Process**

When a loan enters the liquidation range, the system begins adjusting the collateral. As the price of the collateral drops, portions of it are gradually sold for crvUSD. This reduces risk by replacing part of the volatile asset with a stable one.

At that point, the loan is backed by a mix of the original collateral and crvUSD. If the price of the collateral increases again, the system automatically buys back some of the previously sold collateral using crvUSD.

This process can result in some losses (see above), but **it also allows the loan to potentially recover**. If the price rebounds and loan health remains above 0%, the borrower retains their position (minus some losses) — something that wouldn't be possible on other platforms where liquidation is instant and final.

---

## **How Does It Compare to Other Protocols?**

Most DeFi lending protocols use a hard-liquidation model. In these systems, if the value of the collateral falls below a specific price threshold (the liquidation price), the entire position is liquidated instantly. This often results in:

- Losing all collateral
- Paying a liquidation penalty
- Having no chance to recover the position if the market bounces back shortly after

Curve’s crvUSD takes a different approach with its liquidation system. **Here's how Curve is different:**

- **No fixed liquidation price:** Instead of a sharp liquidation threshold, Curve uses a liquidation range. A loan isn’t instantly liquidated when a specific price is hit—instead, the system gradually adjusts the position as the price moves within the range.

- **Gradual collateral adjustment:** As the price drops into the liquidation range, the collateral is partially converted into crvUSD (soft-liquidated). If the price goes back up, that crvUSD is used to buy back the original collateral — a process called de-liquidation.

- **The position stays open if health remains above 0%:** As long as loan health doesn’t reach 0%, the position remains active. This means temporary price dips can be absorbed without losing the collateral or paying a liquidation fee.

- **More time, more control:** This mechanism gives borrowers more time to manage their loans. They can repay debt, close the loan, or adjust their strategy before a full liquidation ever happens.
