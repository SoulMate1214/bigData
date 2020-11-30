var number;
$(function () {
    if (window.screen.height <= 768) {
        number = 4;
    } else if (window.screen.height > 768 && window.screen.height <= 900) {
        number = 6
    } else if (window.screen.height > 1080) {
        number = 8
    }
});

//    翻页模块
$(".tcdPageCode").createPage({
    pageCount: 5,
    current: 1,
    backFn: function (p) {
    }
});
$(".chemistry_tcdPageCode").createPage({
    pageCount: 4,
    current: 1,
    backFn: function (p) {
    }
});
$(".enterprise_tcdPageCode").createPage({
    pageCount: 4,
    current: 1,
    backFn: function (p) {
    }
});
$(".car_tcdPageCode").createPage({
    pageCount: 4,
    current: 1,
    backFn: function (p) {
    }
});

$(function () {
    $(".tit02Diva a").each(function (index) {
        $(this).on("click", function () {
            $(".data_map").eq(index).fadeIn().siblings(".data_map").stop().hide();
            $(this).prev('i').removeClass('i_crlieAction');
            $(this).siblings('a').prev('i').addClass('i_crlieAction');

        })
    });
    Echarts();
    historicalChart();
    $("#fresh_tool").click(function (event) {
        event.stopPropagation();
        cancel();
    })
});

function EventClick() {
    $(".check_increase").removeClass("check_increase_act");
    $("#over_hide1").show().siblings().hide();
    $(".check_decrease").show();
    $("#cage_cl").hide();
    $("#map_title_innerbox").hide();
    $("#cage_cl1").show();
    $("#map_title_innerbox1").show();
    $(".addition_check_in").hide();
    $("#car_check_in").hide();
}

function cancel(e) {
    $(".check_increase").removeClass("check_increase_act");
    $("#over_hide").show().siblings().hide();
    $(".check_decrease").show();
    $("#cage_cl").show();
    $("#cage_cl1").hide();
}

//    地址检索
function addressCheck() {
    $(".check_increase").addClass("check_increase_act");
    $(".check_decrease").hide()
    $(".addition_check_in").show().siblings().hide()
}

//    危化品检索
function chemistryCheck() {
    $(".check_increase").addClass("check_increase_act");
    $(".check_decrease").hide()
    $("#chemistry_check_in").show().siblings().hide()
}

//    企业检索
function enterpriseCheck() {
    $(".check_increase").addClass("check_increase_act");
    $(".check_decrease").hide()
    $("#enterprise_check_in").show().siblings().hide()
}

//    车辆检索
function carCheck() {
    $(".check_increase").addClass("check_increase_act");
    $(".check_decrease").hide()
    $("#car_check_in").show().siblings().hide()
}


function TimeControl() {
    $(".message_scroll_box").animate({marginTop: 96}, 800,
        function () {
            $(".message_scroll_box").css({marginTop: 0});    //把顶部的边界清零
            $(".message_scroll_box .message_scroll:first").before($(".message_scroll_box .message_scroll:last"));    //在第一个新闻后面插入最后一个新闻
        });
}

var T = setInterval(TimeControl, 2300);    //开始定时
$(".message_scroll_box").mouseenter(function () {
    clearInterval(T);    //停止定时
})
.mouseleave(function () {
        T = setInterval(TimeControl, 2500);    //再次定时
    })

!function () {
    laydate.skin('danlan');//切换皮肤，请查看skins下面皮肤库
    laydate({elem: '#demo'});
    laydate({elem: '#demo1'});//绑定元素
}();
//日期范围限制
var start = {
    elem: '#start',
    format: 'YYYY-MM-DD',
    min: laydate.now(), //设定最小日期为当前日期
    max: '2099-06-16', //最大日期
    istime: true,
    istoday: false,
    choose: function (datas) {
        end.min = datas; //开始日选好后，重置结束日的最小日期
        end.start = datas //将结束日的初始值设定为开始日
    }
};

var end = {
    elem: '#end',
    format: 'YYYY-MM-DD',
    min: laydate.now(),
    max: '2099-06-16',
    istime: true,
    istoday: false,
    choose: function (datas) {
        start.max = datas; //结束日选好后，充值开始日的最大日期
    }
};
laydate(start);
laydate(end);

