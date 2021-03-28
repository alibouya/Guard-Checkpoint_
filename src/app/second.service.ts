import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn:'root'
}
  
)
export class SecondService {

  constructor(private loggerService : LoggerService) { }
  sauCc(){
    this.loggerService.logger('Cc');
  }
}
