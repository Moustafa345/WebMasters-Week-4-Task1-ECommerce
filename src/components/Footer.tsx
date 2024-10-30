import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { CiTwitter, CiInstagram } from "react-icons/ci";
import { BsArrowRightSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-[#FAFAFA] py-8 px-4 sm:py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4  lg:grid-cols-5 gap-8">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Exclusive</h2>
          <h3 className="text-xl font-medium mb-2">Subscribe</h3>
          <p className="mb-4 text-sm font-normal">Get 10% off your first order</p>
          <div className="relative max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black border border-white rounded-md p-2 pr-10 placeholder:lg:text-sm placeholder:xl:text-base"
            />
            <BsArrowRightSquare className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl" />
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="text-xl font-bold mb-4">Support</h2>
          <p className="mb-2 text-sm">111 Bijoy sarani, Dhaka,</p>
          <p className="mb-2 text-sm">DH 1515, Bangladesh.</p>
          <p className="mb-2 text-sm">exclusive@gmail.com</p>
          <p className="mb-2 text-sm">+88015-88888-9999</p>
        </div>
        <div className="col-span-1">
          <h2 className="text-xl font-bold mb-4">Account</h2>
          <ul className="text-sm">
            <li className="mb-2"><Link to='account'>My Account</Link></li>
            <li className="mb-2"><Link to='login'>Login</Link>  / <Link to='signup'>Register</Link></li>
            <li className="mb-2"><Link to='cart'>Cart</Link></li>
            <li className="mb-2"><Link to='wishlist'>Wishlist</Link></li>
            <li className="mb-2">Shop</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-xl font-bold mb-4">Quick Link</h2>
          <ul className="text-sm">
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Terms Of Use</li>
            <li className="mb-2">FAQ</li>
            <li className="mb-2">Contact</li>
          </ul>
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1">
          <h2 className="text-xl font-bold mb-4">Download App</h2>
          <p className="mb-2 text-sm text-gray-400">Save $3 with App New User Only</p>
          <div className="flex mb-6">
            <div className="mr-2">
              <img src="/images/footer-qrCode.png" alt="QR Code" />
            </div>
            <div className="flex flex-col justify-between">
              <img src="images/footer-GooglePlay.png" alt="Google Play" />
              <img src="images/footer-AppStore.png" alt="App Store" />
            </div>
          </div>
          <div className="flex space-x-7">
            <RiFacebookLine className="text-2xl" />
            <CiTwitter className="text-2xl" />
            <CiInstagram className="text-2xl" />
            <RiLinkedinLine className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center font-normal text-[#F9F9F933] text-base">
        © Copyright Moustafa Mouhamed 2024. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;