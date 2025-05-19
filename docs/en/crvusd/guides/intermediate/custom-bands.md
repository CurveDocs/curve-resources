<h1>Opening a Loan with a Custom Number of Bands</h1>

To follow this guide, make sure **"Advanced Mode"** is enabled in your user settings.

Before diving in, please make sure you're familiar with the concept of bands. You can read more about them [here](../../advanced-liquidation.md#bands-n).

This guide is very similar to the [Beginner: Open & Close](./open-and-close.md) tutorial. The only difference is that you’ll be able to set a **custom number of bands** — which defaults to 10 in non-advanced mode. Everything else works exactly the same.

Make sure you understand the **consequences and benefits** of using more or fewer bands. You’ll find a quick summary further down in this guide, or read more [here](../../advanced-liquidation.md#bands-n).

---

# **Customizing Bands**

Simply **enter the amount of collateral** you want to use and choose **how much crvUSD to borrow**. Additionally, you can adjust the number of bands for the loan by moving the slider left or right.

- **Minimum bands:** 4
- **Maximum bands:** 50

<figure markdown="span">
  ![Image title](../../../images/crvusd/guides/bands/borrow_light.png#only-light){ width="350" }
  ![Image title](../../../images/crvusd/guides/bands/borrow_dark.png#only-dark){ width="350" }
  <figcaption></figcaption>
</figure>

---

# **Effects of Number of Bands**

The maximum LTV (Loan-To-Value ratio — the maximum amount you can borrow against your collateral) is heavily influenced by the number of bands selected when opening a loan.

In general:

- The **fewer** bands you use, the **higher** your borrowing power (LTV)
- The **more** bands you use, the **lower** your potential losses during soft-liquidation

This creates a trade-off between **maximum borrowing capacity** and **protection from liquidation losses**.

If you're actively monitoring your loan and plan to repay or close it before entering soft-liquidation, using **fewer bands** may allow you to borrow more efficiently.
If you prefer a more conservative approach, using **more bands** will help reduce potential losses if liquidation occurs.

Ultimately, it's a trade-off between **risk** and **borrowing power**, and you should choose the configuration that best fits your goals and risk tolerance.


Maximum LTV is calculated using the following formula:

$$
\text{Maximum LTV} = 100 - \text{loan_discount} - 100 \times \frac{N}{2 \times A}
$$

Where:

- $\text{loan_discount}$ is a protocol-defined parameter, typically set to **7%**
- $A$ is the **maximum allowed number of bands**, which varies by market and is visible in the UI
- $N$ is the **number of bands** selected for the loan
