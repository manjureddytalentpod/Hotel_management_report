import { Component, OnInit } from '@angular/core';
import {AuthServiceService } from '../../Auth/auth-service.service';
import {Router} from '@angular/router';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  CurUlr: any;
  URL: string;
  isSignedIn = false;
  constructor(private AuthService: AuthServiceService, private router: Router, private ActRoute: ActivatedRoute) { }
  AuthData: any;
  ngOnInit() {
   this.AuthService.SubjectData.subscribe(val => this.isSignedIn = val);
  }
  logout() {
    this.isSignedIn = false;
   this.router.navigate(['/signin']);
  }
}
