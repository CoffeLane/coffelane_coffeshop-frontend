import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext'; // Add this import
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';
import Layout from './components/Layout/Layout.jsx';
import CoffeePage from './pages/CatalogCoffeePage.jsx';
import AccessoriesPage from './pages/AccessoriesPage.jsx';
import OurStoryPage from './pages/OurStoryPage.jsx';
import WholesalePage from './pages/WholesalePage.jsx';
import AccountPage from './pages/AccountPage.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import ProductCardPage from './pages/ProductCardPage.jsx';

function App() {

  return (
    <CartProvider>
         <BrowserRouter>
          <ScrollToTop />
            <Routes>
              <Route path="/" element={
                <>
                  <Header />
                  <HomePage />
                  <Footer />
                </>
              } />
      
              <Route element={<Layout />}>
                <Route path="/coffee" element={<CoffeePage />} />
                <Route path="/coffee/product/:id" element={<ProductCardPage />} />
                <Route path="/accessories" element={<AccessoriesPage />} />
                <Route path="/ourStory" element={<OurStoryPage />} />
                <Route path="/wholesale" element={<WholesalePage />} />
                <Route path="/account" element={<AccountPage />} />
      
                
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
       </CartProvider>
   );
}

export default App;
