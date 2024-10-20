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
    { brand: 'Samsung', model: 'Galaxy S23 Ultra', screenSize: 6.8, battery: 5000, os: 'Android', price: 43900, network: '5G', camera: 232, cpu: 'Qualcomm Snapdragon 8 Gen 2', ram: 8, rom: 256, image: '/assets/images/galaxys23ultra.jpg', buylink: 'https://www.samsung.com/th/smartphones/galaxy-s23-ultra/'},
    { brand: 'Samsung', model: 'Galaxy S23+', screenSize: 6.6, battery: 4700, os: 'Android', price: 37900, network: '5G', camera: 50, cpu: 'Qualcomm Snapdragon 8 Gen 2', ram: 8, rom: 256, image: '/assets/images/galaxys23ultra.jpg', buylink: 'https://www.siamphone.com/spec/samsung/galaxy_s23_plus.htm#google_vignette'},
    { brand: 'Samsung', model: 'Galaxy S23', screenSize: 6.1, battery: 3900, os: 'Android', price: 30900, network: '5G', camera: 72, cpu: 'Qualcomm Snapdragon 8 Gen 2', ram: 8, rom: 128, image: '/assets/images/galaxys23ultra.jpg', buylink: 'https://www.samsung.com/galaxy-s23'},
    { brand: 'Samsung', model: 'Galaxy Z Fold5', screenSize: 7.6, battery: 4400, os: 'Android', price: 59900, network: '5G', camera: 72, cpu: 'Snapdragon 8 Gen 2', ram: 12, rom: 256, image: '/assets/images/galaxyzfold5.jpg', buylink: 'https://www.samsung.com/galaxy-z-fold5'},
    { brand: 'Samsung', model: 'Galaxy Z Flip5', screenSize: 6.7, battery: 3700, os: 'Android', price: 39900, network: '5G', camera: 24, cpu: 'Qualcomm Snapdragon 8 Gen 2', ram: 8, rom: 256, image: '/assets/images/GalaxyZFlip5.jpg', buylink: 'https://www.samsung.com/galaxy-z-flip5'},
    { brand: 'Samsung', model: 'Galaxy A54', screenSize: 6.4, battery: 5000, os: 'Android', price: 13999, network: '5G', camera: 67, cpu: 'Exynos 1380', ram: 6, rom: 128, image: '/assets/images/GalaxyA54.jpg', buylink: 'https://www.samsung.com/th/smartphones/galaxy-a/galaxy-a54-5g-awesome-white-256gb-sm-a546ezwdthl/'},
    { brand: 'Samsung', model: 'Galaxy S22 Ultra', screenSize: 6.8, battery: 5000, os: 'Android', price: 39900, network: '5G', camera: 240, cpu: 'Exynos 1380', ram: 12, rom: 256, image: '/assets/images/GalaxyS22Ultra.jpg', buylink: 'https://www.samsung.com/th/smartphones/galaxy-s/galaxy-s22-ultra-graphite-512gb-sm-s908ezahthl/'},
    { brand: 'Samsung', model: 'Galaxy S22+', screenSize: 6.6, battery: 4500, os: 'Android', price: 34900, network: '5G', camera: 50, cpu: 'Qualcomm Snapdragon 8 Gen 1', ram: 8, rom: 128, image: '/assets/images/GalaxyS22Ultra.jpg', buylink: 'https://www.samsung.com/th/smartphones/galaxy-s/galaxy-s22-plus-skyblue-128gb-sm-s906elbdthl/'},
    { brand: 'Samsung', model: 'Galaxy S22', screenSize: 6.1, battery: 3700, os: 'Android', price: 29900, network: '5G', camera: 50, cpu: 'Qualcomm Snapdragon 8 Gen 1', ram: 8, rom: 128, image: '/assets/images/GalaxyS22Ultra.jpg', buylink: 'https://www.samsung.com/th/smartphones/galaxy-s/galaxy-s22-violet-256gb-sm-s901ezvgthl/'},
    { brand: 'Samsung', model: 'Galaxy Z Fold4', screenSize: 7.6, battery: 4400, os: 'Android', price: 59900, network: '5G', camera: 72, cpu: 'Qualcomm Snapdragon 8+ Gen 1', ram: 12, rom: 256, image: '/assets/images/galaxyzfold4.jpg', buylink: 'https://www.samsung.com/th/smartphones/galaxy-z/galaxy-z-fold4-burgundy-512gb-sm-f936bdrgthl/'},
    { brand: 'Samsung', model: 'Galaxy A73', screenSize: 6.7, battery: 5000, os: 'Android', price: 17900, network: '5G', camera: 130, cpu: 'Qualcomm Snapdragon 778G', ram: 6, rom: 128, image: '/assets/images/GalaxyA73.jpg', buylink: 'https://www.samsung.com/th/smartphones/galaxy-a/galaxy-a73-5g-awesome-mint-128gb-sm-a736blggthl/'},
    { brand: 'Samsung', model: 'Galaxy 21 Ultra', screenSize: 6.8, battery: 5000, os: 'Android', price: 37900, network: '5G', camera: 140, cpu: 'Qualcomm Snapdragon 888', ram: 12, rom: 128, image: '/assets/images/GalaxyS21Ultra.jpg', buylink: 'https://www.samsung.com/th/smartphones/galaxy-s21-ultra-5g/special-offer/'},
    { brand: 'Samsung', model: 'Galaxy S21+', screenSize: 6.7, battery: 4800, os: 'Android', price: 33900, network: '5G', camera: 88, cpu: 'Exynos 2100', ram: 8, rom: 128, image: '/assets/images/GalaxyS21Ultra.jpg', buylink: 'https://www.samsung.com/th/smartphones/galaxy-s21-ultra-5g/special-offer/'},
    { brand: 'Samsung', model: 'Galaxy S21', screenSize: 6.2, battery: 4000, os: 'Android', price: 27900, network: '5G', camera: 88, cpu: 'Qualcomm Snapdragon 888', ram: 8, rom: 128, image: '/assets/images/GalaxyS21Ultra.jpg', buylink: 'https://www.samsung.com/th/smartphones/galaxy-s21-ultra-5g/special-offer/'},
    { brand: 'Samsung', model: 'Galaxy Z Fold3', screenSize: 7.6, battery: 4400, os: 'Android', price: 52900, network: '5G', camera: 36, cpu: 'Qualcomm Snapdragon 888', ram: 12, rom: 256, image: '/assets/images/galaxyzfold3.jpg', buylink: 'https://www.samsung.com/th/business/smartphones/galaxy-z/galaxy-z-fold3-f926-5g-sm-f926bzsdthl/'},
    { brand: 'Samsung', model: 'Galaxy A52s', screenSize: 6.5, battery: 4500, os: 'Android', price: 13900, network: '5G', camera: 86, cpu: 'Qualcomm Snapdragon 778G', ram: 6, rom: 128, image: '/assets/images/GalaxyA52s.jpg', buylink: 'https://www.siamphone.com/spec/samsung/galaxy_a52s_5g.htm'},
    { brand: 'Huawei', model: 'P60 Pro', screenSize: 6.67, battery: 4815, os: 'Android', price: 37900, network: '5G', camera: 48, cpu: 'Qualcomm Snapdragon 8+ Gen 1', ram: 8, rom: 256, image: '/assets/images/P60Pro.jpg', buylink: 'https://www.siamphone.com/spec/huawei/p60_pro.htm'},
    { brand: 'Huawei', model: 'Nova 12i', screenSize: 6.7, battery: 4500, os: 'Android', price: 8990, network: '5G', camera: 108, cpu: 'Qualcomm Snapdragon 680', ram: 8, rom: 256, image: '/assets/images/nova12i.jpg', buylink: 'https://www.siamphone.com/spec/huawei/nova_12i.htm'},
    { brand: 'Huawei', model: 'Pura 70 Ultra', screenSize: 6.8, battery: 5200, os: 'Android', price: 49990, network: '5G', camera: 50, cpu: 'HiSilicon Kirin 9000s', ram: 12, rom: 512, image: '/assets/images/Pura70Ultra.jpg', buylink: 'https://www.siamphone.com/spec/huawei/pura_70_ultra.htm'},
    { brand: 'Huawei', model: 'Nova 11i', screenSize: 6.8, battery: 4300, os: 'Android', price: 9900, network: '5G', camera: 48, cpu: 'Qualcomm Snapdragon 680', ram: 8, rom: 128, image: '/assets/images/nova11i.jpg', buylink: 'https://www.siamphone.com/spec/huawei/nova_11i.htm'},
    { brand: 'Huawei', model: 'Pura 70 Pro', screenSize: 6.8, battery: 5050, os: 'Android', price: 38900, network: '5G', camera: 50, cpu: 'HiSilicon Kirin 9000s', ram: 12, rom: 512, image: '/assets/images/Pura70Pro.jpg', buylink: 'https://www.siamphone.com/spec/huawei/pura_70_pro.htm'},
    { brand: 'Xiaomi', model: '14', screenSize: 6.36, battery: 4500, os: 'Android', price: 32900, network: '5G', camera: 60, cpu: 'Snapdragon 8 Gen 3', ram: 8, rom: 256, image: '/assets/images/Xiaomi14.jpg', buylink: 'https://www.mi.com/th/product/xiaomi-14/'},
    { brand: 'Xiaomi', model: '13T Pro', screenSize: 6.67, battery: 5000, os: 'Android', price: 29900, network: '5G', camera: 62, cpu: 'Dimensity 9200+', ram: 12, rom: 512, image: '/assets/images/Xiaomi13TPro.jpg', buylink: 'https://www.mi.com/th/product/xiaomi-13t-pro-leica/'},
    { brand: 'Xiaomi', model: '13T', screenSize: 6.67, battery: 5000, os: 'Android', price: 24990, network: '5G', camera: 62, cpu: 'Dimensity 9200', ram: 8, rom: 256, image: '/assets/images/Xiaomi13TPro.jpg', buylink: 'https://www.mi.com/th/product/xiaomi-13t-leica/'},
    { brand: 'Xiaomi', model: '12T Pro', screenSize: 6.67, battery: 5000, os: 'Android', price: 28990, network: '5G', camera: 210, cpu: 'Snapdragon 8+ Gen 1', ram: 12, rom: 256, image: '/assets/images/Xiaomi12TPro.jpg', buylink: 'https://www.mi.com/th/product/xiaomi-12t-pro/'},
    { brand: 'Xiaomi', model: '12', screenSize: 6.28, battery: 4500, os: 'Android', price: 26990, network: '5G', camera: 68, cpu: 'Snapdragon 8+ Gen 1', ram: 8, rom: 128, image: '/assets/images/Xiaomi12TPro.jpg', buylink: 'https://www.mi.com/th/product/xiaomi-12/'},
    { brand: 'Redmi', model: 'Note 13 Pro+', screenSize: 6.67, battery: 5000, os: 'Android', price: 13990, network: '5G', camera: 210, cpu: 'SDimensity 7200', ram: 12, rom: 256, image: '/assets/images/RedmiNote13Pro.jpg', buylink: 'https://www.mi.com/th/product/redmi-note-13-pro-plus-5g/'},
    { brand: 'OPPO', model: 'Find X5 Pro', screenSize: 6.7, battery: 5000, os: 'Android', price: 51000, network: '5G', camera: 50, cpu: 'Snapdragon 8 Gen 1', ram: 12, rom: 256, image: '/assets/images/OPPOFindX5Pro.jpg', buylink: 'https://www.siamphone.com/spec/oppo/find_x5_pro.htm'},
    { brand: 'OPPO', model: 'Reno 11F', screenSize: 6.7, battery: 4500, os: 'Android', price: 10990, network: '5G', camera: 72, cpu: 'MediaTek Dimensity 7050', ram: 8, rom: 256, image: '/assets/images/OPPOReno11F.jpg', buylink: 'https://www.siamphone.com/spec/oppo/reno_11_f_5g.htm'},
    { brand: 'OPPO', model: 'Reno 8 Pro', screenSize: 6.7, battery: 4500, os: 'Android', price: 19000, network: '5G', camera: 50, cpu: 'MediaTek Dimensity 8100-Max', ram: 8, rom: 256, image: '/assets/images/OPPOReno8Pro.jpg', buylink: 'https://www.siamphone.com/spec/oppo/reno8_pro.htm'},
    { brand: 'OPPO', model: 'A17', screenSize: 6.56, battery: 5000, os: 'Android', price: 6600, network: '5G', camera: 50, cpu: 'MediaTek Helio G35', ram: 4, rom: 64, image: '/assets/images/oppoa17.jpg', buylink: 'https://www.siamphone.com/spec/oppo/a17.htm'},
    { brand: 'OPPO', model: 'Find X5 Pro Plus', screenSize: 6.78, battery: 5000, os: 'Android', price: 40000, network: '5G', camera: 50, cpu: 'Snapdragon 8 Gen 1', ram: 12, rom: 256, image: '/assets/images/oppofindx5proplus.jpg', buylink: 'https://www.siamphone.com/spec/oppo/find_x5_pro.htm'},
    { brand: 'Vivo', model: 'V40 Pro', screenSize: 6.78, battery: 5500, os: 'Android', price: 25000, network: '5G', camera: 64, cpu: 'MediaTek Dimensity 900', ram: 8, rom: 256, image: '/assets/images/vivov40pro.jpg', buylink: 'https://www.vivo.com/th/products/v40-pro?utm_source=Google&utm_medium=paid&utm_campaign=IPG_TH_V40_GG_SEM_HotSale_Brand&utm_term=SEM_Brand_V40-Pro&utm_content=Text&utm_language=https://www.vivo.com/th/products/v40-pro&gad_source=1&gclid=Cj0KCQjwsc24BhDPARIsAFXqAB1rQqlJQEpJnA0Voz4teSPzzapn65EFKHCz0Y0LyFY8hMUzmHwLj_waAm96EALw_wcB'},
    { brand: 'Vivo', model: 'Y28s', screenSize: 6.51, battery: 5000, os: 'Android', price: 6300, network: '5G', camera: 50, cpu: 'Dimensity 6100', ram: 8, rom: 128, image: '/assets/images/VivoY28s.jpg', buylink: 'https://www.siamphone.com/contents/news-53390.html'},
    { brand: 'Vivo', model: 'V21e', screenSize: 6.44, battery: 4000, os: 'Android', price: 9500, network: '5G', camera: 64, cpu: 'MediaTek Dimensity 700', ram: 8, rom: 128, image: '/assets/images/VivoV21e.jpg', buylink: 'https://www.siamphone.com/spec/vivo/v21e.htm'},
    { brand: 'Vivo', model: 'X60T Pro Plus', screenSize: 6.56, battery: 4200, os: 'Android', price: 21800, network: '5G', camera: 50, cpu: 'Snapdragon 888+', ram: 8, rom: 128, image: '/assets/images/VivoX60TProPlus.jpg', buylink: 'https://www.siamphone.com/spec/vivo/x60t_pro_plus.htm'},
    { brand: 'Vivo', model: 'S10 Pro', screenSize: 6.44, battery: 4050, os: 'Android', price: 15900, network: '5G', camera: 108, cpu: 'MediaTek Dimensity 1100', ram: 8, rom: 128, image: '/assets/images/VivoS10Pro.jpg', buylink: 'https://www.siamphone.com/spec/vivo/s10_pro.htm'},
    { brand: 'Infinix', model: 'Zero 40', screenSize: 6.78, battery: 5000, os: 'Android', price: 11999, network: '5G', camera: 50, cpu: 'MediaTek Dimensity 8200', ram: 12, rom: 256, image: '/assets/images/infinixzero405g.jpg', buylink: 'https://www.siamphone.com/spec/infinix/zero_40_5g.htm'},
    { brand: 'Infinix', model: 'Zero 20', screenSize: 6.7, battery: 4500, os: 'Android', price: 9999, network: '5G', camera: 108, cpu: 'MediaTek Helio G99', ram: 8, rom: 256, image: '/assets/images/InfinixZero20.jpg', buylink: 'https://www.siamphone.com/spec/infinix/zero_20.htm'},
    { brand: 'Infinix', model: 'Zero 2023', screenSize: 6.78, battery: 5000, os: 'Android', price: 6990, network: '5G', camera: 50, cpu: 'MediaTek Dimensity 920', ram: 8, rom: 256, image: '/assets/images/InfinixZero5G2023.jpg', buylink: 'https://www.siamphone.com/spec/infinix/zero_2023.htm'},
    { brand: 'Infinix', model: 'Note 40 Pro+', screenSize: 6.9, battery: 5000, os: 'Android', price: 10380, network: '5G', camera: 108, cpu: 'MediaTek Dimensity 810', ram: 12, rom: 256, image: '/assets/images/InfinixNote40ProPlus5G.jpg', buylink: 'https://www.siamphone.com/spec/infinix/note_40_pro_plus.htm'},
    { brand: 'Infinix', model: 'Note 40 Pro', screenSize: 6.78, battery: 5000, os: 'Android', price: 8999, network: '5G', camera: 64, cpu: 'MediaTek Helio G99', ram: 8, rom: 256, image: '/assets/images/InfinixNote40ProPlus5G.jpg', buylink: 'https://www.siamphone.com/spec/infinix/note_40_pro.htm'},
    { brand: 'Infinix', model: 'Note 30 VIP', screenSize: 6.67, battery: 5000, os: 'Android', price: 6800, network: '5G', camera: 108, cpu: 'MediaTek Dimensity 8050', ram: 12, rom: 256, image: '/assets/images/InfinixNote30VIP.png', buylink: 'https://www.siamphone.com/spec/infinix/note_30_vip.htm'},
    { brand: 'Infinix', model: 'Note 30', screenSize: 6.78, battery: 5000, os: 'Android', price: 4180, network: '5G', camera: 108, cpu: 'MediaTek Dimensity 7009', ram: 8, rom: 256, image: '/assets/images/InfinixNote305G.jpg', buylink: 'https://www.siamphone.com/spec/infinix/note_30_5g.htm'},
    
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
