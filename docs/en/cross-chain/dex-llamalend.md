<h1>Cross-chain: DEX & LlamaLend</h1>

## **DEX (Decentralized Exchange)**

The Curve DEX is available on many chains, with more becoming available all the time.  Providing liquidity to a pool, as well as the process of creating new pools is the same across all chains.  Both [**Stableswap**](../pools/overview.md#stableswap-curve-v1) and [**Cryptoswap**](../pools/overview.md#cryptoswap-curve-v2) pools are available on all chains.

Fees from swaps on all chains are split 50/50 with LPs and the CurveDAO.  Fees are bridged back to Ethereum for distribution to veCRV holders when it's profitable to do so.

CRV inflation rewards are possible on L2s and alt-L1s, but they are delayed by 1 week.  So if users vote to send CRV rewards to a pool on an L2 or another L1, they must fully accrue on Ethereum in a [Root Gauge](https://docs.curve.finance/liquidity-gauges-and-minting-crv/xchain-gauges/RootGauge/) for 1 week, before they are bridged to the [Child Gauge](https://docs.curve.finance/liquidity-gauges-and-minting-crv/xchain-gauges/ChildGauge/) and emitted over the following week.

### [**Curve-lite** (Curve-Core)](https://github.com/curvefi/curve-core)

[Curve-lite](https://github.com/curvefi/curve-core) is a trustless way for operators of new chains to deploy all the necessary contracts to add a new chain to Curve's DEX.  With a simple script anyone can deploy all the necessary contracts for Curve, including:

- Trustless Pool Creation - including Stableswap and Cryptoswap pools
- Swap Router - so users don't have to manually select pools to swap through
- Reward contracts - so any reward token can be easily streamed to LPs
- Governance contracts so parameters can be set, and admin fees can be taken back to Ethereum for the DAO

## **Llamalend**

Llamalend is currently available on 4 chains: [**Ethereum**](https://curve.finance/lend/ethereum/), [**Arbitrum**](https://curve.finance/lend/arbitrum/), [**Fraxtal**](https://curve.finance/lend/fraxtal/), [**Optimism**](https://curve.finance/lend/optimism/).

CRV inflation rewards are possible on L2s and alt-L1s, but they are delayed by 1 week.  So if users vote to send CRV rewards to a Llamalend market on an L2 or alt-L1, they must fully accrue on Ethereum in a [Root Gauge](https://docs.curve.finance/liquidity-gauges-and-minting-crv/xchain-gauges/RootGauge/) for 1 week, before they are bridged to the [Child Gauge](https://docs.curve.finance/liquidity-gauges-and-minting-crv/xchain-gauges/ChildGauge/) and emitted over the following week.

More chains are expected to be available soon for Llamalend, with the Curve-lite project expected to include Llamalend in the future.