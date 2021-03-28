import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  message='bonjour je suis le premier service';

  constructor(private loggerserv : LoggerService) {}
   logger(){
     this.loggerserv.logger(this.message);
   }
}
