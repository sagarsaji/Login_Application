package com.example.UserLogin.Repository;

import com.example.UserLogin.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String> {
}
