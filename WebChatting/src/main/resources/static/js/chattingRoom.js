$(document).ready(function() {
    const socket = new WebSocket("ws://localhost:8085/chattingRoom");

    // 소켓이 열렸을 때 이벤트 처리
    socket.onopen = function(event) {
        console.log("WebSocket 연결 성공", event);
    };

    // 소켓으로부터 메시지를 받았을 때 이벤트 처리
    socket.onmessage = function(event) {
        const receivedMessage = event.data;
        console.log("받은 메시지:", receivedMessage);
    };

    // 소켓이 닫혔을 때 이벤트 처리
    socket.onclose = function(event) {
        console.log("WebSocket 연결이 닫혔습니다.", event);
    };

    // 에러가 발생했을 때 이벤트 처리
    socket.onerror = function(event) {
        console.error("WebSocket 오류 발생", event);
    };

    // 메시지 전송 예제
    function sendMessage(message) {
        if(socket.readyState === WebSocket.OPEN) {
            socket.send(message);
            console.log("메시지 전송:", message);
        } else {
            console.error("WebSocket 연결이 열리지 않았습니다.");
        }
    }
});