<h1>Creating Lending Markets</h1>

## **Creating a Pool**

Before attempting to create a lending market, a curve pool for the ASSET paired with crvUSD which implements an unmanipulatable price oracle must exist.   Pools with unmanipulatable oracles are the following:

 - [twocrypto-ng](https://docs.curve.fi/references/deployed-contracts/#twocrypto-ng) - for 2 unpegged assets, e.g., crvUSD/CRV
 - [tricrypto-ng](https://docs.curve.fi/references/deployed-contracts/#tricrypto-ng) - for 3 unpegged assets, e.g., crvUSD/WETH/CRV
 - [stableswap-ng](https://docs.curve.fi/references/deployed-contracts/#stableswap-ng) - for 2 pegged assets, e.g., crvUSD/USDC


!!!info "Custom Price Oracles" 
    If an ASSET/WETH pool is more desirable than an ASSET/crvUSD pool, it is possible to link the ASSET/WETH price to the WETH/crvUSD price using a custom price oracle.  This can then be used to create a lending market.  Please get in contact with the team in telegram if this is the case.

The easiest way to create a pool is through the official [Create Pool UI](https://curve.fi/#/ethereum/create-pool).

Guides are available for creating a [stableswap-ng pool](../factory-pools/creating-a-stableswap-ng-pool.md), [twocrypto-ng pool](../factory-pools/creating-a-twocrypto-ng-pool.md), and a [tricrypto-ng pool](../factory-pools/creating-a-tricrypto-ng-pool.md).

---

## **Creating a Lending Market**

To create a lending market use the `create`, or `create_from_pool` methods in the `OneWay Lending Factory` smart contract to deploy all relevant contracts and set all parameters.  Find the `OneWay Lending Factory` addresses for different chains [here](https://docs.curve.fi/references/deployed-contracts/#curve-lending).  There is no UI for this step, it has to be done through Etherscan, or manually.

To deploy a lending market using the `create_from_pool` method after deploying a pool the following unique parameter is used:

 - `pool` : the address of the pool which includes both the `borrowed_token` and `collateral_token`.

To deploy a lending market using the `create` method with a custom oracle the following unique parameter is used:

 - `price_oracle` : address of the custom price oracle contract

Then for both methods the following additional parameters must be supplied:

 - `borrowed_token` : address of the token to be supplied and borrowed
 - `collateral_token` : address of the token to be used as collateral
 - [`A`](#amplification-factor-a) : the amplification factor, most markets use a value between 10-30.  Use lower values for riskier assets.  
 Input as a normal number, e.g., 10 = 10
 - `fee` : the amm swap fee, most pools use between 0.3-1.5%.  
 Input as a $10^{18}$ number, e.g., 0.06% = 6000000000000000.
 - [`loan_discount`](#loan-discount) : the amount to discount collateral for calculating maximum LTV.  This is usually higher than `liquidation_discount` by 3-4%.  
 Input as a $10^{18}$ number, e.g., 11% = 110000000000000000.
 - [`liquidation_discount`](#liquidation-discount) : the amount to discount collateral for health and hard-liquidation calculations.  This is usually less than `loan_discount` by 3-4%.  
 Input as a $10^{18}$ number, e.g., 8% = 80000000000000000.
 - `name` : The name of the market

Finally, the following parameters are **optional** for both methods, if they are not supplied they are set to the default values set by the CurveDAO:

 - [`min_borrow_rate`](#borrowing-interest-rates) : the minimum borrow rate, as rate/sec.  
 Input as a $10^{18}$ number, e.g., 1% APR = 317097919
 - [`max_borrow_rate`](#borrowing-interest-rates) : the maximum borrow rate, as rate/sec.  
 Input as a $10^{18}$ number, e.g., 80% APR = 25367833587

!!!warning "Warning"
    Parameters are given in different formats: `A` is just given as itself, e.g., 30 = 30, but others like `loan_discount` are given as a a $10^{18}$ number, e.g., 11% = 110000000000000000.

Using the `OneWay Lending Factory` will add the pool to the Curve UI and deploy all contracts needed for the market to function.

---

## **CRV Rewards and other Incentives for Suppliers**

### **Deploying a Gauge**

A **Curve lending market requires a gauge** linked to the supply vault **before suppliers can stake their [vault shares](./overview.md#supply-vault-share-tokens) to receive incentives/rewards**.  A gauge can be easily deployed through the `OneWay Lending Factory` by calling the `deploy_gauge` method and supplying the newly created `vault` contract address.  **Anyone can deploy a gauge** for a market that does not have one.

### **Receiving CRV rewards from weekly emissions**

Before a gauge is eligible to receive CRV from weekly emissions, it must be added to the `Gauge Controller` contract, the contract is deployed on Ethereum [here](https://etherscan.io/address/0x2F50D538606Fa9EDD2B11E2446BEb18C9D5846bB).  To be added to the `Gauge Controller` the CurveDAO must vote to add the lending market's gauge.  See [here](../reward-gauges/creating-a-pool-gauge.md#submit-a-dao-vote) for how to create a vote to add a gauge to the `Gauge Controller`.

Once a Curve lending market has a gauge added to the `Gauge Controller` and it receives some [gauge weight](../reward-gauges/gauge-weights.md), the suppliers will receive CRV rewards when they stake their [vault shares](./overview.md#supply-vault-share-tokens) into the gauge.

### **Adding other incentives for suppliers**

The deployer of the Curve Lending Market is given the role of `manager`.  The `manager` can add reward tokens to the pool through the `add_reward` method within the lending market's gauge.  Once a token is added, the `manager` can deposit the token using the `deposit_reward_token` method.  The tokens then stream to the suppliers staked in the gauge over the specified period.

---

## **Lending Market Deployment Parameters**

### **Amplification Factor (A)**

The amplification factor `A` defines the width of bands, see formula below and more detailed information [here](../crvusd/loan-concepts.md#bands-n) and applet [here](../crvusd/loan-concepts.md#band-calculator).  `A` is also a part of the calculation for the maximum LTV of the market, see [`loan_discount` section](#loan-discount).

$$\text{band_width} \approx \frac{\text{price}}{\text{A}}$$

### **Loan Discount**

The `loan_discount` is used for finding the maximum LTV (loan-to-value) a user can have in a lending market.  At the time of writing this value ranges from 7% for WETH to 33% for volatile and less liquid assets like UwU.  Use the calculator [here](../crvusd/loan-concepts.md#loan-discount) to see the maximum LTVs a user can have based on the `loan_discount`, amplification factor `A` and their number of bands `N`.  The formula is:

$$\text{max_LTV} = 1 - \text{loan_discount} - \frac{N}{2*A}$$

### **Liquidation Discount**

`liquidation_discount` defines how much to discount the collateral for the purpose of a hard-liquidation.  This is usually 3-4% lower than the `loan_discount`.  A user is hard-liquidated when their health is less than 0, and the `liquidation_discount` is an integral part of the health calculation.  See [here](../crvusd/loan-concepts.md#loan-health) for more information

### **Borrowing Interest Rates**

When creating a market the creator must define the `min_borrow_rate` and `max_borrow_rate` of the market.  Use the tool below to simulate how [utilization](./overview.md#utilization-rate) affects borrowing and lending interest rates.  In the smart contracts the rates they are given as **interest per second**, converting from a desired `APR` to a `borrow_rate` in interest per second is as follows:

$$\text{borrow_rate} = \frac{\text{APR}}{\text{seconds_in_year}} = \frac{\text{APR}}{86400 \times 365}$$

<div style="border: 1px solid #ccc; padding: 20px; margin-bottom: 20px;">
<canvas id="interestRateChart"></canvas>
<h4>Inputs:</h4>
<div class="input">
<div style="display: flex; align-items: center; justify-content: center; font-size: 16px;">
    <label for="rateMinInput" style="margin-right: 10px;">Min Borrow APR % :</label>
    <input type="number" id="rateMinInput" min="0" max="1000" step="1" value="1" style="font-size: 16px; width: 80px;">
    <label for="rateMaxInput" style="margin-left: 20px; margin-right: 10px;">Max Borrow APR % :</label>
    <input type="number" id="rateMaxInput" min="0" max="1000" step="1" value="80" style="font-size: 16px; width: 80px;">
</div>
 <div id="dataTable"></div>
</div>
</div>



<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation"></script>

<script>

document.addEventListener("change", function (event) {
    if (event.target.matches('input[name="__palette"]')) {
      location.reload();
    }
  });

function isUserDarkmode() {
  var colorScheme = document.querySelector('body').getAttribute('data-md-color-scheme');
  return colorScheme === 'slate';
}

let rateChart = null;

document.addEventListener('DOMContentLoaded', function() {
    updateRateGraph(); // Draw the initial rate graph with default values

    // rate graph
    const rateMinInput = document.getElementById('rateMinInput');
    const rateMaxInput = document.getElementById('rateMaxInput');
    rateMinInput.addEventListener('change', updateRateGraph);
    rateMaxInput.addEventListener('change', updateRateGraph);
});



function updateRateGraph() {
    const rateMin = parseFloat(document.getElementById('rateMinInput').value)/100;
    const rateMax = parseFloat(document.getElementById('rateMaxInput').value)/100;
    let borrowDataPoints = [];
    let lendDataPoints = [];
    let tableData = [];

    for (let u = 0; u <= 1.01; u += 0.01) {
        let borrowRate = rateMin * Math.pow((rateMax / rateMin), u);
        let lendRate = u * rateMin * Math.pow((rateMax / rateMin), u);
        borrowDataPoints.push({x: u * 100, y: borrowRate * 100});
        lendDataPoints.push({x: u * 100, y: lendRate * 100});
        
        // Add data to table array (rounded to 2 decimal places)
        tableData.push({
            utilization: (u * 100).toFixed(2),
            borrowAPR: (borrowRate * 100).toFixed(2),
            lendAPR: (lendRate * 100).toFixed(2)
        });
    }

    const ctx = document.getElementById('interestRateChart').getContext('2d');

    const data = {
        datasets: [
            {
                label: 'Borrow APR',
                data: borrowDataPoints,
                borderColor: 'rgba(75, 192, 192, 0.9)',
                fill: false,
                pointRadius: 0,
                showLine: true,
                borderWidth: 2,
            },
            {
                label: 'Lend APR',
                data: lendDataPoints,
                borderColor: 'rgba(255, 99, 132, 0.9)',
                fill: false,
                pointRadius: 0,
                showLine: true,
                borderWidth: 2,
            }
        ]
    };

    const config = {
        type: 'scatter',
        data: data,
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Utilization (%)'
                    },
                    max: 100
                },
                y: {
                    title: {
                        display: true,
                        text: 'APR (%)'
                    },
                    beginAtZero: true
                }
            },
            interaction: {
                mode: 'nearest',
                intersect: false,
                axis: 'x'
            },
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    filter: function(tooltipItem) {
                        return tooltipItem.datasetIndex === 0;
                    },
                    enabled: true,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    bodyColor: '#ffffff',
                    bodyFont: {
                        size: 12,
                    },
                    borderColor: 'rgba(0, 0, 0, 0.7)',
                    borderWidth: 1,
                    usePointStyle: false,
                    padding: 4,
                    displayColors: false,
                    callbacks: {
                        title: function() {
                            return '';
                        },
                        label: function(context) {
                            const utilization = context.parsed.x.toFixed(2);
                            const borrowRate = context.chart.data.datasets[0].data[context.dataIndex].y.toFixed(2);
                            const lendRate = context.chart.data.datasets[1].data[context.dataIndex].y.toFixed(2);
                            return [
                                `Utilization: ${utilization}%`,
                                `Borrow APR: ${borrowRate}%`,
                                `Lend APR: ${lendRate}%`
                            ];
                        }
                    }
                },
            },
            legend: {
                position: 'bottom'
            }
        }
    };

    if (rateChart) {
            rateChart.destroy();
    }
        rateChart = new Chart(ctx, config);
    }

   // Create and populate the table
    const tableContainer = document.getElementById('dataTable');
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Utilization (%)</th>
                    <th>Borrow APR (%)</th>
                    <th>Lend APR (%)</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let i = 0; i < tableData.length; i++) {
        if (i % 5 === 0) { // Only add rows for every 5% step
            const row = tableData[i];
            tableHTML += `
                <tr>
                    <td>${row.utilization}</td>
                    <td>${row.borrowAPR}</td>
                    <td>${row.lendAPR}</td>
                </tr>
            `;
        }
    }

    tableHTML += `
            </tbody>
        </table>
    `;

    tableContainer.innerHTML = tableHTML;
</script>
