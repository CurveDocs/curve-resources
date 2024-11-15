// The code in this file is used to generate the charts in the shared/curve-loans/loan-strategies.md page

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
        yAxisID: 'y1',
        pointHoverRadius: 10,
        pointHitRadius: 10
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
        pointHoverRadius: 10,
        pointHitRadius: 10
        },
        {
        label: '$ CV wstETH',
        data: data.collateralUsd,
        borderColor: 'rgba(0, 255, 255, 1)',
        hidden: true,
        pointRadius: 0,
        borderWidth: 2,
        yAxisID: 'y1',
        pointHoverRadius: 10,
        pointHitRadius: 10
        },
        {
        label: '$ CV crvUSD',
        data: data.stablecoin,
        borderColor: 'rgba(0, 255, 0, 1)',
        hidden: true,
        pointRadius: 0,
        borderWidth: 2,
        yAxisID: 'y1',
        pointHoverRadius: 10,
        pointHitRadius: 10
        },
        {
        label: 'Debt Value',
        data: data.debt,
        borderColor: 'rgba(153, 153, 153, 1)',
        hidden: true,
        pointRadius: 0,
        yAxisID: 'y1',
        pointHoverRadius: 10,
        pointHitRadius: 10
        },
        {
        label: 'AAVE/Spark Liq Price',
        data: data.aaveLiqPrice,
        borderColor: 'rgba(169, 196, 235, 1)',
        hidden: true,
        pointRadius: 0,
        yAxisID: 'y1',
        borderWidth: 2,
        pointHoverRadius: 10,
        pointHitRadius: 10
        },
        {
        label: 'LTV',
        data: data.ltv,
        borderColor: 'black',
        pointRadius: 0,
        yAxisID: 'y2',
        borderWidth: 1,
        pointHoverRadius: 10,
        pointHitRadius: 10
        },
        {
        label: 'Health',
        data: data.health,
        borderColor: 'purple',
        pointRadius: 0,
        yAxisID: 'y2',
        borderWidth: 1,
        pointHoverRadius: 10,
        pointHitRadius: 10
        },
        {
        label: '% CV wstETH',
        data: data.collateralPct,
        borderColor: 'blue',
        hidden: true,
        pointRadius: 0,
        yAxisID: 'y2',
        borderWidth: 1,
        pointHoverRadius: 10,
        pointHitRadius: 10
        },
        {
        label: '% CV crvUSD',
        data: data.stablecoinPct,
        borderColor: 'green',
        hidden: true,
        pointRadius: 0,
        yAxisID: 'y2',
        borderWidth: 1,
        pointHoverRadius: 10,
        pointHitRadius: 10
        },
        {
        label: '% SL Collateral Loss',
        data: data.lossPct,
        borderColor: 'brown',
        hidden: true,
        pointRadius: 0,
        yAxisID: 'y2',
        borderWidth: 1,
        pointHoverRadius: 10,
        pointHitRadius: 10
        },
        {
        label: '% Total Collateral Loss',
        data: data.totalLossPct,
        borderColor: 'red',
        hidden: true,
        pointRadius: 0,
        yAxisID: 'y2',
        borderWidth: 1,
        pointHoverRadius: 10,
        pointHitRadius: 10
        },
        {
        label: '% Interest Collateral Loss',
        data: data.interestDebt,
        borderColor: 'magenta',
        hidden: true,
        pointRadius: 0,
        yAxisID: 'y2',
        borderWidth: 1,
        pointHoverRadius: 10,
        pointHitRadius: 10
        },
        {
        label: '% Max Deposited Collateral',
        data: data.depositedCollateralPct,
        borderColor: 'rgba(153, 132, 63, 1)',
        hidden: true,
        pointRadius: 0,
        yAxisID: 'y2',
        borderWidth: 1,
        pointHoverRadius: 10,
        pointHitRadius: 10
        },
        {
        label: 'Interest Rate',
        data: data.rate,
        borderColor: 'rgba(204, 153, 255, 1)',
        hidden: true,
        pointRadius: 0,
        yAxisID: 'y2',
        borderWidth: 1,
        pointHoverRadius: 10,
        pointHitRadius: 10
        }
    ]
    },
    options: {
    responsive: true,
    aspectRatio: 4/3,
    devicePixelRatio: 1,
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

loadData('/javascripts/data/loan-strategies/loan1.json', 'loanChart1');
loadData('/javascripts/data/loan-strategies/hardliq4.json', 'loanChart2');
loadData('/javascripts/data/loan-strategies/loan3.json', 'loanChart3');
loadData('/javascripts/data/loan-strategies/loan4.json', 'loanChart4');
loadData('/javascripts/data/loan-strategies/loan5.json', 'loanChart5');
