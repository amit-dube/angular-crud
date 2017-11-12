import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';   
import { Members } from '../members';

@Injectable()
export class WorkerService{
	
	constructor(private http : Http){ //dependency Injection in Angular 2 
		
	}

	 private membersArr: Members[] = [
		{id : 1, name : 'Kushwa', salary:10000, designation : 'Collector'},
		{id : 2, name : 'Sharma', salary:15000, designation : 'Inspector'},
		{id : 3, name : 'Pathak', salary:18000, designation : 'Principal'}	
	];
	
	getMembers(): Observable<Members[]> {
		return of(this.membersArr);	
	} 
	

/*	getMembers() {
    return this.http.get('http://localhost/test/angular_members.php').map(res=>res.json());
  } */
  
  getMemberInfo(id : number): Observable<Members[]>{
	//return this.http.get('http://localhost/test/angular_members.php?flag=edit&memid='+id).map(res=>res.json());
	return of(this.membersArr.filter(x => x.id == id));
  }

}