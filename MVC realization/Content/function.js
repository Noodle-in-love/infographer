/*Конфигурация*/
var i = 0; //счётчик кликов (итераций) для меню signin
var j = 0; //индикатор положения меню второго уровня 0 - меню не убранно
var s = 0; //

/*Настройка скроллбара*/
$(document).ready(function () {
    $("body").niceScroll({
        cursorcolor: "#444",
        cursoropacitymax: "0.8",
        cursorwidth: "3px",
        cursorborder: "2px"
    });
    /**
     *Управление скроллом страницы:
     *cursorcolor - цвет скролла
     *cursoropacitymax - прозрачность скролла в активном состоянии
     *cursorwidth - ширина скролла
     */
});
/*настройка меню второго уровня по положению скролла*/
/*данная настройка не зависит от положения формы регистрации*/
$(document).ready(function () {
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#navigation').css('position', 'fixed');
                $('#navigation').css('top', '0px');

                /*проверяем форму регистрации*/
                if (document.getElementById("registration_signin").style.top == "-50px") {
                    $('#registration_signin').css('top', '-115px');          //убираем форму
                    $('#signin_img').css('opacity', '0.7');                  //возвращаем прозрачность стрелочке signin
                    $('#top_menu_btn_signin').removeClass('active_signin'); //отключаем класс активности кнопки
                    i++;                                                    //увеличиваем итератор для попадения на нужное событие click
                    j = 0;                                                  //фрма в неактивном состоянии
                }
            } else {
                $('#navigation').css('position', 'relative');
            }
        });
    });
});
/*события click для пунктов меню первого уровня(для каждого  в отдельности)*/
/*не используем првязку к наборам для сохранения гибкости кода*/
$(document).ready(function () {
    $(function () {
        $('#top_menu_btn_1').click(function () {
            $('#top_navigation_1').show(200);
            $('#top_navigation_2').hide(200);
            $('#top_navigation_3').hide(200);

            $('#top_menu_btn_1').addClass('active_pos');
            $('#top_menu_btn_2').removeClass('active_pos');
            $('#top_menu_btn_3').removeClass('active_pos');
            if (j == 1) {   //если регистрационная форма активна
                $('#top_menu_btn_signin').removeClass('active_signin');
                $('#navigation').css('top', '0px');
                $('#registration_signin').css('top', '-115px');
                j = 0;
                i++;
            }
        });
        $('#top_menu_btn_2').click(function () {
            $('#top_navigation_2').show(200);
            $('#top_navigation_1').hide(200);
            $('#top_navigation_3').hide(200);

            $('#top_menu_btn_2').addClass('active_pos');
            $('#top_menu_btn_1').removeClass('active_pos');
            $('#top_menu_btn_3').removeClass('active_pos');

            if (j == 1) {    //если регистрационная форма активна
                $('#top_menu_btn_signin').removeClass('active_signin');
                $('#navigation').css('top', '0px');
                $('#registration_signin').css('top', '-115px');
                j = 0;
                i++;
            }
        });
        $('#top_menu_btn_3').click(function () {
            $('#top_navigation_3').show(200);
            $('#top_navigation_1').hide(200);
            $('#top_navigation_2').hide(200);

            $('#top_menu_btn_3').addClass('active_pos');
            $('#top_menu_btn_1').removeClass('active_pos');
            $('#top_menu_btn_2').removeClass('active_pos');

            if (j == 1) {    //если регистрационная форма активна
                $('#top_menu_btn_signin').removeClass('active_signin');
                $('#navigation').css('top', '0px');
                $('#registration_signin').css('top', '-115px');
                j = 0;
                i++;
            }
        });
        $('#top_menu_btn_signin').click(function () {
            if (i % 2 === 0) {
                $('#top_menu_btn_signin').addClass('active_signin');
                $('#navigation').css('top', '-90px');
                $('#registration_signin').css('top', '-50px');
                $('#signin_img').css('opacity', '1');
                j = 1; //регистрационная форма активна
                i++;
                end();
            }
            if (i % 2 === 1) {
                $('#top_menu_btn_signin').removeClass('active_signin');
                $('#navigation').css('top', '0px');
                $('#registration_signin').css('top', '-115px');
                $('#signin_img').css('opacity', '0.7');
                j = 0; //меню видно
                i++;
                end();
            }
        });
    });
});