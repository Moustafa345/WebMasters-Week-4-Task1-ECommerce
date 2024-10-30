import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { RiLoopLeftLine } from 'react-icons/ri';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { ourProducts, relatedItems } from '@/data';
import { Product } from "@/types/dataTypes";
import ProductCard from '@/components/ProductCard';
import LeftSideHeader from '@/components/LeftSideHeader';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { toast } from 'react-hot-toast';
import StarRating from '@/components/StarRating';

const ProductPageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("white");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedButton, setSelectedButton] = useState("");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

  const sizeOptions = ["XS", "S", "M", "L", "XL"];

  useEffect(() => {
    // Find the product from ourProducts based on the ID
    const foundProduct = ourProducts.find(p => p.id === parseInt(id || "0"));
    if (foundProduct) {
      setProduct(foundProduct);
      if (foundProduct.images && foundProduct.images.length > 0) {
        setSelectedImage(foundProduct.images[0].url); // Use the first image from the images array
      }
      if (foundProduct.selectedColors && foundProduct.selectedColors.length > 0) {
        setSelectedColor(foundProduct.selectedColors[0]);
      }
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        ...product,
        quantity
      });   
      navigate('/cart');
      toast.success('Added to cart!');
    }
  };

  const handleAddToWishlist = () => {
    if (product) {
      addToWishlist(product);
      toast.success(
        isInWishlist(product.id)
          ? 'Removed from wishlist!'
          : 'Added to wishlist!'
      );
    }
  };

  if (!product) {
    return (
      <div className="container p-6 flex items-center justify-center min-h-[400px]">
        <p className="text-xl">Product not found</p>
      </div>
    );
  }

  return (
    <div className="container p-6">
      {/* Breadcrumb Navigation */}
      <div className="container mt-7 md:mt-10 lg:mt-20">
        <div className="flex mb-20 text-sm">
          <span className="text-[#8f8f8f]">Account</span>
          <span className="mx-2 text-[#8f8f8f]">/</span>
          <span className='text-[#8f8f8f]'>Products</span>
          <span className="mx-2 text-[#8f8f8f]">/</span>
          <span className='font-medium'>{product.name}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery with Vertical Thumbnails */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {product.images?.map((image) => (
              <Card
                key={image.id}
                className={cn(
                  "cursor-pointer transition-all w-[170px] bg-[#F5F5F5]",
                  selectedImage === image.url ? "ring-2 ring-primary" : ""
                )}
                onClick={() => setSelectedImage(image.url)}
              >
                <CardContent className="p-2">
                  <div className="relative w-full h-[138px]">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Image */}
          <Card className="flex-1 overflow-hidden bg-[#F5F5F5] px-3">
            <CardContent className="p-2">
              <div className="relative w-full h-[600px]">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-contain rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <StarRating rating={product.rating ?? 0} />
              <span className="text-gray-500">({product.reviews} Reviews)</span>
              <p className="text-green-500">In Stock</p>
            </div>
          </div>

          <div className='border-b border-b-gray-400 pb-7'>
            <p className="text-2xl font-normal mb-5">${product.price.toFixed(2)}</p>
            <p className='text-sm font-normal'>
              {product.description || "High quality product with excellent features and design. Perfect for everyday use."}
            </p>
          </div>

          <div className="space-y-4">
            {product.hasColors && (
              <div>
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-normal">Colors:</h3>
                  <RadioGroup
                    value={selectedColor}
                    onValueChange={setSelectedColor}
                    className="flex gap-4"
                  >
                    {product.selectedColors?.map((color, index) => (
                      <div key={index} className="flex items-center">
                        <RadioGroupItem
                          value={color}
                          className={`w-5 h-5 rounded-full ${
                            selectedColor === color
                              ? "border-2 border-white outline-2 outline outline-black ring-2 ring-black"
                              : "border border-transparent"
                          } [&:not(:has([data-state=checked]))]:hover:border-gray-400 [&_span]:hidden`}
                          style={{ backgroundColor: color }}
                        />
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            )}

            <div>
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-normal">Size:</h3>
                <div className="flex gap-2">
                  {sizeOptions.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      className={`w-12 h-12 ${selectedSize === size ? "bg-[#DB4444] hover:bg-red-700" : ""}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className={selectedButton === "decrease" ? "bg-[#DB4444] text-white focus:bg-[#DB4444] focus:text-white" : ""}
                  onClick={() => {
                    setQuantity(Math.max(1, quantity - 1));
                    setSelectedButton("decrease");
                  }}
                >
                  -
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-16 text-center font-bold text-xl mx-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className={selectedButton === "increase" ? "bg-[#DB4444] text-white focus:bg-[#DB4444] focus:text-white" : ""}
                  onClick={() => {
                    setQuantity(quantity + 1);
                    setSelectedButton("increase");
                  }}
                >
                  +
                </Button>
              </div>
              <Button 
                className="flex-1 bg-[#DB4444] hover:bg-red-700"
                onClick={handleAddToCart}
              >
                Buy Now
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={handleAddToWishlist}
              >
                <Heart className={cn(
                  "h-4 w-4",
                  isInWishlist(product.id) && "fill-current text-red-500"
                )} />
              </Button>
            </div>
          </div>

          <div className="space-y-4 border-2 rounded p-5 relative">
            <div className="flex items-center gap-2">
              <LiaShippingFastSolid className="h-10 w-10 mr-2" />
              <div>
                <h3 className="font-medium">Free Delivery</h3>
                <p className="text-xs underline">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="absolute left-0 w-full h-[2px] bg-gray-200"></div>

            <div className="flex items-center gap-2 pt-3">
              <RiLoopLeftLine className="h-10 w-10 mr-2" />
              <div>
                <h3 className="font-medium">Return Delivery</h3>
                <p className="text-xs">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className='space-y-10 my-20'>
        <LeftSideHeader header="Related Items" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedItems.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPageDetails;