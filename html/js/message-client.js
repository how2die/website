const apiRoot = "/api/messages";
const messageId = "0";
const getIntervalMs = 1000;
const htmlMessageId = "message";

const sendMessage = () => {
    lastWrite = new Date();

    let request = new XMLHttpRequest();
    const message = JSON.stringify({ "content": document.getElementById(htmlMessageId).value, "sent": lastWrite });

    request.open('PUT', `${apiRoot}/${messageId}`, true);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(message);		
}

const getMessage = () => {
    if (document.hidden) {
        return;
    }

    let request = new XMLHttpRequest();
    request.open('GET', `${apiRoot}/${messageId}`, true);
    request.onload = () => {
        if (request.status == 200) { 
            const message = JSON.parse(request.response); 
            const sent = new Date(message.sent);
            if (!lastWrite || sent > lastWrite) {
                document.getElementById(htmlMessageId).value = message.content;
            }
        }
    }
    request.send();
}

var lastWrite;
getMessage();
setInterval(getMessage, getIntervalMs);	
