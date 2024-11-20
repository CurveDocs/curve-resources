<h1>Стратегии и Управление Займами</h1>

Перед тем как взять займ в crvUSD, пользователь должен учитывать два фактора, которые будут влиять на структуру его займа:

* Какой уровень риска он готов принять?
* Какой стиль управления он будет применять? Будет ли он активно управлять своим займом, то есть добавлять или удалять залог и погашать долг, или будет пассивно брать займ и оставлять его на усмотрение [LLAMMA's](./loan-concepts.md#llamma-and-liquidations) (LLAMMA)?

Риски и стили управления можно рассматривать как спектры, и они могут быть визуализированы на изображении ниже.

![Стратегии займа](../images/crvusd/loan_strategies.svg#only-light){: .centered }
![Стратегии займа](../images/crvusd/loan_strategies_dark.svg#only-dark){: .centered }

Вышеуказанное изображение показывает 4 основных квадранта:

* **Высокий риск и пассивный**: Это опасная стратегия. Пользователи, применяющие эту стратегию, обычно берут максимальный займ и вносят минимальные изменения в займ до его закрытия или жёсткой ликвидации (hard-liquidated). Некоторым пользователям везёт и они получают прибыль, но многие подвергаются жёсткой ликвидации. Используйте на свой страх и риск.
* **Высокий риск и активный**: Пользователи с такими займами занимают сумы близкие к максимально допустимым и активно управляют позицией, добавляют и удаляют залог, а также долг по мере необходимости, чтобы поддерживать здоровье займа (health).
* **Осторожный и пассивный**: Эти займы обычно имеют низкие коэффициенты LTV (Loan-To-Value ratio), поэтому их диапазоны мягкой ликвидации (soft-liquidation ranges) значительно ниже текущей цены. Эти займы обычно не требуют внимательного управления, и пользователям требуется контролировать свои займы только после значительных изменений цен.
* **Осторожный и активный**: Пользователи занимают на низких коэффициентах LTV, но активно управляют займами, добавляя и удаляя капитал и долг по мере необходимости, чтобы избегать мягкой ликвидации.

Примеры займов для каждого из 4 квадрантов приведены в [разделе примеров займов здесь](#loan-examples). Раздел непосредственно ниже показывает потери от мягкой ликвидации на основе пользовательских данных, чтобы потенциальные пользователи могли оценить потери.

!!!warning "Активное управление займами требует много газа"
    Активное управление займами дорогостояще, если учитывать использование газа. Размер займа должен быть достаточным, чтобы компенсировать эти расходы. В общем случае, допускается примерно \$USD ≈ gasPrice × 4 для добавления залога или погашения долга, например, если gasPrice составляет 10 gWei, допускается \$40 для добавления залога или погашения долга.

---

# **Потери от Мягкой Ликвидации** {#soft-liquidation-losses}

Данные всех займов crvUSD до сих пор показали, что для каждого диапазона полос (band range) пользователь может ожидать следующие потери в таблице ниже. Сумма потерь, похоже, не зависит от используемого залогового актива (collateral asset) (например, потери от wBTC кажутся очень похожими на потери от wstETH). Диапазон полос был самым значительным фактором, влияющим на результаты пользователя. Гистограмма и таблица ниже показывают, что **потери от мягкой ликвидации (soft-liquidation losses) обычно очень низкие**, но имейте в виду, что периоды высокой волатильности (volatility) могут вызвать потери с двузначными процентами.

*Примечание: вы можете показывать и скрывать любые диапазоны полос, щёлкая по ним в легенде*.

<div style="display: flex; flex-direction: column; align-items: center;">
    <div style="display: flex; justify-content: center; margin-top: 10px;">
        <label style="margin: 0 10px;">
            <input type="checkbox" id="percentageCheckbox" checked>
            Использовать процент данных для оси Y
        </label>
        <label style="margin: 0 10px;">
            <input type="checkbox" id="timeCheckbox">
            Использовать дни данных (время) для оси Y
        </label>
    </div>
    <canvas id="softLiqHistogram"></canvas>
</div>

<div class="centered" markdown="block">
| диапазон полос | дни данных мягкой ликвидации | мин. потеря/день | медианная потеря/день | средняя потеря/день | стандартное отклонение потеря/день | макс. потеря/день |
|----------------|-----------------------------|-------------------|-----------------------|---------------------|-------------------------------------|---------------------|
| **4-9**        | 4601.17                     | 0%                | 0.0927%               | 0.93%               | 2.18%                               | 38.93%              |
| **10-19**      | 2248.19                     | 0%                | 0.0331%               | 0.62%               | 1.98%                               | 43.06%              |
| **20-35**      | 124.92                      | 0%                | 0.0127%               | 0.20%               | 0.54%                               | 6.41%               |
| **36-50**      | 114.99                      | 0%                | 0.0004%               | 0.11%               | 0.30%                               | 3.98%               |
</div>

**Использование большего количества полос ($\uparrow$N) уменьшает ваши ежедневные потери в режиме мягкой ликвидации, но увеличивает время пребывания в этом режиме, а также снижает общую сумму, которую пользователь может занять**. Пользователю необходимо самостоятельно выбрать комфортное количество полос (bands), которое позволит занять необходимую сумму.

*Вышеуказанные результаты получены из curve-notebook [здесь](https://github.com/saint-rat/curve-notebooks/blob/main/n_range_softliq_losses.ipynb)*

# **Управление Здоровьем Займа  (Health)** {#managing-loan-health}

**[Здоровье займа](./loan-concepts.md#loan-health) (Loan health)  — это прямой показатель риска займа**. Чем ниже уровень здоровья займа, тем выше риск. Чтобы избежать жесткой ликвидации (hard-liquidation), здоровье займа должно быть выше 0.

На здоровье займа влияют 2 фактора:

1. Коэффициент LTV (Loan-To-Value ratio) - Чем больше залога (collateral) и меньше долга (debt), тем выше здоровье займа.
2. Увеличение расстояния `a` (a distance) до диапазона мягкой ликвидации, как показано на рисунке [здесь](./loan-concepts.md#loan-health). Это можно сделать двумя способами: уменьшив количество полос (bands) или уменьшив сумму займа (amount borrowed).

Есть 2 способа увеличения здоровья займа:

1. Погашение долга (Repaying debt)
2. Добавление залога (Adding collateral)

Однако, если займ находится в режиме мягкой ликвидации (Soft-liquidation), залог добавить нельзя, необходимо погасить долг для увеличения здоровья.

---

# **Примеры Займов** {#loan-examples}

*Все графики в этом разделе интерактивные.* ***Щёлкайте по различным элементам в легенде, чтобы показывать/скрывать соответствующий график.***

Вот список графиков, которые можно показывать/скрывать, и их значение:

**Графики значения (Ось слева)**:  
*Эти графики относятся только к левой оси, процентная ось для них не имеет значения*.

* `Oracle Price` (Цена оракула): Цена оракула за 1 единицу выбранного депонированного залогового актива (например, 1 wBTC, 1 wstETH и т.д.)
* `Soft-Liquidation Price Range` (Диапазон цен мягкой ликвидации): Это диапазон цен мягкой ликвидации (soft-liquidation price range) пользователя. Это можно также рассматривать как все отдельные диапазоны полос (band ranges) вместе. Этот диапазон сдвигается вверх со временем с увеличением `Interest Rate` (процентной ставки).
* `CV in <asset>` (Залоговая стоимость в <asset>): Стоимость залога (collateral value) в депонированном активе (например, wstETH, wBTC и т.д.).
* `CV in crvUSD` (Залоговая стоимость в crvUSD): Стоимость crvUSD, хранимого в качестве залога. `<asset>` конвертируется в crvUSD через процесс мягкой ликвидации для защиты от дальнейшего снижения цены.
* `Total CV` (Общая залоговая стоимость): `CV in <asset>` плюс `CV in crvUSD`.
* `Debt Value` (Стоимость долга): Общая сумма задолженности (включая проценты).
* `AAVE/Spark Liq Price` (Цена ликвидации AAVE/Spark): Цена, по которой займ был бы ликвидирован в AAVE/Spark. Когда `Oracle Price` (Цена оракула) ниже этой цены, займ был бы ликвидирован/невозможно.

**Процентные графики (Ось справа)**:  
*Эти графики относятся только к правой оси, значение оси стоимости для них не имеет значения*

* `LTV` (Loan-To-Value): Коэффициент займа к стоимости, это `Debt Value` (Стоимость долга) делённая на `Total CV` (Общую залоговую стоимость).
* `Health` (Здоровье): Фактор здоровья займа (health factor), займ подвергается жёсткой ликвидации (hard-liquidated), когда этот показатель достигает 0. Подробности [здесь](loan-concepts.md#loan-health).
* `% CV in <asset>` (% Залоговой стоимости в <asset>): Процент общей залоговой стоимости, текущий в депонированном залоговом активе (например, wstETH, wBTC и т.д.). Это `CV in <asset>` делённое на `Total CV`.
* `% CV in crvUSD` (% Залоговой стоимости в crvUSD): Процент общей залоговой стоимости, текущий, конвертированный в crvUSD. Это `CV in crvUSD` делённое на `Total CV`.
* `% SL Collateral Loss` (% Потери залога от мягкой ликвидации): Процент залога, потерянный из-за мягкой ликвидации. Подробности [здесь](loan-concepts.md#llamma-and-liquidations).
* `% Interest Collateral Loss` (% Потери залога из-за процентов): Потери залога из-за начисления процентов на долг. Эта сумма включена в график `Debt Value` (Стоимость долга).
* `% Total Collateral Loss` (% Общие потери залога): `% SL Collateral Loss` плюс `% Interest Collateral Loss`.
* `% Max Deposited Collateral` (% Максимально депонированный залог): Это процент текущего депонированного залога по сравнению с максимальным, который будет депонирован за время жизни займа. Это показано в процентах, чтобы его можно было представить наряду с другими графиками. Это просто для показа величины и времени депозитов/выводов, а не точных сумм. Пример: если изначально депонировано 20 wstETH, но пользователь добавляет ещё 5 (всего 25 wstETH) в другой момент без вывода, это значение начнётся с \$20/25=80\%.
* `Interest Rate` (Процентная ставка): Текущая процентная ставка займа для рынка.

---

## **Пример Осторожного и Пассивного Займа** {#careful-and-passive-loan-example}

Этот пользователь **депонировал 188 wBTC** в качестве залога. Он **занял 1.05 миллиона crvUSD**. Он был очень осторожен и занимал только с **коэффициентом LTV 21%**. Он использовал **N=10**.

<div class="centered2" style="width: 100%">
  <canvas id="loanChart3"></canvas>
</div>

Как видно из вышеуказанного, пользователь оставался пассивным, так как находился далеко от мягкой ликвидации всё время. Единственная плата, которую он понёс, была связана с увеличением процентной ставки займа, но, к счастью, цена wBTC росла достаточно быстро, чтобы компенсировать это.

В течение примерно 100-дневного срока займа он увеличил свой займ до 1.27 миллиона crvUSD, но его коэффициент LTV фактически снизился, поскольку цена wBTC выросла примерно на 30%.

**Это хорошая стратегия для займов менее 10,000 crvUSD**, так как затраты на газ для управления займом минимальны.

## **Пример Осторожного и Активного Займа** {#careful-and-active-loan-example}

Этот займ был открыт с **N=50**, **93 sfrxETH залога**, **105500 crvUSD долга**. Это был **коэффициент LTV 67%**.

<div class="centered2" style="width: 100%">
  <canvas id="loanChart4"></canvas>
</div>

Этот пользователь начинает с долга в 105k crvUSD, но постепенно добавляет залог (collateral) и занимает больше долга (debt), завершив с 219 sfrxETH залога и 298k crvUSD долга. Он активно управлял позицией, чтобы оставаться вне мягкой ликвидации (soft-liquidation), и потратил 0.56 ETH на комиссии на 32 транзакции в течение этого двухмесячного периода. Единственные комиссии, которые он понёс, связаны с процентами по займу (borrowing interest) и комиссиями за транзакции в Ethereum.


**Этот коэффициент LTV (Loan-To-Value) возможен в других системах, но мягкие ликвидации там отсутствуют. Мягкие ликвидации защищают пользователя от внезапных падений цен**.

## **Пример Займа Высокого Риска и Активного Управления** {#high-risk-and-active-loan-example}

Этот пользователь открыл свой займ, используя **N=4**, **депонировал 20 wstETH**, и **занял 32600 crvUSD**. Это эквивалентно **коэффициенту LTV 85%**.

<div class="centered2" style="width: 100%">
  <canvas id="loanChart1"></canvas>
</div>

Пользователь с займом, представленным на графике выше, отслеживался в течение ~102 дней, на протяжении которых он активно управлял своим займом, чтобы поддерживать LTV (отношение займа к залогу) на уровне около 85%. Взяв займ в crvUSD, пользователь мгновенно зафиксировал 85% стоимости wstETH, сохраняя возможность получать выгоду от роста цены wstETH. Такой займ был бы невозможен на других платформах из-за требований к LTV для залога в виде wstETH.

На 15-й день пользователь попал в режим мягкой ликвидации и столкнулся с уменьшением здоровья займа. На 18-й день пользователь погасил 10% своего долга, восстановив здоровье займа. На 70-й день при росте цены wstETH пользователь решил занять больше, изменив диапазон мягкой ликвидации. После повторного попадания в мягкую ликвидацию в новом диапазоне он быстро погасил добавленный долг. На 85-й день пользователь решил добавить больше залога и увеличил свой долг.

На протяжении этого периода пользователь чувствовал себя комфортно в мягкой ликвидации, потеряв всего ~22% своего залога из-за мягкой ликвидации и процентных ставок. Залог несколько раз полностью конвертировался в crvUSD, защищая пользователя от дальнейшего падения цены.

Механизм LLAMMA спас пользователя от жесткой ликвидации, которая произошла бы на других платформах. Это подтверждается графиком цен ликвидации на `AAVE/Spark Liquidation Price` (Цена ликвидации AAVE/Spark), который показывает, что даже после снижения LTV на 18-й день пользователь был бы ликвидирован на других платформах при двух ценовых откатах ниже $1767 на 25-й и 55-й дни. Это не позволило бы пользователю восстановить стоимость при последующем росте цен.

Этот займ показывает, что **активное управление займами высокого риска может привести к результатам, невозможным в любой другой системе**.

## **Пример Займа Высокого Риска и Пассивного Управления (Жёсткая ликвидация)** {#high-risk-and-passive-loan-example-hard-liquidation}

Этот займ был открыт с **N=4**, **5.95 wstETH залога**, **10500 crvUSD долга**. Это был **коэффициент LTV 84%**.

<div class="centered2" style="width: 100%">
  <canvas id="loanChart2"></canvas>
</div>

Пользователь взял займ почти на максимальную сумму, установив свой диапазон ликвидации очень близко к текущей цене. Он долгое время оставался выше диапазона мягкой ликвидации, но на 50-й день попал в мягкую ликвидацию. Затем пользователь быстро прошел через мягкую ликвидацию к "безопасности" на другой стороне, но потерял 3.1% на комиссиях за мягкую ликвидацию.

С 50-го по 62-й день у пользователя была возможность погасить долг для повышения здоровья займа. Однако, оставаясь пассивным и ничего не предпринимая, пользователь позволил комиссиям за мягкую ликвидацию снизить здоровье до 0 при возврате через диапазон мягкой ликвидации. В итоге это привело к жесткой ликвидации из-за роста цены залога.

!!!warning "Используйте эту стратегию на свой страх и риск"
    Пользователи в этом квадранте (Высокий риск и пассивный) находятся в наивысшем риске жёсткой ликвидации (hard-liquidation). Использование этой стратегии не рекомендуется.

## **Пример Займа Под Мягкой Ликвидацией** {#under-soft-liquidation-loan-example}

Этот займ начался с **57.07 wstETH в залоге**, при **N=4**  и **долге 102k crvUSD**. В течение срока займа пользователь несколько раз частично погасил долг и завершил с **93.5k crvUSD долга** и **53.44 wstETH в залоге**.

<div class="centered2" style="width: 100%">
  <canvas id="loanChart5"></canvas>
</div>

Этот займ является отличным примером эффективности LLAMMA и механизма мягкой ликвидации. Пользователь **более 50% времени займа под диапазоном мягкой ликвидации**. Тем не менее, **потери от комиссий за мягкую ликвидацию составили только 6.37%**. Находясь под диапазоном мягкой ликвидации, пользователь был защищён от дальнейших потерь из-за падения цены wstETH, так как весь его залог был конвертирован в crvUSD. Однако, когда цена выросла, пользователь получил выгоду от роста цен, так как его залог был обратно конвертирован в wstETH.

График `AAVE/Spark Liq price` (Цена ликвидации AAVE/Spark) для этого займа показывает, что этот займ был бы невозможен в системах-конкурентах, за исключением 91-го дня, когда долг был ниже, и цена wstETH выросла.

---

# **Стратегии** {#strategies}

## **Арбитраж ставок заимствования и кредитования** {#borrowing-to-lending-rate-arbitrage}

Поскольку crvUSD создаётся с высококачественным залогом (high quality collateral) на рынках crvUSD, пользователь обычно может получать прибыль, занимая crvUSD и предоставляя его в других местах, особенно на рискованных рынках. Эта стратегия проста: вы занимаете crvUSD и предоставляете его по более высоким ставкам, получая разницу:

$$\text{profitRate = supplyRate - borrowRate}$$

**Стратегия:**

1. Внести залог (например, ETH, wBTC, wstETH) на рынке crvUSD.
2. Взять займ в crvUSD.
3. Вложить crvUSD в стратегию с более высокой ставкой доходности, чем ставка займа crvUSD, например, [Curve Lending Markets](https://lend.curve.fi), [Conic Omnipools](https://conic.finance/), [Silo Finance Markets](https://app.silo.finance/).

**Риски:**

* Пользователь должен следить за здоровьем (health) своего займа, чтобы избежать любой ликвидации (soft или hard), так как потери от ликвидации могут быть больше, чем прибыль от арбитража ставок.
* Риск crvUSD, т.е. риск смарт-контрактов crvUSD stablecoin и рынков crvUSD, см. отказ от ответственности по риску crvUSD [здесь](../risks-security/risks/crvusd.md)
* Риск смарт-контрактов и плохого долга (bad debt risk) на рынках кредитования (lending markets), т.е. если вы предоставляете средства на Curve Lending, см. отказ от ответственности по риску Curve Lending [здесь](../risks-security/risks/lending.md). Если вы используете другие платформы, изучите и ознакомьтесь с их рисками.. **Упоминания платформ здесь не являются одобрением их безопасности.**


<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


<script>
    // Data
    const data = [
        { n_range: 'N: 4-9', loss_range: '0-0.001%', softLiqDays: 32.12, softLiqPercent: 0.92 },
        { n_range: 'N: 4-9', loss_range: '0.001-0.005%', softLiqDays: 48.82, softLiqPercent: 1.40 },
        { n_range: 'N: 4-9', loss_range: '0.005-0.02%', softLiqDays: 148.82, softLiqPercent: 4.27 },
        { n_range: 'N: 4-9', loss_range: '0.02-0.1%', softLiqDays: 587.55, softLiqPercent: 16.86 },
        { n_range: 'N: 4-9', loss_range: '0.1-0.5%', softLiqDays: 1095.54, softLiqPercent: 31.44 },
        { n_range: 'N: 4-9', loss_range: '0.5-2%', softLiqDays: 1073.53, softLiqPercent: 30.81 },
        { n_range: 'N: 4-9', loss_range: '2-10%', softLiqDays: 455.90, softLiqPercent: 13.08 },
        { n_range: 'N: 4-9', loss_range: '10-50%', softLiqDays: 42.00, softLiqPercent: 1.21 },
        { n_range: 'N: 10-19', loss_range: '0-0.001%', softLiqDays: 11.35, softLiqPercent: 0.78 },
        { n_range: 'N: 10-19', loss_range: '0.001-0.005%', softLiqDays: 35.52, softLiqPercent: 2.46 },
        { n_range: 'N: 10-19', loss_range: '0.005-0.02%', softLiqDays: 128.88, softLiqPercent: 8.91 },
        { n_range: 'N: 10-19', loss_range: '0.02-0.1%', softLiqDays: 371.83, softLiqPercent: 25.70 },
        { n_range: 'N: 10-19', loss_range: '0.1-0.5%', softLiqDays: 489.12, softLiqPercent: 33.81 },
        { n_range: 'N: 10-19', loss_range: '0.5-2%', softLiqDays: 292.61, softLiqPercent: 20.23 },
        { n_range: 'N: 10-19', loss_range: '2-10%', softLiqDays: 105.74, softLiqPercent: 7.31 },
        { n_range: 'N: 10-19', loss_range: '10-50%', softLiqDays: 11.64, softLiqPercent: 0.80 },
        { n_range: 'N: 20-35', loss_range: '0-0.001%', softLiqDays: 2.48, softLiqPercent: 2.23 },
        { n_range: 'N: 20-35', loss_range: '0.001-0.005%', softLiqDays: 4.63, softLiqPercent: 4.17 },
        { n_range: 'N: 20-35', loss_range: '0.005-0.02%', softLiqDays: 12.62, softLiqPercent: 11.35 },
        { n_range: 'N: 20-35', loss_range: '0.02-0.1%', softLiqDays: 37.89, softLiqPercent: 34.09 },
        { n_range: 'N: 20-35', loss_range: '0.1-0.5%', softLiqDays: 37.20, softLiqPercent: 33.47 },
        { n_range: 'N: 20-35', loss_range: '0.5-2%', softLiqDays: 13.25, softLiqPercent: 11.92 },
        { n_range: 'N: 20-35', loss_range: '2-10%', softLiqDays: 3.07, softLiqPercent: 2.76 },
        { n_range: 'N: 20-35', loss_range: '10-50%', softLiqDays: 0.00, softLiqPercent: 0.00 },
        { n_range: 'N: 36-50', loss_range: '0-0.001%', softLiqDays: 3.92, softLiqPercent: 6.55 },
        { n_range: 'N: 36-50', loss_range: '0.001-0.005%', softLiqDays: 4.12, softLiqPercent: 6.88 },
        { n_range: 'N: 36-50', loss_range: '0.005-0.02%', softLiqDays: 13.42, softLiqPercent: 22.41 },
        { n_range: 'N: 36-50', loss_range: '0.02-0.1%', softLiqDays: 18.71, softLiqPercent: 31.24 },
        { n_range: 'N: 36-50', loss_range: '0.1-0.5%', softLiqDays: 15.88, softLiqPercent: 26.51 },
        { n_range: 'N: 36-50', loss_range: '0.5-2%', softLiqDays: 3.51, softLiqPercent: 5.86 },
        { n_range: 'N: 36-50', loss_range: '2-10%', softLiqDays: 0.33, softLiqPercent: 0.55 },
        { n_range: 'N: 36-50', loss_range: '10-50%', softLiqDays: 0.00, softLiqPercent: 0.00 }
    ];

    // Извлекаем уникальные значения n_range
    const nRanges = [...new Set(data.map(item => item.n_range))];

    const colors = [
        'rgba(75, 192, 192, 0.7)',
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)'
    ];

    // Создаём наборы данных для каждого n_range
    const datasets = nRanges.map((nRange, index) => {
        const filteredData = data.filter(item => item.n_range === nRange);
        return {
            label: nRange,
            data: filteredData.map(item => item.softLiqPercent),
            backgroundColor: colors[index % colors.length]
        };
    });

    // Создаём график
    const ctx = document.getElementById('softLiqHistogram').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.filter(item => item.n_range === nRanges[0]).map(item => item.loss_range),
            datasets: datasets
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Диапазон потерь от мягкой ликвидации за день'
                    }
                },
                y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Процент данных в каждом диапазоне'
                    }
                }
            }
        }
    });

    // Функция для обновления графика на основе выбранного флажка
    function updateChart() {
        const newDatasets = nRanges.map((nRange, index) => {
            const filteredData = data.filter(item => item.n_range === nRange);
            return {
                label: nRange,
                data: percentageCheckbox.checked
                    ? filteredData.map(item => item.softLiqPercent)
                    : filteredData.map(item => item.softLiqDays),
                backgroundColor: colors[index % colors.length]
            };
        });
        chart.data.datasets = newDatasets;
        chart.options.scales.y.title.text = percentageCheckbox.checked
            ? 'Процент данных в каждом диапазоне'
            : 'Дни данных в каждом диапазоне';
        chart.update();
    }

    // Слушатели событий для флажков
    const percentageCheckbox = document.getElementById('percentageCheckbox');
    const timeCheckbox = document.getElementById('timeCheckbox');

    percentageCheckbox.addEventListener('change', function() {
        if (this.checked) {
            timeCheckbox.checked = false;
            updateChart();
        }
    });

    timeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            percentageCheckbox.checked = false;
            updateChart();
        }
    });
</script>

<script>
  function createChart(data, chartId) {
    const ctx = document.getElementById(chartId).getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.timeDays,
        datasets: [
          {
            label: 'Oracle Price',
            data: data.oraclePrice,
            borderColor: 'orange',
            pointRadius: 0,
            yAxisID: 'y1',
            pointHoverRadius: 10,
            pointHitRadius: 10
          },
          {
            label: 'Soft-Liquidation Price Range',
            data: data.n1Price,
            fill: '+1',
            backgroundColor: 'rgba(255, 255, 0, 0.25)',
            borderColor: 'rgba(255, 255, 0, 0.25)',
            borderWidth: 0,
            pointHitRadius: 0,
            pointRadius: 0,
            yAxisID: 'y1'
          },
          {
            label: 'Soft-Liquidation Price Range',
            data: data.n2Price,
            fill: '-1',
            backgroundColor: 'rgba(255, 255, 0, 0.25)',
            borderColor: 'rgba(255, 255, 0, 0.25)',
            borderWidth: 0,
            pointHitRadius: 0,
            pointRadius: 0,
            yAxisID: 'y1'
          },
          {
            label: 'Total CV',
            data: data.collateralTotalValue,
            borderColor: 'rgba(0, 180, 180, 1)',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y1',
            pointHoverRadius: 10,
            pointHitRadius: 10
          },
          {
            label: '$ CV wstETH',
            data: data.collateralUsd,
            borderColor: 'rgba(0, 255, 255, 1)',
            hidden: true,
            pointRadius: 0,
            borderWidth: 2,
            yAxisID: 'y1',
            pointHoverRadius: 10,
            pointHitRadius: 10
          },
          {
            label: '$ CV crvUSD',
            data: data.stablecoin,
            borderColor: 'rgba(0, 255, 0, 1)',
            hidden: true,
            pointRadius: 0,
            borderWidth: 2,
            yAxisID: 'y1',
            pointHoverRadius: 10,
            pointHitRadius: 10
          },
          {
            label: 'Debt Value',
            data: data.debt,
            borderColor: 'rgba(153, 153, 153, 1)',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y1',
            pointHoverRadius: 10,
            pointHitRadius: 10
          },
          {
            label: 'AAVE/Spark Liq Price',
            data: data.aaveLiqPrice,
            borderColor: 'rgba(169, 196, 235, 1)',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y1',
            borderWidth: 2,
            pointHoverRadius: 10,
            pointHitRadius: 10
          },
          {
            label: 'LTV',
            data: data.ltv,
            borderColor: 'black',
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1,
            pointHoverRadius: 10,
            pointHitRadius: 10
          },
          {
            label: 'Health',
            data: data.health,
            borderColor: 'purple',
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1,
            pointHoverRadius: 10,
            pointHitRadius: 10
          },
          {
            label: '% CV wstETH',
            data: data.collateralPct,
            borderColor: 'blue',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1,
            pointHoverRadius: 10,
            pointHitRadius: 10
          },
          {
            label: '% CV crvUSD',
            data: data.stablecoinPct,
            borderColor: 'green',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1,
            pointHoverRadius: 10,
            pointHitRadius: 10
          },
          {
            label: '% SL Collateral Loss',
            data: data.lossPct,
            borderColor: 'brown',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1,
            pointHoverRadius: 10,
            pointHitRadius: 10
          },
          {
            label: '% Total Collateral Loss',
            data: data.totalLossPct,
            borderColor: 'red',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1,
            pointHoverRadius: 10,
            pointHitRadius: 10
          },
          {
            label: '% Interest Collateral Loss',
            data: data.interestDebt,
            borderColor: 'magenta',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1,
            pointHoverRadius: 10,
            pointHitRadius: 10
          },
          {
            label: '% Max Deposited Collateral',
            data: data.depositedCollateralPct,
            borderColor: 'rgba(153, 132, 63, 1)',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1,
            pointHoverRadius: 10,
            pointHitRadius: 10
          },
          {
            label: 'Interest Rate',
            data: data.rate,
            borderColor: 'rgba(204, 153, 255, 1)',
            hidden: true,
            pointRadius: 0,
            yAxisID: 'y2',
            borderWidth: 1,
            pointHoverRadius: 10,
            pointHitRadius: 10
          }
        ]
      },
      options: {
        responsive: true,
        aspectRatio: 4/3,
        devicePixelRatio: 1,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Время (дни)'
            },
          },
          y1: {
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: 'Стоимость ($)'
            }
          },
          y2: {
            type: 'linear',
            position: 'right',
            title: {
              display: true,
              text: 'Процент (%)'
            },
            grid: {
              drawOnChartArea: false
            }
          }
        },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              boxWidth: 6,
              generateLabels: function(chart) {
                const datasets = chart.data.datasets;
                const legendItems = Chart.defaults.plugins.legend.labels.generateLabels(chart);
                legendItems.forEach((item, index) => {
                  if (item.text !== '') {
                    item.fillStyle = datasets[item.datasetIndex].borderColor;
                    item.strokeStyle = 'rgba(0, 0, 0, 0)';
                    item.pointStyle = 'rectRounded';
                    item.text = datasets[item.datasetIndex].label;
                    item.fontColor = 'black';
                  }
                });
                legendItems.unshift({
                  text: 'Значение (Ось слева):',
                  fillStyle: 'rgba(0, 0, 0, 0)',
                  hidden: false,
                  lineWidth: 0
                });
                const sharedLegendItem = {
                  text: 'Диапазон цен мягкой ликвидации',
                  fillStyle: datasets[1].borderColor,
                  hidden: datasets[1].hidden || datasets[2].hidden,
                  lineWidth: 0,
                  datasetIndex: 1
                };
                const index = legendItems.findIndex(item => item.text === sharedLegendItem.text);
                if (index !== -1) {
                  legendItems[index] = sharedLegendItem;
                  legendItems.splice(2, 1); // Удалить дублирующую запись под "Процентом"
                }
                legendItems.splice(8, 0, {
                  text: '  |  ',
                  fillStyle: 'rgba(0, 0, 0, 0)',
                  hidden: false,
                  lineWidth: 0
                });
                legendItems.splice(9, 0, {
                  text: 'Проценты (Ось справа):',
                  fillStyle: 'rgba(0, 0, 0, 0)',
                  hidden: false,
                  lineWidth: 0
                });
                return legendItems;
              }
            },
            onClick: function(e, legendItem, legend) {
              const index = legendItem.datasetIndex;
              const chart = legend.chart;
              if (index === 1) {
                // Переключение видимости обоих наборов данных при клике на "Диапазон цен мягкой ликвидации"
                const softLiqDataset1 = chart.data.datasets[1];
                const softLiqDataset2 = chart.data.datasets[2];
                const isHidden = softLiqDataset1.hidden || softLiqDataset2.hidden;
                softLiqDataset1.hidden = !isHidden;
                softLiqDataset2.hidden = !isHidden;
                chart.update();
              } else {
                // Поведение по умолчанию для других элементов легенды
                Chart.defaults.plugins.legend.onClick.call(this, e, legendItem, legend);
              }
                }
                  },
                  title: {
                    display: false,
                    text: 'График займа'
                  }
                }
              }
            });
            const canvas = document.getElementById(chartId);
            canvas.style.backgroundColor = 'white';
          }

  function loadData(jsonFile, chartId) {
    fetch(jsonFile)
      .then(response => response.json())
      .then(data => {
        createChart(data, chartId);
      })
      .catch(error => {
        console.error('Ошибка загрузки JSON файла:', error);
      });
  }

  loadData('loan1.json', 'loanChart1');
  loadData('hardliq4.json', 'loanChart2');
  loadData('loan3.json', 'loanChart3');
  loadData('loan4.json', 'loanChart4');
  loadData('loan5.json', 'loanChart5');
</script>

<script>
  const ethCrvUsdCtx = document.getElementById('ethCrvUsdChart').getContext('2d');
  const ethCrvUsdSlider = document.getElementById('ethCrvUsdSlider');
  const ethCrvUsdValuesDisplay = document.getElementById('ethCrvUsdValues');
  const bottomRangeInput = document.getElementById('bottomRange');
  const topRangeInput = document.getElementById('topRange');
  const currentPriceDisplay = document.getElementById('currentPrice');
  const collateralInput = document.getElementById('collateralInput');
  const ethPercentageDisplay = document.getElementById('ethPercentageDisplay');

  const ethCrvUsdChart = new Chart(ethCrvUsdCtx, {
  type: 'bar',
  data: {
      labels: ['Залог'],  // Единичный ярлык
      datasets: [
          {
              label: 'ETH',
              data: [0],  // Единичное значение
              backgroundColor: 'rgba(54, 162, 235, 0.8)',
              yAxisID: 'y'
          },
          {
              label: 'crvUSD',
              data: [0],  // Единичное значение
              backgroundColor: 'rgba(75, 192, 192, 0.8)',
              yAxisID: 'y1'
          }
      ]
  },
  options: {
      responsive: true,
      scales: {
          x: {
              stacked: false,  // Устанавливаем stacked в false
              categoryPercentage: 0.8,  // Настраивает ширину группы столбцов
              barPercentage: 0.9,  // Настраивает ширину каждого отдельного столбца
              title: {
                  display: false,
                  text: 'Залог'
              }
          },
          y: {
              type: 'linear',
              display: true,
              position: 'left',
              beginAtZero: true,
              title: {
                  display: true,
                  text: 'Залог в ETH'
              },
              ticks: {
                  callback: function(value) {
                      return value.toFixed(2) + ' ETH';
                  }
              }
          },
          y1: {
              type: 'linear',
              display: true,
              position: 'right',
              beginAtZero: true,
              title: {
                  display: true,
                  text: 'Залог в crvUSD'
              },
              ticks: {
                  callback: function(value) {
                      return value.toFixed(0) + ' crvUSD';
                  }
              },
              grid: {
                  drawOnChartArea: false,
              },
          }
      },
      plugins: {
          legend: {
              display: true
          },
          title: {
              display: false,
              text: 'Конвертация залога в мягкой ликвидации'
          },
          tooltip: {
              callbacks: {
                  label: function(context) {
                      const label = context.dataset.label || '';
                      if (label === 'ETH') {
                          return context.parsed.y.toFixed(2) + ' ETH';
                      } else {
                          return context.parsed.y.toFixed(2) + ' crvUSD';
                      }
                  }
              }
          }
      }
  }
});

    function updateEthCrvUsdChart() {
        const ethPercentage = Number(ethCrvUsdSlider.value);
        const crvUSDPercentage = 100 - ethPercentage;
        const bottomValue = Number(bottomRangeInput.value);
        const topValue = Number(topRangeInput.value);
        const sliderValue = Number(ethCrvUsdSlider.value);
        const collateral = Number(collateralInput.value);
        
        const currentPrice = bottomValue + (topValue - bottomValue) * (sliderValue / 100);
        const avgSellPrice = (topValue + currentPrice) / 2;
        const eth = (ethPercentage/100) * collateral;
        const crvUSDEth = (crvUSDPercentage / 100) * collateral;
        const crvUSDValue = crvUSDEth * avgSellPrice;

        ethCrvUsdChart.data.datasets[0].data = [eth];
        ethCrvUsdChart.data.datasets[1].data = [crvUSDValue];
        
        ethCrvUsdChart.options.scales.y.max = Math.ceil(collateral);
        ethCrvUsdChart.options.scales.y1.max = Math.ceil(topValue * collateral);
        
        ethCrvUsdChart.update();

        ethCrvUsdValuesDisplay.innerHTML = `Залог: ${eth.toFixed(2)} ETH, ${crvUSDValue.toFixed(2)} crvUSD<br>Средняя цена обмена: ${avgSellPrice.toFixed(2)} crvUSD/ETH<br>ETH обменены на crvUSD: ${crvUSDPercentage}%`;

        currentPriceDisplay.textContent = '$' + currentPrice.toFixed(2);
        ethPercentageDisplay.textContent = ethPercentage;
    }

    ethCrvUsdSlider.addEventListener('input', updateEthCrvUsdChart);
    bottomRangeInput.addEventListener('input', updateEthCrvUsdChart);
    topRangeInput.addEventListener('input', updateEthCrvUsdChart);
    collateralInput.addEventListener('input', updateEthCrvUsdChart);

    // Начальное обновление
    updateEthCrvUsdChart();
</script>

