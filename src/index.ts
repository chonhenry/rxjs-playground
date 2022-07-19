import { Observable, catchError, of, EMPTY } from "rxjs";

const failingHttpRequest$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error(new Error("Timeout"));
  }, 3000);
});

console.log("App started");

// failingHttpRequest$
//   .pipe(catchError((error) => of("Fallback value")))
//   .subscribe((value) => console.log(value));

failingHttpRequest$
  .pipe(catchError((error) => EMPTY))
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("completed"),
  });
