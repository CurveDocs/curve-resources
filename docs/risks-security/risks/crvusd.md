<h1>Curve Stablecoin Risk Disclosure</h1>


Curve Stablecoin infrastructure enables users to mint crvUSD using a selection of crypto-tokenized collaterals (adding new ones are subject to DAO approval). Positions are managed passively: if the collateral's price decreases, the system automatically sells off collateral in a ‘soft liquidation mode’. If the collateral's price increases, the system recovers the collateral. This process could lead to some losses due to liquidation and de-liquidation. Additional information can be found on [LLAMMA Overview](https://docs.curve.fi/crvUSD/amm/).

---

*Please consider the following risk disclaimers when using the Curve Stablecoin infrastructure:*

1.  1. If your collateral enters soft-liquidation mode, you can't withdraw it or add more collateral to your position.
    1. Should the price of the collateral change drop sharply over a short time interval, it can result in large losses that may reduce your loan's health.
    2. If you are in soft-liquidation mode and the price of the collateral goes up sharply, this can result in de-liquidation losses on the way up. If your loan's health is low, value of collateral going up could potentially reduce your underwater loan's health.
    3. If the health of your loan drops to zero or below, your position will get hard-liquidated with no option of de-liquidation. Please choose your leverage wisely, as you would with any collateralized debt position.
   
2. The crvUSD stablecoin and its infrastructure are currently in beta testing. As a result, investing in crvUSD carries high risk and could lead to partial or complete loss of your investment due to its experimental nature. You are responsible for understanding the associated risks of buying, selling, and using crvUSD and its infrastructure.

3. The value of crvUSD can fluctuate due to stablecoin market volatility or rapid changes in the liquidity of the stablecoin.

4. crvUSD is exclusively issued by smart contracts, without an intermediary. However, the parameters that ensure the proper operation of the crvUSD infrastructure are subject to updates approved by Curve DAO. Users must stay informed about any parameter changes in the stablecoin infrastructure.