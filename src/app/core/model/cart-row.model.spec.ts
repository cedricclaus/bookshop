import {CartRow} from "./cart-row.model";
import {Book, JsonBook} from "./book.model";
/**
 * Created by ccc on 15-Mar-17.
 */

describe("CartRowClass",() => {

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

  it("should compute row amount",() => {


   let row = new CartRow(new Book(jsonBook), 3)
    expect(row.amount()).toBeCloseTo(30.30,2);


  })


});
