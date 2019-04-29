<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Календарь мероприятий</title>

    <link rel="stylesheet" href="css/style.css">
    <script src='js/jquery-3.4.0.min.js'></script>
    <script src='js/main.js'></script>
</head>
<body>

<div class="wrapper">
    <div class="inner">
        <div class="panel">
            <select name="month" id="month">
                <option value="0">Январь</option>
                <option value="1">Февраль</option>
                <option value="2">Март</option>
                <option value="3">Апрель</option>
                <option value="4">Май</option>
                <option value="5">Июнь</option>
                <option value="6">Июль</option>
                <option value="7">Август</option>
                <option value="8">Сентябрь</option>
                <option value="9">Октябрь</option>
                <option value="10">Ноябрь</option>
                <option value="11">Декабрь</option>
            </select>
            <select name="year" id="year">
            </select>
        </div>
        <div class="calendar"></div>
    </div>
    <div class="inner">
        <div class="events">
            <h3>Мероприятия на <span class="event-date">28.04.2019</span></h3>

            <div class="event-add">
                <input type="text" name="event-time" placeholder="Время старта мероприятия. Например, 9.30"><br>
                <input type="text" name="event-name" placeholder="Название мероприятия. Например, совещание с командой"><br>
                <button>Добавить мероприятие</button>
            </div>

            <hr>

            <ul>
                <li>
                    <span class="event-time">9.30</span>
                    <span class="event-name">Тестовое мероприятие</span>
                    <a href="#" class="event-edit">Изменить</a>
                    <a href="#" class="event-delete">Удалить</a>
                </li>
                <li>
                    <span class="event-time">9.30</span>
                    <span class="event-name">Тестовое мероприятие</span>
                    <a href="#" class="event-edit">Изменить</a>
                    <a href="#" class="event-delete">Удалить</a>
                </li>
                <li>
                    <span class="event-time">9.30</span>
                    <span class="event-name">Тестовое мероприятие</span>
                    <a href="#" class="event-edit">Изменить</a>
                    <a href="#" class="event-delete">Удалить</a>
                </li>
                <li>
                    <span class="event-time">9.30</span>
                    <span class="event-name">Тестовое мероприятие</span>
                    <a href="#" class="event-edit">Изменить</a>
                    <a href="#" class="event-delete">Удалить</a>
                </li>
            </ul>
        </div>
    </div>
</div>

</body>
</html>
