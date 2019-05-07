import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  constructor(private http: HttpClient) {
  }

  public get(url) {
    return this.http.get(url);
  }


  public put(url, data) {
    return this.http.put(url, data);
  }


  public post(url, data) {
    return this.http.post(url, data);
  }

}
