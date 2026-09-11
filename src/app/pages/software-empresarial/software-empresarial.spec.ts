import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareEmpresarial } from './software-empresarial';

describe('SoftwareEmpresarial', () => {
  let component: SoftwareEmpresarial;
  let fixture: ComponentFixture<SoftwareEmpresarial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareEmpresarial],
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareEmpresarial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
