import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Footer from './components/Footer/index.jsx';
import Header from './components/Header/index.jsx';
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage';
import CoffeePage from './pages/CoffePage.jsx';
import AccessoriesPage from './pages/AccessoriesPage.jsx';
import OurStoryPage from './pages/OurStoryPage.jsx';
import WholesalePage from './pages/WholesalePage.jsx';
import AccountPage from './pages/AccountPage.jsx';

function App() {




  return (
   <BrowserRouter>
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
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/ourStory" element={<OurStoryPage />} />
          <Route path="/wholesale" element={<WholesalePage />} />
          <Route path="/account" element={<AccountPage />} />

          
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;