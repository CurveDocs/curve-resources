# Deposit FAQs

## What is the y in the y pools (also what is yearn)

Yearn is a yield aggregator. You might think that Compound doesn’t always have the best lending rates and you would be right thus the yToken balances automatically your stablecoin to the protocol(s) with the better rates (Compound, Aave and dYdX). It’s free and non-custodial (as is Curve) but it is also why the yPools are considered more risky as you use a series of protocols that could themselves have critical vulnerabilities.

## What is the “deposit wrapped” option?

(This applies to metapools or pools with tokens with c tokens or y tokens). If you deposit a stablecoin to one of the pools with lending, Curve will automatically wrap your token to a cToken (for Compound) or a yToken(for yearn). The option is simply there if you have already previously wrapped your tokens on yearn or lent them on Compound. If your stablecoin is in its original form, you can ignore this option.

## What happens when you provide liquidity on Curve?

When you go to the deposit page and deposit one stablecoin, it then gets split between each token in the pool. That’s something you have to keep in mind because if you were to deposit 1000 DAI in the yPool, a per the screenshot below, your balance would be roughly equal to 158.9 DAI, 142.4 USDC, 582.4 USDT and 121.6 TUSD. Those values change constantly as people trade and arb the price of stable coins.


![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FVbNbqvugTszimMdG2uBo%2FScreen%20Shot%202022-11-14%20at%203.41.34%20AM.png?alt=media&token=3622b620-c1f5-40ce-b5c7-2738cd66c432)

## Does the coin I deposit matter?

Besides the deposit bonus explained below, it doesn’t matter. Your tokens will get split into the pool and it doesn’t affect your returns so you can deposit one, some or all the coins into the pool without worrying about it affecting your returns.

## Understanding deposit bonuses

On the screenshot above, you can see TUSD is quite low on the pool so if your plan was to join the yPool, you would ideally deposit TUSD into it. As you can see on the screenshot, you would get an instant 0.2% bonus for depositing TUSD into the pool.

The main reason for this is that TUSD is currently slightly more expensive so if you went to a centralized exchange you might sell it for $1.007 instead of $1. The deposit bonus reflects that.

The other reason behind this is that the pools are always trying to balance themselves and go back to equal parts (in this case 25% TUSD) so depositing the coin with the lowest share will get you a deposit bonus.

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2F2qhk0CBGFiK8RA0QEWKW%2FScreen%20Shot%202022-11-14%20at%203.43.36%20AM.png?alt=media&token=0ff32c84-a44e-484a-8962-4476d0773666)

## But does that mean I can still withdraw in my favorite stable coin?

When you withdraw, the same principle applies (but reversed). If you withdraw the stable coin with the biggest share, you would get a bonus but you still choose what stable coin you want to withdraw.

## How quickly does interest accrue/compound?

Interests for pools using lending protocols compound every block or 15 seconds or immediately after fees are paid. It’s also compounded automatically.

## What is arbitrage?

Arbitrage is the simultaneous buying and selling of, in our case, a token to make a profit. Because cryptocurrency markets can often lack liquidity, there are often opportunities for traders to take advantage of price discrepancies to make a profit which can be helped by protocols like Curve.

An example of that below:

​[https://etherscan.io/tx/0x259b7ac1f50554fe5ddcfeea7b4fa90ad70356ddfbbd341289db0dfbf99447f9](https://etherscan.io/tx/0x259b7ac1f50554fe5ddcfeea7b4fa90ad70356ddfbbd341289db0dfbf99447f9)​

In this transaction, someone used Curve and OasisDex and made around $200. This goes back to what was discussed earlier with liquidity pools. The idea is that is you incentivize traders to take advantage of price discrepancies which we all get rewarded for.

## What are incentivized pools?

Liquidity pools (particularly one without an opportunity cost) are a great way to help stable coins keep their pegs. It makes easy for traders to arb (see question above) when the price slips off the peg which is very important for all the companies and foundations developing stable coins as having a $0.98 stablecoin is never a good look.

As a result, some pools on Curve are “incentivized”. That means that on top of trading fees and lending fees, the companies will give rewards to people providing liquidity to the pools with their coins.

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FTDHyQoQBlwikER4kovew%2FScreen%20Shot%202022-11-14%20at%203.45.49%20AM.png?alt=media&token=b501b4c0-eeee-462a-98da-6198d878521b)

## What makes the incentives APR move?

The steth pool in this screenshot earns another 2.69% of LDO per year and there are three variables that can make this change:

*   The LDO distributed is based on the number of people staking their LP tokens, which means your share of rewards gets lower if more people start staking
*   The price of LDO (price of LDO going up would make the yearly bonus go up)
*   The size of weekly rewards (48,000 SNX as of today) could also be lowered as Lido reevaluates its partnership with Curve
