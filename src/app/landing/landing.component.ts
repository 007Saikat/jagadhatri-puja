import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  user: User = new User;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('SessionUser')
  }
  onClickSubmit(loginForm:any){
    this.user.userName = loginForm.username;
    this.user.password = loginForm.password;
    this.loginService.login(this.user).subscribe(
        data => {
          if(data){
            localStorage.setItem('SessionUser',data);
            this.router.navigate(['/home']);
          }
        },
        error => console.log(error)
    );
  }

}
