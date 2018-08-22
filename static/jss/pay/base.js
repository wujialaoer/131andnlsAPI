// var date = new Date();
var start_time;
var end_time;

function del_table(type) {
    var checkbox = $('.checkbox:checked');
    var checkbox_list = []
    $(checkbox).each(function () {
        id = $(this).parent().parent().attr('value');
        checkbox_list.push(id);
    });
    checkbox_list = JSON.stringify(checkbox_list)
    $.ajax({
        type: "DELETE",
        url: "/api/v1.0/dailystatement/" + type,
        data: {
            "ids": checkbox_list,
        },
        dataType: "json",
        success: function (data) {
            if (data.code == 0) {
                $(checkbox).each(function () {
                    $(this).parent().parent().remove();
                });
            }
            ;

        },
    });
}

function check_input() {
    var flag = 0;
    $("input[class='require']").each(function () {
        $(this).removeClass('error');
        if ($(this).val() == '') {
            flag = 1;
            $(this).addClass('error');
        }
    });
    return flag
}

function add_option() {
    var date = new Date();
    var diff = date.getFullYear() - 2017 + 1;
    $(".year-selection").html("");
    $(".month-selection").html("");
    $(".day-selection").html("");
    for (var i = 0; i < diff; i++) {
        var newyear = 2017 + i;
        var option = "<option>" + newyear + "</option>";
        $(".year-selection").append(option);
    }
    for (var i = 1; i < 13; i++) {
        var option = "<option>" + i + "</option>";
        $(".month-selection").append(option);
    }
    for (var i = 1; i < 32; i++) {
        var option = "<option>" + i + "</option>";
        $(".day-selection").append(option);
    }
    $(".year-selection").val(date.getFullYear());
    $(".month-selection").val(date.getMonth()+1);
    $("#end-day").val(date.getDate());
}

function formatDate(year, month, day) {
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return (year + "-" + month + "-" + day);
}

function getMonthDays(myMonth) {
    var date = new Date();
    year = date.getFullYear();
    var monthStartDate = new Date(year, myMonth, 1);
    var monthEndDate = new Date(year, myMonth + 1, 1);
    var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
}

function get_today() {
    var date = new Date();
    start_time = formatDate(date.getFullYear(), date.getMonth()+1, date.getDate());
    end_time = start_time;
}

function get_lastweek_time() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var days = date.getDay();
    var start_date = new Date(year, month, day - days - 6);
    var end_date = new Date(year, month, day - days);
    start_time = formatDate(start_date.getFullYear(), start_date.getMonth() + 1, start_date.getDate());
    end_time = formatDate(end_date.getFullYear(), end_date.getMonth() + 1, end_date.getDate());

}

function get_lastmonth_time() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var lastmonth = month - 1;
    var start_date = new Date(year, lastmonth, 1);
    var end_date = new Date(year, lastmonth, getMonthDays(lastmonth));
    start_time = formatDate(start_date.getFullYear(), start_date.getMonth() + 1, start_date.getDate());
    end_time = formatDate(end_date.getFullYear(), end_date.getMonth() + 1, end_date.getDate());
}

function get_user_time() {
    var start_date = new Date($("#start-year").val(), $("#start-month").val(), $("#start-day").val());
    var end_date = new Date($("#end-year").val(), $("#end-month").val(), $("#end-day").val());
    var intervalTime = end_date - start_date;
    var intervalDays = ((intervalTime).toFixed(2) / 86400000) + 1;
    if (intervalDays < 0) {
        alert("请正确选择起始时间！");
    }
    else {
        start_time = formatDate($("#start-year").val(), $("#start-month").val(), $("#start-day").val());
        end_time = formatDate($("#end-year").val(), $("#end-month").val(), $("#end-day").val())
    }
}

$(".date .button").click(function () {
    $(".date .button").removeClass("active");
    $(this).addClass("active");
    if ($(this).attr("id") == "date-select") {
        add_option();
        $(".triangle").show();
        $(".date-select").show();
    }
    else {
        $(".triangle").hide();
        $(".date-select").hide();
    }
});

$("#lastweek").click(function () {
    get_lastweek_time();
    fillData();
});
$("#lastmonth").click(function () {
    get_lastmonth_time();
    fillData();
});
$("#usertime").click(function () {
    get_user_time();
    fillData();
});

$(".data").hover(function (){
    $(".sidebar-child").show();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXkvYmFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG52YXIgc3RhcnRfdGltZTtcbnZhciBlbmRfdGltZTtcblxuZnVuY3Rpb24gZGVsX3RhYmxlKHR5cGUpIHtcbiAgICB2YXIgY2hlY2tib3ggPSAkKCcuY2hlY2tib3g6Y2hlY2tlZCcpO1xuICAgIHZhciBjaGVja2JveF9saXN0ID0gW11cbiAgICAkKGNoZWNrYm94KS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWQgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmF0dHIoJ3ZhbHVlJyk7XG4gICAgICAgIGNoZWNrYm94X2xpc3QucHVzaChpZCk7XG4gICAgfSk7XG4gICAgY2hlY2tib3hfbGlzdCA9IEpTT04uc3RyaW5naWZ5KGNoZWNrYm94X2xpc3QpXG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJERUxFVEVcIixcbiAgICAgICAgdXJsOiBcIi9hcGkvdjEuMC9kYWlseXN0YXRlbWVudC9cIiArIHR5cGUsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwiaWRzXCI6IGNoZWNrYm94X2xpc3QsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgICQoY2hlY2tib3gpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuXG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrX2lucHV0KCkge1xuICAgIHZhciBmbGFnID0gMDtcbiAgICAkKFwiaW5wdXRbY2xhc3M9J3JlcXVpcmUnXVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gJycpIHtcbiAgICAgICAgICAgIGZsYWcgPSAxO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmbGFnXG59XG5cbmZ1bmN0aW9uIGFkZF9vcHRpb24oKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciBkaWZmID0gZGF0ZS5nZXRGdWxsWWVhcigpIC0gMjAxNyArIDE7XG4gICAgJChcIi55ZWFyLXNlbGVjdGlvblwiKS5odG1sKFwiXCIpO1xuICAgICQoXCIubW9udGgtc2VsZWN0aW9uXCIpLmh0bWwoXCJcIik7XG4gICAgJChcIi5kYXktc2VsZWN0aW9uXCIpLmh0bWwoXCJcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaWZmOyBpKyspIHtcbiAgICAgICAgdmFyIG5ld3llYXIgPSAyMDE3ICsgaTtcbiAgICAgICAgdmFyIG9wdGlvbiA9IFwiPG9wdGlvbj5cIiArIG5ld3llYXIgKyBcIjwvb3B0aW9uPlwiO1xuICAgICAgICAkKFwiLnllYXItc2VsZWN0aW9uXCIpLmFwcGVuZChvcHRpb24pO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IDEzOyBpKyspIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IFwiPG9wdGlvbj5cIiArIGkgKyBcIjwvb3B0aW9uPlwiO1xuICAgICAgICAkKFwiLm1vbnRoLXNlbGVjdGlvblwiKS5hcHBlbmQob3B0aW9uKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCAzMjsgaSsrKSB7XG4gICAgICAgIHZhciBvcHRpb24gPSBcIjxvcHRpb24+XCIgKyBpICsgXCI8L29wdGlvbj5cIjtcbiAgICAgICAgJChcIi5kYXktc2VsZWN0aW9uXCIpLmFwcGVuZChvcHRpb24pO1xuICAgIH1cbiAgICAkKFwiLnllYXItc2VsZWN0aW9uXCIpLnZhbChkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICQoXCIubW9udGgtc2VsZWN0aW9uXCIpLnZhbChkYXRlLmdldE1vbnRoKCkrMSk7XG4gICAgJChcIiNlbmQtZGF5XCIpLnZhbChkYXRlLmdldERhdGUoKSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoeWVhciwgbW9udGgsIGRheSkge1xuICAgIGlmIChtb250aCA8IDEwKSB7XG4gICAgICAgIG1vbnRoID0gXCIwXCIgKyBtb250aDtcbiAgICB9XG4gICAgaWYgKGRheSA8IDEwKSB7XG4gICAgICAgIGRheSA9IFwiMFwiICsgZGF5O1xuICAgIH1cbiAgICByZXR1cm4gKHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXkpO1xufVxuXG5mdW5jdGlvbiBnZXRNb250aERheXMobXlNb250aCkge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHZhciBtb250aFN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHllYXIsIG15TW9udGgsIDEpO1xuICAgIHZhciBtb250aEVuZERhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBteU1vbnRoICsgMSwgMSk7XG4gICAgdmFyIGRheXMgPSAobW9udGhFbmREYXRlIC0gbW9udGhTdGFydERhdGUpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpO1xuICAgIHJldHVybiBkYXlzO1xufVxuXG5mdW5jdGlvbiBnZXRfdG9kYXkoKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHN0YXJ0X3RpbWUgPSBmb3JtYXREYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpKzEsIGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICBlbmRfdGltZSA9IHN0YXJ0X3RpbWU7XG59XG5cbmZ1bmN0aW9uIGdldF9sYXN0d2Vla190aW1lKCkge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIHZhciBkYXlzID0gZGF0ZS5nZXREYXkoKTtcbiAgICB2YXIgc3RhcnRfZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkgLSBkYXlzIC0gNik7XG4gICAgdmFyIGVuZF9kYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSAtIGRheXMpO1xuICAgIHN0YXJ0X3RpbWUgPSBmb3JtYXREYXRlKHN0YXJ0X2RhdGUuZ2V0RnVsbFllYXIoKSwgc3RhcnRfZGF0ZS5nZXRNb250aCgpICsgMSwgc3RhcnRfZGF0ZS5nZXREYXRlKCkpO1xuICAgIGVuZF90aW1lID0gZm9ybWF0RGF0ZShlbmRfZGF0ZS5nZXRGdWxsWWVhcigpLCBlbmRfZGF0ZS5nZXRNb250aCgpICsgMSwgZW5kX2RhdGUuZ2V0RGF0ZSgpKTtcblxufVxuXG5mdW5jdGlvbiBnZXRfbGFzdG1vbnRoX3RpbWUoKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICB2YXIgbGFzdG1vbnRoID0gbW9udGggLSAxO1xuICAgIHZhciBzdGFydF9kYXRlID0gbmV3IERhdGUoeWVhciwgbGFzdG1vbnRoLCAxKTtcbiAgICB2YXIgZW5kX2RhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBsYXN0bW9udGgsIGdldE1vbnRoRGF5cyhsYXN0bW9udGgpKTtcbiAgICBzdGFydF90aW1lID0gZm9ybWF0RGF0ZShzdGFydF9kYXRlLmdldEZ1bGxZZWFyKCksIHN0YXJ0X2RhdGUuZ2V0TW9udGgoKSArIDEsIHN0YXJ0X2RhdGUuZ2V0RGF0ZSgpKTtcbiAgICBlbmRfdGltZSA9IGZvcm1hdERhdGUoZW5kX2RhdGUuZ2V0RnVsbFllYXIoKSwgZW5kX2RhdGUuZ2V0TW9udGgoKSArIDEsIGVuZF9kYXRlLmdldERhdGUoKSk7XG59XG5cbmZ1bmN0aW9uIGdldF91c2VyX3RpbWUoKSB7XG4gICAgdmFyIHN0YXJ0X2RhdGUgPSBuZXcgRGF0ZSgkKFwiI3N0YXJ0LXllYXJcIikudmFsKCksICQoXCIjc3RhcnQtbW9udGhcIikudmFsKCksICQoXCIjc3RhcnQtZGF5XCIpLnZhbCgpKTtcbiAgICB2YXIgZW5kX2RhdGUgPSBuZXcgRGF0ZSgkKFwiI2VuZC15ZWFyXCIpLnZhbCgpLCAkKFwiI2VuZC1tb250aFwiKS52YWwoKSwgJChcIiNlbmQtZGF5XCIpLnZhbCgpKTtcbiAgICB2YXIgaW50ZXJ2YWxUaW1lID0gZW5kX2RhdGUgLSBzdGFydF9kYXRlO1xuICAgIHZhciBpbnRlcnZhbERheXMgPSAoKGludGVydmFsVGltZSkudG9GaXhlZCgyKSAvIDg2NDAwMDAwKSArIDE7XG4gICAgaWYgKGludGVydmFsRGF5cyA8IDApIHtcbiAgICAgICAgYWxlcnQoXCLor7fmraPnoa7pgInmi6notbflp4vml7bpl7TvvIFcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdGFydF90aW1lID0gZm9ybWF0RGF0ZSgkKFwiI3N0YXJ0LXllYXJcIikudmFsKCksICQoXCIjc3RhcnQtbW9udGhcIikudmFsKCksICQoXCIjc3RhcnQtZGF5XCIpLnZhbCgpKTtcbiAgICAgICAgZW5kX3RpbWUgPSBmb3JtYXREYXRlKCQoXCIjZW5kLXllYXJcIikudmFsKCksICQoXCIjZW5kLW1vbnRoXCIpLnZhbCgpLCAkKFwiI2VuZC1kYXlcIikudmFsKCkpXG4gICAgfVxufVxuXG4kKFwiLmRhdGUgLmJ1dHRvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5kYXRlIC5idXR0b25cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICBpZiAoJCh0aGlzKS5hdHRyKFwiaWRcIikgPT0gXCJkYXRlLXNlbGVjdFwiKSB7XG4gICAgICAgIGFkZF9vcHRpb24oKTtcbiAgICAgICAgJChcIi50cmlhbmdsZVwiKS5zaG93KCk7XG4gICAgICAgICQoXCIuZGF0ZS1zZWxlY3RcIikuc2hvdygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgJChcIi50cmlhbmdsZVwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIuZGF0ZS1zZWxlY3RcIikuaGlkZSgpO1xuICAgIH1cbn0pO1xuXG4kKFwiI2xhc3R3ZWVrXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBnZXRfbGFzdHdlZWtfdGltZSgpO1xuICAgIGZpbGxEYXRhKCk7XG59KTtcbiQoXCIjbGFzdG1vbnRoXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBnZXRfbGFzdG1vbnRoX3RpbWUoKTtcbiAgICBmaWxsRGF0YSgpO1xufSk7XG4kKFwiI3VzZXJ0aW1lXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBnZXRfdXNlcl90aW1lKCk7XG4gICAgZmlsbERhdGEoKTtcbn0pO1xuXG4kKFwiLmRhdGFcIikuaG92ZXIoZnVuY3Rpb24gKCl7XG4gICAgJChcIi5zaWRlYmFyLWNoaWxkXCIpLnNob3coKTtcbn0pOyJdLCJmaWxlIjoicGF5L2Jhc2UuanMifQ==
