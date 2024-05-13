import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, share, switchMap, tap } from 'rxjs/operators';
import {environment} from "../../environments/environment";

@Injectable()
export class GoogleMapsService {
  public loaded: boolean = false;
  public observable: Observable<boolean> | undefined;

  constructor(private http: HttpClient) {}

  load(): Observable<boolean> {
    if (this.loaded) return of(true);
    if (!this.observable) {
      this.observable = this.http
        .jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.apiKey}&language=en`, 'callback')
        .pipe(
          switchMap(() => of(true)),
          share(),
          catchError((err) => {
            console.error(err);
            return of(false);
          }),
          tap({
            complete: () => {
              this.loaded = true;
              this.observable = undefined;
            },
          })
        );
    }
    return this.observable;
  }
}
