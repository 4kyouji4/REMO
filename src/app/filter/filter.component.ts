import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
   // รายการมือถือทั้งหมดพร้อมรูปภาพ
   mobiles = [
    {
      name: 'POCO X6 Pro',
      price: 151267,
      brand: 'POCO',
      usb: 'Type-C',
      screen: '5.5',
      network: '5G',
      camera : '64 MP',
      CPU : 'Snapdragon 7 series',
      battery : '5000mAh',
      RAM : '8GB',
      ROM : '128GB',
      imageUrl: 'assets/poco-x6-pro.jpg' // เพิ่มภาพมือถือ
    },
    {
      name: 'Samsung Galaxy M05',
      price: 29847,
      brand: 'Samsung',
      usb: 'Type-C',
      screen: 6.7,
      network: '4G',
      camera : '64 MP',
      CPU : 'Snapdragon 8 series',
      battery : '5000mAh',
      RAM : '8GB',
      ROM : '128GB',
      imageUrl: 'assets/samsung-galaxy-m05.jpg' // เพิ่มภาพมือถือ
    },
    {
      name: 'vivo V40 Pro',
      price: 13106,
      brand: 'Vivo',
      usb: 'Type-C',
      screen: '6.5',
      network: '5G',
      camera : '16 MP',
      CPU : 'Snapdragon 6 series',
      battery : '5000mAh',
      RAM : '8GB',
      ROM : '128GB',
      imageUrl: 'assets/images/Apple iPhone 16 Plus.jpg' // เพิ่มภาพมือถือ
    }
    // เพิ่มมือถืออื่น ๆ ในลักษณะเดียวกัน
  ];

  selectedBrand = '';
  selectedUSB = '';
  selectedNetwork = '';
  selectedScreenSize = '';
  selectedCamera = '';
  selectedCPU = '';
  selectedBattery = '';
  selectedRAM = '';
  selectedROM = '';
  minPrice: number | undefined;
  maxPrice: number | undefined;

  get filteredMobiles() {
    return this.mobiles.filter(mobile => {
      const matchesBrand = this.selectedBrand ? mobile.brand === this.selectedBrand : true;
      const matchesNetwork = this.selectedNetwork ? mobile.network === this.selectedNetwork : true;
      const matchesUSB = this.selectedUSB ? mobile.usb === this.selectedUSB : true;
      const matchesScreenSize = this.selectedScreenSize ? mobile.screen === this.selectedScreenSize: true;
      const matchesCamera = this.selectedCamera ? mobile.camera === this.selectedCamera : true;
      const matchesCPU = this.selectedCPU ? mobile.CPU === this.selectedCPU : true;
      const matchesBattery = this.selectedBattery ? mobile.battery === this.selectedBattery : true;
      const matchesRAM = this.selectedRAM ? mobile.RAM === this.selectedRAM : true;
      const matchesROM = this.selectedROM ? mobile.ROM === this.selectedROM : true;
      const matchesMinPrice = this.minPrice ? mobile.price >= this.minPrice : true;
      const matchesMaxPrice = this.maxPrice ? mobile.price <= this.maxPrice : true;
      return matchesBrand && matchesNetwork && matchesUSB && matchesScreenSize && matchesCamera && matchesCPU && matchesBattery && matchesRAM && matchesROM && matchesMinPrice && matchesMaxPrice;
    });
  }

  resetFilters() {
    this.selectedBrand = '';
    this.selectedNetwork = '';
    this.selectedUSB = '';
    this.selectedScreenSize = '';
    this.selectedCamera = '';
    this.selectedCPU = '';
    this.selectedBattery = '';
    this.selectedRAM = '';
    this.selectedROM = '';
    this.minPrice = undefined;
    this.maxPrice = undefined;
  }
}
