package com.example.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import com.example.demo.controller.ChattingController;

public class WebSocketConfig implements WebSocketConfigurer {
	@Autowired
	private ChattingController chattingController;

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(chattingController, "/chattingRoom");
	}
}