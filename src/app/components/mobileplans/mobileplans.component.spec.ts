import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileplansComponent } from './mobileplans.component';

describe('MobileplansComponent', () => {
  let component: MobileplansComponent;
  let fixture: ComponentFixture<MobileplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileplansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
