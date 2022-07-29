import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string= 'Task Manager';
  showAddTask:boolean=false;
  subscription:Subscription;
  toggleAddTask(){
    this.uiService.toggleAddTask()
  }
  constructor(private uiService:UiService, private router:Router) {
    this.subscription=this.uiService.onToggle().subscribe(value=>this.showAddTask=value);
   }

  ngOnInit(): void {
  }
  hasRoute(route:string){
    return this.router.url ==route;
  }

}
