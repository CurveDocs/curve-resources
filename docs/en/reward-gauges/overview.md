On Curve Finance, [CRV inflation](../crv-token/supply-distribution.md#community-emissions-crv-inflation) goes to users who stake in Reward Gauges in Pools and Lending markets.

Many Curve pools and lending markets have Reward Gauges. By staking liquidity provider tokens in these gauges, users earn rewards proportional to their share of the total staked value.

Some special gauges also exist to fund specific initiatives, like Vyper development (veFunder-vyper).

# **Gauge Weights**

For a Gauge to receive CRV emissions it must be added to the `GaugeController`.  The DAO must vote and approve each new gauge added, [more details here](./creating-a-pool-gauge.md#submit-a-dao-vote).

Each Gauge added to the `GaugeController` has a weight and a type. The weights represent how much of the daily [CRV inflation]](../crv-token/supply-distribution.md#community-emissions-crv-inflation) will be received by the rewards gauge.

# **Gauge Weight Voting**

The weight system allow the Curve DAO to dictate where the CRV inflation should go. You can vote at this address: [https://curve.fi/dao/ethereum/gauges/](https://curve.fi/dao/ethereum/gauges/)​

By doing so, users with veCRV can put direct their voting power towards the pool, lending market or other gauge they think should receive the most CRV.

# **When are the weights and rewards updated?**

On Ethereum mainnet **weights and rewards are updated every Thursday 00:00 UTC**.

On L2s and other chains, weights and rewards start on flow to intermediary gauge contracts on Ethereum mainnet every Thursday 00:00 UTC, then from the following Thursday 00:00 UTC (1 week later) they flow to gauge stakers on the L2s.  So **cross-chain gauge rewards are 1 week behind Ethereum mainnet**.