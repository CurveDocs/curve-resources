<h1>Manual Deleveraging</h1>

This guide applies to leveraged loans on Llamalend where you've created a leveraged position.

While the UI typically allows deleveraging in a single transaction, you can manually deleverage your position. The process differs depending on whether your loan is in liquidation protection mode.

---

## **Deleveraging While Not in Liquidation**

For loans not in liquidation protection (aka soft-liquidation), manual deleveraging reverses the leverage process:

<figure markdown="span">
  ![](../../../images/crvusd/guides/leverage/manual-deleverage.png#only-light){ width="700" }
  ![](../../../images/crvusd/guides/leverage/manual-deleverage.png#only-dark){ width="700" }
  <figcaption></figcaption>
</figure>

1. Use crvUSD and repay some debt
2. Withdraw the collateral that was freed up by repaying debt
3. Sell the withdrawn collateral for more crvUSD
4. Repeat until all debt is cleared or your desired outstanding debt is reached

!!!info "Requirements"
    You'll need initial crvUSD or funds to swap for crvUSD to begin this process.

---

## **Deleveraging While in Liquidation**

When your loan enters liquidation protection (aka soft-liquidation), collateral actions such as adding or removing collateral are restricted. The iterative method above won't work since you cannot withdraw collateral until the loan is fully repaid. In this case, you must pay off the entire debt balance at once to close the loan and access your collateral.
