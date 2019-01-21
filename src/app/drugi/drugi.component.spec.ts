import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugiComponent } from './drugi.component';

describe('DrugiComponent', () => {
  let component: DrugiComponent;
  let fixture: ComponentFixture<DrugiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
