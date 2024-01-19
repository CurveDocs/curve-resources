---
hide:
  - toc
---


:logos-youtube: **How to lock CRV**

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="https://storage.googleapis.com/curvedocs/staking-crv.mp4" type="video/mp4">
  </video>
</figure>

!!! warning
    When a user locks their CRV tokens for voting, they will receive veCRV based on the lock duration and the amount locked. Locking is **not reversible** and veCRV tokens are **non-transferable**. If a user decides to vote-lock their CRV tokens, they will only be able to **reclaim the CRV tokens after the lock duration has ended**.

    Additionally, a user **cannot have multiple locks with different expiry dates**. However, a lock **can be extended**, or **additional CRV can be added** to it **at any time**.


Users must specify the amount of CRV they wish to lock and their preferred lock duration. The minimum lock period is **one week**, while the maximum is **four years**. The amount of veCRV **linearly decays over time**, reaching 0 when the lock duration ends.


*To lock some CRV token, visit either the [old](https://dao.curve.fi/locker) or [new](https://curve.fi/#/ethereum/locker/create)​ user-interface.*

<figure markdown>
  ![CRV Locker](../images/locker-old.png){ width="500" }
  <figcaption>old UI</figcaption>
</figure>

<figure markdown>
  ![CRV Locker](../images/locker.png){ width="300" }
  <figcaption>new UI</figcaption>
</figure>


!!!tip
    **The amount of veCRV received per CRV when locking depends on the duration of the lock.** To calculate the amount of veCRV to receive, multiply the amount of CRV by (n/4), where **`n`** is the lock time denominated in years.