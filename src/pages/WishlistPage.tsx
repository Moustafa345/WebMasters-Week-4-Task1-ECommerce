
import ProductCard from "@/components/ProductCard";
import WishListCard from "@/components/WishListCard";
import { justForYouProducts } from "@/data";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import toast from "react-hot-toast";

const WishlistPage = () => {
  const { wishlistItems, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveAllToBag = () => {
    wishlistItems.forEach(item => {
      addToCart(item); 
    });
    toast.success("All products added successfully to the cart")
    clearWishlist(); 
  };

  return (
    <section className="mb-12 mt-16 w-full px-4 lg:px-8 mx-auto container">
      {/* Wish List */}
      <div className="flex justify-between items-center mb-6 flex-wrap">
        <h2 className="text-xl font-normal">Wishlist ({wishlistItems.length})</h2>
        <button
          onClick={handleMoveAllToBag}
          className="font-medium text-base bg-white text-black w-full sm:w-56 h-14 rounded-[4px] border-2 mt-4 sm:mt-0"
        >
          Move All To Bag
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistItems.map(product => (
          <WishListCard key={product.id} product={product} />
        ))}
      </div>

      {/* Just For You */}
      <div className="flex justify-between items-center mb-6 mt-20 flex-wrap">
        <div className="flex gap-4 items-center mb-6">
          <div className="bg-[#DB4444] w-5 h-10 rounded-[4px]"></div>
          <div className="text-black font-normal text-xl">Just For You</div>
        </div>
        <button className="font-medium text-base bg-white text-black w-full sm:w-[150px] h-14 rounded-[4px] border-2 mt-4 sm:mt-0">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {justForYouProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default WishlistPage;
