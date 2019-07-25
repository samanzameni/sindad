import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualServerAndCloudComponent } from './virtual-server-and-cloud.component';

describe('VirtualServerAndCloudComponent', () => {
  let component: VirtualServerAndCloudComponent;
  let fixture: ComponentFixture<VirtualServerAndCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualServerAndCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualServerAndCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
