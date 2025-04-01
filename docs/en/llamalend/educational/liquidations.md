---
search:
  exclude: true
---

<h1>Liquidations</h1>

Liquidations on Curve operate differently than on other DeFi platforms. While most platforms liquidate loans at a fixed liquidation threshold, Curve provides more flexibility by introducing a **liquidation range** within which a loan is gradually liquidated.

Simply put: When your loan enter the liquidation range, losses occur. If your loan reaches 0% health, you are fully liquidated. You are NOT liquidation at a certain price threshold.

This approach provides greater flexibility and offers more control compared to traditional liquidation methods.

---

# **Liquidation Range**

The liquidation range is defined by two prices for the collateral asset. A loan enters this range when the collateral price drops within the defined range:

<figure markdown="span">
    ![Image title](../images/crvusd/education/liquidation/liq_range_light.png#only-light){ width="600" }
    ![Image title](../images/crvusd/education/liquidation/liq_range_dark.png#only-dark){ width="600" }
<figcaption>The liquidation range is between $1000 and $800. If the collateral price drops within this range, the loan enters liquidation.</figcaption>
</figure>

!!!info "How does it compare to other protocols"
    Unlike other protocols, a loan is not fully liquidated when the collateral price falls below $1000. Instead, the loan enters the liquidation range, where it begins to accumulate losses. This gives the borrower more time to take action, such as repaying part of the debt or fully closing the loan. However, if the loan remains in this range for too long and the accumulated losses cause the loan's health to drop to 0%, it will be fully liquidated.


!!!warning "Important"
    Since loans on Llamalend are liquidated within a range, not at a fixed threshold, it is crucial to either close the loan when entering the liquidation range or closely monitor the loan health to prevent it from reaching 0%.

    Learn what actions you can take during liquidation here: [What to do in liquidation](./guides/liquidation.md).


---


# FAQ

## What happens in liquidation

When a loan enters liquidation range, 

## What to do when in liquidation

two options:

---


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

## **Hard-liquidation**

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

## **Self-liquidation**

Self-liquidation allows users to voluntarily close their position before reaching hard-liquidation, typically when they're already in soft-liquidation. This feature helps users recover their remaining collateral while avoiding the [`liquidation_discount`](./loan-concepts.md#market-parameters) penalty.

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

## **Hard-liquidation Example**

The example below shows a loan in the CRV/crvUSD lending market which was hard-liquidated.  The chart is interactive, by hovering over prices, you can see how the health of the loan decreases over time.  See that hard-liquidation only relies on health.  **The bottom of the soft-liquidation range is not where hard-liquidation happens.**

<!-- Show the hard-liquidation chart-->
<h2 style="margin: 10px 0 20px; text-align: center;">Hard-liquidation - Borrowing crvUSD using CRV</h2>
<div class="centered2" style="width: 100%">
  <canvas id="crvHardLiq"></canvas>
</div>

**It is always better to self-liquidate a loan before a loan is hard-liquidated**.  This is because the health calculation values your collateral lower than its actual worth. In this example, the borrower would have gotten back 11,107 crvUSD more if they had self-liquidated their loan instead of letting it be hard-liquidated.

---

## **Managing Health & Self-liquidation Example**

The below example shows how to manage health and how self-liquidation works, this shows a loan in the WETH/crvUSD lending market.  When the user got into soft-liquidation they decided to repay around 10% of their debt, this increased their health from approx. 3% to 13%, but kept their soft-liquidation range the same.   They then stayed in soft-liquidation for a long time, so they self-liquidated.  **If some debt is repaid while in soft-liquidation the range will stay the same but health will increase**, if debt is repaid outside the soft-liquidation range, the range will move lower.

Self-liquidating here was a good idea, this is because they already had 38,857 crvUSD as collateral (from swapped WETH in soft-liquidation), and their debt was 98,299 crvUSD, they only had to send 59,442 crvUSD and they received back their 24.3371 WETH.  If they chose to repay they would have had to repay all 98,299 crvUSD of debt, and received all collateral back (38,857 crvUSD and 24.3371 WETH) in return.

<!-- Show the self-liquidation chart-->
<h2 style="margin: 10px 0 20px; text-align: center;">Self-liquidation - Borrowing crvUSD using WETH</h2>
<div class="centered2" style="width: 100%">
  <canvas id="wethSelfLiq"></canvas>
</div>

---

## **Soft-liquidation Applet**

This applet simulates how collateral is converted through a soft-liquidation range.

<!-- This styling creates the soft-liq applet-->
<div id="ethCrvUsdChartContainer">
    <h2 style="margin: 10px 0 20px; text-align: center;">Soft-liquidation Collateral Conversion</h2>
    <div style="margin-top: 10px;">
        <label for="collateralInput">Collateral Amount (ETH):</label>
        <input type="number" id="collateralInput" class="price-input" value="10" min="0" step="0.1">
    </div>
    <div style="position: relative; margin-top: 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span>Bottom of SL Range:</span>
            <span>Top of SL Range:</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 5px;">
            <input type="number" id="bottomRange" class="price-input" value="2311.92">
            <span id="currentPrice" style="font-weight: bold;"></span>
            <input type="number" id="topRange" class="price-input" value="2556.35">
        </div>
        <input type="range" id="ethCrvUsdSlider" style="width: 100%;" min="0" max="100" value="50">
    </div>
    <canvas id="ethCrvUsdChart"></canvas>
    <div id="ethCrvUsdValues" style="text-align: center; margin-top: 10px;"></div>
</div>

<!-- Include the liquidations javascript file and necessary libraries-->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation"></script>
<script src="/javascripts/liquidations.js"></script>