<h1>Borrow Rate</h1>

The borrow rate is the interest rate a user pays when borrowing crvUSD. It is applied continuously, meaning it is charged per second. As a result, the borrow rate gradually increases the total debt (the amount borrowed) over time.

The borrow rate plays an important role in keeping the price of crvUSD close to $1. Simply put, if the price of crvUSD is above the peg, the borrow rate will decrease to encourage more users to borrow crvUSD (and sell it), which helps bring the price back down to $1.
If the price of crvUSD falls below $1, the borrow rate will increase to encourage users to buy crvUSD and repay their loans, which pushes the price back up.

---

## **Borrow Rate**

The borrow rate is the same for all collateral types, except it is 2% higher for wstETH and sfrxETH, as these are yield-bearing assets. All loans in the same market share the same interest rate.

The UI shows both the current and expected future borrow rate for each market:

<figure markdown="span">
    ![Image title](../images/crvusd/education/borrow-rate/light.png#only-light){ width="600" }
    ![Image title](../images/crvusd/education/borrow-rate/dark.png#only-dark){ width="600" }
<figcaption></figcaption>
</figure>

The future rate is the new rate to which it will udpate once someone interacts with the market.

<figure markdown="span">
    ![Image title](../images/crvusd/education/borrow-rate/new_rate_light.png#only-light){ width="350" }
    ![Image title](../images/crvusd/education/borrow-rate/new_rate_dark.png#only-dark){ width="350" }
<figcaption>Current Rate (blue) and Future Rate (green)</figcaption>
</figure>


---

**Peg Stabilization Reserve (PSR)**

The Peg Stabilization Reserve (PSR), formerly known as PegKeepers, is a mechanism designed to help keep the price of crvUSD close to $1.00. While it doesn’t act on its own, the system allows anyone to trigger specific actions when the crvUSD price moves — thanks to fully permissionless smart contracts.

The size of the Reserve influences the crvUSD borrow rate: in general, a larger Reserve results in a lower borrow rate.

Here’s how it works:

- **If crvUSD trades above $1.00:** The system allows new crvUSD to be minted and deposited into Curve pools. This increases the pool’s crvUSD balance, helping bring the price back down toward $1.00.
- **If crvUSD trades below $1.00:** Previously deposited crvUSD can be withdrawn from the pools. This reduces the pool’s crvUSD balance, helping push the price back up.

These actions aren’t automatic — they require someone to call the appropriate functions. Users can interact with the system using the interface here: https://www.curve.finance/crvusd/ethereum/pegkeepers/.
<!-- todo: need to fix the link after changing the name to stabilization reserve -->
