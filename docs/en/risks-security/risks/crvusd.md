<h1>Curve Stablecoin: Risk Disclaimer</h1>

Curve stablecoin infrastructure enables users to mint crvUSD using a selection of crypto-tokenized collaterals (adding new ones is subject to DAO approval). Interacting with crvUSD doesn't come without risks. Before minting or taking exposure of crvUSD, it is best to research and understand the risks involved.

!!!info "Audits & Whitepaper"
    **crvUSD Audits** are available here: [https://docs.curve.finance/security/security/#security-audits](https://docs.curve.finance/security/security/#security-audits)

    **crvUSD Whitepaper** available here: [https://docs.curve.finance/assets/pdf/whitepaper_curve_stablecoin.pdf](https://docs.curve.finance/assets/pdf/whitepaper_curve_stablecoin.pdf)

---

## **CrvUSD Design Risks**

### Soft-Liquidation and Hard-Liquidation

Collateralized debt positions are managed passively through arbitrage opportunities: if the collateral's price decreases, the system automatically sells off collateral to arbitrageurs in a ‘soft-liquidation mode’. If the collateral's price increases, the system recovers the collateral. This algorithm is designed to dynamically adjust the collateral backing each crvUSD in real-time, responding to fluctuating market conditions. While this approach is intended to mitigate the severity of traditional liquidations—a process where collateral becomes insufficient, leading to irreversible sales at potentially undervalued prices—it does not eliminate the inherent risk of collateral volatility. Additional information can be found on [LLAMMA Overview](https://docs.curve.finance/crvUSD/amm/).

Borrowers in the crvUSD ecosystem are subject to specific risks associated with the liquidation process. It is crucial to understand that if the User’s collateral is placed into soft-liquidation mode, they are prohibited from withdrawing the collateral or augmenting their position with additional collateral. Entering soft-liquidation mode locks the collateral, removing the option to withdraw or add to it. In case market conditions suggest a strategic adjustment to the User’s position, they may face exacerbated risk due to such restrictions.

Users should be cautious about collateral management, as a sharp decline in the price of the collateral within a brief period can escalate losses, further deteriorating the health of the loan. Respectively, an increase in the collateral's value while in soft-liquidation can also cause “de-liquidation losses” - a situation where an appreciating market price for the collateral may negatively impact the loan’s health. During periods of high volatility and/or high Ethereum gas prices, arbitrage may be less efficient, causing losses incurred from soft liquidation to be exacerbated.

If the health of the loan falls to zero, the position is subject to hard liquidation, which is an irreversible process resulting in the loss of the collateral with no possibility of recovery or de-liquidation. This scenario underscores the critical need for risk management when using leverage. Leverage and collateral management should be approached with caution, reflecting a balanced assessment of potential gains against the risk of significant financial loss.

### Curve Pool EMA Oracles

Curve incorporates specialized on-chain Exponential Moving Average (EMA) oracles built into Stableswap-NG, Tricrypto-NG, and Twocrypto-NG Curve pool implementations. crvUSD markets derive price information from a select number of high TVL Curve pools. By utilizing the EMA smoothing methodology, oracles mitigate the impact of transient price fluctuations, aiming to reduce unnecessary losses caused by short-term market volatility or attempts to manipulate the oracle. Despite the manipulation-resistant design specification, Curve pool oracles may exhibit price distortions in certain scenarios that have the potential to result in missed or excessive liquidations. This may be a result of liquidity and volume migration to alternate venues that increase the risk of oracle manipulation. A detailed explanation of the aforementioned terms can be found in the [crvUSD Oracle documentation](https://docs.curve.finance/crvUSD/oracle/)

### Peg Stabilization Reserve (PSR)

crvUSD makes use of a Peg Stabilization Reserve (PSR) which consists of contracts authorized to deposit and withdraw crvUSD from a whitelisted Curve crvUSD Stableswappool up to a predefined debt cap. These contracts reference a subset of whitelisted stablecoins as a proxy for the intended USD price. Instability affecting any counterparty Reserve assets (e.g. USDT, USDC), which are also used to aggregate a USD price for crvUSD, may cause the Reserve to deposit all of its crvUSD into the pool in an attempt to rebalance. This creates a dependency on the Reserve counterparty assets that determines the stability of the crvUSD peg. An upgraded PegkeeperV2 design promises to alleviate this risk.

### Dynamic Interest Rates

The borrowing rate is algorithmically determined based on several factors, including:

- The crvUSD price as reported by an on-chain price aggregator contract
- The ratio of Reserve debt to total outstanding debt
- Several variables set by the Monetary Policy admin

Essentially, the borrow rate increases when the price of crvUSD goes lower and/or the proportion of Reserve debt to total debt reduces. This process is intended to dynamically regulate market behavior such that it reinforces the crvUSD peg. Changes to the Monetary Policy are authorized only by the Curve DAO. A [crvUSD simulation tool](https://github.com/0xreviews/crvusdsim) by 0xReviews allows Users to visualize the influence of these factors on the borrowing rate.

There may be assumptions in the Monetary Policy design that, in some circumstances, cause interest rates to produce undesired outcomes, and which may cause a sub-optimal experience for borrowers. In general, interest rates on borrowing may change dramatically in response to changing market circumstances, and may not reflect a borrower's expectations when they had opened their position.

---

## **Market Risks**

### Liquidity Risk

Users should be aware that ample crvUSD liquidity on exchange is necessary for facilitating liquidations. Circumstances leading to a reduction in the available crvUSD liquidity for liquidators are plausible. Such scenarios can significantly impact the proper functioning of the stablecoin market, particularly concerning the process of liquidation.

crvUSD relies on liquidity concentrated within particular pools used for the Peg Stabilization Reserve (PSR), which serve a dual purpose as both a source of liquidity and price feeds for crvUSD oracles. If the incentives for depositing crvUSD into these pools are insufficient, the liquidity shortfalls can result in missed liquidations or deflationary price spirals (cascading liquidations). This phenomenon occurs when initial liquidations fail to be executed effectively, leading to a domino effect of further liquidations and potentially rapid, significant decreases in asset prices.

### No Guarantee of Price Stability

The value of the crypto assets used as collateral for crvUSD is subject to high levels of volatility and unpredictability. The pricing of these assets may be extremely speculative and prone to rapid fluctuations. Such market characteristics can impact the stability of crvUSD’s value. While the LLAMMA algorithm aims to adjust collateral levels to support crvUSD’s value, there is no guarantee that these adjustments will always preserve stability, especially during periods of extreme market volatility.

### Depegging Risk

The blockchain ecosystem has witnessed instances where stablecoins experienced significant and prolonged periods of depegging from their intended value. Despite the innovative measures designed to uphold price stability, crvUSD is not exempt from the risk of depegging. Market volatility, shifts in regulatory landscapes, sudden and substantial changes in the value of collateral assets, or unforeseen technical issues can precipitate a departure from its pegged value.

---

## **Technology Risk**

### Smart Contract Risk

crvUSD relies on smart contracts, which are self-executing pieces of code. While these contracts are designed to be secure, there is a risk that they may contain vulnerabilities or bugs. Malicious actors could exploit these vulnerabilities, resulting in the loss of funds or other adverse consequences. Users need to conduct due diligence and review the smart contracts and security audit reports to assess the inherent risks.

Curve smart contracts have undergone multiple audits by reputable firms, including MixBytes and ChainSecurity, to enhance protocol security. While smart contract audits play an important role in good security practices to mitigate user risks, they don't eliminate all risks. Users should always exercise caution regardless of Curve's commitment to protocol security.

### No Loss Prevention

crvUSD and its underlying infrastructure are in an early stage of development, are inherently experimental, and carry a significant degree of risk. Engagement with crvUSD during this phase should be approached with the understanding that it may lead to partial or complete loss of funds. Users considering minting, redeeming, or utilizing crvUSD should be prepared for the possibility of encountering technical issues, bugs, or vulnerabilities that could impact the value of crvUSD or the safety of allocated crypto assets.

### General Blockchain Technology Risks

Engaging with crypto assets involves exposure to a range of technological risks inherent to the use of new and evolving technologies. Users must be aware of key risk factors (as outlined below) and consider their implications for crypto asset transactions.

1. **Irreversibility of Transactions**: Once executed, transactions in crypto assets cannot be reversed. Errors or accidental transactions cannot be easily rectified, potentially leading to permanent loss of assets.
2. **Anonymity**: The degree of anonymity provided by blockchain technology can complicate the tracing of funds and the identification of parties in transactions.
3. **Software Dependencies**: Crypto asset operations rely heavily on the flawless functioning of complex software, including wallets, smart contracts, and blockchain networks. Any defects, bugs, or vulnerabilities in software can impair access to or use of crypto assets, leading to potential losses.
4. **Cybersecurity Incidents**: The digital nature of crypto assets makes them a target for hackers, malicious actors, and other cybersecurity threats. Failures, hacks, exploits, protocol errors, and unforeseen vulnerabilities can compromise the security of assets, resulting in theft, loss, or unauthorized access.
5. **Operational Challenges**: The process of recording and settling transactions on a blockchain depends on the network's stability and performance. Disruptions, high transaction volumes, or network congestion can delay settlement times, affecting the liquidity and availability of assets.

---

*Disclaimer: The information provided within this context does not constitute financial, legal, or tax advice personalized to your specific circumstances. The content presented is for informational purposes only and should not be relied upon as a substitute for professional advice tailored to your individual needs. It is recommended that you seek the advice of qualified professionals regarding financial, legal, and tax matters before engaging in any activities on Curve.*
