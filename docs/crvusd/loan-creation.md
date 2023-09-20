# **Loan Creation**

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2F92aEeJyIJqTiMrRYpYxc%2Fimage.png?alt=media&token=95ca2242-0146-4ec0-a364-62c09e38e287)

In standard mode, creating a loan using $crvUSD only requires setting how much of the collateral asset you would like to add, and how much $crvUSD you would like to borrow in return. After you have set your collateral amount, the UI will display the maximum amount you can borrow.

The UI includes a dropdown for additional loan parameters like the current Oracle Price and [Borrow Rate](/crvusd/understanding-tokenomics#borrow-rate).

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2Fhc9iZdLA4vikZBvObwgU%2Fimage.png?alt=media&token=39723fbe-a561-4952-8983-5fc5b6a28d26)


**Loan Parameters**

- **A:** The amplification parameter A defines the density of liquidity and band size.
- **Base Price:** The base price is the price of the band number 0. 
- **Oracle Price:** The oracle price is the current price of the collateral as determined by the oracle. The oracle price is used to calculate the collateral's value and the loan's health.
- **Borrow Rate:** The borrow rate is the annual interest rate charged on the loan. This rate is variable and can change based on market conditions. The borrow rate is expressed as a percentage. For example, a borrow rate of 7.62% means that you will be charged 7.62% interest per year on the outstanding balance of your loan.

You can toggle advanced mode in the upper right-hand side of the screen.

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FKv92ZQVe7nWuQQbr6oza%2Fimage.png?alt=media&token=8b1550a9-2faa-4763-982f-00a773248238)

The advanced mode adds a display with more information about the current distribution across all the [bands](/crvusd/understanding-tokenomics#bands) within the entire [LLAMMA](/crvusd/understanding-tokenomics#llamma). It also enhances the loan creation interface by displaying the liquidation and band range, number of bands, borrow rate, and Loan to Value ratio (LTV). 

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FmObrDXrcyr7QjDrFh5XB%2Fimage.png?alt=media&token=07b999f2-776b-4872-a7a7-9582f9cae12e)

![](../images/crvusd_advanced_loan.png){ width="300" }

Additionally, users can manually select the number of bands for the loan by pressing the "adjust" button and using the slider to increase or decrease the number of bands.

![](../images/crvusd_slider.png){ width="300" }



# **Leveraging Loans**
The UI provides the option to leverage your loan.

You can leverage your collateral up to 9x. This has the effect of repeat trading crvUSD to collateral and depositing to maximize your collateral position. [Here](https://curve.substack.com/p/august-15-2023-all-or-nothing) explains how leveraging works well.

Be careful: if the collateral price dips, you must repay the entire amount to reclaim your initial position.  

**WARNING:** The corresponding deleverage button is also not yet available.

![](../images/crvusd-leverage.png){ width="400" }

Toggling the advanced mode expands the display to show additional information about the loan, including the price impact and trade route.

![](../images/crvusd-advanced.png){ width="300" }


