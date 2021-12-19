import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multibtn',
  templateUrl: './multibtn.component.html',
  styleUrls: ['./multibtn.component.css']
})
export class MultibtnComponent implements OnInit {
  @Output() LeftBtnClick = new EventEmitter();
  @Output() CenterBtnClick = new EventEmitter();
  @Output() RightBtnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onLeftClick(): void{
    this.LeftBtnClick.emit();
  }
  onCenterClick(): void{
    this.CenterBtnClick.emit();
  }
  onRightClick(): void{
    this.RightBtnClick.emit();
  }
  
  

}
