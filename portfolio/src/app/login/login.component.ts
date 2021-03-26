import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string = '';
  username:string = '';
  password:any = '';
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  retrieveFromSession(){
    let stringified:any = sessionStorage.getItem("userInfo");
    
    let info = JSON.parse(stringified);
    
    this.username = info[0].username;
    this.password = info[0].pwd;
  }

  checkUser(loginRef:any){
    this.retrieveFromSession();
    let user1 = loginRef.user;
    let pwd1 = loginRef.pwd;
    if(user1==this.username && pwd1==this.password){
      this.router.navigate(["my-portfolio"]);  
      console.log("Works!!!!!!");
    }else{
      this.msg = "Failure, please try again";
    }
    }
  }
  
