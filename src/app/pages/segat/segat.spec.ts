import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Segat } from './segat';

describe('Segat', () => {
  let component: Segat;
  let fixture: ComponentFixture<Segat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Segat],
    }).compileComponents();

    fixture = TestBed.createComponent(Segat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
