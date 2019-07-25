import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebHostingComponent } from './web-hosting.component';

describe('WebHostingComponent', () => {
  let component: WebHostingComponent;
  let fixture: ComponentFixture<WebHostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebHostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
