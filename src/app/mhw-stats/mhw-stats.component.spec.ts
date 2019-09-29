import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhwStatsComponent } from './mhw-stats.component';

describe('MhwStatsComponent', () => {
  let component: MhwStatsComponent;
  let fixture: ComponentFixture<MhwStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhwStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhwStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
