import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeWalletComponent } from './recharge-wallet.component';

describe('RechargeWalletComponent', () => {
  let component: RechargeWalletComponent;
  let fixture: ComponentFixture<RechargeWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechargeWalletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechargeWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
