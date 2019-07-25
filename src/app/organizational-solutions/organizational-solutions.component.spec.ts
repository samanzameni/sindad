import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalSolutionsComponent } from './organizational-solutions.component';

describe('OrganizationalSolutionsComponent', () => {
  let component: OrganizationalSolutionsComponent;
  let fixture: ComponentFixture<OrganizationalSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationalSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
