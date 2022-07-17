import { Observable } from "rxjs";

const intervale$ = new Observable<number>((subscriber) => {
  let counter = 1;

  const intervalId = setInterval(() => {
    console.log("Emmited", counter);
    subscriber.next(counter++);
  }, 2000);

  return () => {
    clearInterval(intervalId);
  };
});

const subscription = intervale$.subscribe((value) => console.log(value));

setTimeout(() => {
  console.log("unsubscribe");
  subscription.unsubscribe();
}, 7000);
