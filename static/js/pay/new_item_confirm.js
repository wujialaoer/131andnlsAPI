$(function(){setupCSRF();new Vue({el:"#app",data:{datas:[],current_page:1,integration:"",search_type:"person",word:"",pages:[]},beforeCreate:function(){var a=this;$.ajax({url:"/api/v1.1/pay/new-item-log",type:"GET",data:{page:1},datatype:"JSON",success:function(e){console.log(e.data),a.datas=e.data.datas,a.pages=e.data.pages}})},watch:{current_page:function(){var a=this;$.ajax({url:"/api/v1.1/pay/new-item-log",type:"GET",data:{page:a.current_page},datatype:"JSON",success:function(e){console.log(e),a.datas=e.data.datas,a.pages=e.data.pages}})}},methods:{pageChange:function(a){this.current_page=a+1},pageBefore:function(){return 1==this.current_page?void alert("已经是第一页了"):void(this.current_page-=1)},pageAfter:function(){return this.current_page==this.pages.length?void alert("已经是最后页了"):void(this.current_page+=1)},commit:function(){var a=this;$.ajax({url:"/api/v1.1/pay/new-item-search",type:"GET",data:{word:a.word,search_type:a.search_type},datatype:"JSON",success:function(e){console.log(e),a.datas=e.data.datas,a.pages=e.data.pages}})},confirm:function(a,e){var t=e.srcElement.value,s=this.datas[a],n=0;if("yes"==t)n=1;else{if("no"!=t)return;n=2}$.ajax({url:"/api/v1.1/pay/new-item",type:"PATCH",data:{status:n,uid:s.uid,id:s.id},datatype:"JSON",success:function(a){console.log(a)}})},inputSearch:function(){this.word=$("#search").val()},selectVal:function(a){this.search_type=a.srcElement.value}}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheS9uZXdfaXRlbV9jb25maXJtLmpzIl0sIm5hbWVzIjpbIiQiLCJzZXR1cENTUkYiLCJWdWUiLCJlbCIsImRhdGEiLCJkYXRhcyIsImN1cnJlbnRfcGFnZSIsImludGVncmF0aW9uIiwic2VhcmNoX3R5cGUiLCJ3b3JkIiwicGFnZXMiLCJiZWZvcmVDcmVhdGUiLCJfc2VsZiIsInRoaXMiLCJhamF4IiwidXJsIiwidHlwZSIsInBhZ2UiLCJkYXRhdHlwZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwid2F0Y2giLCJtZXRob2RzIiwicGFnZUNoYW5nZSIsImluZGV4IiwicGFnZUJlZm9yZSIsImFsZXJ0IiwicGFnZUFmdGVyIiwibGVuZ3RoIiwiY29tbWl0IiwiY29uZmlybSIsImV2ZW50Iiwic3JjRWxlbWVudCIsInZhbHVlIiwib2JqIiwic3RhdHVzIiwidWlkIiwiaWQiLCJpbnB1dFNlYXJjaCIsInZhbCIsInNlbGVjdFZhbCIsImUiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFLFdBRUdDLFdBQ1UsSUFBSUMsTUFDWEMsR0FBSSxPQUNKQyxNQUVJQyxTQUNBQyxhQUFjLEVBQ2RDLFlBQVksR0FDWkMsWUFBWSxTQUNaQyxLQUFLLEdBQ0xDLFVBR0pDLGFBQWMsV0FDVixHQUFJQyxHQUFRQyxJQUNaYixHQUFFYyxNQUNFQyxJQUFLLDZCQUNMQyxLQUFNLE1BQ05aLE1BQ0lhLEtBQUssR0FFVEMsU0FBUyxPQUNUQyxRQUFTLFNBQVNmLEdBQ2RnQixRQUFRQyxJQUFJakIsRUFBS0EsTUFDakJRLEVBQU1QLE1BQVFELEVBQUtBLEtBQUtDLE1BQ3hCTyxFQUFNRixNQUFRTixFQUFLQSxLQUFLTSxVQUlwQ1ksT0FDSWhCLGFBQWEsV0FDVCxHQUFJTSxHQUFRQyxJQUNaYixHQUFFYyxNQUNFQyxJQUFLLDZCQUNMQyxLQUFNLE1BQ05aLE1BQ0lhLEtBQU9MLEVBQU1OLGNBRWpCWSxTQUFTLE9BQ1RDLFFBQVMsU0FBU2YsR0FDZGdCLFFBQVFDLElBQUlqQixHQUNaUSxFQUFNUCxNQUFRRCxFQUFLQSxLQUFLQyxNQUN4Qk8sRUFBTUYsTUFBUU4sRUFBS0EsS0FBS00sV0FLeENhLFNBQ0lDLFdBQVksU0FBU0MsR0FDakJaLEtBQUtQLGFBQWVtQixFQUFRLEdBRWhDQyxXQUFZLFdBQ1IsTUFBeUIsSUFBckJiLEtBQUtQLGlCQUNMcUIsT0FBTSxnQkFHVmQsS0FBS1AsY0FBZ0IsSUFFekJzQixVQUFXLFdBQ1AsTUFBSWYsTUFBS1AsY0FBZ0JPLEtBQUtILE1BQU1tQixXQUNoQ0YsT0FBTSxnQkFHVmQsS0FBS1AsY0FBZ0IsSUFFekJ3QixPQUFRLFdBQ0osR0FBSWxCLEdBQVFDLElBQ1piLEdBQUVjLE1BQ0VDLElBQUssZ0NBQ0xDLEtBQU0sTUFDTlosTUFDSUssS0FBTUcsRUFBTUgsS0FDWkQsWUFBYUksRUFBTUosYUFFdkJVLFNBQVMsT0FDVEMsUUFBUyxTQUFTZixHQUNkZ0IsUUFBUUMsSUFBSWpCLEdBQ1pRLEVBQU1QLE1BQVFELEVBQUtBLEtBQUtDLE1BQ3hCTyxFQUFNRixNQUFRTixFQUFLQSxLQUFLTSxVQUlwQ3FCLFFBQVEsU0FBU04sRUFBT08sR0FFcEIsR0FBSUQsR0FBVUMsRUFBTUMsV0FBV0MsTUFDM0JDLEVBQU10QixLQUFLUixNQUFNb0IsR0FDakJXLEVBQVMsQ0FDYixJQUFlLE9BQVhMLEVBQ0FLLEVBQVMsTUFDTixDQUFBLEdBQWUsTUFBWEwsRUFHUCxNQUZBSyxHQUFTLEVBSWJwQyxFQUFFYyxNQUNFQyxJQUFLLHlCQUNMQyxLQUFNLFFBQ05aLE1BQ0lnQyxPQUFRQSxFQUNSQyxJQUFLRixFQUFJRSxJQUNUQyxHQUFJSCxFQUFJRyxJQUVacEIsU0FBUyxPQUNUQyxRQUFTLFNBQVNmLEdBQ2RnQixRQUFRQyxJQUFJakIsT0FJeEJtQyxZQUFhLFdBQ1QxQixLQUFLSixLQUFPVCxFQUFFLFdBQVd3QyxPQUU3QkMsVUFBVSxTQUFTQyxHQUNmN0IsS0FBS0wsWUFBY2tDLEVBQUVULFdBQVdDIiwiZmlsZSI6InBheS9uZXdfaXRlbV9jb25maXJtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcblxuICAgICBzZXR1cENTUkYoKTtcbiAgICAgdmFyIGFwcCA9IG5ldyBWdWUoe1xuICAgICAgICBlbDogJyNhcHAnLFxuICAgICAgICBkYXRhOiB7XG5cbiAgICAgICAgICAgIGRhdGFzOiBbXSxcbiAgICAgICAgICAgIGN1cnJlbnRfcGFnZTogMSxcbiAgICAgICAgICAgIGludGVncmF0aW9uOicnLFxuICAgICAgICAgICAgc2VhcmNoX3R5cGU6J3BlcnNvbicsXG4gICAgICAgICAgICB3b3JkOicnLFxuICAgICAgICAgICAgcGFnZXM6W11cblxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVDcmVhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBcIi9hcGkvdjEuMS9wYXkvbmV3LWl0ZW0tbG9nXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgICAgICAgICAgcGFnZToxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhdHlwZTpcIkpTT05cIixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIF9zZWxmLmRhdGFzID0gZGF0YS5kYXRhLmRhdGFzO1xuICAgICAgICAgICAgICAgICAgICBfc2VsZi5wYWdlcyA9IGRhdGEuZGF0YS5wYWdlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6e1xuICAgICAgICAgICAgY3VycmVudF9wYWdlOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL2FwaS92MS4xL3BheS9uZXctaXRlbS1sb2dcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICAgICAgICAgICAgICAncGFnZSc6X3NlbGYuY3VycmVudF9wYWdlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGF0eXBlOlwiSlNPTlwiLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxmLmRhdGFzID0gZGF0YS5kYXRhLmRhdGFzO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGYucGFnZXMgPSBkYXRhLmRhdGEucGFnZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgcGFnZUNoYW5nZTogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRfcGFnZSA9IGluZGV4ICsgMTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWdlQmVmb3JlOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRfcGFnZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCflt7Lnu4/mmK/nrKzkuIDpobXkuoYnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRfcGFnZSAtPSAxO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhZ2VBZnRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50X3BhZ2UgPT0gdGhpcy5wYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ+W3sue7j+aYr+acgOWQjumhteS6hicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudF9wYWdlICs9IDE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tbWl0OiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi9hcGkvdjEuMS9wYXkvbmV3LWl0ZW0tc2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgICAgICAgICAgICAgd29yZDogX3NlbGYud29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaF90eXBlOiBfc2VsZi5zZWFyY2hfdHlwZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkYXRhdHlwZTpcIkpTT05cIixcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc2VsZi5kYXRhcyA9IGRhdGEuZGF0YS5kYXRhcztcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxmLnBhZ2VzID0gZGF0YS5kYXRhLnBhZ2VzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlybTpmdW5jdGlvbihpbmRleCwgZXZlbnQpe1xuXG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpcm0gPSBldmVudC5zcmNFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSB0aGlzLmRhdGFzW2luZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdHVzID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlybSA9PSAneWVzJykge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29uZmlybSA9PSAnbm8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IDI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL2FwaS92MS4xL3BheS9uZXctaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBBVENIXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IG9iai51aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb2JqLmlkXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGF0eXBlOlwiSlNPTlwiLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0U2VhcmNoOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHRoaXMud29yZCA9ICQoXCIjc2VhcmNoXCIpLnZhbCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdFZhbDpmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaF90eXBlID0gZS5zcmNFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIl19
