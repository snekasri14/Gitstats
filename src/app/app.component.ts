import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin: boolean = false;
  loginForm!: FormGroup;
  title = 'gitstats';
  userDetails: any;

  username: string = '';
  gitData: any;
  followersData: any;

  constructor(private http: HttpClient) {}
  fetchGitData() {
    console.log("Username--");
    console.log(this.username);
    if (this.username) {
      this.http.get(`https://api.github.com/users/${this.username}`).subscribe(
        data => {
          console.log('Response data:', data);
          this.gitData = data;
          if(this.gitData.followers_url){
            this.http.get(`https://api.github.com/users/${this.username}/followers`).subscribe(
              followersData => {
                console.log('Response data:', followersData);
                // this.gitData.repos_url = followersData;
                this.followersData = followersData;
              },
              error => {
                console.error('Error:', error);
              }
            );
          }
        },
        error => {
          console.error('Error:', error);
        }
      );
    }else{
      console.error('Error:', "No username");
    }
  }


}
