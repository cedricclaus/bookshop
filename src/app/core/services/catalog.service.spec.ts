import {TestBed, inject} from '@angular/core/testing';

import {CatalogService} from './catalog.service';
import {
  HttpModule, Http, ConnectionBackend, Response, Headers, BaseResponseOptions,
  ResponseOptions
} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
const json = [{
  "_id": {
    "$oid": "58428a14734d1d2b0ced5760"
  },
  "isbn10": "2070464237",
  "title": "La Horde du Contrevent",
  "author": "Alain Damasio",
  "price": 10.9,
  "pages": 736,
  "rating": 4,
  "votes": 141,
  "image": "http://www.methotic.com/ressources/sfbooks-images/2070464237.jpg",
  "description": "<p>Ils sont vingt-trois, forment la trente-quatrième <i>Horde du Contrevent</i> et ont entre vingt-sept et quarante-trois ans. Dans un monde balayé par les vents, ils ont été formés depuis l'enfance dans un seul but&nbsp;: parcourir le monde, d'ouest en est, de <i>l'Aval</i> vers <i>l'Amont</i>, à contre-courant face au vent, à travers la plaine, l'eau et les pics glacés, pour atteindre le mythique <i>Extrême-Amont</i>, la source de tous les vents.</p><p>Tous différents mais tous unis, ils forment une horde autonome et solidaire, qui avance dans un seul objectif, luttant constamment contre le vent. Profitant du savoir et de l'expérience de huit siècles d'échecs, on la dit la meilleure et l'ultime <i>Horde</i>, celle qui atteindra enfin l’<i>Extrême-Amont</i>.</p>"
},
  {
    "_id": {
      "$oid": "58428a3c734d1d2b0ced5768"
    },
    "isbn10": "2290071021",
    "title": "Black-out",
    "author": "Connie Willis",
    "price": 9.9,
    "pages": 796,
    "rating": 3,
    "votes": 7,
    "image": "http://www.methotic.com/ressources/sfbooks-images/2290071021.jpg",
    "description": "<p>En 2060, l'histoire n'a plus rien d'une discipline poussiéreuse. Grâce à la maîtrise du voyage dans le temps, les chercheurs de l'université d'Oxford se rendent fréquemment dans le passé, au plus près des événements qu'ils étudient - la guerre de Sécession, l'attaque de Pearl Harbour, les attentats du World Trade Center - pour collecter des données toujours plus précises. Mais à trop vouloir s'approcher du feu de l'action, on finit par s'y brûler. C'est ce qu'apprendront à leurs dépens les jeunes historiens envoyés au coeur de l'horreur de la Seconde Guerre mondiale. Car à Londres, en 1940, les bombes nazies n'ont plus rien d'une abstraction.</p>"
  },
  {
    "_id": {
      "$oid": "58428a57734d1d2b0ced5770"
    },
    "isbn10": "207046430X",
    "title": "Spin",
    "author": "Robert Charles Wilson",
    "price": 9.0,
    "pages": 624,
    "rating": 4,
    "votes": 41,
    "image": "http://www.methotic.com/ressources/sfbooks-images/207046430X.jpg",
    "description": "<p>La Terre, dans un futur proche. Par une nuit d'octobre, le ciel devient soudainement d'un noir opaque et les étoiles paraissent s'être dérobées. Bientôt l'humanité s'aperçoit qu'elle est entourée d'une barrière, que la postérité appellera « Spin », à l'extérieur de laquelle le temps s'écoule cent millions de fois plus vite que sur Terre. La transformation du Soleil en géante rouge n'est plus qu'une question de décennies, condamnant la planète à une destruction certaine. Tyler Dupree, Jason Lawton et sa sœur jumelle Diane ont été témoins de la disparition des étoiles. Jason n'aura plus qu'un seul but : trouver qui a édifié cette barrière et dans quel but. Une quête aussi aveugle que déterminée, dans laquelle Tyler et Diane joueront un rôle déterminant.</p>"
  }]


describe('CatalogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        CatalogService,
        {provide: ConnectionBackend, useClass: MockBackend}

      ]
    });
  });

  beforeEach((inject([ConnectionBackend], (mockBackent: MockBackend) => {
    mockBackent.connections.subscribe(
      (mockConnection: MockConnection) =>
        mockConnection.mockRespond(
          new Response(
            new ResponseOptions({
              status: 200,
              body: JSON.stringify(json)
            })))
    )
  })))

  fit('should return a list', inject([CatalogService], (service: CatalogService) => {
    expect(service).toBeTruthy();
    service.getList().subscribe(books => {
      // expect()
    });
  }));
});
