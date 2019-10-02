import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhwFooterComponent } from './mhw-footer.component';

describe('MhwFooterComponent', () => {
  let component: MhwFooterComponent;
  let fixture: ComponentFixture<MhwFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhwFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhwFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
