import { Observable, map } from "rxjs";

const someObservable$ = new Observable<number>((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.next(4);
  subscriber.next(5);
  subscriber.next(6);
  subscriber.next(7);
  subscriber.next(8);
  subscriber.next(9);
  subscriber.next(10);
});

const timesTen$ = someObservable$.pipe(map((number) => number * 10));

timesTen$.subscribe((value) => console.log(value));
