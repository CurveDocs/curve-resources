<h1>Proposals</h1>

[See proposals and vote here](https://curve.finance/dao/ethereum/proposals/)

Proposals are DAO votes.  Proposal voting lasts 7 days.  On the UI for each proposal you will see:

![Proposal Example](../images/gov/voting-proposal-example-light.png#only-light){ .centered }
![Proposal Example](../images/gov/voting-proposal-example-dark.png#only-dark){ .centered }

- **State**: Active (voting ongoing), Passed, Executable, Executed, Denied.
- **Number**: each proposal increments by one.
- **Type**: ownership or parameter.
- **Time Remaining**.
- **Description**.
- **Quorum**: Minimum `For` veCRV votes out of the total veCRV supply.
- **Min Support**: Minimum percentage of `For` votes out of the total votes.

---

## **Voting on Proposals**

Anyone with veCRV can vote on any proposal (if they had veCRV before voting began).  When voting on DAO proposals, a user's voting power on an individual proposal starts to decay halfway through the vote as a measure to protect against manipulation at the last minute by whales. **This does not apply to gauge weight votes.**

For each 7-day proposal, voting earlier gives your vote maximum influence:

* **First 3.5 days:** Your vote has **full (100%) voting power**.
* **Last 3.5 days:** Your voting power **declines linearly to 0%** by the end of the voting period.

![Proposal Voting Power Decay](../images/gov/voting-power-light.png#only-light){ .centered }
![Proposal Voting Power Decay](../images/gov/voting-power-dark.png#only-dark){ .centered }

---

## **Creating New Proposals**

To propose changes for Curve:

1. Draft and discuss the proposal in [Curve’s governance forum](https://gov.curve.finance/).
2. Engage the community via [:simple-discord: Discord](https://discord.gg/twUngQYz85), [:simple-telegram: Telegram](https://t.me/curvefi), or [Governance Forum](https://gov.curve.finance/) for feedback and feasibility checks.
3. Officially submit your proposal on-chain (seek technical assistance from the Curve team if needed).
