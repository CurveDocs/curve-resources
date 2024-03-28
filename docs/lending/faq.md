<h1>Curve Lending: FAQ</h1>


## **General**

### What's the difference between minting crvUSD and lending markets?
- Lending markets do not mint crvUSD. The crvUSD borrowed are supplied by lenders.
- The borrow rate is only dependent on the [utilization](../lending/understanding-lending.md#utilization-rate) of the market.


### How much can you borrow against your collateral (LTV)?
The maximum borrowable amount (LTV) is dependent on the parameter `A` and number of bands (`N`) chosen when creating a market. The more bands used, the higher the LTV.


### How does the LLAMMA liquidation process differ from other debt-based stablecoins?
crvUSD uses an innovative mechanism to reduce the risk of liquidations. Instead of instantly triggering a liquidation at a specific price, a user’s collateral is converted into stablecoins across a smooth range of prices.

Simulations suggest most price drops would result in the loss of just a few percentage points worth of collateral value, instead of the instant and total loss implemented by the liquidation process common to most debt-based stablecoins.


### What tokens can be used in lending markets? How to create a lending market?
Curve lending is totally permissionless. Everyone can create markets. The only requirement is, that crvUSD is either the borrowable or collateral token.
Although creating a market is totally permissionless, some important parameters need to be simulated ahead of deployment. 


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
Should a loan's health drop below 0%, it becomes eligible for liquidation. In this scenario, the collateral is sold off, and the position closes. Although the crvUSD collateral conversion mechanism within the AMM is designed to protect against liquidations, it might not keep up with severe price fluctuations. It is advisable for borrowers to maintain their loan health, especially when prices fall within the selected liquidation range.


### How do I maintain my loan health if collateral price drops into my range?
When the collateral price falls into the liquidation range, adding new collateral to protect loan health is not permitted. Within this liquidation range, loan health can only be improved by repaying debt. Even minimal debt repayments can be effective in preventing liquidation while the collateral price resides within this range.


### What happens to the collateral in the event of hard liquidation?
In the event of a hard liquidation, all available collateral is sold off by the AMM system, the debt is covered, and the loan is closed.


### What is a ‘liquidation discount’ and how is the 'liquidation discount' calculated during a liquidation?
The 'liquidation discount' is calculated based on the collateral's market value and is designed to incentivize liquidators to participate in the liquidation process. This factor is used to effectively discount the collateral valuation when calculating the health for liquidation purposes.

In other protocols, this may be referred to as a “liquidation threshold” and is often hard-coded instead of calculated dynamically.


---


## **Interest Rate**

### What is the borrow rate?
The borrow rate is the variable interest rate charged on the debt of the loan. The borrow rate is solely determined by the [utilization](../lending/understanding-lending.md#utilization-rate) of the market.


### How is the borrow rate calculated?
For the calculation of the borrow rate, see [here](../lending/understanding-lending.md#borrow-rate).


### What is the lend rate?
The lend rate is the variable interest rate a lender receives in exchange for lending out their assets to borrowers.


### How is the lend rate calculated?
For the calculation of the lend rate, see [here](../lending/understanding-lending.md#lend-rate).



---


## **Safety and Risks**


### What are the risks of using crvUSD
A risk disclaimer can be found [here](../resources/risks/crvusd.md)


### How can I best manage my risks when borrowing assets?
Best risk management practices include maintaining a safe collateralization ratio, understanding the potential for liquidation, and keeping an eye on market conditions.


### Has the lending system been audited?

Yes. All public audits can be found [here](https://docs.curve.fi/references/audits/audits_pdf/).


### Can I see the code?
The code is publicly available on the [**Curve Github**](https://github.com/curvefi/curve-stablecoin).
