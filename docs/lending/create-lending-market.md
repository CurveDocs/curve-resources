<h1>How to create a Lending Market</h1>

Before attempting to create a lending market you need to create a curve pool for the asset with a price oracle paired with crvUSD. Deploy a curve pool with a relevant price oracle paired with crvUSD:

 - [twocrypto-ng](https://docs.curve.fi/references/deployed-contracts/#twocrypto-ng) - for 2 unpegged assets, e.g., crvUSD/CRV
 - [tricrypto-ng](https://docs.curve.fi/references/deployed-contracts/#tricrypto-ng) - for 3 unpegged assets, e.g., crvUSD/WETH/CRV
 - [stableswap-ng](https://docs.curve.fi/references/deployed-contracts/#stableswap-ng) - for 2 pegged assets, e.g., crvUSD/USDC

*Note: It is possible to link to chain 2 oracles together by pairing to a highly liquid pool if a crvUSD pool is unwanted (e.g., create a TOKEN/WETH, or TOKEN/CRV pool and link it to the TriCRV pool - crvUSD/WETH/CRV), please get in contact with the team in telegram if this is the case*.

The easiest way to create a pool is through the official [Create Pool UI](https://curve.fi/#/ethereum/create-pool), but be sure to choose the correct network in the top right hand corner.

Then create a lending market using the OneWayLendingFactory to deploy all relevant contracts and set all parameters, [factory addresses for different chains here](https://docs.curve.fi/references/deployed-contracts/#curve-lending).  There is no UI for this step, it has to be done through Etherscan, manually, etc.

To deploy a lending market the following parameters have to be supplied:

 - `borrowed_token` : address of the token to be supplied and borrowed
 - `collateral_token` : address of the token to be used as collateral
 - `A` : the amplification factor, most markets use a value between 10-30.  Use lower values for riskier assets.
 - `fee` : the amm swap fee, most pools use between 0.3-1.5% 
 - `loan_discount` : the amount to discount collateral when taking a loan
 - liquidation_discount (uint256)  ??  not sure on difference
 - pool (address) - pool with oracle
 - name (string) - name of market
 - min_borrow_rate (uint256) 1e18 numbers??
 - max_borrow_rate (uint256) 1e18 numbers??

## **Defining Interest Rates**

When creating a market the creator must define the `rateMin` and `rateMax` of the market.  Use the tool below to simulate the borrow and lending rates at different utilization levels.

<canvas id="graphContainer"></canvas>
<div style="display: flex; align-items: center; justify-content: center; font-size: 16px;">
    <label for="rateMinInput" style="margin-right: 10px;">Rate Min %:</label>
    <input type="number" id="rateMinInput" min="0" max="1000" step="1" value="1" style="font-size: 16px; width: 80px;">
    <label for="rateMaxInput" style="margin-left: 20px; margin-right: 10px;">Rate Max %:</label>
    <input type="number" id="rateMaxInput" min="0" max="1000" step="1" value="80" style="font-size: 16px; width: 80px;">
</div>

## **Requesting the gauge be added**

need this









<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    let myChart = null;

    document.addEventListener('DOMContentLoaded', function() {
        updateGraph(); // Draw the initial graph with default values

        const rateMinInput = document.getElementById('rateMinInput');
        const rateMaxInput = document.getElementById('rateMaxInput');

        rateMinInput.addEventListener('change', updateGraph);
        rateMaxInput.addEventListener('change', updateGraph);
    });

function updateGraph() {
    const rateMin = parseFloat(document.getElementById('rateMinInput').value)/100;
    const rateMax = parseFloat(document.getElementById('rateMaxInput').value)/100;

    let borrowDataPoints = [];
    for (let u = 0; u <= 1.01; u += 0.01) {
        let rate = rateMin * Math.pow((rateMax / rateMin), u);
        borrowDataPoints.push({x: u * 100, y: rate * 100});
    }

    let lendDataPoints = [];
    for (let u = 0; u <= 1.01; u += 0.01) {
        let rate = u * rateMin * Math.pow((rateMax / rateMin), u);
        lendDataPoints.push({x: u * 100, y: rate * 100});
    }

    const ctx = document.getElementById('graphContainer').getContext('2d');

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


        if (myChart) {
            myChart.destroy();
        }
        myChart = new Chart(ctx, config);
    }
</script>