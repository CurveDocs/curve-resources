// The code in this file is used to generate the charts and calculators in the crvusd/liquidations.md page

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

loadData('/javascripts/data/liquidations/softLiqData.json', 'softLiqChart', 3500, 3450, 'WETH', 'crvUSD', true);
loadData('/javascripts/data/liquidations/crvHardLiqData.json', 'crvHardLiq', 0.3, 0.32, 'CRV', 'crvUSD', true);
loadData('/javascripts/data/liquidations/wethSelfLiqData.json', 'wethSelfLiq', 3200, 3200, 'WETH', 'crvUSD')

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