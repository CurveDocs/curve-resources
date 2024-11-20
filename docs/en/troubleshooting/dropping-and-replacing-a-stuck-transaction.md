A short tutorial on dropping and replacing a stuck Ethereum transaction.

You've submitted a transaction in Metamask and it just won't come through. Those gas estimates betrayed you and you're stuck looking at your pending transaction on Etherscan. It's happened to everyone and it's not pleasant but there's a fairly simple solution which most people will come to learn about.

This guide isn't Curve Finance specific but as gas prices are reaching new highs, stuck transactions are getting more common and knowing how to drop and replace is thus become more and more useful.

First and foremost, it's important to understand you can only do this if your transaction is pending. If it isn't your transaction cannot be cancelled anymore.

If you want to understand how this works, you should know that Ethereum transactions must be submitted with an incremental nonce. Each transaction has a nonce (a number) assigned to it and a number cannot be skipped. The way to replace and drop is to submit a new transaction with a higher gas price and the same nonce. This will tell the miners this more expensive transaction is the one that should be mined and your stuck transaction will be discarded.

## **Enable custom nonce in Metamask**

Visit Metamask and select "Settings", then "Advanced" and scroll down to find and enable "Customize transaction nonce".

![Metamask Settings](../images/metamask-settings.webp)

## **Finding your pending transaction nonce**

Visit your address on Etherscan and click on your pending transaction. If you scroll down you will find "Nonce":

![Etherscan Nonce](../images/etherscan-nonce.webp)

Write down this nonce and return to Metamask.

## **Replacing your transaction**

Now that you have your nonce, go back to Ethereum and send yourself 0 Ethereum, on the confirmation screen, type the nonce you got from Etherscan.

Make sure your gas price is suitable this time by checking [https://ethgasstation.info/](https://ethgasstation.info/) for example.

![Metamask Nonce](../images/metamask-settings.webp)

Confirm your transaction and that's it. Your 0 Ethereum transaction should be mined which will drop and replace your stuck transaction which you can confirm on Etherscan.
