import { ProductResolver } from './services/product.resolver';
import { TargetComponent } from './demo/demorouting/target/target.component';
import { FourofourComponent } from './fourofour/fourofour.component';
import { DemoroutingComponent } from './demo/demorouting/demorouting.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch :'full'},
  {path : 'home', component : HomeComponent},
  {path : 'demo', component : DemoComponent, children : [
    {path : 'demorouting', component : DemoroutingComponent},
    {path : 'target/:id', resolve : {monArticle : ProductResolver} , component : TargetComponent}
  ]},
  {path : '**', component : FourofourComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
