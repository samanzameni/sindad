import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainAndSSLComponent } from './domain-and-ssl.component';

describe('DomainAndSSLComponent', () => {
  let component: DomainAndSSLComponent;
  let fixture: ComponentFixture<DomainAndSSLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainAndSSLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainAndSSLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
