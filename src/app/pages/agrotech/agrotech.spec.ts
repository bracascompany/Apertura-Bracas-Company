import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agrotech } from './agrotech';

describe('Agrotech', () => {
  let component: Agrotech;
  let fixture: ComponentFixture<Agrotech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Agrotech],
    }).compileComponents();

    fixture = TestBed.createComponent(Agrotech);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
