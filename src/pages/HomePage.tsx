import CountdownTimer from '@/components/CountdownTimer';
import LeftSideHeader from '@/components/LeftSideHeader';
import { NavigationArrows } from '@/components/NavigationArrows';
import ProductCard from '@/components/ProductCard';
import ServiceFeature from '@/components/ServiceFeatures';
import Sidebar from '@/components/Sidebar';
import Slider from '@/components/Slider';
import { bestSellingProducts, categories, features, ourProducts, products } from '@/data';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const HomePage = () => {



  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  // Flash Sale states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(4);

  // Categories states
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [categoriesPerPage, setCategoriesPerPage] = useState(6);

  // Our Products states
  const [ourProductsIndex, setourProductsIndex] = useState(0);
  const [ourProductsPerPage, setourProductsPerPage] = useState(8);

  // Dynamic Resize for both Products and Categories
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProductsPerPage(1);
        setCategoriesPerPage(2);
        setourProductsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setProductsPerPage(2);
        setCategoriesPerPage(3);
        setourProductsPerPage(4);
      } else {
        setProductsPerPage(4);
        setCategoriesPerPage(6);
        setourProductsPerPage(8);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset the index when the products or categories per page changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [productsPerPage]);

  useEffect(() => {
    setCategoryIndex(0);
  }, [categoriesPerPage]);

  useEffect(() => {
    setourProductsIndex(0);
  }, [ourProductsPerPage])

  // Dynamic handler for navigation
  const handlePrevClick = (index: number, setIndex: React.Dispatch<React.SetStateAction<number>>, perPage: number) => {
    if (index > 0) {
      setIndex(prev => Math.max(0, prev - perPage));
    }
  };

  const handleNextClick = (index: number, setIndex: React.Dispatch<React.SetStateAction<number>>, perPage: number, totalItems: number) => {
    if (index + perPage < totalItems) {
      setIndex(prev => Math.min(totalItems - perPage, prev + perPage));
    }
  };

  // Flash Sales logic
  const canGoPrevProducts = currentIndex > 0;
  const canGoNextProducts = currentIndex + productsPerPage < products.length;
  const visibleProducts = products.slice(currentIndex, currentIndex + productsPerPage);

  // Categories logic
  const canGoPrevCategories = categoryIndex > 0;
  const canGoNextCategories = categoryIndex + categoriesPerPage < categories.length;
  const visibleCategories = categories.slice(categoryIndex, categoryIndex + categoriesPerPage);

  // Our Products logic
  const canGoPrevOurProducts = ourProductsIndex > 0;
  const canGoNextOurProducts = ourProductsIndex + ourProductsPerPage < ourProducts.length;
  const visibleOurProducts = ourProducts.slice(ourProductsIndex, ourProductsIndex + ourProductsPerPage);


  return (
    <div className="container px-4 pb-8">
      {/* Hero Section with Sidebar and Slider */}
      <div className="flex flex-col md:flex-row md:space-x-6 mb-12">
        {/* <aside className="w-full md:w-52 lg:w-64 md:mb-0"> */}
        <aside>
          <Sidebar />
        </aside>
        <main className="flex-1">
          <Slider />
        </main>
      </div>

      {/* Flash Sale Section */}
      <section className="mb-12 md:mt-16 lg:mt-32 border-b pb-14">
        <LeftSideHeader header="Today's" />

        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center mb-6 mt-9">
          <div className="flex items-center gap-10 md:gap-28">
            <h2 className="text-2xl md:text-4xl font-semibold">Flash Sales</h2>
            <CountdownTimer />
          </div>
          <NavigationArrows
            onPrevClick={() => handlePrevClick(currentIndex, setCurrentIndex, productsPerPage)}
            onNextClick={() => handleNextClick(currentIndex, setCurrentIndex, productsPerPage, products.length)}
            canGoPrev={canGoPrevProducts}
            canGoNext={canGoNextProducts}
          />
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-start space-y-4 mb-4">
          <h2 className="text-2xl font-semibold">Flash Sales</h2>
          <div className="flex justify-between w-full items-center">
            <CountdownTimer />
            <NavigationArrows
              onPrevClick={() => handlePrevClick(currentIndex, setCurrentIndex, productsPerPage)}
              onNextClick={() => handleNextClick(currentIndex, setCurrentIndex, productsPerPage, products.length)}
              canGoPrev={canGoPrevProducts}
              canGoNext={canGoNextProducts}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-[#DB4444] text-white w-[234px] h-[56px] px-8 py-3 rounded-[4px] hover:bg-red-600 transition-colors">
            View All Products
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-12 mt-16 border-b pb-14">
        <LeftSideHeader header="Categories" />

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-4xl font-semibold">Browse By Category</h2>
          <NavigationArrows
            onPrevClick={() => handlePrevClick(categoryIndex, setCategoryIndex, categoriesPerPage)}
            onNextClick={() => handleNextClick(categoryIndex, setCategoryIndex, categoriesPerPage, categories.length)}
            canGoPrev={canGoPrevCategories}
            canGoNext={canGoNextCategories}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {visibleCategories.map((category, index) => (
            <button
              key={index}
              className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-md hover:bg-[#DB4444] hover:text-white transition-colors group h-36"
            >
              <category.icon className="w-12 h-12 mb-4 group-hover:text-white" />
              <span className="text-sm font-medium">{category.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Best Selling Products Section */}
      <section className='mb-12 mt-16'>
        <LeftSideHeader header="This Month" />
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-4xl font-semibold">Best Selling Products</h2>
          <button className="bg-[#DB4444] text-white w-[159px] h-[56px] px-8 py-3 rounded-[4px] hover:bg-red-600 transition-colors">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellingProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>


      {/* New Music Experience Section */}
      <section className="mb-12 mt-16 bg-black text-white px-10 rounded-lg">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="md:mb-8">
            <h3 className="text-[#00FF66] mb-8 mt-8 md:mt-20">Categories</h3>
            <h2 className="text-4xl md:text-5xl font-semibold mb-8 md:leading-[60px] max-w-md">Enhance Your Music Experience</h2>
            <div className="flex space-x-4 mb-6">
              <div className="flex flex-col justify-center items-center bg-white text-black rounded-full p-2 w-16 h-16">
                <span className="font-semibold text-base">23</span>
                <span className="text-[11px] font-normal">Hours</span>
              </div>
              <div className="flex flex-col justify-center items-center bg-white text-black rounded-full p-2 w-16 h-16">
                <span className="font-semibold text-base">05</span>
                <span className="text-[11px] font-normal">Days</span>
              </div>
              <div className="flex flex-col justify-center items-center bg-white text-black rounded-full p-2 w-16 h-16">
                <span className="font-semibold text-base">59</span>
                <span className="text-[11px] font-normal">Minutes</span>
              </div>
              <div className="flex flex-col justify-center items-center bg-white text-black rounded-full p-2 w-16 h-16">
                <span className="font-semibold text-base">35</span>
                <span className="text-[11px] font-normal">Seconds</span>
              </div>
            </div>
            <button className="bg-[#00FF66] text-white w-[171px] h-14 font-bold rounded mb-5 md:mb-20">
              Buy Now!
            </button>
          </div>

          <div className="relative pb-5 md:pb-0">
            <div className="absolute inset-0 bg-[#D9D9D9] opacity-30 filter blur-[100px] rounded-lg"></div>
            <img
              src="images/JBL_BOOMBOX.png"
              alt="JBL Speaker"
              className="relative z-10 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="mb-12 mt-16">
        <LeftSideHeader header="Our Products" />
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-4xl font-semibold">Explore Our Products</h2>
          <NavigationArrows
            onPrevClick={() => handlePrevClick(ourProductsIndex, setourProductsIndex, ourProductsPerPage)}
            onNextClick={() => handleNextClick(ourProductsIndex, setourProductsIndex, ourProductsPerPage, ourProducts.length)}
            canGoPrev={canGoPrevOurProducts}
            canGoNext={canGoNextOurProducts}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleOurProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-[#DB4444] text-white w-[234px] h-[56px] px-8 py-3 rounded-[4px] hover:bg-red-600 transition-colors">
            View All Products
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section className='mb-8 mt-12'>
        <LeftSideHeader header="Featured" />
        <h2 className="text-sm md:text-3xl font-normal mb-6">New Arrival</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* First Column: PlayStation */}
          <div className="row-span-2 flex justify-center items-end relative overflow-hidden bg-black rounded-[4px] col-span-1 lg:col-span-2 lg:row-span-2">
            <img
              src="images/featured-1.png"
              alt="PlayStation 5"
            />
            <div className="absolute bottom-0 left-0 md:bottom-4 md:left-4 flex flex-col text-white p-4 max-w-[300px]">
              <h1 className="text-xl font-bold mb-4">PlayStation 5</h1>
              <p className="mb-3 font-normal text-sm">Black and White version of the PS5 coming out on sale.</p>
              <Link to='#' className="underline decoration-gray-400 underline-offset-4 hover:decoration-gray-300 text-white text-base">Shop Now</Link>
            </div>
          </div>

          {/* Second Column: Women's Collections */}
          <div className="relative flex justify-end items-center overflow-hidden bg-black rounded-[4px] col-span-1 sm:col-span-1 lg:col-span-2">
            <img
              src="images/featured-2.png"
              alt="Women's Collections"
            />
            <div className="absolute bottom-0 left-0 md:bottom-4 md:left-4 flex flex-col text-white p-4 max-w-[300px]">
              <h1 className="text-xl md:text-2xl font-semibold mb-4">Women's Collections</h1>
              <p className="mb-3 font-normal text-sm">Featured woman collections that give you another vibe.</p>
              <Link to='#' className="underline decoration-gray-400 underline-offset-4 hover:decoration-gray-300 text-white text-base">Shop Now</Link>
            </div>
          </div>

          {/* Third and Fourth Columns: Speakers and Perfume */}
          <div className="col-start-1 sm:col-span-1 lg:col-span-2 flex flex-row gap-4">
            <div className="relative flex justify-center items-center overflow-hidden bg-[#303030] w-full rounded-[4px] py-6">
              <img
                src="images/featured-3.png"
                alt="Speakers"
              />
              <div className="absolute bottom-0 left-0 md:bottom-4 md:left-4 flex flex-col text-white p-4 max-w-[300px]">
                <h1 className="text-lg md:text-2xl font-semibold mb-1">Speakers</h1>
                <p className="mb-3 font-normal text-xs md:text-sm">Amazon wireless speakers</p>
                <Link to='#' className="underline decoration-gray-400 underline-offset-4 hover:decoration-gray-300 text-white text-base">Shop Now</Link>
              </div>
            </div>

            <div className="relative flex justify-center items-center overflow-hidden bg-[#303030] w-full rounded-[4px] py-6">
              <img
                src="images/featured-4.png"
                alt="Perfume"
              />
              <div className="absolute bottom-0 left-0 md:bottom-4 flex flex-col text-white p-4 max-w-[300px]">
                <h1 className="text-lg md:text-2xl font-semibold mb-1">Perfume</h1>
                <p className="mb-3 font-normal text-xs md:text-sm">GUCCI INTENSE OUD EDP</p>
                <Link to='#' className="underline decoration-gray-400 underline-offset-4 hover:decoration-gray-300 text-white text-base">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <div className="container py-12 mt-8 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ServiceFeature key={index} {...feature} descriptionClassName='text-gray-600' iconClassName='bg-black text-white' />
          ))}
        </div>
        {/* Right side arrow up */}
      </div>
      <div className='h-12 w-12 bg-[#f5f5f5] rounded-full flex
         justify-center items-center fixed
          right-10 bottom-10 cursor-pointer'  onClick={scrollToTop}><FaArrowUp className='text-lg' /></div>
    </div>
  );
};

export default HomePage;


