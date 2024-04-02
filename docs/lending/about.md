<h1>About Curve Lending</h1>

Curve Lending introduces an innovative approach to overcollateralized lending and borrowing with its unique [LLAMMA (Lending-Liquidating AMM Algorithm)](https://docs.curve.fi/crvUSD/amm/) system, designed to enhance risk management and user experience.  Curve Lending offers overcollateralized lending and borrowing of assets paired with crvUSD.  **crvUSD is not minted in Curve Lending**; all crvUSD is supplied by users.  **Each lending market is isolated**, meaning supplied crvUSD collateral in one market (e.g., WETH) cannot be used to borrow assets from another market (e.g., CRV). Additionally, **all markets are one-way**, so supplied collateral cannot be lent out to other users.

## Interest Rates

Borrowing and Supplying Interest Rates are determined solely by the Utilization factor (the ratio of borrowed to supplied assets) of each lending pair. Higher utilization results in higher Borrow and Lend APYs.  By default, the Borrow APY starts with 0.1% at 0% utilization and can reach up to 1000% at 100% utilization. The Lend APY starts at 0% and can also reach up to 1000% at 100% utilization. However, please be aware each new market can change these values.

## Borrowing

When borrowing on Curve Lending, you are taking an overcollateralized loan against deposited assets (e.g., borrowing crvUSD with CRV collateral).  You are charged the Borrow APY on the borrowed assets (e.g., Borrowing APY increases crvUSD debt).  

Collateral is deposited into each lending market's [LLAMMA](https://docs.curve.fi/crvUSD/amm/) system and split evenly across the chosen number of **Bands**.  Each band represents a small liquidation range.  Reducing the number of bands allows for a higher **Loan-to-Value** (LTV) ratio.  Your loan is safe while the oracle price is higher than any of your bands.

**Soft-liquidation** begins if the oracle price of your collateral drops into one of your bands. Here, the platform will begin trading your collateral for your borrowed asset linearly as the price declines through each band (e.g., with a loan spread across 10 bands 10% of total CRV is swapped for crvUSD in each band).  The value of traded assets remain loan collateral throughout soft-liquidation (e.g., if CRV is swapped for crvUSD the value of that crvUSD is added to the collateral backing the loan).  If prices increase through your bands, any swapped collateral will be traded back for your initial collateral (e.g., CRV swapped to crvUSD as price decreased is swapped back to CRV as price increases).

Rebalancing collateral through soft-liquidation must be incentivized through paying trading fees.  These fees are taken from your collateral, as such your health factor erodes over time in soft-liquidation.  With higher volatility, equating to more losses.  Also note that collateral cannot be deposited while in soft-liquidation, debt can only be repaid.

The **Health Factor** is a measure of debt value to collateral value with a small buffer added for safety.  As long as the health factor is positive, the position remains open.  It's possible to be below your bands with all collateral converted to the borrowed asset (e.g., all CRV converted to crvUSD), while maintaining a positive health factor.  If this happens, further price declines do not affect the position (e.g., all CRV traded for crvUSD, and crvUSD collateral covers debt and safety buffer).   **Hard-liquidation only occurs if your health factor reduces to 0**.

In contrast, most other lending platforms will hard-liquidate your collateral and terminate your loan if your loan falls below a minimum collateral ratio (LTV), even if only by a small amount for a brief time. This can be highly stressful for borrowers and lead to significant losses. Curve Lending offers a safer space and more peace of mind for borrowers.

## Supplying

By Supplying assets on Curve Lending, you earn the **Lend APY** plus any **Rewards APR**.  You can withdraw a supplied asset provided there are sufficient available (un-loaned) assets in the market.  If there are insufficient available assets for a full withdrawal, you can withdraw the maximum amount currently available. The high Utilization rate will cause the Borrow APY to increase, incentivizing borrowers to repay their loans. As borrowers repay, more assets will become available, allowing you to withdraw your remaining balance over time.

**Rewards APR** is a combination of CRV rewards and any other incentives provided to suppliers.  As each lending market has a [gauge](https://resources.curve.fi/reward-gauges/understanding-gauges/) (a mechanism for distributing rewards), the rewards work the same as depositing to a Curve Pool. This number is a range as CRV rewards are variable based on the boost a user receives from their veCRV holdings, [more info here](https://resources.curve.fi/reward-gauges/boosting-your-crv-rewards/).

## More Information

For more information on basic concepts and borrowing and supplying please see [Curve Lending section within the Curve Resources](./understanding-lending.md).

For more technical information especially relating to the underlying smart contracts please see the [Lending section within the Curve Docs](https://docs.curve.fi/lending/overview)