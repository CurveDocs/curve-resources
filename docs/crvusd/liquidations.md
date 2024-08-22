<h1>Soft & Hard Liquidations</h1>

Liquidations on Curve Lending and crvUSD work differently to other DeFi loans.  There are Soft-liquidations and Hard-liquidations.  Let's define them:

!!!warning "Soft-Liquidation"
    **Soft-liquidation converts collateral into the borrowed asset as price decreases, and back to the original asset as price increases**.  The process happens linearly through the Soft-liquidation range.  If a user is halfway through their range, half of their collateral should be in the original asset and half converted to their borrowed asset.  Health deteriorates as small fees are paid to convert collateral.

    **Soft-liquidation turns into Hard-liquidation when health is 0%**.  The bottom of the Soft-liquidation range does not trigger hard-liquidation.  A user can have their collateral fully converted and still have positive health if they manage it carefully.

!!!danger "Hard-Liquidation"
    **Hard-liquidation occurs when health is 0%**.  This will **most likely happen before the bottom of the Soft-liquidation range**, unless health is monitored carefully.  In Hard-liquidation the borrower keeps their borrowed assets (normally crvUSD) but lose their collateral.  
    
    Health deteriorates in Soft-liquidation which causes Hard-liquidation.  **Hard-liquidation does not trigger at the bottom of the Soft-liquidation range, it only relies on health**.

    **Users MUST manage their health to avoid Hard-liquidation.**

---

## **Loan Opening Information**

When a loan is opened a Soft-liquidation range and health are defined.  **Health must be monitored, if it gets to 0% hard liquidation will occur**, no matter where in the soft-liquidation range the price is.  An example loan using ETH collateral to borrow crvUSD is below to define terms:

![Example Loan](../images/crvusd/example_loan.svg#only-light){: .centered }
![Example Loan](../images/crvusd/example_loan_dark.svg#only-dark){: .centered }

## **Soft-Liquidation**

When the position enters Soft-liquidation it's a warning.  The system will try and protect user loans by converting the original collateral to the borrowed asset as prices decrease, and back to the original collateral as prices increase.  The system does not perfectly protect users though.  If their health gets to 0% or below Hard-liquidation occurs.

**Health can deteriorate very quickly when prices are moving quickly**.  Many loans are Hard-liquidated near the top of their Soft-liquidation range.  **Users must keep their health above 0% to avoid Hard-liquidation**.

Soft-liquidation ranges are defined by how much a user borrows and the number of bands they choose to split their collateral equally into.  Each band is an individual small range where all user collateral is pooled together if their Soft-liquidation ranges overlap.

The applet shows how collateral is converted in Soft-liquidation (SL), note that this applet assumes no Soft-liquidation losses occur:

<style>
    .price-input {
        width: 100px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
        text-align: center;
        outline: 1px solid #ccc;
    }
    .price-input:focus {
        outline: 2px solid #007bff;
        border-color: #007bff;
    }
    #ethCrvUsdChartContainer {
        width: 80%;
        max-width: 600px;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        margin: 20px auto;
    }
</style>

<div id="ethCrvUsdChartContainer">
    <h2 style="margin: 10px 0 20px; text-align: center;">Soft-liquidation Collateral Conversion</h2>
    <div style="margin-top: 10px;">
        <label for="collateralInput">Collateral Amount (ETH):</label>
        <input type="number" id="collateralInput" class="price-input" value="10" min="0" step="0.1">
    </div>
    <div style="position: relative; margin-top: 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span>Bottom of SL Range:</span>
            <span>Top of SL Range:</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 5px;">
            <input type="number" id="bottomRange" class="price-input" value="2311.92">
            <span id="currentPrice" style="font-weight: bold;"></span>
            <input type="number" id="topRange" class="price-input" value="2556.35">
        </div>
        <input type="range" id="ethCrvUsdSlider" style="width: 100%;" min="0" max="100" value="50">
    </div>
    <canvas id="ethCrvUsdChart"></canvas>
    <div id="ethCrvUsdValues" style="text-align: center; margin-top: 10px;"></div>
</div>

---

## **Soft-liquidation Loss (Collateral Erosion)**

In Soft-liquidation, collateral will slowly be lost to fees from swapping back and forth as prices move higher and lower.  The **soft-liquidation engine is an AMM**, and it tracks an **external price** (**oracle price**).  When it needs to swap collateral it **offers a discount relative to the difference between the internal price and oracle price**, the bigger the difference, the bigger the discount.

The soft-liquidation engine is also an AMM, so users make trading fees as trades occur.  These fees are dynamic; fees automatically increase in high volatility periods.

![Collateral Loss](../images/crvusd/softliq-engine.svg#only-light){: .centered }
![Collateral Loss](../images/crvusd/softliq-engine-dark.svg#only-dark){: .centered }

---

## **Hard-Liquidation Example**

**Hard-liquidation can only occur when the health of a loan is 0% or below**.  If the health is 0% or below anyone can pay off the debt and claim the collateral backing the loan, this should always be profitable, but in rare circumstances it may not be, if this happens it's called [bad debt](../crvusd/loan-details.md#bad-debt).

The example below shows a loan in the CRV/crvUSD lending market which was hard-liquidated.  The chart is interactive, by hovering over prices, you can see how the health of the loan decreases over time.  See that hard-liquidation only relies on health.  **The bottom of the soft-liquidation range is not where hard-liquidation happens.**

<h2 style="margin: 10px 0 20px; text-align: center;">Hard-liquidation - Borrowing crvUSD using CRV</h2>
<div class="centered2" style="width: 100%">
  <canvas id="crvHardLiq"></canvas>
</div>

**It is always better to self-liquidate a loan before a loan is hard-liquidated**.  This is because the health calculation values your collateral lower than its actual worth. In this example, the borrower would have gotten back 11,107 crvUSD more if they had self-liquidated their loan instead of letting it be hard-liquidated.

---

## **Managing Health & Self-Liquidation Example**

The below example shows how to manage health and how self-liquidation works, this shows a loan in the WETH/crvUSD lending market.  When the user got into soft-liquidation they decided to repay around 10% of their debt, this increased their health from approx. 3% to 13%, but kept their soft-liquidation range the same.   They then stayed in soft-liquidation for a long time, so they self-liquidated.  **If some debt is repaid while in soft-liquidation the range will stay the same but health will increase**, if debt is repaid outside the soft-liquidation range, the range will move lower.

Self-liquidating here was a good idea, this is because they already had 38,857 crvUSD as collateral (from swapped WETH in soft-liquidation), and their debt was 98,299 crvUSD, they only had to send 59,442 crvUSD and they received back their 24.3371 WETH.  If they chose to repay they would have had to repay all 98,299 crvUSD of debt, and received all collateral back (38,857 crvUSD and 24.3371 WETH) in return.

<h2 style="margin: 10px 0 20px; text-align: center;">Self-liquidation - Borrowing crvUSD using WETH</h2>
<div class="centered2" style="width: 100%">
  <canvas id="wethSelfLiq"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/2.2.1/chartjs-plugin-annotation.min.js"></script>


<script>
function createChart(data, chartId, yOpenLabel, yCloseLabel, tokenCOL, tokenDEBT) {
  const ctx = document.getElementById(chartId).getContext('2d');
  
  // Convert epoch times to Date objects
  const dates = data.time.map(epoch => new Date(parseInt(epoch) * 1000));

  // Calculate xmin and xmax
  const timeRange = parseInt(data.time[data.time.length - 1]) - parseInt(data.time[0]);
  const xmin = new Date((parseInt(data.time[0]) - timeRange * 0.1) * 1000);
  const xmax = new Date((parseInt(data.time[data.time.length - 1]) + timeRange * 0.1) * 1000);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          label: 'Price',
          data: data.price,
          borderColor: 'orange',
          pointRadius: 0,
          pointHoverRadius: 10,
          pointHitRadius: 10
        },
        {
          label: 'Soft-Liquidation Price Range',
          data: data.slUp,
          fill: '+1',
          backgroundColor: 'rgba(255, 255, 0, 0.25)',
          borderColor: 'rgba(255, 255, 0, 0.25)',
          borderWidth: 0,
          pointHitRadius: 0,
          pointRadius: 0,
        },
        {
          label: 'Soft-Liquidation Price Range (lower)',
          data: data.slDown,
          fill: '-1',
          backgroundColor: 'rgba(255, 255, 0, 0.25)',
          borderColor: 'rgba(255, 255, 0, 0.25)',
          borderWidth: 0,
          pointHitRadius: 0,
          pointRadius: 0,
        },
      ]
    },
    options: {
      responsive: true,
      aspectRatio: 4/3,
      devicePixelRatio: 1,
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'MMM d, yyyy'
            }
          },
          title: {
            display: true,
            text: 'Date'
          },
          ticks: {
            maxRotation: 45,
            minRotation: 25
          },
          min: xmin,
          max: xmax
        },
        y: {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Price ($)'
          }
        }
      },
      plugins: {
        annotation: {
          annotations: {
            firstLine: {
              type: 'line',
              xMin: dates[0],
              xMax: dates[0],
              borderColor: 'rgb(41, 155, 31)',
              borderWidth: 2,
              borderDash: [5, 5],
            },
            lastLine: {
              type: 'line',
              xMin: dates[dates.length - 1],
              xMax: dates[dates.length - 1],
              borderColor: 'rgb(255, 99, 132)',
              borderWidth: 2,
              borderDash: [5, 5],
            },
            firstPoint: {
              type: 'point',
              xValue: dates[0],
              yValue: data.price[0],
              backgroundColor: 'rgb(41, 155, 31)',
              radius: 6,
              borderColor: 'rgb(41, 155, 31)',
              borderWidth: 1
            },
            lastPoint: {
              type: 'point',
              xValue: dates[dates.length - 1],
              yValue: data.price[data.price.length - 1],
              backgroundColor: 'rgb(255, 99, 132)',
              radius: 6,
              borderColor: 'rgb(255, 99, 132)',
              borderWidth: 1
            },
            firstLabel: {
              type: 'label',
              xValue: dates[0],
              yValue: yOpenLabel,
              backgroundColor: 'rgb(41, 155, 31)',
              content: ['Loan Open'],
              font: {
                size: 12
              },
              color: 'white',
              padding: 4
            },
            lastLabel: {
              type: 'label',
              xValue: dates[dates.length - 1],
              yValue: yCloseLabel,
              backgroundColor: 'rgb(255, 99, 132)',
              content: ['Hard Liquidation'],
              font: {
                size: 12
              },
              color: 'white',
              padding: 4
            }
          }
        },
        legend: {
          position: 'bottom',
          onClick: function(e, legendItem, legend) {
            const index = legendItem.datasetIndex;
            const chart = legend.chart;
            if (legendItem.text === 'Soft-Liquidation Price Range') {
              // Toggle visibility of both datasets when clicking "Soft-Liquidation Price Range"
              const softLiqDataset1 = chart.data.datasets[1];
              const softLiqDataset2 = chart.data.datasets[2];
              const isHidden = softLiqDataset1.hidden;
              softLiqDataset1.hidden = !isHidden;
              softLiqDataset2.hidden = !isHidden;
            } else {
              // Default behavior for other legend items
              Chart.defaults.plugins.legend.onClick.call(this, e, legendItem, legend);
            }
            chart.update();
          },
          labels: {
            filter: function(legendItem, chartData) {
              // Filter out the lower soft liquidation dataset
              return legendItem.text !== 'Soft-Liquidation Price Range (lower)';
            }
          }
        },
        tooltip: {
          callbacks: {
            title: function(tooltipItems) {
              return new Date(tooltipItems[0].parsed.x).toLocaleString();
            },
            label: function(context) {
              return '';
            },
            afterBody: function(tooltipItems) {
              const dataIndex = tooltipItems[0].dataIndex;
              return [
                'Price: ' + data.price[dataIndex],
                'Health: ' + data.health[dataIndex],
                'Collateral as ' + tokenCOL + ': ' + data.collateral[dataIndex],
                'Collateral as ' + tokenDEBT + ': ' + data.stablecoin[dataIndex],
                'crvUSD Debt: ' + data.debt[dataIndex]
              ];
            }
          },
          displayColors: false, // This removes the color box
          bodyAlign: 'left',
          padding: 10
        },
        title: {
          display: false,
          text: 'Loan Chart'
        }
      }
    }
  });

}

function createChart2(data, chartId) {
  const ctx = document.getElementById(chartId).getContext('2d');
  
  // Convert epoch times to Date objects
  const dates = data.time.map(epoch => new Date(parseInt(epoch) * 1000));

  // Calculate xmin and xmax
  const timeRange = parseInt(data.time[data.time.length - 1]) - parseInt(data.time[0]);
  const xmin = new Date((parseInt(data.time[0]) - timeRange * 0.1) * 1000);
  const xmax = new Date((parseInt(data.time[data.time.length - 1]) + timeRange * 0.1) * 1000);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          label: 'Price',
          data: data.price,
          borderColor: 'orange',
          pointRadius: 0,
          pointHoverRadius: 10,
          pointHitRadius: 10
        },
        {
          label: 'Soft-Liquidation Price Range',
          data: data.slUp,
          fill: '+1',
          backgroundColor: 'rgba(255, 255, 0, 0.25)',
          borderColor: 'rgba(255, 255, 0, 0.25)',
          borderWidth: 0,
          pointHitRadius: 0,
          pointRadius: 0,
        },
        {
          label: 'Soft-Liquidation Price Range (lower)',
          data: data.slDown,
          fill: '-1',
          backgroundColor: 'rgba(255, 255, 0, 0.25)',
          borderColor: 'rgba(255, 255, 0, 0.25)',
          borderWidth: 0,
          pointHitRadius: 0,
          pointRadius: 0,
        },
      ]
    },
    options: {
      responsive: true,
      aspectRatio: 4/3,
      devicePixelRatio: 1,
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'MMM d, yyyy'
            }
          },
          title: {
            display: true,
            text: 'Date'
          },
          ticks: {
            maxRotation: 45,
            minRotation: 25
          },
          min: xmin,
          max: xmax
        },
        y: {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Price ($)'
          }
        }
      },
      plugins: {
        annotation: {
          annotations: {
            firstLine: {
              type: 'line',
              xMin: dates[0],
              xMax: dates[0],
              borderColor: 'rgb(41, 155, 31)',
              borderWidth: 2,
              borderDash: [5, 5],
            },
            midLine: {
              type: 'line',
              xMin: dates[79],
              xMax: dates[79],
              borderColor: 'rgb(41, 155, 31)',
              borderWidth: 2,
              borderDash: [5, 5],
            },
            lastLine: {
              type: 'line',
              xMin: dates[dates.length - 1],
              xMax: dates[dates.length - 1],
              borderColor: 'rgb(135, 50, 143)',
              borderWidth: 2,
              borderDash: [5, 5],
            },
            firstPoint: {
              type: 'point',
              xValue: dates[0],
              yValue: data.price[0],
              backgroundColor: 'rgb(41, 155, 31)',
              radius: 6,
              borderColor: 'rgb(41, 155, 31)',
              borderWidth: 1
            },
            midPoint: {
              type: 'point',
              xValue: dates[79],
              yValue: data.price[79],
              backgroundColor: 'rgb(41, 155, 31)',
              radius: 6,
              borderColor: 'rgb(41, 155, 31)',
              borderWidth: 1
            },
            lastPoint: {
              type: 'point',
              xValue: dates[dates.length - 1],
              yValue: data.price[data.price.length - 1],
              backgroundColor: 'rgb(135, 50, 143)',
              radius: 6,
              borderColor: 'rgb(135, 50, 143)',
              borderWidth: 1
            },
            firstLabel: {
              type: 'label',
              xValue: dates[0],
              yValue: 3400,
              backgroundColor: 'rgb(41, 155, 31)',
              content: ['Loan Open'],
              font: {
                size: 12
              },
              color: 'white',
              padding: 4
            },
            repayLabel: {
              type: 'label',
              xValue: dates[79],
              yValue: 3500,
              backgroundColor: 'rgb(41, 155, 31)',
              content: ['Repaid 10% debt'],
              font: {
                size: 12
              },
              color: 'white',
              padding: 4
            },
            lastLabel: {
              type: 'label',
              xValue: dates[dates.length - 1],
              yValue: 3200,
              backgroundColor: 'rgb(135, 50, 143)',
              content: ['Self Liquidation'],
              font: {
                size: 12
              },
              color: 'white',
              padding: 4
            }
          }
        },
        legend: {
          position: 'bottom',
          onClick: function(e, legendItem, legend) {
            const index = legendItem.datasetIndex;
            const chart = legend.chart;
            if (legendItem.text === 'Soft-Liquidation Price Range') {
              // Toggle visibility of both datasets when clicking "Soft-Liquidation Price Range"
              const softLiqDataset1 = chart.data.datasets[1];
              const softLiqDataset2 = chart.data.datasets[2];
              const isHidden = softLiqDataset1.hidden;
              softLiqDataset1.hidden = !isHidden;
              softLiqDataset2.hidden = !isHidden;
            } else {
              // Default behavior for other legend items
              Chart.defaults.plugins.legend.onClick.call(this, e, legendItem, legend);
            }
            chart.update();
          },
          labels: {
            filter: function(legendItem, chartData) {
              // Filter out the lower soft liquidation dataset
              return legendItem.text !== 'Soft-Liquidation Price Range (lower)';
            }
          }
        },
        tooltip: {
          callbacks: {
            title: function(tooltipItems) {
              return new Date(tooltipItems[0].parsed.x).toLocaleString();
            },
            label: function(context) {
              return '';
            },
            afterBody: function(tooltipItems) {
              const dataIndex = tooltipItems[0].dataIndex;
              return [
                'Price: ' + data.price[dataIndex],
                'Health: ' + data.health[dataIndex],
                'Collateral as WETH: ' + data.collateral[dataIndex],
                'Collateral as crvUSD: ' + data.stablecoin[dataIndex],
                'crvUSD Debt: ' + data.debt[dataIndex]
              ];
            }
          },
          displayColors: false, // This removes the color box
          bodyAlign: 'left',
          padding: 10
        },
        title: {
          display: false,
          text: 'Loan Chart'
        }
      }
    }
  });
}

function loadData(jsonFile, chartId, yOpenLabel, yCloseLabel, tokenCOL, tokenDEBT, hardLiq) {
fetch(jsonFile)
    .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
    })
    .then(data => {
    console.log('Data loaded successfully:', data);
    if (hardLiq) {
      createChart(data, chartId, yOpenLabel, yCloseLabel, tokenCOL, tokenDEBT);
    } else {
      createChart2(data, chartId)
    }
    })
    .catch(error => {
    console.error('Error loading JSON file:', error);
    });
}

loadData('softLiqData.json', 'softLiqChart', 3500, 3450, 'WETH', 'crvUSD', true);
loadData('crvHardLiqData.json', 'crvHardLiq', 0.3, 0.32, 'CRV', 'crvUSD', true);
loadData('wethSelfLiqData.json', 'wethSelfLiq', 3200, 3200, 'WETH', 'crvUSD')
</script>

<script>

    const ethCrvUsdCtx = document.getElementById('ethCrvUsdChart').getContext('2d');
    const ethCrvUsdSlider = document.getElementById('ethCrvUsdSlider');
    const ethCrvUsdValuesDisplay = document.getElementById('ethCrvUsdValues');
    const bottomRangeInput = document.getElementById('bottomRange');
    const topRangeInput = document.getElementById('topRange');
    const currentPriceDisplay = document.getElementById('currentPrice');
    const collateralInput = document.getElementById('collateralInput');
    const ethPercentageDisplay = document.getElementById('ethPercentageDisplay');

    const ethCrvUsdChart = new Chart(ethCrvUsdCtx, {
    type: 'bar',
    data: {
        labels: ['Collateral'],  // Single label
        datasets: [
            {
                label: 'ETH',
                data: [0],  // Single value
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                yAxisID: 'y'
            },
            {
                label: 'crvUSD',
                data: [0],  // Single value
                backgroundColor: 'rgba(75, 192, 192, 0.8)',
                yAxisID: 'y1'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                stacked: false,  // Set stacked to false
                categoryPercentage: 0.8,  // Adjusts the width of the bar group
                barPercentage: 0.9,  // Adjusts the width of each individual bar
                title: {
                    display: false,
                    text: 'Collateral'
                }
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'ETH Collateral'
                },
                ticks: {
                    callback: function(value) {
                        return value.toFixed(2) + ' ETH';
                    }
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'crvUSD Collateral'
                },
                ticks: {
                    callback: function(value) {
                        return value.toFixed(0) + ' crvUSD';
                    }
                },
                grid: {
                    drawOnChartArea: false,
                },
            }
        },
        plugins: {
            legend: {
                display: true
            },
            title: {
                display: false,
                text: 'Soft-Liquidation Collateral Conversion'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.dataset.label || '';
                        if (label === 'ETH') {
                            return context.parsed.y.toFixed(2) + ' ETH';
                        } else {
                            return context.parsed.y.toFixed(2) + ' crvUSD';
                        }
                    }
                }
            }
        }
    }
});

    function updateEthCrvUsdChart() {
        const ethPercentage = Number(ethCrvUsdSlider.value);
        const crvUSDPercentage = 100 - ethPercentage;
        const bottomValue = Number(bottomRangeInput.value);
        const topValue = Number(topRangeInput.value);
        const sliderValue = Number(ethCrvUsdSlider.value);
        const collateral = Number(collateralInput.value);
        
        const currentPrice = bottomValue + (topValue - bottomValue) * (sliderValue / 100);
        const avgSellPrice = (topValue + currentPrice) / 2;
        const eth = (ethPercentage/100) * collateral;
        const crvUSDEth = (crvUSDPercentage / 100) * collateral;
        const crvUSDValue = crvUSDEth * avgSellPrice;

        ethCrvUsdChart.data.datasets[0].data = [eth];
        ethCrvUsdChart.data.datasets[1].data = [crvUSDValue];
        
        ethCrvUsdChart.options.scales.y.max = Math.ceil(collateral);
        ethCrvUsdChart.options.scales.y1.max = Math.ceil(topValue * collateral);
        
        ethCrvUsdChart.update();

        ethCrvUsdValuesDisplay.innerHTML = `Collateral: ${eth.toFixed(2)} ETH, ${crvUSDValue.toFixed(2)} crvUSD<br>Average Swap Price: ${avgSellPrice.toFixed(2)} crvUSD/ETH<br>ETH Swapped to crvUSD: ${crvUSDPercentage}%`;

        currentPriceDisplay.textContent = '$' + currentPrice.toFixed(2);
        ethPercentageDisplay.textContent = ethPercentage;
    }

    ethCrvUsdSlider.addEventListener('input', updateEthCrvUsdChart);
    bottomRangeInput.addEventListener('input', updateEthCrvUsdChart);
    topRangeInput.addEventListener('input', updateEthCrvUsdChart);
    collateralInput.addEventListener('input', updateEthCrvUsdChart);

    // Initial update
    updateEthCrvUsdChart();
</script>