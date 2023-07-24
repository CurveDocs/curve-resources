# Understanding Factory Pools

The Curve pool creation factory allows any user to permissionlessly deploy a Curve pool. These pools can contain a variety of assets, including pegged tokens, unpegged tokens, and metapools built off of other [base pools](/lp/base-and-metapools).

[Base & MetaPools](/lp/base-and-metapools)

Keep in mind a few points about all pools:

*   Destroying Curve pools once deployed is not possible
*   Curve is not responsible for any of the assets going in there so you must do your own research when trading in the pool factory. The Curve team and DAO also have no control over the tokens added in the factory which means you must verify the token addresses you trade on there.
*   The only admin change that can be made by the Curve DAO is ramping the A (amplification) parameter
*   Tokens with more than 18 decimals are not supported
*   After deploying a pool, you must seed initial liquidity if you want users to interact with it.
*   Pools will only display on the homepage by default if their TVL is not below the threshold of what is considered "small."

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MFA0rQI3SzfbVFgp3Ic%2Fuploads%2FG8vaDTHGU7qj5zSpO8tI%2Fimage.png?alt=media&token=b0c99e15-473c-4ccc-a210-84798a2096c0)

> ​[https://curve.fi/#/ethereum/create-pool](https://curve.fi/#/ethereum/create-pool)​

To get started, visit the "[Pool Creation](https://curve.fi/#/ethereum/create-pool)" tab at the top of the Curve homepage, and select whether you would like to create a "Stableswap Pool" (a pool with pegged assets) or a "Cryptoswap Pool" (containing assets whose prices may be volatile).

[Creating a Stableswap Pool](/factory-pools/creating-a-factory-pool)

[Creating a Cryptoswap Pool](/factory-pools/creating-a-cryptoswap-pool)

Note some sidechains may not yet support a stableswap or cryptoswap pool factory.
