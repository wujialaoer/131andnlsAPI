!function(e){"use strict";var o=window.location.href,r=Number(o.match(/(customer\/)\d+\//)[0].split("/")[1]);setupCSRF(),Vue.filter("toFixed",function(e,o){return Number(Number(e).toFixed(o))}),o="/api/v1.2/recommendorder/bagman/customer/"+r+"/history";var d=new Vue({el:".home-con",data:{phone:"",name:"",address:"",orders:[],selectedItem:{},recommendUrl:"/recommendorder/customer/"+r+"/recommend",customerProfile:"/recommendorder/bagman/customer/"+r+"/profile",historyUrl:"/recommendorder/bagman/customer/"+r+"/history",dealerListUrl:"/recommendorder/customer/"+r+"/dealer-list",isloaded:!1},watch:{isloaded:function(e,o){e===!0?$(".nm-con").css("display","block"):e===!1&&$(".nm-con").css("display","none")}},methods:{init:function(){var e=this;$.ajax({url:o,type:"get",beforeSend:function(e){var o="<div class='loading_con'><div class='loading_img'></div><p class='loading_text'>正在加载，请稍后...</p></div>";$(".loading_con_mid").append(o)},success:function(o){console.log(o),e.orders=o.orders,e.isloaded=!0,$(".loading_con_mid").remove(),$(".home-con-mid").on("click",".additional_order",function(){var o=$(this).parents(".history-b").index();e.additional_order(e.orders[o].append_able,e.orders[o].status,e.orders[o].dealer_id)}),$(".home-con-mid").on("click",".again_purchase",function(){var o=$(this).parents(".history-b").index(),r=e.orders[o].items;for(var d in r)e.addToSelectedItem(r[d]);e.confirmOrder()})}})},dealerUrl:function(e){return"/recommendorder/dealer/"+e+"/customer/"+r+"/bagman-add-item"},addToSelectedItem:function(e){var o=this;o.selectedItem[e.id]=parseInt(e.num)},confirmOrder:function(){var e="/api/v1.2/recommendorder/bagman/customer/"+r+"/cart",o=this;setupCSRF(),$.ajax({url:e,type:"post",data:o.selectedItem}),window.location.href="/recommendorder/bagman/customer/"+r+"/cart"},additional_order:function(e,o,d){1===o||2===o?e===!0?window.location.href="/recommendorder/dealer/"+d+"/customer/"+r+"/bagman-add-item":e===!1&&($(".additional_text").text("本次订单已超过30分钟啦，不能追加商品了，敬请谅解！"),$(".additional_order_model").show(),$(".know").on("click",function(){$(".additional_order_model").hide()})):0!==o&&3!==o||($(".additional_text").text("本次订单失败啦，不能追加商品了，敬请谅解！"),$(".additional_order_model").show(),$(".know").on("click",function(){$(".additional_order_model").hide()}))}}});d.init()}(window.cmApp=window.cmApp||{});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZG9yZGVyL2JhZ21hbl9jdXN0b21lcl9vcmRlcl9oaXN0b3J5LmpzIl0sIm5hbWVzIjpbImNtQXBwIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY3VzdG9tZXJfaWQiLCJOdW1iZXIiLCJtYXRjaCIsInNwbGl0Iiwic2V0dXBDU1JGIiwiVnVlIiwiZmlsdGVyIiwibnVtIiwicHJlY2lzaW9uIiwidG9GaXhlZCIsImJpbmQiLCJlbCIsImRhdGEiLCJwaG9uZSIsIm5hbWUiLCJhZGRyZXNzIiwib3JkZXJzIiwic2VsZWN0ZWRJdGVtIiwicmVjb21tZW5kVXJsIiwiY3VzdG9tZXJQcm9maWxlIiwiaGlzdG9yeVVybCIsImRlYWxlckxpc3RVcmwiLCJpc2xvYWRlZCIsIndhdGNoIiwibmV3X3ZhbHVlIiwib2xkX3ZhbHVlIiwiJCIsImNzcyIsIm1ldGhvZHMiLCJpbml0IiwiX3RoaXMiLCJ0aGlzIiwiYWpheCIsInR5cGUiLCJiZWZvcmVTZW5kIiwiWE1MSHR0cFJlcXVlc3QiLCJsb2FkaW5nX3N0ciIsImFwcGVuZCIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlIiwib24iLCJhZGRfaW5kZXgiLCJwYXJlbnRzIiwiaW5kZXgiLCJhZGRpdGlvbmFsX29yZGVyIiwiYXBwZW5kX2FibGUiLCJzdGF0dXMiLCJkZWFsZXJfaWQiLCJhZ2Fpbl9pbmRleCIsIml0ZW1zIiwiaXRlbSIsImFkZFRvU2VsZWN0ZWRJdGVtIiwiY29uZmlybU9yZGVyIiwiZGVhbGVyVXJsIiwiZGlkIiwiaWQiLCJwYXJzZUludCIsInRleHQiLCJzaG93IiwiaGlkZSJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBVUEsR0FFTixZQUVBLElBQUlDLEdBQU1DLE9BQU9DLFNBQVNDLEtBQ3RCQyxFQUFjQyxPQUFPTCxFQUFJTSxNQUFNLHFCQUFxQixHQUFHQyxNQUFNLEtBQUssR0FDdEVDLGFBQ0FDLElBQUlDLE9BQU8sVUFBVyxTQUFVQyxFQUFLQyxHQUNqQyxNQUFPUCxRQUFPQSxPQUFPTSxHQUFLRSxRQUFRRCxNQUd0Q1osRUFBTSw0Q0FBOENJLEVBQWMsVUFFbEUsSUFBSVUsR0FBTyxHQUFJTCxNQUNYTSxHQUFJLFlBQ0pDLE1BQ0lDLE1BQU8sR0FDUEMsS0FBTSxHQUNOQyxRQUFTLEdBQ1RDLFVBQ0FDLGdCQUNBQyxhQUFjLDRCQUE4QmxCLEVBQWMsYUFDMURtQixnQkFBaUIsbUNBQXFDbkIsRUFBYyxXQUNwRW9CLFdBQVksbUNBQXFDcEIsRUFBYyxXQUMvRHFCLGNBQWdCLDRCQUE4QnJCLEVBQWMsZUFDNURzQixVQUFTLEdBRWJDLE9BQ0lELFNBQVUsU0FBU0UsRUFBVUMsR0FDckJELEtBQWMsRUFDZEUsRUFBRSxXQUFXQyxJQUFJLFVBQVUsU0FDdEJILEtBQWMsR0FDbkJFLEVBQUUsV0FBV0MsSUFBSSxVQUFVLFVBSXZDQyxTQUNJQyxLQUFNLFdBQ0YsR0FBSUMsR0FBUUMsSUFDWkwsR0FBRU0sTUFDRXBDLElBQUtBLEVBQ0xxQyxLQUFNLE1BQ05DLFdBQVksU0FBU0MsR0FDakIsR0FBSUMsR0FBYyx1R0FFbEJWLEdBQUUsb0JBQW9CVyxPQUFPRCxJQUVqQ0UsUUFBUyxTQUFTMUIsR0FDZDJCLFFBQVFDLElBQUk1QixHQUNaa0IsRUFBTWQsT0FBU0osRUFBS0ksT0FDcEJjLEVBQU1SLFVBQVcsRUFDakJJLEVBQUUsb0JBQW9CZSxTQUV0QmYsRUFBRSxpQkFBaUJnQixHQUFHLFFBQVEsb0JBQW9CLFdBQzlDLEdBQUlDLEdBQVlqQixFQUFFSyxNQUFNYSxRQUFRLGNBQWNDLE9BQzlDZixHQUFNZ0IsaUJBQWlCaEIsRUFBTWQsT0FBTzJCLEdBQVdJLFlBQVlqQixFQUFNZCxPQUFPMkIsR0FBV0ssT0FBT2xCLEVBQU1kLE9BQU8yQixHQUFXTSxhQUV0SHZCLEVBQUUsaUJBQWlCZ0IsR0FBRyxRQUFRLGtCQUFrQixXQUM1QyxHQUFJUSxHQUFjeEIsRUFBRUssTUFBTWEsUUFBUSxjQUFjQyxRQUM1Q00sRUFBUXJCLEVBQU1kLE9BQU9rQyxHQUFhQyxLQUN0QyxLQUFJLEdBQUlDLEtBQVFELEdBQ1pyQixFQUFNdUIsa0JBQWtCRixFQUFNQyxHQUVsQ3RCLEdBQU13QixxQkFLdEJDLFVBQVcsU0FBU0MsR0FDaEIsTUFBTywwQkFBNEJBLEVBQU0sYUFBZXhELEVBQWMsb0JBRzFFcUQsa0JBQW1CLFNBQVVELEdBQ3pCLEdBQUl0QixHQUFRQyxJQUNaRCxHQUFNYixhQUFhbUMsRUFBS0ssSUFBTUMsU0FBU04sRUFBSzdDLE1BR2hEK0MsYUFBYyxXQUNWLEdBQUkxRCxHQUFNLDRDQUE4Q0ksRUFBYyxRQUNsRThCLEVBQVFDLElBQ1ozQixhQUNBc0IsRUFBRU0sTUFDRXBDLElBQUtBLEVBQ0xxQyxLQUFNLE9BQ05yQixLQUFNa0IsRUFBTWIsZUFFaEJwQixPQUFPQyxTQUFTQyxLQUFPLG1DQUFxQ0MsRUFBYyxTQUc5RThDLGlCQUFrQixTQUFTQyxFQUFZQyxFQUFPQyxHQUM1QixJQUFYRCxHQUEyQixJQUFYQSxFQUNaRCxLQUFnQixFQUNmbEQsT0FBT0MsU0FBU0MsS0FBTywwQkFBNEJrRCxFQUFZLGFBQWVqRCxFQUFjLG1CQUN2RitDLEtBQWdCLElBQ3JCckIsRUFBRSxvQkFBb0JpQyxLQUFLLDhCQUMzQmpDLEVBQUUsMkJBQTJCa0MsT0FDN0JsQyxFQUFFLFNBQVNnQixHQUFHLFFBQVEsV0FDbEJoQixFQUFFLDJCQUEyQm1DLFVBR3JCLElBQVhiLEdBQTJCLElBQVhBLElBQ3JCdEIsRUFBRSxvQkFBb0JpQyxLQUFLLHlCQUMzQmpDLEVBQUUsMkJBQTJCa0MsT0FDN0JsQyxFQUFFLFNBQVNnQixHQUFHLFFBQVEsV0FDbEJoQixFQUFFLDJCQUEyQm1DLGFBT2pEbkQsR0FBS21CLFFBRU5oQyxPQUFPRixNQUFRRSxPQUFPRiIsImZpbGUiOiJyZWNvbW1lbmRvcmRlci9iYWdtYW5fY3VzdG9tZXJfb3JkZXJfaGlzdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihjbUFwcCkge1xuXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgdmFyIGN1c3RvbWVyX2lkID0gTnVtYmVyKHVybC5tYXRjaCgvKGN1c3RvbWVyXFwvKVxcZCtcXC8vKVswXS5zcGxpdChcIi9cIilbMV0pO1xuICAgIHNldHVwQ1NSRigpO1xuICAgIFZ1ZS5maWx0ZXIoXCJ0b0ZpeGVkXCIsIGZ1bmN0aW9uIChudW0sIHByZWNpc2lvbikge1xuICAgICAgICByZXR1cm4gTnVtYmVyKE51bWJlcihudW0pLnRvRml4ZWQocHJlY2lzaW9uKSk7XG4gICAgfSk7XG5cbiAgICB1cmwgPSBcIi9hcGkvdjEuMi9yZWNvbW1lbmRvcmRlci9iYWdtYW4vY3VzdG9tZXIvXCIgKyBjdXN0b21lcl9pZCArIFwiL2hpc3RvcnlcIjtcblxuICAgIHZhciBiaW5kID0gbmV3IFZ1ZSh7XG4gICAgICAgIGVsOiAnLmhvbWUtY29uJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcGhvbmU6ICcnLFxuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgICAgIG9yZGVyczogW10sXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06e30sXG4gICAgICAgICAgICByZWNvbW1lbmRVcmw6IFwiL3JlY29tbWVuZG9yZGVyL2N1c3RvbWVyL1wiICsgY3VzdG9tZXJfaWQgKyBcIi9yZWNvbW1lbmRcIixcbiAgICAgICAgICAgIGN1c3RvbWVyUHJvZmlsZTogXCIvcmVjb21tZW5kb3JkZXIvYmFnbWFuL2N1c3RvbWVyL1wiICsgY3VzdG9tZXJfaWQgKyBcIi9wcm9maWxlXCIsXG4gICAgICAgICAgICBoaXN0b3J5VXJsOiBcIi9yZWNvbW1lbmRvcmRlci9iYWdtYW4vY3VzdG9tZXIvXCIgKyBjdXN0b21lcl9pZCArIFwiL2hpc3RvcnlcIixcbiAgICAgICAgICAgIGRlYWxlckxpc3RVcmwgOiBcIi9yZWNvbW1lbmRvcmRlci9jdXN0b21lci9cIiArIGN1c3RvbWVyX2lkICsgXCIvZGVhbGVyLWxpc3RcIixcbiAgICAgICAgICAgIGlzbG9hZGVkOmZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBpc2xvYWRlZDogZnVuY3Rpb24obmV3X3ZhbHVlLG9sZF92YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXdfdmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5tLWNvbicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYobmV3X3ZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcubm0tY29uJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsb2FkaW5nX3N0ciA9IFwiPGRpdiBjbGFzcz0nbG9hZGluZ19jb24nPjxkaXYgY2xhc3M9J2xvYWRpbmdfaW1nJz48L2Rpdj48cCBjbGFzcz0nbG9hZGluZ190ZXh0Jz5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIuato+WcqOWKoOi9ve+8jOivt+eojeWQji4uLjwvcD48L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5sb2FkaW5nX2Nvbl9taWQnKS5hcHBlbmQobG9hZGluZ19zdHIpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub3JkZXJzID0gZGF0YS5vcmRlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5pc2xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubG9hZGluZ19jb25fbWlkJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5ob21lLWNvbi1taWQnKS5vbignY2xpY2snLCcuYWRkaXRpb25hbF9vcmRlcicsZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFkZF9pbmRleCA9ICQodGhpcykucGFyZW50cygnLmhpc3RvcnktYicpLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkaXRpb25hbF9vcmRlcihfdGhpcy5vcmRlcnNbYWRkX2luZGV4XS5hcHBlbmRfYWJsZSxfdGhpcy5vcmRlcnNbYWRkX2luZGV4XS5zdGF0dXMsX3RoaXMub3JkZXJzW2FkZF9pbmRleF0uZGVhbGVyX2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhvbWUtY29uLW1pZCcpLm9uKCdjbGljaycsJy5hZ2Fpbl9wdXJjaGFzZScsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWdhaW5faW5kZXggPSAkKHRoaXMpLnBhcmVudHMoJy5oaXN0b3J5LWInKS5pbmRleCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IF90aGlzLm9yZGVyc1thZ2Fpbl9pbmRleF0uaXRlbXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpdGVtIGluIGl0ZW1zKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkVG9TZWxlY3RlZEl0ZW0oaXRlbXNbaXRlbV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb25maXJtT3JkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVhbGVyVXJsOiBmdW5jdGlvbihkaWQpe1xuICAgICAgICAgICAgICAgIHJldHVybiBcIi9yZWNvbW1lbmRvcmRlci9kZWFsZXIvXCIgKyBkaWQgKyBcIi9jdXN0b21lci9cIiArIGN1c3RvbWVyX2lkICsgXCIvYmFnbWFuLWFkZC1pdGVtXCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/mt7vliqDllYblk4HmlbDmja5cbiAgICAgICAgICAgIGFkZFRvU2VsZWN0ZWRJdGVtOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2VsZWN0ZWRJdGVtW2l0ZW0uaWRdID0gcGFyc2VJbnQoaXRlbS5udW0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8v5re75Yqg5bm26Lez6L2s5Yiw6LSt54mp6L2m6K6i5Y2V6aG16Z2iXG4gICAgICAgICAgICBjb25maXJtT3JkZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gJy9hcGkvdjEuMi9yZWNvbW1lbmRvcmRlci9iYWdtYW4vY3VzdG9tZXIvJyArIGN1c3RvbWVyX2lkICsgJy9jYXJ0Jzs7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICBzZXR1cENTUkYoKTtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdGhpcy5zZWxlY3RlZEl0ZW1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcmVjb21tZW5kb3JkZXIvYmFnbWFuL2N1c3RvbWVyLycgKyBjdXN0b21lcl9pZCArICcvY2FydCc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy/ov73liqDorqLljZVcbiAgICAgICAgICAgIGFkZGl0aW9uYWxfb3JkZXI6IGZ1bmN0aW9uKGFwcGVuZF9hYmxlLHN0YXR1cyxkZWFsZXJfaWQpIHtcbiAgICAgICAgICAgICAgICBpZihzdGF0dXMgPT09IDEgfHwgc3RhdHVzID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGFwcGVuZF9hYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3JlY29tbWVuZG9yZGVyL2RlYWxlci9cIiArIGRlYWxlcl9pZCArIFwiL2N1c3RvbWVyL1wiICsgY3VzdG9tZXJfaWQgKyBcIi9iYWdtYW4tYWRkLWl0ZW1cIjtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoYXBwZW5kX2FibGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuYWRkaXRpb25hbF90ZXh0JykudGV4dCgn5pys5qyh6K6i5Y2V5bey6LaF6L+HMzDliIbpkp/llabvvIzkuI3og73ov73liqDllYblk4HkuobvvIzmlazor7fosIXop6PvvIEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5hZGRpdGlvbmFsX29yZGVyX21vZGVsJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmtub3cnKS5vbignY2xpY2snLGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5hZGRpdGlvbmFsX29yZGVyX21vZGVsJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihzdGF0dXMgPT09IDAgfHwgc3RhdHVzID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5hZGRpdGlvbmFsX3RleHQnKS50ZXh0KCfmnKzmrKHorqLljZXlpLHotKXllabvvIzkuI3og73ov73liqDllYblk4HkuobvvIzmlazor7fosIXop6PvvIEnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmFkZGl0aW9uYWxfb3JkZXJfbW9kZWwnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5rbm93Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5hZGRpdGlvbmFsX29yZGVyX21vZGVsJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGJpbmQuaW5pdCgpO1xuXG59KSh3aW5kb3cuY21BcHAgPSB3aW5kb3cuY21BcHAgfHwge30pO1xuIl19
