<h1>Curve Stablecoin: FAQ</h1>

## **General**

### What is crvUSD and how does it work?

crvUSD is a dollar-pegged stablecoin, which can be minted against various crypto collaterals approved by the DAO.

### How does the crvUSD liquidation process differ from other debt-based stablecoins?

crvUSD uses an innovative mechanism to reduce the risk of liquidations. Instead of instantly triggering a liquidation at a specific price, a user’s collateral is converted into stablecoins across a smooth range of prices.

Simulations suggest most price drops would result in the loss of just a few percentage points worth of collateral value, instead of the instant and total loss implemented by the liquidation process common to most debt-based stablecoins.

### How is crvUSD pegged to a price of $1?

The crvUSD peg is broadly protected by the fact that the protocol is always overcollateralized.  The protocol employs a number of stabilization mechanisms to fine-tune this peg. One mechanism is to automatically adjust borrow rates based on supply and demand.  The protocol also relies on Peg Keepers (see below section), which are authorized to burn or mint crvUSD based on market conditions. 


### Can other types of collateral be proposed for crvUSD? How does that process work?

Yes, other collateral markets can be proposed for crvUSD through governance. Contact the community support channels for additional information on the current process to propose new collateral types.  Each approved collateral has its own crvUSD market.

### What is a 'loan discount' and what impact does it have?

A 'loan discount' is a percentage applied to reduce the value of collateral for determining the maximum borrowable amount. A higher loan discount results in a lower borrowing limit, acting as a safety margin for lenders against collateral value declines. 

The maximum amount that can be borrowed is also influenced by other factors, such as market conditions and asset volatility. For more details on these factors and their impact on borrowing, see the technical documentation at https://docs.curve.finance/crvUSD/amm/.


---


## **Liquidation Process**


### What is my liquidation price?

At the start of the crvUSD loan process, collateral is deposited and equally distributed over a range of prices, not just a single liquidation price. Should the price fall within this range, the collateral begins its conversion into crvUSD. This process aids in maintaining the loan's health and, under most conditions, wards off liquidation. As a result, there isn't one specific liquidation price.


### When depositing collateral, how do I adjust and select my collateral deposit price range?

The price range can be optionally adjusted and customized during the initial loan creation process. In the UI, the “advanced mode” toggle provides further insights into this range. It also presents an “Adjust” button, enabling users to fine-tune their preferred price range.


### What happens when the collateral price drops into my selected range? (soft-liquidation)

Each crvUSD market is linked to an Automated Market Maker (AMM). If the collateral price falls into the selected range, this collateral becomes tradable in the AMM. At this juncture, traders have the opportunity to acquire the collateral, substituting it with crvUSD. Consequently, the loan becomes collateralized by stablecoins, known for their more reliable value retention, contributing to the sustained health of the loan.


### What happens if the collateral price recovers? (de-liquidation)

As the collateral price increases, the aforementioned process reverses. The position undergoes trading through the AMM, transitioning from crvUSD back to the original form of collateral. Owing to AMM trading fees, it's typical for a slight percentage of the original collateral value to be diminished once the collateral price surpasses the upper limit of the predetermined liquidation range.


### Under what circumstances can I be liquidated? (hard-liquidation)

Should a loan's health drop below 0%, it becomes eligible for liquidation. In this scenario, the collateral is sold off, and the position closes. Although the crvUSD collateral conversion mechanism within the AMM is designed to protect against liquidations, it might not keep up with severe price fluctuations. It is advisable for borrowers to maintain their loan health, especially when prices fall within the selected liquidation range.


### How do I maintain my loan health if collateral price drops into my range?

When the collateral price falls into the liquidation range, adding new collateral to protect loan health is not permitted. Within this liquidation range, loan health can only be improved by repaying crvUSD. Even minimal crvUSD repayments can be effective in preventing liquidation while the collateral price resides within this range.

### What happens to the collateral in the event of hard liquidation?

In the event of a hard liquidation, all available collateral is sold off by the AMM system, the debt is covered, and the loan is closed.


### What is a ‘liquidation discount’ and how is the 'liquidation discount' calculated during a liquidation?

The 'liquidation discount' is calculated based on the collateral's market value and is designed to incentivize liquidators to participate in the liquidation process. This factor is used to effectively discount the collateral valuation when calculating the health for liquidation purposes.

In other protocols, this may be referred to as a “liquidation threshold” and is often hard-coded instead of calculated dynamically.


---


## **Peg Keepers**


### What are Peg Keepers?

The Peg Keepers are contracts uniquely enabled to mint and absorb debt in crvUSD for the purposes of trading near the peg.


### Under what circumstances can the Peg Keepers mint or burn crvUSD?

Each Peg Keeper targets a specific [**Peg Keeper pool**](https://curve.finance/#/ethereum/pools?filter=crvusd). A Peg Keeper pool is a [**Curve v1 pool**](https://resources.curve.finance/base-features/understanding-curve) allowing trading between crvUSD and a blue chip stablecoin. The Peg Keepers are responsible for trying to balance these pools by trading at a profit. The Peg Keepers can only mint crvUSD to trade into their associated pools when its pool balance of crvUSD is too low, or it can repurchase and burn the crvUSD if its pool balance is too high.


### What is the relationship between a Peg Keeper's debt and the total debt in crvUSD?

A Peg Keeper's debt is the amount of crvUSD it has deposited into a specific pool. Total debt in crvUSD includes all outstanding crvUSD that has been borrowed across the system.


### What does it mean if the Peg Keeper's debt is zero?

If a Peg Keeper's debt is zero, it means that the Peg Keeper has no outstanding debt in the crvUSD system.


### How does Peg Keeper trade and distribute profits?

Every Peg Keeper has a public **`update`** function. If the Peg Keeper has accumulated profits, then a portion of these profits are distributed at the behest of the user who calls the **`update`** function, in order to incentivize distributed trading in the pools. 

!!!tip "Calling `update()` via Etherscan"
    To access this information on Etherscan, one can visit the **`LLAMMA details`** on the crvUSD UI within any market. By clicking the “Monetary Policy”, users are directed to the contract on Etherscan. There, under the **`Contract`** tab, they should select the **`Read Contract`** tab. Function 6 (`peg_keepers`) requires the index value of the market of interest, ranging from 0 to n-1, where n represents the number of crvUSD markets. After entering this index and navigating to the returned address, users need to navigate to **`Contract`** and **`Read Contract`** again. This time, they access function 6 (`estimate_caller_profit`) to estimate the caller profit. After evaluating if the execution of the following function makes sense, the **`Write Contract`** tab must be selected, a wallet connected, and function 1 (`update`) called.


---


## **Borrow Rate**

### What is the Borrow Rate?

The Borrow Rate is the variable interest rate charged on active loans within each collateral market.

### How is the crvUSD Borrow Rate calculated?

The Borrow Rate for each crvUSD collateral market is calculated based on a series of parameters, including the Peg Keeper's debt, the total debt, and the market demand for borrowing.


---


## **Safety and Risks**


### What are the risks of using crvUSD

As with all cryptocurrencies, crvUSD carries several risks, including depeg risks and risk of user collateral liquidation. Make sure to [**read the disclaimer**](https://curve.finance/crvusd/#/ethereum/risk-disclaimer) and exercise caution when interacting with smart contracts.


### How can I best manage my risks when providing liquidity or borrowing in crvUSD?

Best risk management practices include maintaining a safe collateralization ratio, understanding the potential for liquidation, and keeping an eye on market conditions.


### Has crvUSD been audited?

Yes, please see the audits here [**Curve Stablecoin Audits**](https://docs.curve.finance/references/audits/#curve-stablecoin-and-lending).


### Can I see the code?

The code is publicly available on the [**Curve Github**](https://github.com/curvefi/curve-stablecoin).
