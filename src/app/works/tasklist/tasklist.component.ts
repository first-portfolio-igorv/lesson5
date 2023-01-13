
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TaskTableComponent } from './task-table/task-table.component';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  @ViewChild(TaskTableComponent) taskList!: TaskTableComponent;
  public addLine!:string;
  public editValue!:string;
  public check=false;
  public index!:number;
  public editText!:string;
  add(){
    if(this.addLine){
    this.taskList.taskList.push({name:this.addLine,check:false})
    this.addLine="";
    }
  }
  edit(index:number){
    this.check=true;
    setTimeout(()=>{
      this.editText=this.taskList.taskList[index].name;
      this.index=index;
    },1)
  }
  save(){
    if(this.editText){
    this.taskList.taskList[this.index].name=this.editText;    
    this.check=false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

