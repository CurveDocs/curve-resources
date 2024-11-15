// The code in this file is used to generate the charts and calculators in the crvusd/loan-concepts.md page

document.addEventListener("change", function (event) {
    if (event.target.matches('input[name="__palette"]')) {
      location.reload();
    }
  });

function isUserDarkmode() {
  var colorScheme = document.querySelector('body').getAttribute('data-md-color-scheme');
  return colorScheme === 'slate';
}

// liq chart
let liqChart = null;
let healthChart = null;
document.addEventListener('DOMContentLoaded', function() {
    updateLiqGraph();

    // liq graph
    const ampInputLiq = document.getElementById('ampInputLiq');
    const basePriceInputLiq = document.getElementById('basePriceInputLiq');
    const startingBandInputLiq = document.getElementById('startingBandInputLiq');
    const finishBandInputLiq = document.getElementById('finishBandInputLiq');
    const oraclePriceLiq = document.getElementById('oraclePriceLiq');
    const liqDiscountLiq = document.getElementById('liqDiscountLiq');
    const collateralLiq = document.getElementById('collateralLiq');
    const debtLiq = document.getElementById('debtLiq');
    const slLossesLiq = document.getElementById('slLossesLiq');
    ampInputLiq.addEventListener('change', updateLiqGraph);
    basePriceInputLiq.addEventListener('change', updateLiqGraph);
    startingBandInputLiq.addEventListener('change', updateLiqGraph);
    finishBandInputLiq.addEventListener('change', updateLiqGraph);
    oraclePriceLiq.addEventListener('change', updateLiqGraph);
    liqDiscountLiq.addEventListener('change', updateLiqGraph);
    collateralLiq.addEventListener('change', updateLiqGraph);
    debtLiq.addEventListener('change', updateLiqGraph);
    slLossesLiq.addEventListener('change', updateLiqGraph);
});

function generateBandData(basePrice, startN, finishN, A, collateral, oraclePrice, liqDiscount) {
    const softLiqLosses = document.getElementById('slLossesLiq').value.split(',').map(parseFloat);
    const bands = Math.abs(finishN - startN + 1);
    const bandCollateral = collateral/bands;
    const data = [];
    const xTicks = [];
    let xAxisMin, startingWidth;
    let yAxisMax = 0;
    let totalValue = 0;
    let disTotalValue = 0;
    let collateralLeft = 0;
    for (let i = startN; i < finishN+1; i++) {
        const softLiqLoss = softLiqLosses[i-startN] || 0;
        const xMin = basePrice * Math.pow((A - 1) / A, i + 1);
        const xMax = basePrice * Math.pow((A - 1) / A, i);
        xAxisMin = xMin;

        let thisBandCollateral = bandCollateral * (1-softLiqLoss/100)
        let avgSell = (xMax-xMin)/2 + xMin;
        let collatVal = avgSell * thisBandCollateral;
        collatVal = collatVal * (1-softLiqLoss/100);
        collateralLeft += thisBandCollateral;
        console.log(collateralLeft);
        if (i == startN) {
            xAxisMax = Number(xMax.toPrecision(4));
            xTicks.push(xAxisMax);
        }

        totalValue += collatVal;
        let discCollatVal = collatVal*(1-liqDiscount/100);

        xTicks.push(Number(xMin.toPrecision(4)));
        if (i == startN) {
            startingWidth = xMax - xMin;
        }

        if (collatVal > yAxisMax) {
            yAxisMax = collatVal;
        }

        let textColor = 'black';
        if (isUserDarkmode() == true) {
            textColor = 'white';
        }

        data.push({
            type: 'box',
            xMin: Number(xMin.toPrecision(4)),
            xMax: Number(xMax.toPrecision(4)),
            yMin: 0,
            yMax: Number(collatVal.toPrecision(4)),
            backgroundColor: 'rgba(80, 150, 220, 0.3)',
            borderColor: 'rgba(80, 150, 220, 1)',
            borderWidth: 1,
        });
        data.push({
            type: 'box',
            xMin: Number(xMin.toPrecision(4)),
            xMax: Number(xMax.toPrecision(4)),
            yMin: 0,
            yMax: Number(discCollatVal.toPrecision(4)),
            backgroundColor: 'rgba(80, 150, 220, 0.8)',
            borderColor: 'rgba(80, 150, 220, 1)',
            borderWidth: 1,
            label: {
                backgroundColor: 'rgba(80, 150, 220, 1)',
                borderRadius: 1,
                color: textColor,
                drawTime: 'afterDatasetsDraw',
                content: (ctx) => ['Band ' + Number(i), 'Collateral: ' + Number(thisBandCollateral.toPrecision(4)), 'Soft Liq Loss: ' + softLiqLoss + '%', 'Avg sell price: $' + Number(avgSell.toPrecision(4)), 'Collat Val: $' + Number(collatVal.toPrecision(4)), 'Disc. Collat Val: $' + Number(discCollatVal.toPrecision(4)),'Lower Lim: $' + Number(xMin.toPrecision(4)), 'Upper Lim: $' + Number(xMax.toPrecision(4))],
                },
                enter({ element }, event) {
                    element.label.options.display = true;
                    return true; // force update
                },
                leave({ element }, event) {
                    element.label.options.display = false;
                    return true;
                }
        });
    }

    // add oraclePrice line
    data.push({
            type: 'line',
            scaleID: 'x',
            value: oraclePrice,
            borderColor: 'red',
            borderWidth: 2,
            label: {
                backgroundColor: 'red',
                borderRadius: 0,
                color: 'white',
                content: (ctx) => ['Oracle Price', '$' + oraclePrice],
                display: true
            }
        });
    
    let priceAboveBands = 0;
    if (oraclePrice > xAxisMax) {
        priceAboveBands = oraclePrice - xAxisMax;
        data.push({
        type: 'line',
        yMin: yAxisMax/3,
        yMax: yAxisMax/3,
        xMin: xAxisMax,
        xMax: oraclePrice,
        borderColor: 'green',
        borderWidth: 2,
        borderDash: [5, 5],
        label: {
            backgroundColor: 'green',
            borderRadius: 0,
            color: 'white',
            content: (ctx) => ['Price Above Bands', '$' + Number(priceAboveBands).toPrecision(4)],
            display: true
        }
        });
    }

    xTicks.push(Number(oraclePrice.toPrecision(4)));

    if (oraclePrice < xAxisMin) {
        xAxisMin = oraclePrice - (xAxisMax-oraclePrice)*0.1;
        xAxisMax = (xAxisMax + (xAxisMax-oraclePrice)*0.1)
    } else if (oraclePrice > xAxisMax) {
        xAxisMin = (xAxisMin - (oraclePrice-xAxisMin)*0.1)
        xAxisMax = oraclePrice + (oraclePrice-xAxisMin)*0.1;
    } else {
        xAxisMin = (xAxisMin - (xAxisMax-xAxisMin)*0.1)
        xAxisMax = (xAxisMax + (xAxisMax-xAxisMin)*0.1)
    }

    let valueAboveBands = collateralLeft * priceAboveBands;

    return [data, xAxisMin, xAxisMax, yAxisMax, xTicks, valueAboveBands, totalValue];
}

function updateLiqGraph() {

    const A = parseInt(document.getElementById('ampInputLiq').value);
    const basePrice = parseFloat(document.getElementById('basePriceInputLiq').value)
    const startN = parseInt(document.getElementById('startingBandInputLiq').value);
    const finishN = parseInt(document.getElementById('finishBandInputLiq').value);
    const oraclePrice = parseFloat(document.getElementById('oraclePriceLiq').value);
    const liqDiscount = parseFloat(document.getElementById('liqDiscountLiq').value);
    const collateral = parseFloat(document.getElementById('collateralLiq').value);

    const [annotations, xAxisMin, xAxisMax, yAxisMax, xTicks, valueAboveBands, totalValue] = generateBandData(basePrice, startN, finishN, A, collateral, oraclePrice, liqDiscount);

    updateHealthGraph(totalValue, valueAboveBands, liqDiscount);

    const ctx = document.getElementById('liqChart').getContext('2d');

    const reversedXTicks = xTicks.slice().reverse();
    const data = {
      datasets: [{
        data: [], // Empty dataset
      }]
    };

    const options = {
      scales: {
        x: {
            title: {
                display: true,
                text: 'Price ($)'
            },
            min: xAxisMin,
            max: xAxisMax,
            afterBuildTicks: axis => axis.ticks = xTicks.slice().reverse().map(v => ({ value: v }))
        },
        y: {
            title: {
                display: true,
                text: 'Collateral Value ($)'
            },
            min: 0,
            max: (yAxisMax*1.1)
        }
      },
      plugins: {
        annotation: {
            common: {
                drawTime: 'beforeDatasetsDraw'
            },
            annotations: annotations
        },
        tooltip: {
            display: false,
        },
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Value in Bands'
        }
      },
      
    };
    
    if (liqChart) {
            liqChart.destroy();
    }
    liqChart = new Chart(ctx, {
        type: 'scatter',
        data: data,
        options: options,
    });
}

function updateHealthGraph(valueInBands, valueAboveBands, liqDiscount) {

    const debt = parseFloat(document.getElementById('debtLiq').value);
    let disValueInBands = valueInBands * (1-liqDiscount/100);
    let totalValue = disValueInBands + valueAboveBands

    const ctx = document.getElementById('healthChart').getContext('2d');

    var healthGreen = (totalValue/debt - 1)*100;
    var healthYellow = (disValueInBands/debt - 1)*100;
    document.getElementById('healthResultGreen').textContent = healthGreen.toFixed(2) + '%';
    document.getElementById('healthResultYellow').textContent = healthYellow.toFixed(2) + '%';

    const data = {
      labels: ['Discounted Value in Bands', 'Value Above Bands', 'Total Value', 'Debt'],
      datasets: [{
        label: 'Data',
        data: [Number(disValueInBands.toPrecision(4)), Number(valueAboveBands.toPrecision(4)), Number(totalValue.toPrecision(4)), Number(debt.toPrecision(4))],
        backgroundColor: [
          'rgba(80, 150, 220, 0.8)',
          'rgba(0, 120, 0, 0.8)',
          'rgba(80, 180, 180, 0.8)',
          'rgba(220, 40, 40, 0.8)'
        ],
        borderColor: [
          'rgba(80, 150, 220, 1)',
          'rgba(0, 120, 0, 1)',
          'rgba(80, 180, 180, 1)',
          'rgba(220, 40, 40, 1)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        x: {
        barPercentage: 0.5, // Adjust this value to make the bars thinner (e.g., 0.5 for 50% width)
        categoryPercentage: 0.5 // Adjust this value to add spacing between categories (e.g., 0.8 for 80% width)
        },
        y: {
            title: {
                display: true,
                text: 'Value ($)'
            },
          beginAtZero: true
        }
      },
      plugins: {
        tooltip: {
            display: true,
        },
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Value vs. Debt'
        }
      },
      
    };
    
    if (healthChart) {
            healthChart.destroy();
    }
    healthChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options,
    });
}

let rateChart = null;
let ampChart = null;

document.addEventListener('DOMContentLoaded', function() {
    updateAmpGraph(); // Draw the initial amplification chart with default values
    calculateLTV()


    // amp graph
    const ampInput = document.getElementById('ampInput');
    const basePriceInput = document.getElementById('basePriceInput');
    const numBandsInput = document.getElementById('numBandsInput');
    ampInput.addEventListener('change', updateAmpGraph);
    basePriceInput.addEventListener('change', updateAmpGraph);
    numBandsInput.addEventListener('change', updateAmpGraph);

    //ltv calculator
    const ampInput2 = document.getElementById('ampInput2');
    const numBandsInput2 = document.getElementById('numBandsInput2');
    const loanDiscountInput = document.getElementById('loanDiscountInput');
    ampInput2.addEventListener('change', calculateLTV);
    // numBandsInput2.addEventListener('change', calculateLTV);
    loanDiscountInput.addEventListener('change', calculateLTV);

    //
});

function calculateLTV() {
  var ampFactor2 = parseInt(document.getElementById('ampInput2').value);
  // var numBands2 = parseInt(document.getElementById('numBandsInput2').value);
  var loanDiscount = parseInt(document.getElementById('loanDiscountInput').value);
  console.log(loanDiscount);
  console.log(ampFactor2);
  var ltv = ((ampFactor2 - 1) / ampFactor2) ** 2 * (1 - loanDiscount / 100) * 100;
  document.getElementById('ltvResult').textContent = ltv.toFixed(2) + '%';
}

function generateRectangleData(basePrice, count, A, equalHeight) {
    const data = [];
    const xTicks = [basePrice];
    const xAxisMax = basePrice;
    let xAxisMin, yAxisMax, startingWidth;
    for (let i = 0; i < count; i++) {
        const xMin = basePrice * Math.pow((A - 1) / A, i + 1);
        const xMax = basePrice * Math.pow((A - 1) / A, i);
        xAxisMin = xMin;
        xTicks.push(Number(xMin.toPrecision(4)));
        let height;
        if (i == 0) {
            startingWidth = xMax - xMin;
        }
        if (equalHeight == true) {
            height = 100;
            yAxisMax = 1;
        } else {
            height = startingWidth/(xMax-xMin)*100;
            yAxisMax = height;
        }

        let textColor = 'black';
        if (isUserDarkmode() == true) {
            textColor = 'white';
        }

        data.push({
        type: 'box',
        xMin: Number(xMin.toPrecision(4)),
        xMax: Number(xMax.toPrecision(4)),
        yMin: 0,
        yMax: Number(height.toPrecision(4)),
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        label: {
            color: textColor,
            drawTime: 'afterDatasetsDraw',
            content: (ctx) => ['Band ' + Number(i+1), 'Lower Lim: $' + Number(xMin.toPrecision(4)), 'Upper Lim: $' + Number(xMax.toPrecision(4)), 'Width: $' + Number((xMax-xMin).toPrecision(4)), 'Liq Density: ' + Number(height.toPrecision(4)) + '%'],
            },
            enter({ element }, event) {
                element.label.options.display = true;
                return true; // force update
            },
            leave({ element }, event) {
                element.label.options.display = false;
                return true;
            }
        });
    }
    return [data, xAxisMin, xAxisMax, yAxisMax, xTicks];
}

function updateAmpGraph() {
    const A = parseInt(document.getElementById('ampInput').value);
    const numBands = parseInt(document.getElementById('numBandsInput').value);
    const basePrice = parseFloat(document.getElementById('basePriceInput').value)

    const [annotations, xAxisMin, xAxisMax, yAxisMax, xTicks] = generateRectangleData(basePrice, numBands, A, false);
    const ctx = document.getElementById('ampChart').getContext('2d');
    const reversedXTicks = xTicks.slice().reverse();
    const data = {
      datasets: [{
        data: [], // Empty dataset
      }]
    };

    const options = {
      scales: {
        x: {
            title: {
                display: true,
                text: 'Price ($)'
            },
            min: (xAxisMin - (xAxisMax-xAxisMin)*0.1),
            max: (xAxisMax + (xAxisMax-xAxisMin)*0.1),
            afterBuildTicks: axis => axis.ticks = xTicks.slice().reverse().map(v => ({ value: v }))
        },
        y: {
            title: {
                display: true,
                text: 'Liquidity Density (%)'
            },
            min: 0,
            max: (yAxisMax*1.1)
        }
      },
      plugins: {
        annotation: {
            common: {
                drawTime: 'beforeDatasetsDraw'
            },
            annotations: annotations
        },
        tooltip: {
            display: false,
        },
        legend: {
            display: false
        }
      }
    };
    
    if (ampChart) {
            ampChart.destroy();
    }
    ampChart = new Chart(ctx, {
        type: 'scatter',
        data: data,
        options: options
    });
}

function updateRateGraph() {
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