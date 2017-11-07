import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkerService } from '../services/worker.service';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-eidt-worker',
  templateUrl: './eidt-worker.component.html',
  styleUrls: ['./eidt-worker.component.css'],
  providers : [WorkerService]
})
export class EidtWorkerComponent implements OnInit {
	private memberinfo : any[];
	private name : string ;
  constructor(private active : ActivatedRoute, private workerService : WorkerService) {}

  ngOnInit() {
		let id = this.active.snapshot.params['id'];
		console.log('This Member id '+ id);
		//this.memberinfo = this.workerService.getMemberInfo(id);
		//console.log(this.memberinfo);
		this.workerService.getMemberInfo(id).subscribe(
		(data) =>{ this.memberinfo = data;
		
		}
		
		);
		
	}
}
