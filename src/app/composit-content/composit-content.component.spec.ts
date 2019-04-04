import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositContentComponent } from './composit-content.component';

describe('CompositContentComponent', () => {
  let component: CompositContentComponent;
  let fixture: ComponentFixture<CompositContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
