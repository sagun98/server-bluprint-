import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // serverName: string=''; 
  // serverContent:string=''; 
 
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent: string }>();


  onAddServer(nameInput: HTMLInputElement, detailsInput: HTMLInputElement ){
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: detailsInput.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement, detailsInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName:nameInput.value, 
      serverContent: detailsInput.value
    });
  }
}
