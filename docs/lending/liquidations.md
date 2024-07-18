<h1>Liquidation Examples</h1>

Curve lending works differently than other lending protocols.  There isn't a fixed liquidation price.  There is a soft-liquidation range, and hard-liquidation can only occur if the health of a loan goes negative.  

In the soft-liquidation range collateral is slowly swapped for the borrowed asset as the price declines, and swapped back as price increases.  For example, in lending market using WETH to borrow crvUSD, above the soft-liquidation range all collateral should be WETH, in the middle of the range their collateral will be half WETH, half crvUSD, and if a user gets below their soft-liquidation range (this is rare, but not impossible) all their collateral will be crvUSD, meaning the user is protected if the price drops further.

Soft-liquidation losses are hard to estimate, but the general idea is that if prices move quickly, the loss will be large, if prices move slowly, losses will be small or even sometimes positive.

## Hard-Liquidation

**Hard-liquidation can only occur when the health of a loan is negative**.  If the health is negative anyone can pay off the debt and claim the collateral backing the loan, this should always be profitable, but in rare circumstances it may not be, if this happens it's called [bad debt](../crvusd/loan-details.md#bad-debt).

The example below shows a loan in the CRV/crvUSD lending market which was hard-liquidated.  The chart is interactive, by hovering over prices, you can see how the health of the loan decreases over time.  See that hard-liquidation only relies on health.  **The bottom of the soft-liquidation range is not where hard-liquidation happens.**

<div class="centered2" style="width: 100%">
  <canvas id="crvHardLiq"></canvas>
</div>

It is always better to self-liquidate a loan before a loan is hard-liquidated.  This is because the health calculation values your collateral lower than its actual worth. In this example, the borrower would have gotten back 11,107 crvUSD more if they had self-liquidated their loan instead of letting it be hard-liquidated.

## Managing Health & Self-Liquidation Example

The below example shows how to manage health and how self-liquidation works, this shows a loan in the WETH/crvUSD lending market.  When the user got into soft-liquidation they decided to repay around 10% of their debt, this increased their health from approx. 3% to 13%.  They then stayed in soft-liquidation for a long time, so they self-liquidated.

Self-liquidating here was a good idea, this is because they already had 38,857 crvUSD as collateral (from swapped WETH in soft-liquidation), and their debt was 98,299 crvUSD, they only had to send 59,442 crvUSD and they received back their 24.3371 WETH.  If they chose to repay they would have had to repay all 98,299 crvUSD of debt, and received all collateral back (38,857 crvUSD and 24.3371 WETH) in return.

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