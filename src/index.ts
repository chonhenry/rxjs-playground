import { Observable, from } from "rxjs";

from(["Alice", "Ben", "Charlie"]).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("completed"),
});

const somePromise = new Promise((resolve, reject) => {
  const isResolved = true;

  if (isResolved) resolve("Resolved");
  reject("Rejected");
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err),
  complete: () => console.log("completed"),
});
