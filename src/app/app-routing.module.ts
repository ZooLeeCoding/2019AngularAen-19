import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { ErrorComponent } from './error/error.component';
import { SmallerWorldComponent } from './smaller-world/smaller-world.component';
import { CompositContentComponent } from './composit-content/composit-content.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {path: '', component: UserRegistrationComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'world/:name', component: WorldComponent, children: [
    {path: '', component: ErrorComponent},
    {path: 'smaller', component: SmallerWorldComponent}
  ]},

  {path: 'content', component: CompositContentComponent, outlet: "compose"},

  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
