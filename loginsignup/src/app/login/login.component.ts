import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username: string = '';
  password: string = '';
  role: string = '';

  user: User = new User();

  roles: string[];

  constructor(private authService: AuthService, private route: Router){
    this.roles=[
      "admin",
      "user"
    ]
  }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }

  login(){
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.role = this.role;

    this.authService.login(this.user).subscribe(res => {
      if(res==null){
        alert("Username or password is wrong");
      }
      else{
        console.log("Login successfull");
        localStorage.setItem("token",res.token);

        if(this.role=='user'){
          this.route.navigate(['/user']);
        }

        if(this.role=='admin'){
          this.route.navigate(['/admin']);
        }
      }
    },err => {
      alert("login failed");
      this.ngOnInit();
    })
  }

}
