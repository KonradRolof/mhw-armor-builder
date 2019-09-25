import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhwSelectPopComponent } from './mhw-select-pop.component';

describe('MhwSelectPopComponent', () => {
  let component: MhwSelectPopComponent;
  let fixture: ComponentFixture<MhwSelectPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhwSelectPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhwSelectPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
