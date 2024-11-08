<h1>Curve Lending: FAQ</h1>


## **General**

### What's the difference between minting crvUSD and lending markets?

*Lending markets work very similarly to the markets for minting crvUSD. Here are the major differences:*

- Lending markets are permissionless; **any assets in combination with crvUSD can be used**. This means users can borrow against tokens like CRV, LRT's, etc. You name it. The only requirement is a **proper oracle[^1]**. Although, before creating a lending market, proper parameters should be simulated.
- The **interest rate of lending markets solely depends on the utilization of the supplied assets**, unlike for minting markets which depend on various factors such as crvUSD price, pegkeeper debt, and other parameters.

[^1]: New Curve pools such as stableswap-ng, twocrypto-ng, or tricrypto-ng provide a suitable oracle.


### How much can you borrow against your collateral (LTV)?

The maximum borrowable amount (LTV) is dependent on the parameter `A` and number of bands (`N`) chosen when creating a market. The more bands used, the higher the LTV.


### How does the LLAMMA liquidation process differ from other debt-based stablecoins?

crvUSD uses an innovative mechanism to reduce the risk of liquidations. Instead of instantly triggering a liquidation at a specific price, a user’s collateral is converted into stablecoins across a smooth range of prices.

Simulations suggest most price drops would result in the loss of just a few percentage points worth of collateral value, instead of the instant and total loss implemented by the liquidation process common to most debt-based stablecoins.


### What tokens can be used in lending markets? How to create a lending market?

Curve lending is totally permissionless. Everyone can create markets. The only requirement is, that crvUSD is either the borrowable or collateral token.
Although creating a market is totally permissionless, some important parameters need to be simulated ahead of deployment.


### What is a 'loan discount' and what impact does it have?

A 'loan discount' is a percentage applied to reduce the value of collateral for determining the maximum borrowable amount. A higher loan discount results in a lower borrowing limit, acting as a safety margin for lenders against collateral value declines. 

The maximum amount that can be borrowed is also influenced by other factors, such as market conditions and asset volatility. For more details on these factors and their impact on borrowing, see the technical documentation at https://docs.curve.fi/crvUSD/amm/.


### What is the difference between self-liquidating and repaying?

You cannot self-liquidate a partial amount of a loan, self-liquidating closes the loan, but you can repay a partial amount, e.g., 20% of the debt, this increases the health of the loan.  Your bands will not move if you repay some debt while in soft-liquidation.

When repaying and self-liquidating the whole loan, repaying and self liquidating work slightly differently, let's show this using a market lending crvUSD using WETH as collateral:

- For self-liquidating, if some WETH has been converted to crvUSD during soft-liquidation, then the user must transfer the difference between the crvUSD held as collateral and the debt.
- When repaying with crvUSD, you must transfer enough crvUSD to cover the debt, and you receive all the collateral in return.  However in new markets (markets with leverage), it's possible to repay with collateral.  In this case, the user does not need to send anything, all collateral is transferred to crvUSD, and the user receives back any crvUSD left after debt is repaid.

---


## **Liquidation Process**


### What is my liquidation price?

When creating a loan, collateral is deposited and equally distributed over a range of prices, not just a single liquidation price. Should the price fall within this range, the collateral begins its conversion into crvUSD. This process aids in maintaining the loan's health and, under most conditions, wards off liquidation. As a result, there isn't one specific liquidation price.


### When depositing collateral, how do I adjust and select my collateral deposit price range?

The price range can be optionally adjusted and customized during the initial loan creation process. In the UI, the **`"Advanced Mode"`** toggle provides further insights into this range. 


### What happens when the collateral price drops into my selected range? (soft-liquidation)

Each lending market is linked to a LLAMMA, which is a special AMM. If the collateral price falls into the selected range, this collateral becomes tradable in the AMM. At this juncture, traders have the opportunity to acquire the collateral, substituting it with crvUSD. Consequently, the loan becomes collateralized by stablecoins, known for their more reliable value retention, contributing to the sustained health of the loan.


### What happens if the collateral price recovers? (de-liquidation)

As the collateral price increases, the aforementioned process reverses. The position undergoes trading through the AMM, transitioning from crvUSD back to the original form of collateral. Owing to AMM trading fees, it's typical for a slight percentage of the original collateral value to be diminished once the collateral price surpasses the upper limit of the predetermined liquidation range.


### Under what circumstances can I be liquidated? (hard-liquidation)

When a loan's health falls below 0%, it becomes eligible for liquidation. In this case, another party (called a liquidator) can step in to repay the debt. The liquidator receives the user's collateral in return for this service. While the user gets to keep what they borrowed, they permanently lose their collateral that was securing the loan.

Although the crvUSD collateral conversion mechanism within the AMM is designed to protect against liquidations, it might not keep up with severe price fluctuations. It is advisable for borrowers to maintain their loan health, especially when prices fall within the selected liquidation range.


### How do I maintain my loan health if collateral price drops into my range?

When the collateral price falls into the liquidation range, adding new collateral to protect loan health is not permitted. Within this liquidation range, loan health can only be improved by repaying debt. Even minimal debt repayments can be effective in preventing liquidation while the collateral price resides within this range.


### What happens to the collateral in the event of hard liquidation?

In the event of a hard liquidation, all available collateral is offered for sale at a discount.  Anyone can come and claim the collateral by repaying the remaining debt, after which the loan is closed.


### What is a ‘liquidation discount’ and how is the 'liquidation discount' calculated during a liquidation?

The 'liquidation discount' is calculated based on the collateral's market value and is designed to incentivize liquidators to participate in the liquidation process. This factor is used to effectively discount the collateral valuation when calculating the health for liquidation purposes.

In other protocols, this may be referred to as a “liquidation threshold” and is often hard-coded instead of calculated dynamically.


---


## **Interest Rate**

### What is the borrow rate?

The borrow rate is the variable interest rate charged on the debt of the loan. The borrow rate is solely determined by the [utilization](./overview.md#utilization-lend-apy-and-borrow-apy) of the market.


### How is the borrow rate calculated?

For the calculation of the borrow rate, see [here](./overview.md#borrow-rate).


### What is the lend rate?

The lend rate is the variable interest rate a lender receives in exchange for lending out their assets to borrowers.


### How is the lend rate calculated?

For the calculation of the lend rate, see [here](./overview.md#lend-rate).


---


## **Safety and Risks**


### What are the risks of using crvUSD

A risk disclaimer can be found [here](../risks-security/risks/crvusd.md)


### How can I best manage my risks when borrowing assets?

Best risk management practices include maintaining a safe collateralization ratio, understanding the potential for liquidation, and keeping an eye on market conditions.


### Has the lending system been audited?

Yes. All public audits can be found [here](https://docs.curve.fi/references/audits/).


### Can I see the code?

The code is publicly available on the [**Curve Github**](https://github.com/curvefi/curve-stablecoin).
