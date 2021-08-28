import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamainingTimeComponent } from './ramaining-time.component';

describe('RamainingTimeComponent', () => {
  let component: RamainingTimeComponent;
  let fixture: ComponentFixture<RamainingTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamainingTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamainingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
