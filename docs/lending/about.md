<h1>Curve Lending Overview</h1>

Curve Lending allows users to borrow crvUSD against any collateral token or to borrow any token against crvUSD, while benefiting from the **soft-liquidation mechanism** provided by [LLAMMA](https://docs.curve.fi/crvUSD/amm/).  This innovative approach to overcollateralized loans enhances risk management and user experience for borrowers.  Additionally, Curve Lending allows users to **generate interest through lending (supplying) their assets** to be borrowed by others.

!!!warning "Collateral in Lending Markets *DO NOT* back crvUSD"
    The collateral used in Curve Lending markets does not back crvUSD. **All crvUSD within Curve Lending is supplied by users**.  Conversely, minting new crvUSD requires high-quality crypto collateral approved by the DAO.  The **crvUSD minting system is separate from the lending markets**. *[See here for more differences between Curve Lending and minting crvUSD](./faq.md#whats-the-difference-between-minting-crvusd-and-lending-markets)*.

!!!danger "Curve Lending Risk Disclaimer"
    Full risk disclaimer on using Curve Lending can be found [here](../resources/risks/lending.md)



*The above image shows lending markets involve a synergy between two participants:*

<div class="grid cards" markdown>

-   :fontawesome-solid-money-bill-1: **Borrowers**

    ---

    Borrowers are the ones **borrowing assets**. To do so, they create a loan and put up some collateral. In exchange for borrowing, they pay a certain [Borrow Interest Rate (Borrow APY)](#borrow-apy).

    ---

    [:octicons-arrow-right-24: How to Borrow](./loan-creation.md)

-   :material-bank: **Lenders**

    ---

    Lenders **supply their assets so they can be loaned to borrowers**. To do so, they deposit their assets into a [Vault](https://ethereum.org/en/developers/docs/standards/tokens/erc-4626/). In exchange for supplying their assets, they are awarded a [Lending Interest Rate](#lend-apy).

    ---

    [:octicons-arrow-right-24: How to Supply (Lend)](./supplying-assets.md)

</div>

---

# **Overview**


*Let's take a look at a single market to see the basics of how it works:*

![Simple market illustration](../images/lending/single_market.svg#only-light)
![Simple market illustration](../images/lending/single_market_dark.svg#only-dark)

*Let's breakdown the different entities and their roles in this market:*

| Entity | | Role |
|:--:|:--|:--|
| ![Business Llama](../images/lending/llama_head.svg){: style="height:50px"} | **Business Llama** | Business Llama represents the lending market and smart contracts in the system.  This llama uses CRV as collateral, and lends out crvUSD.  Business Llama **charges interest on crvUSD users borrow (Borrow APY)**, and **pays interest to lenders who supply crvUSD (Lend APY)**. |
| ![bob](../images/lending/bob_head.svg){: style="height:50px"} | **Bob** | Bob always thinks the market will crash, so he **supplies his crvUSD** and Business Llama **lends it out and pays Bob interest (Lend APY)**. |
| ![alice](../images/lending/alice_head.svg){: style="height:50px"} | **Alice** | Alice wants to go trade meme coins but doesn't want to sell her CRV, so she **deposits CRV and uses it as collateral to borrow crvUSD**.  She feels safe knowing she's better protected here with LLAMMA and soft-liquidations than other lending markets.  She is **charged the Borrow APY on her debt** while the loan is open.  |
| ![charlie](../images/lending/charlie_head.svg){: style="height:50px"} ![daisy](../images/lending/daisy_head.svg){: style="height:50px"} | **Charlie** & **Daisy** | Charlie and Daisy are just talking to the wrong Business Llama (lending market).  All Curve Lending Markets are one-way, and isolated. They need to go and find the Business Llama that lends out CRV with crvUSD collateral. (Business llama with the red background [here](#markets)) |


---


# **Markets**

There are many Curve Lending markets listed on the [main UI](https://lend.curve.fi/#/ethereum/markets).  Each market uses a single type of collateral, and make loans in a single asset (**all markets are one-way**, and **all markets are isolated**).  Some of the markets available are pictured below (we've used llamas in suits to illustrate different markets), but there are many more available, and **new markets can be permissionlessly deployed** by anyone, at anytime (as long as the asset has the correct [price oracle](https://docs.curve.fi/stableswap-exchange/stableswap-ng/pools/oracles/)).  *Note: all markets are paired with crvUSD (i.e., crvUSD must be either the collateral, or the coin to be borrowed)*

![Curve lending llamas](../images/lending/llamma_markets.svg)



---


# **Supplying (Lending)**

Earning interest for supplying assets to Curve Lending is simple, with low risk.  Let's have a look at an example where Bob lends his crvUSD for a year and how much he earns:

![Lending Interest](../images/lending/lending_market_simple.svg#only-light)
![Lending Interest](../images/lending/lending_market_simple_dark.svg#only-dark)

So after 1 year **Bob earned 20 crvUSD** and **$20 worth of CRV**, this equates to an **APR of 40%** over that year.

*Note: It's shown here that Bob claims his rewards in 1 transaction and then uses another transaction to unstake, but Bob could have also claimed and unstaked in a single transaction*.

---

## **Depositing and Withdrawing**

After depositing to a lending market your assets are added to the pool of **available supply**.

You can withdraw a supplied asset provided there are sufficient available (un-borrowed) assets in the market.  For example in the below image Bob could have withdrawn up to 1200 crvUSD from the market, but he only withdrew 300 crvUSD.  

![Withdrawing Supply](../images/lending/supply_withdrawal.svg#only-light){: .centered }
![Withdrawing Supply](../images/lending/supply_withdrawal_dark.svg#only-dark){: .centered }

If there are insufficient available assets for a full withdrawal, you can withdraw the maximum amount currently available. The high Utilization rate will cause Borrow APY and Lend APYs to increase, incentivizing borrowers to repay their loans, and more lenders to supply. As available supply increases you can withdraw your remaining balance over time.

---

## **Supply Vault Share Tokens**

By Supplying assets on Curve Lending, you are given **Supply Vault Shares** ([more info here](https://docs.curve.fi/lending/contracts/vault/)).  These are tokens representing your share of the **Total Supply**.  The **value of these shares increases by Lend APY**.

When you withdraw your supplied assets, the Vault Shares you had previously deposited are returned to the Lending Market. At this point, you receive the current value of the Vault Shares you are returning. This is how your interest on the supplied assets accrues. **By withdrawing your assets, you effectively claim the interest that has been earned** on your initial deposit during the time it was being lent out in the market.

---

## **Rewards APR**

**Rewards APR** is a combination of CRV rewards and any other incentives provided to suppliers.

!!!warning "Rewards APR is *ONLY* given to Suppliers *STAKED* in the Rewards Gauge"
    You ***MUST*** stake your Supply Vault Shares in the Lending Market's Rewards Gauge to receive Reward APR.  **You will not get any Rewards APR if you** ***DO NOT*** **stake**.  See [here](./supplying-assets.md#staking-assets)

For a market to have CRV rewards the following conditions must be met:

1. The Curve DAO must vote to add a [Rewards Gauge](https://resources.curve.fi/reward-gauges/understanding-gauges/) to the GaugeController for that specific lending market.
2. veCRV holders must vote to send CRV rewards to that specific Lending Market (called getting [Gauge Weight](../reward-gauges/gauge-weights.md)).  

If the pool has CRV rewards the number will be a range as CRV rewards are variable based on the boost a user receives from their veCRV holdings, [more info here](https://resources.curve.fi/reward-gauges/boosting-your-crv-rewards/).

Other incentives can be added by anyone, i.e., if a project wants to incentivize their token being used as collateral they may add incentives to a Lending Market. See [here](../reward-gauges/permissionless-rewards.md) for more details and how to add them.

Reward APR accrues altogether and can be claimed at any time.

---

# **Borrowing**

When borrowing on Curve Lending, you are taking an **overcollateralized loan** against deposited assets (e.g., borrowing crvUSD with CRV collateral).  You are **charged the Borrow APY on the borrowed assets** (i.e., Borrowing APY increases crvUSD debt).

Collateral is deposited into each lending market's [LLAMMA](https://docs.curve.fi/crvUSD/amm/) system and split evenly across the chosen number of bands (N).  **Each band represents a small liquidation price range, with an upper and lower limit.  If the oracle price enters one of your bands, [soft-liquidation begins](#soft-liquidation)**.  **Your loan is safe while the oracle price is higher than any of your bands**.  See the image below for a breakdown of how supplied assets are borrowed, and how collateral is deposited into bands.

![loan to bands](../images/lending/loan_to_bands.svg#only-light){: .centered }
![loan to bands](../images/lending/loan_to_bands_dark.svg#only-dark){: .centered }

By **minimizing the number of bands** (N=4) you can **maximize the amount you borrow** (LTV) just like Alice.  Charlie likes the idea of spreading his liquidity out so he chooses 10 bands (N=10) and doesn't max borrow.  This is why Charlie's loan is split into bands 3-12 and Alice's is split into bands 1-4.  When you borrow you can choose to split your collateral into any number of bands from 4 to 50.

There is no set rule for **whether less or more bands are better**.  Different numbers of bands are better in different scenarios:

* **More bands** will equate to losing collateral slower in soft-liquidation, but it also widens your Liquidation Range so you could be in soft-liquidation for a longer period of time.  
* **Less bands** will reduce your Liquidation Range so your collateral will be traded aggressively, but you may stay in the Liquidation Range for a shorter time.


---


## **Soft-liquidation**

**Soft-liquidation** begins if the oracle price of your collateral drops into one of your bands. Here, the platform will begin trading your collateral for your borrowed asset linearly as the price declines through each band.

Let's have a look what soft liquidation looks like in a simplified example with a **single band** for an **ETH/crvUSD LLAMMA market**.  This example shows that if the price declines 20% through the band, 20% of the ETH is converted to crvUSD.  When the price is less than the lower bound of the band (<\$990), all the collateral is converted to crvUSD (100% crvUSD, 0% ETH).  When the price is above the higher bound (>\$1000) all collateral is ETH (100% ETH, 0% crvUSD).

![single llamma band](../images/lending/single_llamma_band.svg#only-light){: .centered style="height:250px" }
![single llamma band](../images/lending/single_llamma_band_dark.svg#only-dark){: .centered style="height:250px" }

The below image represents **multiple bands** through soft-liquidation.  Note the higher bands than the current price are fully converted to crvUSD and the lower bands are still ETH.

![llamma bands](../images/lending/llamma_bands.svg#only-light){: .centered style="height:250px" }
![llamma bands](../images/lending/llamma_bands_dark.svg#only-dark){: .centered style="height:250px" }

A unique feature of LLAMMA can be seen here in that it automatically converts your collateral from the asset losing value to the other asset in the pool.

The value of traded assets remain loan collateral throughout soft-liquidation (e.g., if ETH is swapped for crvUSD the value of that crvUSD is added to the collateral backing the loan).  **Also, LLAMMA works both ways, if prices increase through your bands, any swapped collateral will be traded back for your initial collateral** (e.g., ETH swapped to crvUSD as price decreased is swapped back to ETH as price increases).

Re-balancing collateral through soft-liquidation is incentivised to arbitrage traders by providing a small discount (when required) to buy or sell through LLAMMA.  This discount increases or decreases based on how fast LLAMMA needs to swap collateral.  Providing this discount means you will lose small amounts of collateral each time LLAMMA trades in one of your bands.  This is why your **health factor erodes over time in soft-liquidation**.  Higher volatility equates to larger discounts and more losses.  You do however, recoup some of these losses by earning trading fees for providing liquidity, similar to other AMMs.

!!!warning "Collateral *CAN NOT* be deposited while in soft liquidation"
    Collateral **cannot** be deposited while in soft-liquidation. **Debt can only be repaid**.



---


## **Health Factor & Hard-Liquidation**

The **Loan Health Factor** is a measure of debt value to collateral value with a small buffer added for safety.  As long as the health factor is positive, the position remains open.  The health of a loan decreases when the loan is in soft-liquidation mode and when debt increases due to interest rates.

<figure markdown>
  ![](../images/health.png){ width="600" }
  <figcaption></figcaption>
</figure>

Soft-liquidation losses do not only occur when prices go down but also when the collateral price rises again, resulting in the de-liquidation of the user's loan. This implies that the health of a loan can decrease even though the collateral value of the position increases.

**It's possible to be below your bands with all collateral converted to the borrowed asset (e.g., all CRV converted to crvUSD), while maintaining a positive health factor**.  If this happens, further price declines do not affect the position (e.g., all CRV traded for crvUSD, and crvUSD collateral covers debt and safety buffer).

**Hard-liquidation only occurs if your health factor reduces to 0**.  In a hard-liquidation, someone else can pay off a user's debt and, in exchange, receive their collateral. The loan will then be closed.

In contrast, most other lending platforms will hard-liquidate your collateral and terminate your loan if your loan falls below a minimum collateral ratio (LTV), even if only by a small amount for a brief time. This can be highly stressful for borrowers and lead to significant losses. Curve Lending offers a safer space and more peace of mind for borrowers.


---


## **Utilization, Lend APY and Borrow APY**

The **Lend APY** and **Borrow APY** are based solely on the **Utilization** of the market.  It is the ratio of assets supplied, to assets loaned.  In the image below the Utilization is 80% as 80% of the Supply is borrowed.  **Higher Utilization means a higher Lending APY and Borrowing APY**.  This incentivizes borrowers to close loans, and more suppliers to lend out their assets.

![Supply Utilization](../images/lending/supply.svg#only-light){: .centered }
![Supply Utilization](../images/lending/supply_dark.svg#only-dark){: .centered }


For the current CRV Collateral Lending Market the Borrow and Lend APYs for different Utilization rates are the following:

<canvas id="graphContainer"></canvas>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        updateGraph(); // Draw the initial graph with hardcoded values
    });

    let myChart = null;

    function updateGraph() {
        const rateMin = 0.01; // Hardcoded minimum rate of 1%
        const rateMax = 0.80; // Hardcoded maximum rate of 80%

        let dataPoints = [];
        for (let u = 0; u <= 1; u += 0.01) {
            let rate = rateMin * Math.pow((rateMax / rateMin), u);
            dataPoints.push({x: u * 100, y: rate * 100});
        }

        const ctx = document.getElementById('graphContainer').getContext('2d');

        const data = {
            datasets: [{
                label: 'Borrow Rate vs. Utilization',
                data: dataPoints,
                borderColor: 'rgba(75, 192, 192, 0.9)',
                fill: false,
                pointRadius: 0,
                showLine: true,
                borderWidth: 2,
            }]
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
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Borrow Rate (%)'
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
                        enabled: true, // Enable tooltips
                        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Tooltip background color
                        bodyColor: '#ffffff', // Tooltip text color
                        bodyFont: {
                            size: 12, // Smaller font size
                        },
                        borderColor: 'rgba(0, 0, 0, 0.7)', // Border color
                        borderWidth: 1, // Border width
                        usePointStyle: false, // Disable point style for the items to remove the dot
                        padding: 4, // Reduce padding for a smaller tooltip
                        displayColors: false, // Do not display the color box next to the text
                        callbacks: {
                            title: function() {
                                return '';
                            },
                            label: function(context) {
                                const rate = context.parsed.y.toFixed(2);
                                const utilization = context.parsed.x.toFixed(2);
                                return [`Rate: ${rate}%`, `Utilization: ${utilization}%`];
                            }
                        }
                    },
                }
            }
        };

        if (myChart) {
            myChart.destroy();
        }
        myChart = new Chart(ctx, config);
    }
</script>

### Utilization Rate

The formula for Utilization is the following:

$$\text{Utilization} = \frac{\text{Total assets borrowed}}{\text{Total assets supplied}}$$


### Borrow Rate

The borrow APR is the rate a **borrower pays for borrowing out assets**.

*The formula for the borrow rate is as follows:*

$$\text{rate} = \text{rate}_{\text{min}} \cdot \left(\frac{\text{rate}_{\text{max}}}{\text{rate}_{\text{min}}}\right)^{\text{utilization}}$$

$$\text{borrowAPR} = \text{rate} \cdot (365 \cdot 86400)$$

$\text{rate}_{\text{min}}$ and $\text{rate}_{\text{max}}$ values are obtained from the monetary policy contract of each Lending Market and are given in interest per second.  We multiply the rate by $365 \cdot 86400$ to get the APR because this is the amount of seconds in a year ($365$ days $\times 86400$ seconds in a day).

### Lend Rate

Lend APR is the **yield a lender receives in exchange for lending out their assets**.

*Formula to calculate the Lend APR:*

$$\text{lendAPR} = \text{borrowAPR} \cdot \text{utilization}$$

!!!info "Difference between `APR` and `APY`"
    - **`APR`** represents the Annual Percentage Rate (**interest without compounding**)
    - **`APY`** is the Annual Percentage Yield (**interest with compounding**)

    *To convert the APR into APY, we need to annualize it and compound it every second (86400 seconds in a day):*

    $$\text{APY} = \left(1 + \frac{APR}{86400 \cdot 365}\right)^{86400 \cdot 365} - 1$$

---

## **More Information**

For information relating to opening loans see the [loan creation page](./loan-creation.md)

For information relating to how to supply assets see [supplying assets page](./supplying-assets.md)

For Frequently Asked Questions about Curve Lending see the [FAQ here](./faq.md)

For more technical information especially relating to the underlying smart contracts please see the [Lending section within the Curve Docs](https://docs.curve.fi/lending/overview)