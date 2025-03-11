import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrasFotosComponent } from './nuestras-fotos.component';

describe('NuestrasFotosComponent', () => {
  let component: NuestrasFotosComponent;
  let fixture: ComponentFixture<NuestrasFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestrasFotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestrasFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
