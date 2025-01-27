In order to use Curve on chains other than Ethereum, you will need to _bridge_ funds to the sidechain. Curve operates on several chains, documented here:

[Understanding Cross-chain](../cross-chain/overview.md)

Bridges are not operated by Curve, so Curve cannot offer support for using bridges. The following issues may affect users of bridges, so make sure to do research and exercise caution.

*   **Liquidity issues:** Sometimes bridges do not have enough liquidity to process transactions. Usually the bridge will wait to refill liquidity before it permits funds getting processed.
*   **Stuck funds:** Occasionally funds will get moved off one chain, but fail to appear on the new chain in a timely manner. Sometimes this gets resolved by simply waiting. In extreme cases, you should contact the support channels for the bridge in question.
*   **Hacking:** Cross-chain communication can be complex, and the bridge is
