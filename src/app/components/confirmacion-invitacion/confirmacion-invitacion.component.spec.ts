import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionInvitacionComponent } from './confirmacion-invitacion.component';

describe('ConfirmacionInvitacionComponent', () => {
  let component: ConfirmacionInvitacionComponent;
  let fixture: ComponentFixture<ConfirmacionInvitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionInvitacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacionInvitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
