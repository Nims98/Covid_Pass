import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../config';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  id = '';
  constructor(private activatedRoute: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.id = id;
      this.fetchUserData();
    }
  }

  fetchUserData(){
    this.http.get(`${config.adminService}/User/${this.id}`).subscribe(res=>{
      console.log(res);
    })
  }

}
