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

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		participants.add(session);
	}

	@Override
	public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
		System.out.println("WebSocket 오류 발생: " + exception);
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		participants.remove(session);
	}

	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		for(WebSocketSession participant : participants) {
			if(participant.getId().equals(session.getId())) continue;
			participant.sendMessage(new TextMessage(message.getPayload()));
		}
	}
}