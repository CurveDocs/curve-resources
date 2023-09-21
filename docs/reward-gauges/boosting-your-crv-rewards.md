# Boosting your CRV Rewards

This guide assumes you have already provided liquidity and are currently staking your LP tokens on the DAO gauge.

One of the main incentives for CRV is the ability to boost your rewards on provided liquidity. Vote locking CRV allows you to acquire voting power to participate in the DAO and earn a boost of up to 2.5x on the liquidity you are providing on Curve.

For questions about how the vote locking boost works, see [Vote Locking](/governance/vote-locking-boost):

Boosting your rewards video guide: https://www.youtube.com/watch?v=blZTCWu-DQg

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="https://storage.googleapis.com/curvedocs/boosting-rewards.mp4" type="video/mp4">
  </video>
</figure>

## Determining Your Required Boost

The first step to boosting your rewards is determining how much CRV you'll need to lock. All gauges have different requirements, meaning some pools are easier to boost than others. It depends on how much others have locked and how much the liquidity gauge has.

You can find the calculator at this address: [https://dao.curve.fi/minter/calc](https://dao.curve.fi/minter/calc)​

## Locking your CRV

Once you know how much and how long you wish to lock for, visit the following page: [https://dao.curve.fi/locker](https://dao.curve.fi/locker)​

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MFA0rQI3SzfbVFgp3Ic%2F-MFw5TRvfmVRhy6M2vA0%2F-MFwBH-2tIa-f8oEODRQ%2Fimage.png?alt=media&token=9d7166c8-4231-4996-8fe2-27c0f7f4ae66)

Enter the amount you want to lock and select your expiry. Remember, locking is not reversible. The amount of veCRV received will depend on how much and how long you vote for.

You can extend a lock and add CRV to it at any point, but you cannot have CRV with different expiry dates.

After creating your lock, you will need to apply your boost.

## Applying your boost

Head over to the minter page: [https://dao.curve.fi/minter/gauges](https://dao.curve.fi/minter/gauges)​

If you see your new boost after Current boost, then you do not need to do anything else.

If your current boost hasn't moved, you will need to claim CRV from each of the gauge you're providing liquidity to update your boost. After doing so, your boost should be showing.

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MFA0rQI3SzfbVFgp3Ic%2F-MFw5TRvfmVRhy6M2vA0%2F-MFwFO9NY0WsvZyZPMsr%2Fimage.png?alt=media&token=ecf1dd2c-1300-4a21-9664-2e3387bcf0ca)

Your boost will not be updated until you withdraw, deposit or claim from a liquidity gauge.

## Understanding the Boost Formula

The boost formula depends on:

- **b**: user liquidity gauge balance
- **w**: user veCRV balance
- **W**: total veCRV supply
- **S**: total supply of the liquidity gauge

We use the above values to calculate the user working balance (**B**) like this:

$B = \min\left(0.4b + 0.6 \times S \times \frac{w}{W}, b\right)$

or using non-math terms:

```
working_balance = minimum_of(
  (0.4 * user_gauge_balance) + (0.6* * total_gauge_supply * (user_vecrv / total_vecrv)),
  user_gauge_balance
)
```

Once you have your working balance (**B**) you can then calculate your total boost:

`Boost = B / (0.4 * b)`

## FAQ

[Vote Locking](/governance/vote-locking-boost)
