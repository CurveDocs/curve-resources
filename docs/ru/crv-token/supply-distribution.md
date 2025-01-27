<h1>Объем и распределение CRV</h1>

Существует **фиксированная общая эмиссия 3 030 303 031 CRV**. После этого новых токенов CRV выпущено быть не может. Общий объем токенов CRV, выделенный различным группам, показан ниже в диаграмме "Общая аллокация CRV". **Не все CRV в настоящее время выпущены или находятся в обращении**. Токены CRV постепенно выпускаются для сообщества каждую неделю и будут продолжать выпускаться более 200 лет. Количество токенов, выпускаемых каждую неделю, определяется в [разделе об эмиссии сообщества](#community-emissions-crv-inflation).

Посмотрите эту страницу, чтобы узнать, как распределены CRV и сколько их распределяется каждую неделю. [Калькулятор предложения](#supply-calculator) — отличный инструмент, позволяющий увидеть объем выпуска CRV и статистику на любую дату.

## **Общая аллокация** {#total-supply-allocation}

Ниже представлена диаграмма, показывающая распределение CRV среди различных групп внутри экосистемы Curve.

<div class="centered" style="transform: scale(1.1);">
  <canvas id="crvAllocationChart"></canvas>
</div>
<br>
<div class="centered" markdown="block">
| Группа                                     | Выделенные CRV | Процент |
|-------------------------------------------|----------------|---------|
| Сообщество (эмиссии)                      | 1 727 272 729   | 57%     |
| Ранние пользователи (провайдеры ликвидности до CRV) | 151 515 152     | 5%      |
| Основная команда                          | 800 961 153     | 26,43%  |
| Инвесторы                                 | 108 129 756     | 3,57%   |
| Сотрудники                                | 90 909 091      | 3%      |
| Резерв сообщества                         | 151 515 152     | 5%      |
| **Всего**                                 | **3 030 303 031** | **100%**  |
</div>

Данное распределение показывает, что **сообществу будет выделено 67% всех CRV** после того, как будет распределена вся эмиссия. Однако стоит отметить, что **токены CRV будут распределяться до 2376 года**, а значимые распределения прекратятся примерно через 50 лет. Подробнее смотрите в разделе [значимые годы эмиссии](#notable-emission-years).

---

## **Запуск токена** {#token-launch}

CRV был официально запущен **13 августа 2020 года**. На момент запуска не было ни одного разблокированного токена. **Все** токены, выпущенные на этапе запуска, находились в линейном вестинге на 1-4 года (разблокировка происходила постепенно в течение этого времени). Первоначальный объем предложения составлял 1,303,030,303 токена, так как эти токены были предварительно добыты и отправлены в вестинговые контракты для постепенной разблокировки. Ниже показано распределение начальной эмиссии по различным группам.

<div class="centered" style="transform: scale(1.1);">
  <canvas id="crvLaunchChart"></canvas>
</div>
<br>
<div class="centered" markdown="block">
| Группа                                     | Выделенные CRV | Годы вестинга | Транзакции                                                                                                                                                                                                                                                                                                  |
|-------------------------------------------|----------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ранние пользователи (провайдеры ликвидности до CRV) | 151 515 152     | 1[^1]         | [1](https://etherscan.io/tx/0x1d36fa3e154f409e48c59dc5085e5d3cf5993f48d2ed525b49f7d1aa1bf3bca5)                                                                                                                                                                                                             |
| Основная команда                          | 800 961 153     | 4             | [1](https://etherscan.io/tx/0xb7f7de7dc668b584bb22ffa164b959729db96385e500f926f03936c453a3a45e)                                                                                                                                                                                                             |
| Инвесторы                                 | 108 129 756     | 2             | [1](https://etherscan.io/tx/0x5f762bc8e2929b76cf22936595b2e2a58cbaa9f31ec896bfaf63f798c4c65d38), [2](https://etherscan.io/tx/0xcaf8fc449a2c28e13877f6e0dc3e12cb2ba585a86f771d92ae8959cc3303c5d4), [3](https://etherscan.io/tx/0x2bada5103c3c1c64879125b8832961bc30a6e1524861272347e9f32a9593a084) |
| Сотрудники                                | 90 909 091      | 2             | [1](https://etherscan.io/tx/0xe99a98d6aa3ee2413c58a28c9505be123e02399336364ab47e10bf13102816f1), [2](https://etherscan.io/tx/0xb84eb0488e9696e063ce829cfad38aeaced814c54d897078fdc7267c567b0f8e)                                                                                                      |
| Резерв сообщества                         | 151 515 152     | N/A[^2]       | [1](https://etherscan.io/tx/0x3f9aa0ff15fbd00cce60e36f32f25d6f85a43a19d983100d98007a84609f861a)                                                                                                                                                                                                             |
| **Всего**                                 | **1 303 030 303** |    |  [1](https://etherscan.io/tx/0x5dc4a688b63cea09bf4d73a695175b77572792a2e2b3656297809ad3596d4bfe)  |
</div>

[^1]: Это было распределено через публичный контракт вестинга

[^2]: Эти токены сами по себе не имели вестинга, но контракт, которому они выделены, создаёт другие контракты вестинга. Когда токены выделяются из этого пула, создаётся дочерний контракт вестинга с минимальным сроком 1 год.

На момент запуска циркулирующее предложение составляло 0. Каждый день в течение первого года приблизительно 750 тысяч токенов выпускались для сообщества за предоставление ликвидности, а 1.65 миллиона токенов разблокировались через вестинг. Используйте [калькулятор предложения ниже](#supply-calculator), чтобы увидеть, как быстро токены становились ликвидными и поступали в обращение.

!!!tip "Совет"  
    Шестилетний график выпуска CRV доступен по ссылке: [https://dao.curve.fi/releaseschedule](https://dao.curve.fi/releaseschedule), или полный график выпуска можно найти в Google-таблице [здесь](https://docs.google.com/spreadsheets/d/1kFFdaLCX8ISM7yzvfUmuz151QiRzrFfaljCzEiO6sus/edit?usp=sharing).

---

## **Эмиссия сообщества (инфляция CRV)** {#community-emissions-crv-inflation}

Эмиссия сообщества (часто называемая инфляцией CRV) выпускается и распределяется по гейджам ([счётчикам вознаграждений](../reward-gauges/overview.md)) на основе голосования за вес гейджей, проводимого еженедельно. Гейджи имеют очень гибкий дизайн и могут направлять эмиссию в пулы ликвидности, поставщикам кредитного рынка или даже на финансирование разработки языка программирования Vyper.

Эмиссия сообщества уменьшается каждый год. Она основана на модели Bitcoin Halving, которая уменьшает эмиссию вдвое каждые 4 года. В Curve, однако, мы уменьшаем вознаграждения на \(2^{\frac{1}{4}}\) каждые 365 дней. Это составляет примерно 16% каждый год и 50% каждые 4 года. Изначально эмиссия сообщества была установлена на уровне 274 815 283 CRV за первый год. Это означает, что формула для вычисления количества CRV, выпускаемых сообществу в любой год, выглядит следующим образом:

$$\text{Годовая эмиссия сообщества} = \frac{274\,815\,283}{2^{\text{года}/4}}$$

Где `год` — это количество лет, прошедших после 13 августа 2020 года, например, эмиссия первого года приходится на период с 13 августа 2021 года по 13 августа 2022 года. Эмиссия за 10-й год приходится на период с 11 августа 2030 года по 11 августа 2031 года (2 високосных года с 366 днями, однако Curve предполагает, что все годы содержат 365 дней), что составляет 48 580 938 CRV, выпущенных в тот год.

В смарт-контрактах годовая эмиссия сообщества не определена напрямую, а вместо этого определена как скорость эмиссии CRV в секунду, и мы можем преобразовать годовую эмиссию в значение в секунду с помощью следующей формулы:

$$\text{Ставка эмиссии} = \frac{\text{Годовая эмиссия сообщества}}{365 \times 86400}$$

Мы делим на \(365 \times 86400\), потому что в году 365 дней и 86400 секунд в сутках.

Скорость эмиссии имеет 18 знаков после запятой, это значит, что **эмиссия продолжается в течение 245 лет**. Ставка эмиссии составит 0.000000000000000001 CRV/сек в 2265 году. **Эмиссия зафиксирована в коде и не может быть изменена**. Ознакомьтесь с [ключевыми годами эмиссии](#notable-emission-years) ниже или воспользуйтесь [калькулятором предложения](#supply-calculator), чтобы узнать, сколько CRV будет распределено и кому в разные годы.

Посмотрите [этот раздел](./faq.md#how-does-the-yearly-emissions-reduction-work) FAQ, чтобы узнать, как работает годовое сокращение эмиссии. Смотрите [этот раздел](./faq.md#how-is-crv-minted), чтобы узнать, как CRV выпускается и добавляется в предложение.

### **Эмиссия CRV на следующие 10 лет**

Смотрите ниже диаграму распределения CRV по годам на следующие 10 лет. 2024 — последний год вестинга CRV для основной команды. После 12 августа 2024 года весь CRV, добавляемый в обращение, распределяется сообществу через гейджи, а инфляция CRV резко снизилась с 20,37% до 6,34% в этом году.

*Примечание: пунктирные линии отображают процентные значения и относятся к оси процентов, остальные линии относятся к оси объемов CRV. Нажмите на наборы данных, чтобы включить/отключить их.*
<canvas id="crv10yearChart"></canvas>

### **Значимые годы эмиссии**  {#notable-emission-years}

Поскольку CRV будет продолжать распределяться в течение 245 лет, интересные годы распределения CRV отмечены ниже. Смотрите [Google-таблицу здесь](https://docs.google.com/spreadsheets/d/1kFFdaLCX8ISM7yzvfUmuz151QiRzrFfaljCzEiO6sus/edit?usp=sharing) для данных за все годы.

<div class="centered" markdown="block">
| Год | Дата начала | Дата окончания | Эмиссия CRV        | Примечание                                 |
|-----|-------------|----------------|---------------------|--------------------------------------------|
| 5   | 2025-08-12  | 2026-08-12     | 115 545 593         | Последний год эмиссии > 100M               |
| 19  | 2039-08-09  | 2040-08-08     | 10 212 884          | Последний год эмиссии > 10M                |
| 32  | 2052-08-05  | 2053-08-05     | 1 073 497           | Последний год эмиссии > 1M                 |
| 45  | 2065-08-02  | 2066-08-02     | 112 837             | Последний год эмиссии > 100k               |
| 58  | 2078-07-30  | 2079-07-30     | 11 860              | Последний год эмиссии > 10k                |
| 72  | 2092-07-26  | 2093-07-26     | 1 048               | Последний год эмиссии > 1k                 |
| 85  | 2105-07-24  | 2106-07-24     | 110.1               | Последний год эмиссии > 100                 |
| 98  | 2118-07-21  | 2119-07-21     | 11.58               | Последний год эмиссии > 10                  |
| 112 | 2132-07-17  | 2133-07-17     | 1.023               | Последний год эмиссии > 1                   |
| 245 | 2264-06-15  | 2265-06-15     | 0.000000000031536000 | Последний год эмиссии                     |
</div>

---

## **Калькулятор предложения** {#supply-calculator}

*Уведомление об ограничении точности*: ***Этот калькулятор является теоретическим и основан на графиках вестинга и формулах смарт-контрактов***. *Он не извлекает данные из блокчейна Ethereum. Возможно небольшое расхождение в значениях, так как пользователи могут ждать любое время перед выпуском CRV из эмиссии ликвидности или разблокировкой токенов из контрактов вестинга. Также предполагается, что токены из резерва сообщества находятся в вестинге в течение 1 года. Это не совсем так, поскольку они вестятся ***как минимум*** 1 год после того, как распределены DAO для определенной цели.*

<div class="chart-container">
    <div style="display: flex; align-items: center;">
        <div class="input">
            <label for="dateInput" style="margin-left: 10px;">Выберите дату:</label>
            <input type="date" style="margin-left: 10px;" id="dateInput" onchange="renderCharts()">
        </div>
        <button class="preset-button" onclick="setDate('2020-08-13')">День запуска</button>
        <button class="preset-button" onclick="setDate(getCurrentDate())">Сегодня</button>
        <button class="preset-button" onclick="setDate(getNextReductionDate())">Следующее сокращение инфляции</button>
        <button class="preset-button" onclick="setDate('2040-08-13')">20 лет</button>
    </div>
    <div id="errorMessage" style="color: red; margin-left: 10px;"></div>
    <div class="chart-wrapper-container">
        <div class="chart-wrapper" style="flex: 1;">
            <div style="display: flex;">
                <span style="text-align: center; margin-top: 5px; margin-right: 10px; flex: 2; font-weight: bold;">Всего CRV в обращении</span>
            </div>
            <div class="centered" style="width=65%;">
                <canvas id="totalChart" class="emission-chart"></canvas>
            </div>
            <div id="totalAmounts"></div>
        </div>
        <div class="chart-wrapper" style="flex: 1;">
            <div style="display: flex;">
                <span style="text-align: center; margin-top: 5px; margin-right: 10px; flex: 2; font-weight: bold;">Ежедневно добавляется CRV</span>
            </div>
            <div class="centered" style="width=65%;">
                <canvas id="dailyChart" class="emission-chart"></canvas>
            </div>
            <div id="dailyAmounts"></div>
        </div>
    </div>
    <div class="chart-wrapper">
        <div id="totalEmissions"></div>
    </div>
</div>

### **Определения терминов в калькуляторе:**

- **Вестинг/Разблокировано** — Вестинг означает, что токены блокированы на определенный период времени. Разблокированные токены доступны после окончания периода вестинга.
- **Эмиссия/Выпущено** — Эмиссия это инфляция CRV от новых выпускаемых CRV, увеличивающих предложение. Выпущено это CRV, добавленные в предложение.
- **Максимальное предложение** — Неизменяемое значение, максимальное количество CRV, которое может существовать.
- **Всего CRV в обращении** — Общее предложение CRV, разблокированное из вестинга и выпущенное из эмиссии сообщества. Включает вознаграждения, которые могут быть в данный момент получены/выпущены пользователями.
- **Всего предложения** — Количество выпущенных CRV, которые в данный момент существуют, включая предмайненные CRV, блокированные в контрактах вестинга.
- **Оставшаяся эмиссия** — Оставшееся количество CRV, которое будет выпущено сообществу.
- **Оставшийся вестинг** — Оставшееся количество CRV, которое будет разблокировано из контрактов вестинга.
- **Процент в обращении** — Мера максимального предложения CRV по отношению к текущему предложению в обращении. `Всего CRV в обращении` делённое на `Максимальное предложение CRV`.
- **Ставка инфляции** — Мера годовой эмиссии & вестинга CRV по отношению к текущему предложению в обращении. `Годовая эмиссия & вестинг CRV` делённая на `Всего CRV в обращении`.

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js"></script>

<script>

function roundAmount(amount) {
  if (amount > 100) {
    return Math.round(amount);
  } else {
    return Number(amount.toPrecision(3));
  }
}

function calcVestingAmount(chosenDate, vestingYears, vestingAmount) {
  const referenceDate = new Date("2020-08-13");
  const timeDiff = Math.abs(chosenDate.getTime() - referenceDate.getTime());
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  if (daysDiff < (365*vestingYears)) {
    var vestedPerDay = vestingAmount / (365*vestingYears);
    var totalVested = vestedPerDay * daysDiff;
    return [totalVested+vestedPerDay, vestedPerDay];
  } else {
    return [vestingAmount,0];
  }
}

function calcEmissionsAmount(chosenDate) {
  const referenceDate = new Date("2020-08-13");
  if (chosenDate < referenceDate) {
    const errorMessage = "Date cannot be earlier than 13-08-2020";
    document.getElementById('errorMessage').textContent = errorMessage;
    throw new Error(errorMessage);
  } else {
    document.getElementById('errorMessage').textContent = "";
  }
  const timeDiff = Math.abs(chosenDate.getTime() - referenceDate.getTime());
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const yearsDiff = Math.floor(daysDiff/365);
  const daysInCurrentYear = daysDiff % 365;
  let totalEmissions = 0;
  const emissionsReductionFactor = Math.pow(2, 1/4);
  const initialEmissions = 274815283

  for (let i = 0; i < yearsDiff; i++) {
    const yearlyEmissions = initialEmissions / Math.pow(emissionsReductionFactor, i);
    totalEmissions += yearlyEmissions;
  }
  
  const currentYearEmissions = initialEmissions / Math.pow(emissionsReductionFactor, yearsDiff);
  const currentDailyEmissions = currentYearEmissions / 365;
  const partialYearEmissions = currentDailyEmissions * daysInCurrentYear;
  totalEmissions += partialYearEmissions;

  return [totalEmissions+currentDailyEmissions, currentDailyEmissions];
}

function calcAmounts(chosenDate) {

    const community = calcEmissionsAmount(chosenDate);
    const earlyUsers = calcVestingAmount(chosenDate, 1, 151515152);
    const coreTeam = calcVestingAmount(chosenDate, 4, 800961153);
    const investors = calcVestingAmount(chosenDate, 2, 108129756);
    const employees = calcVestingAmount(chosenDate, 2, 90909091);
    const reserve = calcVestingAmount(chosenDate, 1, 151515152);
    const vestingTotal = 1303030303;

    totalEmitted = community[0] + earlyUsers[0] + coreTeam[0] + investors[0] + employees[0] + reserve[0];
    dailyEmitted = community[1] + earlyUsers[1] + coreTeam[1] + investors[1] + employees[1] + reserve[1];
    yearlyEmitted = dailyEmitted * 365;
    inflationRate = yearlyEmitted / totalEmitted * 100;
    maxSupply = 3030303032;
    percentEmitted = totalEmitted / maxSupply * 100;
    vestingRemaining = vestingTotal - earlyUsers[0] - coreTeam[0] - investors[0] - employees[0] - reserve[0];

    const amounts = {
        emissionsTotal: community[0],
        emissionsDaily: community[1],
        earlyUsersTotal: earlyUsers[0],
        earlyUsersDaily: earlyUsers[1],
        coreTeamTotal: coreTeam[0],
        coreTeamDaily: coreTeam[1],
        investorsTotal: investors[0],
        investorsDaily: investors[1],
        employeesTotal: employees[0],
        employeesDaily: employees[1],
        reserveTotal: reserve[0],
        reserveDaily: reserve[1],
        totalEmitted: totalEmitted,
        dailyEmitted: dailyEmitted,
        yearlyEmitted: yearlyEmitted,
        inflationRate: inflationRate,
        maxSupply: maxSupply,
        percentEmitted: percentEmitted,
        vestingRemaining: vestingRemaining
    };
    return amounts;
}

let totalChart;
let dailyChart;

function renderCharts() {
    const chosenDateString = document.getElementById('dateInput').value;
    const chosenDate = new Date(chosenDateString);

    const amounts = calcAmounts(chosenDate);
    const roundedAmounts = Object.fromEntries(
        Object.entries(amounts).map(([key, value]) => [key, roundAmount(value)])
    );

    const totalCtx = document.getElementById('totalChart').getContext('2d');
    const dailyCtx = document.getElementById('dailyChart').getContext('2d');

    if (totalChart) {
        totalChart.destroy();
    }
    if (dailyChart) {
        dailyChart.destroy();
    }

    totalChart = new Chart(totalCtx, {
        type: 'pie',
        data: {
        labels: ['Сообщество', 'Ранние пользователи', 'Основная команда', 'Инвесторы', 'Сотрудники', 'Резерв'],
        datasets: [{
            data: [
            roundedAmounts.emissionsTotal,
            roundedAmounts.earlyUsersTotal,
            roundedAmounts.coreTeamTotal,
            roundedAmounts.investorsTotal,
            roundedAmounts.employeesTotal,
            roundedAmounts.reserveTotal
            ],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E5EA2', '#3cba9f', '#e8c3b9']
        }]
        },
        options: {
        devicePixelRatio: 2.5,
        responsive: true,
        plugins: {
            title: {
                display: false,
                text: 'Всего CRV в обращении'
            }
        }}
    });

    dailyChart = new Chart(dailyCtx, {
        type: 'pie',
        devicePixelRatio: 2.5,
        data: {
        labels: ['Сообщество', 'Ранние пользователи', 'Основная команда', 'Инвесторы', 'Сотрудники', 'Резерв'],
        datasets: [{
            data: [
            roundedAmounts.emissionsDaily,
            roundedAmounts.earlyUsersDaily,
            roundedAmounts.coreTeamDaily,
            roundedAmounts.investorsDaily,
            roundedAmounts.employeesDaily,
            roundedAmounts.reserveDaily
            ],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E5EA2', '#3cba9f', '#e8c3b9']
        }]
        },
        options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
                text: 'Ежедневно добавляется CRV'
            }
        }}
    });

   // Обновление общих сумм
    const totalAmountsElement = document.getElementById('totalAmounts');
    totalAmountsElement.innerHTML = `
        <div style="display: flex;">
            <span style="text-align: center; margin-top: 15px; margin-right: 10px; flex: 2; font-weight: bold;">Общая выпущенная эмиссия</span>
        </div>
        <div style="display: flex; border-bottom: 1px solid #ddd;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Сообщество:</span>
            <span style="text-align: left; flex: 2;">${roundedAmounts.emissionsTotal.toLocaleString()}</span>
            <span style="text-align: left; flex: 1.3; color: grey;">${(amounts.emissionsTotal / amounts.totalEmitted * 100).toFixed(2)}%</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: center; margin-right: 10px; flex: 2; font-weight: bold;">Всего разблокировано из вестинга</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Ранние пол.:</span>
            <span style="text-align: left; flex: 2;">${roundedAmounts.earlyUsersTotal.toLocaleString()}</span>
            <span style="text-align: left; flex: 1.3; color: grey;">${(amounts.earlyUsersTotal / amounts.totalEmitted * 100).toFixed(2)}%</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Осн. команда:</span>
            <span style="text-align: left; flex: 2;">${roundedAmounts.coreTeamTotal.toLocaleString()}</span>
            <span style="text-align: left; flex: 1.3; color: grey;">${(amounts.coreTeamTotal / amounts.totalEmitted * 100).toFixed(2)}%</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Инвесторы:</span>
            <span style="text-align: left; flex: 2;">${roundedAmounts.investorsTotal.toLocaleString()}</span>
            <span style="text-align: left; flex: 1.3; color: grey;">${(amounts.investorsTotal / amounts.totalEmitted * 100).toFixed(2)}%</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Сотрудники:</span>
            <span style="text-align: left; flex: 2;">${roundedAmounts.employeesTotal.toLocaleString()}</span>
            <span style="text-align: left; flex: 1.3; color: grey;">${(amounts.employeesTotal / amounts.totalEmitted * 100).toFixed(2)}%</span>
        </div>
        <div style="display: flex; border-bottom: 1px solid #ddd;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Резерв:</span>
            <span style="text-align: left; flex: 2;">${roundedAmounts.reserveTotal.toLocaleString()}</span>
            <span style="text-align: left; flex: 1.3; color: grey;">${(amounts.reserveTotal / amounts.totalEmitted * 100).toFixed(2)}%</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2; font-weight: bold;">Всего:</span>
            <span style="text-align: left; flex: 2; font-weight: bold;">${(Math.round(amounts.totalEmitted)).toLocaleString()}</span>
            <span style="text-align: left; flex: 1.3; color: grey;"></span>
        </div>
    `;

    // Обновление ежедневных сумм
    const dailyAmountsElement = document.getElementById('dailyAmounts');
    dailyAmountsElement.innerHTML = `
        <div style="display: flex;">
            <span style="text-align: center; margin-top: 15px; margin-right: 10px; flex: 2; font-weight: bold;">Ежедневный выпуск эмиссии</span>
        </div>
        <div style="display: flex; border-bottom: 1px solid #ddd;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Сообщество:</span>
            <span style="text-align: left; flex: 2;">${roundedAmounts.emissionsDaily.toLocaleString()}</span>
            <span style="text-align: left; flex: 1.3; color: grey;">${(amounts.emissionsDaily / amounts.dailyEmitted * 100).toFixed(2)}%</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: center; margin-right: 10px; flex: 2; font-weight: bold;">Ежедневная разблокировка вестинга</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Ранние пол.:</span>
            <span style="text-align: left; flex: 2;">${roundedAmounts.earlyUsersDaily.toLocaleString()}</span>
            <span style="text-align: left; flex: 1.3; color: grey;">${(amounts.earlyUsersDaily / amounts.dailyEmitted * 100).toFixed(2)}%</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Осн. команда:</span>
            <span style="text-align: left; flex: 2;">${roundedAmounts.coreTeamDaily.toLocaleString()}</span>
            <span style="text-align: left; flex: 1.3; color: grey;">${(amounts.coreTeamDaily / amounts.dailyEmitted * 100).toFixed(2)}%</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Инвесторы:</span>
            <span style="text-align: left; flex: 2;">${roundedAmounts.investorsDaily.toLocaleString()}</span>
            <span style="text-align: left; flex: 1.3; color: grey;">${(amounts.investorsDaily / amounts.dailyEmitted * 100).toFixed(2)}%</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Сотрудники:</span>
            <span style="text-align: left; flex: 2;">${roundedAmounts.employeesDaily.toLocaleString()}</span>
            <span style="text-align: left; flex: 1.3; color: grey;">${(amounts.employeesDaily / amounts.dailyEmitted * 100).toFixed(2)}%</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Резерв:</span>
            <span style="text-align: left; flex: 2;">${(0).toLocaleString()}</span>
            <span style="text-align: left; flex: 1.3; color: grey;">${(0).toFixed(2)}%</span>
        </div>
        <div style="display: flex; border-top: 1px solid #ddd;">
            <span style="text-align: right; margin-right: 10px; flex: 2; font-weight: bold;">Всего в день:</span>
            <span style="text-align: left; flex: 2; font-weight: bold;">${(Math.round(amounts.dailyEmitted)).toLocaleString()}</span>
            <span style="text-align: left; flex: 1.3; color: grey;"></span>
        </div>
    `;


    // Обновление статистики эмиссии
    const totalEmissionsElement = document.getElementById('totalEmissions');
    totalEmissionsElement.innerHTML = `
        <div style="text-align: center; font-weight: bold; border-bottom: 1px solid #ddd;">Статистика CRV на ${chosenDateString}</div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Максимальное предложение:</span>
            <span style="text-align: left; flex: 2;">${roundAmount(amounts.maxSupply).toLocaleString()}</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Всего в обращении:</span>
            <span style="text-align: left; flex: 2;">${roundAmount(amounts.totalEmitted).toLocaleString()}</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Всего предложение:</span>
            <span style="text-align: left; flex: 2;">${roundAmount(Math.max(1303030303 + amounts.emissionsTotal, amounts.totalEmitted)).toLocaleString()}</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Оставшаяся эмиссия:</span>
            <span style="text-align: left; flex: 2;">${roundAmount(amounts.maxSupply - amounts.totalEmitted - amounts.vestingRemaining).toLocaleString()}</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Оставшийся вестинг:</span>
            <span style="text-align: left; flex: 2;">
                ${Math.max(0, roundAmount(amounts.vestingRemaining)).toLocaleString()}
            </span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Процент в обращении:</span>
            <span style="text-align: left; flex: 2;">${amounts.percentEmitted.toLocaleString(undefined, { maximumFractionDigits: 2 })}%</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Ежедневно эмитируется & вестится:</span>
            <span style="text-align: left; flex: 2;">${roundAmount(amounts.dailyEmitted).toLocaleString()}</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Годовая эмиссия & вестинг:</span>
            <span style="text-align: left; flex: 2;">${roundAmount(amounts.yearlyEmitted).toLocaleString()}</span>
        </div>
        <div style="display: flex;">
            <span style="text-align: right; margin-right: 10px; flex: 2;">Ставка инфляции CRV:</span>
            <span style="text-align: left; flex: 2;">${amounts.inflationRate.toLocaleString(undefined, { maximumFractionDigits: 2 })}%</span>
        </div>
    `;
}

// Set the initial date to today
document.getElementById('dateInput').value = new Date().toISOString().slice(0, 10);
renderCharts();

function getCurrentDate() {
  return new Date().toISOString().slice(0, 10);
}

function getNextReductionDate() {
  const startDate = new Date('2020-08-13');
  const currentDate = new Date();
  
  let nextEventDate = new Date(startDate);
  
  while (nextEventDate < currentDate) {
    nextEventDate.setDate(nextEventDate.getDate() + 365);
  }

  return nextEventDate.toISOString().slice(0, 10);
}

function setDate(date) {
  document.getElementById('dateInput').value = date;
  renderCharts();
}
</script>



<script>
function generateDatasets() {
  const datasets = {
    emissionsTotal: [],
    emissionsYearly: [],
    earlyUsersTotal: [],
    earlyUsersYearly: [],
    coreTeamTotal: [],
    coreTeamYearly: [],
    investorsTotal: [],
    investorsYearly: [],
    employeesTotal: [],
    employeesYearly: [],
    reserveTotal: [],
    reserveYearly: [],
    totalEmitted: [],
    dailyEmitted: [],
    yearlyEmitted: [],
    inflationRate: [],
    maxSupply: [],
    percentEmitted: [],
    vestingRemaining: []
  };

  const startDate = new Date('2023-08-13');
  const endDate = new Date(startDate);
  endDate.setFullYear(endDate.getFullYear() + 10);

  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 365)) {
    const amounts = calcAmounts(date);

    for (const key in amounts) {
      
      let value;
      if (key === 'percentEmitted' || key === 'inflationRate') {
        value = parseFloat(amounts[key].toFixed(2));
        datasets[key].push({ x: new Date(date), y: value });
      } else if (key.endsWith('Daily')) {
        const newKey = key.replace('Daily', 'Yearly');
        value = Math.round(amounts[key] * 365);
        datasets[newKey].push({ x: new Date(date), y: value });
      } else {
        value = Math.round(amounts[key]);
        datasets[key].push({ x: new Date(date), y: value });
      }
    }
  }

  return datasets;
}

var crv10yearChartctx = document.getElementById('crv10yearChart').getContext('2d');
const datasets = generateDatasets();

/*['Community', 'Early Users', 'Core Team', 'Investors', 'Employees', 'Reserve'],
['#FF6384', '#36A2EB', '#FFCE56', '#8E5EA2', '#3cba9f', '#e8c3b9'] */

new Chart(crv10yearChartctx, {
  type: 'line',
  data: {
    datasets: [
      {
        label: 'Годовая эмиссия сообщества CRV',
        data: datasets.emissionsYearly,
        borderColor: '#FF6384',
        fill: false,
        yAxisID: 'y',
        pointRadius: 0,
      },
      {
        label: 'Годовая эмиссия CRV для основной команды',
        data: datasets.coreTeamYearly,
        borderColor: '#FFCE56',
        fill: false,
        yAxisID: 'y',
        pointRadius: 0,
      },
      {
        label: 'Общий объем в обращении',
        data: datasets.totalEmitted,
        borderColor: '#8E5EA2',
        fill: false,
        yAxisID: 'y',
        pointRadius: 0,
        hidden: true
      },
      {
        label: 'Общий процент распределенных',
        data: datasets.percentEmitted,
        borderColor: '#36A2EB',
        fill: false,
        yAxisID: 'y1',
        pointRadius: 0,
        borderDash: [5, 5],
        borderDashOffset: 0
      },
      {
        label: 'Ставка инфляции CRV',
        data: datasets.inflationRate,
        borderColor: '#3cba9f',
        fill: false,
        yAxisID: 'y1',
        pointRadius: 0,
        borderDash: [5, 5],
        borderDashOffset: 0
      }
    ],
  },
  options: {
    devicePixelRatio: 2.5,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
        },
        title: {
          display: true,
          text: 'Date',
        },
        ticks: {
          source: 'data',
        },
      },
      y: {
        beginAtZero: true,
        position: 'left',
        title: {
          display: true,
          text: 'CRV Amount',
        },
      },
      y1: {
        beginAtZero: true,
        position: 'right',
        title: {
          display: true,
          text: 'Percentage',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: false,
      axis: 'x',
    },
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
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
          title: function (context) {
            const date = new Date(context[0].parsed.x).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });
            return date;
          },
          label: function (context) {
            if (context.datasetIndex === 0) {
                const datasets = context.chart.data.datasets;
                const labels = [];
                const communityYearly = datasets[0].data[context.dataIndex].y;
                const coreTeamYearly = datasets[1].data[context.dataIndex].y;
                const totalDistributed = datasets[2].data[context.dataIndex].y;
                const percentDistributed = datasets[3].data[context.dataIndex].y;
                const inflationRate = datasets[4].data[context.dataIndex].y;

                labels.push(`Community Yearly CRV: ${communityYearly.toLocaleString(undefined)}`);
                labels.push(`Core Team Yearly CRV: ${coreTeamYearly.toLocaleString(undefined)}`);
                labels.push(`Total Circulating CRV: ${totalDistributed.toLocaleString(undefined)}`);
                labels.push(`Total Distributed %: ${percentDistributed}%`);
                labels.push(`CRV Inflation Rate: ${inflationRate}%`);

                return labels;
            }
            return '';
          },
        },
      },
    },
    legend: {
      position: 'bottom',
    },
  },
});
</script>


<script>
var ctxAllocation = document.getElementById('crvAllocationChart').getContext('2d');
var dataAllocation = [1727272729, 151515152, 800961153, 108129756, 90909091, 151515152];
var totalSumAllocation = dataAllocation.reduce((a, b) => a + b, 0);
var percentagesAllocation = dataAllocation.map(value => ((value / totalSumAllocation) * 100).toFixed(2));

var crvAllocationChart = new Chart(ctxAllocation, {
    type: 'pie',
    data: {
        labels: ['Сообщество (эмиссии)', 'Ранние пользователи (провайдеры ликвидности до CRV)', 'Основная команда', 'Инвесторы', 'Сотрудники', 'Резерв сообщества'],
        datasets: [{
            data: dataAllocation,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E5EA2', '#3cba9f', '#e8c3b9'],
            borderWidth: 1
        }]
    },
    options: {
        devicePixelRatio: 2.5,
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        var label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        var value = context.raw;
                        var percentage = percentagesAllocation[context.dataIndex];
                        label += value.toLocaleString() + ' (' + percentage + '%)';
                        return label;
                    }
                }
            },
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Общая аллокация CRV'
            }
        }
    }
});
</script>

<script>
var ctxLaunch = document.getElementById('crvLaunchChart').getContext('2d');
var dataLaunch = [151515152, 800961152, 108129756, 90909090, 151515152];
var totalSumLaunch = dataLaunch.reduce((a, b) => a + b, 0);
var percentagesLaunch = dataLaunch.map(value => ((value / totalSumLaunch) * 100).toFixed(2));

var crvLaunchChart = new Chart(ctxLaunch, {
    type: 'pie',
    data: {
        labels: [
            'Ранние пользователи',
            'Основная команда',
            'Инвесторы',
            'Сотрудники',
            'Резерв'
        ],
        datasets: [{
            data: dataLaunch,
            backgroundColor: ['#36A2EB', '#FFCE56', '#8E5EA2', '#3cba9f', '#e8c3b9'],
            borderWidth: 1
        }]
    },
    options: {
        devicePixelRatio: 2.5,
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        var label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        var value = context.raw;
                        var percentage = percentagesLaunch[context.dataIndex];
                        label += value.toLocaleString() + ' (' + percentage + '%)';
                        return label;
                    }
                }
            },
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Распределение при запуске CRV'
            }
        }
    }
});
</script>
