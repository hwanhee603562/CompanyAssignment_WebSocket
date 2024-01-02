


// jQuery를 사용하여 document ready 이벤트 핸들링
$(document).ready(function() {
	console.log(111);

	let clientSocket = { current:null };

	clientSocket.current = new WebSocket("ws://localhost:8085/chattingRoom");

	// 1. 서버소켓과 연동 성공했을 때 이후 행동/메소드 정의
	clientSocket.current.onopen = e => {
		console.log('onopen');
		console.log(e);
	};

	// 2. 서버소켓과 세션 오류가 발생했을 때 이후 행동/메소드 정의
	clientSocket.current.onerror = e => {
		console.log('onerror');
		console.log(e);
	};

	// 3. 서버소켓과 연동이 끊겼을 때 이후 행동/메소드 정의
	clientSocket.current.onclose = e => {
		console.log('close');
		console.log(e);
	};

	// 4. 서버소켓으로부터 메시지를 받았을 때 이후 행동/메소드 정의
	clientSocket.current.onmessage = e => {
		alert(e.data);
	};
});