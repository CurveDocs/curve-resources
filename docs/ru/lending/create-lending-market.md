<h1>Создание Кредитных Рынков</h1>

## **Создание Пула (Creating a Pool)** {#creating-a-pool}

Перед тем как приступить к созданию кредитного рынка, должен существовать пул Curve для АКТИВА (ASSET), парного с crvUSD, который реализует нечувствительный к манипуляциям оракул цен. Пулы с нечувствительными к манипуляциям оракулами включают следующие:

- [twocrypto-ng](https://docs.curve.fi/references/deployed-contracts/#twocrypto-ng) — для 2 не привязанных активов, например, crvUSD/CRV
- [tricrypto-ng](https://docs.curve.fi/references/deployed-contracts/#tricrypto-ng) — для 3 не привязанных активов, например, crvUSD/WETH/CRV
- [stableswap-ng](https://docs.curve.fi/references/deployed-contracts/#stableswap-ng) — для 2 привязанных активов, например, crvUSD/USDC

!!!info "Пользовательские Оракулы Цен"
    Если пул ASSET/WETH более предпочтителен, чем пул ASSET/crvUSD, можно связать цену ASSET/WETH с ценой WETH/crvUSD, используя пользовательский оракул цен. Это затем можно использовать для создания кредитного рынка. Пожалуйста, свяжитесь с командой в Telegram, если это необходимо.

Самый простой способ создать пул — через официальный интерфейс создания пула [Create Pool UI](https://curve.fi/#/ethereum/create-pool).

Доступны руководства по созданию [stableswap-ng пула](../factory-pools/creating-a-stableswap-ng-pool.md), [twocrypto-ng пула](../factory-pools/creating-a-twocrypto-ng-pool.md) и [tricrypto-ng пула](../factory-pools/creating-a-tricrypto-ng-pool.md).

---

## **Создание Кредитного Рынка (Creating a Lending Market)** {#creating-a-lending-market}

Для создания кредитного рынка используйте методы `create` или `create_from_pool` в смарт-контракте `OneWay Lending Factory`, чтобы развернуть все необходимые контракты и установить все параметры. Адреса `OneWay Lending Factory` для различных сетей можно найти [здесь](https://docs.curve.fi/references/deployed-contracts/#curve-lending). Для этого шага нет пользовательского интерфейса, его необходимо выполнить через Etherscan или вручную.

Для развертывания кредитного рынка с использованием метода `create_from_pool` после создания пула используется следующий уникальный параметр:

- `pool`: адрес пула, который включает как `borrowed_token`, так и `collateral_token`.

Для развертывания кредитного рынка с использованием метода `create` с пользовательским оракулом используется следующий уникальный параметр:

- `price_oracle`: адрес смарт-контракта пользовательского оракула цен

Затем для обоих методов необходимо предоставить следующие дополнительные параметры:

- `borrowed_token`: адрес токена, который будет предоставлен и заимствован
- `collateral_token`: адрес токена, который будет использоваться как залог
- [`A`](#amplification-factor-a): коэффициент усиления, большинство рынков используют значение между 10-30. Используйте более низкие значения для рискованных активов.  
  Вводится как обычное число, например, 10 = 10
- `fee`: комиссия AMM за обмен, большинство пулов используют от 0.3-1.5%.  
  Вводится как число с основанием $10^{18}$, например, 0.06% = 6000000000000000.
- [`loan_discount`](#loan-discount): процент, используемый для скидки залога при расчете максимального LTV. Обычно выше, чем `liquidation_discount` на 3-4%.  
  Вводится как число с основанием $10^{18}$, например, 11% = 110000000000000000.
- [`liquidation_discount`](#liquidation-discount): процент, используемый для скидки залога при расчетах здоровья и жёсткой ликвидации. Обычно ниже, чем `loan_discount` на 3-4%.  
  Вводится как число с основанием $10^{18}$, например, 8% = 80000000000000000.
- `name`: название рынка

Наконец, следующие параметры являются **опциональными** для обоих методов. Если они не предоставлены, они устанавливаются на значения по умолчанию, заданные CurveDAO:

- [`min_borrow_rate`](#borrowing-interest-rates): минимальная ставка заимствования, как ставка/сек.  
  Вводится как число с основанием $10^{18}$, например, 1% APR = 317097919
- [`max_borrow_rate`](#borrowing-interest-rates): максимальная ставка заимствования, как ставка/сек.  
  Вводится как число с основанием $10^{18}$, например, 80% APR = 25367833587

!!!warning "Внимание"
    Параметры заданы в разных форматах: `A` задается как есть, например, 30 = 30, но другие, такие как `loan_discount`, задаются как число с основанием $10^{18}$, например, 11% = 110000000000000000.

Использование `OneWay Lending Factory` добавит пул в Curve UI и развернет все необходимые контракты для функционирования рынка.

---

## **CRV Вознаграждения и другие Стимулы для Поставщиков Ликвидности** {#crv-rewards-and-other-incentives-for-suppliers}

### **Развертывание Gauge (Счётчика вознаграждений)** {#deploying-a-gauge}

**Кредитный рынок Curve требует наличие gauge (Счётчика вознаграждений)**, связанного с хранилищем поставок (supply vault), **перед тем как поставщики смогут застейкать свои [доли хранилища](./overview.md#supply-vault-share-tokens) для получения инцентивов/вознаграждений**. Gauge можно легко развернуть через `OneWay Lending Factory`, вызвав метод `deploy_gauge` и предоставив адрес нового контракта `vault`. **Любой может развернуть gauge** для рынка, у которого его нет.

### **Получение CRV вознаграждений из еженедельных эмиссий** {#receiving-crv-rewards-from-weekly-emissions}

Перед тем как gauge станет доступным для получения CRV из еженедельных эмиссий, его необходимо добавить в смарт-контракт `Gauge Controller`, который развернут на Ethereum [здесь](https://etherscan.io/address/0x2F50D538606Fa9EDD2B11E2446BEb18C9D5846bB). Для добавления в `Gauge Controller` CurveDAO должна проголосовать за добавление gauge кредитного рынка. См. [здесь](../reward-gauges/creating-a-pool-gauge.md#submit-a-dao-vote) для информации о том, как создать голосование за добавление gauge в `Gauge Controller`.

Как только кредитный рынок Curve будет добавлен в `Gauge Controller` и получит некоторый [вес gauge](../reward-gauges/gauge-weights.md), поставщики ликвидности будут получать CRV вознаграждения при стейкинге своих [долей хранилища](./overview.md#supply-vault-share-tokens) в gauge.

### **Добавление других Стимулов для Поставщиков Ликвидности** {#adding-other-incentives-for-suppliers}

Развертыватель (deployer) кредитного рынка Curve получает роль `manager`. `Manager` может добавлять токены вознаграждений в пул через метод `add_reward` в gauge кредитного рынка. После добавления токена, `manager` может депонировать токен, используя метод `deposit_reward_token`. Токены затем распределяются среди застейканных поставщиков в gauge в течение указанного периода.

---

## **Параметры Развертывания Кредитного Рынка** {#lending-market-deployment-parameters}

### **Коэффициент Усиления (A) (Amplification Factor A)** {#amplification-factor-a}

Коэффициент усиления `A` определяет ширину полос (band width), см. формулу ниже и более подробную информацию [здесь](../crvusd/loan-concepts.md#bands-n) и апплет [здесь](../crvusd/loan-concepts.md#band-calculator). `A` также является частью расчета максимального LTV рынка, см. секцию [`loan_discount`](#loan-discount).

$$\text{band_width} \approx \frac{\text{price}}{\text{A}}$$

### **Скидка на Займ (Loan Discount)** {#loan-discount}

`loan_discount` используется для определения максимального LTV (loan-to-value), который пользователь может иметь на кредитном рынке. На момент написания значение варьируется от 7% для WETH до 33% для волатильных и менее ликвидных активов, таких как UwU. Используйте калькулятор [здесь](../crvusd/loan-concepts.md#loan-discount), чтобы увидеть максимальные LTV, которые пользователь может иметь на основе `loan_discount`, коэффициента усиления `A` и количества полос `N`. Формула:

$$\text{max_LTV} = 1 - \text{loan_discount} - \frac{N}{2*A}$$

### **Скидка на Ликвидацию (Liquidation Discount)** {#liquidation-discount}

`liquidation_discount` определяет, насколько нужно снизить стоимость залога для целей расчета здоровья займа при жёсткой ликвидации. Обычно это на 3-4% меньше, чем `loan_discount`. Пользователь подлежит жёсткой ликвидации, когда его здоровье ниже 0%, и `liquidation_discount` является неотъемлемой частью расчета здоровья займа. См. [здесь](../crvusd/loan-concepts.md#loan-health) для дополнительной информации.

### **Процентные Ставки Заимствования (Borrowing Interest Rates)** {#borrowing-interest-rates}

При создании рынка создатель должен определить `min_borrow_rate` и `max_borrow_rate` рынка. Используйте инструмент ниже, чтобы симулировать, как [утилизация](./overview.md#utilization-rate) влияет на процентные ставки заимствования и кредитования. В смарт-контрактах ставки задаются как **процент за секунду**, преобразование желаемого `APR` в `borrow_rate` в процентах за секунду осуществляется следующим образом:

$$\text{borrow_rate} = \frac{\text{APR}}{\text{seconds_in_year}} = \frac{\text{APR}}{86400 \times 365}$$

<div style="border: 1px solid #ccc; padding: 20px; margin-bottom:0;">
<h3>Калькулятор Ставок (Rate Calculator)</h3>
<h4>Вводные Данные:</h4>
<div class="input">
<div style="display: flex; align-items: center; justify-content: center; font-size: 16px;">
    <label for="rateMinInput" style="margin-right: 10px;">Min Borrow APR % :</label>
    <input type="number" id="rateMinInput" min="0" max="1000" step="1" value="0.5" style="font-size: 16px; width: 80px;">
    <label for="rateMaxInput" style="margin-left: 20px; margin-right: 10px;">Max Borrow APR % :</label>
    <input type="number" id="rateMaxInput" min="0" max="1000" step="1" value="50" style="font-size: 16px; width: 80px;">
</div>
<h4>График Утилизации (Utilization Chart)</h4>
<canvas id="interestRateChart"></canvas>
</div>
<div class="collapsible-table">
  <h4 class="collapsible-heading">
    Таблица Утилизации (Utilization Table)
    <span class="expand-text"></span>
  </h4>
  <div id="dataTable" class="md-typeset__table"></div>
</div>
</div>



<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation"></script>

<script>

document.addEventListener("change", function (event) {
    if (event.target.matches('input[name="__palette"]')) {
      location.reload();
    }
  });

function isUserDarkmode() {
  var colorScheme = document.querySelector('body').getAttribute('data-md-color-scheme');
  return colorScheme === 'slate';
}

let rateChart = null;
let tableData = [];

 function updateAll() {
    updateRateGraph();
    updateTable();
}

document.addEventListener('DOMContentLoaded', function() {
    updateAll(); // Рисуем начальный график ставок с дефолтными значениями

    // график ставок
    const rateMinInput = document.getElementById('rateMinInput');
    const rateMaxInput = document.getElementById('rateMaxInput');
    rateMinInput.addEventListener('change', updateAll);
    rateMaxInput.addEventListener('change', updateAll);
});

function updateRateGraph() {
    const rateMin = parseFloat(document.getElementById('rateMinInput').value)/100;
    const rateMax = parseFloat(document.getElementById('rateMaxInput').value)/100;
    let borrowDataPoints = [];
    let lendDataPoints = [];
    tableData = [];

    for (let u = 0; u <= 1.01; u += 0.01) {
        let borrowRate = rateMin * Math.pow((rateMax / rateMin), u);
        let lendRate = u * rateMin * Math.pow((rateMax / rateMin), u);
        borrowDataPoints.push({x: u * 100, y: borrowRate * 100});
        lendDataPoints.push({x: u * 100, y: lendRate * 100});
        
        // Добавляем данные в массив таблицы (округлено до 2 знаков после запятой)
        tableData.push({
            utilization: (u * 100).toFixed(2),
            borrowAPR: (borrowRate * 100).toFixed(2),
            lendAPR: (lendRate * 100).toFixed(2),
            spread:  ((borrowRate-lendRate) * 100).toFixed(2)
        });
    }

    const ctx = document.getElementById('interestRateChart').getContext('2d');

    const data = {
        datasets: [
            {
                label: 'Borrow APR',
                data: borrowDataPoints,
                borderColor: 'rgba(75, 192, 192, 0.9)',
                fill: false,
                pointRadius: 0,
                showLine: true,
                borderWidth: 2,
            },
            {
                label: 'Lend APR',
                data: lendDataPoints,
                borderColor: 'rgba(255, 99, 132, 0.9)',
                fill: false,
                pointRadius: 0,
                showLine: true,
                borderWidth: 2,
            }
        ]
    };

    const config = {
        type: 'scatter',
        data: data,
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Утилизация (%)'
                    },
                    max: 100
                },
                y: {
                    title: {
                        display: true,
                        text: 'APR (%)'
                    },
                    beginAtZero: true
                }
            },
            interaction: {
                mode: 'nearest',
                intersect: false,
                axis: 'x'
            },
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    filter: function(tooltipItem) {
                        return tooltipItem.datasetIndex === 0;
                    },
                    enabled: true,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    bodyColor: '#ffffff',
                    bodyFont: {
                        size: 12,
                    },
                    borderColor: 'rgba(0, 0, 0, 0.7)',
                    borderWidth: 1,
                    usePointStyle: false,
                    padding: 4,
                    displayColors: false,
                    callbacks: {
                        title: function() {
                            return '';
                        },
                        label: function(context) {
                            const utilization = context.parsed.x.toFixed(2);
                            const borrowRate = context.chart.data.datasets[0].data[context.dataIndex].y.toFixed(2);
                            const lendRate = context.chart.data.datasets[1].data[context.dataIndex].y.toFixed(2);
                            return [
                                `Утилизация: ${utilization}%`,
                                `Borrow APR: ${borrowRate}%`,
                                `Lend APR: ${lendRate}%`
                            ];
                        }
                    }
                },
            },
            legend: {
                position: 'bottom'
            }
        }     
    };

    if (rateChart) {
            rateChart.destroy();
    }
        rateChart = new Chart(ctx, config);
    }
  
   function updateTable() {
    // Создаем и заполняем таблицу
    const tableContainer = document.getElementById('dataTable');
    let csv = `Utilization; Borrow APR; Lend APR; Spread`;
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Утилизация (%)</th>
                    <th>Borrow APR (%)</th>
                    <th>Lend APR (%)</th>
                    <th>Spread (%)</th>
                </tr>
            </thead>
            <tbody>
    `;


    for (let i = 0; i < tableData.length; i++) {
        if (i % 5 === 0) { // Добавляем строки только для каждого 5% шага
            const row = tableData[i];
            csv += `${row.utilization};${row.borrowAPR};${row.lendAPR};${row.spread}`;
            tableHTML += `
                <tr>
                    <td>${row.utilization}</td>
                    <td>${row.borrowAPR}</td>
                    <td>${row.lendAPR}</td>
                     <td>${row.spread}</td>
                </tr>
            `;
        }
    }

    tableHTML += `
            </tbody>
        </table>
    `;

   tableContainer.innerHTML = tableHTML;
   console.log(csv);
   }
 
</script>

<style>
  .collapsible-heading {
    cursor: pointer;
    margin-bottom: 0;
    display: flex;
    align-items: center;
  }
  .collapsible-heading::after {
    content: '\25BC';
    margin-left: 0.5em;
    display: inline-block;
    transition: transform 0.15s ease-in-out;
  }
  .collapsible-heading.collapsed::after {
    transform: rotate(-90deg);
  }
  .collapsible-table.collapsed #dataTable {
    display: none;
  }
  .expand-text {
    font-weight: normal;
    color: grey;
    font-size: 0.8em;
    margin-left: 0.3em;
    order: 1;
  }
  .collapsible-heading::after {
    order: 0;
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const heading = document.querySelector('.collapsible-heading');
  const table = document.querySelector('.collapsible-table');
  const expandText = heading.querySelector('.expand-text');
  
  // Устанавливаем начальное состояние как свернутое и устанавливаем начальный текст
  table.classList.add('collapsed');
  heading.classList.add('collapsed');
  expandText.textContent = '(click to expand)';

  heading.addEventListener('click', function() {
    table.classList.toggle('collapsed');
    heading.classList.toggle('collapsed');
    
    // Обновляем текст разворачивания/свертывания
    expandText.textContent = table.classList.contains('collapsed') ? '(click to expand)' : '(click to collapse)';
  });
});
</script>

