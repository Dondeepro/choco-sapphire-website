const allProducts = [
  // Classic - 9
  {
    id: 1,
    name: "Velvet Classic Bar",
    tier: "Classic",
    category: "Bars",
    price: 350,
    image: "images/classic-1.jpg",
    description: "Smooth milk chocolate with a soft cocoa finish. A timeless everyday indulgence with elegant taste.",
    inStock: true
  },
  {
    id: 2,
    name: "Hazel Gold Praline",
    tier: "Classic",
    category: "Praline",
    price: 420,
    image: "images/classic-2.jpg",
    description: "Creamy praline center wrapped in rich chocolate, finished with a gentle roasted hazelnut note.",
    inStock: true
  },
  {
    id: 3,
    name: "Classic Cocoa Delight",
    tier: "Classic",
    category: "Chocolate Bites",
    price: 480,
    image: "images/classic-3.jpg",
    description: "Smooth everyday chocolate bites with a balanced cocoa flavor and elegant finish.",
    inStock: true
  },
  {
    id: 4,
    name: "Caramel Classic Cube",
    tier: "Classic",
    category: "Caramel",
    price: 520,
    image: "images/classic-4.jpg",
    description: "Soft caramel center with a silky chocolate shell for a comforting classic treat.",
    inStock: true
  },
  {
    id: 5,
    name: "Milk Cocoa Fingers",
    tier: "Classic",
    category: "Bars",
    price: 390,
    image: "images/classic-5.jpg",
    description: "Simple and elegant milk chocolate fingers crafted for everyday enjoyment.",
    inStock: true
  },
  {
    id: 6,
    name: "Soft Nut Classic",
    tier: "Classic",
    category: "Nut Chocolate",
    price: 460,
    image: "images/classic-6.jpg",
    description: "A balanced chocolate with gentle nut crunch and creamy cocoa finish.",
    inStock: true
  },
  {
    id: 7,
    name: "Cocoa Morning Bites",
    tier: "Classic",
    category: "Chocolate Bites",
    price: 430,
    image: "images/classic-7.jpg",
    description: "Elegant bite-size chocolates made for light gifting and daily indulgence.",
    inStock: true
  },
  {
    id: 8,
    name: "Golden Cream Classic",
    tier: "Classic",
    category: "Filled Chocolate",
    price: 510,
    image: "images/classic-8.jpg",
    description: "Cream-filled classic chocolates with soft texture and rich milk cocoa notes.",
    inStock: true
  },
  {
    id: 9,
    name: "Everyday Cocoa Select",
    tier: "Classic",
    category: "Assorted",
    price: 550,
    image: "images/classic-9.jpg",
    description: "A graceful classic assortment designed for easy sharing and elegant taste.",
    inStock: true
  },

  // Premium - 9
  {
    id: 10,
    name: "Royal Noir Reserve",
    tier: "Premium",
    category: "Dark Chocolate",
    price: 1600,
    image: "images/premium-1.jpg",
    description: "Single-origin dark chocolate with deep aromatic notes and premium character.",
    inStock: true
  },
  {
    id: 11,
    name: "Imperial Signature Box",
    tier: "Premium",
    category: "Signature Box",
    price: 2200,
    image: "images/premium-2.jpg",
    description: "A refined assortment of premium chocolates with smooth ganache layers and elegant presentation.",
    inStock: true
  },
  {
    id: 12,
    name: "Golden Truffle Selection",
    tier: "Premium",
    category: "Truffle Box",
    price: 2450,
    image: "images/premium-3.jpg",
    description: "A premium selection of rich truffles with layered flavors and polished finish.",
    inStock: true
  },
  {
    id: 13,
    name: "Midnight Cocoa Prestige",
    tier: "Premium",
    category: "Dark Collection",
    price: 1800,
    image: "images/premium-4.jpg",
    description: "Bold dark cocoa notes with a clean, luxurious finish and refined texture.",
    inStock: true
  },
  {
    id: 14,
    name: "Amber Praline Edition",
    tier: "Premium",
    category: "Praline Box",
    price: 2100,
    image: "images/premium-5.jpg",
    description: "Premium pralines with roasted depth and a balanced caramel cocoa body.",
    inStock: true
  },
  {
    id: 15,
    name: "Velour Premium Mix",
    tier: "Premium",
    category: "Assorted Box",
    price: 2300,
    image: "images/premium-6.jpg",
    description: "An elegant mix of premium chocolates crafted for gifts and personal indulgence.",
    inStock: true
  },
  {
    id: 16,
    name: "Cocoa Silk Premium",
    tier: "Premium",
    category: "Ganache",
    price: 1950,
    image: "images/premium-7.jpg",
    description: "Smooth ganache chocolates with a soft finish and refined premium look.",
    inStock: true
  },
  {
    id: 17,
    name: "Dark Gold Artisan Set",
    tier: "Premium",
    category: "Artisan Box",
    price: 2600,
    image: "images/premium-8.jpg",
    description: "Artisan-crafted premium chocolates made for memorable gifting moments.",
    inStock: true
  },
  {
    id: 18,
    name: "Prestige Cocoa Trays",
    tier: "Premium",
    category: "Gift Tray",
    price: 2750,
    image: "images/premium-9.jpg",
    description: "A premium presentation tray with balanced flavor depth and elegant styling.",
    inStock: true
  },

  // Luxurious - 9
  {
    id: 19,
    name: "Sapphire Royal Luxe Box",
    tier: "Luxurious",
    category: "Luxury Box",
    price: 3200,
    image: "images/luxurious-1.jpg",
    description: "An ultra-luxury chocolate box crafted for exclusive gifting and rich flavor depth.",
    inStock: true
  },
  {
    id: 20,
    name: "Grand Celebration Collection",
    tier: "Luxurious",
    category: "Celebration Box",
    price: 4500,
    image: "images/luxurious-2.jpg",
    description: "A luxurious chocolate collection designed for celebrations and prestige gifting.",
    inStock: true
  },
  {
    id: 21,
    name: "Diamond Velvet Luxe Case",
    tier: "Luxurious",
    category: "Luxury Gift Case",
    price: 5200,
    image: "images/luxurious-3.jpg",
    description: "A high-end luxury assortment with elegant presentation and exceptional gifting appeal.",
    inStock: true
  },
  {
    id: 22,
    name: "Noir Celebration Grand Box",
    tier: "Luxurious",
    category: "Grand Box",
    price: 5800,
    image: "images/luxurious-4.jpg",
    description: "A dramatic and richly styled luxury box made for elite celebrations.",
    inStock: true
  },
  {
    id: 23,
    name: "Golden Crown Luxe Assortment",
    tier: "Luxurious",
    category: "Luxury Assorted",
    price: 6100,
    image: "images/luxurious-5.jpg",
    description: "A regal assortment with gold-accented presentation and layered gourmet richness.",
    inStock: true
  },
  {
    id: 24,
    name: "Heritage Sapphire Reserve",
    tier: "Luxurious",
    category: "Reserve Box",
    price: 6900,
    image: "images/luxurious-6.jpg",
    description: "Exclusive reserve chocolates with a stately finish and exceptional presentation.",
    inStock: true
  },
  {
    id: 25,
    name: "Imperial Grand Signature",
    tier: "Luxurious",
    category: "Signature Case",
    price: 7200,
    image: "images/luxurious-7.jpg",
    description: "A grand signature luxury case designed for high-value gifting and elite taste.",
    inStock: true
  },
  {
    id: 26,
    name: "Prestige Sapphire Ceremony Box",
    tier: "Luxurious",
    category: "Ceremony Box",
    price: 7600,
    image: "images/luxurious-8.jpg",
    description: "A sophisticated ceremony-ready chocolate box with deep richness and luxury detailing.",
    inStock: true
  },
  {
    id: 27,
    name: "Royal Diamond Collection",
    tier: "Luxurious",
    category: "Diamond Collection",
    price: 8500,
    image: "images/luxurious-9.jpg",
    description: "The highest luxury collection with premium presentation and rich gourmet craftsmanship.",
    inStock: true
  }
];

function getProducts() {
  return allProducts;
}

function getProductsByTier(tier) {
  return allProducts.filter((product) => product.tier === tier);
}