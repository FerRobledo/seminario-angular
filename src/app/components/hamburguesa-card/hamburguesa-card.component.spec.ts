/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HamburguesaCardComponent } from './hamburguesa-card.component';

describe('HamburguesaCardComponent', () => {
  let component: HamburguesaCardComponent;
  let fixture: ComponentFixture<HamburguesaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburguesaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburguesaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
