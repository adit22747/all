package com.cybage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cybage.model.Users;

public interface UsersRepository extends JpaRepository<Users, Integer> {

}
