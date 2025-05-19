<h1>Curve Pool Creation</h1>

The Curve pool creation interface allows any user to permissionlessly deploy a Curve pool. These pools can contain a variety of assets, including pegged tokens, unpegged tokens, and some pool tokens, for example 3crv. This interface supports deploying pools on most chains, although there might be some chains that are not supported yet.

!!!danger "Liquidity Pool Risks"
    Each liquidity pool brings risks with it. Before using or creating any pools, please read the [**Risk Disclaimer**](../risks-security/risks/pool.md).


[:logos-crv: `Pool Creation Interface`](https://curve.finance/#/ethereum/create-pool)


---

To get started, visit the [**`Pool Creation`**](https://curve.finance/#/ethereum/create-pool) tab at the top of the Curve homepage, and select whether you would like to create a "Stableswap Pool" (a pool with pegged assets, e.g., crvUSD <> USDT) or a "Cryptoswap Pool" (containing assets whose prices may be volatile, e.g., CRV <> ETH).


!!!info
    NG stands for New-Generation and represents enhanced and improved versions of prior implementations. All newly created pools are "new-generation pools".

<div class="grid cards" markdown>

-   **Stableswap**

    ---

    Stableswap pools are liquidity pools containing up to eight pegged assets, for example crvUSD <> USDT <> USDC.

    [:octicons-arrow-right-24: `Getting started`](./creating-a-stableswap-pool.md)

-   **Cryptoswap**

    ---

    Cryptoswap pools are liquidity pools containing two or three volatile assets, for example CRV <> ETH.

    [:octicons-arrow-right-24: `Getting started`](./creating-a-cryptoswap-pool.md)

</div>
