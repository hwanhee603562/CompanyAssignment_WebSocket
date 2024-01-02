$(".joinBtn").click(function() {
	var userId = $(".inputId").val();
	window.location.href = "http://localhost:8085/chatting?userId="+userId;
});