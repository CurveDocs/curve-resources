# Cross-Asset Swaps

Cross-asset swaps are a new type of swaps on Curve using Synthetix as a bridge. There are a few things to know about them before getting started:

*   They have very little slippage, they can handle seven and eight-figure trades with no slippage
*   They take six minutes due to the Synthetix settlement period and prices can move during that period
*   You can trade any asset as it shares a pool with a synth (sUSD/sETH/sBTC)
*   They are in beta
*   They are expensive (~$80 at 50 gwei) and therefore best suited for large trades
*   They have two parts and thus two transactions

Initiating the trade

After selecting the two assets you would like to trade, click sell and confirm the first part of your transaction.

For the route below, we will go from DAI to sUSD to sBTC to renBTC. The first part of the trade takes you to sBTC.

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MFA0rQI3SzfbVFgp3Ic%2F-MR9nv25VcYuSbmvMuGt%2F-MR9rXhGTj3ShrfK21oS%2Fimage.png?alt=media&token=8373124f-88a1-464f-af0b-17473fbbe0d0)

Upon confirmation you will receive an NFT which represents your trade. The trade will immediately enter a settlement period of six minutes. It is best not to close your browser during that period.

## Settlement and completing your trade

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MFA0rQI3SzfbVFgp3Ic%2F-MR9nv25VcYuSbmvMuGt%2F-MR9sMvH90rP5X_1Qsme%2Fimage.png?alt=media&token=2a76f794-e55b-4078-9b9c-8ceaf9cb7217)

After Synthetix settlement period, you will then be able to complete your trade by clicking the Complete trade button. This second part will then take you from sBTC to renBTC.

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MFA0rQI3SzfbVFgp3Ic%2F-MR9nv25VcYuSbmvMuGt%2F-MR9u-PWOzqGmbMoFH_U%2Fimage.png?alt=media&token=f4d276ed-21b6-496d-b79e-b9f81bea8f84)

After confirming this transaction, you then receive your renBTC.

## Technical Docs

Read technical docs here: [https://curve.readthedocs.io/cross-asset-swaps.html](https://curve.readthedocs.io/cross-asset-swaps.html)​
