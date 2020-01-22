 // #region chatupdate

var messageId = 0;
//export {messageId};
window.onload = function(){

    function GetMessagesReq(id){
        
    var req2 = new XMLHttpRequest();
    req2.open("GET", "https://localhost:44305/api/message/getchatlog/"+id,true);
    
    req2.onreadystatechange = function()
    {
        if(req2.readyState == 4)
        {
            var res2 = JSON.parse(req2.response);
            console.log(res2);
            var element = document.getElementById("chat_logs");
            res2.forEach(item => {
                element.innerHTML = element.innerHTML + 
            "<div class='chat self'><p class='chat-message'>"+item['userName']+": "+item['message']+"</p></div>";
            messageId = item["id"];
            });
        }
        else
        {
            console.log(req2.response);
        }
    }
    req2.send();
    };
 

    this.setInterval(GetMessagesReq(messageId),1000);
    
};
// #endregion

// #region sendmessage
var send_button =  document.getElementById("send_button");

//import { messageId } from './chatUpdate.js';
function SendMessage ()
{
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://localhost:44305/api/message",true);

    xhr.onreadystatechange = function(){
        console.log();

    }

    xhr.setRequestHeader('Content-Type', 'application/json');
    
    var obj = {
        id: "1",
        message: document.getElementById("textmessage").innerText,
        username: "browseruser"
    };
    
    xhr.send(obj);
}

send_button.onclick = SendMessage;

// #endregion
