import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhwCurrentSetComponent } from './mhw-current-set.component';

describe('MhwCurrentSetComponent', () => {
  let component: MhwCurrentSetComponent;
  let fixture: ComponentFixture<MhwCurrentSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhwCurrentSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhwCurrentSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
