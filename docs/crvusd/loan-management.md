<h1>Loan Strategies & Management</h1>

Before taking a crvUSD loan a user should consider two factors that will influence how they structure their loan:

* How much risk they would like to take?
* What management style will they employ?  Will they be actively managing their loan i.e., adding, removing collateral and repaying debt.  Or will they be passively taking a loan and leaving it in [LLAMMA's](loan-details.md#llamma-and-liquidations) hands?

Risk and Management styles can be thought of as spectrums, and they can be visualized in the image below.

![loan strategies](../images/crvusd/loan_strategies.svg#only-light){: .centered }
![loan strategies](../images/crvusd/loan_strategies_dark.svg#only-dark){: .centered }
The above image shows 4 main quadrants:

* **High risk and Passive**: This is a dangerous strategy, users employing this strategy typically max borrow and make very little changes to the loan until they close or are hard-liquidated.  Some users are lucky and do well, but many are hard-liquidated.  Use at your own risk.
* **High risk and Active**: Users with these loans are borrowing close to the maximum allowed, and actively adding and removing collateral, and debt as required to keep a loan healthy.
* **Careful and Passive**: These loans are typically at low LTV ratios so their soft-liquidation ranges are far below the current price.  These loans generally don't need much management and users may only alter their loans after significant price changes.
* **Careful and Active**: Users borrow at low LTV ratios but actively manage the loans by adding and removing capital and debt as required to keep away from soft-liquidation.

Example loans for each of the 4 quadrants are given in the [loan example section here](#loan-examples).  The section directly below shows soft-liquidation losses based on user data, so prospective users can estimate losses.

!!!warning "Actively managing loans is gas intensive"
    Actively managing loans is expensive when factoring in gas usage, loan size needs to be sufficient to offset this expense.  As a general rule allow $\text{USD} \approx \text{gasPrice} \times 4$ to add collateral or repay debt, e.g. if gasPrice is 10 gWei allow \$40 to add collateral or repay debt.

---

# **Soft Liquidation Losses**

The data from all crvUSD loans so far has shown that for each band range a user can expect the following losses in the table below.  Loss amount doesn't seem to be affected by the collateral asset used (i.e., losses from wBTC seem to be the very similar as wstETH).  The band range was the biggest factor in how a user performed.  The histogram and table below show **soft-liquidation losses are generally very low**, but keep in mind that high volatility periods can cause double digit losses.  

*Note: you can show and hide any band ranges by clicking on them in the legend*.
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

<div class="centered2" markdown="block">
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

**[Loan health](./loan-details.md#loan-health) is a direct measure of the risk of a loan**.  The lower the loan health, the riskier the loan.  To keep from being hard-liquidated, a loan must have a health above 0.  

There are 2 factors which influence the health of a loan:

1. LTV (Loan-To-Value ratio) - More collateral and less debt increases the health of the loan
2. Increasing the `a` distance as shown on the figure [here](./loan-details.md#loan-health).  This can be done in 2 ways: reducing the number of bands, reducing the amount borrowed.

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
* `AAVE/Spark Liq Price`: The price at which this loan would be liquidated in AAVE/Spark.  When the `Oracle Price` is lower than this price, the loan would be liquidated/not possible.

**Percentage (Right Axis) plots**: 
*These plots only relate to the right axis, the value axis has no meaning for them*

* `LTV`: The loan to value ratio, this is the `Debt Value` divided by the `Total CV`.
* `Health`: The health factor of the loan, a loan is Hard-liquidated when this gets to 0, see [here](loan-details.md#loan-health) for more info.
* `% CV in <asset>`: The percentage of `Total CV` currently in the deposited collateral asset (e.g., wstETH, wBTC, etc).  This is `CV in <asset>` divided by `Total CV`.
* `% CV in crvUSD`: The percentage of `Total CV` currently swapped to crvUSD.  This is `CV in crvUSD` divided by `Total CV`.
* `% SL Collateral Loss`: The percentage of collateral lost to soft-liquidation.  See [here](loan-details.md#llamma-and-liquidations) for more information.
* `% Interest Collateral Loss`: The collateral loss due to interest accruing on the debt.  This amount is included in the `Debt Value` plot.
* `% Total Collateral Loss`: `% SL Collateral Loss` plus `% Interest Collateral Loss`.
* `% Max Deposited Collateral`: This is the percentage of the current deposited collateral vs. the maximum that will get deposited over the life of the loan.  This is shown as a percentage so it can be represented along side other plots.  This is just to show the magnitude and timing of deposits/withdrawals, not exact amounts. An example would be if there were 20 wstETH deposited at the beginning, but the user deposits another 5 (total 25 wstETH) at another point without withdrawing any, this value will be start at $20/25=80\%$.
* `Interest Rate`: The current borrow interest rate for the market.

---

## **Careful and Passive Loan Example**

This user **deposited 188 wBTC** as collateral.  They **borrowed 1.05 million crvUSD**.  They were very careful and only borrowed with a **21% LTV**.  They used **N=10**.

<div class="centered2" style="width: 100%">
  <canvas id="loanChart3"></canvas>
</div>

As you can see from above the user remained passive as they were far from soft-liquidation at all times.  They only fee they incurred was from the borrow interest rate increasing their debt, but luckily wBTC price went up fast enough to offset that.  

Throughout the approx. 100 day duration of the loan they increased their loan to 1.27 million crvUSD but their LTV actually went down as wBTC price went up ~30%.

**This is a good strategy for loans less than 10,000 crvUSD** as gas costs for managing the loan are minimal.


## **Careful and Active Loan Example**

This loan was opened with **N=50**, **93 sfrxETH collateral**, **105500 crvUSD debt**.  This was a **LTV of 67%**.

<div class="centered2" style="width: 100%">
  <canvas id="loanChart4"></canvas>
</div>

This user starts with 105k crvUSD debt, but slowly over time adds collateral and borrows more debt.  Ending with 219 sfrxETH collateral and 298k crvUSD debt.  They actively managed to stay out of soft-liquidation, and spend 0.56 ETH of fees on 32 transactions over this 2 month period.  The only fees they incurred were from borrowing interest and Ethereum transactions fees.

**This loan LTV is possible in other systems, but soft-liquidations aren't.  Soft-liquidations reassure the user that they are protected from sudden price drops**.


## **High Risk and Active Loan Example**

This user opened their loan using **N=4**, **deposited 20 wstETH**, and **borrowed 32600 crvUSD**.  This equated to an **85% LTV**.

<div class="centered2" style="width: 100%">
  <canvas id="loanChart1"></canvas>
</div>

The user with the loan pictured above is tracked over a period of ~102 days, during which they actively managed their loan to maintain an LTV around 85%.  By taking a crvUSD loan, the user locked in 85% of the value of wstETH instantly while still benefiting from price increases on wstETH. This loan would not have been possible on other platforms due to the LTV of the wstETH collateral.

The user fell into soft-liquidation around the 15-day mark and experienced health erosion, the user repaid 10% of their debt on the 18th day, restoring their health.  As the price of wstETH rose around the 70-day mark, the user decided to borrow more, changing their soft-liquidation range. They quickly repaid the newly added debt after falling into soft-liquidation in this higher range.  Around the 85th day, the user chose to add more collateral and increased their debt.

Throughout this period, the user seemed comfortable in soft-liquidation, only losing ~22% of their collateral from soft-liquidation and borrowing interest. Their collateral was fully swapped to crvUSD multiple times, protecting them from further price declines.

LLAMMA saved the user from hard-liquidation that would have occurred in any other system, which can be seen by making the `AAVE/Spark Liquidation Price` plot visible.  Even after reducing the LTV on the 18th day, the user would have been liquidated on other platforms by the two wicks below $1767 on the 25th and 55th days, preventing them from recouping value during the subsequent price appreciation.

This loan shows that **actively managing high risk loans can result in outcomes not possible in any other system**.


## **High Risk and Passive Loan Example (Hard-liquidation)**

This loan was opened with **N=4**, **5.95 wstETH collateral**, **10500 crvUSD debt**.  This was a **LTV (Loan-To-Value) of 84%**.

<div class="centered2" style="width: 100%">
  <canvas id="loanChart2"></canvas>
</div>

The user almost max borrowed.  Putting their liquidation range very close to the current price.  They stayed above their soft-liquidation range for a long time before falling into soft liquidation on day 50.  They quickly fell through soft liquidation to the safety on the other side but lost 3.1% to soft liquidation fees.  

At any time from day 50 to day 62 they could have repaid debt to increase their health.  As they were passive and did nothing soft-liquidation fees reduced their health to 0 when going back up through their soft-liquidation range.  This is an unfortunate situation where the increasing collateral price caused hard-liquidation.

!!!warning "Use this strategy at your own risk"
    Users in this quadrant are at the highest risk of hard-liquidation.  Using this strategy is not advised.


## **Under Soft-Liquidation Loan Example**

This loan started with **57.07 wstETH collateral**, with **N=4** and **102k crvUSD debt**.  They paid off small amounts of debt a few times throughout the loan and finished with **93.5k crvUSD debt** and **53.44 wstETH collateral**.

<div class="centered2" style="width: 100%">
  <canvas id="loanChart5"></canvas>
</div>

This loan is a great example of the power of LLAMMA and soft-liquidations.  The user spent **more than 50% of the loan time under the soft-liquidation range**.  Yet the **loss from soft-liquidation fees was only 6.37%**.  While under the soft-liquidation range the user was shielded from any further losses in the wstETH price as all their collateral was converted to crvUSD.  Yet when the price rose the user benefited from price increases as their collateral was swapped back to wstETH.

The AAVE/Spark Liq price plot for this loan shows that this loan would not be possible in competitor systems except from the 91st day when debt was lower and wstETH price rose.

---

# **Strategies**

## **Borrowing to Lending Rate Arbitrage**

As crvUSD is minted with high quality collateral in crvUSD markets, a user can usually make profit by minting crvUSD and supplying it elsewhere, especially to riskier markets.  This strategy is simple, you borrow crvUSD and supply it at higher rates, making the difference:

$$\text{profitRate = supplyRate - borrowRate}$$

Strategy:

1. Supply collateral (e.g., ETH, wBTC, wstETH) to a crvUSD market
2. Borrow crvUSD
3. Supply crvUSD to a market with a higher supplying rate than crvUSD borrow rates, e.g., [Curve Lending Markets](https://curve.lend.fi), [Conic Omnipools](https://conic.finance/), [Silo Finance Markets](https://app.silo.finance/).

Risks:

* The user must monitor their loan health to stay out of any liquidations (soft or hard) as losses from liquidation may be larger than profit from the rate arbitrage.
* crvUSD risk, i.e., smart contract risk from crvUSD stablecoin and the crvUSD markets, see crvUSD risk disclaimer [here](../resources/risks/crvusd.md)
* Smart contract and bad debt risk from lending markets, i.e., if you supply to Curve lending, see Curve Lending risk disclaimer [here](../resources/risks/lending.md).  Otherwise please research and be informed of risks for other platforms.  **Mentions of platforms here is not an endorsement of their safety.**


<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


<script>
    // Data
    const data = [
        { n_range: 'N: 4-9', loss_range: '0-0.001%', softLiqDays: 32.12, softLiqPercent: 0.92 },
        { n_range: 'N: 4-9', loss_range: '0.001-0.005%', softLiqDays: 48.82, softLiqPercent: 1.40 },
        { n_range: 'N: 4-9', loss_range: '0.005-0.02%', softLiqDays: 148.82, softLiqPercent: 4.27 },
        { n_range: 'N: 4-9', loss_range: '0.02-0.1%', softLiqDays: 587.55, softLiqPercent: 16.86 },
        { n_range: 'N: 4-9', loss_range: '0.1-0.5%', softLiqDays: 1095.54, softLiqPercent: 31.44 },
        { n_range: 'N: 4-9', loss_range: '0.5-2%', softLiqDays: 1073.53, softLiqPercent: 30.81 },
        { n_range: 'N: 4-9', loss_range: '2-10%', softLiqDays: 455.90, softLiqPercent: 13.08 },
        { n_range: 'N: 4-9', loss_range: '10-50%', softLiqDays: 42.00, softLiqPercent: 1.21 },
        { n_range: 'N: 10-19', loss_range: '0-0.001%', softLiqDays: 11.35, softLiqPercent: 0.78 },
        { n_range: 'N: 10-19', loss_range: '0.001-0.005%', softLiqDays: 35.52, softLiqPercent: 2.46 },
        { n_range: 'N: 10-19', loss_range: '0.005-0.02%', softLiqDays: 128.88, softLiqPercent: 8.91 },
        { n_range: 'N: 10-19', loss_range: '0.02-0.1%', softLiqDays: 371.83, softLiqPercent: 25.70 },
        { n_range: 'N: 10-19', loss_range: '0.1-0.5%', softLiqDays: 489.12, softLiqPercent: 33.81 },
        { n_range: 'N: 10-19', loss_range: '0.5-2%', softLiqDays: 292.61, softLiqPercent: 20.23 },
        { n_range: 'N: 10-19', loss_range: '2-10%', softLiqDays: 105.74, softLiqPercent: 7.31 },
        { n_range: 'N: 10-19', loss_range: '10-50%', softLiqDays: 11.64, softLiqPercent: 0.80 },
        { n_range: 'N: 20-35', loss_range: '0-0.001%', softLiqDays: 2.48, softLiqPercent: 2.23 },
        { n_range: 'N: 20-35', loss_range: '0.001-0.005%', softLiqDays: 4.63, softLiqPercent: 4.17 },
        { n_range: 'N: 20-35', loss_range: '0.005-0.02%', softLiqDays: 12.62, softLiqPercent: 11.35 },
        { n_range: 'N: 20-35', loss_range: '0.02-0.1%', softLiqDays: 37.89, softLiqPercent: 34.09 },
        { n_range: 'N: 20-35', loss_range: '0.1-0.5%', softLiqDays: 37.20, softLiqPercent: 33.47 },
        { n_range: 'N: 20-35', loss_range: '0.5-2%', softLiqDays: 13.25, softLiqPercent: 11.92 },
        { n_range: 'N: 20-35', loss_range: '2-10%', softLiqDays: 3.07, softLiqPercent: 2.76 },
        { n_range: 'N: 20-35', loss_range: '10-50%', softLiqDays: 0.00, softLiqPercent: 0.00 },
        { n_range: 'N: 36-50', loss_range: '0-0.001%', softLiqDays: 3.92, softLiqPercent: 6.55 },
        { n_range: 'N: 36-50', loss_range: '0.001-0.005%', softLiqDays: 4.12, softLiqPercent: 6.88 },
        { n_range: 'N: 36-50', loss_range: '0.005-0.02%', softLiqDays: 13.42, softLiqPercent: 22.41 },
        { n_range: 'N: 36-50', loss_range: '0.02-0.1%', softLiqDays: 18.71, softLiqPercent: 31.24 },
        { n_range: 'N: 36-50', loss_range: '0.1-0.5%', softLiqDays: 15.88, softLiqPercent: 26.51 },
        { n_range: 'N: 36-50', loss_range: '0.5-2%', softLiqDays: 3.51, softLiqPercent: 5.86 },
        { n_range: 'N: 36-50', loss_range: '2-10%', softLiqDays: 0.33, softLiqPercent: 0.55 },
        { n_range: 'N: 36-50', loss_range: '10-50%', softLiqDays: 0.00, softLiqPercent: 0.00 }
    ];

    // Extract unique n_range values
    const nRanges = [...new Set(data.map(item => item.n_range))];

    const colors = [
        'rgba(75, 192, 192, 0.7)',
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)'
    ];

    // Create datasets for each n_range
    const datasets = nRanges.map((nRange, index) => {
        const filteredData = data.filter(item => item.n_range === nRange);
        return {
            label: nRange,
            data: filteredData.map(item => item.softLiqPercent),
            backgroundColor: colors[index % colors.length]
        };
    });

    // Create the chart
    const ctx = document.getElementById('softLiqHistogram').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.filter(item => item.n_range === nRanges[0]).map(item => item.loss_range),
            datasets: datasets
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Soft Liquidation Loss Range Per Day'
                    }
                },
                y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Percent of data in each range'
                    }
                }
            }
        }
    });

    // Function to update the chart based on the selected checkbox
    function updateChart() {
        const newDatasets = nRanges.map((nRange, index) => {
            const filteredData = data.filter(item => item.n_range === nRange);
            return {
                label: nRange,
                data: percentageCheckbox.checked
                    ? filteredData.map(item => item.softLiqPercent)
                    : filteredData.map(item => item.softLiqDays),
                backgroundColor: colors[index % colors.length]
            };
        });
        chart.data.datasets = newDatasets;
        chart.options.scales.y.title.text = percentageCheckbox.checked
            ? 'Percent of data in each range'
            : 'Days of data in each range';
        chart.update();
    }

    // Checkbox event listeners
    const percentageCheckbox = document.getElementById('percentageCheckbox');
    const timeCheckbox = document.getElementById('timeCheckbox');

    percentageCheckbox.addEventListener('change', function() {
        if (this.checked) {
            timeCheckbox.checked = false;
            updateChart();
        }
    });

    timeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            percentageCheckbox.checked = false;
            updateChart();
        }
    });
</script>

<script>
  function createChart(data, chartId) {
    const ctx = document.getElementById(chartId).getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.timeDays,
        datasets: [
          {
            label: 'Oracle Price',
            data: data.oraclePrice,
            borderColor: 'orange',
            pointRadius: 0,
            yAxisID: 'y1'
          },
          {
            label: 'Soft-Liquidation Price Range',
            data: data.n1Price,
            fill: '+1',
            backgroundColor: 'rgba(255, 255, 0, 0.25)',
            borderColor: 'rgba(255, 255, 0, 0.25)',
            borderWidth: 0,
            pointHitRadius: 0,
            pointRadius: 0,
            yAxisID: 'y1'
          },
          {
            label: 'Soft-Liquidation Price Range',
            data: data.n2Price,
            fill: '-1',
            backgroundColor: 'rgba(255, 255, 0, 0.25)',
            borderColor: 'rgba(255, 255, 0, 0.25)',
            borderWidth: 0,
            pointHitRadius: 0,
            pointRadius: 0,
            yAxisID: 'y1'
          },
          {
            label: 'Total CV',
            data: data.collateralTotalValue,
            borderColor: 'rgba(0, 180, 180, 1)',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y1',
          },
          {
            label: '$ CV wstETH',
            data: data.collateralUsd,
            borderColor: 'rgba(0, 255, 255, 1)',
            hidden: true,
            pointRadius: 0,
            borderWidth: 2,
            yAxisID: 'y1',
          },
          {
            label: '$ CV crvUSD',
            data: data.stablecoin,
            borderColor: 'rgba(0, 255, 0, 1)',
            hidden: true,
            pointRadius: 0,
            borderWidth: 2,
            yAxisID: 'y1',
          },
          {
            label: 'Debt Value',
            data: data.debt,
            borderColor: 'rgba(153, 153, 153, 1)',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y1',
          },
          {
            label: 'AAVE/Spark Liq Price',
            data: data.aaveLiqPrice,
            borderColor: 'rgba(169, 196, 235, 1)',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y1',
            borderWidth: 2
          },
          {
            label: 'LTV',
            data: data.ltv,
            borderColor: 'black',
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1
          },
          {
            label: 'Health',
            data: data.health,
            borderColor: 'purple',
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1
          },
          {
            label: '% CV wstETH',
            data: data.collateralPct,
            borderColor: 'blue',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1
          },
          {
            label: '% CV crvUSD',
            data: data.stablecoinPct,
            borderColor: 'green',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1
          },
          {
            label: '% SL Collateral Loss',
            data: data.lossPct,
            borderColor: 'brown',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1
          },
          {
            label: '% Total Collateral Loss',
            data: data.totalLossPct,
            borderColor: 'red',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1
          },
          {
            label: '% Interest Collateral Loss',
            data: data.interestDebt,
            borderColor: 'magenta',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1
          },
          {
            label: '% Max Deposited Collateral',
            data: data.depositedCollateralPct,
            borderColor: 'rgba(153, 132, 63, 1)',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1
          },
          {
            label: 'Interest Rate',
            data: data.rate,
            borderColor: 'rgba(204, 153, 255, 1)',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        aspectRatio: 4/3,
        devicePixelRatio: 2.5,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time (days)'
            },
          },
          y1: {
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: 'Value ($)'
            }
          },
          y2: {
            type: 'linear',
            position: 'right',
            title: {
              display: true,
              text: 'Percentage (%)'
            },
            grid: {
              drawOnChartArea: false
            }
          }
        },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              boxWidth: 6,
              generateLabels: function(chart) {
                const datasets = chart.data.datasets;
                const legendItems = Chart.defaults.plugins.legend.labels.generateLabels(chart);
                legendItems.forEach((item, index) => {
                  if (item.text !== '') {
                    item.fillStyle = datasets[item.datasetIndex].borderColor;
                    item.strokeStyle = 'rgba(0, 0, 0, 0)';
                    item.pointStyle = 'rectRounded';
                    item.text = datasets[item.datasetIndex].label;
                    item.fontColor = 'black';
                  }
                });
                legendItems.unshift({
                  text: 'Value (Left Axis):',
                  fillStyle: 'rgba(0, 0, 0, 0)',
                  hidden: false,
                  lineWidth: 0
                });
                const sharedLegendItem = {
                  text: 'Soft-Liquidation Price Range',
                  fillStyle: datasets[1].borderColor,
                  hidden: datasets[1].hidden || datasets[2].hidden,
                  lineWidth: 0,
                  datasetIndex: 1
                };
                const index = legendItems.findIndex(item => item.text === sharedLegendItem.text);
                if (index !== -1) {
                  legendItems[index] = sharedLegendItem;
                  legendItems.splice(2, 1); // Remove the duplicate entry under "Percentage"
                }
                legendItems.splice(8, 0, {
                  text: '  |  ',
                  fillStyle: 'rgba(0, 0, 0, 0)',
                  hidden: false,
                  lineWidth: 0
                });
                legendItems.splice(9, 0, {
                  text: 'Percentage (Right Axis):',
                  fillStyle: 'rgba(0, 0, 0, 0)',
                  hidden: false,
                  lineWidth: 0
                });
                return legendItems;
              }
            },
            onClick: function(e, legendItem, legend) {
              const index = legendItem.datasetIndex;
              const chart = legend.chart;
              if (index === 1) {
                // Toggle visibility of both datasets when clicking "Soft-Liquidation Price Range"
                const softLiqDataset1 = chart.data.datasets[1];
                const softLiqDataset2 = chart.data.datasets[2];
                const isHidden = softLiqDataset1.hidden || softLiqDataset2.hidden;
                softLiqDataset1.hidden = !isHidden;
                softLiqDataset2.hidden = !isHidden;
                chart.update();
              } else {
                // Default behavior for other legend items
                Chart.defaults.plugins.legend.onClick.call(this, e, legendItem, legend);
              }
                }
                  },
                  title: {
                    display: false,
                    text: 'Loan Chart'
                  }
                }
              }
            });
            const canvas = document.getElementById(chartId);
            canvas.style.backgroundColor = 'white';
          }

  function loadData(jsonFile, chartId) {
    fetch(jsonFile)
      .then(response => response.json())
      .then(data => {
        createChart(data, chartId);
      })
      .catch(error => {
        console.error('Error loading JSON file:', error);
      });
  }

  loadData('loan1.json', 'loanChart1');
  loadData('hardliq4.json', 'loanChart2');
  loadData('loan3.json', 'loanChart3');
  loadData('loan4.json', 'loanChart4');
  loadData('loan5.json', 'loanChart5');
</script>