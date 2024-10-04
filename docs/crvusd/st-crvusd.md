<h1>st-crvUSD (Staked crvUSD)</h1>

st-crvUSD is a new product allowing users earn risk-free[^1] yield on their crvUSD. Users deposit into the interest earning vault, and their crvUSD auto-compounds by receiving a portion of crvUSD minting fees[^2] (borrowing interest fees).

[^1]: **Risk-free** means your crvUSD is not used/rehypothecated anywhere, it just sits within the vault, earning interest.  However, there is always smart contract risk, but st-crvUSD is built upon Yearn v3 Vaults, which are in production in many DeFi applications, and have undergone [extensive audits](https://github.com/yearn/yearn-vaults-v3/tree/master/audits).

[^2]: **crvUSD Minting Fees/Minting Rates**: These are also known as crvUSD Borrowing fees/Borrowing rates or interest rate fees.  We've called them minting fees here to differentiate between the borrowing interest fees in Llamalend, which do not flow to the DAO but instead go to lenders of that Llamalend market.

## **Purpose**

st-crvUSD serves as a supply sink for crvUSD, creating more demand to hold crvUSD beyond depositing in swap pools or supplying to lending markets. It aims to:

- **Make crvUSD attractive to just hold**: By providing a risk-free[^1] way to earn stablecoin yield.
- **Improve crvUSD peg stability**: With a risk-free[^1] form of yield, crvUSD buying demand is increased, solidifying peg.
- **Reduce crvUSD minting rates**: Minting rates increase as crvUSD falls below peg to incentivize borrowers to buy back crvUSD and close loans.  By increasing demand for crvUSD the peg tightens, reducing minting rates.
- **Increase crvUSD minting over time**: By decreasing minting rates and solidifying peg, borrowing costs become more predictable, all these factors make Curve a more attractive venue to borrow from.
- **Fee Revenue increases over time**: With more crvUSD minted, fees sustainably increase over time.

## **How the vault works for users**

Users deposit to the st-crvUSD vault, their **deposits are auto-compounded** within the vault at the current interest rate, and they **can deposit and withdraw at any time** (there are no locks).  Let's look at an example:

![stcrvUSD as a user](../images/stcrvusd/stcrvusd_as_a_user.svg#only-light){: .centered }
![stcrvUSD as a user](../images/stcrvusd/stcrvusd_as_a_user_dark.svg#only-dark){: .centered }

## **Where does the yield come from?**

Before st-crvUSD, all the crvUSD minting fees[^2] went to the Curve DAO (veCRV holders).  With st-crvUSD, most of the fees are still directed to the DAO, but a small amount are directed to the st-crvUSD vault through the [Fee Splitter](../vecrv/fee-collection-distribution.md#fee-splitter):

![Fee split](../images/stcrvusd/stcrvusd_fee_split.svg#only-light){: .centered style="width: 75%;" }
![Fee split](../images/stcrvusd/stcrvusd_fee_split_dark.svg#only-dark){: .centered style="width: 75%;" }

**The Curve DAO sets minimum and maximum percentages of crvUSD fees allocated to st-crvUSD holders**. It also sets a boost factor that can increase or decrease rewards within these limits. At the start of each reward period[^3], the system calculates the average ratio of staked to circulating crvUSD. Based on this ratio, it requests a percentage of fees from the DAO to distribute to st-crvUSD holders over the next period[^3], subject to the predetermined limits.

[^3]: Reward periods will most likely be 1 week.  But these can change, so users can't abuse the calculations of staked-ratios, etc.

Example:

- **$100k fees** generated over a **1 week** reward period[^3]
- st-crvUSD DAO allocation limits: **2% min, 20% max**, with a boost factor of 1
- If **15%** of **crvUSD staked**: **$15k** (15%) is streamed to crvUSD stakers over the following week
- If **30%** of **crvUSD staked**: **$20k** (20%) is streamed to crvUSD stakers over the following week (capped at max)
- If **10%** of **crvUSD staked** with a boost factor of 1.2: **$12k** (12%) is streamed to crvUSD stakers over the following week

## **Does this reduce veCRV yield?**

Short-term: Yes. **Long-term: No.**

The current stagnation and contraction of crvUSD supply pose long-term challenges for veCRV holders and the DAO.  Let's look at what's happening without st-crvUSD:

![State Diagram before st-crvUSD](../images/stcrvusd/current_crvusd_state_diagram.svg#only-light){: .centered style="width: 85%;" }
![State Diagram before st-crvUSD](../images/stcrvusd/current_crvusd_state_diagram_dark.svg#only-dark){: .centered style="width: 85%;" }

Borrowers mint crvUSD to buy assets, which means selling crvUSD and raising minting rates. **With st-crvUSD, as minting rates rise, st-crvUSD interest rate (APR) increases**. Borrowers needn't close loans to repeg crvUSD, as stakers are incentivized to buy crvUSD due to higher st-crvUSD APR:

![st-crvUSD State Diagram](../images/stcrvusd/stcrvusd_state_diagram.svg#only-light){: .centered style="width: 90%;" }
![st-crvUSD State Diagram](../images/stcrvusd/stcrvusd_state_diagram_dark.svg#only-dark){: .centered style="width: 90%;" }

Over time, with these dynamics, the peg should become tighter and minting rates should stabilize and lower over time, **allowing the crvUSD supply to sustainably grow, and revenue for veCRV holders to increase**.

## **How much yield will I earn?**

The yield earned on deposits relies on multiple factors:

- Average ratio of staked to circulating crvUSD over a reward period[^3]
- Min and Max crvUSD fee share (set by the DAO)
- crvUSD generated minting fees[^2] over a reward period[^3]

### **Simple Formula**

When the staked ratio is between the DAO's min and max fee allocation:

$$\textsf{APR} \approx \textsf{avg. previous period minting rate} \times \textsf{boost}$$

If the staked ratio is below the min fee allocation, the rewards will be proportionally higher than the above formula, and if above the max, they will be proportionally lower.

For example, in a 1 week reward period[^3], with a staked ratio of 15% and a DAO max fee share of 20%, if the previous week's average minting rate was 10%, and boost factor is 1, then st-crvUSD APR for the next week will be roughly 10%.  If the staked ratio was 40%, st-crvUSD APR would be 5% (half the minting rate), as the maximum fees (20%) are spread over twice as many deposits (40%).  See example below for a step-by-step explanation.

??? Example

    Using the formulas below let's setup the example:

    - 52M crvUSD circulating supply, and 10.4M crvUSD staked
    - The DAO has set the following parameters: boost = 1, min fee share = 5%, max fee share = 20%
    - 1 week reward period with 100k fees generated.

    Step by step:

    1. $\textsf{staked-ratio} = \frac{10,400,000}{\textsf{52,000,000}} = 20\%$
    2. $\textsf{staked-ratio} \times \textsf{boost} = 20\% \times 1 = 20\%$
        
        20% is higher than the minimum (10%), and actually equals the maximum, so $\textsf{stcrvUSD-share}=20\%$
    3. $\textsf{stcrvUSD-fees}=20\% \times 100,000 = 20,000$
    4. $\textsf{stcrvUSD-APR} = \frac{20,000 \times 52}{10,400,000} = 10\%$

    So the APR for the above example is 10%.



### **Formulas**

$$\begin{aligned} 
\textsf{staked-ratio} &= \frac{\textsf{staked-crvUSD}}{\textsf{crvUSD-circulating-supply}} \\
\textsf{stcrvUSD-share} &= \textsf{min} \left( \textsf{max} (\textsf{staked-ratio} \times \textsf{boost} , \textsf{min-fee-share}) , \textsf{max-fee-share} \right) \\
\textsf{stcrvUSD-fees} &=  \textsf{stcrvUSD-share} \times \textsf{crvUSD-fees} \\
\textsf{stcrvUSD-APR} &= \frac{\textsf{stcrvUSD-fees} \times \textsf{reward-periods-in-year}}{\textsf{staked-crvUSD}}
\end{aligned}
$$

Where :

- $\textsf{min-fee-share}$ and $\textsf{max-fee-share}$ is the minimum and maximum fee share set by the Curve DAO
- $\textsf{stcrvUSD-share}$ is the percentage st-crvUSD is allocated
- $\textsf{boost}$ is a parameter which can be set by the DAO to increase or limit st-crvUSD allocations
- $\textsf{reward-periods-in-year}$ means how many reward periods[^3] there are between fee distributions, e.g., if fee distribution to st-crvUSD happens weekly, $\textsf{reward-periods-in-year}=52$.