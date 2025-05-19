<h1>Loan Concepts</h1>

# **Liquidation**

LLAMMA (Lending-Liquidating AMM Algorithm) is the engine behind Curve’s crvUSD liquidation mechanism. It’s a two-token AMM—similar in structure to Uniswap V3—that manages collateral and crvUSD within a system of price “bands” (also called ticks). These bands define a loan’s liquidation range and are key to how LLAMMA automatically protects positions.

A full comparison of borrowing on Curve vs. other protocols can be found [here](./overview.md#comparison-to-other-protocols).

When a loan is opened, collateral is distributed across a specified number of bands in the AMM. Together, these bands define the liquidation range for the position. Each band functions as a small liquidation zone, where gradual rebalancing occurs as prices change.

Unlike traditional systems, liquidation in LLAMMA does not immediately close a loan. Instead, it soft-liquidates and de-liquidates the collateral (explained below). This liquidation only happens when the loan is within the liquidation range. Outside this range, no rebalancing occurs and the collateral remains unchanged.

When the soft- and de-liquidation happens, losses accumulate due to different factory such as market volatility, general liquidity etc. A loan is [hard-liquidated](#hard-liquidation) (fully) once it reaches 0% health.



## **Soft- and De-Liquidation**

As the price of the collateral asset decreases and enters the liquidation range — defined by two price boundaries — the system progressively converts the volatile collateral into crvUSD. This reduces exposure to the declining asset. If the price rises again within the same range, the system reverses the process, using crvUSD to buy back the collateral and restore exposure to the volatile asset.

<!-- This styling creates the soft-liq applet-->
<div id="ethCrvUsdChartContainer" style="width: 80%; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; padding: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <h3 style="margin: 5px 0 10px; font-weight: bold;">Visualisation of the Liquidation Process</h3>
    <div style="margin-top: 5px;">
        <input type="hidden" id="collateralInput" class="price-input" value="1" min="0" step="0.1">
    </div>
    <div style="position: relative; margin-top: 10px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
            <span>Bottom of Liquidation Range</span>
            <span>Top of Liquidation Range</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 3px;">
            <input type="number" id="bottomRange" class="price-input" value="2311.92" style="border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background-color: #f8f9fa; width: 100px;">
            <span id="currentPrice" style="font-weight: bold;"></span>
            <input type="number" id="topRange" class="price-input" value="2556.35" style="border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background-color: #f8f9fa; width: 100px;">
        </div>
        <input type="range" id="ethCrvUsdSlider" style="width: 100%;" min="0" max="100" value="50">
    </div>
    <canvas id="ethCrvUsdChart"></canvas>
    <div id="ethCrvUsdValues" style="text-align: center; margin-top: 5px;"></div>
</div>


This continuous buying and selling between the collateral asset and crvUSD  leads to losses. These losses occur in both directions: when the price of the collateral decreases, and again when it increases. However, such losses only happen while the loan is within the liquidation range.

In short, LLAMMA enables a soft-liquidation mechanism that adjusts positions in real time, avoiding the abrupt liquidations seen in traditional systems.


## **Losses in Liquidation**

When a loan enters the **liquidation range**, **losses occur**. These losses are difficult to quantify precisely, as they depend on various external factors.

!!!warning "Misconception"
    A common misconception is that once a loan enters the liquidation range, it **cannot be liquidated** if the collateral price begins rising again. While this may seem intuitive, **liquidation losses can also occur as the price moves upward.**

Several factors influence the extent of these losses:

- **Number of Bands:** A higher number of bands reduces losses. Positions created with the maximum of **50 bands** have remained in liquidation mode for **months** while losing only a small percentage of loan health.
- **Market Volatility:** Sudden price drops in the collateral asset tend to produce **larger losses**, whereas slower, more gradual price changes enable smoother rebalancing with **lower losses**.
- **Liquidity Conditions:** Highly liquid assets (e.g., BTC, ETH, or LSDs) generally incur **smaller losses**, as deep liquidity across DeFi markets supports more efficient arbitrage and rebalancing.

Ultimately, **losses within the liquidation range are inevitable** and depend on factors such as **market volatility, asset liquidity, arbitrage efficiency, and loan configuration**. A clear understanding of these dynamics is essential for minimizing risk when structuring loans.


## **Hard Liquidation**

Hard liquidation occurs only when the [health](#loan-health) of a loan falls below 0%. At this point, the loan is forcefully closed at a specific price to cover the shortfall.

When a loan is hard-liquidated, the associated collateral is removed, and the loan is closed. However, the borrower retains full control over the borrowed funds.

To avoid hard liquidation, it's important to monitor loan health and take appropriate action when necessary. For more details, see [Loan Management in Liquidation](./guides/liquidation.md).

---

# **Loan Health**

Based on a user's collateral and debt amount, the UI will display a health score and status. If the position is in soft-liquidation mode, an additional warning will be displayed. Once a loan reaches **0% health**, the loan is **eligible to be hard-liquidated**. In a hard-liquidation, someone else can pay off a user's debt and, in exchange, receive their collateral. The loan will then be closed.

The **health of a loan decreases when the loan is in soft-liquidation mode. These losses do not only occur when prices go down but also when the collateral price rises again, resulting in the de-liquidation of the user's loan.** This implies that the health of a loan can decrease even though the collateral value of the position increases. If a loan is not in soft-liquidation mode, then no losses occur.

Losses are hard to quantify. There is no general rule on how big the losses are as they are dependent on various external factors such as how fast the collateral price falls or rises or how efficient the arbitrage is. But what can be said is that the **losses heavily depend on the number of bands** used; the more bands used, the fewer the losses.  Daily losses based on current data are shown [here](./loan-strategies.md#soft-liquidation-losses).

The formula for health is below, this is visualized in the Health Calculator applet as well.

$$\begin{aligned} \text{health} &= \frac{s \times (1-\text{liqDiscount}) + p}{\text{debt}} - 1 \\
p &= \text{collateral} \times \text{priceAboveBands} \end{aligned}$$

Where:

- $\text{collateralValue}$ : the value of all collateral at the current LLAMMA prices
- $\text{liqDiscount}$ : the liquidation discount for the market (how much to discount the collateral value for safety during hard-liquidation).
- $\text{debt}$ : the debt of the user
- $s$ : an estimation of how much crvUSD a user would have after converting all collateral through their bands in soft-liquidation.  This can be very roughly estimated as: $\text{collateral} \times \left( \frac{\text{softLiqUpperLimit} - \text{softLiqLowerLimit}}{2} \right)$
- $p$ : The value above the soft-liquidation bands.  Found by multiplying the amount of collateral by how far above soft-liquidation the current price is.  If user is in or below soft-liquidation, this value is 0.
- $\text{collateral}$ - The amount of collateral a user has, e.g., if a user has 5 wBTC, this value is 5.
- $\text{priceAboveBands}$ - The price difference between the oracle price and the top of the user's soft-liquidation range (upper limit of top band).  This value is 0 if user is in soft-liquidation.  See applet below for a visual representation.
- $\text{collateralPrice}$ - The price of a single unit of the collateral asset, e.g., if the collateral asset is wBTC, this value is the price of 1 wBTC.

---

# **Loan Discount**

The `loan_discount` is used for finding the maximum LTV a user can have in a market.  At the time of writing in crvUSD markets this value is a constant 9%, in Curve Lending markets this value ranges from 7% for WETH to 33% for volatile assets like UwU.  Use the calculator below to see the maximum LTVs a user can have based on the `loan_discount`, and band width factor `A` (with 4 bands, N=4).  The formula is:

$$\text{maxLTV} = \left(\frac{A - 1}{A}\right)^2 \times (1 - \text{loan_discount})$$

---

# **Borrow Rate**

In crvUSD minting markets, the general idea is that **the borrow rate increases when crvUSD goes down in value and decreases when crvUSD goes up in value**. In addition, there is a [Peg Stabilization Reserve (PSR)](#peg-stabilization-reserve-psr) that helps stabilize the price of crvUSD. The larger the reserve, the lower the rates will be.

*The formula for the borrow rate is as follows:*

$$\begin{aligned}r &= \text{rate0} * e^{\text{power}} \\
\text{power} &= \frac{\text{price}_\text{peg} - {\text{price}_\text{crvUSD}}}{\text{sigma}} - \frac{\text{DebtFraction}}{\text{TargetFraction}} \\
\text{DebtFraction} &= \frac{\text{PegStabilizationReserveSize}}{\text{TotalDebt}}\end{aligned}$$


*with:*

- $r$:	The interest rate.
- $\text{rate0}$: The rate when the Peg Stabilization Reserve is zero and the price of crvUSD is exactly 1.00.
- $\text{price}_\text{peg}$: Desired crvUSD price: 1.00
- $\text{price}_\text{crvUSD}$:	Current crvUSD price.
- $\text{sigma}$: variable which can be configured by the DAO, lower value makes the interest rates increase and decrease faster as crvUSD loses and gains value respectively.
- $\text{DebtFraction}$: Ratio of the Peg Stabilization Reserves's size (size is measured in how much crvUSD was deposited into pools) to the total outstanding debt.
- $\text{TargetFraction}$: Target fraction.
- $\text{PegStabilizationReserveSize}$:	The total size of the Reserve (which corresponds to the amount of crvUSD deposited into liquidity pools).
- $\text{TotalDebt}$: Total crvUSD debt across all markets.

*A tool to experiment with the interest rate model is available [here](https://crvusd-rate.0xreviews.xyz/).*


---

# **Peg Stabilization Reserve (PSR)**

The Peg Stabilization Reserve (PSR), formerly known as PegKeepers, is a mechanism designed to help keep the price of crvUSD close to $1.00.

- **If crvUSD trades above $1.00:** The system allows new crvUSD to be minted and deposited into Curve pools. This increases the pool’s crvUSD balance, helping bring the price back down toward $1.00.
- **If crvUSD trades below $1.00:** Previously deposited crvUSD can be withdrawn from the pools. This reduces the pool’s crvUSD balance, helping push the price back up.

The size of the PSR (essentially how much crvUSD is deposited into pools) has a direct influence on the crvUSD borrow rate: in general, a larger reserve results in a lower borrow rate.

The PSR does not deposit or withdraw assets on its own — someone must call the appropriate functions. These function calls are incentivized to ensure they are executed. Users can interact with the system via the interface here: [Peg Stabilization Reserve UI](https://www.curve.finance/crvusd/ethereum/pegkeepers/).
To learn more about the technical implementation of the Peg Stabilization Reserve, check out the [technical docs](https://docs.curve.finance/crvUSD/pegkeepers/overview/). A list of all deployments is available [here](https://docs.curve.finance/references/deployed-contracts/#pegkeepers).
<!-- need to change hyperlink after pegkeeper site was officially changed on the UI-->

<!-- Include the liquidations javascript file and necessary libraries-->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation"></script>
<script src="/javascripts/liquidations.js"></script>
<script src="/javascripts/loan-concepts.js"></script>
