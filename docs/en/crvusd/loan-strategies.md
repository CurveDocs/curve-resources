<h1>Loan Strategies & Management</h1>

Before taking a crvUSD loan a user should consider two factors that will influence how they structure their loan:

* How much risk they would like to take?
* What management style will they employ?  Will they be actively managing their loan i.e., adding, removing collateral and repaying debt.  Or will they be passively taking a loan and leaving it in [LLAMMA's](./loan-concepts.md#soft-and-de-liquidation) hands?

Risk and Management styles can be thought of as a spectrum, and they can be visualized in the image below.

![loan strategies](../images/crvusd/loan_strategies.svg#only-light){: .centered }
![loan strategies](../images/crvusd/loan_strategies_dark.svg#only-dark){: .centered }
The above image shows 4 main quadrants:

* **High risk and Passive**: This is a dangerous strategy, users employing this strategy typically max borrow and make very little changes to the loan until they close or are hard-liquidated.  Some users are lucky and do well, but many are hard-liquidated.  Use at your own risk.
* **High risk and Active**: Users with these loans are borrowing close to the maximum allowed, and actively adding and removing collateral, and debt as required to keep a loan healthy.
* **Careful and Passive**: These loans are typically at low LTV ratios so their soft-liquidation ranges are far below the current price.  These loans generally don't need much management and users may only alter their loans after significant price changes.
* **Careful and Active**: Users borrow at low LTV ratios but actively manage the loans by adding and removing capital and debt as required to keep away from soft-liquidation.

Example loans for each of the 4 quadrants are given in the [loan example section here](#loan-examples).  The section directly below shows soft-liquidation losses based on user data, so prospective users can estimate losses.

!!!warning "Actively managing loans is gas intensive"
    Actively managing loans is expensive when factoring in gas usage, loan size needs to be sufficient to offset this expense.  As a general rule allow $\text{USD} \approx \text{gasPrice} \times 4$ to add collateral or repay debt, e.g. if `gasPrice` is 10 `Gwei` allow \$40 to add collateral or repay debt.

---

# **Soft Liquidation Losses**

The data from all crvUSD loans so far has shown that for each band range a user can expect the following losses in the table below.  Loss amount doesn't seem to be affected by the collateral asset used (i.e., losses from wBTC seem to be the very similar as wstETH).  The band range was the biggest factor in how a user performed.  The histogram and table below show **soft-liquidation losses are generally very low**, but keep in mind that high volatility periods can cause double digit losses.

*Note: you can show and hide any band ranges by clicking on them in the legend*.

<!-- Creates the soft-liquidation losses histogram-->
<div style="display: flex; flex-direction: column; align-items: center;">
    <div style="display: flex; justify-content: center; margin-top: 10px;">
        <label style="margin: 0 10px;">
            <input type="checkbox" id="percentageCheckbox" checked>
            Use percent of data for y axis
        </label>
        <label style="margin: 0 10px;">
            <input type="checkbox" id="timeCheckbox">
            Use days of data (time) for y axis
        </label>
    </div>
    <canvas id="softLiqHistogram"></canvas>
</div>

<div class="centered" markdown="block">
| band range | days of soft liq data | min loss/day | median loss/day | mean loss/day | std loss/day | max loss/day |
|------------|-----------------------|------------------|---------------------|-------------------|------------------|-------------------|
| **4-9**        | 4601.17                | 0%         | 0.0927%               | 0.93%             | 2.18%            | 38.93%            |
| **10-19**      | 2248.19                | 0%         | 0.0331%               | 0.62%             | 1.98%            | 43.06%            |
| **20-35**      | 124.92                 | 0%         | 0.0127%               | 0.20%             | 0.54%           | 6.41%            |
| **36-50**      | 114.99                  | 0%         | 0.0004%               | 0.11%             | 0.30%            | 3.98%             |
</div>

**Using more bands ($\uparrow$N) reduce your soft-liquidation loss per day but increase the time in soft-liquidation, while also reducing the total amount a user can borrow**.  It is up to the user to choose a comfortable number of bands which allows them to borrow their required amount.

*The above results are from the notebook [here](https://github.com/saint-rat/curve-notebooks/blob/main/n_range_softliq_losses.ipynb)*

# **Managing Loan Health**

**[Loan health](./loan-concepts.md#loan-health) is a direct measure of the risk of a loan**.  The lower the loan health, the riskier the loan.  To keep from being hard-liquidated, a loan must have a health above 0.

There are 2 factors which influence the health of a loan:

1. LTV (Loan-To-Value ratio) - More collateral and less debt increases the health of the loan
2. Increasing the `a` distance as shown on the figure [here](./loan-concepts.md#loan-health).  This can be done in 2 ways: reducing the number of bands, reducing the amount borrowed.

There are 2 ways of increasing the health of a loan:

1. Repaying debt
2. Adding collateral

However if a loan is in soft-liquidation collateral cannot be added, debt must be repaid to increase the health.

---

# **Loan Examples**

*All the charts provided in this section are interactive.*  ***Click on different items in the legend to show/hide that plot.***

Here's a list of the plots that can be shown/hidden and their meaning:

**Value (Left Axis) plots**:
*These plots only relate to the left axis, the percentage axis has no meaning for them*.

* `Oracle Price`: The oracle price for 1 unit of the chosen deposited collateral asset (e.g., 1 wBTC, 1 wstETH, etc)
* `Soft-Liquidation Price Range`: This is the soft-liquidation price range of the user.  This can also be thought of as all the small band ranges together.  This drifts higher over time with the `Interest Rate`.
* `CV in <asset>`: The collateral value in the deposited asset (e.g., wstETH, wBTC, etc).
* `CV in crvUSD`: The value of the crvUSD held as collateral.  `<asset>` is swapped to crvUSD through the soft-liquidation process to protect from further declines in price.
* `Total CV`: Total Collateral Value.  `CV in <asset>` plus `CV in crvUSD`.
* `Debt Value`: The total amount of debt owed (this includes interest)
* `Aave/Spark Liq Price`: The price at which this loan would be liquidated in Aave/Spark.  When the `Oracle Price` is lower than this price, the loan would be liquidated/not possible.

**Percentage (Right Axis) plots**:
*These plots only relate to the right axis, the value axis has no meaning for them*

* `LTV`: The loan to value ratio, this is the `Debt Value` divided by the `Total CV`.
* `Health`: The health factor of the loan, a loan is Hard-liquidated when this gets to 0, see [here](./loan-concepts.md#loan-health) for more info.
* `% CV in <asset>`: The percentage of `Total CV` currently in the deposited collateral asset (e.g., wstETH, wBTC, etc).  This is `CV in <asset>` divided by `Total CV`.
* `% CV in crvUSD`: The percentage of `Total CV` currently swapped to crvUSD.  This is `CV in crvUSD` divided by `Total CV`.
* `% SL Collateral Loss`: The percentage of collateral lost to soft-liquidation.  See [here](./advanced-liquidation.md#soft-and-de-liquidation) for more information.
* `% Interest Collateral Loss`: The collateral loss due to interest accruing on the debt.  This amount is included in the `Debt Value` plot.
* `% Total Collateral Loss`: `% SL Collateral Loss` plus `% Interest Collateral Loss`.
* `% Max Deposited Collateral`: This is the percentage of the current deposited collateral vs. the maximum that will get deposited over the life of the loan.  This is shown as a percentage so it can be represented along side other plots.  This is just to show the magnitude and timing of deposits/withdrawals, not exact amounts. An example would be if there were 20 wstETH deposited at the beginning, but the user deposits another 5 (total 25 wstETH) at another point without withdrawing any, this value will be start at $20/25=80\%$.
* `Interest Rate`: The current borrow interest rate for the market.

---

## **Careful and Passive Loan Example**

This user **deposited 188 wBTC** as collateral.  They **borrowed 1.05 million crvUSD**.  They were very careful and only borrowed with a **21% LTV**.  They used **N=10**.

<!-- Creates the careful-passive chart-->
<div class="centered2" style="width: 100%">
  <canvas id="loanChart3"></canvas>
</div>

As you can see from above the user remained passive as they were far from soft-liquidation at all times.  They only fee they incurred was from the borrow interest rate increasing their debt, but luckily wBTC price went up fast enough to offset that.

Throughout the approx. 100 day duration of the loan they increased their loan to 1.27 million crvUSD but their LTV actually went down as wBTC price went up ~30%.

**This is a good strategy for loans less than 10,000 crvUSD** as gas costs for managing the loan are minimal.


## **Careful and Active Loan Example**

This loan was opened with **N=50**, **93 sfrxETH collateral**, **105500 crvUSD debt**.  This was a **LTV of 67%**.

<!-- Creates the careful-active chart-->
<div class="centered2" style="width: 100%">
  <canvas id="loanChart4"></canvas>
</div>

This user starts with 105k crvUSD debt, but slowly over time adds collateral and borrows more debt.  Ending with 219 sfrxETH collateral and 298k crvUSD debt.  They actively managed to stay out of soft-liquidation, and spend 0.56 ETH of fees on 32 transactions over this 2 month period.  The only fees they incurred were from borrowing interest and Ethereum transactions fees.

**This loan LTV is possible in other systems, but soft-liquidations aren't.  Soft-liquidations reassure the user that they are protected from sudden price drops**.


## **High Risk and Active Loan Example**

This user opened their loan using **N=4**, **deposited 20 wstETH**, and **borrowed 32600 crvUSD**.  This equated to an **85% LTV**.

<!-- Creates the high-risk-active chart-->
<div class="centered2" style="width: 100%">
  <canvas id="loanChart1"></canvas>
</div>

The user with the loan pictured above is tracked over a period of ~102 days, during which they actively managed their loan to maintain an LTV around 85%.  By taking a crvUSD loan, the user locked in 85% of the value of wstETH instantly while still benefiting from price increases on wstETH. This loan would not have been possible on other platforms due to the LTV of the wstETH collateral.

The user fell into soft-liquidation around the 15-day mark and experienced health erosion, the user repaid 10% of their debt on the 18th day, restoring their health.  As the price of wstETH rose around the 70-day mark, the user decided to borrow more, changing their soft-liquidation range. They quickly repaid the newly added debt after falling into soft-liquidation in this higher range.  Around the 85th day, the user chose to add more collateral and increased their debt.

Throughout this period, the user seemed comfortable in soft-liquidation, only losing ~22% of their collateral from soft-liquidation and borrowing interest. Their collateral was fully swapped to crvUSD multiple times, protecting them from further price declines.

LLAMMA saved the user from hard-liquidation that would have occurred in any other system, which can be seen by making the `Aave/Spark Liquidation Price` plot visible.  Even after reducing the LTV on the 18th day, the user would have been liquidated on other platforms by the two wicks below $1767 on the 25th and 55th days, preventing them from recouping value during the subsequent price appreciation.

This loan shows that **actively managing high risk loans can result in outcomes not possible in any other system**.


## **High Risk and Passive Loan Example (Hard-liquidation)**

This loan was opened with **N=4**, **5.95 wstETH collateral**, **10500 crvUSD debt**.  This was a **LTV (Loan-To-Value) of 84%**.

<!-- Creates the high-risk-passive chart-->
<div class="centered2" style="width: 100%">
  <canvas id="loanChart2"></canvas>
</div>

The user almost max borrowed.  Putting their liquidation range very close to the current price.  They stayed above their soft-liquidation range for a long time before falling into soft liquidation on day 50.  They quickly fell through soft liquidation to the safety on the other side but lost 3.1% to soft liquidation fees.

At any time from day 50 to day 62 they could have repaid debt to increase their health.  As they were passive and did nothing soft-liquidation fees reduced their health to 0 when going back up through their soft-liquidation range.  This is an unfortunate situation where the increasing collateral price caused hard-liquidation.

!!!warning "Use this strategy at your own risk"
    Users in this quadrant are at the highest risk of hard-liquidation.  Using this strategy is not advised.


## **Under Soft-Liquidation Loan Example**

This loan started with **57.07 wstETH collateral**, with **N=4** and **102k crvUSD debt**.  They paid off small amounts of debt a few times throughout the loan and finished with **93.5k crvUSD debt** and **53.44 wstETH collateral**.

<!-- Creates the under soft-liq loan example chart-->
<div class="centered2" style="width: 100%">
  <canvas id="loanChart5"></canvas>
</div>

This loan is a great example of the power of LLAMMA and soft-liquidations.  The user spent **more than 50% of the loan time under the soft-liquidation range**.  Yet the **loss from soft-liquidation fees was only 6.37%**.  While under the soft-liquidation range the user was shielded from any further losses in the wstETH price as all their collateral was converted to crvUSD.  Yet when the price rose the user benefited from price increases as their collateral was swapped back to wstETH.

The Aave/Spark Liq price plot for this loan shows that this loan would not be possible in competitor systems except from the 91st day when debt was lower and wstETH price rose.

---

# **Strategies**

## **Borrowing to Lending Rate Arbitrage**

As crvUSD is minted with high quality collateral in crvUSD markets, a user can usually make profit by minting crvUSD and supplying it elsewhere, especially to riskier markets.  This strategy is simple, you borrow crvUSD and supply it at higher rates, making the difference:

`profitRate` = `supplyRate` - `borrowRate`

Strategy:

1. Supply collateral (e.g., ETH, wBTC, wstETH) to a crvUSD market
2. Borrow crvUSD
3. Supply crvUSD to a market with a higher supplying rate than crvUSD borrow rates, e.g., [Curve Lending Markets](https://curve.finance/lend), [Curve Stablecoin Pools](https://curve.finance/), [Silo Finance Markets](https://app.silo.finance/).

Risks:

* The user must monitor their loan health to stay out of any liquidations (soft or hard) as losses from liquidation may be larger than profit from the rate arbitrage.
* crvUSD risk, i.e., smart contract risk from crvUSD stablecoin and the crvUSD markets, see crvUSD risk disclaimer [here](../risks-security/risks/crvusd.md)
* Smart contract and bad debt risk from lending markets, i.e., if you supply to Curve lending, see Curve Lending risk disclaimer [here](../risks-security/risks/lending.md).  Otherwise please research and be informed of risks for other platforms.  **Mentions of platforms here is not an endorsement of their safety.**

<!-- Include the loan-strategies javascript file and necessary libraries-->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation"></script>
<script src="/javascripts/loan-strategies.js"></script>
