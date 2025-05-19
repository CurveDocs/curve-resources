---
search:
  exclude: true
---

<h1>Managing a Loan</h1>

To perform the actions on this page, you must have an existing loan. The options below are only available for active loans.

Users can manage their loans in the following ways:

- [Add](#adding-collateral) or [remove](#removing-collateral) collateral
- [Borrow more](#borrow-more) crvUSD
- [Repay](#partial-repayment) (partially or fully)


!!!warning "Loan Management in Liquidation"
    When a loan is in liquidation, you cannot add or remove collateral. The only available actions are repaying debt (partially or fully) or self-liquidating your loan. For more information on managing a loan in liquidation, see here.


To manage your loan, navigate to the [Markets Overview](https://curve.finance/crvusd/ethereum/markets/), connect your wallet and select the according market. The UI displays your current loans health and debt in the overview.

<figure markdown="span">
  ![Image title](../../images/crvusd/guides/loan-management/active_markets_light.png#only-light){ width="800" }
  ![Image title](../../images/crvusd/guides/loan-management/active_markets_dark.png#only-dark){ width="800" }
  <figcaption></figcaption>
</figure>


---


# **Adding Collateral**

Go to the [Markets Dashboard](https://curve.finance/crvusd/ethereum/markets/) and select the market where you want to add more collateral.

!!!warning "Adding Collateral while being in Liquidation is not possible"
    Adding collateral is not possible when your loan is in liquidation. To get out of liquidation, see [here].

Switch from the `Loan` to the `Collateral` tab and specify the amount of collateral you want to add and confirm the transaction.

<figure markdown="span">
  ![Image title](../../images/crvusd/guides/loan-management/add_light.png#only-light){ width="400" }
  ![Image title](../../images/crvusd/guides/loan-management/add_dark.png#only-dark){ width="400" }
  <figcaption></figcaption>
</figure>


**Effect of Adding More Collateral**

Adding more collateral to your loan has a **positive effect on its health and liquidation range**. It increases your loan’s health and moves the liquidation range further down, keeping you further away from liquidation.

<figure markdown="span">
  ![Image title](../../images/crvusd/guides/loan-management/new_range_add_light.png#only-light){ width="700" }
  ![Image title](../../images/crvusd/guides/loan-management/new_range_add_dark.png#only-dark){ width="700" }
  <figcaption>Adding additional collateral to the loan moves the liquidation range further down.</figcaption>
</figure>


---


# **Removing Collateral**

Go to the [Markets Dashboard]((https://curve.finance/crvusd/ethereum/markets/)) and select the market where you want to remove collateral from.

!!!warning "Removing Collateral while being in Liquidation is not possible"
    Removing collateral from your loan is not possible when you are in liquidation. To get out of liquidation, see [here].

Switch from the `Loan` to the `Collateral` tab and select "Remove". Then specify the amount of collateral you want to remove and confirm the transaction.

<figure markdown="span">
  ![Image title](../../images/crvusd/guides/loan-management/remove_light.png#only-light){ width="400" }
  ![Image title](../../images/crvusd/guides/loan-management/remove_dark.png#only-dark){ width="400" }
  <figcaption></figcaption>
</figure>

**Effect of Removing Collateral**

Removing collateral from your loan has a **negative effect on its health and liquidtion range**. It decreases your loan's health and moves the liquidation range further up, bringing your closer to liquidation.

<figure markdown="span">
  ![Image title](../../images/crvusd/guides/loan-management/new_range_remove_light.png#only-light){ width="700" }
  ![Image title](../../images/crvusd/guides/loan-management/new_range_remove_dark.png#only-dark){ width="700" }
  <figcaption>Removing collateral from the loan reduces the health and moves the liquidation range of the loan further up.</figcaption>
</figure>


---


# **Borrow More**

Go to the [Markets Dashboard]((https://curve.finance/crvusd/ethereum/markets/)) and select the market where you want to borrow more crvUSD.

!!!warning "Borrowing more in Liquidation"
    Borrowing more crvUSD in liquidation is not possible. To get out of liquidation, see [here].

Specify the amount of crvUSD you want to borrow. You also have the option to add more collateral at the same time — allowing you to increase both your loan amount and your collateral in a single step.

<figure markdown="span">
  ![Image title](../../images/crvusd/guides/loan-management/borrow_more_light.png#only-light){ width="400" }
  ![Image title](../../images/crvusd/guides/loan-management/borrow_more_dark.png#only-dark){ width="400" }
  <figcaption></figcaption>
</figure>


**Effect of Removing Collateral**

Borrowing more crvUSD is only possible if the loan is not in liquidation. Borrowing more crvUSD will decrease the loans health and and move up the liquidation range, bringing you closer to liquidation.

<figure markdown="span">
  ![Image title](../../images/crvusd/guides/loan-management/new_range_more_light.png#only-light){ width="700" }
  ![Image title](../../images/crvusd/guides/loan-management/new_range_more_dark.png#only-dark){ width="700" }
  <figcaption>Borrowing more crvUSD reduces the health and moves the liquidation range of the loan further up. If also collatereal is added, these effects can be lowered.</figcaption>
</figure>


---


# **Partial Repayment**

Debt can be repaid fully or partially. Repayment is always possible, wether the loan is in liquidation or not, but it will have diferent effcts on the liquidation range.

Go to the [Markets Dashboard]((https://curve.finance/crvusd/ethereum/markets/)) and select the market where you want to partially repay some debt.

<figure markdown="span">
  ![Image title](../../images/crvusd/guides/loan-management/partial_repay_light.png#only-light){ width="400" }
  ![Image title](../../images/crvusd/guides/loan-management/partial_repay_dark.png#only-dark){ width="400" }
  <figcaption></figcaption>
</figure>



- ## **Not in Liquidation**

    Repaying debt when the loan is not in liquidation improves the health of the loan and moves the liquidation range down, brining the loan further away from liquidation.

    <figure markdown="span">
        ![Image title](../../images/crvusd/guides/loan-management/new_range_partial_light.png#only-light){ width="600" }
        ![Image title](../../images/crvusd/guides/loan-management/new_range_partial_dark.png#only-dark){ width="600" }
    <figcaption></figcaption>
    </figure>


- ## **In Liquidation**

    Repaying debt while being in liquidation will increase your health, but NOT move the liquidation range. No matter how much you repay, it will never move your liquidation range up or down but will only increase your health.

    todo: image comparison
