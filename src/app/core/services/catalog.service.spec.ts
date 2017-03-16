import {TestBed, inject} from "@angular/core/testing";
import {CatalogService} from "./catalog.service";
import {
  ConnectionBackend,
  Response,
  ResponseOptions,
  Http,
  BaseRequestOptions,
  RequestOptions,
  RequestMethod
} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {Book} from "../model/book.model";

const json = [
  {
    _id: {$oid: "58428a14734d1d2b0ced5760"}, isbn10: "2070464237",
    title: "La Horde du Contrevent", author: "Alain Damasio",
    price: 10.9, pages: 736, rating: 4, votes: 141,
    image: "http://www.methotic.com/ressources/sfbooks-images/2070464237.jpg",
    description: "Ils sont vingt-trois"
  },
  {
    _id: {$oid: "58428a3c734d1d2b0ced5768"}, isbn10: "2290071021",
    title: "Black-out", author: "Connie Willis",
    price: 9.9, pages: 796, rating: 3, votes: 7,
    image: "http://www.methotic.com/ressources/sfbooks-images/2290071021.jpg",
    description: "En 2060, l'histoire n'a plus rien"
  },
  {
    _id: {$oid: "58428a57734d1d2b0ced5770"}, isbn10: "207046430X",
    title: "Spin", author: "Robert Charles Wilson",
    price: 9, pages: 624, rating: 4, votes: 41,
    image: "http://www.methotic.com/ressources/sfbooks-images/207046430X.jpg",
    description: "La Terre, dans un futur proche."
  }
];

// describe('CatalogService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [],
//       providers: [
//         CatalogService,
//         Http,
//         {provide: ConnectionBackend, useClass: MockBackend},
//         {provide: RequestOptions, useClass: BaseRequestOptions},
//       ]
//     });
//   });
//   beforeEach(inject([ConnectionBackend], (mockBackend: MockBackend) => {
//     mockBackend.connections.subscribe(
//       (mockConnection: MockConnection) =>
//         mockConnection.mockRespond(new Response(new ResponseOptions({
//           status: 200,
//           body: JSON.stringify(json)
//         })))
//     )
//   }));
//
//   it('should retreive books list', (done) => {
//
//     inject([CatalogService], (service: CatalogService) => {
//       service.getList().subscribe(books => {
//         expect(books).toEqual(json.map(jsonBook => new Book(jsonBook)));
//         done();
//       });
//     })();
//
//   });
// });


interface ExpectedRequest {
  method: RequestMethod;
  url: string;
  data?: any;
  responseStatus?: number;
  responseData: any;
}

describe('CatalogService', () => {
  let expectedRequests: ExpectedRequest[] = [];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CatalogService,
        Http,
        {provide: ConnectionBackend, useClass: MockBackend},
        {provide: RequestOptions, useClass: BaseRequestOptions},
      ]
    });
  });
  beforeEach(inject([ConnectionBackend], (mockBackEnd: MockBackend) => {
    let requestIndex = 0;
    mockBackEnd.connections.subscribe(
      (mockConnection: MockConnection) => {
        let expectedRequest = expectedRequests[requestIndex++];
        expect(mockConnection.request.method).toEqual(expectedRequest.method,
          `wrong method, actual method was ${RequestMethod[mockConnection.request.method]}, expected: ${RequestMethod[expectedRequest.method]}`);
        expect(mockConnection.request.url).toEqual(expectedRequest.url, "wrong url");
        if (expectedRequest.method == RequestMethod.Post
          || expectedRequest.method == RequestMethod.Put) {
          expect(mockConnection.request.json()).toEqual(expectedRequest.data);
        }
        mockConnection.mockRespond(new Response(new ResponseOptions({
          status: expectedRequest.responseStatus || 200,
          body: JSON.stringify(expectedRequest.responseData)
        })));
      }
    );
  }));

  fit('should retreive books list', inject([CatalogService], (service: CatalogService) => {
    expectedRequests = [
      {
        method: RequestMethod.Get,
        url: 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i',
        responseData: json
      }
    ];
    service.getList().subscribe(
      result => {
        expect(result).toEqual(json.map(jsonBook => new Book(jsonBook)));
      }
    );
  }));
});
