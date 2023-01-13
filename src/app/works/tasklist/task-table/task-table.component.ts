
import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {
  @Output() editTask= new EventEmitter();
  constructor() { }
  public taskList=[
    {
      name:"CSS",check:false
    },
    {
      name:"JS",check:false
    },
    {
      name:"PYTHON",check:false
    },
    {
      name:"JAVA",check:true
    }
  ];
  public taskCount=this.taskList.length;
  edit(index:number){
    this.editTask.emit(index);
  }
  delete(index:number){
    this.taskList.splice(index,1)
  }
  ngOnInit(): void {
  }

}
