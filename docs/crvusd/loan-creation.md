<h1> </h1>

## **Loan Creation**

In standard mode, creating a loan using crvUSD requires only setting the amount of the collateral asset you wish to add and the amount of crvUSD you want to borrow in return. After you have determined your collateral amount, the UI will display the maximum amount you can borrow, as well as the health and borrow rate.

<figure markdown>
  ![](../images/tbtc_create_simple_a.png){ width="300" }
  <figcaption></figcaption>
</figure>


The UI includes a dropdown to see additional loan parameters like the current Oracle Price and [Borrow Rate](/crvusd/understanding-tokenomics#borrow-rate).

<figure markdown>
  ![](../images/tbtc_loan_param.png){ width="300" }
  <figcaption></figcaption>
</figure>


In the upper right-hand side of the screen, you can toggle advanced mode.

<figure markdown>
![](../images/adv_mode.png){ width="300" }
<figcaption></figcaption>
</figure>


The advanced mode adds an additional display with more information about the current distribution across all the [bands](/crvusd/understanding-tokenomics#bands) within the entire [LLAMMA](/crvusd/understanding-tokenomics#llamma). 

<figure markdown>
![](../images/tbtc_loan_details.png){ width="500" }
<figcaption></figcaption>
</figure>


It also enhances the loan creation interface by displaying the liquidation and band range, number of bands, borrow rate, and Loan to Value ratio (LTV). Additionally, users can manually select the number of bands for the loan by pressing the "adjust" button and using the slider to increase or decrease the number of bands.

<figure markdown>
  ![](../images/tbtc_create_adv2.png){ width="300" }
  <figcaption></figcaption>
</figure>


## **Loan Management**

Everything you need to manage your loan is available in this interface. The features include:

<figure markdown>
  ![](../images/loan_management.png){ width="300" }
  <figcaption></figcaption>
</figure>


**`Loan`**   
This tab allows you to `Borrow more` more crvUSD, `Repay` your debt or `Self-Liquidate` your loan.

**`Collateral`**  
Can `add` or `remove` collateral from your loan here.

**`Deleverage`**   
This tab lets you to deleverage a loan. Find more details [here](#deleveraging-loans).

!!!info
    During soft-liquidation, users are unable to add or withdraw collateral. They can choose to either partially or fully repay their crvUSD debt to improve their health ratio or decide to self-liquidate their loan if their collateral composition contains sufficient crvUSD to cover the outstanding debt. If they opt for self-liquidation, the user's debt is fully repaid and the loan will be closed. Any residual amounts are then returned to the user.


## **Leveraging Loans**
The UI provides the option to leverage your loan. To do so, just navigate to the "Leverage" tab.

More infomation on how to deleverage a loan [here](#deleveraging-loans).

!!!info
    You can leverage your collateral up to 9x. This has the effect of repeat trading crvUSD to collateral and depositing to maximize your collateral position. Essentially, all borrowed crvUSD is utilized to purchase more collateral.  
    Be careful, if the collateral price dips, you would need to repay the entire amount to reclaim your initial position. 

[Here](https://curve.substack.com/p/august-15-2023-all-or-nothing) is a good explainer on how leveraging works. 

<figure markdown>
![](../images/tbtc_lev1.png){ width="400" }
<figcaption></figcaption>
</figure>

Toggling the advanced mode expands the display to show additional information about the loan, including the price impact, trade route and the actual leverage.

<figure markdown>
![](../images/lev_info.png){ width="300" }
<figcaption></figcaption>
</figure>


## **Deleveraging Loans**
Deleveraging a loan — whether it is [leveraged](../crvusd/loan-creation.md#leveraging-loans) or not — can be done through the UI. To do so, simply navigate to the 'Deleverage' tab and enter the amount of collateral you wish to use for deleveraging. This collateral will then be converted to crvUSD to repay the user's debt.

<figure markdown>
  ![](../images/delev_no_softliq1.png){ width="300" }
  <figcaption></figcaption>
</figure>


!!!info
    When a user's loan is in soft liquidation, deleveraging is only possible if the loan is fully repaid. Apart from that, the loan can typically be self-liquidated. If the position is not in soft liquidation, the user can deliberately deleverage by any chosen amount.


The UI will provide the user with their updated loan details, such as liquidation and band range, borrow rate, and health, as well as the LLAMMA changes of collateral and debt.

<figure markdown>
![](../images/delev_new_details.png){ width="300" }
  <figcaption></figcaption>
</figure>