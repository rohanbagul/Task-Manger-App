import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text:string="";
  day:string="";
  reminder:boolean=false;
  showAddTask:boolean=false;
  subscription:Subscription;
  @Output() onAddTask:EventEmitter<Task>= new EventEmitter();
  onSubmit(){
    // if(!this.text){
    //   alert('Please add a task')
    //   return;
    // }
    // const newTask={
    //   text:this.text,
    //   day:this.day,
    //   reminder:this.reminder
    // };
    // this.onAddTask.emit(newTask);
    // //todo emit event
    // this.text="";
    // this.day="";
    // this.reminder=false;
    console.log("hello")
  }
  constructor(private uiService:UiService) {
    this.subscription= this.uiService.onToggle().subscribe((value)=>this.showAddTask=value);
   }

  ngOnInit(): void {
  }

}
