<h1>Vote-escrowed CRV (veCRV)</h1>

veCRV is an acronym for **vote-escrowed CRV**.  A contract called voting escrow holds the CRV for the time period a user locks for, in return the user is given veCRV.  **veCRV is not transferrable**.

**Locking was a concept created to align incentives for governance**.  Many coin voting systems have a problem where someone can buy tokens off the market to influence a governance vote, then sell the tokens after the vote passed/failed.  These users can influence governance votes greatly and only take minimal risk by holding tokens for a few days.  Locking stops this happening.  Users must lock their tokens for a period of time to receive voting power, and users are rewarded with more voting power if they lock their tokens for a longer period of time.

To find out how to lock see the guide here: [lock CRV tokens](./locking-your-crv.md)

!!!info
    The amount of veCRV shown as a statistic in various places is not a true reflection of the amount of locked CRV.  As 1 veCRV does not equal 1 CRV due to locking time and decay.  Read the [locking information](#locking-information) section of this page for more information

## **veCRV Benefits**

Users with veCRV are given the following benefits:

### **Governance**

The veCRV balance represents the voting power of a user in the Curve DAO, which allows them to **vote on on-chain proposals**. Additionally, a crucial part of Curve governance are **gauge weight votes**. Curve token emissions are created in a way that allows **veCRV holders to choose how future emissions are allocated**. Liquidity pools on Curve can be added to the GaugeController via a successfully passed DAO vote, making them eligible to receive CRV token emissions. The gauge weights determine how much CRV each pool receives. Every **Thursday at 00:00 UTC**, the updated gauge weights are applied.  More info on [Voting](../governance/voting.md) and [Gauge Weights](../reward-gauges/gauge-weights.md)


### **Earning Fees**

After 2 community-led proposals and subsequent governance votes in September 2020 (Link to votes: [[1]](https://curvemonitor.com/#/dao/proposal/parameter/2), [[2]](https://curvemonitor.com/#/dao/proposal/parameter/3)), the admin fees of Curve pools were set to 50%, this means **50% of all trading fees are distributed to veCRV holders**, while the remaining 50% goes to the respective liquidity providers of the pools. This distribution was implemented to align the incentives between liquidity providers and governance participants (veCRV holders). Additionally, since the launch of Curve's own stablecoin (crvUSD), **100% of the accrued interest from crvUSD markets** also goes to veCRV holders.  veCRV holders don't receive any direct value from lending markets, but they do receive indirect value from increasing crvUSD supply.

All collected fees are converted to `crvUSD`  and distributed among veCRV holders. See [Claiming Trading Fees](../fee-collection-distribution/claiming-trading-fees.md) for how to claim, or [Fee Collection & Distribution](../fee-collection-distribution/overview.md) for how they are collected.

### **Boosting CRV Rewards**

One of the primary incentives for vote-locking is the **boost mechanism**. Users who provide liquidity to a swap pool and/or lending market with a reward gauge and have some vote-locked CRV **receive boosted CRV rewards**.  See [Boosting your CRV rewards](../reward-gauges/boosting-your-crv-rewards.md) for more information.

---

## **Locking Information**

When a user locks their CRV tokens for voting, they will receive veCRV based on the lock duration and the amount locked. Locking is **not reversible** and veCRV tokens are **non-transferable**. If a user decides to vote-lock their CRV tokens, they will only be able to **reclaim the CRV tokens after the lock duration has ended**.

Additionally, a user **cannot have multiple locks with different expiry dates**. However, a lock **can be extended**, or **additional CRV can be added** to it **at any time**.

### **CRV to veCRV formula**

When locking CRV to veCRV you are rewarded with an amount of veCRV based on how long you lock, the minimum time is 1 week, the maximum time is 4 years:

$$ \text{veCRV} = \frac{\text{CRV} \times \text{lockTime}}{4 \text{ years}} $$

For example this means:

- 1 CRV locked for 4 years = 1 veCRV
- 1 CRV locked for 3 years = 0.75 veCRV
- 1 CRV locked for 2 years = 0.5 veCRV
- 1 CRV locked for 1 years = 0.25 veCRV

The maximum duration of a lock is 4 years, users cannot lock for longer periods to keep the 1 CRV: 1 veCRV ratio, they must instead continue extending their lock.  Users can withdraw their CRV at any time after their veCRV has decayed to 0 (lock time has expired).

### **veCRV decay**

The amount of veCRV a user has will decay over time as their unlock date draws closer.  The `lockTime` parameter in the equation above should more aptly be called `lockTimeLeft` as a user's veCRV is constantly recalculated.  There are two ways a user can change their lock.  They can add to their lock or they can extend their lock.  What happens in both situations and how it affects their veCRV and the decay is shown in the charts below.

#### **Extending Locks**

Extending locks means increasing the time left on a lock.  In the above example if Alice locked 100 CRV for 4 years, after 3 years she would only have 25 veCRV left as her lock time is now 1 year.  If she extended her lock to be 4 years again after these 3 years, she would again have 100 veCRV:

<canvas id="extendLockChart"></canvas>

#### **Adding CRV to Locks**

Adding CRV to locks means the unlock date will remain the same, but more CRV will be locked, meaning more veCRV. If Alice locked 100 CRV for 4 years, but after 2 years added 200 CRV to her lock, she would have 150 veCRV (300 CRV total locked for 2 years).  This veCRV would continue to decay to 0 over the next 2 years:

<canvas id="addLockChart"></canvas>

---

## **External veCRV Incentives**

External marketplaces (out of Curve's purview) have been created to pay for users to vote for specific swap pools/lending markets and receive rewards in return.  Curve does not condone or condemn such marketplaces or behavior.  It is within the users' rights to use these marketplaces as they wish.

These incentives can be very lucrative and can be multiples of the platform fees earned by veCRV weekly.

These incentives work in the following way:

1. A project wants liquidity for their token in a swap pool on Curve
2. The project puts up a incentive for users to vote for the swap pool in the weekly gauge vote.  This incentive can be of any amount in any token, e.g., $100k in ETH.
3. If users vote for the pool, they receive a portion of the incentive based on how much veCRV they have, and how much voted for the pool total.  

    e.g., 2 users vote for the pool Alice and Bob.  Alice has 100k veCRV, Bob has 900k veCRV.  The total which voted for the pool was 1M.  The $100k ETH get split between Alice and Bob based on their veCRV, so Alice gets $10k in ETH, Bob gets $90k in ETH.

## **External CRV Liquid Lockers**

CRV liquid lockers are products outside of the Curve platform.  Some projects have created ways of locking 1 CRV for 1 veCRV forever and giving the user another token in return, e.g., tokenCRV (this token doesn't exist, it was just created for this example).  Most of these tokens like tokenCRV don't have all of the benefits of normal veCRV.  Also, as all the designs revolve around locking forever, there is no way of getting deposited CRV out of their systems.  The user must trade their tokenCRV back to normal CRV on the open market.  These tokens are always worth less than 1 CRV.  

These tokens are risky, the only way to guarantee being able to withdraw the same amount of CRV as is deposited is to lock through the [Official Curve Locker UI](https://dao.curve.fi/locker).


<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation"></script>


<script>
    // Get today's date
    const today = new Date();
    const endDate = new Date(today);
    const relockDate = new Date(today);
    relockDate.setFullYear(today.getFullYear() + 3);
    endDate.setFullYear(today.getFullYear() + 7);

    // Generate data points every 7 days
    let data = [];
    let currentDate = new Date(today);
    
    while (currentDate <= relockDate) {
        const x = (currentDate - today) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
        const veCRV = 100 - 100*x / (4 * 365);
        data.push({ x: currentDate.toISOString().split('T')[0], y: veCRV});
        currentDate.setDate(currentDate.getDate() + 7);
    }
    currentDate.setDate(currentDate.getDate() - 7);
    while (currentDate <= endDate) {
        const x = (currentDate - relockDate) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
        const veCRV = Math.min(100 - 100*x / (4 * 365), 100);
        data.push({ x: currentDate.toISOString().split('T')[0], y: veCRV});
        currentDate.setDate(currentDate.getDate() + 7);
    }
    

    // Create the chart
    const ctx = document.getElementById('extendLockChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'veCRV Percentage',
                data: data,
                borderColor: 'blue',
                fill: false,
                pointRadius: 0,
                pointHoverRadius: 10,
                pointHitRadius: 10
            }]
        },
        options: {
            plugins: {
                annotation: {
                    common: {
                        drawTime: 'beforeDatasetsDraw'
                    },
                    annotations: [{
                        type: 'line',
                        scaleID: 'x',
                        value: relockDate,
                        borderColor: 'red',
                        borderWidth: 2,
                        borderDash: [3,3],
                        label: {
                            backgroundColor: 'red',
                            borderRadius: 0,
                            color: 'white',
                            content: (ctx) => ['Extend lock for 4 years'],
                            display: true,
                            position: 'end'
                        }
                    }]
                },
                title: {
                    display: true,
                    text: 'veCRV decay for 100 CRV locked for 4 years with lock extended after 3 years for 4 more years'
                },
                legend: {
                    display: false
                },
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: (context) => {
                            const date = new Date(context[0].parsed.x);
                            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
                        },
                        label: (context) => {
                            return `100 CRV = ${context.parsed.y.toFixed(1)} veCRV`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month'
                    },
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'veCRV'
                    }
                }
            }
        }
    });
</script>

<script>
    const addLockDate = new Date(today);
    endDate.setFullYear(today.getFullYear() + 4);
    addLockDate.setFullYear(today.getFullYear() + 2);

    // Generate data points every 7 days
    data = [];
    currentDate = new Date(today);
    
    while (currentDate <= addLockDate) {
        const x = (currentDate - today) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
        const veCRV = 100 - 100*x / (4 * 365);
        data.push({ x: currentDate.toISOString().split('T')[0], y: veCRV});
        currentDate.setDate(currentDate.getDate() + 7);
    }
    currentDate.setDate(currentDate.getDate() - 7);
    while (currentDate <= endDate) {
        const x = (currentDate - addLockDate) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
        const veCRV = Math.min(150 - 150*x / (2 * 365), 150);
        data.push({ x: currentDate.toISOString().split('T')[0], y: veCRV});
        currentDate.setDate(currentDate.getDate() + 7);
    }
    

    // Create the chart
    const addLockCtx = document.getElementById('addLockChart').getContext('2d');
    new Chart(addLockCtx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'veCRV Percentage',
                data: data,
                borderColor: 'blue',
                fill: false,
                pointRadius: 0,
                pointHoverRadius: 10,
                pointHitRadius: 10
            }]
        },
        options: {
            plugins: {
                annotation: {
                    common: {
                        drawTime: 'beforeDatasetsDraw'
                    },
                    annotations: [{
                        type: 'line',
                        scaleID: 'x',
                        value: addLockDate,
                        borderColor: 'green',
                        borderWidth: 2,
                        borderDash: [3,3],
                        label: {
                            backgroundColor: 'green',
                            borderRadius: 0,
                            color: 'white',
                            content: (addLockCtx) => ['Add 200 CRV to lock'],
                            display: true,
                            position: 'end'
                        }
                    }]
                },
                title: {
                    display: true,
                    text: 'veCRV decay for 100 CRV locked for 4 years with 200 CRV added to lock after 2 years'
                },
                legend: {
                    display: false
                },
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: (context) => {
                            const date = new Date(context[0].parsed.x);
                            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
                        },
                        label: (context) => {
                            return `100 CRV = ${context.parsed.y.toFixed(1)} veCRV`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month'
                    },
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'veCRV'
                    }
                }
            }
        }
    });
</script>