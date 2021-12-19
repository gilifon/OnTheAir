import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, observable, of } from 'rxjs';
import {Station} from "../Station";
import {STATIONS} from "../mock-stations";

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private apiURL = 'https://www.iarc.org/ontheair/Server/GetAllLog.php';

  constructor(private http:HttpClient) { }
  getStations(duration:string, orderby:string, dir:string): Observable<Station[]>
  {
    var res = of(STATIONS);
    if (location.hostname != 'localhost') //"www.iarc.org"
      res = this.http.get<Station[]>(this.apiURL+"?duration="+duration+"&orderby="+orderby+"&dir="+dir);
      
    return res;
  }

}
