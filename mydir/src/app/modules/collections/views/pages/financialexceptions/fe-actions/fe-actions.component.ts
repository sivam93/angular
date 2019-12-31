import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-fe-actions',
  templateUrl: './fe-actions.component.html',
  styleUrls: ['./fe-actions.component.scss']
})
export class FeActionsComponent implements OnInit {
  @Input() roleid:any;
  @Input() model_remarks:string;
  @Input() fileUpload:boolean;
  @Output() updateButton: EventEmitter<any> = new EventEmitter<any>();
  @Output() SBAButton: EventEmitter<any> = new EventEmitter<any>();
  @Output() processButton: EventEmitter<any> = new EventEmitter<any>();
  @Output() uploadButton: EventEmitter<any> = new EventEmitter<any>();
  loader:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  update(){
    this.updateButton.emit();
  }
  onUpload(){
    this.uploadButton.emit();
  }
  sendBackToAnchor(){
    this.SBAButton.emit();
  }
  process(){
    this.processButton.emit();
  }
}
