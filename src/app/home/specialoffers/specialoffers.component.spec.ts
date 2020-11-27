/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpecialOffersComponent } from './specialoffers.component';

describe('SpecialOffersComponent', () => {
  let component: SpecialOffersComponent;
  let fixture: ComponentFixture<SpecialOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialOffersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
