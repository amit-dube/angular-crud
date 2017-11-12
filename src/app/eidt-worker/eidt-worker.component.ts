import { Component, Input, OnInit  } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {Subscription} from 'rxjs/Subscription';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Members } from '../members';
import { WorkerService } from '../services/worker.service';


@Component({
  selector: 'app-eidt-worker',
  templateUrl: './eidt-worker.component.html',
  styleUrls: ['./eidt-worker.component.css'],
  providers : [WorkerService]
})
export class EidtWorkerComponent implements OnInit {
	private memberinfo : Members[];
	private name : string ;
	private memberId: number;
  constructor(private active : ActivatedRoute, private workerService : WorkerService) {}

  ngOnInit() {
		this.memberId = this.active.snapshot.params['id'];
		console.log('This Member id '+ this.memberId);
		//this.memberinfo = this.workerService.getMemberInfo(this.memberId);

		this.workerService.getMemberInfo(this.memberId).subscribe(
		(data) =>{ this.memberinfo = data;	
		});		
	}
}
