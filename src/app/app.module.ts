import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WorkersComponent } from './workers/workers.component';
import { AddWorkerComponent } from './add-worker/add-worker.component';
import { EidtWorkerComponent } from './eidt-worker/eidt-worker.component';
import {WorkerService} from './services/worker.service';
import {Routes,RouterModule} from '@angular/router';

const workRoter : Routes = [
{
	path : '',
	component : WorkersComponent
},
{
	path : 'addworker',
	component : AddWorkerComponent
},
{
	path : 'memberedit/:id',
	component : EidtWorkerComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    AddWorkerComponent,
    EidtWorkerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(workRoter)
  ],
  providers: [WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
