import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {config} from '../config';
import {DashBoardModal} from './dash-board.modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  staticBoardData : DashBoardModal | undefined;
  time : string | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    var time = new Date();
    this.time = time.toLocaleString('en-US');
    this.http.get(`${config.covidApiUrl}`).subscribe((res:any)=>{
      this.staticBoardData = res.data as DashBoardModal;
      console.log(this.staticBoardData)
    });
  }

}
