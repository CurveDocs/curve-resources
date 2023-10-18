## **General**

### **What is $crvUSD and how does it work?**

$crvUSD refers to a dollar-pegged stablecoin, which may be minted by a decentralized protocol developed by Curve Finance. Users can mint $crvUSD by posting collateral and opening a loan within this protocol.


### **How does the $crvUSD liquidation process differ from other debt-based stablecoins?**

$crvUSD uses an innovative mechanism to reduce the risk of liquidations. Instead of instantly triggering a liquidation at a specific price, a user’s collateral is converted into stablecoins across a smooth range of prices.

Simulations suggest most price drops would result in the loss of just a few percentage points worth of collateral value, instead of the instant and total loss implemented by the liquidation process common to most debt-based stablecoins.

### **How is $crvUSD pegged to a price of $1?**

The $crvUSD peg is broadly protected by the fact that the protocol is always overcollateralized.  The protocol employs a number of stabilization mechanisms to fine-tune this peg.  One mechanism is to automatically adjust borrow rates based on supply and demand.  The protocol also relies on Peg Keepers (see below section), which are authorized to burn or mint $crvUSD based on market conditions. 


### **Can other types of collateral be proposed for crvUSD? How does that process work?**

Yes, other collateral markets can be proposed for $crvUSD through governance. Contact the community support channels for additional information on the current process to propose new collateral types.  Each approved collateral has its own $crvUSD market.


## **Liquidation Process**


### **What is my liquidation price?**

At the start of the $crvUSD loan process, collateral is deposited and equally distributed over a range of prices rather than one single liquidation price. When the price falls within this range, your collateral begins its conversion into $crvUSD, a process that helps maintain the health of your loan and, in most circumstances, prevents a liquidation. Thus, you do not have one specific liquidation price.


### **When depositing collateral, how do I adjust and select my collateral deposit price range?**

This price range can optionally be adjusted and customized when initially creating a loan. In the UI, look for the “advanced mode” toggle which will provide more information on this range as well as an “Adjust” button that allows you to fine-tune this range.


### **What happens when the collateral price drops into my selected range? (soft-liquidation)**

Each $crvUSD market is attached to an AMM. When the collateral price drops into your  selected range, this collateral can be traded in the AMM. When this happens, traders can purchase your collateral and replace it with $crvUSD. This has the effect of leaving your loan collateralized by stablecoins, which better hold value and maintain your loan health.

_NOTE: This process was initially referred to as “soft liquidation.” This term is being phased out to avoid confusion with the harder liquidation process in which a loan is closed and collateral is sold off._


### **What happens if the collateral price recovers? (de-liquidation)**

While collateral price rises, the above process happens in reverse. Your position is traded via the AMM from $crvUSD back into your original collateral. Due to AMM trading fees, you may find you have lost a few percentage points worth of your original collateral value once the collateral price is again above the top end of your selected liquidation range.


### **Under what circumstances can I be liquidated? (hard-liquidation)**

Should your loan health drop below 0%, you are eligible to for liquidation.  In liquidation, your collateral is sold off and your position closes. While the $crvUSD collateral conversion AMM mechanism aims to protect against liquidations, it may be unable to keep pace with severe price swings. Borrowers are recommended to maintain loan health, particularly when prices drop within the selected liquidation range.


### **How do I maintain my loan health if collateral price drops into my range?**

Once collateral price drops into your liquidation range, you are not permitted to add new collateral to protect your loan health. With collateral price inside your liquidation range, the only way to increase your loan health is to repay $crvUSD. Even small $crvUSD repayments while collateral price is within your liquidation range can be helpful in preventing a liquidation.


### **What happens to the collateral in the event of hard liquidation?**

In the event of a hard liquidation, all available collateral is sold off by the AMM system, the debt is covered, and the loan is closed.


### **What is a ‘liquidation discount’ and how is the 'liquidation discount' calculated during a liquidation?**

The 'liquidation discount' is calculated based on the collateral's market value and is designed to incentivize liquidators to participate in the liquidation process. This factor is used to effectively discount the collateral valuation when calculating the health for liquidation purposes.

In other protocols, this may be referred to as a “liquidation threshold” and is often hard-coded instead of calculated dynamically.


## **Peg Keepers**


### **What are Peg Keepers?**

The Peg Keepers are contracts uniquely enabled to mint and absorb debt in $crvUSD for the purposes of trading near the peg.


### **Under what circumstances can the Peg Keepers mint or burn $crvUSD?**

Each Peg Keeper targets a specific [Peg Keeper pool](https://curve.fi/#/ethereum/pools?filter=crvusd)<span style="text-decoration:underline;">. </span>A Peg Keeper pool is a [Curve v1 pool](https://resources.curve.fi/base-features/understanding-curve) allowing trading between $crvUSD and a blue chip stablecoin. The Peg Keepers are responsible for trying to balance these pools by trading at a profit. The Peg Keepers can only mint $crvUSD to trade into their associated pools when its pool balance of $crvUSD is too low, or it can repurchase and burn the $crvUSD if its pool balance is too high.


### **What is the relationship between a Peg Keeper's debt and the total debt in crvUSD?**

A Peg Keeper's debt is the amount of $crvUSD it has deposited into a specific pool. Total debt in $crvUSD includes all outstanding $crvUSD that has been borrowed across the system.


### **What does it mean if the Peg Keeper's debt is zero?**

If a Peg Keeper's debt is zero, it means that the Peg Keeper has no outstanding debt in the $crvUSD system.


### **How does Peg Keeper trade and distribute profits?**

Every Peg Keeper has a public `update` function. If the Peg Keeper has accumulated profits, then a portion of these profits are distributed at the behest of the user who calls the `update` function, in order to incentivize distributed trading in the pools. 

To access this on Etherscan, you can visit `LLAMMA details` on the $crvUSD UI within any market.  Click the “Monetary Policy” link to visit Etherscan.  On Etherscan, click the “Contract” tab and the “Read Contract” tab underneath.  Under function 6 (“peg_keepers”) type the index value of the market you are interested in. The index value ranges from 0 to n-1 where n is the number of $crvUSD markets.  Click on the link returned, again click “Contract” and “Read Contract” to access the function 6 (“estimate_caller_profit”) to know the minimum tokens you would receive.  To call the function, select the “Write Contract” tab, connect your wallet, and call function 1 (“update”)


## **Borrow Rate**


### **What is the Borrow Rate?**

The Borrow Rate is the variable interest rate charged on active loans within each collateral market.

![image](https://github.com/CurveDocs/curve-resources/assets/7863230/ad827cab-5fd9-42ee-a1e1-7aebb5199e65)

### **How is the $crvUSD Borrow Rate calculated?**

The Borrow Rate for each $crvUSD collateral market is calculated based on a series of parameters, including the Peg Keeper's debt, the total debt, and the market demand for borrowing.


## **Safety and Risks**


### **What are the risks of using $crvUSD**

As with all cryptocurrencies, $crvUSD carries several risks, including depeg risks and risk of liquidation of your collateral. Make sure to [read the disclaimer](https://crvusd.curve.fi/#/ethereum/risk-disclaimer) and exercise caution when interacting with smart contracts.


### **How can I best manage my risks when providing liquidity or borrowing in crvUSD?**

Best risk management practices include maintaining a safe collateralization ratio, understanding the potential for liquidation, and keeping an eye on market conditions.


### **Has $crvUSD been audited?**

Yes, you may read the full $crvUSD [MixByte audit](https://github.com/mixbytes/audits_public/tree/master/Curve%20Finance/Curve%20Stablecoin%20(crvUSD)) and other audits for Curve [may be published to Github](https://github.com/curvefi/security-incident-reports/tree/main/audits).


### **Can I see the code?**

The code is publicly available on the [Curve Github](https://github.com/curvefi/curve-stablecoin).
