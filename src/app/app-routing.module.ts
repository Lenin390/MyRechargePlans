import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MobileplansComponent } from './components/mobileplans/mobileplans.component';

const routes: Routes = [{
  path:'', component:HomeComponent,
},
{
  path:'mobileplans', component:MobileplansComponent,
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
