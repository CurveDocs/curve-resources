// The code in this file is used to generate the chart in the crv-token/overview.md page


var ctx = document.getElementById('crvAllocationChart').getContext('2d');
var data = [1727272729+151515152, 800961153, 108129756, 90909091, 151515152];
var totalSum = data.reduce((a, b) => a + b, 0);
var percentages = data.map(value => ((value / totalSum) * 100).toFixed(2));

var crvAllocationChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Community', 'Core Team', 'Investors', 'Employees', 'Reserve'],
        datasets: [{
            data: data,
            backgroundColor: ['#FF6384', '#FFCE56', '#8E5EA2', '#3cba9f', '#e8c3b9'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        devicePixelRatio: 2.5,
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
                text: 'CRV Total Supply'
            }
        }
    }
});