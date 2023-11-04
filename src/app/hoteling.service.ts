import { Injectable } from '@angular/core';
import { Hotellocation } from './hotellocation';
@Injectable({
  providedIn: 'root'
})
export class HotelingService {
  hotellocation: Hotellocation[] = [{
    id: 0,
    name: 'Taj-coramandal',
    city: 'chennai',
    state: 'Tamil Nadu',
    photo: '/assets/taj.avif',
    availablerooms: 99,
    wifi: true,
    laundry: false,
  },
  {
    id: 1,
    name: 'Oberoi Udaivilas',
    city: 'Udaipur',
    state: 'Rajasthan',
    photo: "/assets/oberoi-udaivilas.jpeg",
    availablerooms: 8,
    wifi: true,
    laundry: true
  },
  {
    id: 2,
    name: 'Amanbagh',
    city: 'Ajabgarh',
    state: 'Rajasthan',
    photo: '/assets/Amanbagh.jpeg',
    availablerooms: 67,
    wifi: false,
    laundry: false
  },
  {
    id: 3,
    name: 'Taj lake palace',
    city: 'Udaipur',
    state: 'Rajasthan',
    photo: '/assets/taj lake palace.jpeg',
    availablerooms: 10,
    wifi: true,
    laundry: false
  },
  {
    id: 4,
    name: 'Oberoi Amarvilas',
    city: 'Agra',
    state: 'Uttarpradesh',
    photo: '/assets/oberoi-Amarvilas.jpeg',
    availablerooms: 1,
    wifi: true,
    laundry: false
  },
  {
    id: 5,
    name: 'Taj Falaknuma Palace',
    city: 'Hyderabad',
    state: 'Telangana',
    photo: '/assets/Taj-falaknuma-palace.jpeg',
    availablerooms: 2,
    wifi: true,
    laundry: true
  },
  {
    id: 6,
    name: 'Umaid Bhawan Palace',
    city: 'Jodhpur',
    state: 'Rajasthan',
    photo: '/assets/umaid-bhawan-palace.jpeg',
    availablerooms:5,
    wifi: true,
    laundry: true
  },
  {
    id: 7,
    name: 'the oberoi',
    city: 'New Delhi',
    state: 'New Delhi',
    photo: '/assets/oberoi.jpeg',
    availablerooms: 2,
    wifi: true,
    laundry: true
  },
  {
    id: 8,
    name: 'Aman-i-khas',
    city: 'Rahantanbore National Park',
    state: 'Rajasthan',
    photo: '/assets/Aman-i-khas.jpeg',
    availablerooms: 25,
    wifi: false,
    laundry: false
  },
  {
    id: 9,
    name: 'LeelaPalace',
    city: 'Udaipur',
    state: 'Rajasthan',
    photo: '/assets/leelspalace.jpeg',
    availablerooms: 6,
    wifi: true,
    laundry: true
  }
  ];
  getAllHotellocations(): Hotellocation[] {
    return this.hotellocation;
  }

  getHotellocationById(id: number): Hotellocation | undefined {
    return this.hotellocation.find(hotellocation => hotellocation.id === id);
  }
}
