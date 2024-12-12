import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizaOnlineComponent } from './cotiza-online.component';

describe('CotizaOnlineComponent', () => {
  let component: CotizaOnlineComponent;
  let fixture: ComponentFixture<CotizaOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotizaOnlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotizaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
