import { Component, Input, OnInit  } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {Subscription} from 'rxjs/Subscription';
import { Members } from '../members';
import { WorkerService } from '../services/worker.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css'],
  providers : [WorkerService]
})
export class WorkersComponent implements OnInit {
	private worker : any = {};
	private workers : Members[];
	private btnStt = 1;
	private add_msg : string = '';
  constructor(private workerService : WorkerService) { }

  ngOnInit() {
  	this.getMembers(); 
  }

  
 getMembers(): void {
	  this.workerService.getMembers().subscribe(data => {
		  this.workers = data;
	  }, err => {
        console.error('ERROR', err);
       });
  }

}
