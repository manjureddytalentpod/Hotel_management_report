import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../Auth/auth-service.service';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {
  ProileData: any;
  constructor(private AuthService: AuthServiceService) { }

  ngOnInit() {
   this.ProileData = this.AuthService.ShowProfile();
  }

}
