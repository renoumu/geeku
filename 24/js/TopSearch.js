$(function() {
    $(document).on('click','#Registered-btn', function () {
        if ($('#Registered-number2').val() != "123456" ) {
            $.modal({
                title:  '提示',
                text: '密码格式不正确，请重新输入',
                buttons: [
                    {
                        text: '好的'
                    },
                ]
            });
        }else if ($('#Registered-number').val() != "123456") {
            $.modal({
                title:  '提示',
                text: '验证码不正确，请重新输入',
                buttons: [
                    {
                        text: '好的'
                    },
                ]
            });
        }else{
            $.modal({
                title:  '提示',
                text: '恭喜你注册成功，马上体验',
                buttons: [
                    {
                        text: '确定'
                    },
                ]
            });
        }
    });
});