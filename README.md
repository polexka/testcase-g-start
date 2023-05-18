
# Тестовое для g-СТАРТ

### Задание

Есть условный макет для страницы в браузерном окне. На странице есть рабочая область ограниченной вместимости. Ограничение продиктовано размером и текущим масштабом окна браузера. Рабочую область необходимо наполнить прямоугольными плашками и вывести в них заголовки.

Если заголовок не влезает, то ставится троеточие.

Заголовки должны подгружаться с сервера фоном. Подгружать заголовки сверх необходимого кол-ва не приветствуется.

Если размер или масштаб страницы меняется, то плашки, которые не влезают, должны скрываться. Если наоборот появляется место для еще одного ряда или столбца, то необходимо подгрузить недостоющее кол-во и отобразить.

*Область для плашек должна быть заполнена всегда равномерно. То есть расстояние между плашками и расстояния между от них до краев должны быть равны (в макете это условие отражено не точно). При этом по вертикали свои промежутки, а по горизонтали свои.

### Статичные данные
Шапка - высота 50px

Подвал - высота 100px

**Левая панель** - ширина 250px

**Правая панель** - ширина 200px

**Минимальное расстояние** между плашками по вертикали и горизонтале, а также от краев 30px

**Размер плашки** 150x100px

## Tech Stack

**Client:** React

**Server:** Node, Express, MongoDb

## Run Project

Clone the project

```bash
  git clone https://github.com/polexka/testcase-g-start.git
```

Go to the project directory

```bash
  cd testcase-g-start
```

Docker will do all the work for you

```bash
  docker-compose up
```
