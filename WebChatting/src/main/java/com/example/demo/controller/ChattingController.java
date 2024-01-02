package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class ChattingController extends TextWebSocketHandler {

	private static List<WebSocketSession> participants = new ArrayList<>();

	// 1. 클라이언트 소켓과 연동을 성공했을 때
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("session = " + session);

		// 접속 연동 성공시 클라이언트 소켓의 세션 정보를 접속명단 리스트에 저장
		participants.add(session);
	}

	// 2. 클라이언트 소켓과 연동 오류가 발생했을 때
	@Override
	public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
		System.out.println(session);
	}

	// 3. 클라이언트 소켓과 연동이 끊겼을 때
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		super.afterConnectionClosed(session, status);
	}

	// 4. 클라이언트 소켓으로부터 메시지를 받았을 때
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
	super.handleTextMessage(session, message);
	}
}
