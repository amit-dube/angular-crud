import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
@Injectable()

export class WorkerService{
	
	constructor(private http : Http){ //dependency Injection in Angular 2 
		
	}

	/* private membersArr: any = [
		{id : 1, name : 'Kushwa', designation : 'Collector'},
		{id : 2, name : 'Sharma', designation : 'Inspector'},
		{id : 3, name : 'Pathak', designation : 'Principal'}	
	];
	
	getMembers(){
		return this.membersArr;	
	} */
	

	getMembers() {
    return this.http.get('http://localhost/test/angular_members.php').map(res=>res.json());
  }
  
  getMemberInfo(id : number){
	return this.http.get('http://localhost/test/angular_members.php?flag=edit&memid='+id).map(res=>res.json());
  }

}