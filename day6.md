# День 6
- склонить проект https://github.com/GonikDaniel/QAA-Test-Task
- перейти в папку с проектом и выполнить `npm i`
- выполнить `npm run e2e` и посмотреть на результат вывода
- открыть `app.component.html` и задать атрибут *automation-id* для первого input
- в `app.po.ts` дописать метод получения/заполнения этого инпута
- в `app.e2e.ts` дописать тест в котором будет проверяться заполнение этого инпута 

## Домашнее задание
Протестировать всю форму из `app.component.html`.

### Как запустить написанный код?

В терминале ввести команды

```bash
git clone https://github.com/GonikDaniel/QAA-Test-Task
cd QAA-Test-Task
npm install
npm run e2e
```