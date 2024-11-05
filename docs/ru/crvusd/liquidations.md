<h1>Мягкие и Жёсткие Ликвидации</h1>

Ликвидации в Curve Lending и crvUSD работают иначе, чем другие DeFi займы. Существуют мягкие ликвидации (Soft-liquidations, включая де-ликвидации) и жёсткие ликвидации (Hard-liquidations). Эта страница их определяет и показывает примеры.

## **Мягкая Ликвидация** {#soft-liquidation}

Когда позиция переходит в режим мягкой ликвидации (Soft-liquidation), это предупреждение. Система будет пытаться защитить займы пользователей, конвертируя исходный залог (collateral) в заимствованный актив (borrowed asset) по мере снижения цен и обратно в исходный залог по мере повышения цен.

![Потеря залога](../images/crvusd/soft-liq.svg#only-light){: .centered }
![Потеря залога](../images/crvusd/soft-liq-dark.svg#only-dark){: .centered }

**Жёсткая ликвидация не происходит на нижней границе диапазона мягкой ликвидации** (Soft-liquidation range).

**Жёсткая ликвидация может произойти только когда здоровье займа** (health) **падает ниже 0**. Если здоровье отрицательно, любой может погасить долг (debt) и забрать залог, поддерживающий займ. Это должно быть всегда выгодно, но в редких случаях может не сработать. Если это происходит, это называется [плохим долгом](./loan-concepts.md#bad-debt) (bad debt).

В режимах мягкой ликвидации и де-ликвидации залог будет постепенно теряться за счёт комиссий за обмен туда и обратно по мере изменения цен, так происходит ухудшение здоровья займа со временем. **Здоровье может ухудшаться очень быстро при высокой волатильности** (volatility). Более подробную информацию о здоровье займа можно найти [здесь](./loan-concepts.md#loan-health).

[**Апплет мягкой ликвидации**](#soft-liquidation-applet) также симулирует, как залог конвертируется через диапазон мягкой ликвидации.

---

## **Жёсткая Ликвидация** {#hard-liquidation}

**Мягкая ликвидация переходит в жёсткую ликвидацию, когда здоровье падает до 0%**. В жёсткой ликвидации заёмщик сохраняет свои заимствованные активы (обычно crvUSD), но теряет залог. Процесс подробно описан [здесь](loan-concepts.md#hard-liquidations).

**Жёсткая ликвидация не срабатывает на нижней границе диапазона мягкой ликвидации, она зависит только от здоровья займа**. Пользователь может полностью конвертировать свой залог в заимствованный актив и оказаться ниже диапазона мягкой ликвидации, если он тщательно управляет своим здоровьем займа.

Здоровье можно увеличить в режиме мягкой ликвидации, погасив часть или весь долг.

---

## **Пример Жёсткой Ликвидации** {#hard-liquidation-example}

**Жёсткая ликвидация может произойти только когда здоровье займа составляет 0% или ниже**. Если здоровье составляет 0% или ниже, любой может погасить долг и забрать залог, поддерживающий займ. Это должно быть всегда выгодно, но в редких случаях может не сработать. Если это происходит, это называется [плохим долгом](./loan-concepts.md#bad-debt) (bad debt).

Ниже приведён пример займа на рынке кредитования CRV/crvUSD, который был жёстко ликвидирован. График интерактивный: при наведении курсора на цены вы можете увидеть, как здоровье займа уменьшается со временем. Видно, что жёсткая ликвидация зависит только от здоровья. **Нижняя граница диапазона мягкой ликвидации не является местом жёсткой ликвидации**.

<h2 style="margin: 10px 0 20px; text-align: center;">Жёсткая ликвидация - Заимствование crvUSD с использованием CRV</h2>
<div class="centered2" style="width: 100%">
  <canvas id="crvHardLiq"></canvas>
</div>

**Всегда лучше самоликвидировать займ до его жёсткой ликвидации**. Это потому, что расчёт здоровья (health calculation) оценивает ваш залог ниже его фактической стоимости. В этом примере заёмщик вернул бы на 11,107 crvUSD больше, если бы самоликвидировал займ, вместо того чтобы позволить ему быть жёстко ликвидированным.

---

## **Пример Управления Здоровьем и Самоликвидации** {#managing-health-self-liquidation-example}

Ниже приведён пример того, как управлять здоровьем (health) и как работает самоликвидация (self-liquidation). Это показывает займ на рынке кредитования WETH/crvUSD. Когда пользователь попал в режим мягкой ликвидации, он решил погасить около 10% своего долга, что увеличило его здоровье с примерно 3% до 13%, но сохранило диапазон мягкой ликвидации неизменным. Затем он долгое время оставался в режиме мягкой ликвидации, поэтому он самоликвидировал займ. **Если часть долга погашена во время мягкой ликвидации, диапазон останется прежним, но здоровье увеличится**. Если долг погашен за пределами диапазона мягкой ликвидации, диапазон будет снижаться.

Самоликвидирование здесь было хорошей идеей, потому что у него уже было 38,857 crvUSD в качестве залога (из обменянного WETH в режиме мягкой ликвидации), а его долг составлял 98,299 crvUSD. Ему нужно было отправить только 59,442 crvUSD и он получил обратно 24.3371 WETH. Если бы он выбрал погашение, ему пришлось бы погасить весь долг в размере 98,299 crvUSD и получить обратно весь залог (38,857 crvUSD и 24.3371 WETH) в обмен.

<h2 style="margin: 10px 0 20px; text-align: center;">Самоликвидирование - Заимствование crvUSD с использованием WETH</h2>
<div class="centered2" style="width: 100%">
  <canvas id="wethSelfLiq"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/2.2.1/chartjs-plugin-annotation.min.js"></script>


## **Апплет Мягкой Ликвидации** {#soft-liquidation-applet}

Этот апплет симулирует, как залог конвертируется через диапазон мягкой ликвидации.


<style>
    .price-input {
        width: 100px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
        text-align: center;
        outline: 1px solid #ccc;
    }
    .price-input:focus {
        outline: 2px solid #007bff;
        border-color: #007bff;
    }
    #ethCrvUsdChartContainer {
        width: 80%;
        max-width: 600px;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        margin: 20px auto;
    }
</style>

<div id="ethCrvUsdChartContainer">
    <h2 style="margin: 10px 0 20px; text-align: center;">Конвертация Залога в Мягкой Ликвидации</h2>
    <div style="margin-top: 10px;">
        <label for="collateralInput">Количество залога (ETH):</label>
        <input type="number" id="collateralInput" class="price-input" value="10" min="0" step="0.1">
    </div>
    <div style="position: relative; margin-top: 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span>Нижняя граница диапазона SL:</span>
            <span>Верхняя граница диапазона SL:</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 5px;">
            <input type="number" id="bottomRange" class="price-input" value="2311.92">
            <span id="currentPrice" style="font-weight: bold;"></span>
            <input type="number" id="topRange" class="price-input" value="2556.35">
        </div>
        <input type="range" id="ethCrvUsdSlider" style="width: 100%;" min="0" max="100" value="50">
    </div>
    <canvas id="ethCrvUsdChart"></canvas>
    <div id="ethCrvUsdValues" style="text-align: center; margin-top: 10px;"></div>
</div>


<script>
function createChart(data, chartId, yOpenLabel, yCloseLabel, tokenCOL, tokenDEBT) {
  const ctx = document.getElementById(chartId).getContext('2d');
  
  // Конвертируем эпохальные времена в объекты Date
  const dates = data.time.map(epoch => new Date(parseInt(epoch) * 1000));

  // Вычисляем xmin и xmax
  const timeRange = parseInt(data.time[data.time.length - 1]) - parseInt(data.time[0]);
  const xmin = new Date((parseInt(data.time[0]) - timeRange * 0.1) * 1000);
  const xmax = new Date((parseInt(data.time[data.time.length - 1]) + timeRange * 0.1) * 1000);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          label: 'Цена',
          data: data.price,
          borderColor: 'orange',
          pointRadius: 0,
          pointHoverRadius: 10,
          pointHitRadius: 10
        },
        {
          label: 'Диапазон цен мягкой ликвидации',
          data: data.slUp,
          fill: '+1',
          backgroundColor: 'rgba(255, 255, 0, 0.25)',
          borderColor: 'rgba(255, 255, 0, 0.25)',
          borderWidth: 0,
          pointHitRadius: 0,
          pointRadius: 0,
        },
        {
          label: 'Диапазон цен мягкой ликвидации (нижний)',
          data: data.slDown,
          fill: '-1',
          backgroundColor: 'rgba(255, 255, 0, 0.25)',
          borderColor: 'rgba(255, 255, 0, 0.25)',
          borderWidth: 0,
          pointHitRadius: 0,
          pointRadius: 0,
        },
      ]
    },
    options: {
      responsive: true,
      aspectRatio: 4/3,
      devicePixelRatio: 1,
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'MMM d, yyyy'
            }
          },
          title: {
            display: true,
            text: 'Дата'
          },
          ticks: {
            maxRotation: 45,
            minRotation: 25
          },
          min: xmin,
          max: xmax
        },
        y: {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Цена ($)'
          }
        }
      },
      plugins: {
        annotation: {
          annotations: {
            firstLine: {
              type: 'line',
              xMin: dates[0],
              xMax: dates[0],
              borderColor: 'rgb(41, 155, 31)',
              borderWidth: 2,
              borderDash: [5, 5],
            },
            lastLine: {
              type: 'line',
              xMin: dates[dates.length - 1],
              xMax: dates[dates.length - 1],
              borderColor: 'rgb(255, 99, 132)',
              borderWidth: 2,
              borderDash: [5, 5],
            },
            firstPoint: {
              type: 'point',
              xValue: dates[0],
              yValue: data.price[0],
              backgroundColor: 'rgb(41, 155, 31)',
              radius: 6,
              borderColor: 'rgb(41, 155, 31)',
              borderWidth: 1
            },
            lastPoint: {
              type: 'point',
              xValue: dates[dates.length - 1],
              yValue: data.price[data.price.length - 1],
              backgroundColor: 'rgb(255, 99, 132)',
              radius: 6,
              borderColor: 'rgb(255, 99, 132)',
              borderWidth: 1
            },
            firstLabel: {
              type: 'label',
              xValue: dates[0],
              yValue: yOpenLabel,
              backgroundColor: 'rgb(41, 155, 31)',
              content: ['Начало займа'],
              font: {
                size: 12
              },
              color: 'white',
              padding: 4
            },
            lastLabel: {
              type: 'label',
              xValue: dates[dates.length - 1],
              yValue: yCloseLabel,
              backgroundColor: 'rgb(255, 99, 132)',
              content: ['Жёсткая ликвидация'],
              font: {
                size: 12
              },
              color: 'white',
              padding: 4
            }
          }
        },
        legend: {
          position: 'bottom',
          onClick: function(e, legendItem, legend) {
            const index = legendItem.datasetIndex;
            const chart = legend.chart;
            if (legendItem.text === 'Диапазон цен мягкой ликвидации') {
              // Переключение видимости обоих наборов данных при клике на "Диапазон цен мягкой ликвидации"
              const softLiqDataset1 = chart.data.datasets[1];
              const softLiqDataset2 = chart.data.datasets[2];
              const isHidden = softLiqDataset1.hidden;
              softLiqDataset1.hidden = !isHidden;
              softLiqDataset2.hidden = !isHidden;
            } else {
              // Поведение по умолчанию для других элементов легенды
              Chart.defaults.plugins.legend.onClick.call(this, e, legendItem, legend);
            }
            chart.update();
          },
          labels: {
            filter: function(legendItem, chartData) {
              // Фильтрация нижнего набора данных мягкой ликвидации
              return legendItem.text !== 'Диапазон цен мягкой ликвидации (нижний)';
            }
          }
        },
        tooltip: {
          callbacks: {
            title: function(tooltipItems) {
              return new Date(tooltipItems[0].parsed.x).toLocaleString();
            },
            label: function(context) {
              return '';
            },
            afterBody: function(tooltipItems) {
              const dataIndex = tooltipItems[0].dataIndex;
              return [
                'Цена: ' + data.price[dataIndex],
                'Здоровье: ' + data.health[dataIndex],
                'Залог как ' + tokenCOL + ': ' + data.collateral[dataIndex],
                'Залог как ' + tokenDEBT + ': ' + data.stablecoin[dataIndex],
                'Долг в crvUSD: ' + data.debt[dataIndex]
              ];
            }
          },
          displayColors: false, // Удаляет цветовую коробку
          bodyAlign: 'left',
          padding: 10
        },
        title: {
          display: false,
          text: 'График займа'
        }
      }
    }
  });

}

function createChart2(data, chartId) {
  const ctx = document.getElementById(chartId).getContext('2d');
  
  // Конвертируем эпохальные времена в объекты Date
  const dates = data.time.map(epoch => new Date(parseInt(epoch) * 1000));

  // Вычисляем xmin и xmax
  const timeRange = parseInt(data.time[data.time.length - 1]) - parseInt(data.time[0]);
  const xmin = new Date((parseInt(data.time[0]) - timeRange * 0.1) * 1000);
  const xmax = new Date((parseInt(data.time[data.time.length - 1]) + timeRange * 0.1) * 1000);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          label: 'Цена',
          data: data.price,
          borderColor: 'orange',
          pointRadius: 0,
          pointHoverRadius: 10,
          pointHitRadius: 10
        },
        {
          label: 'Диапазон цен мягкой ликвидации',
          data: data.slUp,
          fill: '+1',
          backgroundColor: 'rgba(255, 255, 0, 0.25)',
          borderColor: 'rgba(255, 255, 0, 0.25)',
          borderWidth: 0,
          pointHitRadius: 0,
          pointRadius: 0,
        },
        {
          label: 'Диапазон цен мягкой ликвидации (нижний)',
          data: data.slDown,
          fill: '-1',
          backgroundColor: 'rgba(255, 255, 0, 0.25)',
          borderColor: 'rgba(255, 255, 0, 0.25)',
          borderWidth: 0,
          pointHitRadius: 0,
          pointRadius: 0,
        },
      ]
    },
    options: {
      responsive: true,
      aspectRatio: 4/3,
      devicePixelRatio: 1,
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'MMM d, yyyy'
            }
          },
          title: {
            display: true,
            text: 'Дата'
          },
          ticks: {
            maxRotation: 45,
            minRotation: 25
          },
          min: xmin,
          max: xmax
        },
        y: {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Цена ($)'
          }
        }
      },
      plugins: {
        annotation: {
          annotations: {
            firstLine: {
              type: 'line',
              xMin: dates[0],
              xMax: dates[0],
              borderColor: 'rgb(41, 155, 31)',
              borderWidth: 2,
              borderDash: [5, 5],
            },
            midLine: {
              type: 'line',
              xMin: dates[79],
              xMax: dates[79],
              borderColor: 'rgb(41, 155, 31)',
              borderWidth: 2,
              borderDash: [5, 5],
            },
            lastLine: {
              type: 'line',
              xMin: dates[dates.length - 1],
              xMax: dates[dates.length - 1],
              borderColor: 'rgb(135, 50, 143)',
              borderWidth: 2,
              borderDash: [5, 5],
            },
            firstPoint: {
              type: 'point',
              xValue: dates[0],
              yValue: data.price[0],
              backgroundColor: 'rgb(41, 155, 31)',
              radius: 6,
              borderColor: 'rgb(41, 155, 31)',
              borderWidth: 1
            },
            midPoint: {
              type: 'point',
              xValue: dates[79],
              yValue: data.price[79],
              backgroundColor: 'rgb(41, 155, 31)',
              radius: 6,
              borderColor: 'rgb(41, 155, 31)',
              borderWidth: 1
            },
            lastPoint: {
              type: 'point',
              xValue: dates[dates.length - 1],
              yValue: data.price[data.price.length - 1],
              backgroundColor: 'rgb(135, 50, 143)',
              radius: 6,
              borderColor: 'rgb(135, 50, 143)',
              borderWidth: 1
            },
            firstLabel: {
              type: 'label',
              xValue: dates[0],
              yValue: 3400,
              backgroundColor: 'rgb(41, 155, 31)',
              content: ['Начало займа'],
              font: {
                size: 12
              },
              color: 'white',
              padding: 4
            },
            repayLabel: {
              type: 'label',
              xValue: dates[79],
              yValue: 3500,
              backgroundColor: 'rgb(41, 155, 31)',
              content: ['Погашено 10% долга'],
              font: {
                size: 12
              },
              color: 'white',
              padding: 4
            },
            lastLabel: {
              type: 'label',
              xValue: dates[dates.length - 1],
              yValue: 3200,
              backgroundColor: 'rgb(135, 50, 143)',
              content: ['Самоликвидизация'],
              font: {
                size: 12
              },
              color: 'white',
              padding: 4
            }
          }
        },
        legend: {
          position: 'bottom',
          onClick: function(e, legendItem, legend) {
            const index = legendItem.datasetIndex;
            const chart = legend.chart;
            if (legendItem.text === 'Диапазон цен мягкой ликвидации') {
              // Переключение видимости обоих наборов данных при клике на "Диапазон цен мягкой ликвидации"
              const softLiqDataset1 = chart.data.datasets[1];
              const softLiqDataset2 = chart.data.datasets[2];
              const isHidden = softLiqDataset1.hidden;
              softLiqDataset1.hidden = !isHidden;
              softLiqDataset2.hidden = !isHidden;
            } else {
              // Поведение по умолчанию для других элементов легенды
              Chart.defaults.plugins.legend.onClick.call(this, e, legendItem, legend);
            }
            chart.update();
          },
          labels: {
            filter: function(legendItem, chartData) {
              // Фильтрация нижнего набора данных мягкой ликвидации
              return legendItem.text !== 'Диапазон цен мягкой ликвидации (нижний)';
            }
          }
        },
        tooltip: {
          callbacks: {
            title: function(tooltipItems) {
              return new Date(tooltipItems[0].parsed.x).toLocaleString();
            },
            label: function(context) {
              return '';
            },
            afterBody: function(tooltipItems) {
              const dataIndex = tooltipItems[0].dataIndex;
              return [
                'Цена: ' + data.price[dataIndex],
                'Здоровье: ' + data.health[dataIndex],
                'Залог как ' + tokenCOL + ': ' + data.collateral[dataIndex],
                'Залог как ' + tokenDEBT + ': ' + data.stablecoin[dataIndex],
                'Долг в crvUSD: ' + data.debt[dataIndex]
              ];
            }
          },
          displayColors: false, // Удаляет цветовую коробку
          bodyAlign: 'left',
          padding: 10
        },
        title: {
          display: false,
          text: 'График займа'
        }
      }
    }
  });
}

function createChart2(data, chartId) {
  const ctx = document.getElementById(chartId).getContext('2d');
  
  // Конвертируем эпохальные времена в объекты Date
  const dates = data.time.map(epoch => new Date(parseInt(epoch) * 1000));

  // Вычисляем xmin и xmax
  const timeRange = parseInt(data.time[data.time.length - 1]) - parseInt(data.time[0]);
  const xmin = new Date((parseInt(data.time[0]) - timeRange * 0.1) * 1000);
  const xmax = new Date((parseInt(data.time[data.time.length - 1]) + timeRange * 0.1) * 1000);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          label: 'Цена',
          data: data.price,
          borderColor: 'orange',
          pointRadius: 0,
          pointHoverRadius: 10,
          pointHitRadius: 10
        },
        {
          label: 'Диапазон цен мягкой ликвидации',
          data: data.slUp,
          fill: '+1',
          backgroundColor: 'rgba(255, 255, 0, 0.25)',
          borderColor: 'rgba(255, 255, 0, 0.25)',
          borderWidth: 0,
          pointHitRadius: 0,
          pointRadius: 0,
        },
        {
          label: 'Диапазон цен мягкой ликвидации (нижний)',
          data: data.slDown,
          fill: '-1',
          backgroundColor: 'rgba(255, 255, 0, 0.25)',
          borderColor: 'rgba(255, 255, 0, 0.25)',
          borderWidth: 0,
          pointHitRadius: 0,
          pointRadius: 0,
        },
      ]
    },
    options: {
      responsive: true,
      aspectRatio: 4/3,
      devicePixelRatio: 1,
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'MMM d, yyyy'
            }
          },
          title: {
            display: true,
            text: 'Дата'
          },
          ticks: {
            maxRotation: 45,
            minRotation: 25
          },
          min: xmin,
          max: xmax
        },
        y: {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Цена ($)'
          }
        }
      },
      plugins: {
        annotation: {
          annotations: {
            firstLine: {
              type: 'line',
              xMin: dates[0],
              xMax: dates[0],
              borderColor: 'rgb(41, 155, 31)',
              borderWidth: 2,
              borderDash: [5, 5],
            },
            midLine: {
              type: 'line',
              xMin: dates[79],
              xMax: dates[79],
              borderColor: 'rgb(41, 155, 31)',
              borderWidth: 2,
              borderDash: [5, 5],
            },
            lastLine: {
              type: 'line',
              xMin: dates[dates.length - 1],
              xMax: dates[dates.length - 1],
              borderColor: 'rgb(135, 50, 143)',
              borderWidth: 2,
              borderDash: [5, 5],
            },
            firstPoint: {
              type: 'point',
              xValue: dates[0],
              yValue: data.price[0],
              backgroundColor: 'rgb(41, 155, 31)',
              radius: 6,
              borderColor: 'rgb(41, 155, 31)',
              borderWidth: 1
            },
            midPoint: {
              type: 'point',
              xValue: dates[79],
              yValue: data.price[79],
              backgroundColor: 'rgb(41, 155, 31)',
              radius: 6,
              borderColor: 'rgb(41, 155, 31)',
              borderWidth: 1
            },
            lastPoint: {
              type: 'point',
              xValue: dates[dates.length - 1],
              yValue: data.price[data.price.length - 1],
              backgroundColor: 'rgb(135, 50, 143)',
              radius: 6,
              borderColor: 'rgb(135, 50, 143)',
              borderWidth: 1
            },
            firstLabel: {
              type: 'label',
              xValue: dates[0],
              yValue: 3400,
              backgroundColor: 'rgb(41, 155, 31)',
              content: ['Начало займа'],
              font: {
                size: 12
              },
              color: 'white',
              padding: 4
            },
            repayLabel: {
              type: 'label',
              xValue: dates[79],
              yValue: 3500,
              backgroundColor: 'rgb(41, 155, 31)',
              content: ['Погашено 10% долга'],
              font: {
                size: 12
              },
              color: 'white',
              padding: 4
            },
            lastLabel: {
              type: 'label',
              xValue: dates[dates.length - 1],
              yValue: 3200,
              backgroundColor: 'rgb(135, 50, 143)',
              content: ['Самоликвидизация'],
              font: {
                size: 12
              },
              color: 'white',
              padding: 4
            }
          }
        },
        legend: {
          position: 'bottom',
          onClick: function(e, legendItem, legend) {
            const index = legendItem.datasetIndex;
            const chart = legend.chart;
            if (legendItem.text === 'Диапазон цен мягкой ликвидации') {
              // Переключение видимости обоих наборов данных при клике на "Диапазон цен мягкой ликвидации"
              const softLiqDataset1 = chart.data.datasets[1];
              const softLiqDataset2 = chart.data.datasets[2];
              const isHidden = softLiqDataset1.hidden;
              softLiqDataset1.hidden = !isHidden;
              softLiqDataset2.hidden = !isHidden;
            } else {
              // Поведение по умолчанию для других элементов легенды
              Chart.defaults.plugins.legend.onClick.call(this, e, legendItem, legend);
            }
            chart.update();
          },
          labels: {
            filter: function(legendItem, chartData) {
              // Фильтрация нижнего набора данных мягкой ликвидации
              return legendItem.text !== 'Диапазон цен мягкой ликвидации (нижний)';
            }
          }
        },
        tooltip: {
          callbacks: {
            title: function(tooltipItems) {
              return new Date(tooltipItems[0].parsed.x).toLocaleString();
            },
            label: function(context) {
              return '';
            },
            afterBody: function(tooltipItems) {
              const dataIndex = tooltipItems[0].dataIndex;
              return [
                'Цена: ' + data.price[dataIndex],
                'Здоровье: ' + data.health[dataIndex],
                'Залог как ' + tokenCOL + ': ' + data.collateral[dataIndex],
                'Залог как ' + tokenDEBT + ': ' + data.stablecoin[dataIndex],
                'Долг в crvUSD: ' + data.debt[dataIndex]
              ];
            }
          },
          displayColors: false, // Удаляет цветовую коробку
          bodyAlign: 'left',
          padding: 10
        },
        title: {
          display: false,
          text: 'График займа'
        }
      }
    }
  });
}

function loadData(jsonFile, chartId, yOpenLabel, yCloseLabel, tokenCOL, tokenDEBT, hardLiq) {
fetch(jsonFile)
    .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! статус: ${response.status}`);
    }
    return response.json();
    })
    .then(data => {
    console.log('Данные успешно загружены:', data);
    if (hardLiq) {
      createChart(data, chartId, yOpenLabel, yCloseLabel, tokenCOL, tokenDEBT);
    } else {
      createChart2(data, chartId)
    }
    })
    .catch(error => {
    console.error('Ошибка загрузки JSON файла:', error);
    });
}

loadData('softLiqData.json', 'softLiqChart', 3500, 3450, 'WETH', 'crvUSD', true);
loadData('crvHardLiqData.json', 'crvHardLiq', 0.3, 0.32, 'CRV', 'crvUSD', true);
loadData('wethSelfLiqData.json', 'wethSelfLiq', 3200, 3200, 'WETH', 'crvUSD')
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

