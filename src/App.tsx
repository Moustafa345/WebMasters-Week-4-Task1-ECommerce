import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import SignUp from './pages/Auth/SignUpPage';
import LoginPage from './pages/Auth/LoginPage';
import MainLayout from './layouts/MainLayout';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AccountPage from './pages/AccountPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { CartProvider } from './contexts/CartContext';
import WishlistProvider from './contexts/WishlistContext';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="wishlist" element={<WishlistPage />} />
              <Route path="account" element={<AccountPage />} />
              <Route path="productDetails/:id" element={<ProductDetailsPage />} />
              <Route path="cart" element={<CartPage />} />
              {/* Nested route for Checkout */}
              <Route path="cart/checkout" element={<CheckoutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Router>
        <Toaster />
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
