<h1>CRV Overview</h1>

The CRV token is the token for Curve DAO which governs the whole Curve Finance ecosystem.  CRV was launched on August 13, 2020.

## **Supply**

The total supply of 3.03 billion is distributed as such:

* 62% to community liquidity providers
* 30% to shareholders (team and investors) with 2-4 years vesting
* 5% to the community reserve
* 3% to employees with 2 years vesting

<div class="centered" style="transform: scale(1.1);">
  <canvas id="crvAllocationChart"></canvas>
</div>
<br>

The initial supply of around 1.3b (~43%) was distributed as such:

* 5% to pre-CRV liquidity providers with 1 year vesting
* 30% to shareholders (team and investors) with 2-4 years vesting
* 3% to employees with 2 years vesting
* 5% to the community reserve

The circulating supply was 0 at launch and the initial release rate was around 2m CRV per day.

CRV inflation (community emissions for providing liquidity) started at 274 million tokens a year in 2020, and each year it decreases by roughly 16%.

See the [Supply & Distribution page](./supply-distribution.md) for more detailed information.

## **Utility**

There are 4 main use-cases for CRV:

1. **Incentivizing liquidity providers** to provide liquidity to pools and lending markets through CRV rewards.  This is how CRV tokens are distributed to the community.
2. Allowing liquidity providers to **boost their CRV rewards** up to 2.5x by holding veCRV.
3. Allowing users to participate and **vote in governance proposals** including directing CRV emissions (gauge weight votes) through holding veCRV.
4. **Collecting a portion of the fees** from swaps and loans that occur on Curve through holding veCRV.

!!!info
    veCRV stands for **vote-escrowed CRV**, representing CRV tokens locked for voting in the Curve DAO.  Vote-locked CRV and vote-escrowed CRV both mean veCRV, these terms are used interchangeably throughout the ecosystem.

    For information about how to lock see the [**locking guide**](./locking-your-crv.md), or for more information about veCRV, see the [**veCRV page**](./vecrv.md).

---

# **The CRV Matrix**

The table below can help you understand the value of CRV and veCRV in different situations

<style type="text/css">
.tg {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
.tg thead {
  display: contents;
}
.tg tbody {
  display: contents;
}
.tg tr {
  display: contents;
}
.tg th, .tg td {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
  padding: 10px;
  word-break: normal;
  text-align: center;
  vertical-align: bottom;
}
.tg .tg-hs62 {
  background-color: #9aff99;
  border-color: #656565;
}
.tg .tg-3lxi {
  border-color: #656565;
  font-size: 12px;
  font-weight: bold;
  vertical-align: bottom;
}
.tg .tg-kk90 {
  background-color: #9aff99;
  border-color: #656565;
  font-size: 12px;
}
.tg .tg-hkgo {
  border-color: #656565;
  font-weight: bold;
}
.tg .tg-jlsk {
  background-color: #ffccc9;
  border-color: #656565;
}
.tg .tg-gtpm {
  background-color: #ffccc9;
  border-color: #656565;
  font-size: 12px;
}
</style>
<table class="tg"><thead>
  <tr>
    <th class="tg-hkgo"></th>
    <th class="tg-3lxi">Liquidity in Pool &amp; no veCRV</th>
    <th class="tg-3lxi">Liquidity in Pool &amp; veCRV</th>
    <th class="tg-3lxi">Liquidity in Pool &amp; Staked in Gauge &amp; no veCRV</th>
    <th class="tg-3lxi">Liquidity in Pool &amp; Staked in Gauge &amp; veCRV</th>
    <th class="tg-3lxi">No Liquidity &amp; no veCRV</th>
    <th class="tg-3lxi">No Liquidity &amp; veCRV</th>
  </tr></thead>
<tbody>
  <tr>
    <td class="tg-xmch">Earns lending &amp; trading fees</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-gtpm"> No</td>
  </tr>
  <tr>
    <td class="tg-xmch">Earns CRV Emissions</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-gtpm"> No</td>
  </tr>
  <tr>
    <td class="tg-xmch">Earns boosted CRV Emissions</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-gtpm"> No</td>
  </tr>
  <tr>
    <td class="tg-xmch">Can vote on DAO Proposals</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-kk90"> Yes</td>
  </tr>
  <tr>
    <td class="tg-xmch">Can vote on Gauge Weight</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-kk90"> Yes</td>
  </tr>
  <tr>
    <td class="tg-xmch">Earns Admin Fees</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-kk90"> Yes</td>
  </tr>
</tbody></table>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
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
</script>