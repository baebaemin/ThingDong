package com.bell.thingdong.domain.object.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bell.thingdong.domain.object.service.ObjectService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/objects")
@RequiredArgsConstructor
@Tag(name = "object", description = "오브제 관련 컨트롤러")
public class ObjectController {
	private final ObjectService objectService;

	@Operation(summary = "오브제 구매", description = "인벤토리에서 오브제를 구매한다.")
	@PutMapping
	public ResponseEntity<?> purchaseObject(@RequestParam("userObjectId") Long userObjectId) {
		objectService.purchaseObject(userObjectId);

		return ResponseEntity.ok().build();
	}
}
