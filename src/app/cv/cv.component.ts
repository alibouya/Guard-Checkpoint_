// import { Component, OnInit } from '@angular/core';
// import { LoggerService } from '../logger.service';
// import { SecondService } from '../second.service';
// import { ServiceService } from '../service.service';

// @Component({
//   selector: 'app-cv',
//   templateUrl: './cv.component.html',
//   styleUrls: ['./cv.component.css'],
  
  
// })
// export class CvComponent implements OnInit {
//   constructor(private loggerService: LoggerService, 
//     private firstservice : ServiceService,
//     private second : SecondService) { 

//   }
//   ngOnInit(): void {
//     this.loggerService.logger('je suis un nouveau service')
//     this.loggerService.info('voila');
//     this.firstservice.logger();
//     this.second.sauCc();
//   }

// }
import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
   color="pink";
  constructor(private Cvservice:CvService) { }

  ngOnInit(): void {
  }
}