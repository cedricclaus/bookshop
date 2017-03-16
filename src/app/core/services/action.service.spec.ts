import { TestBed, inject } from '@angular/core/testing';

import { ActionService } from './action.service';
import {CartService} from "./cart.service";
import {Router} from "@angular/router";

class MockRouter{
  navigate(array){

  }
}


describe('ActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [],
      providers: [ActionService,CartService,{provide : Router, useClass : MockRouter}]
    });
  });

  it('should ...', inject([ActionService,CartService,Router], (action: ActionService, cart : CartService , router : Router) => {
    spyOn(cart,'add');
    spyOn(router,'navigate');
    action.buyBook(null);
    expect(cart.add).toHaveBeenCalledTimes(1);
    expect(router.navigate).toHaveBeenCalledWith(["/cart/content"]);
  }));
});
