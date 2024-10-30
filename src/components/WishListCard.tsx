import { Product } from "@/types/dataTypes";
import { IoTrashOutline } from "react-icons/io5";
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'react-hot-toast';

const WishListCard = ({ product }: { product: Product }) => {
  const { removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleRemove = () => {
    removeFromWishlist(product.id);
    toast.success('Removed from wishlist!');
  };

  const handleAddToCart = () => {
    addToCart(product);
    removeFromWishlist(product.id);
    toast.success('Moved to cart!');
  };

  return (
    <div className="product-card">
      {/* Product image and UI layout */}
      <div className="bg-[#f5f5f5] p-4 rounded-[4px] relative mb-4 group overflow-hidden h-[280px]">
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
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors duration-200"
            onClick={handleRemove}
          >
            <IoTrashOutline 
              size={20} 
              className="text-gray-600 hover:text-red-500 transition-colors duration-200" 
            />
          </button>
        </div>

        <div className="h-full w-full flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="max-h-full max-w-full object-contain" 
          />
        </div>

        <div className="absolute inset-x-0 -bottom-0 flex items-center justify-center">
          <button 
            className="w-full bg-black text-white py-2 hover:bg-gray-800 rounded-b-[4px] transition-colors duration-200"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* Product details */}
      <div className="space-y-2">
        <h3 className="font-medium line-clamp-1">{product.name}</h3>
        <div className={`flex ${product.sidedRating ? 'gap-2' : 'flex-col gap-1'}`}>
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-medium">${product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;