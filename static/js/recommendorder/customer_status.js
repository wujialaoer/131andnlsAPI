$(function(){function a(){$.ajax({url:l,type:"get",dataType:"json",success:function(a){$(".prev-order").children().remove(),$(".after-order").children().remove();for(var s in a.data){if(null===a.data[s].last_order&&(a.data[s].last_order="您还没有下过单"),a.data[s].ordered===!1){var e="<li class='item'><div class='left'><p class='customer-name'>"+a.data[s].customer_name+"</p><p><i></i><span class='time-tip'>上次下单时间:</span><span class='last-time'>"+a.data[s].last_order+"</span></p></div><span class='customerId'>"+a.data[s].id+"</span><span class='status'>未下单</span></li>";$(".prev-order").append(e)}else if(a.data[s].ordered===!0){var t="<li class='item'><div class='left'><p class='customer-name'>"+a.data[s].customer_name+"</p><p><i></i><span class='time-tip'>上次下单时间:</span><span class='last-time'>"+a.data[s].last_order+"</span></p></div><span class='customerId'>"+a.data[s].id+"</span><span class='status over'>已下单</span></li>";$(".after-order").append(t)}null===a.data[s].customer_name&&$(".customer_name").html("暂无顾客名称")}}})}var s=window.location.href,e=s.split("/"),t=e.indexOf("dealer"),r=e[t+1],n=e.indexOf("salesman"),d=e[n+1],l=($("#search").val(),"/recommendorder/api/v1/dealer/"+r+"/salesman/"+d+"/customer");$("#search").bind("input propertychange",function(){var s=$("#search").val(),e=s.length;e>1?$.ajax({url:l,type:"get",dataType:"json",data:{customer_name__contains:s},success:function(a){$(".prev-order").children().remove(),$(".after-order").children().remove();for(var s in a.data){if(null===a.data[s].last_order&&(a.data[s].last_order="您还没有下过单"),a.data[s].ordered===!1){var e="<li class='item'><div class='left'><p class='customer-name'>"+a.data[s].customer_name+"</p><p><i></i><span class='time-tip'>上次下单时间:</span><span class='last-time'>"+a.data[s].last_order+"</span></p></div><span class='customerId'>"+a.data[s].id+"</span><span class='status'>未下单</span></li>";$(".prev-order").append(e)}else if(a.data[s].ordered===!0){var t="<li class='item'><div class='left'><p class='customer-name'>"+a.data[s].customer_name+"</p><p><i></i><span class='time-tip'>上次下单时间:</span><span class='last-time'>"+a.data[s].last_order+"</span></p></div><span class='customerId'>"+a.data[s].id+"</span><span class='status over'>已下单</span></li>";$(".after-order").append(t)}null===a.data[s].customer_name&&$(".customer_name").html("暂无顾客名称")}}}):0===e&&a()}),$(".no").click(function(){$("#search").val(""),a()}),$(".home-info-nav-a").click(function(){window.location.href="index"}),$(".prev-order").on("click",".item",function(){var a=$(this).find(".customerId").html(),s="/recommendorder/customer/"+a+"/dealer-list";window.location.href=s}),$(".after-order").on("click",".item",function(){var a=$(this).find(".customerId").html(),s="/recommendorder/customer/"+a+"/dealer-list";window.location.href=s})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZG9yZGVyL2N1c3RvbWVyX3N0YXR1cy5qcyJdLCJuYW1lcyI6WyIkIiwiYWpheCIsInVybCIsIm5ld19ocmVmIiwidHlwZSIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlcyIsImNoaWxkcmVuIiwicmVtb3ZlIiwiaSIsImRhdGEiLCJsYXN0X29yZGVyIiwib3JkZXJlZCIsImxpc3RfeWVzIiwiY3VzdG9tZXJfbmFtZSIsImlkIiwiYXBwZW5kIiwibGlzdF9ubyIsImh0bWwiLCJocmVmIiwid2luZG93IiwibG9jYXRpb24iLCJhcnIiLCJzcGxpdCIsImluZGV4T2YiLCJkZWFsZXJJRCIsImoiLCJzYWxlc21hbklEIiwidmFsIiwiYmluZCIsInNlYXJjaF9yZXN1bHRzIiwibGVuZ3RoIiwiY3VzdG9tZXJfbmFtZV9fY29udGFpbnMiLCJjbGljayIsIm9uIiwiY3VzdG9tZXJJRCIsInRoaXMiLCJmaW5kIiwibmV4dF9ocmVmIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRSxXQVNFLFFBQVNDLEtBQ0xELEVBQUVDLE1BQ0VDLElBQUtDLEVBQ0xDLEtBQU0sTUFDTkMsU0FBVSxPQUNWQyxRQUFTLFNBQVNDLEdBQ2RQLEVBQUUsZUFBZVEsV0FBV0MsU0FDNUJULEVBQUUsZ0JBQWdCUSxXQUFXQyxRQUM3QixLQUFJLEdBQUlDLEtBQUtILEdBQUlJLEtBQUssQ0FJbEIsR0FIK0IsT0FBM0JKLEVBQUlJLEtBQUtELEdBQUdFLGFBQ1pMLEVBQUlJLEtBQUtELEdBQUdFLFdBQVcsV0FFeEJMLEVBQUlJLEtBQUtELEdBQUdHLFdBQVUsRUFBTSxDQUMzQixHQUFJQyxHQUFXLCtEQUErRFAsRUFBSUksS0FBS0QsR0FBR0ssY0FBYyw4RUFBb0ZSLEVBQUlJLEtBQUtELEdBQUdFLFdBQVcsNkNBQTZDTCxFQUFJSSxLQUFLRCxHQUFHTSxHQUFHLDZDQUMvUWhCLEdBQUUsZUFBZWlCLE9BQU9ILE9BQ3RCLElBQUdQLEVBQUlJLEtBQUtELEdBQUdHLFdBQVUsRUFBSyxDQUNoQyxHQUFJSyxHQUFVLCtEQUErRFgsRUFBSUksS0FBS0QsR0FBR0ssY0FBYyw4RUFBb0ZSLEVBQUlJLEtBQUtELEdBQUdFLFdBQVcsNkNBQTZDTCxFQUFJSSxLQUFLRCxHQUFHTSxHQUFHLGtEQUM5UWhCLEdBQUUsZ0JBQWdCaUIsT0FBT0MsR0FFRyxPQUE1QlgsRUFBSUksS0FBS0QsR0FBR0ssZUFDWmYsRUFBRSxrQkFBa0JtQixLQUFLLGNBNUI3QyxHQUFJQyxHQUFLQyxPQUFPQyxTQUFTRixLQUNyQkcsRUFBSUgsRUFBS0ksTUFBTSxLQUNmZCxFQUFJYSxFQUFJRSxRQUFRLFVBQ2hCQyxFQUFXSCxFQUFJYixFQUFFLEdBQ2pCaUIsRUFBSUosRUFBSUUsUUFBUSxZQUNoQkcsRUFBYUwsRUFBSUksRUFBRSxHQUVuQnhCLEdBRGlCSCxFQUFFLFdBQVc2QixNQUNyQixpQ0FBaUNILEVBQVMsYUFBYUUsRUFBVyxZQThCL0U1QixHQUFFLFdBQVc4QixLQUFLLHVCQUF1QixXQUNyQyxHQUFJQyxHQUFpQi9CLEVBQUUsV0FBVzZCLE1BQzlCRyxFQUFTRCxFQUFlQyxNQUN6QkEsR0FBUyxFQUNSaEMsRUFBRUMsTUFDRUMsSUFBSUMsRUFDSkMsS0FBTSxNQUNOQyxTQUFVLE9BQ1ZNLE1BQ0lzQix3QkFBMEJGLEdBRTlCekIsUUFBUyxTQUFTQyxHQUNkUCxFQUFFLGVBQWVRLFdBQVdDLFNBQzVCVCxFQUFFLGdCQUFnQlEsV0FBV0MsUUFDN0IsS0FBSSxHQUFJQyxLQUFLSCxHQUFJSSxLQUFLLENBS2xCLEdBSjZCLE9BQXpCSixFQUFJSSxLQUFLRCxHQUFHRSxhQUNaTCxFQUFJSSxLQUFLRCxHQUFHRSxXQUFXLFdBR3hCTCxFQUFJSSxLQUFLRCxHQUFHRyxXQUFVLEVBQU0sQ0FDM0IsR0FBSUMsR0FBVywrREFBK0RQLEVBQUlJLEtBQUtELEdBQUdLLGNBQWMsOEVBQW9GUixFQUFJSSxLQUFLRCxHQUFHRSxXQUFXLDZDQUE2Q0wsRUFBSUksS0FBS0QsR0FBR00sR0FBRyw2Q0FDL1FoQixHQUFFLGVBQWVpQixPQUFPSCxPQUN0QixJQUFHUCxFQUFJSSxLQUFLRCxHQUFHRyxXQUFVLEVBQUssQ0FDaEMsR0FBSUssR0FBVSwrREFBK0RYLEVBQUlJLEtBQUtELEdBQUdLLGNBQWMsOEVBQW9GUixFQUFJSSxLQUFLRCxHQUFHRSxXQUFXLDZDQUE2Q0wsRUFBSUksS0FBS0QsR0FBR00sR0FBRyxrREFDOVFoQixHQUFFLGdCQUFnQmlCLE9BQU9DLEdBRUcsT0FBNUJYLEVBQUlJLEtBQUtELEdBQUdLLGVBQ1pmLEVBQUUsa0JBQWtCbUIsS0FBSyxjQUt6QixJQUFYYSxHQUNML0IsTUFLUkQsRUFBRSxPQUFPa0MsTUFBTSxXQUNYbEMsRUFBRSxXQUFXNkIsSUFBSSxJQUNqQjVCLE1BR0pELEVBQUUsb0JBQW9Ca0MsTUFBTSxXQUN4QmIsT0FBT0MsU0FBU0YsS0FBSyxVQUV6QnBCLEVBQUUsZUFBZW1DLEdBQUcsUUFBUSxRQUFRLFdBQ2hDLEdBQUlDLEdBQWFwQyxFQUFFcUMsTUFBTUMsS0FBSyxlQUFlbkIsT0FFekNvQixFQUFVLDRCQUE0QkgsRUFBVyxjQUNyRGYsUUFBT0MsU0FBU0YsS0FBS21CLElBRXpCdkMsRUFBRSxnQkFBZ0JtQyxHQUFHLFFBQVEsUUFBUSxXQUNqQyxHQUFJQyxHQUFhcEMsRUFBRXFDLE1BQU1DLEtBQUssZUFBZW5CLE9BQ3pDb0IsRUFBVSw0QkFBNEJILEVBQVcsY0FDckRmLFFBQU9DLFNBQVNGLEtBQUttQiIsImZpbGUiOiJyZWNvbW1lbmRvcmRlci9jdXN0b21lcl9zdGF0dXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhyZWY9d2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgdmFyIGFycj1ocmVmLnNwbGl0KFwiL1wiKTtcbiAgICB2YXIgaSA9IGFyci5pbmRleE9mKFwiZGVhbGVyXCIpO1xuICAgIHZhciBkZWFsZXJJRCA9IGFycltpKzFdO1xuICAgIHZhciBqID0gYXJyLmluZGV4T2YoXCJzYWxlc21hblwiKTtcbiAgICB2YXIgc2FsZXNtYW5JRCA9IGFycltqKzFdO1xuICAgIHZhciBzZWFyY2hfcmVzdWx0cyA9ICQoJyNzZWFyY2gnKS52YWwoKTtcbiAgICB2YXIgbmV3X2hyZWY9XCIvcmVjb21tZW5kb3JkZXIvYXBpL3YxL2RlYWxlci9cIitkZWFsZXJJRCtcIi9zYWxlc21hbi9cIitzYWxlc21hbklEK1wiL2N1c3RvbWVyXCI7XG4gICAgZnVuY3Rpb24gYWpheCgpe1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBuZXdfaHJlZixcbiAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgICAgICAgJCgnLnByZXYtb3JkZXInKS5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICQoJy5hZnRlci1vcmRlcicpLmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpIGluIHJlcy5kYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhW2ldLmxhc3Rfb3JkZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5kYXRhW2ldLmxhc3Rfb3JkZXI9XCLmgqjov5jmsqHmnInkuIvov4fljZVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YVtpXS5vcmRlcmVkPT09ZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RfeWVzID0gXCI8bGkgY2xhc3M9J2l0ZW0nPjxkaXYgY2xhc3M9J2xlZnQnPjxwIGNsYXNzPSdjdXN0b21lci1uYW1lJz5cIityZXMuZGF0YVtpXS5jdXN0b21lcl9uYW1lK1wiPC9wPjxwPjxpPjwvaT48c3BhbiBjbGFzcz0ndGltZS10aXAnPlwiKyfkuIrmrKHkuIvljZXml7bpl7Q6JytcIjwvc3Bhbj48c3BhbiBjbGFzcz0nbGFzdC10aW1lJz5cIityZXMuZGF0YVtpXS5sYXN0X29yZGVyK1wiPC9zcGFuPjwvcD48L2Rpdj48c3BhbiBjbGFzcz0nY3VzdG9tZXJJZCc+XCIrcmVzLmRhdGFbaV0uaWQrXCI8L3NwYW4+PHNwYW4gY2xhc3M9J3N0YXR1cyc+XCIrJ+acquS4i+WNlScrXCI8L3NwYW4+PC9saT5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wcmV2LW9yZGVyJykuYXBwZW5kKGxpc3RfeWVzKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzLmRhdGFbaV0ub3JkZXJlZD09PXRydWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3Rfbm8gPSBcIjxsaSBjbGFzcz0naXRlbSc+PGRpdiBjbGFzcz0nbGVmdCc+PHAgY2xhc3M9J2N1c3RvbWVyLW5hbWUnPlwiK3Jlcy5kYXRhW2ldLmN1c3RvbWVyX25hbWUrXCI8L3A+PHA+PGk+PC9pPjxzcGFuIGNsYXNzPSd0aW1lLXRpcCc+XCIrJ+S4iuasoeS4i+WNleaXtumXtDonK1wiPC9zcGFuPjxzcGFuIGNsYXNzPSdsYXN0LXRpbWUnPlwiK3Jlcy5kYXRhW2ldLmxhc3Rfb3JkZXIrXCI8L3NwYW4+PC9wPjwvZGl2PjxzcGFuIGNsYXNzPSdjdXN0b21lcklkJz5cIityZXMuZGF0YVtpXS5pZCtcIjwvc3Bhbj48c3BhbiBjbGFzcz0nc3RhdHVzIG92ZXInPlwiKyflt7LkuIvljZUnK1wiPC9zcGFuPjwvbGk+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuYWZ0ZXItb3JkZXInKS5hcHBlbmQobGlzdF9ubyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhW2ldLmN1c3RvbWVyX25hbWU9PT1udWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5jdXN0b21lcl9uYW1lJykuaHRtbChcIuaaguaXoOmhvuWuouWQjeensFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gYWpheCgpO1xuXG4gICAgJCgnI3NlYXJjaCcpLmJpbmQoJ2lucHV0IHByb3BlcnR5Y2hhbmdlJyxmdW5jdGlvbigpe1xuICAgICAgICB2YXIgc2VhcmNoX3Jlc3VsdHMgPSAkKCcjc2VhcmNoJykudmFsKCk7XG4gICAgICAgIHZhciBsZW5ndGggPSBzZWFyY2hfcmVzdWx0cy5sZW5ndGg7XG4gICAgICAgIGlmKGxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOm5ld19ocmVmLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBcImN1c3RvbWVyX25hbWVfX2NvbnRhaW5zXCI6c2VhcmNoX3Jlc3VsdHNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5wcmV2LW9yZGVyJykuY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmFmdGVyLW9yZGVyJykuY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpIGluIHJlcy5kYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YVtpXS5sYXN0X29yZGVyPT09bnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5kYXRhW2ldLmxhc3Rfb3JkZXI9XCLmgqjov5jmsqHmnInkuIvov4fljZVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5b2T5YC85Li6ZmFsc2Xml7blgJnooajnpLrmnKrkuIvljZVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhW2ldLm9yZGVyZWQ9PT1mYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RfeWVzID0gXCI8bGkgY2xhc3M9J2l0ZW0nPjxkaXYgY2xhc3M9J2xlZnQnPjxwIGNsYXNzPSdjdXN0b21lci1uYW1lJz5cIityZXMuZGF0YVtpXS5jdXN0b21lcl9uYW1lK1wiPC9wPjxwPjxpPjwvaT48c3BhbiBjbGFzcz0ndGltZS10aXAnPlwiKyfkuIrmrKHkuIvljZXml7bpl7Q6JytcIjwvc3Bhbj48c3BhbiBjbGFzcz0nbGFzdC10aW1lJz5cIityZXMuZGF0YVtpXS5sYXN0X29yZGVyK1wiPC9zcGFuPjwvcD48L2Rpdj48c3BhbiBjbGFzcz0nY3VzdG9tZXJJZCc+XCIrcmVzLmRhdGFbaV0uaWQrXCI8L3NwYW4+PHNwYW4gY2xhc3M9J3N0YXR1cyc+XCIrJ+acquS4i+WNlScrXCI8L3NwYW4+PC9saT5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucHJldi1vcmRlcicpLmFwcGVuZChsaXN0X3llcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXMuZGF0YVtpXS5vcmRlcmVkPT09dHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3Rfbm8gPSBcIjxsaSBjbGFzcz0naXRlbSc+PGRpdiBjbGFzcz0nbGVmdCc+PHAgY2xhc3M9J2N1c3RvbWVyLW5hbWUnPlwiK3Jlcy5kYXRhW2ldLmN1c3RvbWVyX25hbWUrXCI8L3A+PHA+PGk+PC9pPjxzcGFuIGNsYXNzPSd0aW1lLXRpcCc+XCIrJ+S4iuasoeS4i+WNleaXtumXtDonK1wiPC9zcGFuPjxzcGFuIGNsYXNzPSdsYXN0LXRpbWUnPlwiK3Jlcy5kYXRhW2ldLmxhc3Rfb3JkZXIrXCI8L3NwYW4+PC9wPjwvZGl2PjxzcGFuIGNsYXNzPSdjdXN0b21lcklkJz5cIityZXMuZGF0YVtpXS5pZCtcIjwvc3Bhbj48c3BhbiBjbGFzcz0nc3RhdHVzIG92ZXInPlwiKyflt7LkuIvljZUnK1wiPC9zcGFuPjwvbGk+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmFmdGVyLW9yZGVyJykuYXBwZW5kKGxpc3Rfbm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhW2ldLmN1c3RvbWVyX25hbWU9PT1udWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuY3VzdG9tZXJfbmFtZScpLmh0bWwoXCLmmoLml6Dpob7lrqLlkI3np7BcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfWVsc2UgaWYobGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIGFqYXgoKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG4gICAgLy/ngrnlh7vliKDpmaTmjInpkq5cbiAgICAkKCcubm8nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCcjc2VhcmNoJykudmFsKCcnKTtcbiAgICAgICAgYWpheCgpO1xuICAgIH0pO1xuICAgIC8v54K55Ye76L+U5Zue5oyJ6ZKuXG4gICAgJCgnLmhvbWUtaW5mby1uYXYtYScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPSdpbmRleCc7XG4gICAgfSk7XG4gICAgJCgnLnByZXYtb3JkZXInKS5vbignY2xpY2snLCcuaXRlbScsZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGN1c3RvbWVySUQgPSAkKHRoaXMpLmZpbmQoJy5jdXN0b21lcklkJykuaHRtbCgpO1xuXG4gICAgICAgIHZhciBuZXh0X2hyZWY9XCIvcmVjb21tZW5kb3JkZXIvY3VzdG9tZXIvXCIrY3VzdG9tZXJJRCtcIi9kZWFsZXItbGlzdFwiO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1uZXh0X2hyZWY7XG4gICAgfSk7XG4gICAgJCgnLmFmdGVyLW9yZGVyJykub24oJ2NsaWNrJywnLml0ZW0nLGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBjdXN0b21lcklEID0gJCh0aGlzKS5maW5kKCcuY3VzdG9tZXJJZCcpLmh0bWwoKTtcbiAgICAgICAgdmFyIG5leHRfaHJlZj1cIi9yZWNvbW1lbmRvcmRlci9jdXN0b21lci9cIitjdXN0b21lcklEK1wiL2RlYWxlci1saXN0XCI7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPW5leHRfaHJlZjtcbiAgICB9KTtcbn0pO1xuIl19