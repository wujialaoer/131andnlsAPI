function fillData(){var e=$("#startTime").attr("value");console.log(1);var t=$("#endTime").attr("value");console.log(2);var a=$(".select-page").val()||1;console.log(3);var l=$(".search input").val();console.log(4);var s=$("th .ascending").parent().attr("value")||$("th .descending").parent().attr("value");console.log(5);var i=$(".ascending").attr("class")||$(".descending").attr("class");console.log(6);compareDate(e,t);console.log(7),""!==$.trim(l)&&(a=1,console.log(8)),console.log("store"),console.log(e+","+t),$.ajax({url:"/api/v1.0/dailystatement/commission",data:{start_time:e,end_time:t,page:a,arg:l,sort:s,order:i},type:"GET",success:function(e){if(console.log(9),1==e.success){$(".pagination p span").eq(0).text(e.data.pages),$(".pagination p span").eq(1).text(e.data.count),$(".select-page option").remove();for(var t=1;t<=e.data.pages;t++)$(".select-page").append("<option value="+t+">第"+num2Chinese(t)+"页</option>");$(".select-page").val(a),setTbaleWidth()}else location.href="/logout"}})}$(document).ready(function(){$(".sidebar li").eq(0).addClass("active").siblings().removeClass("active");var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-1",a=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();$("#startTime").attr("value",t),$("#endTime").attr("value",a),fillData(),$("a[value='storeanalysis']").addClass("sidebar-color"),$(".date li").click(function(){$(".date-choiced").removeClass(),$(this).addClass("date-choiced"),fillData();var e=$(this).scrollLeft();$("table th").eq(0).css("left",e),$("table th").eq(1).css("left",e),$("table th").eq(2).css("left",e),$("table th").eq(3).css("left",e).addClass("box-shadow"),$("table td:nth-child(1)").css("left",e),$("table td:nth-child(2)").css("left",e),$("table td:nth-child(3)").css("left",e),$("table td:nth-child(4)").css("left",e).addClass("box-shadow"),0===Number($(this).scrollLeft())&&($("table th").eq(3).removeClass("box-shadow"),$("table td:nth-child(4)").removeClass("box-shadow"))}),$(".select-page").change(function(){fillData()}),$(".page-turing.prev").click(function(){1!=$(".select-page").val()&&($(".select-page").val($(".select-page").val()-1),fillData())}),$(".page-turing.next").click(function(){$(".select-page").val()!=$(".select-page option").length&&($(".select-page").val(Number($(".select-page").val())+1),fillData())}),$(".add-image:eq(0)").click(function(){"hidden"==$(".explain-box").attr("hidden")?$(".explain-box").removeAttr("hidden"):$(".explain-box").attr("hidden","hidden")}),$(".add-image:eq(1)").click(function(){"hidden"==$(".add-items").attr("hidden")?$(".add-items").removeAttr("hidden"):$(".add-items").attr("hidden","hidden")}),$(".float-right input:eq(0), .float-right input:eq(1)").click(function(){$(".add-items").attr("hidden","hidden")}),$(".float-right input:eq(2)").click(function(){$(".add-items").attr("hidden","hidden"),$("input:checkbox:not(:checked)").each(function(){hideTableCol($("table"),$(this).attr("value"))}),$("input:checkbox:checked").each(function(){showTableCol($("table"),$(this).attr("value"))}),setTbaleWidth()}),$(".search img").click(function(){""!==$.trim($(".search input").val())&&fillData()}),$(".search input").keydown(function(e){13==e.which&&fillData()}),$("table").tablesort({func:function(){fillData()}}),$(".download").click(function(){$("table").tableExport({headings:!0,fileName:"stores",formats:["csv"],position:"bottom",ignoreCSS:"[style*='display: none']"})}),$(".table-border").scroll(function(){var e=$(this).scrollLeft();$("table th").eq(0).css("left",e),$("table th").eq(1).css("left",e),$("table th").eq(2).css("left",e),$("table th").eq(3).css("left",e).addClass("box-shadow"),$("table td:nth-child(1)").css("left",e),$("table td:nth-child(2)").css("left",e),$("table td:nth-child(3)").css("left",e),$("table td:nth-child(4)").css("left",e).addClass("box-shadow"),0===Number($(this).scrollLeft())&&($("table th").eq(3).removeClass("box-shadow"),$("table td:nth-child(4)").removeClass("box-shadow"))})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhaWx5c3RhdGVtZW50L2d1aWRlLXNhbGFyeS5qcyJdLCJuYW1lcyI6WyJmaWxsRGF0YSIsInN0YXJ0VGltZSIsIiQiLCJhdHRyIiwiY29uc29sZSIsImxvZyIsImVuZFRpbWUiLCJwYWdlIiwidmFsIiwiYXJnIiwic29ydCIsInBhcmVudCIsIm9yZGVyIiwiY29tcGFyZURhdGUiLCJ0cmltIiwiYWpheCIsInVybCIsImRhdGEiLCJzdGFydF90aW1lIiwiZW5kX3RpbWUiLCJ0eXBlIiwic3VjY2VzcyIsImVxIiwidGV4dCIsInBhZ2VzIiwiY291bnQiLCJyZW1vdmUiLCJqIiwiYXBwZW5kIiwibnVtMkNoaW5lc2UiLCJzZXRUYmFsZVdpZHRoIiwibG9jYXRpb24iLCJocmVmIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFkZENsYXNzIiwic2libGluZ3MiLCJyZW1vdmVDbGFzcyIsImQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJjbGljayIsInRoaXMiLCJfbGVmdCIsInNjcm9sbExlZnQiLCJjc3MiLCJOdW1iZXIiLCJjaGFuZ2UiLCJsZW5ndGgiLCJyZW1vdmVBdHRyIiwiZWFjaCIsImhpZGVUYWJsZUNvbCIsInNob3dUYWJsZUNvbCIsImtleWRvd24iLCJldmVudCIsIndoaWNoIiwidGFibGVzb3J0IiwiZnVuYyIsInRhYmxlRXhwb3J0IiwiaGVhZGluZ3MiLCJmaWxlTmFtZSIsImZvcm1hdHMiLCJwb3NpdGlvbiIsImlnbm9yZUNTUyIsInNjcm9sbCJdLCJtYXBwaW5ncyI6IkFBQUEsUUFBU0EsWUFDTCxHQUFJQyxHQUFZQyxFQUFFLGNBQWNDLEtBQUssUUFDckNDLFNBQVFDLElBQUksRUFDWixJQUFJQyxHQUFVSixFQUFFLFlBQVlDLEtBQUssUUFDakNDLFNBQVFDLElBQUksRUFDWixJQUFJRSxHQUFPTCxFQUFFLGdCQUFnQk0sT0FBUyxDQUN0Q0osU0FBUUMsSUFBSSxFQUNaLElBQUlJLEdBQU1QLEVBQUUsaUJBQWlC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WUFBWW9CLEdBQUcsR0FBR3lCLElBQUksT0FBUUYsR0FDaEMzQyxFQUFFLFlBQVlvQixHQUFHLEdBQUd5QixJQUFJLE9BQVFGLEdBQ2hDM0MsRUFBRSxZQUFZb0IsR0FBRyxHQUFHeUIsSUFBSSxPQUFRRixHQUNoQzNDLEVBQUUsWUFBWW9CLEdBQUcsR0FBR3lCLElBQUksT0FBUUYsR0FBT1YsU0FBUyxjQUNoRGpDLEVBQUUseUJBQXlCNkMsSUFBSSxPQUFRRixHQUN2QzNDLEVBQUUseUJBQXlCNkMsSUFBSSxPQUFRRixHQUN2QzNDLEVBQUUseUJBQXlCNkMsSUFBSSxPQUFRRixHQUN2QzNDLEVBQUUseUJBQXlCNkMsSUFBSSxPQUFRRixHQUFPVixTQUFTLGNBQ2xCLElBQWpDYSxPQUFPOUMsRUFBRTBDLE1BQU1FLGdCQUNmNUMsRUFBRSxZQUFZb0IsR0FBRyxHQUFHZSxZQUFZLGNBQ2hDbkMsRUFBRSx5QkFBeUJtQyxZQUFZIiwiZmlsZSI6ImRhaWx5c3RhdGVtZW50L2d1aWRlLXNhbGFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGZpbGxEYXRhKCl7XG4gICAgdmFyIHN0YXJ0VGltZSA9ICQoXCIjc3RhcnRUaW1lXCIpLmF0dHIoXCJ2YWx1ZVwiKTtcbiAgICBjb25zb2xlLmxvZygxKTtcbiAgICB2YXIgZW5kVGltZSA9ICQoXCIjZW5kVGltZVwiKS5hdHRyKFwidmFsdWVcIik7XG4gICAgY29uc29sZS5sb2coMik7XG4gICAgdmFyIHBhZ2UgPSAkKFwiLnNlbGVjdC1wYWdlXCIpLnZhbCgpIHx8IDE7XG4gICAgY29uc29sZS5sb2coMyk7XG4gICAgdmFyIGFyZyA9ICQoXCIuc2VhcmNoIGlucHV0XCIpLnZhbCgpO1xuICAgIGNvbnNvbGUubG9nKDQpO1xuICAgIHZhciBzb3J0ID0gJChcInRoIC5hc2NlbmRpbmdcIikucGFyZW50KCkuYXR0cihcInZhbHVlXCIpIHx8ICQoXCJ0aCAuZGVzY2VuZGluZ1wiKS5wYXJlbnQoKS5hdHRyKFwidmFsdWVcIik7XG4gICAgY29uc29sZS5sb2coNSk7XG4gICAgdmFyIG9yZGVyID0gJChcIi5hc2NlbmRpbmdcIikuYXR0cihcImNsYXNzXCIpIHx8ICQoXCIuZGVzY2VuZGluZ1wiKS5hdHRyKFwiY2xhc3NcIik7XG4gICAgY29uc29sZS5sb2coNik7XG4gICAgdmFyIGludGVydmFsVGltZSA9IGNvbXBhcmVEYXRlKHN0YXJ0VGltZSxlbmRUaW1lKTtcbiAgICBjb25zb2xlLmxvZyg3KTtcbiAgICBpZiAoJC50cmltKGFyZykgIT09IFwiXCIpe1xuICAgICAgICBwYWdlID0gMTtcbiAgICAgICAgY29uc29sZS5sb2coOCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdzdG9yZScpO1xuICAgIGNvbnNvbGUubG9nKHN0YXJ0VGltZSsnLCcrZW5kVGltZSk7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBcIi9hcGkvdjEuMC9kYWlseXN0YXRlbWVudC9jb21taXNzaW9uXCIsXG4gICAgICAgIGRhdGE6IHtcInN0YXJ0X3RpbWVcIjogc3RhcnRUaW1lLCBcImVuZF90aW1lXCI6IGVuZFRpbWUsIFwicGFnZVwiOnBhZ2UsIFwiYXJnXCI6YXJnLCBcInNvcnRcIjogc29ydCwgXCJvcmRlclwiOiBvcmRlcn0sXG4gICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyg5KTtcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT0gMSkge1xuICAgICAgICAgICAgICAgICQoXCIucGFnaW5hdGlvbiBwIHNwYW5cIikuZXEoMCkudGV4dChkYXRhLmRhdGEucGFnZXMpO1xuICAgICAgICAgICAgICAgICQoXCIucGFnaW5hdGlvbiBwIHNwYW5cIikuZXEoMSkudGV4dChkYXRhLmRhdGEuY291bnQpO1xuICAgICAgICAgICAgICAgICQoXCIuc2VsZWN0LXBhZ2Ugb3B0aW9uXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDw9IGRhdGEuZGF0YS5wYWdlczsgaisrKXtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5zZWxlY3QtcGFnZVwiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPVwiK2orXCI+56ysXCIgKyBudW0yQ2hpbmVzZShqKSArIFwi6aG1PC9vcHRpb24+XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKFwiLnNlbGVjdC1wYWdlXCIpLnZhbChwYWdlKTtcbiAgICAgICAgICAgICAgICAvLyB2YXIgbmV3Um93ID0gXCI8dHI+PHRkPjwvdGQ+PHRkPjwvdGQ+PHRkPjwvdGQ+PHRkPjwvdGQ+PHRkPjwvdGQ+PC90cj5cIjtcbiAgICAgICAgICAgICAgICAvLyAkKFwidGFibGUgdGJvZHkgdHJcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmRhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICAgICAkKFwidGFibGUgdGJvZHlcIikuYXBwZW5kKG5ld1Jvdyk7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlpID0gaSArIDE7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlpaSA9IGkgKyAxICsgKHBhZ2UtMSkgKiAxMDtcbiAgICAgICAgICAgICAgICAvLyAgICAgdmFyIG51bWJlciA9IGRhdGEuZGF0YS5kYXRhW2ldLm51bWJlciB8fCAn5pegJztcbiAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGNvbW1pc3Npb24gPSBkYXRhLmRhdGEuZGF0YVtpXS5jb21taXNzaW9uIHx8IDA7XG4gICAgICAgICAgICAgICAgLy8gICAgIHZhciBndWlkZSA9IGRhdGEuZGF0YS5kYXRhW2ldLmd1aWRlIHx8ICfml6AnO1xuICAgICAgICAgICAgICAgIC8vICAgICAkKFwidGFibGUgdHI6ZXEoXCIgKyBpaSArIFwiKVwiKS5hdHRyKFwidmFsdWVcIiwgZGF0YS5kYXRhLmRhdGFbaV0uaWQpO1xuICAgICAgICAgICAgICAgIC8vICAgICAkKFwidGFibGUgdHI6ZXEoXCIgKyBpaSArIFwiKSB0ZDplcSgwKVwiKS50ZXh0KGlpaSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICQoXCJ0YWJsZSB0cjplcShcIiArIGlpICsgXCIpIHRkOmVxKDEpXCIpLnRleHQobnVtYmVyKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgJChcInRhYmxlIHRyOmVxKFwiICsgaWkgKyBcIikgdGQ6ZXEoMilcIikuaHRtbChcIjxhIGhyZWY9Jy9kYWlseXN0YXRlbWVudC9zdG9yZS1kZXRhaWwvXCIrIGRhdGEuZGF0YS5kYXRhW2ldLmlkICsgXCInPlwiICsgZGF0YS5kYXRhLmRhdGFbaV0uc3RvcmVfbmFtZSsgXCI8L2E+XCIpO1xuICAgICAgICAgICAgICAgIC8vICAgICAkKFwidGFibGUgdHI6ZXEoXCIgKyBpaSArIFwiKSB0ZDplcSgzKVwiKS50ZXh0KGNvbW1pc3Npb24pO1xuICAgICAgICAgICAgICAgIC8vICAgICAkKFwidGFibGUgdHI6ZXEoXCIgKyBpaSArIFwiKSB0ZDplcSg0KVwiKS50ZXh0KGd1aWRlKTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNldFRiYWxlV2lkdGgoKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvbG9nb3V0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoXCIuc2lkZWJhciBsaVwiKS5lcSgwKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIHZhciBkID0gbmV3IERhdGUoKTtcbiAgICB2YXIgc3RhcnRfdGltZSA9IGQuZ2V0RnVsbFllYXIoKStcIi1cIisoZC5nZXRNb250aCgpKzEpK1wiLTFcIjtcbiAgICB2YXIgZW5kX3RpbWUgPSBkLmdldEZ1bGxZZWFyKCkrXCItXCIrKGQuZ2V0TW9udGgoKSsxKStcIi1cIitkLmdldERhdGUoKTtcbiAgICAkKFwiI3N0YXJ0VGltZVwiKS5hdHRyKFwidmFsdWVcIixzdGFydF90aW1lKTtcbiAgICAkKFwiI2VuZFRpbWVcIikuYXR0cihcInZhbHVlXCIsZW5kX3RpbWUpO1xuICAgIGZpbGxEYXRhKCk7XG4gICAgXG5cbiAgICAkKFwiYVt2YWx1ZT0nc3RvcmVhbmFseXNpcyddXCIpLmFkZENsYXNzKFwic2lkZWJhci1jb2xvclwiKTtcblxuICAgICQoXCIuZGF0ZSBsaVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIuZGF0ZS1jaG9pY2VkXCIpLnJlbW92ZUNsYXNzKCk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJkYXRlLWNob2ljZWRcIik7XG4gICAgICAgIGZpbGxEYXRhKCk7XG4gICAgICAgIHZhciBfbGVmdCA9ICQodGhpcykuc2Nyb2xsTGVmdCgpO1xuICAgICAgICAkKCd0YWJsZSB0aCcpLmVxKDApLmNzcygnbGVmdCcsIF9sZWZ0KTtcbiAgICAgICAgJCgndGFibGUgdGgnKS5lcSgxKS5jc3MoJ2xlZnQnLCBfbGVmdCk7XG4gICAgICAgICQoJ3RhYmxlIHRoJykuZXEoMikuY3NzKCdsZWZ0JywgX2xlZnQpO1xuICAgICAgICAkKCd0YWJsZSB0aCcpLmVxKDMpLmNzcygnbGVmdCcsIF9sZWZ0KS5hZGRDbGFzcygnYm94LXNoYWRvdycpO1xuICAgICAgICAkKCd0YWJsZSB0ZDpudGgtY2hpbGQoMSknKS5jc3MoJ2xlZnQnLCBfbGVmdCk7XG4gICAgICAgICQoJ3RhYmxlIHRkOm50aC1jaGlsZCgyKScpLmNzcygnbGVmdCcsIF9sZWZ0KTtcbiAgICAgICAgJCgndGFibGUgdGQ6bnRoLWNoaWxkKDMpJykuY3NzKCdsZWZ0JywgX2xlZnQpO1xuICAgICAgICAkKCd0YWJsZSB0ZDpudGgtY2hpbGQoNCknKS5jc3MoJ2xlZnQnLCBfbGVmdCkuYWRkQ2xhc3MoJ2JveC1zaGFkb3cnKTtcbiAgICAgICAgaWYgKE51bWJlcigkKHRoaXMpLnNjcm9sbExlZnQoKSkgPT09IDApIHtcbiAgICAgICAgICAgICQoJ3RhYmxlIHRoJykuZXEoMykucmVtb3ZlQ2xhc3MoJ2JveC1zaGFkb3cnKTtcbiAgICAgICAgICAgICQoJ3RhYmxlIHRkOm50aC1jaGlsZCg0KScpLnJlbW92ZUNsYXNzKCdib3gtc2hhZG93Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKFwiLnNlbGVjdC1wYWdlXCIpLmNoYW5nZShmdW5jdGlvbigpe1xuICAgICAgICBmaWxsRGF0YSgpO1xuICAgIH0pO1xuICAgICQoXCIucGFnZS10dXJpbmcucHJldlwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICBpZiAoJChcIi5zZWxlY3QtcGFnZVwiKS52YWwoKSA9PSAxKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAkKFwiLnNlbGVjdC1wYWdlXCIpLnZhbCgkKFwiLnNlbGVjdC1wYWdlXCIpLnZhbCgpIC0gMSk7XG4gICAgICAgIGZpbGxEYXRhKCk7XG4gICAgfSk7XG4gICAgJChcIi5wYWdlLXR1cmluZy5uZXh0XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmICgkKFwiLnNlbGVjdC1wYWdlXCIpLnZhbCgpID09ICQoXCIuc2VsZWN0LXBhZ2Ugb3B0aW9uXCIpLmxlbmd0aClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICQoXCIuc2VsZWN0LXBhZ2VcIikudmFsKE51bWJlcigkKFwiLnNlbGVjdC1wYWdlXCIpLnZhbCgpKSArIDEpO1xuICAgICAgICBmaWxsRGF0YSgpO1xuICAgIH0pO1xuICAgICQoXCIuYWRkLWltYWdlOmVxKDApXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBvcCA9ICQoXCIuZXhwbGFpbi1ib3hcIikuYXR0cihcImhpZGRlblwiKSA9PSBcImhpZGRlblwiID8gJChcIi5leHBsYWluLWJveFwiKS5yZW1vdmVBdHRyKFwiaGlkZGVuXCIpIDogJChcIi5leHBsYWluLWJveFwiKS5hdHRyKFwiaGlkZGVuXCIsIFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuICAgICQoXCIuYWRkLWltYWdlOmVxKDEpXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBvcCA9ICQoXCIuYWRkLWl0ZW1zXCIpLmF0dHIoXCJoaWRkZW5cIikgPT0gXCJoaWRkZW5cIiA/ICQoXCIuYWRkLWl0ZW1zXCIpLnJlbW92ZUF0dHIoXCJoaWRkZW5cIikgOiAkKFwiLmFkZC1pdGVtc1wiKS5hdHRyKFwiaGlkZGVuXCIsIFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuICAgICQoXCIuZmxvYXQtcmlnaHQgaW5wdXQ6ZXEoMCksIC5mbG9hdC1yaWdodCBpbnB1dDplcSgxKVwiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmFkZC1pdGVtc1wiKS5hdHRyKFwiaGlkZGVuXCIsIFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuICAgICQoXCIuZmxvYXQtcmlnaHQgaW5wdXQ6ZXEoMilcIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5hZGQtaXRlbXNcIikuYXR0cihcImhpZGRlblwiLCBcImhpZGRlblwiKTtcblxuICAgICAgICAkKCdpbnB1dDpjaGVja2JveDpub3QoOmNoZWNrZWQpJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaGlkZVRhYmxlQ29sKCQoXCJ0YWJsZVwiKSwgJCh0aGlzKS5hdHRyKFwidmFsdWVcIikpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnaW5wdXQ6Y2hlY2tib3g6Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHNob3dUYWJsZUNvbCgkKFwidGFibGVcIiksICQodGhpcykuYXR0cihcInZhbHVlXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRiYWxlV2lkdGgoKTtcbiAgICB9KTtcblxuICAgICQoXCIuc2VhcmNoIGltZ1wiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICBpZiAoJC50cmltKCQoXCIuc2VhcmNoIGlucHV0XCIpLnZhbCgpKSAhPT0gXCJcIil7XG4gICAgICAgICAgICBmaWxsRGF0YSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiLnNlYXJjaCBpbnB1dFwiKS5rZXlkb3duKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09IDEzKXtcbiAgICAgICAgICAgIGZpbGxEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCJ0YWJsZVwiKS50YWJsZXNvcnQoe2Z1bmM6IGZ1bmN0aW9uKCl7ZmlsbERhdGEoKTt9fSk7XG5cbiAgICAkKFwiLmRvd25sb2FkXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCJ0YWJsZVwiKS50YWJsZUV4cG9ydCh7XG4gICAgICAgICAgICBoZWFkaW5nczogdHJ1ZSxcbiAgICAgICAgICAgIGZpbGVOYW1lOiBcInN0b3Jlc1wiLFxuICAgICAgICAgICAgZm9ybWF0czogW1wiY3N2XCJdLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXG4gICAgICAgICAgICBpZ25vcmVDU1M6IFwiW3N0eWxlKj0nZGlzcGxheTogbm9uZSddXCJcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCcudGFibGUtYm9yZGVyJykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX2xlZnQgPSAkKHRoaXMpLnNjcm9sbExlZnQoKTtcbiAgICAgICAgJCgndGFibGUgdGgnKS5lcSgwKS5jc3MoJ2xlZnQnLCBfbGVmdCk7XG4gICAgICAgICQoJ3RhYmxlIHRoJykuZXEoMSkuY3NzKCdsZWZ0JywgX2xlZnQpO1xuICAgICAgICAkKCd0YWJsZSB0aCcpLmVxKDIpLmNzcygnbGVmdCcsIF9sZWZ0KTtcbiAgICAgICAgJCgndGFibGUgdGgnKS5lcSgzKS5jc3MoJ2xlZnQnLCBfbGVmdCkuYWRkQ2xhc3MoJ2JveC1zaGFkb3cnKTtcbiAgICAgICAgJCgndGFibGUgdGQ6bnRoLWNoaWxkKDEpJykuY3NzKCdsZWZ0JywgX2xlZnQpO1xuICAgICAgICAkKCd0YWJsZSB0ZDpudGgtY2hpbGQoMiknKS5jc3MoJ2xlZnQnLCBfbGVmdCk7XG4gICAgICAgICQoJ3RhYmxlIHRkOm50aC1jaGlsZCgzKScpLmNzcygnbGVmdCcsIF9sZWZ0KTtcbiAgICAgICAgJCgndGFibGUgdGQ6bnRoLWNoaWxkKDQpJykuY3NzKCdsZWZ0JywgX2xlZnQpLmFkZENsYXNzKCdib3gtc2hhZG93Jyk7XG4gICAgICAgIGlmIChOdW1iZXIoJCh0aGlzKS5zY3JvbGxMZWZ0KCkpID09PSAwKSB7XG4gICAgICAgICAgICAkKCd0YWJsZSB0aCcpLmVxKDMpLnJlbW92ZUNsYXNzKCdib3gtc2hhZG93Jyk7XG4gICAgICAgICAgICAkKCd0YWJsZSB0ZDpudGgtY2hpbGQoNCknKS5yZW1vdmVDbGFzcygnYm94LXNoYWRvdycpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiXX0=