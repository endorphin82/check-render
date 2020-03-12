# check-render
https://reactjs.org/docs/refs-and-the-dom.html

When to Use Refs

There are a few good use cases for refs:

Managing focus, text selection, or media playback.

Triggering imperative animations.

Integrating with third-party DOM libraries.

Avoid using refs for anything that can be done declaratively.


https://medium.com/@abraztsov/refs-%D0%B2-react-%D0%B2%D1%81%D1%91-%D1%87%D1%82%D0%BE-%D0%BD%D1%83%D0%B6%D0%BD%D0%BE-%D0%B7%D0%BD%D0%B0%D1%82%D1%8C-266a979690f8

Когда их вообще надо использовать ?

Желательно никогда. Только, если в них есть необходимость. (рефсы)

Такая как:

Фокус элемента, выделение текста.

Анимации.

Интеграция с DOM библиотеками.


https://monsterlessons.com/project/lessons/react-refs

Ref отличный способ доступа к DOM елементам, но его нужно применять с осторожностью. Нужно помнить, что это не React way, а просто возможность доступа к DOM елементам. Всегда лучше использовать state, props если это возможно вместо refs, так как они поддерживают правильный флоу данных в приложении, а refs нет.

переводчик для хрома
https://chrome.google.com/webstore/detail/imtranslator-translator-d/noaijdpnepcgjemiklgfkcfbkokogabh?hl=ru