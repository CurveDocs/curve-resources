<h1>Locked CRV (veCRV)</h1>

veCRV — это аббревиатура от **vote-escrowed CRV** (голосовая заморозка CRV). Пользователи могут заблокировать свои CRV на **минимум 1 неделю**, **максимум 4 года**, в обмен на veCRV. **Количество veCRV [уменьшается](#vecrv-decay) линейно с течением выбранного срока блокировки**. **veCRV не подлежит передаче**. Чем дольше вы блокируете, тем больше veCRV вы получаете. Подробнее см. в разделе [формула блокировки](#crv-to-vecrv-formula), но простое объяснение таково:

- 1 CRV, заблокированный на 4 года = 1 veCRV
- 1 CRV, заблокированный на 3 года = 0.75 veCRV
- 1 CRV, заблокированный на 2 года = 0.5 veCRV
- 1 CRV, заблокированный на 1 год = 0.25 veCRV

**Блокировка (Locking) — это концепция, созданная для выравнивания стимулов в управлении.** Многие системы голосования с токенами имеют проблему: кто-то может купить токены на рынке, чтобы повлиять на голосование по управлению, а затем продать токены после того, как голосование прошло или провалилось. Эти пользователи могут значительно влиять на голосования по управлению и при этом не подвергаются серьезному риску, держа токены всего несколько дней. Блокировка предотвращает это. Пользователи должны заблокировать свои токены на определенный период времени, чтобы получить голосовую силу, и пользователи получают больше голосовой силы, если блокируют свои токены на более длительный срок.

Чтобы узнать, как заблокировать токены, смотрите руководство здесь: [блокировка токенов CRV](./locking-your-crv.md)

!!!info
    Количествo veCRV, отображаемое как статистика в различных местах, не является точным отражением количества заблокированных CRV. Так как 1 veCRV не равен 1 CRV из-за времени блокировки и уменьшения. Читайте раздел [Информация о блокировке](#locking-information) этой страницы для получения дополнительной информации.

## **Преимущества veCRV** {#vecrv-benefits}

Пользователи с veCRV получают следующие преимущества:

### **Заработок на комиссиях** {#earning-fees}

После двух предложений, инициированных сообществом, и последующих голосований по управлению в сентябре 2020 года (ссылки на голосования: [[1]](https://curvemonitor.com/#/dao/proposal/parameter/2), [[2]](https://curvemonitor.com/#/dao/proposal/parameter/3)), административные комиссии пулов Curve были установлены на уровне 50%. Это означает, что **50% всех торговых комиссий распределяются между держателями veCRV**, а оставшиеся 50% идут соответствующим поставщикам ликвидности пулов. Это распределение было реализовано для выравнивания стимулов между поставщиками ликвидности и участниками управления (держателями veCRV). Кроме того, с момента запуска собственного стейблкоина Curve (crvUSD), **100% накопленных процентов с рынков crvUSD** также направляются держателям veCRV. Держатели veCRV не получают никакой прямой ценности от кредитных рынков, но получают косвенную ценность от увеличения предложения crvUSD.

Все собранные комиссии конвертируются в `crvUSD` и распределяются между держателями veCRV. См. [Как заявить торговые комиссии](./claiming-trading-fees.md) для получения инструкций по заявке или [Сбор и распределение комиссий](./fee-collection-distribution.md) для информации о том, как они собираются.

### **Увеличение (Boosting) вознаграждений CRV** {#boosting-crv-rewards}

Одним из основных стимулов для vote-locking (голосовательной блокировки) является механизм **boost**. Пользователи, которые предоставляют ликвидность пулу обмена и/или кредитному рынку с [счётчиками вознаграждений (gauges)](/reward-gauges/overview/) и имеют заблокированный CRV для голосования, **получают увеличенные вознаграждения CRV**. См. [Увеличение (Boosting) вознаграждений CRV](../reward-gauges/boosting-your-crv-rewards.md) для получения дополнительной информации.

### **Управление** {#governance}

- Баланс veCRV представляет собой силу голоса пользователя в Curve DAO, что позволяет ему **голосовать по on-chain предложениям**.

- Кроме того, важной частью управления Curve являются **голосования по весу счётчиков вознаграждений (gauge weight votes)**. Эмиссии токенов Curve устроены таким образом, что **держатели veCRV могут выбирать, как будут распределяться будущие эмиссии**. Пулы ликвидности на Curve могут быть добавлены в GaugeController через успешно прошедшее голосование DAO, что делает их претендентами на получение эмиссий токенов CRV. Вес счётчиков определяет, сколько CRV получает каждый пул. Каждую **четверг в 00:00 UTC** обновленные веса счётчиков применяются. Подробнее см. [Голосование](../governance/voting.md) и [Вес счётчиков вознаграждений (Gauge Weights)](../reward-gauges/gauge-weights.md)

---

## **Информация о блокировке** {#locking-information}

Когда пользователь блокирует свои токены CRV для голосования, он получает veCRV в зависимости от длительности блокировки и количества заблокированных токенов. Блокировка **не обратима**, а токены veCRV **не подлежат передаче**. Если пользователь решает осуществить vote-locking своих токенов CRV, он сможет **возвратить токены CRV только после окончания срока блокировки**.

### **Формула CRV в veCRV** {#crv-to-vecrv-formula}

При блокировке CRV в veCRV вы получаете количество veCRV, зависящее от продолжительности блокировки, минимальное время — 1 неделя, максимальное время — 4 года:

$$ \text{veCRV} = \frac{\text{CRV} \times \text{lockTime}}{4 \text{ года}} $$

Максимальная продолжительность блокировки — 4 года. Пользователи не могут блокировать токены на более длительные периоды для сохранения соотношения 1 CRV: 1 veCRV, вместо этого им необходимо продолжать продлевать свою блокировку. Пользователи могут вывести свои CRV в любое время после того, как их veCRV снизится до 0 (истек срок блокировки).

### **Уменьшение veCRV (decay)** {#vecrv-decay}

Количество veCRV у пользователя будет уменьшаться со временем по мере приближения даты разблокировки. Параметр `lockTime` в приведенной выше формуле скорее должен называться `lockTimeLeft` (оставшееся время блокировки), так как veCRV пользователя постоянно пересчитывается. Существует два способа изменить блокировку: добавить к ней или продлить блокировку. Что происходит в обоих случаях и как это влияет на veCRV и уменьшение, показано на диаграммах ниже.

#### **Продление блокировок** {#extending-locks}

Продление блокировки означает увеличение оставшегося времени блокировки. В приведенном выше примере, если Алиса заблокировала 100 CRV на 4 года, через 3 года у нее останется только 25 veCRV, так как время блокировки теперь составляет 1 год. Если она снова продлит свою блокировку до 4 лет после этих 3 лет, у нее снова будет 100 veCRV:

<canvas id="extendLockChart"></canvas>

#### **Добавление CRV к блокировкам** {#adding-crv-to-locks}

Добавление CRV к блокировкам означает, что дата разблокировки останется прежней, но будет заблокировано больше CRV, что означает больше veCRV. Если Алиса заблокировала 100 CRV на 4 года, но через 2 года добавила 200 CRV к своей блокировке, у нее будет 150 veCRV (всего заблокировано 300 CRV на 2 года). Эти veCRV будут продолжать уменьшаться до 0 в течение следующих 2 лет:

<canvas id="addLockChart"></canvas>

---

## **Внешние стимулы veCRV** {#external-vecrv-incentives}

Внешние маркетплейсы (вне сферы действия Curve) были созданы для того, чтобы оплачивать голосование пользователей за определенные пулы обмена/кредитные рынки и предоставлять вознаграждения взамен. Curve не одобряет и не осуждает такие маркетплейсы или поведение. Пользователи имеют право использовать эти маркетплейсы по своему усмотрению.

Эти стимулы могут быть очень выгодными и могут превышать платформенные комиссии, заработанные veCRV, в несколько раз еженедельно.

Эти стимулы работают следующим образом:

1. Проект хочет обеспечить ликвидность для своего токена в пуле обмена на Curve.
2. Проект предоставляет стимул для пользователей, чтобы они проголосовали за пул обмена в еженедельном голосовании по счётчикам вознаграждений (gauges). Этот стимул может быть любой суммы в любом токене, например, 100k долларов в ETH.
3. Если пользователи голосуют за пул, они получают часть стимула в зависимости от того, сколько у них veCRV и сколько всего проголосовало за пул.

   Например, 2 пользователя голосуют за пул — Алиса и Боб. У Алисы 100k veCRV, у Боба 900k veCRV. Всего проголосовало за пул 1M. 100k долларов в ETH распределяются между Алисой и Бобом на основе их veCRV, так что Алиса получает 10k долларов в ETH, а Боб получает 90k долларов в ETH.

## **Внешние ликвидные замораживатели CRV** {#external-crv-liquid-lockers}

Ликвидные замораживатели CRV — это продукты, находящиеся вне платформы Curve. Некоторые проекты создали способы замораживать 1 CRV за 1 veCRV навсегда и предоставлять пользователю другой токен взамен, например, tokenCRV (этот токен не существует, он был создан только для этого примера). Большинство этих токенов, таких как tokenCRV, не обладают всеми преимуществами обычного veCRV. Кроме того, так как все дизайны ориентированы на постоянную заморозку, нет возможности вывести замороженные CRV из их систем. Пользователь должен обменять свой tokenCRV обратно на обычный CRV на открытом рынке. Эти токены обычно стоят меньше чем 1 CRV.

Эти токены рискованны, единственный способ гарантировать возможность вывода того же количества CRV, которое было депонировано, — это блокировка через [официальный интерфейс Curve Locker](https://dao.curve.fi/locker).

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation"></script>


<script>
    // Получить сегодняшнюю дату
    const today = new Date();
    const endDate = new Date(today);
    const relockDate = new Date(today);
    relockDate.setFullYear(today.getFullYear() + 3);
    endDate.setFullYear(today.getFullYear() + 7);

    // Генерация точек данных каждые 7 дней
    let data = [];
    let currentDate = new Date(today);
    
    while (currentDate <= relockDate) {
        const x = (currentDate - today) / (1000 * 60 * 60 * 24); // Преобразование миллисекунд в дни
        const veCRV = 100 - 100*x / (4 * 365);
        data.push({ x: currentDate.toISOString().split('T')[0], y: veCRV});
        currentDate.setDate(currentDate.getDate() + 7);
    }
    currentDate.setDate(currentDate.getDate() - 7);
    while (currentDate <= endDate) {
        const x = (currentDate - relockDate) / (1000 * 60 * 60 * 24); // Преобразование миллисекунд в дни
        const veCRV = Math.min(100 - 100*x / (4 * 365), 100);
        data.push({ x: currentDate.toISOString().split('T')[0], y: veCRV});
        currentDate.setDate(currentDate.getDate() + 7);
    }
    

    // Создание графика
    const ctx = document.getElementById('extendLockChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Процент veCRV',
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
                            content: (ctx) => ['Продлить блокировку на 4 года'],
                            display: true,
                            position: 'end'
                        }
                    }]
                },
                title: {
                    display: true,
                    text: 'Уменьшение veCRV для 100 CRV, заблокированных на 4 года с продлением блокировки после 3 лет на еще 4 года'
                },
                legend: {
                    display: false
                },
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: (context) => {
                            const date = new Date(context[0].parsed.x);
                            return date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'short', day: 'numeric' });
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
                        text: 'Дата'
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

    // Генерация точек данных каждые 7 дней
    data = [];
    currentDate = new Date(today);
    
    while (currentDate <= addLockDate) {
        const x = (currentDate - today) / (1000 * 60 * 60 * 24); // Преобразование миллисекунд в дни
        const veCRV = 100 - 100*x / (4 * 365);
        data.push({ x: currentDate.toISOString().split('T')[0], y: veCRV});
        currentDate.setDate(currentDate.getDate() + 7);
    }
    currentDate.setDate(currentDate.getDate() - 7);
    while (currentDate <= endDate) {
        const x = (currentDate - addLockDate) / (1000 * 60 * 60 * 24); // Преобразование миллисекунд в дни
        const veCRV = Math.min(150 - 150*x / (2 * 365), 150);
        data.push({ x: currentDate.toISOString().split('T')[0], y: veCRV});
        currentDate.setDate(currentDate.getDate() + 7);
    }
    

    // Создание графика
    const addLockCtx = document.getElementById('addLockChart').getContext('2d');
    new Chart(addLockCtx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Процент veCRV',
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
                            content: (addLockCtx) => ['Добавить 200 CRV к блокировке'],
                            display: true,
                            position: 'end'
                        }
                    }]
                },
                title: {
                    display: true,
                    text: 'Уменьшение veCRV для 100 CRV, заблокированных на 4 года с добавлением 200 CRV к блокировке после 2 лет'
                },
                legend: {
                    display: false
                },
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: (context) => {
                            const date = new Date(context[0].parsed.x);
                            return date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'short', day: 'numeric' });
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
                        text: 'Дата'
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

