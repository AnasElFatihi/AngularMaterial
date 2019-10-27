import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzDetailsComponent } from './adz-details.component';

describe('AdzDetailsComponent', () => {
  let component: AdzDetailsComponent;
  let fixture: ComponentFixture<AdzDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
