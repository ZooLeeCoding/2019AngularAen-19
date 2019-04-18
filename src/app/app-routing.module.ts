import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { ErrorComponent } from './error/error.component';
import { SmallerWorldComponent } from './smaller-world/smaller-world.component';
import { CompositContentComponent } from './composit-content/composit-content.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { UserRegistrationReactiveComponent } from './user-registration-reactive/user-registration-reactive.component';
import { LoginComponent } from './login/login.component';

import { MyAuthGuard } from './my-auth.guard';

const routes: Routes = [
  //{path: '', component: UserRegistrationReactiveComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'hello', component: HelloComponent, canActivate: [MyAuthGuard]},
  {path: 'world/:name', component: WorldComponent, canActivate: [MyAuthGuard],
   children: [
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
