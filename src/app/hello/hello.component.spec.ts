import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { HelloComponent } from './hello.component';
import { ObservableExampleService } from '../observable-example.service';
import { ExampleServerService } from '../example-server.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } 
  from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';


describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;
  let routerStub: Partial<Router>;
  let observableExampleStub: Partial<ObservableExampleService>

  beforeEach(async(() => {
    routerStub = {
      navigate: () => {
        return null;
      }
    };
    observableExampleStub = {
      fruitSeller: () => {
        return null;
      }
    }
    TestBed.configureTestingModule({
      imports: [HttpClientModule, BrowserAnimationsModule, FormsModule],
      declarations: [ HelloComponent ],
      providers: [{provide: ObservableExampleService, useValue: observableExampleStub},
        ExampleServerService,
        {provide: Router, useValue: routerStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should insert new string', () => {
    component.pushNewString("this-is-example-from-test");
    expect(component.strings.indexOf("this-is-example-from-test")).toBeGreaterThan(-1)
  });

  it('should detect serverMessage change', () => {
    component.serverMessage = "ez egy proba";
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h4').textContent).toBe('ez egy proba');
    expect(fixture.nativeElement.querySelector('#serverMessage').textContent).not.toContain('ez egy proba')
  })
});
