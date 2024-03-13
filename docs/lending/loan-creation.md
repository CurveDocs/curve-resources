## **Creating A New Loan**

In order to create a loan and borrow tokens against your collateral, the user first needs to choose a lending market. This can simply be done by clicking the desired market.

Loans can be created when "Advanced Mode" is toggled on or off. Having it activated allows the user to additionally select the number of bands for the loan and displays the corresponding liquidation range. If deactivated, the loan will be created with a default amount of 10 bands.

!!!tip "Number of Bands (N)"
    A **higher number of bands results in fewer losses when the loan is in soft-liquidation** mode. See [**here**](../crvusd/loan-details.md#loan-health) for more details. The maximum number of bands is 50, while the minimum is 4.

*Disclaimer: The figure below is just an embedded UI. It is highly recommended to visit: [https://lend.curve.fi/#/ethereum/markets](https://lend.curve.fi/#/ethereum/markets)*

<iframe src="https://lend.curve.fi/#/ethereum/markets/one-way-market-2/create" width="100%" height="500px"></iframe>


---


*Additionally, an overview of the entire LLAMMA including important values such as lend or borrow APY, available amount to borrow, etc., is added.*

<figure markdown="span">
  ![](../images/lending/adv_marketdetails.png){ width="600" }
  <figcaption></figcaption>
</figure>


*Navigating to the `Your Details` tab displays all the user's loan details:*

<figure markdown="span">
  ![](../images/lending/adv_yourdetails.png){ width="600" }
  <figcaption></figcaption>
</figure>


*Down below, a section containing relevant contracts and the current parameters for the lending market appears.*

<figure markdown="span">
  ![](../images/lending/adv_info.png){ width="600" }
  <figcaption></figcaption>
</figure>


---


## **Loan Management**

Everything needed to manage a loan is available in this interface. The features include:

<figure markdown="span">
  ![](../images/lending/loan_management.png){ width="400" }
  <figcaption></figcaption>
</figure>


**`Loan`**   
This tab provides options to **`Borrow more`**, **`Repay`** debt, or **`Self-liquidate`** a loan.

**`Collateral`**  
Options to **`add`** or **`remove`** collateral from a loan.


!!!info "Loan Management when in soft-liquidation mode"
    **During soft-liquidation, users are unable to add or withdraw collateral.** They can choose to **either partially or fully repay** their crvUSD debt to improve their health ratio **or** decide to **self-liquidate** their loan if their collateral composition contains sufficient crvUSD to cover the outstanding debt. If they opt for self-liquidation, the user's debt is fully repaid and the loan will be closed. Any residual amounts are then returned to the user.