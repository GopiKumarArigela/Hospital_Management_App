package com.example.gk.services.auth;

import com.example.gk.dto.SignupRequest;
import com.example.gk.dto.UserDto;

public interface AuthService 
{

	UserDto signupUser(SignupRequest signupRequest);
	boolean hasUserWithEmail(String email);
}
