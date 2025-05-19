// The code in this file is used to generate the charts and calculators in the crv-token/supply-distibution.md page


function roundAmount(amount) {
  if (amount > 100) {
    return Math.round(amount);
  } else {
    return Number(amount.toPrecision(3));
  }
}

function calcVestingAmount(chosenDate, vestingYears, vestingAmount) {
  const referenceDate = new Date("2020-08-13");
  const timeDiff = Math.abs(chosenDate.getTime() - referenceDate.getTime());
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  if (daysDiff < (365*vestingYears)) {
    var vestedPerDay = vestingAmount / (365*vestingYears);
    var totalVested = vestedPerDay * daysDiff;
    return [totalVested+vestedPerDay, vestedPerDay];
  } else {
    return [vestingAmount,0];
  }
}

function calcEmissionsAmount(chosenDate) {
  const referenceDate = new Date("2020-08-13");
  if (chosenDate < referenceDate) {
    const errorMessage = "Date cannot be earlier than 13-08-2020";
    document.getElementById('errorMessage').textContent = errorMessage;
    throw new Error(errorMessage);
  } else {
    document.getElementById('errorMessage').textContent = "";
  }
  const timeDiff = Math.abs(chosenDate.getTime() - referenceDate.getTime());
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const yearsDiff = Math.floor(daysDiff/365);
  const daysInCurrentYear = daysDiff % 365;
  let totalEmissions = 0;
  const emissionsReductionFactor = Math.pow(2, 1/4);
  const initialEmissions = 274815283

  for (let i = 0; i < yearsDiff; i++) {
    const yearlyEmissions = initialEmissions / Math.pow(emissionsReductionFactor, i);
    totalEmissions += yearlyEmissions;
  }

  const currentYearEmissions = initialEmissions / Math.pow(emissionsReductionFactor, yearsDiff);
  const currentDailyEmissions = currentYearEmissions / 365;
  const partialYearEmissions = currentDailyEmissions * daysInCurrentYear;
  totalEmissions += partialYearEmissions;

  return [totalEmissions+currentDailyEmissions, currentDailyEmissions];
}

function calcAmounts(chosenDate) {

    const community = calcEmissionsAmount(chosenDate);
    const earlyUsers = calcVestingAmount(chosenDate, 1, 151515152);
    const coreTeam = calcVestingAmount(chosenDate, 4, 800961153);
    const investors = calcVestingAmount(chosenDate, 2, 108129756);
    const employees = calcVestingAmount(chosenDate, 2, 90909091);
    const reserve = calcVestingAmount(chosenDate, 1, 151515152);
    const vestingTotal = 1303030303;

    totalEmitted = community[0] + earlyUsers[0] + coreTeam[0] + investors[0] + employees[0] + reserve[0];
    dailyEmitted = community[1] + earlyUsers[1] + coreTeam[1] + investors[1] + employees[1] + reserve[1];
    yearlyEmitted = dailyEmitted * 365;
    inflationRate = yearlyEmitted / totalEmitted * 100;
    maxSupply = 3030303032;
    percentEmitted = totalEmitted / maxSupply * 100;
    vestingRemaining = vestingTotal - earlyUsers[0] - coreTeam[0] - investors[0] - employees[0] - reserve[0];

    const amounts = {
        emissionsTotal: community[0],
        emissionsDaily: community[1],
        earlyUsersTotal: earlyUsers[0],
        earlyUsersDaily: earlyUsers[1],
        coreTeamTotal: coreTeam[0],
        coreTeamDaily: coreTeam[1],
        investorsTotal: investors[0],
        investorsDaily: investors[1],
        employeesTotal: employees[0],
        employeesDaily: employees[1],
        reserveTotal: reserve[0],
        reserveDaily: reserve[1],
        totalEmitted: totalEmitted,
        dailyEmitted: dailyEmitted,
        yearlyEmitted: yearlyEmitted,
        inflationRate: inflationRate,
        maxSupply: maxSupply,
        percentEmitted: percentEmitted,
        vestingRemaining: vestingRemaining
    };
    return amounts;
}

let totalChart;
let dailyChart;

function renderCharts() {
    const chosenDateString = document.getElementById('dateInput').value;
    const chosenDate = new Date(chosenDateString);

    const amounts = calcAmounts(chosenDate);
    const roundedAmounts = Object.fromEntries(
        Object.entries(amounts).map(([key, value]) => [key, roundAmount(value)])
    );

    const totalCtx = document.getElementById('totalChart').getContext('2d');
    const dailyCtx = document.getElementById('dailyChart').getContext('2d');

    if (totalChart) {
        totalChart.destroy();
    }
    if (dailyChart) {
        dailyChart.destroy();
    }

    totalChart = new Chart(totalCtx, {
        type: 'pie',
        data: {
        labels: ['Community', 'Early Users', 'Core Team', 'Investors', 'Employees', 'Reserve'],
        datasets: [{
            data: [
            roundedAmounts.emissionsTotal,
            roundedAmounts.earlyUsersTotal,
            roundedAmounts.coreTeamTotal,
            roundedAmounts.investorsTotal,
            roundedAmounts.employeesTotal,
            roundedAmounts.reserveTotal
            ],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E5EA2', '#3cba9f', '#e8c3b9']
        }]
        },
        options: {
        devicePixelRatio: 2.5,
        responsive: true,
        plugins: {
            title: {
                display: false,
                text: 'Total CRV Circulating'
            }
        }}
    });

    dailyChart = new Chart(dailyCtx, {
        type: 'pie',
        devicePixelRatio: 2.5,
        data: {
        labels: ['Community', 'Early Users', 'Core Team', 'Investors', 'Employees', 'Reserve'],
        datasets: [{
            data: [
            roundedAmounts.emissionsDaily,
            roundedAmounts.earlyUsersDaily,
            roundedAmounts.coreTeamDaily,
            roundedAmounts.investorsDaily,
            roundedAmounts.employeesDaily,
            roundedAmounts.reserveDaily
            ],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E5EA2', '#3cba9f', '#e8c3b9']
        }]
        },
        options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
                text: 'Daily CRV Added to Circulating'
            }
        }}
    });

    // Update the total amounts
    const totalAmountsElement = document.getElementById('totalAmounts');
    totalAmountsElement.innerHTML = `
        <div style="display: flex;">
        <span style="text-align: center; margin-top: 15px; margin-right: 10px; flex: 2; font-weight: bold;">Total Emissions</span>
        </div>
        <div style="display: flex; border-bottom: 1px solid #ddd;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Community:</span>
        <span style="text-align: left; flex: 2;">${roundedAmounts.emissionsTotal.toLocaleString(undefined)}</span>
        <span style="text-align: left; flex: 1.3; color: grey">${(amounts.emissionsTotal/amounts.totalEmitted*100).toFixed(2)} %</span>
        </div>
        <div style="display: flex;">
        <span style="text-align: center; margin-right: 10px; flex: 2; font-weight: bold;">Total Vested</span>
        </div>
        <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Early Users:</span>
        <span style="text-align: left; flex: 2;">${roundedAmounts.earlyUsersTotal.toLocaleString(undefined)}</span>
        <span style="text-align: left; flex: 1.3; color: grey">${(amounts.earlyUsersTotal/amounts.totalEmitted*100).toFixed(2)} %</span>
        </div>
        <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Core Team:</span>
        <span style="text-align: left; flex: 2;">${roundedAmounts.coreTeamTotal.toLocaleString(undefined)}</span>
        <span style="text-align: left; flex: 1.3; color: grey">${(amounts.coreTeamTotal/amounts.totalEmitted*100).toFixed(2)} %</span>
        </div>
        <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Investors:</span>
        <span style="text-align: left; flex: 2;">${roundedAmounts.investorsTotal.toLocaleString(undefined)}</span>
        <span style="text-align: left; flex: 1.3; color: grey">${(amounts.investorsTotal/amounts.totalEmitted*100).toFixed(2)} %</span>
        </div>
        <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Employees:</span>
        <span style="text-align: left; flex: 2;">${roundedAmounts.employeesTotal.toLocaleString(undefined)}</span>
        <span style="text-align: left; flex: 1.3; color: grey">${(amounts.employeesTotal/amounts.totalEmitted*100).toFixed(2)} %</span>
        </div>
        <div style="display: flex; border-bottom: 1px solid #ddd;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Reserve:</span>
        <span style="text-align: left; flex: 2;">${roundedAmounts.reserveTotal.toLocaleString(undefined)}</span>
        <span style="text-align: left; flex: 1.3; color: grey">${(amounts.reserveTotal/amounts.totalEmitted*100).toFixed(2)} %</span>
        </div>
        <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2; font-weight: bold;">Total:</span>
        <span style="text-align: left; flex: 2; font-weight: bold;">${(Math.round(amounts.totalEmitted)).toLocaleString(undefined)}</span>
        <span style="text-align: left; flex: 1.3; color: grey"></span>
        </div>
    `;

    // Update the daily amounts
    const dailyAmountsElement = document.getElementById('dailyAmounts');
    dailyAmountsElement.innerHTML = `
        <div style="display: flex;">
        <span style="text-align: center; margin-top: 15px; margin-right: 10px; flex: 2; font-weight: bold;">Daily Emissions</span>
        </div>
        <div style="display: flex; border-bottom: 1px solid #ddd;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Community:</span>
        <span style="text-align: left; flex: 2;">${roundedAmounts.emissionsDaily.toLocaleString(undefined)}</span>
        <span style="text-align: left; flex: 1.3; color: grey">${(amounts.emissionsDaily/amounts.dailyEmitted*100).toFixed(2)} %</span>
        </div>
        <div style="display: flex;">
        <span style="text-align: center; margin-right: 10px; flex: 2; font-weight: bold;">Daily Vested</span>
        </div>
        <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Early Users:</span>
        <span style="text-align: left; flex: 2;">${roundedAmounts.earlyUsersDaily.toLocaleString(undefined)}</span>
        <span style="text-align: left; flex: 1.3; color: grey">${(amounts.earlyUsersDaily/amounts.dailyEmitted*100).toFixed(2)} %</span>
        </div>
        <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Core Team:</span>
        <span style="text-align: left; flex: 2;">${roundedAmounts.coreTeamDaily.toLocaleString(undefined)}</span>
        <span style="text-align: left; flex: 1.3; color: grey">${(amounts.coreTeamDaily/amounts.dailyEmitted*100).toFixed(2)} %</span>
        </div>
        <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Investors:</span>
        <span style="text-align: left; flex: 2;">${roundedAmounts.investorsDaily.toLocaleString(undefined)}</span>
        <span style="text-align: left; flex: 1.3; color: grey">${(amounts.investorsDaily/amounts.dailyEmitted*100).toFixed(2)} %</span>
        </div>
        <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Employees:</span>
        <span style="text-align: left; flex: 2;">${roundedAmounts.employeesDaily.toLocaleString(undefined)}</span>
        <span style="text-align: left; flex: 1.3; color: grey">${(amounts.employeesDaily/amounts.dailyEmitted*100).toFixed(2)} %</span>
        </div>
        <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Reserve:</span>
        <span style="text-align: left; flex: 2;">${(0).toLocaleString(undefined)}</span>
        <span style="text-align: left; flex: 1.3; color: grey">${(0).toFixed(2)} %</span>
        </div>
        <div style="display: flex; border-top: 1px solid #ddd;">
        <span style="text-align: right; margin-right: 10px; flex: 2; font-weight: bold;">Daily Total:</span>
        <span style="text-align: left; flex: 2; font-weight: bold;">${(Math.round(amounts.dailyEmitted)).toLocaleString(undefined)}</span>
        <span style="text-align: left; flex: 1.3; color: grey"></span>
        </div>
    `;


    // Update the daily amounts
    const totalEmissionsElement = document.getElementById('totalEmissions');
    totalEmissionsElement.innerHTML = `
    <div style="text-align: center; font-weight: bold;border-bottom: 1px solid #ddd;">CRV Stats on ${chosenDateString}</div>
    <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Max CRV Supply :</span>
        <span style="text-align: left; flex: 2;">${roundAmount(amounts.maxSupply).toLocaleString(undefined)}</span>
    </div>
    <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Total CRV Circulating :</span>
        <span style="text-align: left; flex: 2;">${roundAmount(amounts.totalEmitted).toLocaleString(undefined)}</span>
    </div>
    <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Total CRV Supply :</span>
        <span style="text-align: left; flex: 2;">${roundAmount(Math.max(1303030303+amounts.emissionsTotal,amounts.totalEmitted)).toLocaleString(undefined)}</span>
    </div>
    <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Remaining CRV Emissions :</span>
        <span style="text-align: left; flex: 2;">${roundAmount(amounts.maxSupply - amounts.totalEmitted - amounts.vestingRemaining).toLocaleString(undefined)}</span>
    </div>
    <div style="display: flex;">
      <span style="text-align: right; margin-right: 10px; flex: 2;">Remaining CRV Vesting :</span>
      <span style="text-align: left; flex: 2;">
        ${Math.max(0, roundAmount(amounts.vestingRemaining)).toLocaleString(undefined)}
      </span>
    </div>
    <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Percentage of CRV Circulating :</span>
        <span style="text-align: left; flex: 2;">${amounts.percentEmitted.toLocaleString(undefined, { maximumFractionDigits: 2 })} %</span>
    </div>
    <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Daily CRV Emitted & Vested :</span>
        <span style="text-align: left; flex: 2;">${roundAmount(amounts.dailyEmitted).toLocaleString(undefined)}</span>
    </div>
    <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">Yearly CRV Emitted & Vested :</span>
        <span style="text-align: left; flex: 2;">${roundAmount(amounts.yearlyEmitted).toLocaleString(undefined)}</span>
    </div>
    <div style="display: flex;">
        <span style="text-align: right; margin-right: 10px; flex: 2;">CRV Inflation Rate :</span>
        <span style="text-align: left; flex: 2;">${amounts.inflationRate.toLocaleString(undefined, { maximumFractionDigits: 2 })} %</span>
    </div>


    `;
}

// Set the initial date to today
document.getElementById('dateInput').value = new Date().toISOString().slice(0, 10);
renderCharts();

function getCurrentDate() {
  return new Date().toISOString().slice(0, 10);
}

function getNextReductionDate() {
  const startDate = new Date('2020-08-13');
  const currentDate = new Date();

  let nextEventDate = new Date(startDate);

  while (nextEventDate < currentDate) {
    nextEventDate.setDate(nextEventDate.getDate() + 365);
  }

  return nextEventDate.toISOString().slice(0, 10);
}

function setDate(date) {
  document.getElementById('dateInput').value = date;
  renderCharts();
}

function generateDatasets() {
  const datasets = {
    emissionsTotal: [],
    emissionsYearly: [],
    earlyUsersTotal: [],
    earlyUsersYearly: [],
    coreTeamTotal: [],
    coreTeamYearly: [],
    investorsTotal: [],
    investorsYearly: [],
    employeesTotal: [],
    employeesYearly: [],
    reserveTotal: [],
    reserveYearly: [],
    totalEmitted: [],
    dailyEmitted: [],
    yearlyEmitted: [],
    inflationRate: [],
    maxSupply: [],
    percentEmitted: [],
    vestingRemaining: []
  };

  const startDate = new Date('2023-08-13');
  const endDate = new Date(startDate);
  endDate.setFullYear(endDate.getFullYear() + 10);

  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 365)) {
    const amounts = calcAmounts(date);

    for (const key in amounts) {

      let value;
      if (key === 'percentEmitted' || key === 'inflationRate') {
        value = parseFloat(amounts[key].toFixed(2));
        datasets[key].push({ x: new Date(date), y: value });
      } else if (key.endsWith('Daily')) {
        const newKey = key.replace('Daily', 'Yearly');
        value = Math.round(amounts[key] * 365);
        datasets[newKey].push({ x: new Date(date), y: value });
      } else {
        value = Math.round(amounts[key]);
        datasets[key].push({ x: new Date(date), y: value });
      }
    }
  }

  return datasets;
}

var crv10yearChartctx = document.getElementById('crv10yearChart').getContext('2d');
const datasets = generateDatasets();

/*['Community', 'Early Users', 'Core Team', 'Investors', 'Employees', 'Reserve'],
['#FF6384', '#36A2EB', '#FFCE56', '#8E5EA2', '#3cba9f', '#e8c3b9'] */

new Chart(crv10yearChartctx, {
  type: 'line',
  data: {
    datasets: [
      {
        label: 'Community Yearly CRV',
        data: datasets.emissionsYearly,
        borderColor: '#FF6384',
        fill: false,
        yAxisID: 'y',
        pointRadius: 0,
      },
      {
        label: 'Core Team Yearly CRV',
        data: datasets.coreTeamYearly,
        borderColor: '#FFCE56',
        fill: false,
        yAxisID: 'y',
        pointRadius: 0,
      },
      {
        label: 'Total Circulating CRV',
        data: datasets.totalEmitted,
        borderColor: '#8E5EA2',
        fill: false,
        yAxisID: 'y',
        pointRadius: 0,
        hidden: true
      },
      {
        label: 'Total Distributed %',
        data: datasets.percentEmitted,
        borderColor: '#36A2EB',
        fill: false,
        yAxisID: 'y1',
        pointRadius: 0,
        borderDash: [5, 5],
        borderDashOffset: 0
      },
      {
        label: 'CRV Inflation Rate',
        data: datasets.inflationRate,
        borderColor: '#3cba9f',
        fill: false,
        yAxisID: 'y1',
        pointRadius: 0,
        borderDash: [5, 5],
        borderDashOffset: 0
      }
    ],
  },
  options: {
    devicePixelRatio: 2.5,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
        },
        title: {
          display: true,
          text: 'Date',
        },
        ticks: {
          source: 'data',
        },
      },
      y: {
        beginAtZero: true,
        position: 'left',
        title: {
          display: true,
          text: 'CRV Amount',
        },
      },
      y1: {
        beginAtZero: true,
        position: 'right',
        title: {
          display: true,
          text: 'Percentage',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: false,
      axis: 'x',
    },
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
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
          title: function (context) {
            const date = new Date(context[0].parsed.x).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });
            return date;
          },
          label: function (context) {
            if (context.datasetIndex === 0) {
                const datasets = context.chart.data.datasets;
                const labels = [];
                const communityYearly = datasets[0].data[context.dataIndex].y;
                const coreTeamYearly = datasets[1].data[context.dataIndex].y;
                const totalDistributed = datasets[2].data[context.dataIndex].y;
                const percentDistributed = datasets[3].data[context.dataIndex].y;
                const inflationRate = datasets[4].data[context.dataIndex].y;

                labels.push(`Community Yearly CRV: ${communityYearly.toLocaleString(undefined)}`);
                labels.push(`Core Team Yearly CRV: ${coreTeamYearly.toLocaleString(undefined)}`);
                labels.push(`Total Circulating CRV: ${totalDistributed.toLocaleString(undefined)}`);
                labels.push(`Total Distributed %: ${percentDistributed}%`);
                labels.push(`CRV Inflation Rate: ${inflationRate}%`);

                return labels;
            }
            return '';
          },
        },
      },
    },
    legend: {
      position: 'bottom',
    },
  },
});

    var ctx = document.getElementById('crvAllocationChart').getContext('2d');
    var data = [1727272729, 151515152, 800961153, 108129756, 90909091, 151515152];
    var totalSum = data.reduce((a, b) => a + b, 0);
    var percentages = data.map(value => ((value / totalSum) * 100).toFixed(2));

    var crvAllocationChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Community', 'Early Users', 'Core Team', 'Investors', 'Employees', 'Reserve'],
            datasets: [{
                data: data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E5EA2', '#3cba9f', '#e8c3b9'],
                borderWidth: 1
            }]
        },
        options: {
            devicePixelRatio: 2.5,
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                                var label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                var value = context.raw;
                                var percentage = percentages[context.dataIndex];
                                label += value.toLocaleString() + ' (' + percentage + '%)';
                                return label;
                            }
                    }
                },
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'CRV Total Allocation'
                }
            }
        }
    });

    var ctx = document.getElementById('crvLaunchChart').getContext('2d');
    var data = [151515152, 800961152, 108129756, 90909090, 151515152];
    var totalSum = data.reduce((a, b) => a + b, 0);
    var percentagesLaunch = data.map(value => ((value / totalSum) * 100).toFixed(2));
    var crvLaunchChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                'Early Users',
                'Core Team',
                'Investors',
                'Employees',
                'Reserve'
            ],
            datasets: [{
                data: data,
                backgroundColor: ['#36A2EB', '#FFCE56', '#8E5EA2', '#3cba9f', '#e8c3b9'],
                borderWidth: 1
            }]
        },
        options: {
            devicePixelRatio: 2.5,
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            var value = context.raw;
                            var percentage = percentagesLaunch[context.dataIndex];
                            var vestingYears = [1, 4, 2, 2, 0][context.dataIndex];
                            label += value.toLocaleString() + ' (' + percentage + '%)';                            return label;
                        }
                    }
                },
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'CRV Launch Allocation'
                }
            }
        }
    });
