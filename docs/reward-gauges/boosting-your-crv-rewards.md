This guide assumes the reader has already provided liquidity and is currently staking LP tokens on the DAO gauge.

One of the main incentives for CRV is the ability to boost rewards on provided liquidity. Vote locking CRV enables the acquisition of voting power to participate in the DAO and earn a boost of up to 2.5x on the liquidity provided on Curve.

For questions about how the vote locking boost works, click below:

[**Vote Locking**](../vecrv/vote-locking-boost.md)


:logos-youtube: **Boosting your CRV rewards**

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="https://storage.googleapis.com/curvedocs/boosting-rewards.mp4" type="video/mp4">
  </video>
</figure>

## **Figuring out the required boost**

The first step to getting rewards boosted is to determine the amount of CRV needed for lock. Each gauge has different requirements, meaning some pools are easier to boost than others. This depends on the amount others have locked and the liquidity gauge's capacity.

The calculator can be found at this address: [https://dao.curve.fi/minter/calc](https://dao.curve.fi/minter/calc)

## **Locking CRV**

After determining how much and for how long to lock, visit the following page: [https://dao.curve.fi/locker](https://dao.curve.fi/locker)

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MFA0rQI3SzfbVFgp3Ic%2F-MFw5TRvfmVRhy6M2vA0%2F-MFwBH-2tIa-f8oEODRQ%2Fimage.png?alt=media&token=9d7166c8-4231-4996-8fe2-27c0f7f4ae66)

Enter the amount to lock and select the expiry. Remember, locking is not reversible. The amount of veCRV received will depend on the amount and duration of the vote lock.

A lock can be extended, and CRV can be added to it at any point, but having CRV with different expiry dates is not possible.

After creating a lock, the next step is to apply the boost.

## **Applying the boost**

Proceed to the minter page: [https://dao.curve.fi/minter/gauges](https://dao.curve.fi/minter/gauges)

If the new boost is visible after 'Current boost:', then no further action is required.

If the current boost hasn't updated, it may be necessary to claim CRV from each of the gauges where liquidity is provided to update the boost. After doing so, the boost should be visible.

*The boost will not be updated until a withdrawal, deposit, or claim is made from a liquidity gauge.*


### **Boost Info**
The list of pools and boost/reward information has been relocated from the minter page. This information can now be found on each pool page on the classic.curve.fi site.

<figure markdown>
  ![](../images/classicdetails.png){ width="400" }
  <figcaption></figcaption>
</figure>

Alternatively, this information is also available in the new UI ([curve.fi](https://curve.fi/)) under the "Your Details" section on the pool page. Note: The new UI does not display future boost yet.

<figure markdown>
  ![](../images/yourdetails.png){ width="400" }
  <figcaption></figcaption>
</figure>

Visit the [**old**](https://classic.curve.fi/pools/?see=0x0000000000000000000000000000000000000000) or [**new**](https://curve.fi/#/ethereum/dashboard) dashboard to see all your pools!

## **Formula**

The boost mechanism calculates the **earning weight** by taking the smaller of two values. The first value is the amount of liquidity provided, for example, $10,000. This figure represents the maximum earning weight.

![](https://2254922201-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MFA0rQI3SzfbVFgp3Ic%2F-MJCjXQHNjiZe5hYKApB%2F-MJCjcm7RW7EuOXJC46E%2Fimage.png?alt=media&token=aca31750-4ae9-4ffd-991c-46cdccf2b374)
