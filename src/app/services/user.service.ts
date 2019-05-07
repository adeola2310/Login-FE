import { Injectable } from '@angular/core';
import {ApiHandlerService} from './api-handler.service';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public API_URL = environment.API_URL;

  constructor(private apiHandlerService: ApiHandlerService) { }

  /**
   *
   * @param userData
   * This method creates a new user
   */

  public  createUser(userData) {
    return this.apiHandlerService.post(`${this.API_URL}/register`, userData);
  }

  /**
   *
   * @param userData
   * This method  logs in a user
   */

public logUser(userData) {
  return this.apiHandlerService.post(`${this.API_URL}/login`, userData);
  }



}
