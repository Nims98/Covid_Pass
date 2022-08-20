import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/service/auth.service';
import SideMenuModal, {sideManuConfigData} from './side-menu.config';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  sideMenuData : SideMenuModal[] = sideManuConfigData;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.doLogoutUser();
    window.location.reload();
  }

}
