import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { bottom } from '@popperjs/core';

interface Mobile {
  brand: string;
  model: string;
  screenSize: number;   // นิ้ว
  battery: number;      // mAh
  os: string;
  price: number;        // บาท
  network: string;      //(G)
  camera: number;       // (MP))
  cpu: string;          // ชื่อหรือชนิดของ CPU
  ram: number;          // RAM (GB)
  rom: number;          // ROM (GB)
  image: string;
  buylink: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})

//ข้อมูลมือถือ
export class FilterComponent {
  mobileCatalog: Mobile[] = [
    { brand: 'Samsung', model: 'Galaxy S23 Ultra', screenSize: 6.8, battery: 5000, os: 'Android', price: 30000, network: '5G', camera: 64, cpu: 'Qualcomm Snapdragon 8 Gen 2', ram: 8, rom: 256, image: '/assets/images/galaxys23ultra.jpg', buylink: 'https://www.samsung.com/th/smartphones/galaxy-s23-ultra/'},
    { brand: 'Samsung', model: 'Galaxy S22', screenSize: 6.5, battery: 3700, os: 'Android', price: 25000, network: '5G', camera: 64, cpu: 'Exynos 2200', ram: 8, rom: 256, image: '/assets/images/galaxys23ultra.jpg', buylink: 'https://www.samsung.com/th/smartphones/galaxy-s23-ultra/'},
    { brand: 'Xiaomi', model: 'Mi 12', screenSize: 6.8, battery: 4500, os: 'Android', price: 20000, network: '5G', camera: 64, cpu: 'Snapdragon 8 Gen 1', ram: 12, rom: 256, image: '/assets/images/galaxys23ultra.jpg', buylink: 'https://www.samsung.com/th/smartphones/galaxy-s23-ultra/' },
    { brand: 'OnePlus', model: 'OnePlus 10', screenSize: 6.7, battery: 4800, os: 'Android', price: 27000, network: '5G', camera: 64, cpu: 'Snapdragon 8 Gen 1', ram: 12, rom: 512, image: '/assets/images/galaxys23ultra.jpg', buylink: 'https://www.samsung.com/th/smartphones/galaxy-s23-ultra/' }
  ];

  userProfile = {
    preferredBrand: '',
    preferredOS: '',
    minScreenSize: 0,
    maxPrice: 0,
    preferrednetwork: '',
    minCamera: 0,
    minRam: 0,
    minRom: 0,
    preferredCPU: ''
  };

  recommendedMobiles: Mobile[] = [];

  onSubmit() {
    this.recommendedMobiles = this.recommendMobiles(this.userProfile, this.mobileCatalog);
  }

  recommendMobiles(userProfile: any, catalog: Mobile[]): Mobile[] {
    return catalog.filter(mobile => {
      return (
        (userProfile.preferredBrand ? mobile.brand === userProfile.preferredBrand : true) &&
        (userProfile.preferredOS ? mobile.os === userProfile.preferredOS : true) &&
        (userProfile.minScreenSize ? mobile.screenSize >= userProfile.minScreenSize : true) &&
        (userProfile.maxPrice ? mobile.price <= userProfile.maxPrice : true) &&
        (userProfile.preferrednetwork ? mobile.network === userProfile.preferrednetwork: true) &&
        (userProfile.mincamera ? mobile.camera >= userProfile.minCamera: true) &&
        (userProfile.minRam ? mobile.ram >= userProfile.minRam : true) &&
        (userProfile.minRom ? mobile.rom >= userProfile.minRom : true) &&
        (userProfile.preferredCPU ? mobile.cpu.includes(userProfile.preferredCPU) : true)
      );
    });
  }
}
