export class Personne {
   // photo: string;
    id: number;
    name: string;
    firstname: string;
    age: number;
    cin: number;
    job: string;
    path: string;
    constructor(//photo: string = '',
      id: number = 0,
      name: string = '',
      firstname: string = '',
      age: number = 0,
      cin: number = 0,
      job: string = '',
      path: string = '') {
    //  this.photo = photo;
      this.id = id;
      this.name = name;
      this.firstname = firstname;
      this.age = age;
      this.cin = cin;
      this.job = job;
      this.path = path;
    }
  }
  