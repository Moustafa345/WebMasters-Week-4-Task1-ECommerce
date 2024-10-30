

export interface sidbarCategoryItem {
    name: string;
    hasSubmenu?: boolean;
}


export interface ProductImage {
  id: number;
  url: string;
  alt: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number | string;
  discount?: number | string;
  rating?: number;
  reviews?: number;
  image?: string;           // Main/thumbnail image
  images?: ProductImage[];  // Array of all product images
  isNew?: boolean;
  sidedRating?: boolean;
  hasColors?: boolean;
  selectedColors?: string[];
  description?: string;
  quantity?: number;
}




export interface serviceFeatureProps {
    icon: React.ComponentType<{ className?: string }>; // Ensure icon accepts className as a prop
    title: string;
    description: string;
    className?: string;
    iconSubClassName?: string;
    iconClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
  }


export interface Slide {
    title: string;
    description: string;
    image: string;
    icon: string;
  }


  export interface TeamMember {
    name: string;
    role: string;
    image: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  

  export interface User {
    name: string;
    emailOrPhone: string;
    password: string;
  }