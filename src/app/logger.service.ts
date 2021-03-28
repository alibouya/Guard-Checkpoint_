import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() { }

  logger(message: any) {
    console.log(message);
  }

  info(message: any) {
    console.info(message);
  }
}
