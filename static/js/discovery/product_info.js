$(document).ready(function(){function t(t){$.ajax({url:t,type:"GET",statusCode:{404:function(){alert("您查看的商品已下架")}},success:function(t){$("#product_name").html(t.results[0].name),$("#product_price").html("¥"+t.results[0].price),$("#image_url").attr("src",t.results[0].image_url);var a=t.results[0].score,n=a.toFixed(2);$("#product_score").html(n);for(var r=t.results[0].date_rank.split(",").length,s=[],l=0;l<r;l++){var i=t.results[0].date_rank.split(",")[l].split(":")[1];s.push(i)}for(var c=[],o=0;o<r;o++){var u=t.results[0].date_rank.split(",")[o].split(":")[0];c.push(u)}e(c,s),$(".homepage:eq(0)>a").css("color","#ff5422"),$(".homepage:eq(0)>div").addClass("triangle")}})}function e(t,e){var a=echarts.init(document.getElementById("main"));option={tooltip:{trigger:"axis"},legend:{data:["商品销量排名"],textStyle:{fontSize:14}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:t,axisLine:{onZero:!1,lineStyle:{color:"#008ACD",width:1}}},yAxis:{type:"value",inverse:!0,nameLocation:"start",nameTextStyle:{fontSize:14},axisLine:{lineStyle:{color:"#008ACD",width:1}}},series:[{name:"商品销量排名",type:"line",stack:"总量",data:e}]},a.setOption(option)}function a(){var t=$("#store_list>li[name="+c+"]");$(t).children().attr("target","_Blank"),$(t).show().siblings().hide(),$(".ui.right.floated.button").each(function(){$(this).attr("name")==d&&$(this).addClass("red")})}function n(){$("#collect_btn").click(function(){var t=$("h3").html(),e=$("#image_url").attr("src");$.ajax({url:"product-collect?skuid="+u+"&name="+t+"&image="+e+"&source="+c+"&area="+o,type:"GET",data:{exist:1},success:function(t){1==t.success?($("#collect_btn").children().removeClass("empty"),$("#collect_btn").children("span").html("已收藏"),alert("已收藏")):($("#collect_btn").children().addClass("empty"),$("#collect_btn").children("span").html("加入收藏"),alert("已取消收藏"))}})}),$(".ui.right.floated.button").click(function(){d=$(this).attr("name"),t("/api/v1/online-item?area="+o+"&skuid="+u+"&source="+c+"&grand="+d),$(this).addClass("red").siblings().removeClass("red")})}function r(t){$.ajax({url:t,type:"GET",dataType:"json",success:function(t){void 0===t.results?s(t):l(t)}})}function s(t){0===t.success?($("#collect_btn").children().removeClass("empty"),$("#collect_btn").children("span").html("已收藏")):($("#collect_btn").children().addClass("empty"),$("#collect_btn").children("span").html("加入收藏"))}function l(t){for(var a=[],n=0;n<rankNum;n++){var r=data.results[0].date_rank.split(",")[n].split(":")[0];a.push(r)}e(a,getRank)}function i(){t("/api/v1/online-item?area="+o+"&skuid="+u+"&source="+c+"&grand="+d),a(),n(),r("product-collect?area="+o+"&skuid="+u+"&source="+c+"&grand="+d)}var c=$("#param_source").attr("name"),o=$("#param_area").attr("name"),u=$("#collect_btn").attr("name"),d=$("#product_grand").attr("name");i()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvdmVyeS9wcm9kdWN0X2luZm8uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJnZXRQcm9kdWN0c0luZm8iLCJ1cmwiLCJhamF4IiwidHlwZSIsInN0YXR1c0NvZGUiLCI0MDQiLCJhbGVydCIsInN1Y2Nlc3MiLCJkYXRhIiwiaHRtbCIsInJlc3VsdHMiLCJuYW1lIiwicHJpY2UiLCJhdHRyIiwiaW1hZ2VfdXJsIiwiZ29vZF9zY29yZSIsInNjb3JlIiwidG9GaXhlZCIsInJhbmtOdW0iLCJkYXRlX3JhbmsiLCJzcGxpdCIsImxlbmd0aCIsImdldFJhbmsiLCJpIiwiZXZlcnlSYW5rIiwicHVzaCIsImdldFJhbmtEYXRlIiwiaiIsImV2ZXJ5UmFua0RhdGUiLCJncmFwaCIsImNzcyIsImFkZENsYXNzIiwicmFua0RhdGUiLCJyYW5rIiwibXlDaGFydCIsImVjaGFydHMiLCJpbml0IiwiZ2V0RWxlbWVudEJ5SWQiLCJvcHRpb24iLCJ0b29sdGlwIiwidHJpZ2dlciIsImxlZ2VuZCIsInRleHRTdHlsZSIsImZvbnRTaXplIiwiZ3JpZCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImNvbnRhaW5MYWJlbCIsInRvb2xib3giLCJmZWF0dXJlIiwic2F2ZUFzSW1hZ2UiLCJ4QXhpcyIsImJvdW5kYXJ5R2FwIiwiYXhpc0xpbmUiLCJvblplcm8iLCJsaW5lU3R5bGUiLCJjb2xvciIsIndpZHRoIiwieUF4aXMiLCJpbnZlcnNlIiwibmFtZUxvY2F0aW9uIiwibmFtZVRleHRTdHlsZSIsInNlcmllcyIsInN0YWNrIiwic2V0T3B0aW9uIiwianVkZ2VTb3VyY2hGdW4iLCJjdXJyZW50TWFsbCIsInNvdXJjZSIsImNoaWxkcmVuIiwic2hvdyIsInNpYmxpbmdzIiwiaGlkZSIsImVhY2giLCJ0aGlzIiwiZ3JhbmQiLCJjb2xsZWN0UHJvZHVjdHNGdW4iLCJjbGljayIsInByb2R1Y3RfbmFtZSIsInByb2R1Y3RfaW1hZ2UiLCJza3VpZCIsImFyZWEiLCJleGlzdCIsIm9iaiIsInJlbW92ZUNsYXNzIiwicmVxdWVzdE5ld0RhdGFGdW4iLCJkYXRhVHlwZSIsImFyZ3VtZW50IiwidW5kZWZpbmVkIiwianVkZ2VQcm9kdWN0Q29sbGVjdGVkIiwiZGF0ZUNob2ljZUZ1biIsImNvbGwiLCJhcmciXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxVQUFVQyxNQUFNLFdBTWQsUUFBU0MsR0FBZ0JDLEdBQ3JCSixFQUFFSyxNQUNFRCxJQUFLQSxFQUNMRSxLQUFNLE1BQ05DLFlBQ0lDLElBQUksV0FDQUMsTUFBTSxlQUdkQyxRQUFRLFNBQVNDLEdBQ2JYLEVBQUUsaUJBQWlCWSxLQUFLRCxFQUFLRSxRQUFRLEdBQUdDLE1BQ3hDZCxFQUFFLGtCQUFrQlksS0FBSyxJQUFNRCxFQUFLRSxRQUFRLEdBQUdFLE9BQy9DZixFQUFFLGNBQWNnQixLQUFLLE1BQU1MLEVBQUtFLFFBQVEsR0FBR0ksVUFFM0MsSUFBSUMsR0FBYVAsRUFBS0UsUUFBUSxHQUFHTSxNQUM3QkEsRUFBUUQsRUFBV0UsUUFBUSxFQUMvQnBCLEdBQUUsa0JBQWtCWSxLQUFLTyxFQUl6QixLQUFLLEdBRkRFLEdBQVVWLEVBQUtFLFFBQVEsR0FBR1MsVUFBVUMsTUFBTSxLQUFLQyxPQUMvQ0MsS0FDS0MsRUFBSSxFQUFHQSxFQUFJTCxFQUFTSyxJQUFLLENBQzlCLEdBQUlDLEdBQWFoQixFQUFLRSxRQUFRLEdBQVksVUFBRVUsTUFBTSxLQUFLRyxHQUFHSCxNQUFNLEtBQUssRUFDckVFLEdBQVFHLEtBQUtELEdBSWpCLElBQUssR0FEREUsTUFDS0MsRUFBSSxFQUFHQSxFQUFJVCxFQUFTUyxJQUFLLENBQzlCLEdBQUlDLEdBQWlCcEIsRUFBS0UsUUFBUSxHQUFZLFVBQUVVLE1BQU0sS0FBS08sR0FBR1AsTUFBTSxLQUFLLEVBQ3pFTSxHQUFZRCxLQUFLRyxHQUVyQkMsRUFBTUgsRUFBWUosR0FFbEJ6QixFQUFFLHFCQUFxQmlDLElBQUksUUFBUyxXQUNwQ2pDLEVBQUUsdUJBQXVCa0MsU0FBUyxl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Q3BHVCxJQUNBVSxJQUNBUyxFQUFrQix3QkFBeUJKLEVBQU0sVUFBV0QsRUFBTyxXQUFZWixFQUFRLFVBQVdPLEdBOU10RyxHQUFJUCxHQUFTdkUsRUFBRSxpQkFBaUJnQixLQUFLLFFBQ2pDb0UsRUFBT3BGLEVBQUUsZUFBZWdCLEtBQUssUUFDN0JtRSxFQUFRbkYsRUFBRSxnQkFBZ0JnQixLQUFLLFFBQy9COEQsRUFBUTlFLEVBQUUsa0JBQWtCZ0IsS0FBSyxPQTZNckN1QiIsImZpbGUiOiJkaXNjb3ZlcnkvcHJvZHVjdF9pbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNvdXJjZSA9ICQoJyNwYXJhbV9zb3VyY2UnKS5hdHRyKCduYW1lJyk7XG4gICAgdmFyIGFyZWEgPSAkKCcjcGFyYW1fYXJlYScpLmF0dHIoJ25hbWUnKTtcbiAgICB2YXIgc2t1aWQgPSAkKCcjY29sbGVjdF9idG4nKS5hdHRyKCduYW1lJyk7XG4gICAgdmFyIGdyYW5kID0gJCgnI3Byb2R1Y3RfZ3JhbmQnKS5hdHRyKCduYW1lJyk7XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9kdWN0c0luZm8odXJsKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgICAgc3RhdHVzQ29kZToge1xuICAgICAgICAgICAgICAgIDQwNDpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgn5oKo5p+l55yL55qE5ZWG5ZOB5bey5LiL5p62Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3RfbmFtZScpLmh0bWwoZGF0YS5yZXN1bHRzWzBdLm5hbWUpO1xuICAgICAgICAgICAgICAgICQoJyNwcm9kdWN0X3ByaWNlJykuaHRtbCgnwqUnICsgZGF0YS5yZXN1bHRzWzBdLnByaWNlKTtcbiAgICAgICAgICAgICAgICAkKCcjaW1hZ2VfdXJsJykuYXR0cignc3JjJyxkYXRhLnJlc3VsdHNbMF0uaW1hZ2VfdXJsKTtcbiAgICAgICAgICAgICAgICAvLyDllYblk4HliIZcbiAgICAgICAgICAgICAgICB2YXIgZ29vZF9zY29yZSA9IGRhdGEucmVzdWx0c1swXS5zY29yZTtcbiAgICAgICAgICAgICAgICB2YXIgc2NvcmUgPSBnb29kX3Njb3JlLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3Rfc2NvcmUnKS5odG1sKHNjb3JlKTtcblxuICAgICAgICAgICAgICAgIHZhciByYW5rTnVtID0gZGF0YS5yZXN1bHRzWzBdLmRhdGVfcmFuay5zcGxpdCgnLCcpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgZ2V0UmFuayA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmFua051bTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVyeVJhbmsgPSAoZGF0YS5yZXN1bHRzWzBdLmRhdGVfcmFuaykuc3BsaXQoJywnKVtpXS5zcGxpdCgnOicpWzFdO1xuICAgICAgICAgICAgICAgICAgICBnZXRSYW5rLnB1c2goZXZlcnlSYW5rKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZ2V0UmFua0RhdGUgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJhbmtOdW07IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlcnlSYW5rRGF0ZSA9IChkYXRhLnJlc3VsdHNbMF0uZGF0ZV9yYW5rKS5zcGxpdCgnLCcpW2pdLnNwbGl0KCc6JylbMF07XG4gICAgICAgICAgICAgICAgICAgIGdldFJhbmtEYXRlLnB1c2goZXZlcnlSYW5rRGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdyYXBoKGdldFJhbmtEYXRlLGdldFJhbmspO1xuXG4gICAgICAgICAgICAgICAgJCgnLmhvbWVwYWdlOmVxKDApPmEnKS5jc3MoJ2NvbG9yJywgJyNmZjU0MjInKTtcbiAgICAgICAgICAgICAgICAkKCcuaG9tZXBhZ2U6ZXEoMCk+ZGl2JykuYWRkQ2xhc3MoJ3RyaWFuZ2xlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIOaKmOe6v+WbvlxuICAgIGZ1bmN0aW9uIGdyYXBoKHJhbmtEYXRlLHJhbmspe1xuICAgICAgICAvL+WIneWni+WMllxuICAgICAgICB2YXIgbXlDaGFydCA9IGVjaGFydHMuaW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpKTtcbiAgICAgICAgLy/lj4LmlbDorr7nva5cbiAgICAgICAgb3B0aW9uID0ge1xuICAgICAgICAgICAgICAgIC8v5o+Q56S65qGG57uE5Lu277ya5Z2Q5qCH6L206Kem5Y+RXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYXhpcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvL+WbvuS+i+e7hOS7tlxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbJ+WVhuWTgemUgOmHj+aOkuWQjSddLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8v55u06KeS5Z2Q5qCH57O75YaF57uY5Zu+572R5qC8XG4gICAgICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgICAgICAvLyDot53nprvlt6bkvqflrrnlmajnmoTot53nprtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJzMlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICc0JScsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJzMlJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbkxhYmVsOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy/lt6XlhbfmoI9cbiAgICAgICAgICAgICAgICB0b29sYm94OiB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS/neWtmOWbvueJh1xuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUFzSW1hZ2U6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy/nm7Top5LlnZDmoIfns7sgZ3JpZCDkuK3nmoQgeCDovbRcbiAgICAgICAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgICAgICAgICBib3VuZGFyeUdhcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHJhbmtEYXRlLFxuICAgICAgICAgICAgICAgICAgICBheGlzTGluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25aZXJvOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwOEFDRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy/nm7Top5LlnZDmoIfns7sgZ3JpZCDkuK3nmoQgeSDovbRcbiAgICAgICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBpbnZlcnNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lTG9jYXRpb246ICdzdGFydCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVUZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXhpc0xpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwOEFDRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy/ns7vliJfliJfooahcbiAgICAgICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+WVhuWTgemUgOmHj+aOkuWQjScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjazogJ+aAu+mHjycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByYW5rLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICB9O1xuICAgICAgICAvL+WPguaVsOiuvue9ruaWueazlVxuICAgICAgICBteUNoYXJ0LnNldE9wdGlvbihvcHRpb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGp1ZGdlU291cmNoRnVuKCl7XG4gICAgICAgIC8vIOWIpOaWreW9k+WJjeWVhuWfjlxuICAgICAgICB2YXIgY3VycmVudE1hbGwgPSAkKCcjc3RvcmVfbGlzdD5saVtuYW1lPScrIHNvdXJjZSArJ10nKTtcbiAgICAgICAgJChjdXJyZW50TWFsbCkuY2hpbGRyZW4oKS5hdHRyKCd0YXJnZXQnLCdfQmxhbmsnKTtcbiAgICAgICAgJChjdXJyZW50TWFsbCkuc2hvdygpLnNpYmxpbmdzKCkuaGlkZSgpO1xuXG4gICAgICAgIC8vIOWIpOaWreW9k+WJjeaXpeacn+autVxuICAgICAgICAkKCcudWkucmlnaHQuZmxvYXRlZC5idXR0b24nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cignbmFtZScpID09IGdyYW5kKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbGxlY3RQcm9kdWN0c0Z1bigpe1xuICAgICAgICAkKCcjY29sbGVjdF9idG4nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHByb2R1Y3RfbmFtZSA9ICQoJ2gzJykuaHRtbCgpO1xuICAgICAgICAgICAgdmFyIHByb2R1Y3RfaW1hZ2UgPSAkKCcjaW1hZ2VfdXJsJykuYXR0cignc3JjJyk7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogJ3Byb2R1Y3QtY29sbGVjdD9za3VpZD0nKyBza3VpZCArJyZuYW1lPScrIHByb2R1Y3RfbmFtZSArJyZpbWFnZT0nKyBwcm9kdWN0X2ltYWdlICsnJnNvdXJjZT0nKyBzb3VyY2UgKycmYXJlYT0nKyBhcmVhLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtleGlzdDogMX0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ob2JqKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5zdWNjZXNzID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOa3u+WKoOaIkOWKn1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbGxlY3RfYnRuJykuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnZW1wdHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjb2xsZWN0X2J0bicpLmNoaWxkcmVuKCdzcGFuJykuaHRtbCgn5bey5pS26JePJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgn5bey5pS26JePJyk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIoOmZpOaIkOWKn1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NvbGxlY3RfYnRuJykuY2hpbGRyZW4oKS5hZGRDbGFzcygnZW1wdHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjb2xsZWN0X2J0bicpLmNoaWxkcmVuKCdzcGFuJykuaHRtbCgn5Yqg5YWl5pS26JePJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgn5bey5Y+W5raI5pS26JePJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyDml6XmnJ9cbiAgICAgICAgJCgnLnVpLnJpZ2h0LmZsb2F0ZWQuYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGdyYW5kID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XG4gICAgICAgICAgICBnZXRQcm9kdWN0c0luZm8oJy9hcGkvdjEvb25saW5lLWl0ZW0/YXJlYT0nKyBhcmVhICsnJnNrdWlkPScrIHNrdWlkICsnJnNvdXJjZT0nKyBzb3VyY2UgKycmZ3JhbmQ9JysgZ3JhbmQpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncmVkJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygncmVkJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcXVlc3ROZXdEYXRhRnVuKHVybCl7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGFyZ3VtZW50KXtcbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnQucmVzdWx0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGp1ZGdlUHJvZHVjdENvbGxlY3RlZChhcmd1bWVudCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVDaG9pY2VGdW4oYXJndW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g5Yik5pat5b2T5YmN5ZWG5ZOB5piv5ZCm5pS26JePXG4gICAgZnVuY3Rpb24ganVkZ2VQcm9kdWN0Q29sbGVjdGVkKGNvbGwpe1xuICAgICAgICAvLyBjb2xs77ydMO+8muWtmOWcqFxuICAgICAgICBpZiAoY29sbC5zdWNjZXNzID09PSAwKSB7XG4gICAgICAgICAgICAkKCcjY29sbGVjdF9idG4nKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdlbXB0eScpO1xuICAgICAgICAgICAgJCgnI2NvbGxlY3RfYnRuJykuY2hpbGRyZW4oJ3NwYW4nKS5odG1sKCflt7LmlLbol48nKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgJCgnI2NvbGxlY3RfYnRuJykuY2hpbGRyZW4oKS5hZGRDbGFzcygnZW1wdHknKTtcbiAgICAgICAgICAgICQoJyNjb2xsZWN0X2J0bicpLmNoaWxkcmVuKCdzcGFuJykuaHRtbCgn5Yqg5YWl5pS26JePJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+mAieaLqeaXpeacn1xuICAgIGZ1bmN0aW9uIGRhdGVDaG9pY2VGdW4oYXJnKXtcbiAgICAgICAgdmFyIGdldFJhbmtEYXRlID0gW107XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmFua051bTsgaisrKSB7XG4gICAgICAgICAgICB2YXIgZXZlcnlSYW5rRGF0ZSA9IChkYXRhLnJlc3VsdHNbMF0uZGF0ZV9yYW5rKS5zcGxpdCgnLCcpW2pdLnNwbGl0KCc6JylbMF07XG4gICAgICAgICAgICBnZXRSYW5rRGF0ZS5wdXNoKGV2ZXJ5UmFua0RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGdyYXBoKGdldFJhbmtEYXRlLGdldFJhbmspO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKXtcbiAgICAgICAgZ2V0UHJvZHVjdHNJbmZvKCcvYXBpL3YxL29ubGluZS1pdGVtP2FyZWE9JysgYXJlYSArJyZza3VpZD0nKyBza3VpZCArJyZzb3VyY2U9Jysgc291cmNlICsnJmdyYW5kPScrIGdyYW5kKTsvL+WxleekuuWVhuWTgVxuICAgICAgICBqdWRnZVNvdXJjaEZ1bigpOy8v5Yik5pat5b2T5YmN5ZWG5Z+OXG4gICAgICAgIGNvbGxlY3RQcm9kdWN0c0Z1bigpOy8v54K55Ye75pS26JePXG4gICAgICAgIHJlcXVlc3ROZXdEYXRhRnVuKCdwcm9kdWN0LWNvbGxlY3Q/YXJlYT0nKyBhcmVhICsnJnNrdWlkPScrIHNrdWlkICsnJnNvdXJjZT0nKyBzb3VyY2UgKycmZ3JhbmQ9JysgZ3JhbmQpO1xuICAgIH1cbiAgICBpbml0KCk7XG59KTtcbiJdfQ==
