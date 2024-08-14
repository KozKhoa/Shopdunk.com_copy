const iPhoneLink = "#";
const iPadLink = "#";
const MacLink = "#";
const WatchLink = '#';
const AccessoriesLink = "#";

const iPhone = [
   {
      name: "iPhone 13 - 128GB",
      product_img : "home/images/iphone-images/iphone-13-128GB.jpg",
      new_cost: "13.690.000₫",
      old_cost: "24.990.000₫",
      discount: "-45%",
      product_tag: "home/images/product-tags/0-percent.png",
      link: "#"
   },
   {
      name: "iPhone 15 - 128GB",
      product_img : "home/images/iphone-images/iphone-15-128GB.jpg",
      new_cost: "19.890.000₫",
      old_cost: "24.990.000₫",
      discount: "-20%",
      product_tag: "none",
      link: "#"
   },
   {
      name: "iPhone 14 - 128GB",
      product_img : "home/images/iphone-images/iphone-14-128GB.jpg",
      new_cost: "22.750.000₫",
      old_cost: "27.990.000₫",
      discount: "-18%",
      product_tag: "none",
      link: "#"
   },
   {
      name: "iPhone 15 Pro Max - 256GB",
      product_img : "home/images/iphone-images/iphone-15-pro-max-256GB.jpg",
      new_cost: "29.350.000₫",
      old_cost: "37.990.000₫",
      discount: "-22%",
      product_tag: "home/images/product-tags/new.png",
      link: "#"
   }
];
const iPad = [
   {
      name: "iPad Pro 11 inch Wi-Fi - 256GB",
      product_img : "home/images/ipad-images/ipad-pro-11-inch-wifi-256gb.jpg",
      new_cost: "23.999.000₫",
      old_cost: "28.999.000₫",
      discount: "-20%",
      product_tag: "none",
      link: "#"
   },
   {
      name: "iPad Air 11 inch Wi-Fi - 256GB",
      product_img : "home/images/ipad-images/ipad-air-11-inch-wifi-128gb.jpg",
      new_cost: "17.999.000₫",
      old_cost: "23.990.000₫",
      discount: "-22%",
      product_tag: "none",
      link: "#"
   },
   {
      name: "iPad Wi‑Fi 10.9 inch 256GB",
      product_img : "home/images/ipad-images/ipad-wifi-10_9-inch-256bg.png",
      new_cost: "12.500.000₫",
      old_cost: "13.999.000₫",
      discount: "-10%",
      product_tag: "none",
      link: "#"
   },
   {
      name: "iPad Pro 13 inch Wi-Fi 1TB",
      product_img : "home/images/ipad-images/ipad-pro-13-inch-wifi-1tb.png",
      new_cost: "48.750.000₫",
      old_cost: "54.999.000₫",
      discount: "-12%",
      product_tag: "home/images/product-tags/new.png",
      link: "#"
   }
];
const Mac = [
   {
      name: "MacBook Air M1 2020 (8GB RAM | 256GB SSD)",
      product_img : "home/images/mac-images/macbook-air-m1-2020-8gb-ram-256-ssd.png",
      new_cost: "18.490.000₫",
      old_cost: "28.999.000₫",
      discount: "-36%",
      product_tag: "none",
      link: "#"
   },
   {
      name: "iMac M1 2021 24 inch (8 Core GPU/8GB/512GB)",
      product_img : "home/images/mac-images/imac-mi-2021-24-inch-8-core-gpu-8gb-ram-512gb-ssd.webp",
      new_cost: "32.999.000₫",
      old_cost: "45.990.000₫",
      discount: "-28%",
      product_tag: "none",
      link: "#"
   },
   {
      name: "MacBook Pro 16 M1 Pro (16 Core/16GB/1TB)",
      product_img : "home/images/mac-images/macbook-pro-16-m1-pro-16-core-16gb-ram-1tb-ssd.png",
      new_cost: "49.500.000₫",
      old_cost: "73.999.000₫",
      discount: "-31%",
      product_tag: "home/images/product-tags/new.png",
      link: "#"
   },
   {
      name: "MacBook Air M2 2022 (8GB RAM | 256GB SSD)",
      product_img : "home/images/mac-images/macbook-air-m2-2022-8gb-ram-256gb-ssd.png",
      new_cost: "23.690.000₫",
      old_cost: "32.990.000₫",
      discount: "-28%",
      product_tag: "home/images/product-tags/new.png",
      link: "#"
   }
];
const Watch = [
   {
      name: "Apple Watch SE Nhôm 2022 GPS",
      product_img : "home/images/watch-images/apple-watch-se-nhom-2022-gps.jpeg", 
      new_cost: "5.890.000₫",
      old_cost: "8.990.000₫",
      discount: "-34%",
      product_tag: "none",
      link: "#"
   },
   {
      name: "Apple Watch Series 9 Nhôm (GPS) 41mm | Sport Band",
      product_img : "home/images/watch-images/apple-watch-series-9-nhom-gps-41mm-sport-band.png",
      new_cost: "9.390.000₫",
      old_cost: "11.990.000₫",
      discount: "-28%",
      product_tag: "none",
      link: "#"
   },
   {
      name: "Apple Watch Ultra 2 GPS + Cellular 49mm Ocean Band",
      product_img : "home/images/watch-images/appe-watch-ultra-2-gps-cellular-49mm-ocean-band.png",
      new_cost: "20.890.000₫",
      old_cost: "23.990.000₫",
      discount: "-12%",
      product_tag: "home/images/product-tags/new.png",
      link: "#"
   },
   {
      name: "Apple Watch SE 2023 GPS Sport Band size S/M",
      product_img : "home/images/watch-images/apple-watch-se-2023-gps-sport-band-size-s_m.jpeg",
      new_cost: "5.890.000₫",
      old_cost: "8.990.000₫",
      discount: "-34%",
      product_tag: "none",
      link: "#"
   }
];
const Accessories = [
   {
      name: "AirPods Pro 2",
      product_img : "home/images/accessory-images/airpods-pro-2.png",
      new_cost: "4.990.000₫",
      old_cost: "6.790.000₫",
      discount: "-26%",
      product_tag: "none",
      link: "#"
   },
   {
      name: "Sạc 20W USB-C Power Adapter",
      product_img : "home/images/accessory-images/power-adapter-20w-usb-c.png",
      new_cost: "520.000₫",
      old_cost: "690.000₫",
      discount: "-24%",
      product_tag: "none",
      link: "#"
   },
   {
      name: "Apple Pencil Pro",
      product_img : "home/images/accessory-images/apple-pencil-pro.jpeg",
      new_cost: "3.399.000₫",
      old_cost: "3.499.000₫",
      discount: "-2%",
      product_tag: "none",
      link: "#"
   },
   {
      name: "Magic Mouse 2",
      product_img : "home/images/accessory-images/magic-mouse-2.jpeg",
      new_cost: "1.890.000₫",
      old_cost: "2.990.000₫",
      discount: "-36%",
      product_tag: "none",
      link: "#"
   }
];
// let item_id = document.querySelector('items .items-name');
// let list_products = document.querySelector('items .list-products');

createItems(iPhone, 'iPhone', 'iPhone', iPhoneLink);   
createItems(iPad, 'iPad','iPad', iPadLink);
createItems(Mac, 'Mac', 'Mac', MacLink);
createItems(Watch, 'Watch', 'Watch', WatchLink);
createItems(Accessories, 'Accessories', 'Phụ kiện', AccessoriesLink);

function createItems(item, item_id, item_title, item_link) {
   let item_section = document.getElementById(item_id);
   let item_name = document.createElement('a');
   item_name.href = item_link;
   item_name.className = "items-name";
   item_name.innerHTML = item_title;

   let list_products = document.createElement('ul');
   list_products.className = "list-products";

   for (let i = 0; i < item.length; i++ ) {
      let product = document.createElement('li');
      product.className = "product";

      let product_tag = document.createElement('img');
      product_tag.className = 'product-tag';
      product_tag.src = item[i].product_tag;

      let product_img = document.createElement('img');
      product_img.src = item[i].product_img;
      product_img.className = 'product-img';
      let product_img_anchor = document.createElement('a');
      product_img_anchor.href = item[i].link;
      product_img_anchor.appendChild(product_img);
      product_img = product_img_anchor;

      let product_name = document.createElement('a');
      product_name.href = item[i].link;
      product_name.className = 'product-name';
      product_name.innerText = item[i].name;

      let product_cost = document.createElement('div');
      product_cost.className = 'product-cost';
      product_cost.innerText = item[i].new_cost;

      let old_cost = document.createElement('div');
      old_cost.className = 'old-cost';
      old_cost.innerText = item[i].old_cost;

      let product_sale = document.createElement('div');
      product_sale.className = 'product-sale';
      product_sale.innerText = item[i].discount;

      product_cost.appendChild(old_cost);
      product_cost.appendChild(product_sale);

      if (item[i].product_tag != 'none') {
         product.appendChild(product_tag);
      }
      product.appendChild(product_img);
      product.appendChild(product_name);
      product.appendChild(product_cost);

      list_products.appendChild(product);
   }
   let more_items = document.createElement('a');
   more_items.href = item_link;
   more_items.className = 'more-items';
   more_items.innerHTML = `Xem tất cả ${item_title}&nbsp;<i class="fa-solid fa-arrow-right"></i>`;

   item_section.appendChild(item_name);
   item_section.appendChild(list_products);
   item_section.appendChild(more_items);
}
