Getting started with Curve isn’t easy, there is a lot to grasp and the unique UI can be a lot to take in. This small guide is intended for Curve beginners with an understanding of DeFi and Crypto. It tries to answer recurring questions about how to get started with Curve and how it works or makes money for liquidity providers.

# **What is Curve.fi?**

Curve.fi is a non-custodial decentralized exchange that revolutionized stablecoin trading. It began by offering superior exchange rates for stablecoin swaps (like DAI to USDC) through liquidity pools, where users earn yield by depositing their assets.

As the platform evolved, it expanded beyond stablecoins to include volatile asset pools, pairing cryptocurrencies like ETH with stablecoins like USDT. The protocol's latest innovation is crvUSD, a native stablecoin that users can borrow against collateral such as liquid staked ETH and wrapped BTC. This development led to the creation of the broader Curve Lending system, which supports loans backed by a wider range of assets.

Security is paramount at Curve – the protocol's non-custodial design means your tokens remain under your control, never in the hands of developers. Additionally, all Curve smart contracts are non-upgradable, ensuring that the core logic protecting user funds remains unchanged.

True to its pioneering spirit, Curve continues to develop cutting-edge DeFi solutions that push the boundaries of what's possible in decentralized finance.

---

# **What are Liquidity Pools & Why Should I Deposit?**

Liquidity pools are pools of tokens held in smart contracts that allow users to exchange or withdraw tokens at set rates. By adding liquidity to a Curve pool, you earn passive income through trading fees, with rewards based on your contribution. Additionally, you may receive extra incentives like CRV tokens or Points, increasing your returns. Providing liquidity also helps maintain efficient, low-cost trades for all swappers, benefiting the whole DeFi ecosystem.

For more information, visit the following section: [Understanding Curve Pools](pools/overview.md)

---

# **What is the crvUSD Stablecoin?**

crvUSD is a fully decentralized stablecoin unique in both its backing and risk management model. Users can mint crvUSD by borrowing against high-quality collateral like ETH, BTC, and their wrapped and liquid staked variants through the crvUSD loans platform on Ethereum.
What sets crvUSD apart is its innovative approach to managing loan health:

- Unlike traditional DeFi platforms (such as Aave or Maker) that liquidate based on price thresholds, crvUSD focuses on overall loan health
- When collateral value drops, a portion of the collateral is gradually converted to crvUSD to maintain loan health
- If collateral prices recover, this process reverses automatically, returning the converted collateral to the borrower
- Liquidations only occur if the loan's health deteriorates beyond a critical threshold, rather than being triggered by price alone

This combination of high-quality collateral and health-based risk management makes crvUSD one of the most sophisticated and secure stablecoins in DeFi, providing borrowers with more flexibility to weather market volatility.

Find out more in the [crvUSD resources](./crvusd/overview.md), or directly on the [crvUSD UI](https://curve.finance/crvusd/#/ethereum).

---

# **What is Curve Lend? (Llamalend)**

Curve Lend (Llamalend) expands Curve's novel liquidation protection system to borrowing markets for riskier assets. Unlike the main protocol which mints new crvUSD, Curve Lend creates lending markets where:

- Suppliers provide existing crvUSD to the lending pools
- Borrowers can access these funds by paying fees to suppliers
- A wider range of riskier assets can be used as collateral
- Loans are protected through gradual collateral conversion instead of immediate liquidations

This design creates a win-win scenario: suppliers earn fees by providing crvUSD, while borrowers benefit from Curve's more forgiving approach to loan management, even when borrowing against more volatile assets.

Learn more about lending here: [Lending resources](lending/overview.md)

---

# **Can I Launch a Pool or Lending Market?**

**Yes! All new Curve pools and lending markets are deployed permissionlessly**. This means anybody can deploy a pool or lending market, anytime, anywhere. For full guides, check our [Pool creation section](pool-creation/pool-creation-overview.md) or [guide on creating a lending market](lending/create-lending-market.md).
​
---

# **What is the CRV Token?**

CRV is the governance and utility token for the Curve ecosystem. Its most distinctive feature is the locking mechanism: users can lock their CRV tokens for up to 4 years, converting them to veCRV (vote-escrowed CRV). This longer-term commitment comes with two key benefits:

- Voting power in Curve governance decisions
- A share of fees generated across Curve's products

This lock-up system was specifically designed to align the interests of token holders with the platform's long-term success – the longer users lock their tokens, the greater their influence and rewards in the ecosystem.

Learn more about CRV here: [Understanding CRV](crv-token/overview.md), or Curve Governance here: [Understanding Governance](governance/understanding-governance.md)
