Users who lock $CRV can claim trading fees as often as you'd like, but fees will only be converted into 3CRV once a week.

To claim your fees, visit [https://curve.fi/#/ethereum/dashboard](https://curve.fi/#/ethereum/dashboard) and click the blue "Claim LP Rewards" button. If you are using the classic UI please visit: [https://classic.curve.fi/](https://classic.curve.fi) and look for the green "Claim" button in the box labeled "veCRV 3pool LP claim" at the bottom of the page.

Every time a trade takes place on Curve Finance, 50% of the trading fee is collected by the users who have vote locked their CRV. Every week, fees are collected from the pools, converted to 3CRV and distributed.

There is a delay before you can first claim your 3CRV after locking. It takes 8 days from the Thursday after which you lock before you can claim.

[Understanding $CRV](../crv-token/understanding-crv.md)

## **Swapping 3CRV for a stable coin**

If you would like to withdraw your 3CRV back into a stable coin, you can head to [https://curve.fi/#/ethereum/pools/3pool/withdraw](https://curve.fi/#/ethereum/pools/3pool/withdraw), select the stable you would like to receive (optional) and click "**Withdraw**". After confirming your transaction, you will then receive 3CRV.

## **How does it all work?**

When the burn is triggered, a contract collects all trading fees from all the swap pool contracts. Those fees come in dozen of different stable coins, tokenized Bitcoin and Ethereum flavours. The fee tokens are traded into USDC using Curve and Synthetix, which is then deposited to 3Pool. Finally, the burner creates a checkpoint which updates all the claimable balance of each veCRV holder.

Burning is an expensive process, as it involves many complex transactions, but anyone can trigger the process whenever they wish if they are willing to pay for it.

Fees may only be claimed for the week that has already passed, because the burner does not know how much everyone is entitled to before the end of the period. Fees will be available on a weekly basis within 24 hours after Thursday midnight UTC, as long as someone (usually the Curve team) has initiated the burn prior to that.

Technical users can review the burner contracts here: [https://github.com/curvefi/curve-dao-contracts/tree/master/contracts/burners](https://github.com/curvefi/curve-dao-contracts/tree/master/contracts/burners)​

The following script may be used to initiate the burn process: [https://github.com/curvefi/curve-dao-contracts/blob/master/scripts/burners/claim\_and\_burn\_fees.py](https://github.com/curvefi/curve-dao-contracts/blob/master/scripts/burners/claim_and_burn_fees.py)​

