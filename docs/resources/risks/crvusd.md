<h1>Curve Stablecoin Risk Disclosure</h1>


Curve Stablecoin infrastructure enables users to mint crvUSD using a selection of crypto-tokenized collaterals (adding new ones are subject to DAO approval). Positions are managed passively: if the collateral's price decreases, the system automatically sells off collateral in a ‘soft liquidation mode’. If the collateral's price increases, the system recovers the collateral. This process could lead to some losses due to liquidation and de-liquidation. Additional information can be found on [LLAMMA Overview](https://docs.curve.fi/crvUSD/amm/).

---

## **Soft and Hard Liquidations**

Please consider the following risk disclaimers for liquidations in the Curve Stablecoin infrastructure:

* If your collateral enters soft-liquidation mode, you can't withdraw it or add    more collateral to your position.  You can however repay debt with crvUSD.

* While in soft-liquidation borrowers essentially pay a fee to arbitrageurs in the form of favorable pricing.  This gradually reduces the health of the position.

* Should the price of the collateral change drop sharply over a short time interval, it can result in large losses that may reduce your loan's health.

* If you are in soft-liquidation mode and the price of the collateral goes up sharply, this can result in de-liquidation losses on the way up. If your loan's health is low, collateral price appreciation can further reduce the loan's health, potentially triggering a hard liquidation.

* If the health of your loan drops to zero or below, your position will get hard-liquidated with no option of de-liquidation. Please choose your leverage wisely, as you would with any collateralized debt position.

## **Interest Rates**

The [borrow rate](/docs/crvusd/loan-details.md#borrow-rate) for crvUSD is algorithmically determined based on the current peg of crvUSD and the fraction of debt the Peg Keepers currently hold.  This rate can vary rapidly and should be monitored.   Interest rates increase your debt, decreasing your health factor.

## **crvUSD Risks**
Users should be mindful of risks associated with exposure to the crvUSD stablecoin:

* Investing in crvUSD carries inherent risks that could lead to partial or complete loss of your investment due to its experimental nature. You are responsible for understanding the risks of buying, selling, and using crvUSD and its infrastructure.

* The value of crvUSD can fluctuate due to stablecoin market volatility or rapid changes in the liquidity of the stablecoin.

* crvUSD is exclusively issued by smart contracts, without an intermediary. However, the parameters that ensure the proper operation of the crvUSD infrastructure are subject to updates approved by Curve DAO. Users must stay informed about any parameter changes in the stablecoin infrastructure.

* crvUSD is not recognized as legal tender by any authority and is not guaranteed to be accepted for payments, subject to changing regulatory landscapes which may affect its legality and utility.

* Information provided by crvUSD front-end is solely for educational purposes and does not constitute any form of professional advice, leaving users solely responsible for ensuring actions meet their financial goals.

* Despite efforts to maintain price stability, crvUSD faces the risk of depegging due to market volatility, regulatory changes, or technological issues, potentially affecting its value.

* Users of crvUSD are exposed to various technological risks, including irreversible transactions, anonymity and security concerns, software dependency, cybersecurity threats, and operational and settlement risks, which can lead to potential asset loss.
The continued development and functionality of the crvUSD protocol rely on developer contributions, with no guarantee of sustained involvement, posing a risk to its maintenance and scalability.