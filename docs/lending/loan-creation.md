## **Creating A New Loan**

In order to create a loan and borrow tokens against your collateral, the user first needs to choose a lending market. This can simply be done by clicking the desired market.

Having **`"Advanced Mode"`** activated when creating a loan allows the user to additionally select the number of bands for the loan and displays the according liquidation range. If deactivated, the loan will be created with a default amount of 10 bands.

!!!tip "Number of Bands (N)"
    A **higher number of bands results in fewer losses when the loan is in soft-liquidation** mode. See [**here**](../crvusd/loan-details.md#bands) for more details. The maximum number of bands is 50, while the minimum is 4.

<figure markdown="span">
  ![](../images/lending/lend_createloan.png){ width="300" }
  <figcaption></figcaption>
</figure>

Additionally, the UI shows the future borrow apy when the users loan is created and the loan-to-value (LTV) ratio.


---


*Additionally, an overview of the entire LLAMMA including important values such as lend or borrow APY, available amount to borrow, etc., is added.*

<figure markdown="span">
  ![](../images/lending/lend_marketdetails.png){ width="600" }
  <figcaption></figcaption>
</figure>

*Down below, a section containing relevant contracts and the current parameters for the lending market appears.*

<figure markdown="span">
  ![](../images/lending/lend_parameters.png){ width="600" }
  <figcaption></figcaption>
</figure>


*Navigating to the `Your Details` tab displays all the user's loan details:*

<figure markdown="span">
  ![](../images/lending/lend_yourdetails.png){ width="600" }
  <figcaption></figcaption>
</figure>


---


## **Loan Management**

Everything needed to manage a loan is available in this interface.

!!!info "Loan Management when in soft-liquidation mode"
    **During soft-liquidation, users are unable to add or withdraw collateral.** They can choose to **either partially or fully repay** their crvUSD debt to improve their health ratio **or** decide to **self-liquidate** their loan if their collateral composition contains sufficient crvUSD to cover the outstanding debt. If they opt for self-liquidation, the user's debt is fully repaid and the loan will be closed. Any residual amounts are then returned to the user.

*The **`"Manage Loan"`** tab has the following options:*

<figure markdown="span">
  ![](../images/lending/lend_manageloan.png){ width="400" }
  <figcaption></figcaption>
</figure>

- `Borrow more`: Borrowing more assets, while adding additional collateral (not neccessary).
- `Repay`: Partially or fully repay debt.
- `Self-liquidate`: Close their loan via self-liquidation.

---

*The **`Collateral`**  tab allows the adjustment of collateral:*

<figure markdown="span">
  ![](../images/lending/lend_collateral.png){ width="400" }
  <figcaption></figcaption>
</figure>

- `Add collateral`: Add more collateral to the loan.
- `Remove collateral`: Remove collateral from the loan.