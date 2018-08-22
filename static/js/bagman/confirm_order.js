!function(e){"use strict";var o=window.location.href;window.customer_id=Number(o.match(/(customer\/)\d+\//)[0].split("/")[1]),o="/api/v1.2/recommendorder/bagman/"+window.customer_id+"/order",setupCSRF(),Vue.filter("toFixed",function(e,o){return Number(Number(e).toFixed(o))}),document.body.addEventListener("touchstart",function(){});var r=new Vue({el:"#order",data:{customer_name:"",phone:"",address:"",dealers:[],sum:0,amount:0},methods:{init:function(){var e=this;$.ajax({url:"/api/v1.2/recommendorder/bagman/customer/"+window.customer_id+"/cart",type:"get",success:function(o){if(0===o.code){var r=[];console.log(o.items);for(var n=0;n<o.items.length;n++)1==o.items[n].selected&&r.push(o.items[n]);e.dealers=r,e.sum=o.sum}}}),$.ajax({url:"/api/v1.2/recommendorder/bagman/customer/"+window.customer_id,type:"get",success:function(o){0===o.code&&(e.customer_name=o.name,e.phone=o.phone,e.address=o.address)}})},dhref:function(e){return"/recommendorder/dealer/"+e+"/customer/"+window.customer_id+"/bag-add-item"},commit:function(){$(".model").css("display","block"),console.log(this.dealers)},cancel:function(){$(".model").css("display","none")},commit_confirm:function(){var e={};return 0===this.dealers.length?(alert("无商品，请先在购物车添加商品!"),void(window.location.href="/recommendorder/dealer/"+did+"/customer/"+window.customer_id+"/bag-add-item")):void $.ajax({url:o,type:"post",data:e,beforeSend:function(e,o){var r=getCookie("csrftoken");csrfSafeMethod(o.type)||this.crossDomain||e.setRequestHeader("X-CSRFToken",r),$(".model").hide(),$(".loading_con_mid").show()},success:function(e){if($(".loading_con_mid").hide(),0===e.code){if(null!=window.printer)for(var o=0;o<e.tokens.length;o++)window.printer.printReceipt(e.tokens[o]);$(".order_success_model").show(),$(".order_know").on("click",function(){$(".order_success_model").hide(),window.location.href="/recommendorder/bagman/customer/"+window.customer_id+"/profile"})}else $(".order_failure_model").show(),$(".order_know").on("click",function(){$(".order_failure_model").hide(),window.location.href="/recommendorder/bagman/customer/"+window.customer_id+"/profile"})},error:function(e){$(".loading_con_mid").hide(),$(".order_failure_model").show(),$(".order_know").on("click",function(){$(".order_failure_model").hide(),window.location.href="/recommendorder/bagman/customer/"+window.customer_id+"/profile"})}})}}});r.init(),$(".home-info-nav-a1").click(function(){window.location.href="/recommendorder/bagman/customer/"+window.customer_id+"/cart"})}(window.cmApp=window.cmApp||{});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZ21hbi9jb25maXJtX29yZGVyLmpzIl0sIm5hbWVzIjpbImNtQXBwIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY3VzdG9tZXJfaWQiLCJOdW1iZXIiLCJtYXRjaCIsInNwbGl0Iiwic2V0dXBDU1JGIiwiVnVlIiwiZmlsdGVyIiwibnVtIiwicHJlY2lzaW9uIiwidG9GaXhlZCIsImRvY3VtZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwiZWwiLCJkYXRhIiwiY3VzdG9tZXJfbmFtZSIsInBob25lIiwiYWRkcmVzcyIsImRlYWxlcnMiLCJzdW0iLCJhbW91bnQiLCJtZXRob2RzIiwiaW5pdCIsIl90aGlzIiwidGhpcyIsIiQiLCJhamF4IiwidHlwZSIsInN1Y2Nlc3MiLCJjb2RlIiwidGVtcCIsImNvbnNvbGUiLCJsb2ciLCJpdGVtcyIsImkiLCJsZW5ndGgiLCJzZWxlY3RlZCIsInB1c2giLCJuYW1lIiwiZGhyZWYiLCJkaWQiLCJjb21taXQiLCJjc3MiLCJjYW5jZWwiLCJjb21taXRfY29uZmlybSIsImRhdGFUb1NlbmQiLCJhbGVydCIsImJlZm9yZVNlbmQiLCJ4aHIiLCJzZXR0aW5ncyIsImNzcmZ0b2tlbiIsImdldENvb2tpZSIsImNzcmZTYWZlTWV0aG9kIiwiY3Jvc3NEb21haW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwiaGlkZSIsInNob3ciLCJwcmludGVyIiwidG9rZW5zIiwicHJpbnRSZWNlaXB0Iiwib24iLCJlcnJvciIsImNsaWNrIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFVQSxHQUVOLFlBQ0EsSUFBSUMsR0FBTUMsT0FBT0MsU0FBU0MsSUFFMUJGLFFBQU9HLFlBQWNDLE9BQU9MLEVBQUlNLE1BQU0scUJBQXFCLEdBQUdDLE1BQU0sS0FBSyxJQUV6RVAsRUFBTSxtQ0FBcUNDLE9BQU9HLFlBQWMsU0FFaEVJLFlBRUFDLElBQUlDLE9BQU8sVUFBVyxTQUFVQyxFQUFLQyxHQUNqQyxNQUFPUCxRQUFP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T0FBT0csWUFBWSxXQUc1RUgsT0FBT0YsTUFBUUUsT0FBT0YiLCJmaWxlIjoiYmFnbWFuL2NvbmZpcm1fb3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oY21BcHApIHtcblxuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuICAgIHdpbmRvdy5jdXN0b21lcl9pZCA9IE51bWJlcih1cmwubWF0Y2goLyhjdXN0b21lclxcLylcXGQrXFwvLylbMF0uc3BsaXQoJy8nKVsxXSk7XG5cbiAgICB1cmwgPSAnL2FwaS92MS4yL3JlY29tbWVuZG9yZGVyL2JhZ21hbi8nICsgd2luZG93LmN1c3RvbWVyX2lkICsgJy9vcmRlcic7XG5cbiAgICBzZXR1cENTUkYoKTtcblxuICAgIFZ1ZS5maWx0ZXIoJ3RvRml4ZWQnLCBmdW5jdGlvbiAobnVtLCBwcmVjaXNpb24pIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcihOdW1iZXIobnVtKS50b0ZpeGVkKHByZWNpc2lvbikpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uICgpIHt9KTtcbiAgICB2YXIgYmluZCA9IG5ldyBWdWUoe1xuICAgICAgICBlbDogJyNvcmRlcicsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGN1c3RvbWVyX25hbWU6IFwiXCIsXG4gICAgICAgICAgICBwaG9uZTogXCJcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwiXCIsXG4gICAgICAgICAgICBkZWFsZXJzOiBbXSxcbiAgICAgICAgICAgIHN1bTogMCxcbiAgICAgICAgICAgIGFtb3VudDowXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL3YxLjIvcmVjb21tZW5kb3JkZXIvYmFnbWFuL2N1c3RvbWVyLycgKyB3aW5kb3cuY3VzdG9tZXJfaWQgKyAnL2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb2RlID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBfdGhpcy5kZWFsZXJzID0gZGF0YS5pdGVtcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcD1bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLml0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7aTxkYXRhLml0ZW1zLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5pdGVtc1tpXS5zZWxlY3RlZD09dHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcC5wdXNoKGRhdGEuaXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlYWxlcnMgPSB0ZW1wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN1bSA9IGRhdGEuc3VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS92MS4yL3JlY29tbWVuZG9yZGVyL2JhZ21hbi9jdXN0b21lci8nICsgd2luZG93LmN1c3RvbWVyX2lkLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb2RlID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXN0b21lcl9uYW1lID0gZGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnBob25lID0gZGF0YS5waG9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGRyZXNzID0gZGF0YS5hZGRyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGhyZWY6IGZ1bmN0aW9uKGRpZCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiL3JlY29tbWVuZG9yZGVyL2RlYWxlci9cIiArIGRpZCArIFwiL2N1c3RvbWVyL1wiICsgd2luZG93LmN1c3RvbWVyX2lkICtcIi9iYWctYWRkLWl0ZW1cIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21taXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJChcIi5tb2RlbFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kZWFsZXJzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJChcIi5tb2RlbFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21taXRfY29uZmlybTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YVRvU2VuZCA9IHt9O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlYWxlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwi5peg5ZWG5ZOB77yM6K+35YWI5Zyo6LSt54mp6L2m5re75Yqg5ZWG5ZOBIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAgXCIvcmVjb21tZW5kb3JkZXIvZGVhbGVyL1wiICsgZGlkICsgXCIvY3VzdG9tZXIvXCIgKyB3aW5kb3cuY3VzdG9tZXJfaWQgK1wiL2JhZy1hZGQtaXRlbVwiO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhVG9TZW5kLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbih4aHIsc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjc3JmdG9rZW4gPSBnZXRDb29raWUoJ2NzcmZ0b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjc3JmU2FmZU1ldGhvZChzZXR0aW5ncy50eXBlKSAmJiAhdGhpcy5jcm9zc0RvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1DU1JGVG9rZW5cIiwgY3NyZnRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIubW9kZWxcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmxvYWRpbmdfY29uX21pZCcpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubG9hZGluZ19jb25fbWlkJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuY29kZSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5wcmludGVyICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS50b2tlbnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnByaW50ZXIucHJpbnRSZWNlaXB0KGRhdGEudG9rZW5zW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5vcmRlcl9zdWNjZXNzX21vZGVsJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5vcmRlcl9rbm93Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm9yZGVyX3N1Y2Nlc3NfbW9kZWwnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcmVjb21tZW5kb3JkZXIvYmFnbWFuL2N1c3RvbWVyL1wiICsgd2luZG93LmN1c3RvbWVyX2lkICsgXCIvcHJvZmlsZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5vcmRlcl9mYWlsdXJlX21vZGVsJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5vcmRlcl9rbm93Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm9yZGVyX2ZhaWx1cmVfbW9kZWwnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcmVjb21tZW5kb3JkZXIvYmFnbWFuL2N1c3RvbWVyL1wiICsgd2luZG93LmN1c3RvbWVyX2lkICsgXCIvcHJvZmlsZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubG9hZGluZ19jb25fbWlkJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm9yZGVyX2ZhaWx1cmVfbW9kZWwnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcub3JkZXJfa25vdycpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm9yZGVyX2ZhaWx1cmVfbW9kZWwnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9yZWNvbW1lbmRvcmRlci9iYWdtYW4vY3VzdG9tZXIvXCIgKyB3aW5kb3cuY3VzdG9tZXJfaWQgKyBcIi9wcm9maWxlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KTtcblxuYmluZC5pbml0KCk7XG4kKCcuaG9tZS1pbmZvLW5hdi1hMScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCIvcmVjb21tZW5kb3JkZXIvYmFnbWFuL2N1c3RvbWVyL1wiK3dpbmRvdy5jdXN0b21lcl9pZCtcIi9jYXJ0XCI7XG59KTtcblxufSkod2luZG93LmNtQXBwID0gd2luZG93LmNtQXBwIHx8IHt9KTsiXX0=
