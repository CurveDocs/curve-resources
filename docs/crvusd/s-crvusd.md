<h1>Savings-crvUSD</h1>

Savings-crvUSD, abbreviated as scrvUSD, is a **yield-bearing version of crvUSD** that earns yield simply by holding the token. Users do not need to manually claim any rewards whatsoever, as they are passively accrued.


---


## **Why s-crvUSD?**

scrvUSD provides an additional yield-earning opportunity for crvUSD, diversifying the ways users can earn on their crvUSD holdings. It aims to:

- **Increase crvUSD attractiveness**: By offering a low-risk[^1] way to earn stablecoin yield.
- **Improve crvUSD peg stability**: The low-risk[^1] yield increases demand for crvUSD, which helps solidify its peg.
- **Reduce and stabilize crvUSD borrow rates**: Borrow rates for crvUSD rise when its price falls below the peg. By increasing demand for crvUSD, the peg tightens, reducing borrow rates and aiming to stabilize them over the long term.
- **Increase crvUSD supply over time**: As borrow rates decrease and stabilize, borrowing becomes more predictable, making Curve a more attractive platform for loans.
- **Increase fee revenue over time**: With more crvUSD in circulation, fee revenue sustainably grows over time.

[^1]: **Low-risk** is subjective and depends on the user's risk tolerance. In this context, it means the deposited crvUSD is not used or rehypothecated; it simply remains in the Savings Vault, earning interest. However, smart contract risks remain. That said, st-crvUSD is built upon Yearn v3 Vaults, which are widely used in DeFi and have undergone [extensive audits](https://github.com/yearn/yearn-vaults-v3/tree/master/audits).


---


## **How to deposit and withdraw crvUSD**

Users can obtain scrvUSD by simply depositing crvUSD into the Savings Vault[^2]. In exchange, they receive scrvUSD tokens. To earn yield, users don't need to do anything else—the yield is accrued in the background. Therefore, the user's balance of scrvUSD doesn't increase. When redeeming scrvUSD, users receive their initial deposit plus the accrued yield.

[^2]: While depositing crvUSD into the Savings Vault is the most straightforward way to get scrvUSD, the token can technically also be bought on secondary markets such as liquidity pools on Curve.

Simply deposit and withdraw crvUSD in the UI: [Depositing and Withdrawing crvUSD](https://yearn.finance/savings-crvusd).

Let's look at an example:

![stcrvUSD as a user](../images/scrvusd/scrvusd_as_a_user_light.svg#only-light){: .centered }
![stcrvUSD as a user](../images/scrvusd/scrvusd_as_a_user_dark.svg#only-dark){: .centered }


---


## **How is the yield accrued?**

Earning yield with scrvUSD is very simple. Simply holding scrvUSD in a wallet is enough to earn yield. There is no need to stake or lock scrvUSD to be eligible to earn rewards.

The yield is accrued passively and constantly increases the underlying value of scrvUSD. For example, if a user deposits 100 crvUSD and receives 100 scrvUSD in exchange, and the yield accrued is 10% per year, the user will still have 100 scrvUSD, but the value of each scrvUSD token will have increased by 10% due to the accrued yield. The user can then withdraw 110 crvUSD from their 100 scrvUSD.


---


## **Where does the yield come from?**

The yield paid to scrvUSD holders comes directly from the crvUSD interest rate fees paid by borrowers for taking out crvUSD loans.

*The amount of rewards allocated to scrvUSD varies and depends on two factors:*

1. The amount of crvUSD fees generated.
2. The percentage of the total crvUSD fees allocated to scrvUSD, as determined by the Curve DAO.

![Fee split](../images/scrvusd/scrvusd_fee_split_light.svg#only-light){: .centered style="width: 75%;" }
![Fee split](../images/scrvusd/scrvusd_fee_split_dark.svg#only-dark){: .centered style="width: 75%;" }

The actual percentage of crvUSD fees going to scrvUSD is dynamic and based on the average percentage of scrvUSD supply compared to the total circulating supply of crvUSD (see example below). The DAO sets both a minimum and maximum percentage of crvUSD fees allocated to scrvUSD, which serve as upper and lower bounds.

!!!example "How much yield is allocated to scrvUSD?"

    Let's assume the total crvUSD fees generated over a one-week reward period is $100k. The DAO has set the following parameters: a 2% minimum and a 20% maximum.

    - If 0% of crvUSD is staked, 2% of the $100k will be allocated to scrvUSD.
    - If 15% of crvUSD is staked, 15% of the $100k will be allocated to scrvUSD.
    - If 30% of crvUSD is staked, 20% of the $100k will be allocated to scrvUSD.


---


## **How does scrvUSD affect the current veCRV yield?**

The current stagnation and contraction of crvUSD supply pose long-term challenges for veCRV holders and the DAO. Let's take a look at what is happening without scrvUSD:

![State Diagram before st-crvUSD](../images/scrvusd/before_light.svg#only-light){: .centered style="width: 85%;" }
![State Diagram before st-crvUSD](../images/scrvusd/before_dark.svg#only-dark){: .centered style="width: 85%;" }

Borrowers mint crvUSD to buy assets, which leads to selling crvUSD. This lowers the price of crvUSD, which in turn raises borrowing rates, making crvUSD less attractive to borrow.

**With scrvUSD in place, as borrowing rates rise, the yield (APR) for scrvUSD increases simultaneously.** Due to this mechanism, buying crvUSD to convert it to scrvUSD becomes attractive, increasing demand for crvUSD and tightening the peg (which leads to lower borrowing rates again):

![st-crvUSD State Diagram](../images/scrvusd/scrvusd_light.svg#only-light){: .centered style="width: 90%;" }
![st-crvUSD State Diagram](../images/scrvusd/scrvusd_dark.svg#only-dark){: .centered style="width: 90%;" }

Over time, with these dynamics, the peg should become tighter, and borrowing rates should stabilize. This **will allow the crvUSD supply to grow sustainably, increasing revenue for veCRV holders**.


---


## **How much yield will I earn?**

The yield earned by holding scrvUSD is not fixed because it **depends on several dynamic factors**:

- The ratio of scrvUSD to the total circulating crvUSD supply
- The amount of crvUSD fees generated
- The minimum and maximum crvUSD fee share allocated to scrvUSD, as set by the DAO

In general, **if the ratio of scrvUSD to the total crvUSD supply stays within the minimum and maximum fee allocation limits set by the DAO, the APR for scrvUSD will roughly align with the average borrowing rate for crvUSD**. However, if the ratio exceeds the maximum limit, the yield will be capped at the maximum fee allocation.

??? example "Example: APR calculation"

    Let’s simplify the scenario by considering a timeframe of one year. Assume that over the year, the total crvUSD fees generated amounted to 10 million crvUSD, the average borrowing rate during this time was 10%, and the total supply of crvUSD was 100 million. The DAO set the following parameters throughout the year: a 2% minimum and a 20% maximum fee allocation.

    The percentage of crvUSD fees allocated to scrvUSD depends entirely on how much crvUSD is deposited into the Savings Vault. This scenario holds true as long as the staked ratio is within the DAO's minimum and maximum fee allocation range.

    - **Ratio is between the min and max allocation limit**: If 15% of crvUSD is deposited into the Savings Vault, then 15% of the 10 million crvUSD in fees earned will be allocated to scrvUSD. This equals 1.5 million crvUSD allocated to 15 million scrvUSD, resulting in an APR of 10%, which aligns with the average borrowing rate of 10%.

    - **Ratio exceeds the maximum allocation limit**: If the staked ratio exceeds the maximum allocation limit, the APR for scrvUSD will be lower than the average borrowing rate. For example, if the ratio is 25% (above the 20% maximum limit), the fee allocation to scrvUSD will be capped at 20%. This means 2 million crvUSD in fees will be allocated to 25 million scrvUSD, resulting in an APR of 8% (2 million crvUSD / 25 million scrvUSD = 8%).

    - **Ratio is below the minimum allocation limit**: If the ratio is below the minimum allocation limit, the APR will be higher than the average borrowing rate. For example, if the ratio is 1% (below the 2% minimum limit), the fee allocation to scrvUSD will be set at 2%. This means 0.2 million crvUSD in fees will be allocated to 1 million scrvUSD, resulting in an APR of 20% (0.2 million crvUSD / 1 million scrvUSD = 20%).
