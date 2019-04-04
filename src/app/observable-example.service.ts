import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ObservableExampleService {

  myObservable = of('alma', 'körte', 'ananász')

  myObserver = {
    next: x => console.log("Az Observer értéket kapott: ", x),
    error: err => console.log("Observer hiba!!!", err),
    complete: () => console.log("Az Observer végzett")
  }

  fruitSeller(observer) {
    observer.next("alma");
    observer.next("körte");
    observer.next("ananász");
    observer.error("banán");
    observer.next("kiwi");
    observer.complete();

    return { unsubscribe() {}}
  }

  sendSomeFruits(observer, arr, idx) {
    return setTimeout(() => {
      observer.next(arr[idx]);
      if(idx === arr.length-1) {
        observer.complete();
      } else {
        this.sendSomeFruits(observer, arr, ++idx);
      }
    }, 1000);
  }

  multicasting() {
    const gyumolcsLista = ["kiwi", "ananász", "alma", "narancs"];
    const observers = [];
    let timeoutId;
    return (observer) => {
      observers.push(observer);
      if(observers.length === 1) {
        timeoutId = this.sendSomeFruits({
          next(val) {
            observers.forEach(obs => obs.next(val));
          },
          complete() {
            observers.slice(0).forEach(obs => obs.complete());
          }
        }, gyumolcsLista, 0)
      }
      return {
        unsubscribe() {
          observers.splice(observers.indexOf(observer),1);
          if(observers.length === 0) {
            clearTimeout(timeoutId);
          }
        }
      }
    }
  }

  constructor() { }

  callObserver() {
    //this.myObservable.subscribe(this.myObserver);

    /*const gyumolcs = new Observable(this.fruitSeller);
    gyumolcs.subscribe(data => 
      console.log("Inline observer adatot kapott", data),
      error => console.log("Inline observer hibat kapott", error),
      () => console.log("Inline observer végzett"));*/

    //gyumolcs.subscribe(this.myObserver);

    const multicastVasarlas = new Observable(this.multicasting());
    multicastVasarlas.subscribe({
      next(data) { console.log("Az 1. observer adatot kapott", data) },
      complete() { console.log("Az 1. observer veget ert") }
    })
    setTimeout(() => {
      multicastVasarlas.subscribe({
        next(data) { console.log("A 2. observer adatot kapott", data) },
        complete() { console.log("A 2. observer veget ert") }
      })
    }, 3000)
  }


}
