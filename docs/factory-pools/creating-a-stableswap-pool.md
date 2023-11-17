The Stableswap pool creation is appropriate for assets expected to hold a price peg very close to each other, like a pair of dollarcoins. The creation wizard will guide you through the process of creating a pool, but if you have questions throughout you are encouraged to speak with a member of the Curve team in the [Telegram](https://t.me/curvefi) or [Discord](https://discord.gg/rgrfS7W).

## **Token Selection**

The token selection tab can be used to select between two to four tokens.

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FCLjBR2SbunWeyUs8j16W%2FScreenshot%202023-03-04%20at%2010.22.56%20AM.png?alt=media&token=445b1417-4fb9-4db6-b58c-d95090d4a490)

You can select a token by searching for the symbol of any token that is already being used on Curve, or by pasting the pool’s address.

On Ethereum you might observe a handful of popular assets (ie Tether, USDC, Frax) are not available in the token selection dropdown. Some of these assets have been added to "base pools," which can be used in the creation of other "metapools."

[Base & MetaPools](../lp/pools.md)

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FkGwoLLuDSbN9XCRBM2BS%2Fimage.png?alt=media&token=18db0494-c75f-4219-b6b2-26d4e1daea9a)

Base pools are suggested at the top of the token selection modal. As of April 2023, Curve supported two stablecoin basepools (3CRV/FraxBP) and a BTC basepool (sbTC2Crv).

If you want to include a token that is part of a base pool, you must use it as part of a corresponding base pool. Base pools can only be paired with one other token.

If you are using raw ether as a token, it must be added as "Token A." WETH may be added as either Token A or Token B.

If your pool contains rebasing tokens (a token that adjusts its total supply to control its price), make sure to select the appropriate box:

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FOL4SmkHko2A1uHDdk73h%2FScreenshot%202023-03-04%20at%2010.17.49%20AM.png?alt=media&token=a9ccc536-1e5e-41b5-a178-1d0577cee863)

The UI will not check to see if a pool containing your token pairs already exists. Some protocols have seen opportunities to create two pools containing the same assets but using different parameters (c/f [stETH concentrated](https://curve.fi/#/ethereum/pools/factory-v2-117/deposit)). In most cases you should take care to make sure your pool does not already exist.

## **Pool Presets**

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FsYHljGrkzCAis3vfGUGH%2FScreenshot%202023-03-04%20at%2010.23.58%20AM.png?alt=media&token=a111575b-0a30-4639-b513-063b0d975c0b)

The "Pool Presets" tab contains a few scenarios that prepopulate appropriate parameters for users unfamiliar with advanced aspects of Curve pools. The presets include an explanation of their use case.

The Advanced options toggle includes a variety of options which may not apply to your case.

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FbFHfimAPjyfQ6YzVZFtu%2FScreenshot%202023-03-04%20at%2010.32.25%20AM.png?alt=media&token=0f0657e7-9c76-4c8b-8079-61375584c9cf)

## **Parameters**

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2F07qxEE3QHSapAKMZWWNH%2FScreenshot%202023-03-04%20at%2010.37.06%20AM.png?alt=media&token=d090055f-684c-4147-a101-7a0e4511969d)

The parameters tab allows you to adjust pool parameters. The pool's fee is applied to all transactions within the pool, half of which accrues to pool LPs, the other half is distributed to veCRV lockers. The fee for StableSwap pools may be set between .04% and 1%.

The Advanced tab allows you to adjust the pool's "A Parameter."

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FPphMuY69rUKUpIUHnbnN%2FScreenshot%202023-03-04%20at%2010.40.33%20AM.png?alt=media&token=6d0a0d9b-7592-4301-940e-fc23eb458ed2)

The A Parameter is set by default based on your selection on the prior tab. A higher value for A concentrates liquidity better. If the assets are likely to fluctuate heavily you may want to lower the value below the default of 100.

After the pool launches, the DAO has the capability of adjusting the A parameter.

[Understanding Curve Pools](../lp/understanding-curve-pools.md)

## **Pool Info**

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FayNZbBtWUO2KwDgneqVe%2FScreenshot%202023-03-05%20at%203.21.52%20AM.png?alt=media&token=9f62bad8-3ff0-4ad3-bc3d-6a6f8ddda374)

Finally, you may adjust factors used for displaying the pool on the Curve site. These cannot be adjusted after launching so be careful when selecting these parameters.

On the Curve UI the pools are grouped by the "Asset Type Tag." This only affects its display on the Curve website, it has no effect on the pool's performance.

*   **USD:** For pools only containing dollarcoins
*   **ETH:** For pools only containing ETH
*   **BTC:** For pools only containing BTC
*   **Other:** All other assets

Your pool is ready to launch! It will now appear on the Curve page, but it's not yet eligible to earn $CRV rewards. For next steps you will typically want to seed initial liquidity and [create a pool gauge](../reward-gauges/creating-a-pool-gauge.md).
