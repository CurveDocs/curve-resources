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

## **PegKeepers**

PegKeepers are a new innovation that helps keep the price of crvUSD stable. They automatically take certain actions based on the price of crvUSD in Curve pools. All of these actions are permissionless and can be triggered by any user. See here.

When the price of crvUSD in a pool is above $1.00, PegKeepers are allowed to mint uncollateralized crvUSD (crvUSD without backing) and deposit it into specific Curve pools. This increases the crvUSD balance in the pool, which helps bring the price back down.

The borrow rate is also influenced by how much crvUSD PegKeepers hold. As a general rule: the more crvUSD PegKeepers have deposited into pools, the lower the borrow rate will be.

If a PegKeeper has previously deposited crvUSD into a pool, it can also withdraw that crvUSD—but only when the price is below $1.00. By withdrawing crvUSD, the pool’s crvUSD balance decreases, which helps push the price back up.

For more details, see the [PegKeepers documentation](https://docs.curve.fi/crvUSD/pegkeepers/overview/).
