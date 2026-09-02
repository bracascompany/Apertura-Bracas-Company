import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracasCompanyBot } from './bracas-company-bot';

describe('BracasCompanyBot', () => {
  let component: BracasCompanyBot;
  let fixture: ComponentFixture<BracasCompanyBot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BracasCompanyBot],
    }).compileComponents();

    fixture = TestBed.createComponent(BracasCompanyBot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
