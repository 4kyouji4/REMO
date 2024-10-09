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
    },
    {
      name: 'Samsung Galaxy S23 Ultra',
      price: 59900,
      brand: 'Samsung',
      usb: 'Type-C',
      screen: '6.8',
      network: '5G',
      camera : '232 MP',
      CPU : 'Snapdragon 8 series',
      battery : '5000mAh',
      RAM : '12GB',
      ROM : '1TB',
      imageUrl: 'assets/images/galaxys23ultra.jpg'
    },
    {
      name: 'Samsung Galaxy Z Fold5',
      price: 75900,
      brand: 'Samsung',
      usb: 'Type-C',
      screen: '7.6',
      network: '5G',
      camera : '72 MP',
      CPU : 'Snapdragon 8 series',
      battery : '4400mAh',
      RAM : '12GB',
      ROM : '1TB',
      imageUrl: 'assets/images/galaxyzfold5.jpg'
    },
    {
      name: 'Samsung Galaxy Z Flip5 ',
      price: 45900,
      brand: 'Samsung',
      usb: 'Type-C',
      screen: '7.6',
      network: '5G',
      camera : '24 MP',
      CPU : 'Snapdragon 8 series',
      battery : '3700mAh',
      RAM : '8GB',
      ROM : '512GB',
      imageUrl: 'assets/images/GalaxyZFlip5.jpg'
    },
    {
      name: 'Samsung Galaxy A54 5G',
      price: 15999,
      brand: 'Samsung',
      usb: 'Type-C',
      screen: '6.4',
      network: '5G',
      camera : '67 MP',
      CPU : 'Exynos 1380',
      battery : '5000mAh',
      RAM : '8GB',
      ROM : '256GB',
      imageUrl: 'assets/images/GalaxyA54.jpg'
    },
    {
      name: 'Samsung Galaxy S22 Ultra',
      price: 47900,
      brand: 'Samsung',
      usb: 'Type-C',
      screen: '6.8',
      network: '5G',
      camera : '140 MP',
      CPU : 'Exynos 2200',
      battery : '5000mAh',
      RAM : '12GB',
      ROM : '512GB',
      imageUrl: 'assets/images/GalaxyS22Ultra.jpg'
    },
    {
      name: 'Samsung Galaxy Z Fold4',
      price: 75900,
      brand: 'Samsung',
      usb: 'Type-C',
      screen: '7.6',
      network: '5G',
      camera : '72 MP',
      CPU : 'Snapdragon 8 series',
      battery : '4400mAh',
      RAM : '12GB',
      ROM : '1TB',
      imageUrl: 'assets/images/galaxyzfold4.jpg'
    },
    {
      name: 'Samsung Galaxy A73 5G',
      price: 19900,
      brand: 'Samsung',
      usb: 'Type-C',
      screen: '6.7',
      network: '5G',
      camera : '130 MP',
      CPU : 'Snapdragon 778G',
      battery : '5000mAh',
      RAM : '8GB',
      ROM : '256GB',
      imageUrl: 'assets/images/GalaxyA73.jpg'
    },
    {
      name: 'Samsungo	Galaxy S21 Ultra',
      price: 41900,
      brand: 'Samsung',
      usb: 'Type-C',
      screen: '6.8',
      network: '5G',
      camera : '140 MP',
      CPU : 'Exynos 2100',
      battery : '5000mAh',
      RAM : '12GB',
      ROM : '512GB',
      imageUrl: 'assets/images/GalaxyS21Ultra.jpg'
    },
    {
      name: 'Samsungo	Galaxy Z Fold3',
      price: 56900,
      brand: 'Samsung',
      usb: 'Type-C',
      screen: '7.6',
      network: '5G',
      camera : '36 MP',
      CPU : 'Snapdragon 888',
      battery : '4400mAh',
      RAM : '12GB',
      ROM : '512GB',
      imageUrl: 'assets/images/galaxyzfold3.jpg'
    },
    {
      name: 'Samsung Galaxy A52s',
      price: 15400,
      brand: 'Samsung',
      usb: 'Type-C',
      screen: '6.5',
      network: '5G',
      camera : '86 MP',
      CPU : 'Snapdragon 778G',
      battery : '4500mAh',
      RAM : '8GB',
      ROM : '256GB',
      imageUrl: 'assets/images/GalaxyA52s.jpg'
    },
    {
      name: 'Huawei P60 Pro',
      price: 37990,
      brand: 'Huawei',
      usb: 'Type-C',
      screen: '6.67',
      network: '5G',
      camera : '109 MP',
      CPU : 'Snapdragon 8 series',
      battery : '4815mAh',
      RAM : '8GB',
      ROM : '256GB',
      imageUrl: 'assets/images/P60Pro.jpg'
    },
    {
      name: 'Huawei Nova 12i',
      price: 8990,
      brand: 'Huawei',
      usb: 'Type-C',
      screen: '6.7',
      network: '5G',
      camera : '108 MP',
      CPU : 'Snapdragon 680',
      battery : '4500mAh',
      RAM : '8GB',
      ROM : '256GB',
      imageUrl: 'assets/images/nova12i.jpg'
    },
    {
      name: 'Huawei Pura 70 Ultra',
      price: 49990,
      brand: 'Huawei',
      usb: 'Type-C',
      screen: '6.8',
      network: '5G',
      camera : '140 MP',
      CPU : 'HiSilicon Kirin 9000s',
      battery : '5200mAh',
      RAM : '12GB',
      ROM : '512GB',
      imageUrl: 'assets/images/Pura70Ultra.jpg'
    },
    {
      name: 'Huawei Nova 11i',
      price: 9900,
      brand: 'Huawei',
      usb: 'Type-C',
      screen: '6.8',
      network: '5G',
      camera : '50 MP',
      CPU : 'Snapdragon 680',
      battery : '4300mAh',
      RAM : '8GB',
      ROM : '128GB',
      imageUrl: 'assets/images/nova11i.jpg'
    },
    {
      name: 'Huawei Pura 70 Pro',
      price: 38990,
      brand: 'Huawei',
      usb: 'Type-C',
      screen: '6.8',
      network: '5G',
      camera : '110.5 MP',
      CPU : 'HiSilicon Kirin 9000s',
      battery : '5050mAh',
      RAM : '12GB',
      ROM : '512GB',
      imageUrl: 'assets/images/Pura70Pro.jpg'
    },
    {
      name: 'Xiaomi 14',
      price: 32990,
      brand: 'Xiaomi',
      usb: 'Type-C',
      screen: '6.36',
      network: '5G',
      camera : '72 MP',
      CPU : 'Snapdragon 8 series',
      battery : '4500mAh',
      RAM : '12GB',
      ROM : '256GB',
      imageUrl: 'assets/images/Xiaomi14.jpg'
    },
    {
      name: 'Xiaomi 13T Pro',
      price: 29990,
      brand: 'Xiaomi',
      usb: 'Type-C',
      screen: '6.67',
      network: '5G',
      camera : '112 MP',
      CPU : 'Dimensity 9200+',
      battery : '5000mAh',
      RAM : '12GB',
      ROM : '512GB',
      imageUrl: 'assets/images/Xiaomi13TPro.jpg'
    },
    {
      name: 'Xiaomi 12T Pro',
      price: 28990,
      brand: 'Xiaomi',
      usb: 'Type-C',
      screen: '6.67',
      network: '5G',
      camera : '210 MP',
      CPU : 'Snapdragon 8 series',
      battery : '5000mAh',
      RAM : '12GB',
      ROM : '256GB',
      imageUrl: 'assets/images/Xiaomi12TPro.jpg'
    },
    {
      name: 'Redmi Note 13 Pro+',
      price: 13990,
      brand: 'Xiaomi',
      usb: 'Type-C',
      screen: '6.67',
      network: '5G',
      camera : '210 MP',
      CPU : 'Dimensity 7200',
      battery : '5000mAh',
      RAM : '12GB',
      ROM : '256GB',
      imageUrl: 'assets/images/RedmiNote13Pro.jpg'
    },
    {
      name: 'OPPO Find X5 Pro',
      price: 51000,
      brand: 'OPPO',
      usb: 'Type-C',
      screen: '6.7',
      network: '5G',
      camera : '50 MP',
      CPU : 'Snapdragon 8 series',
      battery : '5000mAh',
      RAM : '12GB',
      ROM : '512GB',
      imageUrl: 'assets/images/OPPOFindX5Pro.jpg'
    },
    {
      name: 'OPPO Reno 11F',
      price: 10990,
      brand: 'OPPO',
      usb: 'Type-C',
      screen: '6.7',
      network: '5G',
      camera : '74 MP',
      CPU : 'MediaTek Dimensity 7050',
      battery : '5000mAh',
      RAM : '8GB',
      ROM : '256GB',
      imageUrl: 'assets/images/OPPOReno11F.jpg'
    },
    {
      name: 'OPPO Reno 8 Pro',
      price: 19000,
      brand: 'OPPO',
      usb: 'Type-C',
      screen: '6.7',
      network: '5G',
      camera : '50 MP',
      CPU : 'Dimensity 8100-Max',
      battery : '4500mAh',
      RAM : '8GB',
      ROM : '256GB',
      imageUrl: 'assets/images/OPPOReno8Pro.jpg'
    },
    {
      name: 'OPPO A17',
      price: 6600,
      brand: 'OPPO',
      usb: 'Type-C',
      screen: '6.56',
      network: '5G',
      camera : '50 MP',
      CPU : 'MediaTek G35',
      battery : '5000mAh',
      RAM : '4GB',
      ROM : '64GB',
      imageUrl: 'assets/images/oppoa17.jpg'
    },
    {
      name: 'OPPO Find X5 Pro Plus',
      price: 40000,
      brand: 'OPPO',
      usb: 'Type-C',
      screen: '6.78',
      network: '5G',
      camera : '50 MP',
      CPU : 'Snapdragon 8 series5',
      battery : '5000mAh',
      RAM : '12GB',
      ROM : '256GB',
      imageUrl: 'assets/images/oppofindx5proplus.jpg'
    },
    {
      name: 'Vivo V40 Pro',
      price: 25000,
      brand: 'Vivo',
      usb: 'Type-C',
      screen: '6.78',
      network: '5G',
      camera : '64 MP',
      CPU : 'Dimensity 7200',
      battery : '5500mAh',
      RAM : '12GB',
      ROM : '512GB',
      imageUrl: 'assets/images/vivov40pro.jpg'
    },
    {
      name: 'Vivo Y28s',
      price: 6300,
      brand: 'Vivo',
      usb: 'Type-C',
      screen: '6.51',
      network: '5G',
      camera : '50 MP',
      CPU : 'Dimensity 6100',
      battery : '5000mAh',
      RAM : '8GB',
      ROM : '128GB',
      imageUrl: 'assets/images/VivoY28s.jpg'
    },
    {
      name: 'Vivo V21e',
      price: 9500,
      brand: 'Vivo',
      usb: 'Type-C',
      screen: '6.44',
      network: '5G',
      camera : '64 MP',
      CPU : 'Dimensity 700',
      battery : '4000mAh',
      RAM : '8GB',
      ROM : '128GB',
      imageUrl: 'assets/images/VivoV21e.jpg'
    },
    {
      name: 'Vivo X60T Pro Plus',
      price: 21800,
      brand: 'Vivo',
      usb: 'Type-C',
      screen: '6.56',
      network: '5G',
      camera : '50 MP',
      CPU : 'Snapdragon 888+',
      battery : '4200mAh',
      RAM : '12GB',
      ROM : '256GB',
      imageUrl: 'assets/images/VivoX60TProPlus.jpg'
    },
    {
      name: 'Vivo S10 Pro',
      price: 15900,
      brand: 'Vivo',
      usb: 'Type-C',
      screen: '6.44',
      network: '5G',
      camera : '108 MP',
      CPU : 'Dimensity 1100',
      battery : '4050mAh',
      RAM : '12GB',
      ROM : '256GB',
      imageUrl: 'assets/images/VivoS10Pro.jpg'
    },

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
