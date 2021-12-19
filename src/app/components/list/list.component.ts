import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { StationService } from '../../services/station.service';
import {Station} from "../../Station";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  Stations: Station[] = [];
  DataDuration: string = "1";
  OrderBy: string = "timestamp";
  isDESC: string = "1";
  showSpinner: boolean = false;
  
  constructor(private stationService: StationService) { }

  ngOnInit(): void {
    this.getData(this.DataDuration,this.OrderBy,this.isDESC);    
    setInterval(() => {         
      this.getData(this.DataDuration,this.OrderBy,this.isDESC);
    }, 30000);
  }

  getData(duration:string, orderby:string, dir:string)
  {
    this.showSpinner = true;
    this.stationService.getStations(duration, orderby, dir).subscribe((result)=>
    {
      this.Stations = result;
      this.showSpinner = false;
    });
  }

  extractTime(t:string)
  {
    return moment(t,'YYYYMMDD HHmmss').format('HH:mm');
  }

  setDataDuration(duration:string)
  {
    this.DataDuration = duration;
    this.getData(this.DataDuration,this.OrderBy,this.isDESC);
  }

  setOrder(orderby:string)
  {
    if (this.OrderBy == orderby)
      this.isDESC = (this.isDESC == "1") ? "0" : "1";
    else
      this.isDESC = "1";
    this.OrderBy = orderby;
    this.getData(this.DataDuration,this.OrderBy,this.isDESC);
  }

  myParseFloat(f:string)
  {
    return parseFloat(f).toFixed(3);
  }

}
