const socket = new WebSocket("ws://192.168.0.80:8085/chattingRoom");

$(document).ready(function() {
	// 소켓생성
	socket.onopen = function(event) {
		console.log("WebSocket 연결 성공", event);
	};

	// 메시지 받음
	socket.onmessage = function(event) {
		const newLeftBox = $("<div class='leftBox'>");
		const lTime = $("<span class='lTime'></span>").text(new Date());
		const lName = $("<div class='lName'>나의이름</div>").text(new URLSearchParams(window.location.search).get("userId"));
		const lContent = $("<span class='lContent'></span>").text(event.data);

		newLeftBox.append(lName);
		newLeftBox.append("<div>").append(lContent).append(lTime);
		$(".chatWrap").append(newLeftBox);
	};

	// 소켓소멸
	socket.onclose = function(event) {
		console.log("WebSocket 연결이 닫혔습니다.", event);
	};

	// 에러발생
	socket.onerror = function(event) {
		console.error("WebSocket 오류 발생", event);
	};
});

function sendMessage() {
	const message = $(".inputBox").val();
	const newRightBox = $("<div class='rightBox'>");
	const rName = $("<div class='rName'>나의이름</div>").text(new URLSearchParams(window.location.search).get("userId"));
	const rTime = $("<span class='rTime'></span>").text(new Date());
	const rContent = $("<span class='rContent'></span>").text(message);

	newRightBox.append(rName);
	newRightBox.append("<div>").append(rTime).append(rContent);
	$(".chatWrap").append(newRightBox);

	socket.send(message);
}