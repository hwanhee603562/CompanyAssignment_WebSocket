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
    // private static Map<String, WebSocketSession> participants = new ConcurrentHashMap<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println("WebSocket 연결 성공: " + session);
        participants.add(session);
        // 님이 방에 입장하셨습니다
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
        System.out.println("WebSocket 오류 발생: " + exception);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println("WebSocket 연결 종료: " + session);
        participants.remove(session);
        // 님이 방을 나가셨습니다
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        System.out.println("받은 메시지: " + message.getPayload());
        // 메시지
    }
}