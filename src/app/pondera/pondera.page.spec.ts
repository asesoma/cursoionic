import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PonderaPage } from './pondera.page';

describe('PonderaPage', () => {
  let component: PonderaPage;
  let fixture: ComponentFixture<PonderaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonderaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonderaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
