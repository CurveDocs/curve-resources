<h1>Overview</h1>

crvUSD is Curve’s USD-pegged stablecoin that can be borrowed against a variety of battle-tested crypto collaterals. It operates as an overcollateralized CDP (Collateralized Debt Position) system.

What sets crvUSD apart is its unique liquidation mechanism, designed to make borrowing more flexible and user-friendly. Loans do not have a fixed liquidation price, but rather a **liquidation range**, which allows for more gradual risk management. [Learn more about how it works.](./liquidations.md)

---

## **Collaterals**

crvUSD can be minted against various crypto collaterals, but only those approved by governance. To ensure the protocol’s safety, governance selects secure and battle-tested assets as eligible collateral.

In theory, any asset could be used as collateral, but it must first pass a governance vote. Additionally, each collateral type has a cap on how much crvUSD can be minted against it — this limit is also set by governance.

Currently, crvUSD can be minted against the following collateral types:

<figure markdown="span">
    ![Image title](../images/crvusd/education/overview/light.png#only-light){ width="800" }
    ![Image title](../images/crvusd/education/overview/dark.png#only-dark){ width="800" }
<figcaption></figcaption>
</figure>

---

## **Minting crvUSD**

There is no fee for minting crvUSD, and no minimum borrow amount. Each market has its own maximum Loan-To-Value (LTV) ratio, determined by factors such as collateral volatility and liquidity conditions.

Borrowers pay a variable [borrow rate](borrow-rate.md), which adjusts based on the price of crvUSD. This rate is applied continuously (per second), gradually increasing the total debt over time.

---

## **Comparison to Other Protocols**

*soon*

---

## **Risks**

!!!danger "Please consider the following risk disclaimers when using the Curve Stablecoin infrastructure:"

    1. If your collateral enters soft-liquidation mode, you can't withdraw it or add more collateral to your position. Should the price of the collateral drop sharply over a short time interval, your position will get hard-liquidated, with no option of de-liquidation. Please choose your leverage wisely, as you would with any collateralized debt position.
        1. If your collateral enters soft-liquidation mode, you can't withdraw it or add more collateral to your position.
        2. Should the price of the collateral change drop sharply over a short time interval, it can result in large losses that may reduce your loan's health.
        3. If you are in soft-liquidation mode and the price of the collateral goes up sharply, this can result in de-liquidation losses on the way up. If your loan's health is low, value of collateral going up could potentially reduce your underwater loan's health.
        4. If the health of your loan drops to zero or below, your position will get hard-liquidated with no option of de-liquidation. Please choose your leverage wisely, as you would with any collateralized debt position.
    2. The crvUSD stablecoin and its infrastructure are currently in beta testing. As a result, investing in crvUSD carries high risk and could lead to partial or complete loss of your investment due to its experimental nature. You are responsible for understanding the associated risks of buying, selling, and using crvUSD and its infrastructure.
    3. The value of crvUSD can fluctuate due to stablecoin market volatility or rapid changes in the liquidity of the stablecoin.
    4. crvUSD is exclusively issued by smart contracts, without an intermediary. However, the parameters that ensure the proper operation of the crvUSD infrastructure are subject to updates approved by Curve DAO. Users must stay informed about any parameter changes in the stablecoin infrastructure.

---

## **Guides**

Want to learn how to use crvUSD step by step? Start with these guides:

- [Creating and closing a loan](./guides/beginner/open-and-close.md)
- [Loan Management](./guides/beginner/loan-management.md)
- [Loan Management in Liquidation](./guides/beginner/liquidation.md)
