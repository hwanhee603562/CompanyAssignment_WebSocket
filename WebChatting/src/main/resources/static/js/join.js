$(".joinBtn").click(function() {
	var userId = $(".inputId").val();
	window.location.href = "http://192.168.0.80:8085/chatting?userId="+userId;
});