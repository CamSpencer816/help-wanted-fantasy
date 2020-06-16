import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IProduct } from './product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productUrl = environment.productUrl;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http
      .get<IProduct[]>(this.productUrl)
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err.statusText);
  }
}
