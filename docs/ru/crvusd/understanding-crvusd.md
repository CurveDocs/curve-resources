<h1>Понимание crvUSD</h1>

Инфраструктура стейблкоина Curve позволяет пользователям эмитировать crvUSD, используя различные криптовалютные залоги.

Позиции управляются пассивно: если цена залога снижается, заем автоматически переходит в ***режим мягкой ликвидации***, в рамках которого часть залога конвертируется в crvUSD. Напротив, если цена залога увеличивается, система возвращает залог, конвертируя crvUSD обратно в токен залога.

**Однако этот процесс может привести к некоторым потерям из-за мягких ликвидаций и диливидаций.**

Управляйте позициями crvUSD на [**https://crvusd.curve.fi/**](https://crvusd.curve.fi/).

# **Рынки**
На вкладке **`Markets`** отображаются все доступные типы залогов.

На странице отображаются текущая [**процентная ставка за заем**](./loan-concepts.md#borrow-rate), общий долг, лимит долга, оставшаяся сумма, доступная для займа, и общая стоимость залога.

<figure markdown>
  ![](../images/crvusd_markets.png){ width="700" }
  <figcaption></figcaption>
</figure>

Если у пользователя нет существующего займа, нажатие на любой рынок приведет к интерфейсу [**создания займа**](./loan-creation.md#loan-creation).

Если заем уже существует, слева появится обозначение с символом доллара. В этом случае выбор рынка приведет к интерфейсу [**управления займом**](./loan-creation.md#loan-management).

# **Риски**

!!!danger "Пожалуйста, рассмотрите следующие предупреждения о рисках при использовании инфраструктуры стейблкоин Curve:"

    1. Если ваш залог переходит в режим мягкой ликвидации, вы не можете вывести его или добавить больше залога к своей позиции. Если цена залога резко упадет за короткий промежуток времени, ваша позиция будет жестко ликвидирована без возможности диливидации. Пожалуйста, разумно выбирайте кредитное плечо, как и в случае любого обеспеченного займа.
        1. Если ваш залог переходит в режим мягкой ликвидации, вы не можете вывести его или добавить больше залога к своей позиции.
        2. Если цена залога резко упадет за короткий промежуток времени, это может привести к большим потерям, которые могут снизить здоровье вашего займа.
        3. Если вы находитесь в режиме мягкой ликвидации и цена залога резко возрастает, это может привести к потерям при диливидации при росте. Если здоровье вашего займа низкое, увеличение стоимости залога может потенциально снизить здоровье вашего займа под залогом.
        4. Если здоровье вашего займа упадет до нуля или ниже, ваша позиция будет жестко ликвидирована без возможности диливидации. Пожалуйста, разумно выбирайте кредитное плечо, как и в случае любого обеспеченного займа.
    2. Стейблкоин crvUSD и его инфраструктура находятся в стадии бета-тестирования. В результате инвестиции в crvUSD несут высокий риск и могут привести к частичной или полной потере инвестиций из-за экспериментального характера. Вы несете ответственность за понимание связанных рисков покупки, продажи и использования crvUSD и его инфраструктуры.
    3. Стоимость crvUSD может колебаться из-за волатильности рынка стейблкоинов или быстрых изменений в ликвидности стейблкоина.
    4. crvUSD выпускается исключительно смарт-контрактами без посредников. Однако параметры, обеспечивающие правильную работу инфраструктуры crvUSD, подлежат обновлениям, одобренным Curve DAO. Пользователи должны быть в курсе любых изменений параметров в инфраструктуре стейблкоина.
