<h1>CRV Supply and Distribution</h1>

There is a **fixed total supply of 3,030,303,031 CRV**.  No CRV tokens can ever be minted after that.  The total supply of CRV tokens allocated to different groups is shown below in the "CRV Total Allocation" chart.  **Not all CRV are currently minted or circulating**.  CRV tokens are slowly minted to the community each week and will continue to be released for over 200 years.  The amount of tokens minted each week is defined in the [community emissions section](#community-emissions-crv-inflation).  

Have a look over this page to learn about how CRV has been allocated and how much is distributed each week.  The [Supply Calculator](#supply-calculator) is a great tool see the CRV supply and statistics on any date.

## **Total Supply Allocation**

The below chart shows the total allocation of CRV to different groups within the Curve ecosystem.

<div class="centered" style="transform: scale(1.1);">
  <canvas id="crvAllocationChart"></canvas>
</div>
<br>
<div class="centered" markdown="block">
| Group                                     | Allocated CRV | Percentage |
|-------------------------------------------|---------------|------------|
| Community (emissions)                     | 1,727,272,729 | 57%        |
| Early Users (pre-CRV liquidity providers) | 151,515,152   | 5%         |
| Core Team                                 | 800,961,153   | 26.43%     |
| Investors                                 | 108,129,756   | 3.57%      |
| Employees                                 | 90,909,091    | 3%         |
| Community Reserve                         | 151,515,152   | 5%         |
| **Total**                             | **3,030,303,031** |  **100%**  |
</div>

The above allocation shows that the **community will own 67% of all CRV** when the total supply is distributed, but note that **CRV tokens will continue to be distributed until 2376**, but meaningful distributions will stop in around 50 years, see [notable emissions years](#notable-emission-years) for how the yearly distribution will change over time.

---

## **Token Launch**

CRV officially launched on the **13th of August 2020**.  At the time of launch there were no unlocked tokens.  **All** tokens in the launch were linearly vested for 1-4 years (gradually unlocking over a period of 1-4 years).  The initial supply is quoted as 1,303,030,303 because these tokens were pre-mined and sent into the vesting contracts, which gradually unlocked them.  Below shows the allocation to different groups of the initial distribution.

<div class="centered" style="transform: scale(1.1);">
  <canvas id="crvLaunchChart"></canvas>
</div>
<br>
<div class="centered" markdown="block">
| Group                                     | Allocated CRV | Vesting Years | Transactions                                                                                                                                                                                                                                                                                                  |
|-------------------------------------------|---------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Early Users (pre-CRV liquidity providers) | 151,515,152   | 1[^1]         | [1]( https://etherscan.io/tx/0x1d36fa3e154f409e48c59dc5085e5d3cf5993f48d2ed525b49f7d1aa1bf3bca5 )                                                                                                                                                                                                             |
| Core Team                                 | 800,961,153   | 4             | [1]( https://etherscan.io/tx/0xb7f7de7dc668b584bb22ffa164b959729db96385e500f926f03936c453a3a45e )                                                                                                                                                                                                             |
| Investors                                 | 108,129,756   | 2             | [ 1 ]( https://etherscan.io/tx/0x5f762bc8e2929b76cf22936595b2e2a58cbaa9f31ec896bfaf63f798c4c65d38 ), [ 2 ]( https://etherscan.io/tx/0xcaf8fc449a2c28e13877f6e0dc3e12cb2ba585a86f771d92ae8959cc3303c5d4 ), [ 3 ]( https://etherscan.io/tx/0x2bada5103c3c1c64879125b8832961bc30a6e1524861272347e9f32a9593a084 ) |
| Employees                                 | 90,909,091    | 2             | [ 1 ]( https://etherscan.io/tx/0xe99a98d6aa3ee2413c58a28c9505be123e02399336364ab47e10bf13102816f1 ), [ 2 ]( https://etherscan.io/tx/0xb84eb0488e9696e063ce829cfad38aeaced814c54d897078fdc7267c567b0f8e )                                                                                                      |
| Community Reserve                         | 151,515,152   | N/A[^2]       | [1]( https://etherscan.io/tx/0x3f9aa0ff15fbd00cce60e36f32f25d6f85a43a19d983100d98007a84609f861a )                                                                                                                                                                                                             |
| **Total**                             | **1,303,030,303** |    |  [1](https://etherscan.io/tx/0x5dc4a688b63cea09bf4d73a695175b77572792a2e2b3656297809ad3596d4bfe)  |
</div>

[^1]: This was vested through the public vesting contract

[^2]: These tokens had no vesting themselves, but the contract they are allocated to creates other vesting contracts. When tokens are allocated from this pool they create a child vesting contract with a minimum 1 year vesting period.

The circulating supply was 0 at launch. Each day of the first year approx. 750k tokens were emitted to the community for providing liquidity and 1.65million tokens were vested (unlocked).  Use the [supply calculator below](#supply-calculator) to see how quickly tokens became liquid and circulating.

!!!tip
    6 year CRV release schedule is available here: [https://dao.curve.fi/releaseschedule](https://dao.curve.fi/releaseschedule), or the full release schedule is available as a google spreadsheet [here](https://docs.google.com/spreadsheets/d/1kFFdaLCX8ISM7yzvfUmuz151QiRzrFfaljCzEiO6sus/edit?usp=sharing).

---

## **Community Emissions (CRV Inflation)**

Community emissions (regularly called CRV Inflation) are minted and allocated to gauges based on the weekly weight gauge vote.  Gauges have a very flexible design and can direct emissions to liquidity pools and suppliers of a lending market, or even to funding for the Vyper programming language.

Community emissions reduce each year.  They are modelled off the Bitcoin Halving which halves the allocation every 4 years, in Curve however, we reduce rewards by $2^{\frac{1}{4}}$ every 365 days instead.  This works out to be approx. 16% each year and 50% every 4 years.  Community emissions were initially set at 274,815,283 CRV for the first year.  This means the formula for how much CRV is emitted to the community in any year is:

$$\text{Yearly Community Emissions} = \frac{274,815,283}{2^{\text{year}/4}}$$

Where `year` is the number of years after 13th August 2020, e.g., year 1 emissions are for the period 13th August 2021 until 13th August 2022.  The emissions for year 10 are for the period of 11th August 2030 - 11th August 2031 (2 leap years with 366 days, yet Curve assumes all years have 365 days), this would come to 48,580,938 CRV emitted for that year.

In the smart contracts the yearly community emissions is not defined, it's actually defined as a rate of CRV emitted per second, we can convert between the yearly and per second value using the following formula:

$$\text{Emission Rate} = \frac{\text{Yearly Community Emissions}}{365 \times 84600}$$

We divide by $365 \times 84600$ because there is 365 days in a year and 86400 seconds in a day.

The emission rate has 18 decimal places, this means that **emissions continue for 245 years**.  The emission rate will be 0.000000000000000001 CRV/sec in year 2265.  **Emissions are hardcoded and cannot change**.  See the [notable emission years](#notable-emission-years) below, or have a play with the [supply calculator](#supply-calculator) to see how much CRV will be distributed and to who in different years.

See [this section](./faq.md#how-does-the-yearly-emissions-reduction-work) of the FAQ for how the yearly reduction works.  See [this section](./faq.md#how-is-crv-minted) for how CRV is minted and added to the supply.

### **CRV Emissions for the next 10 years**

See below for a chart of how the CRV will be distributed each year for the next 10 years.  This year (2024), is the last year of the Core Team's CRV allocation vesting.  After August 12th, 2024 all CRV added to the circulating supply will be distributed to the community through gauges, and CRV inflation will fall dramatically from 20.37% to 6.34% for the year.

*Note: dashed lines are percentage values and relate to the percentage axis, other lines relate to the CRV amount axis, click on datasets to turn them on/off.*

<canvas id="crv10yearChart"></canvas>

### **Notable Emission Years**

As CRV will continue to be distributed for 245 years, interesting years of CRV distribution are noted below.  See the [google spreadsheet here](https://docs.google.com/spreadsheets/d/1kFFdaLCX8ISM7yzvfUmuz151QiRzrFfaljCzEiO6sus/edit?usp=sharing) for data for all years.

<div class="centered" markdown="block">
| Year | Date Start | Date Finish | CRV Emissions        | Note                                 |
|------|------------|-------------|----------------------|--------------------------------------|
| 5    | 2025-08-12 | 2026-08-12  | 115,545,593          | Last year emissions > 100M |
| 19   | 2039-08-09 | 2040-08-08  | 10,212,884           | Last year emissions > 10M  |
| 32   | 2052-08-05 | 2053-08-05  | 1,073,497            | Last year emissions > 1M   |
| 45   | 2065-08-02 | 2066-08-02  | 112,837              | Last year emissions > 100k |
| 58   | 2078-07-30 | 2079-07-30  | 11,860               | Last year emissions > 10k  |
| 72   | 2092-07-26 | 2093-07-26  | 1,048                | Last year emissions > 1k   |
| 85   | 2105-07-24 | 2106-07-24  | 110.1                | Last year emissions > 100  |
| 98   | 2118-07-21 | 2119-07-21  | 11.58                | Last year emissions > 10   |
| 112  | 2132-07-17 | 2133-07-17  | 1.023                | Last year emissions > 1    |
| 245  | 2264-06-15 | 2265-06-15  | 0.000000000031536000 | Last year of emissions     |
</div>

---

## **Supply Calculator**

*Accuracy Disclaimer*: ***This calculator is theoretical based on vesting schedules and smart contract formulae***. *It does not pull data from the Ethereum blockchain.  It may show slightly different values because users can wait any period of time before minting CRV from liquidity emissions, or unlocking claimable tokens from vesting contracts.  It is also assumed that community reserve tokens are vested for a 1 year period.  This is not completely true as they are vested for at least 1 year once allocated to a cause by the DAO.*

<div class="chart-container">
<div style="display: flex; align-items: center;">
    <div class="input">
    <label for="dateInput" style="margin-left: 10px;">Choose a date:</label>
    <input type="date" style="margin-left: 10px;" id="dateInput" onchange="renderCharts()">
    </div>
    <button class="preset-button" onclick="setDate('2020-08-13')">Launch Day</button>
    <button class="preset-button" onclick="setDate(getCurrentDate())">Today</button>
    <button class="preset-button" onclick="setDate('2040-08-13')">20 Years</button>
</div>
<div id="errorMessage" style="color: red; margin-left: 10px;"></div>
<div class="chart-wrapper-container">
    <div class="chart-wrapper" style="flex: 1;">
        <div style="display: flex;">
        <span style="text-align: center; margin-top: 5px; margin-right: 10px; flex: 2; font-weight: bold;">Total CRV Circulating</span>
        </div>
      <div class="centered" style="width=65%;">
        <canvas id="totalChart" class="emission-chart"></canvas>
      </div>
      <div id="totalAmounts"></div>
    </div>
    <div class="chart-wrapper" style="flex: 1;">
      <div style="display: flex;">
      <span style="text-align: center; margin-top: 5px; margin-right: 10px; flex: 2; font-weight: bold;">Daily CRV Added to Circulating</span>
      </div>
      <div class="centered" style="width=65%;">
        <canvas id="dailyChart" class="emission-chart"></canvas>
      </div>
      <div id="dailyAmounts"></div>
    </div>
  </div>
  <div class="chart-wrapper">
    <div id="totalEmissions"></div>
  </div>
</div>

Definition of terms in the calculator:

* `Vesting/Vested` - Vesting tokens are locked for a time period.  Vested tokens are unlocked as the vesting time period elapsed.
* `Emissions/Emitted` - Emissions are CRV Inflation from newly minted CRV increasing the supply.  Emitted are the CRV which were added to the supply.
* `Max CRV Supply` - Unchanging value, the max CRV that can exist.
* `Total CRV Circulating` - The total supply of CRV unlocked from vesting and released from community emissions.  Including rewards that can currently be claimed/minted by users.
* `Total CRV Supply` - The amount of minted CRV which currently exists, including pre-mined CRV locked in vesting contracts.
* `Remaining CRV Emissions` - Remaining amount of CRV to be emitted to the community.
* `Remaining CRV Vesting` - Remaining CRV to be unlocked from vesting contracts.
* `Percentage of CRV Circulating` - Measure of the max CRV supply compared to the current circulating supply.  `Total CRV Circulating` divided by `Max CRV Supply`.
* `CRV Inflation Rate` - Measure of the yearly CRV emitted & vested compared to the current circulating supply.  `Yearly CRV Emitted & Vested` divided by `Total CRV Circulating`.


<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js"></script>

<script>

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
        <span style="text-align: left; flex: 2;">${(roundAmount(amounts.vestingRemaining)).toLocaleString(undefined)}</span>
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

function setDate(date) {
  document.getElementById('dateInput').value = date;
  renderCharts();
}
</script>



<script>
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
    console.log(date);

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

console.log(datasets);

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

</script>


<script>
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
</script>

<script>
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
</script>