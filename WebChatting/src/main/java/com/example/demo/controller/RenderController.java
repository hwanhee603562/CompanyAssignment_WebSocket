package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RenderController {
	// 채팅방 렌더링
	@GetMapping("/chatting")
	public String renderRoom() {
		return "chattingRoom";
	}

	// ID입력창 렌더링
	@GetMapping("/join")
	public String renderJoin() {
		return "join";
	}
}
