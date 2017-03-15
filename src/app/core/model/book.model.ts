/**
 * Created by ccc on 14-Mar-17.
 */
export interface JsonBook {
  _id: {
    $oid: string;
  };
  isbn10: string;
  title: string;
  author: string;
  price: number;
  pages: number;
  rating: number;
  votes: number;
  image: string;
  description: string;
}

export class Book{
  get id() {return this.json._id.$oid;}
  get title(){return this.json.title;}
  get author(){return this.json.author;}
  get price(){return this.json.price;}
  get pages(){return this.json.pages;}
  get rating(){return this.json.rating;}
  get image(){return this.json.image;}
  get description(){return this.json.description;}

  constructor(private json : JsonBook){}

  equals(b:Book){
    return this.id == b.id;
  }
}



