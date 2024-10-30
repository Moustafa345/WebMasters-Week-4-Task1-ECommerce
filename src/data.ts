import { Product, serviceFeatureProps, sidbarCategoryItem, Slide, TeamMember } from "./types/dataTypes";
import { Monitor, Watch, Camera, Headphones, Gamepad, Truck, Shield } from "lucide-react";
import { CiMobile4 } from "react-icons/ci";


export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/contact", label: "Contact" },
  { path: "/about", label: "About" },
  { path: "/signup", label: "Sign Up" },
];

export const sidebarCategories: sidbarCategoryItem[] = [
  { name: "Woman's Fashion", hasSubmenu: true },
  { name: "Men's Fashion", hasSubmenu: true },
  { name: "Electronics" },
  { name: "Home & Lifestyle" },
  { name: "Medicine" },
  { name: "Sports & Outdoor" },
  { name: "Baby's & Toys" },
  { name: "Groceries & Pets" },
  { name: "Health & Beauty" },
];

export const products: Product[] = [
  {
    id: 10000015,
    name: "Pocket Watch",
    price: 300,
    rating: 4.9,
    reviews: 200,
    image: "/images/ourProducts-15.png",
    sidedRating: false,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Elegant pocket watch with a classic design.",
    isNew: true,
  },
  {
    id: 10000013,
    name: "White AC",
    price: 80,
    originalPrice: 100,
    rating: 4.3,
    reviews: 110,
    image: "/images/ourProducts-13.png",
    sidedRating: false,
    description: "Energy-efficient white air conditioner.",
    discount: "30"
    
  },
  {
    id: 10000017,
    name: "Headphone",
    price: 75,
    rating: 4.5,
    reviews: 70,
    image: "/images/ourProducts-17.png",
    sidedRating: false,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "High-fidelity headphones for an immersive audio experience.",

  },
  {
    id: 10000018,
    name: "Computer Mouse",
    price: 150,
    rating: 4.8,
    reviews: 130,
    image: "/images/ourProducts-18.png",
    sidedRating: false,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Ergonomic computer mouse for comfortable use.",
    isNew: true,
  },
  {
    id: 10000005,
    name: "Kids Electric Car",
    price: 960,
    rating: 5,
    reviews: 65,
    image: "/images/ourProducts-5.png",
    isNew: false,
    sidedRating: false,
    description: "Fun and safe electric car for kids.",
  },
  {
    id: 10000006,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    originalPrice: 1350,
    rating: 5,
    reviews: 35,
    image: "/images/ourProducts-6.png",
    sidedRating: false,
    hasColors: true,
    selectedColors: ['#efff61', '#DB4444'],
    description: "High-quality soccer cleats for junior players.",
    discount: 20
  },
  {
    id: 10000007,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    rating: 4.5,
    reviews: 55,
    image: "/images/ourProducts-7.png",
    isNew: true,
    sidedRating: false,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Ergonomic USB gamepad for an immersive gaming experience.",
  },
  {
    id: 10000008,
    name: "Quilted Satin Jacket",
    price: 660,
    originalPrice: 750,
    rating: 4.5,
    reviews: 55,
    image: "/images/ourProducts-8.png",
    sidedRating: false,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Stylish quilted satin jacket for all seasons.",
    discount: 12
  },
  {
    id: 10000009,
    name: "Plain Black Polo Shirt",
    price: 50,
    rating: 4,
    reviews: 20,
    image: "/images/ourProducts-9.png",
    sidedRating: false,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Classic plain black polo shirt for everyday wear.",
  },
];

export const categories = [
  { icon: CiMobile4, label: "Phones" },
  { icon: Monitor, label: "Computers" },
  { icon: Watch, label: "SmartWatch" },
  { icon: Camera, label: "Camera" },
  { icon: Headphones, label: "HeadPhones" },
  { icon: Gamepad, label: "Gaming" },
  { icon: Watch, label: "SmartWatch" },
  { icon: Camera, label: "Camera" },
  { icon: Headphones, label: "HeadPhones" },
  { icon: Gamepad, label: "Gaming" },
];

export const timeUnits = [
  { label: "Days", value: "03" },
  { label: "Hours", value: "23" },
  { label: "Minutes", value: "19" },
  { label: "Seconds", value: "56" },
];

export const bestSellingProducts: Product[] = [
  {
    id: 10000013,
    name: "White AC",
    price: 80,
    originalPrice: 100,
    rating: 4.3,
    reviews: 110,
    image: "/images/ourProducts-13.png",
    sidedRating: false,
    description: "Energy-efficient white air conditioner.",
    discount: "30"
    
  },
  {
    id: 10000006,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    originalPrice: 1350,
    rating: 5,
    reviews: 35,
    image: "/images/ourProducts-6.png",
    sidedRating: false,
    hasColors: true,
    selectedColors: ['#efff61', '#DB4444'],
    description: "High-quality soccer cleats for junior players.",
    discount: 20
  },
  {
    id: 10000008,
    name: "Quilted Satin Jacket",
    price: 660,
    originalPrice: 750,
    rating: 4.5,
    reviews: 55,
    image: "/images/ourProducts-8.png",
    sidedRating: false,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Stylish quilted satin jacket for all seasons.",
    discount: 12
  },
  {
    id: 10000005,
    name: "Kids Electric Car",
    price: 960,
    rating: 5,
    reviews: 65,
    image: "/images/ourProducts-5.png",
    isNew: false,
    sidedRating: true,
    description: "Fun and safe electric car for kids.",
  },
];


export const ourProducts: Product[] = [
  {
    id: 10000001,
    name: "iLOCK power strip",
    price: 100,
    rating: 3,
    reviews: 35,
    image: "/images/ourProducts-1.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-1.png",
        alt: "iLOCK power strip front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-1-2.png",
        alt: "iLOCK power strip top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-1-3.png",
        alt: "iLOCK power strip side view"
      },
      {
        id: 4,
        url: "/images/ourProducts-1-4.png",
        alt: "iLOCK power strip angle view"
      }
    ],
    sidedRating: true,
    hasColors: false,
    description: "High-quality iLOCK power strip for all environments.",
  },
  {
    id: 10000002,
    name: "CANON EOS DSLR Camera",
    price: 360,
    rating: 4,
    reviews: 95,
    image: "/images/ourProducts-2.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-2.png",
        alt: "CANON EOS DSLR Camera front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-2-2.png",
        alt: "CANON EOS DSLR Camera top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-2-3.png",
        alt: "CANON EOS DSLR Camera side view"
      },
      {
        id: 4,
        url: "/images/ourProducts-2-4.png",
        alt: "CANON EOS DSLR Camera side view"
      },
    ],
    sidedRating: true,
    hasColors: false,
    description: "Professional DSLR camera with high resolution.",
  },
  {
    id: 10000003,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    rating: 5,
    reviews: 325,
    image: "/images/ourProducts-3.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-3.png",
        alt: "ASUS FHD Gaming Laptop front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-3-2.png",
        alt: "ASUS FHD Gaming Laptop top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-3-3.png",
        alt: "ASUS FHD Gaming Laptop side view"
      },
      {
        id: 4,
        url: "/images/ourProducts-3-4.png",
        alt: "ASUS FHD Gaming Laptop side view"
      },
    ],
    sidedRating: true,
    hasColors: false,
    description: "High-performance gaming laptop with FHD display.",
  },
  {
    id: 10000004,
    name: "Curology Product Set",
    price: 500,
    rating: 4,
    reviews: 145,
    image: "/images/ourProducts-4.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-4.png",
        alt: "Curology Product Set front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-4-2.png",
        alt: "Curology Product Set top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-4-3.png",
        alt: "Curology Product Set side view"
      },
      {
        id: 4,
        url: "/images/ourProducts-4-4.png",
        alt: "Curology Product Set angle view"
      },
    ],
    sidedRating: true,
    hasColors: false,
    description: "Complete skincare set for personalized treatment.",
  },
  {
    id: 10000005,
    name: "Kids Electric Car",
    price: 960,
    rating: 5,
    reviews: 65,
    image: "/images/ourProducts-5.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-5.png",
        alt: "Kids Electric Car front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-5-2.png",
        alt: "Kids Electric Car top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-5-3.png",
        alt: "Kids Electric Car side view"
      },
      {
        id: 4,
        url: "/images/ourProducts-5-4.png",
        alt: "Kids Electric Car angle view"
      },
    ],
    isNew: false,
    sidedRating: true,
    description: "Fun and safe electric car for kids.",
  },
  {
    id: 10000006,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    rating: 5,
    reviews: 35,
    image: "/images/ourProducts-6.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-6.png",
        alt: "Jr. Zoom Soccer Cleats front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-6-2.png",
        alt: "Jr. Zoom Soccer Cleats top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-6-3.png",
        alt: "Jr. Zoom Soccer Cleats side view"
      },
      {
        id: 4,
        url: "/images/ourProducts-6-4.png",
        alt: "Jr. Zoom Soccer Cleats angle view"
      },
    ],
    sidedRating: true,
    hasColors: true,
    selectedColors: ['#efff61', '#DB4444'],
    description: "High-quality soccer cleats for junior players.",
  },
  {
    id: 10000007,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    rating: 4.5,
    reviews: 55,
    image: "/images/ourProducts-7.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-7.png",
        alt: "GP11 Shooter USB Gamepad front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-7-2.png",
        alt: "GP11 Shooter USB Gamepad top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-7-3.png",
        alt: "GP11 Shooter USB Gamepad side view"
      },
      {
        id: 4,
        url: "/images/ourProducts-7-4.png",
        alt: "GP11 Shooter USB Gamepad angle view"
      },
    ],
    isNew: true,
    sidedRating: true,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Ergonomic USB gamepad for an immersive gaming experience.",
  },
  {
    id: 10000008,
    name: "Quilted Satin Jacket",
    price: 660,
    rating: 4.5,
    reviews: 55,
    image: "/images/ourProducts-8.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-8.png",
        alt: "Quilted Satin Jacket front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-8-2.png",
        alt: "Quilted Satin Jacket top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-8-3.png",
        alt: "Quilted Satin Jacket side view"
      }
    ],
    sidedRating: true,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Stylish quilted satin jacket for all seasons.",
  },
  {
    id: 10000009,
    name: "Plain Black Polo Shirt",
    price: 50,
    rating: 4,
    reviews: 20,
    image: "/images/ourProducts-9.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-9.png",
        alt: "Plain Black Polo Shirt front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-9-2.png",
        alt: "Plain Black Polo Shirt top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-9-3.png",
        alt: "Plain Black Polo Shirt side view"
      },
      {
        id: 3,
        url: "/images/ourProducts-9.png",
        alt: "Plain Black Polo Shirt angle view"
      }
    ],
    sidedRating: true,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Classic plain black polo shirt for everyday wear.",
  },
  {
    id: 10000010,
    name: "Woman Dress",
    price: 120,
    rating: 4.5,
    reviews: 80,
    image: "/images/ourProducts-10.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-10.png",
        alt: "Woman Dress front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-10-2.png",
        alt: "Woman Dress top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-10-3.png",
        alt: "Woman Dress side view"
      },
      {
        id: 4,
        url: "/images/ourProducts-10-4.png",
        alt: "Woman Dress angle view"
      },
    ],
    sidedRating: true,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Elegant dress for women, perfect for any occasion.",
  },
  {
    id: 10000011,
    name: "T-shirt",
    price: 150,
    rating: 4.8,
    reviews: 150,
    image: "/images/ourProducts-11.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-11.png",
        alt: "T-shirt front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-11-2.png",
        alt: "T-shirt top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-11-3.png",
        alt: "T-shirt side view"
      },
      {
        id: 4,
        url: "/images/ourProducts-11-4.png",
        alt: "T-shirt angle view"
      },
    ],
    sidedRating: true,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Comfortable and stylish T-shirt for casual wear.",
  },
  {
    id: 10000012,
    name: "Fitbit Tracker",
    price: 200,
    rating: 4.7,
    reviews: 90,
    image: "/images/ourProducts-12.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-12.png",
        alt: "Fitbit Tracker front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-12-2.png",
        alt: "Fitbit Tracker top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-12-3.png",
        alt: "Fitbit Tracker side view"
      },
      {
        id: 4,
        url: "/images/ourProducts-12-4.png",
        alt: "Fitbit Tracker side view"
      },
    ],
    sidedRating: true,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Advanced fitness tracker with multiple health metrics.",
  },
  {
    id: 10000013,
    name: "White AC",
    price: 80,
    rating: 4.3,
    reviews: 110,
    image: "/images/ourProducts-13.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-13.png",
        alt: "White AC front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-13-2.png",
        alt: "White AC top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-13-3.png",
        alt: "White AC side view"
      },
      {
        id: 4,
        url: "/images/ourProducts-13-4.png",
        alt: "White AC angle view"
      },
    ],
    sidedRating: true,
    description: "Energy-efficient white air conditioner.",
  },
  {
    id: 10000014,
    name: "Hair Dryer",
    price: 40,
    rating: 4.6,
    reviews: 60,
    image: "/images/ourProducts-14.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-14.png",
        alt: "Hair Dryer front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-14-2.png",
        alt: "Hair Dryer top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-14-3.png",
        alt: "Hair Dryer side view"
      },
      {
        id: 4,
        url: "/images/ourProducts-14-4.png",
        alt: "Hair Dryer angle view"
      },
    ],
    sidedRating: true,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Powerful hair dryer for quick and easy styling.",
  },
  {
    id: 10000015,
    name: "Pocket Watch",
    price: 300,
    rating: 4.9,
    reviews: 200,
    image: "/images/ourProducts-15.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-15.png",
        alt: "Pocket Watch front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-15-2.png",
        alt: "Pocket Watch top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-15-3.png",
        alt: "Pocket Watch side view"
      },
      {
        id: 4,
        url: "/images/ourProducts-15-4.png",
        alt: "Pocket Watch angle view"
      },
    ],
    sidedRating: true,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Elegant pocket watch with a classic design.",
    isNew: true,
  },
  {
    id: 10000016,
    name: "Canon Color Photo Printer",
    price: 25,
    rating: 4.2,
    reviews: 45,
    image: "/images/ourProducts-16.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-16.png",
        alt: "Canon Color Photo Printer front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-16-2.png",
        alt: "Canon Color Photo Printer top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-16-3.png",
        alt: "Canon Color Photo Printer side view"
      }
    ],
    sidedRating: true,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "High-quality color photo printer from Canon.",
  },
  {
    id: 10000017,
    name: "Headphone",
    price: 75,
    rating: 4.5,
    reviews: 70,
    image: "/images/ourProducts-17.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-17.png",
        alt: "Headphone front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-17-2.png",
        alt: "Headphone top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-17-3.png",
        alt: "Headphone side view"
      },
      {
        id: 4,
        url: "/images/ourProducts-17-4.png",
        alt: "Headphone angle view"
      },
    ],
    sidedRating: true,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "High-fidelity headphones for an immersive audio experience.",
  },
  {
    id: 10000018,
    name: "Computer Mouse",
    price: 150,
    rating: 4.8,
    reviews: 130,
    image: "/images/ourProducts-18.png",
    images: [
      {
        id: 1,
        url: "/images/ourProducts-18.png",
        alt: "Computer Mouse front view"
      },
      {
        id: 2,
        url: "/images/ourProducts-18-2.png",
        alt: "Computer Mouse top view"
      },
      {
        id: 3,
        url: "/images/ourProducts-18-3.png",
        alt: "Computer Mouse side view"
      },
      {
        id: 4,
        url: "/images/ourProducts-18-4.png",
        alt: "Computer Mouse angle view"
      },
    ],
    sidedRating: true,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Ergonomic computer mouse for comfortable use.",
    isNew: true,
  },
];



export const features: serviceFeatureProps[] = [
  {
    icon: Truck,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140"
  },
  {
    icon: Headphones,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support"
  },
  {
    icon: Shield,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days"
  }
];



export const slides: Slide[] = [
  {
      title: "iPhone 14 Series",
      description: "Up to 10% off Voucher",
      image: "/images/iPhone14.png",
      icon: "/images/apple-icon.png"
  },
  {
      title: "Samsung Galaxy S23",
      description: "Up to 15% off Voucher",
      image: "/images/Samsung-S23.png",
      icon: "/images/samsung-icon.png"
  },
  {
      title: "Google Pixel 7",
      description: "Up to 20% off Voucher",
      image: "images/google-pixel7.png",
      icon: "/images/google-icon.png"
  },
  {
      title: "OnePlus 11",
      description: "Up to 12% off Voucher",
      image: "images/OnePlus-11.png",
      icon: "images/onePlus-icon.png"
  },
  {
      title: "Xiaomi 13",
      description: "Up to 18% off Voucher",
      image: "images/Xiaomi-13.png",
      icon: "/images/Xiaomi-icon.png"
  }
];



export const justForYouProducts: Product[] = [
  {
    id: 10000018,
    name: "Computer Mouse",
    price: 150,
    rating: 4.8,
    reviews: 130,
    image: "/images/ourProducts-18.png",
    sidedRating: false,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Ergonomic computer mouse for comfortable use.",
    isNew: true,
  },
  {
    id: 10000005,
    name: "Kids Electric Car",
    price: 960,
    rating: 5,
    reviews: 65,
    image: "/images/ourProducts-5.png",
    isNew: false,
    sidedRating: false,
    description: "Fun and safe electric car for kids.",
  },
  {
    id: 10000006,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    originalPrice: 1350,
    rating: 5,
    reviews: 35,
    image: "/images/ourProducts-6.png",
    sidedRating: false,
    hasColors: true,
    selectedColors: ['#efff61', '#DB4444'],
    description: "High-quality soccer cleats for junior players.",
    discount: 20
  },
  {
    id: 10000007,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    rating: 4.5,
    reviews: 55,
    image: "/images/ourProducts-7.png",
    isNew: true,
    sidedRating: false,
    hasColors: true,
    selectedColors: ['#000000', '#DB4444'],
    description: "Ergonomic USB gamepad for an immersive gaming experience.",
  },
];


export const teamMembers: TeamMember[] = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "images/aboutTeam-1.png",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image: "images/aboutTeam-2.png",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  },
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "images/aboutTeam-3.png",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  },
  {
    name: "Alexander Matt",
    role: "Managing Director",
    image: "images/aboutTeam-4.png",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: "images/aboutTeam-5.png",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  },
  {
    name: "Jenny Scott",
    role: "Product Designer",
    image: "images/aboutTeam-6.png",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image: "images/aboutTeam-1.png",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: "images/aboutTeam-2.png",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  },
  {
    name: "test1",
    role: "Product Designer",
    image: "images/aboutTeam-3.png",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  },
  {
    name: "test2",
    role: "Product Designer",
    image: "images/aboutTeam-4.png",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: "images/aboutTeam-5.png",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  },
  {
    name: "test1",
    role: "Product Designer",
    image: "images/aboutTeam-6.png",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  },
  {
    name: "test2",
    role: "Product Designer",
    image: "images/aboutTeam-1.png",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  },
  {
    name: "test3",
    role: "Product Designer",
    image: "images/aboutTeam-2.png",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  },
  {
    name: "test1",
    role: "Product Designer",
    image: "images/aboutTeam-3.png",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  },
];


export const relatedItems: Product[] = [
  {
    id: 10000014,
    name: "Hair Dryer",
    price: 40,
    rating: 4.6,
    reviews: 60,
    image: "/images/ourProducts-14.png",
    sidedRating: false,
    description: "Powerful hair dryer for quick and easy styling.",
  },
  {
    id: 10000015,
    name: "Pocket Watch",
    price: 300,
    rating: 4.9,
    reviews: 200,
    image: "/images/ourProducts-15.png",
    sidedRating: false,
    description: "Elegant pocket watch with a classic design.",
    isNew: true,
  },
  {
    id: 10000016,
    name: "Canon Color Photo Printer",
    price: 25,
    rating: 4.2,
    reviews: 45,
    image: "/images/ourProducts-16.png",
    sidedRating: false,
    description: "High-quality color photo printer from Canon.",
  },
  {
    id: 10000017,
    name: "Headphone",
    price: 75,
    rating: 4.5,
    reviews: 70,
    image: "/images/ourProducts-17.png",
    sidedRating: false,
    description: "High-fidelity headphones for an immersive audio experience.",
   
  }
];
