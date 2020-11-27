/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PicklesComponent } from './pickles.component';

describe('PicklesComponent', () => {
  let component: PicklesComponent;
  let fixture: ComponentFixture<PicklesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PicklesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicklesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
