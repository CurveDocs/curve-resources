<h1>st-crvUSD (Staked crvUSD)</h1>

st-crvUSD is a new product allowing users earn risk-free[^1] yield on their crvUSD. Users deposit into the interest earning vault, and their crvUSD auto-compounds by receiving a portion of crvUSD minting fees.

[^1]: **Risk-free** means your crvUSD is not used/rehypothecated anywhere, it just sits within the vault, earning interest.  However, there is always smart contract risk, but st-crvUSD is built upon Yearn v3 Vaults, which are in production in many DeFi applications, and have undergone [extensive audits](https://github.com/yearn/yearn-vaults-v3/tree/master/audits).

## **Purpose**

st-crvUSD serves as a supply sink for crvUSD, creating more demand to hold crvUSD beyond depositing in swap pools or supplying to lending markets. It aims to:

- **Make crvUSD attractive to just hold**: By providing a risk-free[^1] way to earn stablecoin yield.
- **Improve crvUSD peg stability**: With a risk-free[^1] form of yield, crvUSD buying demand is increased, solidifying peg.
- **Reduce crvUSD minting rates**: Minting rates increase as crvUSD falls below peg to incentivize borrowers to buy back crvUSD and close loans.  By increasing demand for crvUSD the peg tightens, reducing minting rates.
- **Increase crvUSD minting over time**: By decreasing minting rates and solidifying peg, borrowing costs become more predictable, all these factors make Curve a more attractive venue to borrow from.
- **Fee Revenue increases over time**: With more crvUSD minted, fees sustainably increase over time.

## **How the vault works for users**

Users deposit to the st-crvUSD vault, their **deposits are auto-compounded** within the vault at the current interest rate, and they **can deposit and withdraw at any time** (there are no locks).  Let's look at an example:

![stcrvUSD as a user](../images/stcrvusd/stcrvusd-as-a-user.svg#only-light){: .centered }
![stcrvUSD as a user](../images/stcrvusd/stcrvusd-as-a-user_dark.svg#only-dark){: .centered }

## **Where does the yield come from?**

Before st-crvUSD, all the crvUSD minting fees went to the Curve DAO (veCRV holders).  With st-crvUSD, most of the fees are still directed to the DAO, but a small amount is directed to the st-crvUSD vault:

![Fee split](../images/stcrvusd/stcrvusd_fee_split.svg#only-light){: .centered style="width: 75%;" }
![Fee split](../images/stcrvusd/stcrvusd_fee_split_dark.svg#only-dark){: .centered style="width: 75%;" }

**Curve DAO sets min and max percentages of crvUSD fees for st-crvUSD**. Each reward period[^2], the average ratio of staked to circulating crvUSD is calculated and this percentage is requested from the DAO to stream to st-crvUSD over the next reward period[^2], capped by the DAO limits.

[^2]: Reward periods will most likely be 1 week.  But these can change, so users can't abuse the calculations of staked-ratios, etc.

Example:

- $100k fees generated over a 1 week reward period[^2]
- DAO limits: 2% min, 20% max
- If 15% of crvUSD staked: $15k (15%) is streamed to crvUSD stakers over the following week
- If 30% of crvUSD staked: $20k (20%) is streamed to crvUSD stakers over the following week (capped at max)

## **Does this reduce veCRV yield?**

Short-term: Yes. **Long-term: No.**

Currently, crvUSD supply is stagnating/contracting, this is not good for veCRV holders and the DAO in the long term. Let's look at what's happening without st-crvUSD:

![State Diagram before st-crvUSD](../images/stcrvusd/current_crvusd_state_diagram.svg#only-light){: .centered style="width: 85%;" }
![State Diagram before st-crvUSD](../images/stcrvusd/current_crvusd_state_diagram_dark.svg#only-dark){: .centered style="width: 85%;" }

Borrowers mint crvUSD to buy assets, which means selling crvUSD and raising minting rates. **With st-crvUSD, as minting rates rise, st-crvUSD interest rate (APR) increases**. Borrowers needn't close loans to repeg crvUSD, as stakers are incentivized to buy crvUSD due to higher st-crvUSD APR:

![st-crvUSD State Diagram](../images/stcrvusd/stcrvusd_state_diagram.svg#only-light){: .centered style="width: 90%;" }
![st-crvUSD State Diagram](../images/stcrvusd/stcrvusd_state_diagram_dark.svg#only-dark){: .centered style="width: 90%;" }

Over time, with these dynamics, the peg should become tighter and minting rates should stabilize and lower over time, **allowing the crvUSD supply to sustainably grow, and revenue for veCRV holders to increase**.

## **How much yield will I earn?**

The yield earned on deposits relies on multiple factors:

- Average ratio of staked to circulating crvUSD over a reward period[^2]
- Min and Max crvUSD fee share (set by the DAO)
- crvUSD generated minting fees over a reward period[^2]

When the average staked-to-circulating crvUSD ratio is below the DAO's max fee share, st-crvUSD's APR roughly equals the average minting rate of the previous rewards period[^2].  For example, in a 1 week reward period[^2], with a staked ratio of 15% and a DAO max fee share of 20%, if the previous week's average minting rate was 7%, then st-crvUSD APR for the next week will be roughly 7%.  If the staked ratio was 40%, st-crvUSD APR would be 3.5% (half the minting rate).

### **Formulas**

$$\begin{aligned} 
\textsf{staked-ratio} &= \frac{\textsf{staked-crvUSD}}{\textsf{crvUSD-circulating-supply}} \\
\textsf{stcrvUSD-fees} &= \textsf{min} \left( \textsf{staked-ratio} \textsf{, max-fee-share} \right) \times \textsf{crvUSD-fees} \\
\textsf{stcrvUSD-APR} &= \frac{\textsf{stcrvUSD-fees} \times \textsf{reward-periods-in-year}}{\textsf{staked-crvUSD}}
\end{aligned}
$$

Where $\textsf{max-fee-share}$ is the maximum fee share set by the Curve DAO, and $\textsf{reward-periods-in-year}$ means how many reward periods[^2] there are between fee distributions, e.g., if fee distribution to st-crvUSD happens weekly, $\textsf{reward-periods-in-year}=52$.