import { Injectable } from '@angular/core';
import {Employee} from './employee.model';

@Injectable()
export class AboutUsService {
  proggeAbWorkers: Employee[] = [
    {
      firstName : 'Elvin',
      lastName : 'Granat',
      imageUrl: 'http://graph.facebook.com/' + 677603768 + '/picture?type=large',
      role: 'Developer',
      linkedinUrl: 'https://www.linkedin.com/in/elvin-granat-772461a8/',
      githubUrl: 'https://github.com/vonElfvin',
    },
    {
      firstName : 'Oscar',
      lastName : 'Ek',
      imageUrl : 'http://graph.facebook.com/' + 100000267404431 + '/picture?type=large',
      role: 'Developer',
      linkedinUrl: 'https://www.linkedin.com/in/oscar-ek-426241103/',
      githubUrl: 'https://github.com/ProffOak',
    },
    {
      firstName : 'Linus',
      lastName : 'Falk',
      imageUrl : 'http://graph.facebook.com/' + 1677080752 + '/picture?type=large',
      role: 'Developer',
      linkedinUrl: 'https://www.linkedin.com/in/linus-falk-5b96ab141/',
      githubUrl: 'https://github.com/falklinus',
    }
  ];
  constructor() {}
  getEmployees(): Employee[] {
    return this.proggeAbWorkers;
  }

}
