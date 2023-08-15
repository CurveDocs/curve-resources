# Boosting your CRV Rewards

This guide assumes you have already provided liquidity and are currently staking your LP tokens on the DAO gauge.

One of the main incentives for CRV is the ability to boost your rewards on provided liquidity. Vote locking CRV allows you to acquire voting power to participate in the DAO and earn a boost of up to 2.5x on the liquidity you are providing on Curve.

For questions about how the vote locking boost works, click here:

[Vote Locking](/governance/vote-locking-boost)

Boosting your rewards video guide: https://www.youtube.com/watch?v=blZTCWu-DQg

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="https://storage.googleapis.com/curvedocs/boosting-rewards.mp4" type="video/mp4">
  </video>
</figure>

## Determining Your Required Boost

The first step to boosting your rewards is to determine how much CRV you'll need to lock. All gauges have different requirements, meaning some pools are easier to boost than others. It depends on how much others have locked and how much the liquidity gauge has.

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

The boost mechanism calculates your **working balance** using the following formulas:

1. **Working unit per LP token** = working balance / staked LP token balance 
2. **Working balance** = 0.4 * (staked LP balance) + 0.6 * (total staked LP supply) * (capped voting power percentage)
3. **Capped voting power percentage** = min(voting power percentage, staked LP token percentage)

These formulas consider both the proportion of your LP tokens staked in gauge (40%) and the remaining 60% which is comprised of the minimum of two things: 

1. Your remaining amount of LP tokens in gauge 
2. Your proportion of total LP tokens staked based on your voting power

The terms used in these formulas are explained as follows:

- **votingTotal**: veCRV total supply
- **votingBalance**: veCRV balance (possibly adjusted by boost delegation)
- **totalLiquidity**: total LP tokens in gauge
- **dollarProvided**: user lp token balance in gauge

## FAQ

[Vote Locking](/governance/vote-locking-boost)
