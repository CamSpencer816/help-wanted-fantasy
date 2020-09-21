import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IRefinancingProduct } from './refinancing-product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private getRefinancingProductUrl = environment.getRandomJobPostingUrl;

  constructor(private http: HttpClient) { }

  getRefinancingProduct() {
    return this.http
      .get<IRefinancingProduct[]>(this.getRefinancingProductUrl)
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err.statusText);
  }
}
