<h1>CRV Overview</h1>

The CRV token is the token for Curve DAO which governs the whole Curve Finance ecosystem. CRV was launched on August 13, 2020.

# **Utility**

There are 4 main use-cases for CRV, most require locked CRV (veCRV):

1. **Incentivizing liquidity providers** to provide liquidity to pools and lending markets through CRV rewards.  This is how CRV tokens are distributed to the community.
2. Allowing liquidity providers to **boost their CRV rewards** up to 2.5x by holding veCRV.
3. Allowing users to participate and **vote in governance proposals** including directing CRV emissions (gauge weight votes) through holding veCRV.
4. **Collecting a portion of the fees** from swaps and loans that occur on Curve through holding veCRV.

!!!info
    veCRV stands for **vote-escrowed CRV**, representing CRV tokens locked for voting in the Curve DAO.  Locked CRV, Vote-locked CRV and vote-escrowed CRV all mean veCRV, these terms are used interchangeably throughout the ecosystem.

    For information about how to lock see the [**locking guide**](../vecrv/locking-your-crv.md), or for more information about veCRV, see the [**veCRV page**](../vecrv/overview.md).

---

# **The CRV Matrix**

The table below can help you understand the value of CRV and veCRV in different situations

<style type="text/css">
.tg {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
.tg thead {
  display: contents;
}
.tg tbody {
  display: contents;
}
.tg tr {
  display: contents;
}
.tg th, .tg td {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
  padding: 4px;
  word-break: normal;
  text-align: center;
  vertical-align: bottom;
}
.tg .tg-hs62 {
  background-color: #9aff99;
  border-color: #656565;
  color: black;
}
.tg .tg-3lxi {
  border-color: #656565;
  font-size: 12px;
  font-weight: bold;
  vertical-align: bottom;
}
.tg .tg-kk90 {
  background-color: #9aff99;
  border-color: #656565;
  font-size: 12px;
  color: black;
}
.tg .tg-hkgo {
  border-color: #656565;
  font-weight: bold;
  color: black;
}
.tg .tg-jlsk {
  background-color: #ffccc9;
  border-color: #656565;
  color: black;
}
.tg .tg-gtpm {
  background-color: #ffccc9;
  border-color: #656565;
  font-size: 12px;
  color: black;
}
</style>
<table class="tg"><thead>
  <tr>
    <th class="tg-hkgo"></th>
    <th class="tg-3lxi">Liquidity in Pool &amp; no veCRV</th>
    <th class="tg-3lxi">Liquidity in Pool &amp; veCRV</th>
    <th class="tg-3lxi">Liquidity in Pool &amp; Staked in Gauge &amp; no veCRV</th>
    <th class="tg-3lxi">Liquidity in Pool &amp; Staked in Gauge &amp; veCRV</th>
    <th class="tg-3lxi">No Liquidity &amp; no veCRV</th>
    <th class="tg-3lxi">No Liquidity &amp; veCRV</th>
  </tr></thead>
<tbody>
  <tr>
    <td class="tg-xmch">Earns lending &amp; trading fees</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-gtpm"> No</td>
  </tr>
  <tr>
    <td class="tg-xmch">Earns CRV Emissions</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-gtpm"> No</td>
  </tr>
  <tr>
    <td class="tg-xmch">Earns boosted CRV Emissions</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-gtpm"> No</td>
  </tr>
  <tr>
    <td class="tg-xmch">Can vote on DAO Proposals</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-kk90"> Yes</td>
  </tr>
  <tr>
    <td class="tg-xmch">Can vote on Gauge Weight</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-kk90"> Yes</td>
  </tr>
  <tr>
    <td class="tg-xmch">Earns Admin Fees</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-hs62"> Yes</td>
    <td class="tg-jlsk"> No</td>
    <td class="tg-kk90"> Yes</td>
  </tr>
</tbody></table>


---


# **Locking Information**

When a user locks their CRV tokens for voting, they will receive veCRV based on the lock duration and the amount locked. Locking is **not reversible** and veCRV tokens are **non-transferable**. If a user decides to vote-lock their CRV tokens, they will only be able to **reclaim the CRV tokens after the lock duration has ended**.

Additionally, a user **cannot have multiple locks with different expiry dates**. However, a lock **can be extended**, or **additional CRV can be added** to it **at any time**.

## **CRV to veCRV formula**

When locking CRV to veCRV you are rewarded with an amount of veCRV based on how long you lock, the minimum time is 1 week, the maximum time is 4 years:

$$ \text{veCRV} = \frac{\text{CRV} \times \text{lockTime}}{4 \text{ years}} $$

The maximum duration of a lock is 4 years, users cannot lock for longer periods to keep the 1 CRV: 1 veCRV ratio, they must instead continue extending their lock.  Users can withdraw their CRV at any time after their veCRV has decayed to 0 (lock time has expired).

## **veCRV decay**

The amount of veCRV a user has will decay over time as their unlock date draws closer.  The `lockTime` parameter in the equation above should more aptly be called `lockTimeLeft` as a user's veCRV is constantly recalculated.  There are two ways a user can change their lock.  They can add to their lock or they can extend their lock.  What happens in both situations and how it affects their veCRV and the decay is shown in the charts below.

### **Extending Locks**

Extending locks means increasing the time left on a lock.  In the above example if Alice locked 100 CRV for 4 years, after 3 years she would only have 25 veCRV left as her lock time is now 1 year.  If she extended her lock to be 4 years again after these 3 years, she would again have 100 veCRV:

<canvas id="extendLockChart"></canvas>

### **Adding CRV to Locks**

Adding CRV to locks means the unlock date will remain the same, but more CRV will be locked, meaning more veCRV. If Alice locked 100 CRV for 4 years, but after 2 years added 200 CRV to her lock, she would have 150 veCRV (300 CRV total locked for 2 years).  This veCRV would continue to decay to 0 over the next 2 years:

<canvas id="addLockChart"></canvas>