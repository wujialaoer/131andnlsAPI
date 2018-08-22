$(document).ready(function () {

    $("#wechat_form").submit(function () {

        var options = {
            // target:        '#output1',   // target element(s) to be updated with server response
            beforeSubmit: wechatShowRequest,  // pre-submit callback
            success: wechatShowResponse,  // post-submit callback

            // other available options:
            url: 'add-transaction-accounts',         // override for form's 'action' attribute
            type: 'post',        // 'get' or 'post', override for form's 'method' attribute
            dataType: 'json',        // 'xml', 'script', or 'json' (expected server response type)
            //clearForm: true        // clear all form fields after successful submit
            //resetForm: true        // reset the form after successful submit

            // $.ajax options can be used here too, for example:
            //timeout:   3000
            data: {'platform': 'wechat'}
        };
        $(this).ajaxSubmit(options);
        return false;
    });
    $("#alipay_form").submit(function () {

        var options = {
            // target:        '#output1',   // target element(s) to be updated with server response
            beforeSubmit: alipayShowRequest,  // pre-submit callback
            success: alipayShowResponse,  // post-submit callback

            // other available options:
            url: 'add-transaction-accounts',         // override for form's 'action' attribute
            type: 'post',        // 'get' or 'post', override for form's 'method' attribute
            dataType: 'json',        // 'xml', 'script', or 'json' (expected server response type)
            //clearForm: true        // clear all form fields after successful submit
            //resetForm: true        // reset the form after successful submit

            // $.ajax options can be used here too, for example:
            //timeout:   3000
            data: {'platform': 'alipay'}
        };
        $(this).ajaxSubmit(options);
        return false;
    });

    $("input").keydown(function () {

        $(this).parent().attr('class', 'field');
    });

    function wechatShowResponse(responseText, statusText, xhr) {
        if (responseText.success == 1) {
            $('.ui.page.dimmer').dimmer('hide');
            location.reload();
        } else {
            $('.ui.page.dimmer').dimmer('hide');

            alert("验证未通过，请重新填写。");
        }
    }

    function wechatShowRequest(formData, jqForm, options) {
        var send = true;
        $("#wechat_form").find("input").each(function () {
            if ($.trim($(this).val()) === "") {
                $(this).parent().attr('class', 'field error');
                send = false;
            }
        });
        if (!send)
            return false;
        $('.ui.page.dimmer').dimmer('show');
    }

    function alipayShowRequest() {
        var send = true;
        $("#alipay_form").find("input").each(function () {
            if ($.trim($(this).val()) === "") {
                $(this).parent().attr('class', 'field error');
                send = false;
            }
        });
        if (!send)
            return false;
        $('.ui.page.dimmer').dimmer('show');
    }

    function alipayShowResponse(responseText, statusText, xhr) {
        if (responseText.success == 1) {
            $('.ui.page.dimmer').dimmer('hide');
            alert('成功！');
            location.reload();
        } else {
            $('.ui.page.dimmer').dimmer('hide');

            alert("验证未通过，请重新填写。");
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzdG9yZS90cmFuc2FjdGlvbl9hY2NvdW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgICQoXCIjd2VjaGF0X2Zvcm1cIikuc3VibWl0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC8vIHRhcmdldDogICAgICAgICcjb3V0cHV0MScsICAgLy8gdGFyZ2V0IGVsZW1lbnQocykgdG8gYmUgdXBkYXRlZCB3aXRoIHNlcnZlciByZXNwb25zZVxuICAgICAgICAgICAgYmVmb3JlU3VibWl0OiB3ZWNoYXRTaG93UmVxdWVzdCwgIC8vIHByZS1zdWJtaXQgY2FsbGJhY2tcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHdlY2hhdFNob3dSZXNwb25zZSwgIC8vIHBvc3Qtc3VibWl0IGNhbGxiYWNrXG5cbiAgICAgICAgICAgIC8vIG90aGVyIGF2YWlsYWJsZSBvcHRpb25zOlxuICAgICAgICAgICAgdXJsOiAnYWRkLXRyYW5zYWN0aW9uLWFjY291bnRzJywgICAgICAgICAvLyBvdmVycmlkZSBmb3IgZm9ybSdzICdhY3Rpb24nIGF0dHJpYnV0ZVxuICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLCAgICAgICAgLy8gJ2dldCcgb3IgJ3Bvc3QnLCBvdmVycmlkZSBmb3IgZm9ybSdzICdtZXRob2QnIGF0dHJpYnV0ZVxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgICAgICAgIC8vICd4bWwnLCAnc2NyaXB0Jywgb3IgJ2pzb24nIChleHBlY3RlZCBzZXJ2ZXIgcmVzcG9uc2UgdHlwZSlcbiAgICAgICAgICAgIC8vY2xlYXJGb3JtOiB0cnVlICAgICAgICAvLyBjbGVhciBhbGwgZm9ybSBmaWVsZHMgYWZ0ZXIgc3VjY2Vzc2Z1bCBzdWJtaXRcbiAgICAgICAgICAgIC8vcmVzZXRGb3JtOiB0cnVlICAgICAgICAvLyByZXNldCB0aGUgZm9ybSBhZnRlciBzdWNjZXNzZnVsIHN1Ym1pdFxuXG4gICAgICAgICAgICAvLyAkLmFqYXggb3B0aW9ucyBjYW4gYmUgdXNlZCBoZXJlIHRvbywgZm9yIGV4YW1wbGU6XG4gICAgICAgICAgICAvL3RpbWVvdXQ6ICAgMzAwMFxuICAgICAgICAgICAgZGF0YTogeydwbGF0Zm9ybSc6ICd3ZWNoYXQnfVxuICAgICAgICB9O1xuICAgICAgICAkKHRoaXMpLmFqYXhTdWJtaXQob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICAkKFwiI2FsaXBheV9mb3JtXCIpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAvLyB0YXJnZXQ6ICAgICAgICAnI291dHB1dDEnLCAgIC8vIHRhcmdldCBlbGVtZW50KHMpIHRvIGJlIHVwZGF0ZWQgd2l0aCBzZXJ2ZXIgcmVzcG9uc2VcbiAgICAgICAgICAgIGJlZm9yZVN1Ym1pdDogYWxpcGF5U2hvd1JlcXVlc3QsICAvLyBwcmUtc3VibWl0IGNhbGxiYWNrXG4gICAgICAgICAgICBzdWNjZXNzOiBhbGlwYXlTaG93UmVzcG9uc2UsICAvLyBwb3N0LXN1Ym1pdCBjYWxsYmFja1xuXG4gICAgICAgICAgICAvLyBvdGhlciBhdmFpbGFibGUgb3B0aW9uczpcbiAgICAgICAgICAgIHVybDogJ2FkZC10cmFuc2FjdGlvbi1hY2NvdW50cycsICAgICAgICAgLy8gb3ZlcnJpZGUgZm9yIGZvcm0ncyAnYWN0aW9uJyBhdHRyaWJ1dGVcbiAgICAgICAgICAgIHR5cGU6ICdwb3N0JywgICAgICAgIC8vICdnZXQnIG9yICdwb3N0Jywgb3ZlcnJpZGUgZm9yIGZvcm0ncyAnbWV0aG9kJyBhdHRyaWJ1dGVcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsICAgICAgICAvLyAneG1sJywgJ3NjcmlwdCcsIG9yICdqc29uJyAoZXhwZWN0ZWQgc2VydmVyIHJlc3BvbnNlIHR5cGUpXG4gICAgICAgICAgICAvL2NsZWFyRm9ybTogdHJ1ZSAgICAgICAgLy8gY2xlYXIgYWxsIGZvcm0gZmllbGRzIGFmdGVyIHN1Y2Nlc3NmdWwgc3VibWl0XG4gICAgICAgICAgICAvL3Jlc2V0Rm9ybTogdHJ1ZSAgICAgICAgLy8gcmVzZXQgdGhlIGZvcm0gYWZ0ZXIgc3VjY2Vzc2Z1bCBzdWJtaXRcblxuICAgICAgICAgICAgLy8gJC5hamF4IG9wdGlvbnMgY2FuIGJlIHVzZWQgaGVyZSB0b28sIGZvciBleGFtcGxlOlxuICAgICAgICAgICAgLy90aW1lb3V0OiAgIDMwMDBcbiAgICAgICAgICAgIGRhdGE6IHsncGxhdGZvcm0nOiAnYWxpcGF5J31cbiAgICAgICAgfTtcbiAgICAgICAgJCh0aGlzKS5hamF4U3VibWl0KG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAkKFwiaW5wdXRcIikua2V5ZG93bihmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hdHRyKCdjbGFzcycsICdmaWVsZCcpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gd2VjaGF0U2hvd1Jlc3BvbnNlKHJlc3BvbnNlVGV4dCwgc3RhdHVzVGV4dCwgeGhyKSB7XG4gICAgICAgIGlmIChyZXNwb25zZVRleHQuc3VjY2VzcyA9PSAxKSB7XG4gICAgICAgICAgICAkKCcudWkucGFnZS5kaW1tZXInKS5kaW1tZXIoJ2hpZGUnKTtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLnVpLnBhZ2UuZGltbWVyJykuZGltbWVyKCdoaWRlJyk7XG5cbiAgICAgICAgICAgIGFsZXJ0KFwi6aqM6K+B5pyq6YCa6L+H77yM6K+36YeN5paw5aGr5YaZ44CCXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2VjaGF0U2hvd1JlcXVlc3QoZm9ybURhdGEsIGpxRm9ybSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgc2VuZCA9IHRydWU7XG4gICAgICAgICQoXCIjd2VjaGF0X2Zvcm1cIikuZmluZChcImlucHV0XCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCQudHJpbSgkKHRoaXMpLnZhbCgpKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYXR0cignY2xhc3MnLCAnZmllbGQgZXJyb3InKTtcbiAgICAgICAgICAgICAgICBzZW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXNlbmQpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICQoJy51aS5wYWdlLmRpbW1lcicpLmRpbW1lcignc2hvdycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFsaXBheVNob3dSZXF1ZXN0KCkge1xuICAgICAgICB2YXIgc2VuZCA9IHRydWU7XG4gICAgICAgICQoXCIjYWxpcGF5X2Zvcm1cIikuZmluZChcImlucHV0XCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCQudHJpbSgkKHRoaXMpLnZhbCgpKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYXR0cignY2xhc3MnLCAnZmllbGQgZXJyb3InKTtcbiAgICAgICAgICAgICAgICBzZW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXNlbmQpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICQoJy51aS5wYWdlLmRpbW1lcicpLmRpbW1lcignc2hvdycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFsaXBheVNob3dSZXNwb25zZShyZXNwb25zZVRleHQsIHN0YXR1c1RleHQsIHhocikge1xuICAgICAgICBpZiAocmVzcG9uc2VUZXh0LnN1Y2Nlc3MgPT0gMSkge1xuICAgICAgICAgICAgJCgnLnVpLnBhZ2UuZGltbWVyJykuZGltbWVyKCdoaWRlJyk7XG4gICAgICAgICAgICBhbGVydCgn5oiQ5Yqf77yBJyk7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy51aS5wYWdlLmRpbW1lcicpLmRpbW1lcignaGlkZScpO1xuXG4gICAgICAgICAgICBhbGVydChcIumqjOivgeacqumAmui/h++8jOivt+mHjeaWsOWhq+WGmeOAglwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl0sImZpbGUiOiJzdG9yZS90cmFuc2FjdGlvbl9hY2NvdW50LmpzIn0=