import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } 
  from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { ErrorComponent } from './error/error.component';
import { SmallerWorldComponent } from './smaller-world/smaller-world.component';
import { CompositContentComponent } from './composit-content/composit-content.component';

import { ObservableExampleService } from './observable-example.service';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRegistrationReactiveComponent } from './user-registration-reactive/user-registration-reactive.component';
import { PrivilegeNPipe } from './privilege-n.pipe';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { TranslatorPipePipe } from './translator-pipe.pipe';
import { LoginComponent } from './login/login.component';

import { MockServerInterceptorService } from "./mock-server-interceptor.service";
import { HeaderInterceptorService } from "./header-interceptor.service";
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WorldComponent,
    ErrorComponent,
    SmallerWorldComponent,
    CompositContentComponent,
    UserRegistrationComponent,
    UserRegistrationReactiveComponent,
    PrivilegeNPipe,
    PipeDemoComponent,
    TranslatorPipePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ObservableExampleService,
    {provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptorService,
      multi: true},
    {provide: HTTP_INTERCEPTORS, 
      useClass: MockServerInterceptorService, 
      multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
