<h1>Leverage</h1>

This section explains how leverage works, if you would like to know how to take out a leverage loan, see [How to take out a leverage loan](how-to-borrow.md#how-to-take-out-a-leverage-loan) section of the how to borrow page.

# **How Leverage Works**

Leverage on Curve Lending allows a user to **multiply their gains (and losses) by the amount of leverage** they desire. For example, if a user is borrowing crvUSD with WETH collateral at 2x leverage, they will make twice as much profit in crvUSD compared to just holding their WETH without leverage (not accounting for borrowing rates).  Let's look at a few quick examples:

| ETH starting price | ETH end price | Deposited Collateral | Borrowed Collateral | Total Collateral | Leverage | Profit | ETH Profit |
|---|---|---|---|---|---|---|---|
| 1000 crvUSD | 2000 crvUSD| 1 ETH | 0 ETH | 1 ETH | 1x | 1000 crvUSD | 0 |
| 1000 crvUSD| 2000 crvUSD| 1 ETH | 1 ETH | 2 ETH | 2x | 2000 crvUSD | 1 ETH |
| 1000 crvUSD| 2000 crvUSD| 1 ETH | 2 ETH | 3 ETH | 3x | 3000 crvUSD | 2 ETH |

!!!warning "Warning"
    Multiplied profits from leverage also means multiplied loses when prices decrease.

## **Leverage Looping**

Anyone can create their own leverage in any lending market, let's see how it can be done:

![Leverage Looping](./../images/lending/leverage_simple.svg#only-light){: .centered }
![Leverage Looping](./../images/lending/leverage_simple.svg#only-dark){: .centered }

In the above example Alice can create her own leverage by simply continually depositing her WETH, borrowing crvUSD, swapping the borrowed crvUSD back to WETH, and then depositing the new WETH, and borrowing more crvUSD.  This process can be repeated as much as desired, but each time the user will loop less and less as the loan LTV is always less than 100%.

If 1 WETH is worth 3,000 crvUSD and the user has borrowed 6,000 crvUSD then that is called 2x leverage.

## **Built-in Leverage**

Some Curve Lending markets allow leverage without doing the looping strategy mentioned above.  This built-in leverage allows the user to achieve their desired leverage using a single transaction.  Only some lending markets have this functionality, below is a image of the lending UI which shows the WBTC market.  This market allows a leverage of up to 11x.  

![UI Leverage](./../images/ui/leverage.png){: .centered }

Built-in leverage works and can be used in the following way:

![UI Leverage](./../images/lending/leverage.svg){: .centered }

### **Depositing a combination of assets**

Instead of depositing only WETH, Curve Lending also lets Alice deposit crvUSD and WETH together.  If Alice chooses to do this, then any crvUSD she deposits will be added to the borrowed crvUSD and converted to WETH through 1inch before it's all deposited into the lending market, let's look at that quickly below.

![Leverage with a combination of assets](./../images/lending/add_both_leverage.svg){: .centered }

*Note: as Alice's total collateral is still worth 3,000 crvUSD (1,500 crvUSD + 0.5 WETH), with 5x leverage she still borrows 12,000 crvUSD (4x her deposited collateral).  Also, the repayments transaction and profit made in this instance work exactly the same as shown in the other image above as all the collateral is converted to WETH even though she deposited WETH and crvUSD together.*
