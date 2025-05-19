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
    6 year CRV release schedule is available here: [https://dao-old.curve.finance/releaseschedule/](https://dao-old.curve.finance/releaseschedule/), or the full release schedule is available as a google spreadsheet [here](https://docs.google.com/spreadsheets/d/1kFFdaLCX8ISM7yzvfUmuz151QiRzrFfaljCzEiO6sus/edit?usp=sharing).

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
    <button class="preset-button" onclick="setDate(getNextReductionDate())">Next Reduction</button>
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
<script src="/javascripts/crv-supply-distribution.js"></script>
