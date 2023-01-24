import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoArProgramaComponent } from './logo-ar-programa.component';

describe('LogoArProgramaComponent', () => {
  let component: LogoArProgramaComponent;
  let fixture: ComponentFixture<LogoArProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoArProgramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoArProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
