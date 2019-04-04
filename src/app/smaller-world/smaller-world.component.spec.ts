import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallerWorldComponent } from './smaller-world.component';

describe('SmallerWorldComponent', () => {
  let component: SmallerWorldComponent;
  let fixture: ComponentFixture<SmallerWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallerWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallerWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
