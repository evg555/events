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
            <p>Мероприятия на 28.04.2019 г.</p>
        </div>
    </div>
</div>

</body>
</html>
