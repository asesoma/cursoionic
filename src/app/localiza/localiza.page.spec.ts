import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizaPage } from './localiza.page';

describe('LocalizaPage', () => {
  let component: LocalizaPage;
  let fixture: ComponentFixture<LocalizaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
