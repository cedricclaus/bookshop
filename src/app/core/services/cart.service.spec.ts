import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';
import {JsonBook, Book} from "../model/book.model";
import {CartRow} from "../model/cart-row.model";

describe('CartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });
  });

  it('should ...', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));

  const jsonBook: JsonBook = {
    _id: {
      $oid: "58428aca734d1d2b0ced578e"
    },
    isbn10: "2070437078",
    title: "Le Déchronologue",
    author: "Stéphane Beauverger",
    price: 10.10,
    pages: 560,
    rating: 4,
    votes: 34,
    image: "http://www.methotic.com/ressources/sfbooks-images/2070437078.jpg",
    description: "<p>« Je suis le capitaine Henri Villon, et je mourrai bientôt. Non, ne ricanez pas en lisant cette sentencieuse présentation. N’est-ce pas l’ultime privilège d’un condamné d’annoncer son trépas comme il l’entend ? C’est mon droit. Et si vous ne me l’accordez pas, alors disons que je le prends ». Ainsi débute le récit du capitaine Villon. Il lutte avec son équipage de pirates pour préserver sa liberté dans un monde déchiré par d’impitoyables perturbations temporelles. Son arme : le Déchronologue, un navire dont les canons tirent du temps.</p>"
  };


  let rows : CartRow[] = ["aa","bb","cc"].map( st => {
    let jbook = JSON.parse(JSON.stringify(jsonBook))
    jbook.title = st
    return jbook
  }).map(jbook => new CartRow(new Book(jbook),1))

  it('should remove a book', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
    service.rows = rows;
    let row = rows[1];
    service.remove(row)
    expect(service.rows.length).toEqual(2);
    expect(service.rows[0]).toEqual(rows[0]);
    expect(service.rows[1]).toEqual(rows[2]);

  }));

  it("should increment quantity if we add same book", inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
    let myRows  =  ["1","2","3"].map( st => {
      let jbook = JSON.parse(JSON.stringify(jsonBook))
      jbook._id = {$oid:st}
      return jbook
    }).map(jbook => new CartRow(new Book(jbook),1));
    service.rows = myRows
    expect(service.rows.length).toEqual(3);
    let row : CartRow = myRows[1];
    service.add(row.book)
    expect(service.rows[1].quantity).toEqual(2);



  }));


});
