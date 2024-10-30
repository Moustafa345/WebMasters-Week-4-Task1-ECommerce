import { FaBuildingColumns, FaSackDollar } from "react-icons/fa6";
import ServiceFeature from '@/components/ServiceFeatures';
import { AiOutlineDollar } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";
import { features } from '@/data';
import TeamSlider from '@/components/TeamSlider';

const AboutPage: React.FC = () => {

  return (


    <>
      {/* Heading */}
      <div className="container mt-7 md:mt-10 lg:mt-20">

        <div className="flex ml-8 text-sm">
          <span className="text-[#8f8f8f]">Home</span>
          <span className="mx-2">/</span>
          <span className='font-medium'>About</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Our Story */}
        <div className="md:w-1/2 w-full bg-white flex items-center justify-center p-8 md:p-12">
          <div className="space-y-6 max-w-[525px]">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Story
            </h1>
            <div className="space-y-4 text-gray-600">
              <p>
                Launched in 2015, Exclusive is South Asia's premier online shopping
                marketplace with an active presence in Bangladesh. Supported by wide
                range of tailored marketing, data and service solutions, Exclusive
                has 10,500 sellers and 300 brands and serves 3 million customers
                across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at a
                very fast rate. Exclusive offers a diverse assortment in categories
                ranging from consumer.
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2 flex items-center justify-center md:my-20 py-8">
          <img
            src="/images/about.png"
            alt="Shopping"
            className="w-full h-auto max-w-sm md:max-w-full"
          />
        </div>
      </div>


      {/* Stats */}
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          <ServiceFeature
            icon={FaBuildingColumns}
            title="10.5k"
            description="Sellers active our site"
            className="w-full border rounded hover:bg-[#DB4444] hover:text-white p-6"
            iconSubClassName='group-hover:text-black'
            iconClassName="bg-black text-white group-hover:bg-white"
          />
          <ServiceFeature
            icon={AiOutlineDollar}
            title="33k"
            description="Monthly Product Sale"
            className="w-full border rounded hover:bg-[#DB4444] hover:text-white p-6"
            iconSubClassName='group-hover:text-black'
            iconClassName="bg-black text-white group-hover:bg-white"
          />
          <ServiceFeature
            icon={RiShoppingBagLine}
            title="45.5k"
            description="Customer active in our site"
            className="w-full border rounded hover:bg-[#DB4444] hover:text-white p-6"
            iconSubClassName='group-hover:text-black'
            iconClassName="bg-black text-white group-hover:bg-white"
          />
          <ServiceFeature
            icon={FaSackDollar}
            title="25k"
            description="Annual gross sale in our site"
            className="w-full border rounded hover:bg-[#DB4444] hover:text-white p-6"
            iconSubClassName='group-hover:text-black'
            iconClassName="bg-black text-white group-hover:bg-white"
          />
        </div>
      </div>


      {/* Team Slider */}
      <TeamSlider />


      {/* Service Features*/}
      <div className="container py-12 my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ServiceFeature
              key={index} {...feature}
              descriptionClassName='text-gray-600'
              iconClassName='bg-black text-white'
            />
          ))}
        </div>
      </div>

    </>
  );
};

export default AboutPage;