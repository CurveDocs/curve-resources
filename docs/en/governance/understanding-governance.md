<h1>Understanding Governance</h1>

## **Voting on the Curve DAO**

To vote in the Curve DAO, users need to [vote lock their CRV](../vecrv/locking-your-crv.md). By doing so, participants can earn a boost on their provided liquidity and vote on all DAO proposals. Users who reach a voting power of 2,500 veCRV can also create new proposals. There is no **minimum voting power required to participate in voting. The duration of governance proposals is seven days**.

!!!warning "Voting Power Decay"
    When voting on DAO proposals, a user's voting power on an individual proposal starts to decay halfway through the vote as a measure to protect against manipulation by whales. This does not apply to gauge weight votes. Additionally, overall voting power decays linearly over time. More details are provided in the section below.

    **Example:** A user begins the voting period for a proposal with 100 veCRV. If the voting duration is 7 days, their voting power will remain at 100 veCRV for the first 3.5 days. After this point, their voting power starts to decay linearly. By day 5.25 (which is halfway through the decay period), their voting power would have decreased to 50 veCRV. By the end of the 7-day voting period, the user’s voting power would have diminished further, approaching 0 veCRV.


---


## **Voting Power**

veCRV stands for [vote-escrowed CRV](../vecrv/overview.md). It's a mechanism where users can lock their CRV tokens for varying lengths of time to gain voting power. Users have the option to lock their CRV for a minimum of one week and a maximum of four years. Those with longer voting escrows wield more stake, thereby receiving greater voting power.

A user's voting power gradually decreases over time until it reaches zero at the time of unlock. For instance, if a user decides to lock 100 CRV for four years, they will initially receive 100 veCRV. After one year, due to the constant decay, the user's veCRV balance will reduce to 75 veCRV, then to 50 veCRV after two years, etc... until it finally zeroes out after four years.

The existing lock can be extended at every point in time, resulting in a increased veCRV balance again.


---


## **DAO Votes**

There are three different kinds of votes:

1. **Ownership votes**, which control most functionality within the protocol. These votes require a 30% quorum with 51% support.
2. **Parameter votes**, which can modify pool parameters. These votes require a 15% quorum with 60% support.
3. **Emergency votes**, which are executed through a multisig consisting of nine members, comprised of reputable figures within the DeFi and Crypto community. More here: [Emergency DAO](#emergency-dao).

!!!info "Voting Quorum"
    Intuitively, one might think that the total number of votes (`YES` and `NO`) would count towards the quorum. However, this is not the case here. Only `YES` votes are counted towards the quorum.

    This can lead to scenarios like this: https://twitter.com/WormholeOracle/status/1782646259536531808


---



## **Emergency DAO**

The EmergencyDAO is a **5 of 9 multisig** which has **very limited actions**. It **may kill non-factory pools** up to 2 months old. Pools that have been killed will only allow users to `remove_liquidity`. It may also **kill liquidity gauges** at any time, setting its rate of CRV emissions to 0 and therefore not allowing any further CRV emission to the pool. 

The EmergencyDAO multisig is deployed at [`0x467947EE34aF926cF1DCac093870f613C96B1E0c`](https://etherscan.io/address/0x467947EE34aF926cF1DCac093870f613C96B1E0c) and currently consists of the following signers:



<div class="centered" markdown="block">
| Name            | Details - Telegram Handle |
| --------------- | ------------------------- |
| `banteg`        | `Yearn, @banteg`          |
| `Calvin`        | `@calchulus`              |
| `C2tP`          | `Convex, @c2tp_eth`       |
| `Darly Lau`     | `@Daryllautk`             |
| `Ga3b_node`     | `@ga3b_node`              |
| `Naga King`     | `@nagakingg`              |
| `Peter MM`      | `@PeterMm`                |
| `Addison`       | `@addisonthunderhead`     |
| `Quentin Milne` |  `StakeDAO, @Kii_iu`      |
</div>

---


## **Cross-Chain Governance**

Since Curve is deployed on various chains, there is a need for a permissionless cross-chain governance framework to grant the DAO control over contracts across these chains. To address this, Curve has deployed various contracts on those chains to ensure DAO control. Even for cross-chain votes, **voting always takes place on the Ethereum Mainnet**. Once the vote concludes, the final **outcome is transmitted via a message to the corresponding chain**, where it is then executed.

!!!warning "DAO Control Across Chains"
    While DAO control of Curve smart contracts is ensured on most chains, some chains might not yet offer the required infrastructure to support this cross-chain framework. A list of all cross-chain ownership-related contracts, as well as more technical documentation, can be found [here](https://docs.curve.fi/deployments/xgov-xgauges/#curve-x-gov).


---


## **The DAO Dashboard**

Users can access the Curve DAO dashboard at [https://curve.fi/dao](https://curve.fi/dao). This dashboard provides an overview of all current and closed votes. Each proposal should have a corresponding topic on the Curve governance forum, accessible at [https://gov.curve.fi/](https://gov.curve.fi/).


---


## **Creating Proposals**

To create an official proposal, users should first draft the proposal and post it on the governance forum. It’s important to evaluate the proposal’s feasibility and gauge community interest through the Curve Discord, Telegram, or Governance forum.

If users are unsure about the technical aspects of submitting the proposal to the Ethereum blockchain, they can seek assistance from a member of the team.

For more details, see: [Creating DAO Proposals](./proposals/creating-a-dao-proposal.md)