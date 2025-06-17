/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HamburguesaService } from './hamburguesa.service';

describe('Service: Hamburguesa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HamburguesaService]
    });
  });

  it('should ...', inject([HamburguesaService], (service: HamburguesaService) => {
    expect(service).toBeTruthy();
  }));
});
