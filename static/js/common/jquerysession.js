!function(e){e.session={_id:null,_cookieCache:void 0,_init:function(){window.name||(window.name=Math.random()),this._id=window.name,this._initCache();var e=new RegExp(this._generatePrefix()+"=([^;]+);").exec(document.cookie);if(e&&document.location.protocol!==e[1]){this._clearSession();for(var t in this._cookieCache)try{window.sessionStorage.setItem(t,this._cookieCache[t])}catch(i){}}document.cookie=this._generatePrefix()+"="+document.location.protocol+";path=/;expires="+new Date((new Date).getTime()+12e4).toUTCString()},_generatePrefix:function(){return"__session:"+this._id+":"},_initCache:function(){var e=document.cookie.split(";");this._cookieCache={};for(var t in e){var i=e[t].split("=");new RegExp(this._generatePrefix()+".+").test(i[0])&&i[1]&&(this._cookieCache[i[0].split(":",3)[2]]=i[1])}},_setFallback:function(e,t,i){var o=this._generatePrefix()+e+"="+t+"; path=/";return i&&(o+="; expires="+new Date(Date.now()+12e4).toUTCString()),document.cookie=o,this._cookieCache[e]=t,this},_getFallback:function(e){return this._cookieCache||this._initCache(),this._cookieCache[e]},_clearFallback:function(){for(var e in this._cookieCache)document.cookie=this._generatePrefix()+e+"=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";this._cookieCache={}},_deleteFallback:function(e){document.cookie=this._generatePrefix()+e+"=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;",delete this._cookieCache[e]},get:function(e){return window.sessionStorage.getItem(e)||this._getFallback(e)},set:function(e,t,i){try{window.sessionStorage.setItem(e,t)}catch(o){}return this._setFallback(e,t,i||!1),this},"delete":function(e){return this.remove(e)},remove:function(e){try{window.sessionStorage.removeItem(e)}catch(t){}return this._deleteFallback(e),this},_clearSession:function(){try{window.sessionStorage.clear()}catch(e){for(var t in window.sessionStorage)window.sessionStorage.removeItem(t)}},clear:function(){return this._clearSession(),this._clearFallback(),this}},e.session._init()}(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9qcXVlcnlzZXNzaW9uLmpzIl0sIm5hbWVzIjpbIiQiLCJzZXNzaW9uIiwiX2lkIiwiX2Nvb2tpZUNhY2hlIiwidW5kZWZpbmVkIiwiX2luaXQiLCJ3aW5kb3ciLCJuYW1lIiwiTWF0aCIsInJhbmRvbSIsInRoaXMiLCJfaW5pdENhY2hlIiwibWF0Y2hlcyIsIlJlZ0V4cCIsIl9nZW5lcmF0ZVByZWZpeCIsImV4ZWMiLCJkb2N1bWVudCIsImNvb2tpZSIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJfY2xlYXJTZXNzaW9uIiwia2V5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiZSIsIkRhdGUiLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJjb29raWVzIiwic3BsaXQiLCJpIiwia3YiLCJ0ZXN0IiwiX3NldEZhbGxiYWNrIiwidmFsdWUiLCJvbmNlT25seSIsIm5vdyIsIl9nZXRGYWxsYmFjayIsIl9jbGVhckZhbGxiYWNrIiwiX2RlbGV0ZUZhbGxiYWNrIiwiZ2V0IiwiZ2V0SXRlbSIsInNldCIsImRlbGV0ZSIsInJlbW92ZSIsInJlbW92ZUl0ZW0iLCJjbGVhciIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBVUEsR0FFTkEsRUFBRUMsU0FFRUMsSUFBSyxLQUVMQyxhQUFjQyxPQUVkQyxNQUFPLFdBRUVDLE9BQU9DLE9BQ1JELE9BQU9DLEtBQU9DLEtBQUtDLFVBRXZCQyxLQUFLUixJQUFNSSxPQUFPQyxLQUNsQkcsS0FBS0MsWUFJTCxJQUFJQyxHQUFVLEdBQUtDLFFBQU9ILEtBQUtJLGtCQUFvQixhQUFjQyxLQUFLQyxTQUFTQyxPQUMvRSxJQUFJTCxHQUFXSSxTQUFTRSxTQUFTQyxXQUFhUCxFQUFRLEdBQUksQ0FDdkRGLEtBQUtVLGVBQ0wsS0FBSyxHQUFJQyxLQUFPWCxNQUFLUCxhQUNqQixJQUNBRyxPQUFPZ0IsZUFBZUMsUUFBUUYsRUFBS1gsS0FBS1AsYUFBYWtCLElBQ25ELE1BQU9HLEtBSWhCUixTQUFTQyxPQUFTUCxLQUFLSSxrQkFBb0IsSUFBTUUsU0FBU0UsU0FBU0MsU0FBVyxtQkFBcUIsR0FBS00sT0FBSyxHQUFLQSxPQUFNQyxVQUFZLE1BQVNDLGVBSWpKYixnQkFBaUIsV0FFYixNQUFPLGFBQWVKLEtBQUtSLElBQU0sS0FHckNTLFdBQVksV0FFUixHQUFJaUIsR0FBVVosU0FBU0MsT0FBT1ksTUFBTSxJQUNwQ25CLE1BQUtQLGVBQ0wsS0FBSyxHQUFJMkIsS0FBS0YsR0FBUyxDQUNuQixHQUFJRyxHQUFLSCxFQUFRRSxHQUFHRCxNQUFNLElBQ3RCLElBQUtoQixRQUFPSCxLQUFLSSxrQkFBb0IsTUFBT2tCLEtBQUtELEVBQUcsS0FBT0EsRUFBRyxLQUM5RHJCLEtBQUtQLGFBQWE0QixFQUFHLEdBQUdGLE1BQU0sSUFBSyxHQUFHLElBQU1FLEVBQUcsTUFLM0RFLGFBQWMsU0FBU1osRUFBS2EsRUFBT0MsR0FFL0IsR0FBSWxCLEdBQVNQLEtBQUtJLGtCQUFvQk8sRUFBTSxJQUFNYSxFQUFRLFVBTTFELE9BTElDLEtBQ0FsQixHQUFVLGFBQWUsR0FBS1EsTUFBS0EsS0FBS1csTUFBUSxNQUFTVCxlQUU3RFgsU0FBU0MsT0FBU0EsRUFDbEJQLEtBQUtQLGFBQWFrQixHQUFPYSxFQUNsQnhCLE1BR1gyQixhQUFjLFNBQVNoQixHQUtuQixNQUhLWCxNQUFLUCxjQUNOTyxLQUFLQyxhQUVGRCxLQUFLUCxhQUFha0IsSUFHN0JpQixlQUFnQixXQUVaLElBQUssR0FBSVIsS0FBS3BCLE1BQUtQLGFBQ2ZhLFNBQVNDLE9BQVNQLEtBQUtJLGtCQUFvQmdCLEVBQUksbURBRW5EcEIsTUFBS1AsaUJBR1RvQyxnQkFBaUIsU0FBU2xCLEdBRXRCTCxTQUFTQyxPQUFTUCxLQUFLSSxrQkFBb0JPLEVBQU0sMERBQzFDWCxNQUFLUCxhQUFha0IsSUFHN0JtQixJQUFLLFNBQVNuQixHQUVWLE1BQU9mLFFBQU9nQixlQUFlbUIsUUFBUXBCLElBQVFYLEtBQUsyQixhQUFhaEIsSUFHbkVxQixJQUFLLFNBQVNyQixFQUFLYSxFQUFPQyxHQUV0QixJQUNJN0IsT0FBT2dCLGVBQWVDLFFBQVFGLEVBQUthLEdBQ3JDLE1BQU9WLElBRVQsTUFEQWQsTUFBS3VCLGFBQWFaLEVBQUthLEVBQU9DLElBQVksR0FDbkN6QixNQUdYaUMsU0FBVSxTQUFTdEIsR0FDZixNQUFPWCxNQUFLa0MsT0FBT3ZCLElBR3ZCdUIsT0FBUSxTQUFTdkIsR0FFYixJQUNBZixPQUFPZ0IsZUFBZXVCLFdBQVd4QixHQUMvQixNQUFPRyxJQUVULE1BREFkLE1BQUs2QixnQkFBZ0JsQixHQUNkWCxNQUdYVSxjQUFlLFdBRWIsSUFDTWQsT0FBT2dCLGVBQWV3QixRQUN4QixNQUFPdEIsR0FDTCxJQUFLLEdBQUlNLEtBQUt4QixRQUFPZ0IsZUFDakJoQixPQUFPZ0IsZUFBZXVCLFdBQVdmLEtBSzdDZ0IsTUFBTyxXQUlILE1BRkFwQyxNQUFLVSxnQkFDTFYsS0FBSzRCLGlCQUNFNUIsT0FLZlYsRUFBRUMsUUFBUUksU0FFWDBDIiwiZmlsZSI6ImNvbW1vbi9qcXVlcnlzZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpe1xuXG4gICAgJC5zZXNzaW9uID0ge1xuXG4gICAgICAgIF9pZDogbnVsbCxcblxuICAgICAgICBfY29va2llQ2FjaGU6IHVuZGVmaW5lZCxcblxuICAgICAgICBfaW5pdDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5hbWUgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWQgPSB3aW5kb3cubmFtZTtcbiAgICAgICAgICAgIHRoaXMuX2luaXRDYWNoZSgpO1xuXG4gICAgICAgICAgICAvLyBTZWUgaWYgd2UndmUgY2hhbmdlZCBwcm90Y29sc1xuXG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IChuZXcgUmVnRXhwKHRoaXMuX2dlbmVyYXRlUHJlZml4KCkgKyBcIj0oW147XSspO1wiKSkuZXhlYyhkb2N1bWVudC5jb29raWUpO1xuICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgIT09IG1hdGNoZXNbMV0pIHtcbiAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyU2Vzc2lvbigpO1xuICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuX2Nvb2tpZUNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIHRoaXMuX2Nvb2tpZUNhY2hlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9O1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSB0aGlzLl9nZW5lcmF0ZVByZWZpeCgpICsgXCI9XCIgKyBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArICc7cGF0aD0vO2V4cGlyZXM9JyArIChuZXcgRGF0ZSgobmV3IERhdGUpLmdldFRpbWUoKSArIDEyMDAwMCkpLnRvVVRDU3RyaW5nKCk7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBfZ2VuZXJhdGVQcmVmaXg6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuICdfX3Nlc3Npb246JyArIHRoaXMuX2lkICsgJzonO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9pbml0Q2FjaGU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgICAgICAgIHRoaXMuX2Nvb2tpZUNhY2hlID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIGNvb2tpZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIga3YgPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgaWYgKChuZXcgUmVnRXhwKHRoaXMuX2dlbmVyYXRlUHJlZml4KCkgKyAnLisnKSkudGVzdChrdlswXSkgJiYga3ZbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29va2llQ2FjaGVba3ZbMF0uc3BsaXQoJzonLCAzKVsyXV0gPSBrdlsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgX3NldEZhbGxiYWNrOiBmdW5jdGlvbihrZXksIHZhbHVlLCBvbmNlT25seSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGNvb2tpZSA9IHRoaXMuX2dlbmVyYXRlUHJlZml4KCkgKyBrZXkgKyBcIj1cIiArIHZhbHVlICsgXCI7IHBhdGg9L1wiO1xuICAgICAgICAgICAgaWYgKG9uY2VPbmx5KSB7XG4gICAgICAgICAgICAgICAgY29va2llICs9IFwiOyBleHBpcmVzPVwiICsgKG5ldyBEYXRlKERhdGUubm93KCkgKyAxMjAwMDApKS50b1VUQ1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llO1xuICAgICAgICAgICAgdGhpcy5fY29va2llQ2FjaGVba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2dldEZhbGxiYWNrOiBmdW5jdGlvbihrZXkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fY29va2llQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0Q2FjaGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb29raWVDYWNoZVtrZXldO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9jbGVhckZhbGxiYWNrOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5fY29va2llQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSB0aGlzLl9nZW5lcmF0ZVByZWZpeCgpICsgaSArICc9OyBwYXRoPS87IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2Nvb2tpZUNhY2hlID0ge307XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2RlbGV0ZUZhbGxiYWNrOiBmdW5jdGlvbihrZXkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHRoaXMuX2dlbmVyYXRlUHJlZml4KCkgKyBrZXkgKyAnPTsgcGF0aD0vOyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UOyc7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY29va2llQ2FjaGVba2V5XTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKGtleSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgdGhpcy5fZ2V0RmFsbGJhY2soa2V5KTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUsIG9uY2VPbmx5KVxuICAgICAgICB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIHRoaXMuX3NldEZhbGxiYWNrKGtleSwgdmFsdWUsIG9uY2VPbmx5IHx8IGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoa2V5KTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uKGtleSlcbiAgICAgICAge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fTtcbiAgICAgICAgICAgIHRoaXMuX2RlbGV0ZUZhbGxiYWNrKGtleSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBfY2xlYXJTZXNzaW9uOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gd2luZG93LnNlc3Npb25TdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjbGVhcjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9jbGVhclNlc3Npb24oKTtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyRmFsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJC5zZXNzaW9uLl9pbml0KCk7XG5cbn0pKGpRdWVyeSk7Il19
