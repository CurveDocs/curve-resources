<h1>Curve Lending Overview</h1>

Curve Lending allows users to borrow crvUSD against any collateral token or to borrow any token against crvUSD, while benefiting from the **soft-liquidation mechanism** provided by [LLAMMA](https://docs.curve.finance/crvUSD/amm/).  This innovative approach to overcollateralized loans enhances risk management and user experience for borrowers.  Additionally, Curve Lending allows users to **generate interest through lending (supplying) their assets** to be borrowed by others.

!!!warning "Collateral in Lending Markets *DO NOT* back crvUSD"
    The collateral used in Curve Lending markets does not back crvUSD. **All crvUSD within Curve Lending is supplied by users**.  Conversely, minting new crvUSD requires high-quality crypto collateral approved by the DAO.  The **crvUSD minting system is separate from the lending markets**. *[See here for more differences between Curve Lending and minting crvUSD](./faq.md#whats-the-difference-between-minting-crvusd-and-lending-markets)*.

!!!danger "Curve Lending Risk Disclaimer"
    Full risk disclaimer on using Curve Lending can be found [here](../risks-security/risks/lending.md)


<div class="grid cards" markdown>

-   :fontawesome-solid-money-bill-1: **Borrowers**

    ---

    Borrowers are the ones **borrowing assets**. To do so, they create a loan and put up some collateral. In exchange for borrowing, they pay a certain [Borrow Interest Rate (Borrow APY)](#borrow-rate).

    ---

    [:octicons-arrow-right-24: How to Borrow](./how-to-borrow.md)

-   :material-bank: **Lenders**

    ---

    Lenders **supply their assets so they can be loaned to borrowers**. To do so, they deposit their assets into a [Vault](https://ethereum.org/en/developers/docs/standards/tokens/erc-4626/). In exchange for supplying their assets, they are awarded a [Lending Interest Rate](#lend-rate).

    ---

    [:octicons-arrow-right-24: How to Supply (Lend)](./how-to-supply.md)

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

There are many Curve Lending markets listed on the [main UI](https://curve.finance/lend/ethereum/markets).  Each market uses a single type of collateral, and make loans in a single asset (**all markets are one-way**, and **all markets are isolated**).  Some of the markets available are pictured below (we've used llamas in suits to illustrate different markets), but there are many more available, and **new markets can be permissionlessly deployed** by anyone, at anytime (as long as the asset has a suitable [price oracle](https://docs.curve.finance/stableswap-exchange/stableswap-ng/pools/oracles/)).

![Curve lending llamas](../images/lending/llamma_markets.svg)

*Note: All markets are paired with crvUSD. crvUSD must be either the collateral or the coin being borrowed.*

---


# **Supplying (Lending)**

Earning interest for supplying assets to Curve Lending is simple.

*Let's have a look at an example where Bob lends his crvUSD for a year and how much he earns:*

![Lending Interest](../images/lending/lending_market_simple.svg#only-light)
![Lending Interest](../images/lending/lending_market_simple_dark.svg#only-dark)

So after 1 year **Bob earned 20 crvUSD** and **$20 worth of CRV**, this equates to an **APR of 40%** over that year.


---

## **Depositing and Withdrawing**

After depositing to a lending market your assets are added to the pool of **available supply**.

You can withdraw a supplied asset provided there are sufficient available (un-borrowed) assets in the market. For example in the below image Bob could have withdrawn up to 1200 crvUSD from the market, but he only withdrew 300 crvUSD.

![Withdrawing Supply](../images/lending/supply_withdrawal.svg#only-light){: .centered }
![Withdrawing Supply](../images/lending/supply_withdrawal_dark.svg#only-dark){: .centered }

If there are insufficient available assets for a full withdrawal, you can withdraw the maximum amount currently available. The high utilization rate will cause Borrow APY and Lend APYs to increase, incentivizing borrowers to repay their loans, and more lenders to supply. As available supply increases you can withdraw your remaining balance over time.

!!!warning "Bad Debt"
    [Bad debt](../crvusd/loan-concepts.md#bad-debt) is rare, but if it exists within a lending market, it **may be impossible to withdraw supplied assets**, as it locks supplied assets as "borrowed" indefinitely.  It is recommended not to supply assets to markets with large amounts of bad debt.  Use [this notebook](https://try.vyperlang.org/hub/user-redirect/lab/tree/shared/saint-rat/baddebt.ipynb) or see the code on [github here](https://github.com/saint-rat/curve-notebooks/blob/main/bad_debt.ipynb) to find which markets have bad debt.

    *At the time of writing (May, 2024) no bad debt exists on Ethereum markets. On Arbitrum, two markets have bad debt - CRV/crvUSD: 1700 crvUSD bad debt, FXN/crvUSD: 39,000 crvUSD bad debt.*

---

## **Supply Vault Share Tokens**

By Supplying assets on Curve Lending, you are given **Supply Vault Shares** ([more info here](https://docs.curve.finance/lending/contracts/vault/)).  These are tokens representing your **share of the total supply**.  The **value of these shares increases by Lend APY**.

When you withdraw your supplied assets, the Vault Shares you had previously deposited are returned to the Lending Market. At this point, you receive the current value of the Vault Shares you are returning. This is how your interest on the supplied assets accrues. **By withdrawing your assets, you effectively claim the interest that has been earned** on your initial deposit during the time it was being lent out in the market.

---

## **Rewards APR**

Rewards APR is a combination of CRV emission rewards and any other incentives provided to suppliers. **Rewards accrue altogether and can be claimed at any time.**

!!!warning "Rewards APR is *ONLY* given to Suppliers *STAKED* in the Liquidity Gauge"
    You ***MUST*** stake your Supply Vault Shares in the Lending Market's Liquidity Gauge to receive Reward APR.
    **You will not get any Rewards APR if you** ***DO NOT*** **stake**.  See [here](./how-to-supply.md#staking-assets)

*For a market to have CRV rewards the following conditions must be met:*

1. The Curve DAO must vote to add a [Liquidity Gauge](https://resources.curve.finance/reward-gauges/understanding-gauges/) to the `GaugeController` for that specific lending market
2. The liquidity gauge must receive a positive [gauge weight](../reward-gauges/gauge-weights.md) through votes from veCRV holders. This will result in CRV being emitted to the liquidity gauge.

Due to the boosting mechanism of liquidity gauges, the Reward APR will be displayed as a range based on the user's boost factor. Learn more about boosting [here](../reward-gauges/boosting-your-crv-rewards.md).


Other incentives can be added by anyone, i.e., if a project wants to incentivize their token being used as collateral they may add incentives to a Lending Market. See [here](../reward-gauges/permissionless-rewards.md) for more details and how to add them.


---

# **Borrowing**

When borrowing from Curve Lending Markets, you are taking an **overcollateralized loan** against deposited assets (e.g., borrowing crvUSD with CRV collateral). In exchange, you are **charged the Borrow APY on the borrowed assets**.


Collateral is deposited into each lending market's [LLAMMA](https://docs.curve.finance/crvUSD/amm/) system and split evenly across the chosen number of bands (N).  **Each band represents a small liquidation price range, with an upper and lower limit.  If the oracle price enters one of your bands, [soft-liquidation begins](#soft-liquidation)**.  **Your loan is safe while the oracle price is higher than any of your bands**.

*See the image below for a breakdown of how supplied assets are borrowed, and how collateral is deposited into bands.*

![loan to bands](../images/lending/loan_to_bands.svg#only-light){: .centered }
![loan to bands](../images/lending/loan_to_bands_dark.svg#only-dark){: .centered }

By **minimizing the number of bands** (N=4), you can **maximize the amount you borrow** (LTV), just like Charlie. Alice, however, prefers spreading his liquidity, so he chooses 10 bands (N=10) and does not maximize his borrowing. This explains why Alice's loan is split into bands 3-12, while Charlie's is split into bands 1-4. When you borrow, you can choose to split your collateral into **any number of bands from 4 to 50**.

There is no set rule for **whether fewer or more bands are better**. Different numbers of bands are better in different scenarios:

* **More bands** equate to having fewer losses in soft-liquidation, but this also widens your Liquidation Range, potentially extending the duration of soft-liquidation.
* **Fewer bands** will narrow your Liquidation Range, causing your collateral to be traded more aggressively, but you may remain in the Liquidation Range for a shorter time.

---

## **Soft-liquidation**

Soft-liquidation is a mechanism that gradually exchanges collateral (e.g., WETH) for the borrowed asset (e.g., crvUSD) as the collateral's value declines, avoiding the need for a single large liquidation. It also reverses this process if the collateral's value rises. The system sells collateral at a small discount, which increases with market volatility. Users undergoing soft-liquidation experience minor losses over time (in crvUSD minting markets typical losses are <0.1% per day), though this can vary based on loan and market conditions.

Soft-liquidation begins if the oracle price of your collateral falls into one of your bands. At this point, your collateral will be linearly traded for your borrowed asset as the price continues to drop through each band.

Let's examine what soft-liquidation looks like in a simplified example with a **single band** in an **ETH/crvUSD LLAMMA market**. This example illustrates that if the price declines by 20% within the band, 20% of the ETH is converted to crvUSD. When the price is below the lower bound of the band (<\$990), all the collateral is converted to crvUSD (100% crvUSD, 0% ETH). Conversely, when the price exceeds the upper bound (>\$1000), all collateral remains as ETH (100% ETH, 0% crvUSD).

![single llamma band](../images/lending/single_llamma_band.svg#only-light){: .centered style="height:250px" }
![single llamma band](../images/lending/single_llamma_band_dark.svg#only-dark){: .centered style="height:250px" }

The below image represents **multiple bands** through soft-liquidation.  Note the higher bands than the current price are fully converted to crvUSD and the lower bands are still ETH.

![llamma bands](../images/lending/llamma_bands.svg#only-light){: .centered style="height:250px" }
![llamma bands](../images/lending/llamma_bands_dark.svg#only-dark){: .centered style="height:250px" }

The value of traded assets remains as loan collateral throughout soft-liquidation. For example, if ETH is swapped for crvUSD, the value of that crvUSD is added to the collateral backing the loan. Additionally, **LLAMMA works both ways; if prices increase through your bands, any swapped collateral will be traded back for your initial collateral** (e.g., ETH swapped to crvUSD as the price decreased will be swapped back to ETH as the price increases).

Rebalancing collateral through soft-liquidation is incentivized for arbitrage traders by offering a small discount (when required) to buy or sell through LLAMMA. Trading back and forth your collateral is the reason why your **health factor erodes over time during soft-liquidation**. Higher volatility generally leads to greater losses. However, your losses are partly recouped by the earned trading fees for providing liquidity.

!!!warning "Collateral *CANNOT* be deposited while in soft-liquidation"
    Collateral **cannot** be deposited during soft-liquidation. **Only debt repayment is allowed**.

---

## **Health & Hard-Liquidation**

**Loan Health** is a measure of debt to collateral value.  As long as health is positive, the position remains open. The health of a loan decreases due to losses in soft-liquidation and when debt increases due to interest paid.

Soft-liquidation **losses do not only occur when prices go down but also when the collateral price rises again**. This implies that the health of a loan can decrease even though the collateral value of the position increases.

A loan becomes eligible for **hard-liquidation when its health drops below 0**. In this process, an external party can repay the user's debt and claim their collateral in return, closing the loan. **Going below the soft-liquidation range does not trigger a hard-liquidation**. The key trigger is the health falling below 0.

**It's possible for a loan to be below the soft-liquidation range, and have all its collateral converted to the borrowed asset (e.g., all CRV to crvUSD) while still maintaining a positive health**.  In this scenario, further price drops don't impact the position, as the converted collateral covers both the debt and safety buffer.

In contrast, most other lending platforms will hard-liquidate your collateral and terminate your loan if your loan falls below a minimum collateral ratio (LTV), even if only by a small amount for a brief time. This can be highly stressful for borrowers and lead to significant losses. Curve Lending offers a safer space and more peace of mind for borrowers.

---

## **Leverage**

All new lending markets allow leverage.  This allows users to multiply their gains (and losses) by the amount of leverage they desire.  In a WETH/crvUSD market for example, this would allow the user to borrow up to 9x the amount of collateral they deposit.  The caveat is that the user doesn't receive the borrowed crvUSD into their wallet, it is swapped for more WETH through 1inch and deposited into the lending market.  To see how leverage works please see the dedicated [leverage page](leverage.md).

---


## **Utilization, Lend APY and Borrow APY**

The **Lend APY** and **Borrow APY** are affected by the **Utilization** of the market.  It is the ratio of assets supplied, to assets borrowed. In the image below the Utilization is 80% as 80% of the Supply is borrowed. **Higher Utilization means a higher Lending APY and Borrowing APY**.

![Supply Utilization](../images/lending/supply.svg#only-light){: .centered }
![Supply Utilization](../images/lending/supply_dark.svg#only-dark){: .centered }

### Utilization Rate

*The formula for Utilization is the following:*

$$\text{Utilization} = \frac{\text{Total assets borrowed}}{\text{Total assets supplied}}$$


### Borrow Rate

The borrow APR is the rate a **borrower pays for borrowing out assets**.  In the **Curve UI this is quoted as an APY not an APR**, see the info box below for the conversion formula and difference.

Borrowing rates are calculated differently based on whether the collateral asset has a crvUSD minting market.

#### Borrow Rate for assets with a crvUSD Minting Market

Assets with minting markets currently are: ETH (=WETH in lending markets), WBTC, wstETH, sfrxETH, tBTC.  For these assets, the borrowing rates on Curve Lend depend on two factors: the borrow rate for minting crvUSD and the utilization of the lending pool.  The technical documentation shows the [borrowing rate formula here](https://docs.curve.finance/lending/contracts/secondary-mp/#borrow-rate).  To decide whether to mint crvUSD or borrow from the lending market, consider the following:

* Lending market **utilization below 85%** -> Borrowing rate will be lower on the [Lending Market](https://curve.finance/lend/ethereum)
* Lending market **utilization above 85%** -> Borrowing rate will be lower on the [crvUSD Minting Market](https://curve.finance/crvusd/#/ethereum)
* Lending market **utilization equals 85%** -> Borrowing rates will be equal

#### Borrow Rate for all other Assets

The formula for the borrow rate if the collateral asset does not have a minting market (e.g., CRV, pufETH, sUSDe, etc) is as follows:

$$\text{rate} = \text{rate}_{\text{min}} \cdot \left(\frac{\text{rate}_{\text{max}}}{\text{rate}_{\text{min}}}\right)^{\text{utilization}}$$

$$\text{borrowAPR} = \text{rate} \cdot (365 \cdot 86400)$$

$\text{rate}_{\text{min}}$ and $\text{rate}_{\text{max}}$ values are obtained from the monetary policy contract of each Lending Market and are given in interest per second.  We multiply the rate by $365 \cdot 86400$ to get the APR because this is the amount of seconds in a year ($365$ days $\times 86400$ seconds in a day).

### Lend Rate

Lend APR is the **yield a lender receives in exchange for lending out their assets**.  The lend APR is calculated the same way for all lending markets.

*Formula to calculate the Lend APR:*

$$\text{lendAPR} = \text{borrowAPR} \cdot \text{utilization}$$

!!!info "Difference between `APR` and `APY`"
    - **`APR`** represents the Annual Percentage Rate (**interest without compounding**)
    - **`APY`** is the Annual Percentage Yield (**interest with compounding**)

    *To convert the APR into APY, we need to annualize it and compound it every second (86400 seconds in a day):*

    $$\text{APY} = \left(1 + \frac{APR}{86400 \cdot 365}\right)^{86400 \cdot 365} - 1$$

*For the current [CRV Lending Market](https://curve.finance/lend/ethereum/markets/one-way-market-3/create) the Borrow APR and Lend APR for different Utilization rates is the following:*

<canvas id="graphContainer"></canvas>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        updateGraph(); // Draw the initial graph with hardcoded values
    });

    let myChart = null;

function updateGraph() {
    const rateMin = 0.01;
    const rateMax = 0.8;

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

    const ctx = document.getElementById('graphContainer').getContext('2d');

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
            }
        }
    };


        if (myChart) {
            myChart.destroy();
        }
        myChart = new Chart(ctx, config);
    }
</script>

---

## **More Information**

For information relating to opening loans see the [loan creation page](./how-to-borrow.md)

For information relating to how to supply assets see [supplying assets page](./how-to-supply.md)

For Frequently Asked Questions about Curve Lending see the [FAQ here](./faq.md)

For more technical information especially relating to the underlying smart contracts please see the [Lending section within the Curve Docs](https://docs.curve.finance/lending/overview/)
