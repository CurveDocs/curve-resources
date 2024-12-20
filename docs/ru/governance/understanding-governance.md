<h1>Понимание Управления</h1>

## **Голосование в Curve DAO** {#voting-on-the-curve-dao}

Чтобы голосовать в Curve DAO, пользователям нужно [блокировать свои CRV](../vecrv/locking-your-crv.md). Делая это, участники могут получить буст на свою предоставленную ликвидность и голосовать по всем предложениям DAO. Пользователи, которые достигают голосовой силы в 2,500 `veCRV`, могут также создавать новые предложения. **Минимального требования по голосовой силе для участия в голосовании нет. Продолжительность голосований по управлению составляет семь дней**.

!!!warning "Уменьшение Силы Голоса (Voting Power Decay)"
    При голосовании по предложениям DAO сила голоса пользователя по конкретному предложению начинает уменьшаться на половине срока голосования как мера защиты от манипуляций китами. Это не распространяется на голосования по весам `gauge`. Кроме того, общая сила голоса уменьшается линейно со временем. Более подробная информация представлена в разделе ниже.

    **Пример:** Пользователь начинает период голосования по предложению со 100 `veCRV`. Если продолжительность голосования составляет 7 дней, их сила голоса останется на уровне 100 `veCRV` в течение первых 3,5 дней. После этого их сила голоса начинает линейно уменьшаться. К 5,25 дню (это середина периода уменьшения), их сила голоса уменьшится до 50 `veCRV`. К концу 7-дневного периода голосования сила голоса пользователя уменьшится еще больше, приближаясь к 0 `veCRV`.

---

## **Сила Голоса (Voting Power)** {#voting-power}

`veCRV` расшифровывается как [vote-escrowed CRV](../vecrv/overview.md) (депонированный на голосование CRV). Это механизм, где пользователи могут блокировать свои CRV токены на различные сроки, чтобы получить голосовую силу. Пользователи имеют возможность блокировать свои CRV минимум на одну неделю и максимум на четыре года. Те, кто блокирует на более долгий срок, обладают большим влиянием и получают большую голосовую силу.

Сила голоса пользователя постепенно уменьшается со временем, пока не достигнет нуля к моменту разблокировки. Например, если пользователь решает блокировать 100 CRV на четыре года, они изначально получат 100 `veCRV`. Через год, из-за постоянного уменьшения, баланс `veCRV` пользователя снизится до 75 `veCRV`, затем до 50 `veCRV` через два года, и так далее, пока наконец не достигнет нуля через четыре года.

Существующую блокировку можно продлить в любой момент времени, в результате чего баланс `veCRV` снова увеличится.

---

## **Голосования DAO** {#dao-votes}

Существует три разных вида голосований:

1. **Голосования по владению (Ownership votes)**, которые контролируют большинство функций внутри протокола. Эти голосования требуют кворума в 30% с поддержкой 51%.
2. **Голосования по параметрам (Parameter votes)**, которые могут изменять параметры пулов. Эти голосования требуют кворума в 15% с поддержкой 60%.
3. **Экстренные голосования (Emergency votes)**, которые выполняются через мультисиг из девяти членов, состоящих из уважаемых фигур в сообществе DeFi и криптовалюты. Подробнее здесь: [Экстренное DAO](#emergency-dao).

!!!info "Кворум при голосовании"
    Интуитивно можно подумать, что общее количество голосов (`YES` и `NO`) будет учитываться для кворума. Однако в данном случае это не так. Только голоса `YES` учитываются при подсчете кворума.

    Это может привести к таким ситуациям: https://twitter.com/WormholeOracle/status/1782646259536531808

---

## **Экстренное DAO (Emergency DAO)** {#emergency-dao}

`EmergencyDAO` — это **мультисиг 5 из 9**, который имеет **очень ограниченные действия**. Он **может отключать non-factory пулы** возрастом до 2 месяцев. Пулы, которые были отключены, будут позволять пользователям только `remove_liquidity` - выводить свою ликвидность. Он также может **отключать `liquidity gauges`** в любое время, устанавливая скорость эмиссии CRV на 0 и, таким образом, не позволяя дальнейшей эмиссии CRV в пул.

Мультисиг `EmergencyDAO` развернут по адресу [`0x467947EE34aF926cF1DCac093870f613C96B1E0c`](https://etherscan.io/address/0x467947EE34aF926cF1DCac093870f613C96B1E0c) и в настоящее время состоит из следующих подписантов:

<div class="centered" markdown="block">
| Имя              | Детали — Telegram          |
| ---------------- | -------------------------- |
| `banteg`         | `Yearn, @banteg`           |
| `Calvin`         | `@calchulus`               |
| `C2tP`           | `Convex, @c2tp_eth`        |
| `Darly Lau`      | `@Daryllautk`              |
| `Ga3b_node`      | `@ga3b_node`               |
| `Naga King`      | `@nagakingg`               |
| `Peter MM`       | `@PeterMm`                 |
| `Addison`        | `@addisonthunderhead`      |
| `Quentin Milne`  | `StakeDAO, @Kii_iu`        |
</div>

---

## **Кросс-чейн Управление (Cross-Chain Governance)** {#cross-chain-governance}

Поскольку Curve развернут на различных блокчейнах, возникает необходимость в permissionless кросс-чейн фреймворке управления, чтобы предоставить DAO контроль над контрактами в этих сетях. Для этого Curve развернул различные контракты в этих сетях, чтобы обеспечить контроль DAO. Даже для кросс-чейн голосований **голосование всегда происходит в основной сети Ethereum**. После завершения голосования итог **передается в виде сообщения в соответствующую сеть**, где затем исполняется.

!!!warning "Контроль DAO в разных сетях"
    Хотя контроль DAO над смарт-контрактами Curve обеспечен в большинстве сетей, некоторые сети могут еще не предлагать необходимую инфраструктуру для поддержки этого кросс-чейн фреймворка. Список всех контрактов, связанных с владением в кросс-чейн сетях, а также более техническая документация, доступна [здесь](https://docs.curve.fi/deployments/xgov-xgauges/#curve-x-gov).

---

## **Панель Управления DAO (The DAO Dashboard)** {#the-dao-dashboard}

Пользователи могут получить доступ к панели управления Curve DAO по адресу [https://dao.curve.fi/dao](https://dao.curve.fi/dao). Эта панель предоставляет обзор всех текущих и закрытых голосований. Каждое предложение должно иметь соответствующую тему на форуме управления Curve, доступном по адресу [https://gov.curve.fi/](https://gov.curve.fi/).

---

## **Создание Предложений (Creating Proposals)** {#creating-proposals}

Чтобы создать официальное предложение, пользователям следует сначала составить предложение и опубликовать его на форуме управления. Важно оценить осуществимость предложения и измерить интерес сообщества через Curve Discord, Telegram или форум управления.

Если пользователи не уверены в технических аспектах подачи предложения в блокчейн Ethereum, они могут обратиться за помощью к члену команды.

Для получения дополнительной информации см.: [Создание предложений DAO](./proposals/creating-a-dao-proposal.md)

