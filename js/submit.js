$(function() {
    //送出留言表單
    $("#qusetionForm").submit(function(event) {
        cancelHandler(event)
        //防呆判斷
        var wkName =  $("#qusetionForm #name").val(); //姓名
        var wkEmail =  $("#qusetionForm #email").val(); //Email
        var wkSchool = $("#qusetionForm #school").val(); //就讀＆畢業學校
        var wkDepartment = $("#qusetionForm #department").val(); //系所
        var wkQstyle = $("#Qstyle").val(); //問題類型
        var wkQdetail = $("#Qdetail").val(); //問題內容
        var wkAgree = $("#agree").prop("checked") // true = 勾選同意
        var isNiming = $("#isNiming").prop("checked") //true = 私密留言
        var customId = $("#customId").val(); // customId
        var eventId = $("#eventId").val(); // eventId
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!wkAgree){
            alert('請確認已勾選 同意提供資料')
        } else if (wkName==0 || wkEmail==0 || wkQstyle==0) {
            alert('請確認已填寫所有必填欄位')
        } else {
            if(!regex.test(wkEmail)) {
                alert('e-mail格式不正確，請重新確認')
            }else {
                $("#qusetionForm .btn.submit").addClass('disabled')
                //接口
                $.ajax({
                    url: '/api/addMessage',
                    type: 'POST',
                    data: {
                        CustomId: customId,
                        Event: eventId,
                        FullName: wkName,
                        Email: wkEmail,
                        School: wkSchool,
                        Major: wkDepartment,
                        MsgType: wkQstyle,
                        Msg: wkQdetail,
                        IsShow: isNiming ? 'false' : 'true'
                    },
                    success: function(response) {
                        alert('謝謝你的留言，請靜待HR的回覆。')
                    },
                    error: function(xhr) {
                        alert('Ajax request 發生錯誤');
                    },
                    complete: function() {
                        $("#qusetionForm .btn.submit").removeClass('disabled')
                            window.location.reload(true);
                    }
                });
            }
        }
    });

    //手機留言板字級bug
    setTimeout(function() {
        $(".message-board-box.mobile .message-board .message span").css('display', 'inline-block');
    },1000)
    setTimeout(function() {
        $(".message-board-box.mobile .message-board .message span").css('display', '');
    },1100)

})