import { useState } from 'react';
import { Product } from "@/types/dataTypes";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { toast } from 'react-hot-toast';
import StarRating from './StarRating';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }: { product: Product }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to cart!');
  };

  const handleWishlistClick = () => {
    addToWishlist(product);
    toast.success(
      isInWishlist(product.id) 
        ? 'Removed from wishlist!' 
        : 'Added to wishlist!'
    );
  };

  const handleCardClick = () => {
    navigate(`/productDetails/${product.id}`);
  };


  return (
    <div className="product-card" >
      <div className="bg-[#f5f5f5] p-4 rounded-[4px] relative mb-4 group overflow-hidden h-[250px]">
      {product.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white py-1 px-2 rounded-md text-sm z-10">
            -{product.discount}%
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-[#00FF66] text-white py-1 px-2 rounded-md text-xs font-normal z-10">
            New
          </span>
        )}
        <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
          <button 
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            onClick={handleWishlistClick}
          >
            {isInWishlist(product.id) ? (
              <FaHeart size={20} className="text-red-500" />
            ) : (
              <FaRegHeart size={20} />
            )}
          </button>
          <button 
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            onClick={() => {
              navigate(`/productDetails/${product.id}`);
            }}
          >
            <IoEyeOutline size={20} />
          </button>
        </div>

        <div className="h-full w-full flex items-center justify-center cursor-pointer" onClick={handleCardClick}>
          <img 
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="absolute inset-x-0 -bottom-1 h-0 group-hover:h-12 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <button
            className="w-full bg-black text-white py-2 hover:bg-gray-800 transition-colors rounded-b-[4px]"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium line-clamp-1">{product.name}</h3>
        <div className={`flex ${product.sidedRating ? 'gap-2' : 'flex-col gap-1'}`}>
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-medium">${product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>

          <div className={`flex items-center gap-2 ${product.sidedRating ? '' : 'mt-1'}`}>
            <StarRating rating={product.rating ?? 0} />
            <span className="text-gray-500">({product.reviews})</span>
          </div>
        </div>

        {product.hasColors && (
          <div className="flex items-center gap-2 mt-2">
            {product.selectedColors?.map((color, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedColor(color)}
                className={`p-[10px] rounded-full border-2 border-white cursor-pointer ${
                  selectedColor === color ? 'outline outline-2 outline-black p-[7px]' : ''
                }`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;