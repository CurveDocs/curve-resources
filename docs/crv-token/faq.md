<h1>CRV & veCRV FAQ</h1>

## **What is the purpose and utility of CRV?**

The main purposes of the Curve DAO token are to incentivize liquidity providers on the Curve Finance platform as well as getting as many users involved as possible in the governance of the protocol.

It also has time-weighted voting for governance and accrues a portion of the Curve Finance fees generated when locked as veCRV.

## **How to get CRV?**

CRV can be acquired in two ways:

* Bought off the market from an exchange
* As a reward for being a Liquidity provider in CRV with pools or lending markets that have CRV rewards. This ensures the protocol continues offering low fees and extremely low slippage.

## **Where can I find the release schedule?**

You can find the release schedule for the next six years at this address on the main UI: [**https://dao.curve.fi/inflation**](https://dao.curve.fi/inflation)​.

There is also detailed documentation in the [Supply & Distribution](./supply-distribution.md#crv-emissions-for-the-next-10-years) about the CRV emissions for the next 10 years, and the [supply calculator](./supply-distribution.md#supply-calculator) can be used to see the emissions for any year.

## **What is the current circulating supply?**

There are three ways to check the circulating supply:

* On the main UI here: [**https://dao.curve.fi/inflation**](https://dao.curve.fi/inflation).

* In the [supply calculator](./supply-distribution.md#supply-calculator) in these resources by looking at the statistics for today.

* The [**on-chain contract**](https://etherscan.io/address/0x14139EB676342b6bC8E41E0d419969f23A49881e) (`0x14139EB676342b6bC8E41E0d419969f23A49881e`) which shows the circulating supply, net of locked or otherwise vested tokens.

## **When was CRV launched?**

CRV was officially launched on the 13th of August 2020.

## **What is CRV vote-locking?**

"Vote-locking" refers to the process of locking CRV for a specified period to receive veCRV. The longer they lock for, the more veCRV they receive. Vote locking allows you to vote in governance, boost your CRV rewards and receive trading fees.  **Vote-locking boost** is when users with veCRV (vote-locked CRV) receive boosted rewards when they provide liquidity to a pool/lending market.

!!!warning "veCRV is not transferable"
    When you lock your CRV tokens for voting, you will receive veCRV based on the lock duration. The veCRV tokens are **non-transferable**. Once the lock period has ended, users can reclaim their CRV tokens.

## **What is the vote locking boost?**

When vote locking CRV, you will also earn a boost on your provided liquidity of up to 2.5x. The goal is to incentivize users to participate in governance by rewarding them with a bigger share of the daily CRV inflation.  See more [here](../reward-gauges/boosting-your-crv-rewards.md)

## **When did the boost start?**

The boost was first applied on the 26th of August 2020 around 11pm UTC.

## **What are veCRV?**

veCRV stands for voting escrow CRV. They are your CRV locked for voting. The longer you lock your CRV for, the more voting power you have (and the bigger boost you can reach). You can vote lock 1,000 CRV for a year to have a 250 veCRV weight. Each CRV locked for four years is equal to 1 veCRV.

The number of veCRV you will receive depends on how long you lock your CRV for. The minimum locking time is one week and the maximum locking time is four years.

Your veCRV weight gradually decreases as your escrowed tokens approach their lock expiry. A graph illustrating the decrease can be found at this address: [https://dao.curve.fi/locker](https://dao.curve.fi/locker)​

## **How is your boost calculated?**

To reach your maximum boost of 2.5x, there are several parameters to take into consideration.  You can see the formula for boosting [here](../reward-gauges/boosting-your-crv-rewards.md#formula)

You can find the current DAO voting power at this address: [https://dao.curve.fi/locker](https://dao.curve.fi/locker)​

**You can also find a calculator at this address:** [https://dao.curve.fi/minter/calc](https://dao.curve.fi/minter/calc)​

## **What if I provide liquidity in multiple pools?**

Your voting power applies to all gauges but may produce different boosts based on how much liquidity you are providing and how much total liquidity the pool has.

## **What happens if more people vote lock?**

If other liquidity providers vote lock more CRV, your boost will stay what it was when you applied it. If you abuse this, another user can kick and force a boost update to take you down to your real boost.

## **How often does my boost records voting power changes?**

Your voting weight decreases over time but your boost will take notice of your decreasing voting power at certain checkpoints like withdrawing, depositing into a gauge or minting CRV.

For example if you start at 1000 veCRV and your voting power decreases to 800 veCRV, your boost will still use your original voting power of 1000 veCRV until a user checkpoint.

## **How can I apply my boost?**

After creating or adding to your lock, you need to click the apply boost button to update your boost on each of the gauge you're providing liquidity in. Your boost can also be updated by depositing or withdrawing from a gauge.

Click below for a guide on how locking and boosting your CRV rewards

[Boosting your CRV Rewards](../reward-gauges/boosting-your-crv-rewards.md)

## **How to know my boost is active?**

If your boost is showing then it is active.

If you have locked but your boost isn't showing then you need to apply it.

## **How does the yearly emissions reduction work?**

The emissions reduction can be triggered by anyone after the time period (exactly 365 days) has elapsed since the last emissions reduction.  This is done by calling the `update_mining_parameters` function on the `CRV` contract at the address [`0xD533a949740bb3306d119CC777fa900bA034cd52`](https://etherscan.io/token/0xD533a949740bb3306d119CC777fa900bA034cd52).

When this is called a new epoch is started, triggering another 365 days.  If no one calls this function then CRV continues to be emitted at the current rate, and no new epoch is triggered.  If for example this was triggered 1 day late it would affect two important functions:

* The CRV supply will be higher than the theoretical maximum of 3,030,303,031.8 CRV
* The next emissions reduction will be delayed by 1 as the 365 day countdown begins 1 day late.

This also means however, that each time a leap year happens the date at which someone can reduce the emissions will be brought forward one day of the year.

## **How is CRV minted?**

CRV can be minted by users who stake in gauges after they are allocated some to mint.  When this happens CRV tokens are minted into existence, added to the total supply and transferred to the user.

If users choose to not mint until a later date, this can create a discrepancy between the theoretical supply of tokens and the real supply of tokens shown on block explorers.