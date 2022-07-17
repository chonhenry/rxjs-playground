import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

// cold observable
const ajax$ = ajax<any>("https://random-data-api.com/api/name/random_name");

ajax$.subscribe((data) => console.log("Sub 1:", data.response.first_name));
ajax$.subscribe((data) => console.log("Sub 2:", data.response.first_name));
ajax$.subscribe((data) => console.log("Sub 3:", data.response.first_name));

// hot observable
const helloButton = document.querySelector("button");

const helloClick$ = new Observable<MouseEvent>((subscriber) => {
  helloButton.addEventListener("click", (event) => {
    subscriber.next(event);
  });
});

helloClick$.subscribe((event) =>
  console.log("Sub 1:", event.type, event.x, event.y)
);

setTimeout(() => {
  console.log("Subscription 2 starts");
  helloClick$.subscribe((event) => {
    console.log("Sub 2:", event.type, event.x, event.y);
  });
}, 5000);
