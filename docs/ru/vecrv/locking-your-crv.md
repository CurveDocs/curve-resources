---
hide:
  - toc
---

<h1>Как блокировать CRV</h1>

:logos-youtube: **Как блокировать CRV**

<div style="display: block; margin-left: auto; margin-right: auto; width: 560px;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/8GAI1lopEdU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


!!! warning "Предупреждение"
    Когда пользователь блокирует свои токены CRV для голосования, он получает veCRV в зависимости от длительности блокировки и количества блокированных токенов. Блокировка **не обратима**, а токены veCRV **не подлежат передаче**. Если пользователь решает осуществить vote-locking своих токенов CRV, он сможет **вернуть их только после окончания срока блокировки**.

    Кроме того, пользователь **не может создавать несколько блокировок с разными сроками истечения**. Однако срок блокировки **можно продлить**, а также **к ней можно добавить дополнительные CRV** **в любое время**.


Пользователи должны указать количество CRV, которое они хотят блокировать, и предпочитаемую длительность блокировки. Минимальный период блокировки — **одна неделя**, а максимальный — **четыре года**. Количество veCRV **линейно уменьшается со временем**, достигая 0 по окончании срока блокировки.


*Чтобы блокировать токены CRV, посетите либо старый интерфейс: [https://dao.curve.fi/locker](https://dao.curve.fi/locker), либо новый интерфейс: [https://curve.fi/#/ethereum/locker/create](https://curve.fi/#/ethereum/locker/create)*​


<figure markdown>
  ![CRV Locker](../images/locker-old.png){ width="500" }
  <figcaption>старый интерфейс</figcaption>
</figure>

<figure markdown>
  ![CRV Locker](../images/locker.png){ width="300" }
  <figcaption>новый интерфейс</figcaption>
</figure>


!!! tip "Совет"
    **Количество veCRV, получаемое за каждый CRV при блокировке, зависит от длительности блокировки.** См. [формулу здесь](./overview.md#crv-to-vecrv-formula).

