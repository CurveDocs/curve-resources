# **$crvUSD Concepts**

## **Bands**

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FyMhYzWHxwO8F9TobC61D%2Fimage.png?alt=media&token=1da21e96-9df2-4f47-b6c3-34d9d3cbefd4)

When loans are created, collateral is spread among several bands. Each band has a range of prices for the asset. If the [price oracle](/factory-pools/understanding-oracles) is inside this range of prices, that particular band of collateral is likely to be liquidated.

In the example above, the collateral has been spread into 10 different bands of collateral. The darker grey represents collateral which has been converted into $crvUSD, lighter grey is the original collateral type. Mousing over any bar will give you details about your position within the band, as well as the asset prices corresponding to this band. If you are in soft liquidation, the band may have a blend of $crvUSD and the collateral.

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FZgFJQJm7ol1KmgK1BXXJ%2Fimage.png?alt=media&token=c05ef1d9-8918-4cf2-b041-a38716d9660d)

## **Borrow Rate**

The borrow rate is variable basd on conditions in the pool. For instance, when collateral price is down and some positions are in soft liquidation, the rate can fall. A decreasing rate creates incentive to borrow and dump, while an increasing rate creates incentives to buy $crvUSD and repay.

The formula for calculating Borrow Rate is:

rate = rate0 \* exp(-(p - 1) / sigma) \* exp(-peg\_keeper\_debt / (total\_debt \* peg\_keeper\_target\_fraction))

## **Liquidation**

In soft liquidation, the collateral within a band is at risk of being converted into crvUSD. If the price goes back, it will be rehypothecated into collateral, although it will likely be lower than the initial amount.  While in soft liquidation mode, users cannot modify their collateral. The only options available are to either partially or fully repay the debt or opt to self-liquidate the position.

If your health continues to weaken, you may find yourself subject to "hard liquidation," which functions more like a usual liquidation, where your position is erased.

## **LLAMMA**

LLAMA (Lending Liquidation AMM Algorithm) is a fully functional AMM with all the functions you would expect. For more detail [please check the source code](https://github.com/curvefi/curve-stablecoin/blob/master/contracts/AMM.vy).

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FfqU10at9v0Zjz6T8ib4Y%2Fimage.png?alt=media&token=0bb40083-ab77-47c8-9995-649c665397b7)

## **Loan Health**

Based on your collateral and borrow amount, the UI will display the Health score. Low health scores are more at risk of entering liquidation mode in the event the asset price drops.

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FUAMEbNBOd49L66hIsxso%2Fimage.png?alt=media&token=bfd01ee5-faf7-4ad5-9574-48b085456950)
