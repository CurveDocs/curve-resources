<h1>The Curve DAO</h1>

The Curve DAO is a true DAO, governed solely by it's members.  Members gain governance rights by locking CRV into veCRV tokens, and members have more voting rights the longer they left before unlocks.  This reduces governance attacks, and helps align incentives so the DAO passes proposals which help it long term.

* [**Locking CRV**](./locking-crv.md): Users must lock CRV to participate in DAO governance and duties.
* [**Proposals**](./proposals.md): These are DAO votes.  Voting lasts 7 days, and votes pass if they meet the Quorum and Min support thresholds.  Anyone with veCRV can vote on proposals, and holders of at least 2500 veCRV can create votes.
* [**Gauges**](./gauges.md): Each week veCRV holders vote on where the weekly CRV emissions will go.  Gauges are how CRV emisisons are distributed to LPs in DEX pools, suppliers to lending markets, etc.
* **Analytics**: Shows analytics about veCRV metrics, holders, and DAO fee distribution.
* **Discussion**: The DAO's governance discussion forum.  Users are free to post and discuss any current proposals or future proposals or ideas.

Users can access the Curve DAO dashboard at [https://curve.finance/dao](https://curve.finance/dao). This dashboard provides an overview of all current and closed votes. Each proposal should have a corresponding topic on the Curve governance forum, accessible at [https://gov.curve.finance/](https://gov.curve.finance/).

---

## **Emergency DAO**

The EmergencyDAO is a **5-of-9 multisig** group authorized for emergency interventions, for example:

* Stopping CRV emissions on most gauges, however cannot stop deposits/withdrawals from the gauge.
* Recovering ERC20 tokens from the DAO's revenue collection and distribution process.
* Pausing the Peg Stabilization Reserve’s associated contracts to stop them from depositing or withdrawing crvUSD. This pause does not affect the pool level.

Multisig Address: [`0x467947EE34aF926cF1DCac093870f613C96B1E0c`](https://etherscan.io/address/0x467947EE34aF926cF1DCac093870f613C96B1E0c)

The multi-sig contains of the following members:

<div class="centered" markdown="block">
| Name            | Telegram Handle       |
| --------------- | --------------------- |
| `banteg`        | `Yearn, @banteg`      |
| `Calvin`        | `@calchulus`          |
| `C2tP`          | `Convex, @c2tp_eth`   |
| `Darly Lau`     | `@Daryllautk`         |
| `Ga3b_node`     | `@ga3b_node`          |
| `Naga King`     | `@nagakingg`          |
| `Peter MM`      | `@PeterMm`            |
| `Addison`       | `@addisonthunderhead` |
| `Quentin Milne` | `StakeDAO, @Kii_iu`   |
</div>

---

## **Cross-Chain Governance**

Curve operates across multiple blockchain networks. Governance is centralized on Ethereum Mainnet:

* Votes always happen on **Ethereum Mainnet**.
* Final vote outcomes are communicated cross-chain to execute governance decisions.

!!!warning "DAO Control Across Chains"
    DAO control is supported on most chains.  [Technical details here](https://docs.curve.finance/governance/x-gov/overview/).
