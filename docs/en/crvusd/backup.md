---
search:
  exclude: true
---

<h1>Liquidations</h1>

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



there is also this:

Liquidations on Curve Lending and crvUSD work differently to other DeFi loans. There are three types of system operations called liquidations, designed to protect both borrowers and the protocol:

- [Soft-liquidations](#soft-liquidation) - the system is actively trying to protect your collateral from hard-liquidation
- [Hard-liquidations](#hard-liquidation) - this is like a regular liquidation on another lending platform, collateral is lost, but borrowed assets are kept
- [Self-liquidations](#self-liquidation) - users can choose to liquidate themselves, which is sometimes beneficial.

The sections below explain each type in detail, including when they occur and how they work.

---

# **Soft-liquidation**

Soft-liquidation serves as a warning system for at-risk positions. During this phase, the system automatically protects loans by:

- Converting the original collateral to the borrowed asset as prices decrease
- Converting back to the original collateral as prices increase (de-liquidation)

See the image below for an explanation about how soft-liquidation works.

![Collateral Loss](../images/crvusd/soft-liq.svg#only-light){: .centered }
![Collateral Loss](../images/crvusd/soft-liq-dark.svg#only-dark){: .centered }

**Important notes about soft-liquidation:**

- Hard-liquidation is not triggered at the bottom of the soft-liquidation range (e.g., below $2,000 in the above image)
- Collateral is gradually lost to swap fees during soft-liquidation and de-liquidation as prices fluctuate
- Health deterioration accelerates significantly during high market volatility
- Debt repayment affects the position differently depending on timing:

    - During soft-liquidation: Increases health but maintains the same soft-liquidation range
    - Outside soft-liquidation: Increases health and lowers the soft-liquidation range

Learn more:

- [Detailed health information](./loan-concepts.md#loan-health)
- Try the [soft-liquidation applet](#soft-liquidation-applet) to simulate collateral conversion through the soft-liquidation range

---

# **Hard-liquidation**

When a position's health reaches 0%, the loan becomes eligible for hard-liquidation. At this point, any user can trigger hard-liquidation by repaying the borrower's debt. In return for repaying the debt, the liquidator is rewarded with the borrower's remaining collateral. While this is typically profitable for the liquidator, in rare cases it may result in [bad debt](./loan-concepts.md#bad-debt).

After hard-liquidation, the borrower:

- Keeps their borrowed crvUSD
- Loses their remaining collateral

**Important notes about hard-liquidation:**

- Triggered only by 0% health, not by reaching the bottom of the soft-liquidation range
- Users can be below the soft-liquidation range with fully converted collateral if they maintain positive health
- Users in soft-liquidation can increase their health by repaying debt
- If possible, it is always better to repay debt or [self-liquidate](#self-liquidation) before undergoing hard-liquidation, see the [self-liquidation example](#managing-health-self-liquidation-example) below to see why

Learn more:

- See the [hard-liquidation example](#hard-liquidation-example) below
- For detailed mechanics, see [Loan Concepts In Depth: Hard-liquidations](./loan-concepts.md#hard-liquidations)

---

# **Self-liquidation**

Self-liquidation allows users to voluntarily close their position before reaching hard-liquidation, typically when they're already in soft-liquidation. This feature helps users recover their remaining collateral while avoiding the [liquidation_discount](./loan-concepts.md#market-parameters) penalty.

Here's a simple example:

1. Alice initially borrows 1000 crvUSD using 1 WETH as collateral
2. Her position enters soft-liquidation, where 0.2 WETH is automatically converted to 250 crvUSD
3. Her current position now consists of:

    - Debt: 1000 crvUSD
    - Collateral: 0.8 WETH + 250 crvUSD

4. To self-liquidate, Alice only needs to repay 750 crvUSD (since 250 crvUSD is already in her collateral)
5. After repaying, Alice recovers her remaining 0.8 WETH

Learn more:

- See the [self-liquidation example](#managing-health-self-liquidation-example) below

---

# **Hard-liquidation Example**

The example below shows a loan in the CRV/crvUSD lending market which was hard-liquidated.  The chart is interactive, by hovering over prices, you can see how the health of the loan decreases over time.  See that hard-liquidation only relies on health.  **The bottom of the soft-liquidation range is not where hard-liquidation happens.**

<!-- Show the hard-liquidation chart-->
<h2 style="margin: 10px 0 20px; text-align: center;">Hard-liquidation - Borrowing crvUSD using CRV</h2>
<div class="centered2" style="width: 100%">
  <canvas id="crvHardLiq"></canvas>
</div>

**It is always better to self-liquidate a loan before a loan is hard-liquidated**.  This is because the health calculation values your collateral lower than its actual worth. In this example, the borrower would have gotten back 11,107 crvUSD more if they had self-liquidated their loan instead of letting it be hard-liquidated.

---

# **Managing Health & Self-liquidation Example**

The below example shows how to manage health and how self-liquidation works, this shows a loan in the WETH/crvUSD lending market.  When the user got into soft-liquidation they decided to repay around 10% of their debt, this increased their health from approx. 3% to 13%, but kept their soft-liquidation range the same.   They then stayed in soft-liquidation for a long time, so they self-liquidated.  **If some debt is repaid while in soft-liquidation the range will stay the same but health will increase**, if debt is repaid outside the soft-liquidation range, the range will move lower.

Self-liquidating here was a good idea, this is because they already had 38,857 crvUSD as collateral (from swapped WETH in soft-liquidation), and their debt was 98,299 crvUSD, they only had to send 59,442 crvUSD and they received back their 24.3371 WETH.  If they chose to repay they would have had to repay all 98,299 crvUSD of debt, and received all collateral back (38,857 crvUSD and 24.3371 WETH) in return.

<!-- Show the self-liquidation chart-->
<h2 style="margin: 10px 0 20px; text-align: center;">Self-liquidation - Borrowing crvUSD using WETH</h2>
<div class="centered2" style="width: 100%">
  <canvas id="wethSelfLiq"></canvas>
</div>
