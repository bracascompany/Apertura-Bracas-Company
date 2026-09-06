import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsegatDetalle } from './fsegat-detalle';

describe('FsegatDetalle', () => {
  let component: FsegatDetalle;
  let fixture: ComponentFixture<FsegatDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FsegatDetalle],
    }).compileComponents();

    fixture = TestBed.createComponent(FsegatDetalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
