import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhwSavedSetsComponent } from './mhw-saved-sets.component';

describe('MhwSavedSetsComponent', () => {
  let component: MhwSavedSetsComponent;
  let fixture: ComponentFixture<MhwSavedSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhwSavedSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhwSavedSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
