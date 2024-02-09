## **Voting on the Curve DAO**

To vote on the Curve DAO, users need to lock vote lock their CRV. By doing so, participants can earn a boost on their provided liquidity and vote on all DAO proposals. Users who reach a voting power of 2500 veCRV can also create new proposals. There is no minimum voting power required to vote.

!!!warning
    When voting on DAO votes, a user's voting power starts to decay halfway through the vote as a measure to protect against manipulation by whales. This does not apply to gauge weight votes.

## **Voting Power**

veCRV stands for vote-escrowed CRV. It's a mechanism where users can lock their CRV tokens for varying lengths of time to gain voting power. Users have the option to lock their CRV for a minimum of one week and a maximum of four years. Those with longer voting escrows wield more stake, thereby receiving greater voting power.

A user's voting power gradually decreases over time until it reaches zero at the time of unlock. For instance, if a user decides to lock 100 CRV for four years, they will initially receive 100 veCRV. After one year, due to the constant decay, the user's veCRV balance will reduce to 75 veCRV, then to 50 veCRV after two years, etc... until it finally zeroes out after four years.

The existing lock can be extended at every point in time, resulting in a increased veCRV balance again.

## **The DAO Dashboard**

You can visit the Curve DAO dashboard at this address: [https://dao.curve.fi/dao](https://dao.curve.fi/dao)​

On this page, you can find all current and closed votes. All proposals should have a topic on the Curve governance forum at this address: [https://gov.curve.fi/](https://gov.curve.fi/)​

## **Submitting proposals**

If you wish to create a new official proposal, you should draft a proposal and post it on the governance forum. You must also research that it's possible and gauge interest of the community via the Curve Discord, Telegram or Governance forum.

If you're not sure about the technical details of submitting your proposal to the Ethereum blockchain, you can ask a member of the team to help.

## **Emergency DAO**

The emergency DAO multisig may kill non-factory pools up to 2 months old. It may also kill reward gauges at any time, setting its rate of CRV emissions to 0. Pools that have been killed will only allow users to `remove_liquidity`.

See the members of the emergency DAO in the technical docs: https://docs.curve.fi/curve_dao/ownership-proxy/Agents/#agents

The Curve DAO may override the emergency DAO decision of killing a pool, making it alive again.