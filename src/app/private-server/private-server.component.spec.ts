import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateServerComponent } from './private-server.component';

describe('PrivateServerComponent', () => {
  let component: PrivateServerComponent;
  let fixture: ComponentFixture<PrivateServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
