$(function() {
    var customId = $("#customId").val(); // customId
    var eventId = $("#eventId").val(); // eventId value
    var url = '/api/getMessageList?customId='+customId+'&event='+eventId;
    $.ajax({
        url: url,
        type: 'GET',
        success: function(resp) {
            // var j = 0
            // for (j = 0; j < 6; j++) { 
            //     resp.push(resp[0])
            // }

            var pcMsg = $("#pcMsg");
            var mMsg = $("#mMsg");
            var pcFragment = $(document.createDocumentFragment());
            var mFragment = $(document.createDocumentFragment());
            var i = 0;
            var pcMsgBoardDiv = null;
            var mMsgBoardDiv = null;
            for (i = 0; i < resp.length; i++) { 
                var content = resp[i];

                // create pc message-board
                if(i % 10 === 0) {
                    pcMsgBoardDiv = $("<div>").attr('class', 'message-board');
                }
                
                pcMsgBoardDiv.append(createMessage(content));

                // insert pc message-board to fragment
                if(i % 10 === 0) {
                    pcFragment.append(pcMsgBoardDiv);
                }

                // create mobile message-board
                if(i % 3 === 0) {
                    mMsgBoardDiv = $("<div>").attr('class', 'message-board');
                }

                mMsgBoardDiv.append(createMessage(content));

                // create mobile message-board to fragment
                if(i % 3 === 0) {
                    mFragment.append(mMsgBoardDiv);
                }
            }

            pcMsg.append(pcFragment);
            mMsg.append(mFragment);
        },
        error: function(xhr) {
            alert('Ajax request 發生錯誤');
        }
    });
})

// create msg content
function createMessage(content) {
    
    var messageSpan = $("<span>").attr('class', 'message');
        var thumbtackSpan = $("<span>").attr('class', 'thumbtack');
        var questionSpan = $("<span>").attr('class', 'question-box');
            var qNameWrapSpan = $("<span>").attr('class', 'name');
                var qImgSpan = $("<i>").append($("<img>").attr('src', 'img/page/page/section8-icon/1.png'));
                var qNameSpan = $("<span>").text(content.FullName.S);
            qNameWrapSpan.append(qImgSpan).append(qNameSpan);
            var qMsgWrapSpan = $("<span>").attr('class', 'question').text(content.Msg.S);
        questionSpan.append(qNameWrapSpan).append(qMsgWrapSpan);
        var answerSpan = $("<span>").attr('class', 'answer-box');
            var aWrapSpan = $("<span>").attr('class', 'name');
                var aImgSpan = $("<i>").append($("<img>").attr('src', 'img/page/page/section8-icon/hr.png'));
                var aReply1Span = $("<span>").text('HR回覆');
                var aReply2Span = $("<span>").attr('class', 'question').text(content.Reply.S);
            aWrapSpan.append(aImgSpan).append(aReply1Span).append(aReply2Span);
        answerSpan.append(aWrapSpan);
    messageSpan.append(thumbtackSpan).append(questionSpan).append(answerSpan);

    return messageSpan;
}