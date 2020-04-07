$(document).ready(function () {
    let ani = $("#ban").width() / 3;
    let count = 0;
    /*배너*/
    $(".btn_side.lef").click(function () {
        count++;
        if (count == 3) {
            count = 2;
        }
        $("#ban").animate({
            left: -ani * count
        })
    })
    $(".btn_side.rig").click(function () {
        count--;
        if (count == -1) {
            count = 0;
        }
        $("#ban").animate({
            left: -ani * count
        })
    })
    /*배너의 숨긴 광고*/
    let click = true;
    $("#btnAdv").click(function () {
        if (click) {
            $("#banAdvWrap").animate({
                left: 0
            })
        } else {
            $("#banAdvWrap").animate({
                left: -600
            })
        }

        click = !click
    })
    /*허쉬월드 소식*/
    $('.not_nav>li').click(function (e) {
        e.preventDefault();
        $('.not_nav>li').find('a').removeClass('active');
        $(this).find('a').addClass('active')
    })
    $('.com_nav>li').click(function (e) {
        e.preventDefault();
        $('.com_nav>li').find('a').removeClass('active');
        $(this).find('a').addClass('active')
    })
    /*모바일 숨긴메뉴*/
    $(".ui.top.attached.demo.menu").click(function () {
        $('#mbMenu')
            .sidebar('setting', 'transition', 'overlay').sidebar('toggle')
    })
    /*모바일 스와아퍼*/
    var swiper = new Swiper('.swiper-container');
})
