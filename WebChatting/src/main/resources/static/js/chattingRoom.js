const socket = new WebSocket("ws://192.168.0.80:8085/chattingRoom");
const now = new Date().toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});

$(document).ready(function() {
	// 소켓생성
	socket.onopen = function(e) {
		console.log("WebSocket 연결 성공", e);
	};
});

// 메시지 수령
socket.onmessage = function(e) {
	const newLeftBox = $("<div class='leftBox'>");
	const lTime = $("<span class='lTime'></span>").text(now);
	const lName = $("<div class='lName'>나의이름</div>").text(new URLSearchParams(window.location.search).get("userId"));
	const lContent = $("<span class='lContent'></span>").text(e.data);

	newLeftBox.append(lName);
	newLeftBox.append("<div>").append(lContent).append(lTime);
	$(".chatWrap").append(newLeftBox);
};
// 소켓소멸
socket.onclose = function(e) {
	console.log("WebSocket 연결이 닫혔습니다.", e);
};

// 에러발생
socket.onerror = function(e) {
	console.error("WebSocket 오류 발생", e);
};

$(".inputBox").keypress(function(e) {
	if (e.which === 13) sendMessage();
});

// 메시지 전송
function sendMessage() {
	const message = $(".inputBox").val();
	const newRightBox = $("<div class='rightBox'>");
	const rName = $("<div class='rName'>나의이름</div>").text(new URLSearchParams(window.location.search).get("userId"));
	const rTime = $("<span class='rTime'></span>").text(now);
	const rContent = $("<span class='rContent'></span>").text(message);

	newRightBox.append(rName);
	newRightBox.append("<div>").append(rTime).append(rContent);
	$(".chatWrap").append(newRightBox);

	socket.send(message);
	$(".inputBox").val("");
}