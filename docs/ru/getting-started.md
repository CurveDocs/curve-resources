Начать работать с Curve не так просто: нужно многое понять, и уникальный интерфейс может быть сложным. Это небольшое руководство предназначено для новичков в Curve, которые уже знакомы с DeFi и криптовалютами. Оно помогает ответить на частые вопросы о том, как начать работать с Curve и как платформа приносит прибыль провайдерам ликвидности.

# **Что такое Curve.fi?** {#what-is-curvefi}

Curve.fi — это некостодиальная децентрализованная биржа, которая произвела революцию в торговле стейблкоинами. Она начала с предложения лучших обменных курсов для свопов стейблкоинов (например, DAI на USDC) через пулы ликвидности, где пользователи зарабатывают доход, депонируя свои активы.

По мере развития платформа расширилась за пределы стейблкоинов, включив пулы с волатильными активами, объединяя такие криптовалюты, как ETH, со стейблкоинами, такими как USDT. Последней инновацией протокола является crvUSD — собственный стейблкоин, который пользователи могут занимать под залог таких активов, как ликвидный стейк ETH (liquid staked ETH) и обернутый BTC (wrapped BTC). В результате этого была создана более масштабная система кредитования Curve, поддерживающая займы, обеспеченные большим количеством различных активов.

Безопасность имеет первостепенное значение в Curve — некостодиальный дизайн протокола означает, что ваши токены остаются под вашим контролем и никогда не переходят в руки разработчиков. Кроме того, все смарт-контракты Curve не подлежат обновлению, что гарантирует, что основная логика, защищающая средства пользователей, остается неизменной.

Оставаясь верной своему новаторскому духу, Curve продолжает разрабатывать передовые решения DeFi, расширяя границы возможного в децентрализованных финансах.

---

# **Что такое пулы ликвидности и зачем мне депонировать в них средства?** {#what-are-liquidity-pools-and-why-should-i-deposit}

Пулы ликвидности — это пулы токенов, хранящихся в смарт-контрактах, которые позволяют пользователям обменивать или снимать токены по установленным курсам. Добавляя ликвидность в пул Curve, вы получаете пассивный доход через торговые комиссии, с вознаграждениями, основанными на вашем вкладе. Кроме того, вы можете получать дополнительные стимулы, такие как токены CRV или Points, увеличивая свою прибыль. Предоставление ликвидности также помогает поддерживать эффективные и недорогие сделки для всех участников обмена, принося пользу всей экосистеме DeFi.

Для получения дополнительной информации посетите следующий раздел: [Понимание пулов Curve](lp/overview.md)

---

# **Что такое стейблкоин crvUSD?** {#what-is-the-crvusd-stablecoin}

crvUSD — это полностью децентрализованный стейблкоин, уникальный как по своему обеспечению, так и по модели управления рисками. Пользователи могут чеканить crvUSD, занимая его под высококачественный залог, такой как ETH, BTC, их обернутые и варианты их ликвидного стейкинга (LST), через платформу займов crvUSD на Ethereum.

Что отличает crvUSD, так это его инновационный подход к управлению здоровьем кредита:

- В отличие от традиционных DeFi-платформ (таких как Aave или Maker и др.), которые ликвидируют на основе ценовых порогов, crvUSD фокусируется на общем состоянии займа.
- Когда стоимость залога падает, часть залога постепенно конвертируется в crvUSD для поддержания здоровья займа.
- Если цены на залог восстанавливаются, этот процесс автоматически обращается обратно, возвращая конвертированный залог заемщику
- Ликвидации происходят только если состояние займа ухудшается ниже критического порога, а не просто из-за изменения цены.

Такое сочетание высококачественного залога и управления рисками на основе параметра "здоровья" займа делает crvUSD одним из самых продуманных и безопасных стейблкоинов в DeFi, предоставляя заемщикам большую гибкость для преодоления рыночной волатильности.

Узнайте больше в [ресурсах crvUSD](crvusd/understanding-crvusd.md) или непосредственно на [интерфейсе crvUSD](https://crvusd.curve.fi/#/ethereum).

---

# **Что такое Curve Lend? (LlamaLend)** {#what-is-curve-lend-llamalend}

Curve Lend (LlamaLend) расширяет новую систему защиты от ликвидации Curve на рынки кредитования для более рискованных активов. В отличие от основного протокола, который чеканит новый crvUSD, Curve Lend создает кредитные рынки, где:

- Поставщики предоставляют существующий crvUSD в кредитные пулы.
- Заемщики могут получить доступ к этим средствам, оплачивая комиссии поставщикам.
- Более широкий спектр более рискованных активов может использоваться в качестве залога.
- Кредиты защищены через постепенную конвертацию залога вместо немедленных ликвидаций.

Этот дизайн создает взаимовыгодную ситуацию: поставщики зарабатывают комиссии, предоставляя crvUSD, в то время как заемщики выигрывают от более гибкого подхода Curve к управлению кредитами, даже при займах под активы с высокой волатильностью.

Узнайте больше о кредитовании здесь: [Ресурсы по кредитованию](lending/overview.md)

---

# **Могу ли я запустить пул или кредитный рынок?** {#can-i-launch-a-pool-or-lending-market}

**Да! Все новые пулы Curve и кредитные рынки разворачиваются без разрешений**. Это означает, что любой может запустить пул или кредитный рынок в любое время и в любом месте. Для полного руководства ознакомьтесь с нашим [разделом по созданию пулов](pool-creation/pool-creation-overview.md) или [руководством по созданию кредитного рынка](lending/create-lending-market.md).

---

# **Что такое токен CRV?** {#what-is-the-crv-token}

CRV — это управляющий и утилитарный токен в экосистеме Curve. Его наиболее заметная особенность — это механизм блокировки: пользователи могут блокировать свои CRV токены на срок до 4 лет, превращая их в veCRV  (блокированный для голосования CRV). Это долгосрочное обязательство дает два ключевых преимущества:

- Право голоса в решениях управления Curve.
- Доля комиссий, генерируемых во всех продуктах Curve.

Эта система блокировки была специально разработана для того, чтобы интересы держателей токенов были согласованы с долгосрочным успехом платформы — чем дольше пользователи блокируют свои токены, тем больше их влияние и вознаграждения в экосистеме.

Узнайте больше о CRV здесь: [Понимание CRV](crv-token/overview.md), или об управлении Curve здесь: [Понимание управления](governance/understanding-governance.md)
