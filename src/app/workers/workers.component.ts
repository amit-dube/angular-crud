import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../services/worker.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css'],
  providers : [WorkerService]
})
export class WorkersComponent implements OnInit {
	private worker : any = {};
	private workers : any[];
	private btnStt = 1;
	private add_msg : string = '';
  constructor(private workerService : WorkerService) { }

  ngOnInit() {
  this.getMembers(); 
  }

  
 getMembers(){
	  this.workerService.getMembers().subscribe(
	  (data)=>{
		  this.workers = data;
		  const keyArr = Object.keys(data);
		  this.workers = [];
		 for(var i=0;i<keyArr.length;i++)
		 {
			 this.workers.push({
			 key : keyArr[i],
			 name : data[keyArr[i]].name,
			 salary : data[keyArr[i]].salary,
			 designation : data[keyArr[i]].designation,
			 worker_id : data[keyArr[i]].id
			 }
			 
			 )			
		 }
	  },
	  (error)=>console.log(error)
	  )
  }
}
