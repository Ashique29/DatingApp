import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  //loggedIn: boolean = false;

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      //this.loggedIn = true;
    })
  }

  logout(){
    this.accountService.logout();
    //this.loggedIn =false;
  }

  getCurrentUser(){
    // this.accountService.currentUser$.subscribe(user => {
    //   this.loggedIn = !!user;
    //   console.log(this.loggedIn);
    // }, error => {
    //   console.log(error);
    // })
    // this.accountService.currentUser$.subscribe({
    //   next: user => { this.loggedIn = !!user; console.log(this.loggedIn)},
    //   error: error => { console.log(error) }
    // })
  }

}
