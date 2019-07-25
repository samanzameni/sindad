import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaincheckerComponent } from './domainchecker.component';

describe('DomaincheckerComponent', () => {
  let component: DomaincheckerComponent;
  let fixture: ComponentFixture<DomaincheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomaincheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaincheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
