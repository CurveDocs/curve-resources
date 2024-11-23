<h1>Обзор CRV</h1>

Токен CRV — это токен для Curve DAO, который управляет всей экосистемой Curve Finance. CRV был запущен 13 августа 2020 года.

## **Эмиссия** {#supply}

Общая эмиссия в размере 3,03 миллиарда распределена следующим образом:

* 62% для провайдеров ликвидности сообщества
* 30% для акционеров (команда и инвесторы) с вестингом на 2-4 года
* 5% для резервов сообщества
* 3% для сотрудников с вестингом на 2 года

<div class="centered" style="transform: scale(1.1);">
  <canvas id="crvAllocationChart"></canvas>
</div>
<br>

Начальная эмиссия около 1,3 миллиарда (~43%) была распределена следующим образом:

* 5% для провайдеров ликвидности до запуска CRV с вестингом на 1 год
* 30% для акционеров (команда и инвесторы) с вестингом на 2-4 года
* 3% для сотрудников с вестингом на 2 года
* 5% для резервов сообщества

Циркулирующая эмиссия на момент запуска была равна 0, а первоначальная скорость выпуска составляла около 2 миллионов CRV в день.

Инфляция CRV (эмиссия сообщества для предоставления ликвидности) началась с 274 миллионов токенов в год в 2020 году и каждый год уменьшается примерно на 16%.

Подробнее смотрите на странице [Эмиссия и распределение](./supply-distribution.md).

## **Утилитарность (практическая применимость)** {#utility}

Есть 4 основных применения CRV, большинство из которых требует блокированные CRV (veCRV):

1. **Стимулирование провайдеров ликвидности** к предоставлению ликвидности пулам и рынкам кредитования через награды CRV. Таким образом, CRV распределяются среди сообщества.
2. Позволяет провайдерам ликвидности **увеличивать свои награды CRV** до 2,5 раз, удерживая veCRV.
3. Позволяет пользователям участвовать и **голосовать по предложениям управления**, включая распределение эмиссии CRV (голоса за распределение веса вознаграждений по счётчикам) через удержание veCRV.
4. **Получение части комиссий** от обменов и кредитов, происходящих на Curve, через удержание veCRV.

!!!info "Информация"
    veCRV обозначает **блокированные для голосования CRV**, представляющие CRV токены, блокированные для голосования в Curve DAO. Блокированные CRV, голос-блокированные CRV и vote-escrowed CRV — все эти термины обозначают veCRV и используются взаимозаменяемо в экосистеме.

    Для получения информации о том, как блокировать токены, смотрите [**руководство по блокировке**](../vecrv/locking-your-crv.md), или для получения дополнительной информации о veCRV смотрите страницу [**veCRV**](../vecrv/overview.md).

---

# **Матрица CRV** {#the-crv-matrix}

Таблица ниже поможет вам понять ценность CRV и veCRV в разных ситуациях

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
  font-size: 12px;
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
  font-size: 11px;
  font-weight: bold;
  vertical-align: bottom;
}
.tg .tg-kk90 {
  background-color: #9aff99;
  border-color: #656565;
  font-size: 11px;
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
  font-size: 11px;
  color: black;
}
</style>
<table class="tg"><thead>
  <tr>
    <th class="tg-hkgo"></th>
    <th class="tg-3lxi">Ликвидность в пуле &amp; без veCRV</th>
    <th class="tg-3lxi">Ликвидность в пуле &amp; с veCRV</th>
    <th class="tg-3lxi">Ликвидность в пуле &amp; стейкинг в счётчике (gauge) &amp; без veCRV</th>
    <th class="tg-3lxi">Ликвидность в пуле &amp; стейкинг в счётчике (gauge) &amp; с veCRV</th>
    <th class="tg-3lxi">Без ликвидности &amp; без veCRV</th>
    <th class="tg-3lxi">Без ликвидности &amp; с veCRV</th>
  </tr></thead>
<tbody>
  <tr>
    <td class="tg-xmch">Получает доходы от кредитования и торговли</td>
    <td class="tg-hs62"> Да</td>
    <td class="tg-hs62"> Да</td>
    <td class="tg-hs62"> Да</td>
    <td class="tg-hs62"> Да</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-gtpm"> Нет</td>
  </tr>
  <tr>
    <td class="tg-xmch">Получает CRV эмиссии</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-hs62"> Да</td>
    <td class="tg-hs62"> Да</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-gtpm"> Нет</td>
  </tr>
  <tr>
    <td class="tg-xmch">Получает увеличенные CRV эмиссии</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-hs62"> Да</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-gtpm"> Нет</td>
  </tr>
  <tr>
    <td class="tg-xmch">Может голосовать по предложениям DAO</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-hs62"> Да</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-hs62"> Да</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-kk90"> Да</td>
  </tr>
  <tr>
    <td class="tg-xmch">Может голосовать за распределение веса вознаграждений по счётчикам</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-hs62"> Да</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-hs62"> Да</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-kk90"> Да</td>
  </tr>
  <tr>
    <td class="tg-xmch">Получает комиссии администратора</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-hs62"> Да</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-hs62"> Да</td>
    <td class="tg-jlsk"> Нет</td>
    <td class="tg-kk90"> Да</td>
  </tr>
</tbody></table>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
    var ctx = document.getElementById('crvAllocationChart').getContext('2d');
    var data = [1727272729+151515152, 800961153, 108129756, 90909091, 151515152];
    var totalSum = data.reduce((a, b) => a + b, 0);
    var percentages = data.map(value => ((value / totalSum) * 100).toFixed(2));

    var crvAllocationChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Сообщество', 'Основная команда', 'Инвесторы', 'Сотрудники', 'Резерв'],
            datasets: [{
                data: data,
                backgroundColor: ['#FF6384', '#FFCE56', '#8E5EA2', '#3cba9f', '#e8c3b9'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            devicePixelRatio: 2.5,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                                var label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                var value = context.raw;
                                var percentage = percentages[context.dataIndex];
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
                    text: 'Общая эмиссия CRV'
                }
            }
        }
    });
</script>

