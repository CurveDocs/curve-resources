На Curve Finance [инфляция CRV](../crv-token/supply-distribution.md#community-emissions-crv-inflation) распределяется между пользователями протокола, которые стейкают свои токены в пулах и кредитных рынках. Для этого используются специальные контракты - Reward Gauges (счётчики вознаграждений), которые в данной документации будут часто называться русифицированным термином «гейджи».

Многие пулы Curve и кредитные рынки имеют Reward Gauges. Поставщики ликвидности стейкая свои токены  в этих гейджах, пользователи получают вознаграждения, пропорциональные их доле в общем объеме ставок.

Существуют также специальные гейджи для финансирования определённых инициатив, таких как разработка Vyper (veFunder-vyper).

# **Веса гейджей** {#gauge-weights}

Чтобы гейдж получал эмиссии CRV, он должен быть добавлен в GaugeController. DAO должно проголосовать и утвердить каждый новый добавленный гейдж, [подробнее здесь](./creating-a-pool-gauge.md#submit-a-dao-vote).

Каждый гейдж, добавленный в GaugeController, имеет вес и тип. Веса показывают, какая доля ежедневной [инфляции CRV](../crv-token/supply-distribution.md#community-emissions-crv-inflation) будет направлена на данный гейдж наград.

# **Голосование за веса гейджей** {#gauge-weight-voting}

Система весов позволяет DAO Curve определять, куда должна направляться инфляция CRV. Вы можете проголосовать по этому адресу: [https://dao.curve.fi/gaugeweight](https://dao.curve.fi/gaugeweight)

Таким образом, пользователи с veCRV могут направлять свою голосующую силу в пользу пула или кредитного рынка, который, по их мнению, должен получать наибольшее количество CRV.

# **Когда обновляются веса и награды?** {#when-are-the-weights-and-rewards-updated}

В основной сети Ethereum **веса и награды обновляются каждый четверг в 00:00 UTC**.

На L2 и других сетях веса и награды начинают поступать в промежуточные гейдж-контракты в основной сети Ethereum каждый четверг в 00:00 UTC, а затем с последующего четверга в 00:00 UTC (через 1 неделю) они поступают к стейкерам гейджей на L2. Таким образом, **награды кросс-чейн гейджей отстают от основной сети Ethereum на 1 неделю**.

