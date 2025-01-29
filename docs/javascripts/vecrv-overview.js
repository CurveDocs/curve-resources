// The code in this file is used to generate the charts in the vecrv/overview.md page

// Get today's date
const today = new Date();
const endDate = new Date(today);
const relockDate = new Date(today);
relockDate.setFullYear(today.getFullYear() + 3);
endDate.setFullYear(today.getFullYear() + 7);

// Generate data points every 7 days
let data = [];
let currentDate = new Date(today);

while (currentDate <= relockDate) {
    const x = (currentDate - today) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
    const veCRV = 100 - 100*x / (4 * 365);
    data.push({ x: currentDate.toISOString().split('T')[0], y: veCRV});
    currentDate.setDate(currentDate.getDate() + 7);
}
currentDate.setDate(currentDate.getDate() - 7);
while (currentDate <= endDate) {
    const x = (currentDate - relockDate) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
    const veCRV = Math.min(100 - 100*x / (4 * 365), 100);
    data.push({ x: currentDate.toISOString().split('T')[0], y: veCRV});
    currentDate.setDate(currentDate.getDate() + 7);
}


// Create the chart
const ctx = document.getElementById('extendLockChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'veCRV Percentage',
            data: data,
            borderColor: 'blue',
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 10,
            pointHitRadius: 10
        }]
    },
    options: {
        plugins: {
            annotation: {
                common: {
                    drawTime: 'beforeDatasetsDraw'
                },
                annotations: [{
                    type: 'line',
                    scaleID: 'x',
                    value: relockDate,
                    borderColor: 'red',
                    borderWidth: 2,
                    borderDash: [3,3],
                    label: {
                        backgroundColor: 'red',
                        borderRadius: 0,
                        color: 'white',
                        content: (ctx) => ['Extend lock for 4 years'],
                        display: true,
                        position: 'end'
                    }
                }]
            },
            title: {
                display: true,
                text: 'veCRV decay for 100 CRV locked for 4 years with lock extended after 3 years for 4 more years'
            },
            legend: {
                display: false
            },
            tooltip: {
                displayColors: false,
                callbacks: {
                    title: (context) => {
                        const date = new Date(context[0].parsed.x);
                        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
                    },
                    label: (context) => {
                        return `100 CRV = ${context.parsed.y.toFixed(1)} veCRV`;
                    }
                }
            }
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month'
                },
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'veCRV'
                }
            }
        }
    }
});

const addLockDate = new Date(today);
endDate.setFullYear(today.getFullYear() + 4);
addLockDate.setFullYear(today.getFullYear() + 2);

// Generate data points every 7 days
data = [];
currentDate = new Date(today);

while (currentDate <= addLockDate) {
    const x = (currentDate - today) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
    const veCRV = 100 - 100*x / (4 * 365);
    data.push({ x: currentDate.toISOString().split('T')[0], y: veCRV});
    currentDate.setDate(currentDate.getDate() + 7);
}
currentDate.setDate(currentDate.getDate() - 7);
while (currentDate <= endDate) {
    const x = (currentDate - addLockDate) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
    const veCRV = Math.min(150 - 150*x / (2 * 365), 150);
    data.push({ x: currentDate.toISOString().split('T')[0], y: veCRV});
    currentDate.setDate(currentDate.getDate() + 7);
}


// Create the chart
const addLockCtx = document.getElementById('addLockChart').getContext('2d');
new Chart(addLockCtx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'veCRV Percentage',
            data: data,
            borderColor: 'blue',
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 10,
            pointHitRadius: 10
        }]
    },
    options: {
        plugins: {
            annotation: {
                common: {
                    drawTime: 'beforeDatasetsDraw'
                },
                annotations: [{
                    type: 'line',
                    scaleID: 'x',
                    value: addLockDate,
                    borderColor: 'green',
                    borderWidth: 2,
                    borderDash: [3,3],
                    label: {
                        backgroundColor: 'green',
                        borderRadius: 0,
                        color: 'white',
                        content: (addLockCtx) => ['Add 200 CRV to lock'],
                        display: true,
                        position: 'end'
                    }
                }]
            },
            title: {
                display: true,
                text: 'veCRV decay for 100 CRV locked for 4 years with 200 CRV added to lock after 2 years'
            },
            legend: {
                display: false
            },
            tooltip: {
                displayColors: false,
                callbacks: {
                    title: (context) => {
                        const date = new Date(context[0].parsed.x);
                        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
                    },
                    label: (context) => {
                        return `100 CRV = ${context.parsed.y.toFixed(1)} veCRV`;
                    }
                }
            }
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month'
                },
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'veCRV'
                }
            }
        }
    }
});
