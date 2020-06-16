import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IJobPosting } from './job-posting';
import { IProduct } from './product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productUrl = environment.productUrl;
  private jobPostingUrl = environment.getRandomJobPostingUrl;

  constructor(private http: HttpClient) { }

  getJobPostings() {
    return this.http
      .get<IJobPosting[]>(this.jobPostingUrl)
      .pipe(catchError(this.handleError));
  }

  getProducts() {
    return this.http
      .get<IProduct[]>(this.productUrl)
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err.statusText);
  }
}
