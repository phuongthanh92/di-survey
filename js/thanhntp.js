$(document).ready(function () {
    $(function () {
        var isIE = window.ActiveXObject || "ActiveXObject" in window;
        if (isIE) {
            $('.modal').removeClass('fade');
        }
    });
    $('#continue-modal .close-btn').click(function () {
        $('#continue-modal').addClass('moveOut');
    })

    $('#gift-box').click(function () {
        $(this).html('<img src="images/HOPQUA_mo.png" alt="">');
        setTimeout(function () {
            $('#daily-bonus').addClass('open');
        }, 1000);
    })
    $('#daily-bonus .close-button').click(function () {
        $('#daily-bonus').removeClass('open');
    })
    $('#daily-bonus .daily-button').click(function (e) {
        e.preventDefault();
        $(this).addClass('disabled');
        $('#daily-bonus .close-button').addClass('available');
        $(this).html('Đã nhận điểm');
    })

    $('#top-search ul').click(function () {
        $(this).toggleClass('open-toggle');
    })

    $('.open-guide-box').click(function (e) {
        e.preventDefault();
        var idBox = $(this).attr('data-target');
        $(idBox).addClass('open');

        $('.open-popup .close-button').click(function () {
            $(this).parents('.open-popup').removeClass('open');

        })
    })

    $("#list-mail-invite input").change(function () {
        /*var null_input_lenght = $("#list-mail-invite input").attr('value','').length;
         console.log(null_input_lenght);*/
        $('#list-mail-invite table').append("<tr><td> <input type='text' placeholder='...'> </td> </tr>")
    })

    $("#get-mail-box form button").click(function (e) {
        e.preventDefault();
        $("#get-mail-box").removeClass('open');
        $("#success-box").addClass('open');
        setTimeout(function () {
            $("#success-box").removeClass('open');
        }, 2000)
    })
})
