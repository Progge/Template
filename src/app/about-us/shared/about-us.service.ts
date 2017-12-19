import { Injectable } from '@angular/core';

@Injectable()
export class AboutUsService {
  proggeAbWorkers = [
    {
      name : 'Elvin',
      surname : 'Granat',
      imageURL : 'https://media.licdn.com/media/AAEAAQAAAAAAAAliAAAAJGMxN2U4NzA0LTUzMjEtNDk1NC04NWFlLTU1ZjU5ZjE5YzY0Nw.jpg'
    },
    {
      name : 'Oscar',
      surname : 'Ek',
      imageURL : 'https://media.licdn.com/media/AAEAAQAAAAAAAAUXAAAAJGQ2YzZjZmNhLWJlYWUtNDA5ZS1hZWVkLTUxYzA3MGI4NzA3Ng.jpg'
    },
    {
      name : 'Linus',
      surname : 'Falk',
      imageURL : 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAAweAAAAJGYzMzViNGIxLTUyZjctNDU3Ni' +
      '04M2FhLWQ2MmQxZmIwNmVhNg.jpg'
    }
  ];
  constructor() {}
  getWorkers(){
    return this.proggeAbWorkers;
  }

}
