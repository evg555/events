const monthes = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

$(document).ready(function(){
    initCalendar();

    $('.panel select').on('change',function(){
        const month = $('select[name="month"]').val();
        const year = $('select[name="year"]').val();

        let date = new Date(year, month,1);
        let allDates = getCalendarDates(date);
        let html = renderCalendar(date, allDates);

        $('.calendar').html(html);
    });

    $('.calendar').on('click','td',function(){
        $('.current').removeClass('current');
        $(this).addClass('current');

        const clickDate = $(this).data('date');
        getListEvents(clickDate);
    })
});

function initCalendar(){
    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = monthes[date.getMonth()];
    let allDates = getCalendarDates(date);
    let html = renderCalendar(date, allDates);
    let yearsList = getYearsList(date.getFullYear());

    $('.calendar').html(html);
    $('select[name="year"]').html(yearsList);
    $('select[name="month"]').find("option:contains('"+currentMonth+"')").attr("selected", "selected");
    $('select[name="year"]').find("option:contains('"+currentYear+"')").attr("selected", "selected");

    const currentDate = $('td.current').data('date');
    getListEvents(currentDate);
}

function getCalendarDates(date){
    const startDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const endDay = new Date(date.getFullYear(), date.getMonth()+1, 0);
    let allDates = [];

    //Получаем последний понедельник предыдущего месяца
    const prevEndDay = new Date(date.getFullYear(), date.getMonth(), 0);
    const startPrevDay = new Date(prevEndDay.getFullYear(), prevEndDay.getMonth(), prevEndDay.getDate() - 6);

    for (let i = startPrevDay.getDate(); i <= prevEndDay.getDate();i++){
        var correctPrevDate = new Date(prevEndDay.getFullYear(), prevEndDay.getMonth(), i);

        if (correctPrevDate.getDay() === 1) break;
    }

    //Получаем первое воскресенье следующего месяца
    const nextStartDay = new Date(date.getFullYear(), date.getMonth()+1, 1);
    const finishNextDay = new Date(nextStartDay.getFullYear(), nextStartDay.getMonth(), nextStartDay.getDate() + 6);

    for (let i = nextStartDay.getDate(); i <= finishNextDay.getDate();i++){
        var correctNextDate = new Date(nextStartDay.getFullYear(), nextStartDay.getMonth(), i);

        if (correctNextDate.getDay() === 0) break;
    }

    //Формируем массив всех дат
    for (let i = correctPrevDate.getDate();i <= prevEndDay.getDate();i++){
        allDates.push(prevEndDay.getFullYear() + '-' + (prevEndDay.getMonth() + 1) + '-' + i);
    }
    for (let i = startDay.getDate();i <= endDay.getDate();i++){
        allDates.push(startDay.getFullYear() + '-' + (startDay.getMonth() + 1)  + '-' + i);
    }

    for (let i = nextStartDay.getDate();i <= correctNextDate.getDate();i++){
        allDates.push(nextStartDay.getFullYear() + '-' + (nextStartDay.getMonth() + 1) + '-' + i);
    }

    return allDates;
}

function renderCalendar(date, allDates){
    //Формируем таблицу вывода календаря
    const tr = allDates.length / 7;
    let html = '<table>';
    html += '<tr>' +
        '<td colspan="7">' +
        monthes[date.getMonth()] + ' ' + date.getFullYear() +
        '</td>' +
        '</tr>' +
        '<tr style="font-weight: bold;">' +
        '<td>' +
        'Пн' +
        '</td>' +
        '<td>' +
        'Вт' +
        '</td>' +
        '<td>' +
        'Ср' +
        '</td>' +
        '<td>' +
        'Чт' +
        '</td>' +
        '<td>' +
        'Пт' +
        '</td>' +
        '<td>' +
        'Сб' +
        '</td>' +
        '<td>' +
        'Вс' +
        '</td>' +
        '</tr>';

    for (let i = 1;i <= tr;i++){
        html += '<tr>';

        for (let j = 0;j < allDates.length; j++){
            if (j > 0 && j%7 === 0) break;

            let current = false;
            const numberIndex = j + 7 * (i - 1);
            const elDay = allDates[numberIndex].split('-');

            //Форматируем дату для вывода
            const formatDateObj = new Date(allDates[numberIndex]);
            const formatDate = (formatDateObj.getDate() < 10 ? '0' + formatDateObj.getDate() : formatDateObj.getDate()) + '.' + (formatDateObj.getMonth() < 9 ? '0' + (formatDateObj.getMonth() + 1) : (formatDateObj.getMonth() + 1)) + '.' + formatDateObj.getFullYear();

            if (new Date(allDates[numberIndex]).toDateString() === new Date().toDateString()){
                current = true;
            }

            html += '<td data-date="' + formatDate +'" class="' + (current ? "current" : "") +'">' + elDay[2] + '</td>';
        }
    }

    return html;
}

function getYearsList(year){
    const startYear = year - 5;
    const endYear = year + 5;
    let yearList = '';

    for (i = startYear; i <= endYear; i++){
        yearList += '<option>' + i + '</option>>';
    }

    return yearList;
}

function getListEvents(date){
    $('span.event-date').text(date);
}

