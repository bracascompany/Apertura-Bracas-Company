import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentosDetalle } from './segmentos-detalle';

describe('SegmentosDetalle', () => {
  let component: SegmentosDetalle;
  let fixture: ComponentFixture<SegmentosDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentosDetalle],
    }).compileComponents();

    fixture = TestBed.createComponent(SegmentosDetalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
