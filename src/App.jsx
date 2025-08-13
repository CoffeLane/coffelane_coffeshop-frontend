import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx'
import CoffeePage from "./pages/CoffePage.jsx";
import AccessoriesPage from "./pages/AccessoriesPage.jsx";
import OurStoryPage from "./pages/OurStoryPage.jsx";
import WholesalePage from "./pages/WholesalePage.jsx";
import AccountPage from "./pages/AccountPage.jsx";

function App() {




  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coffee" element={<CoffeePage />} />
        <Route path="/accessories" element={<AccessoriesPage/>} />
        <Route path="/ourStory" element={<OurStoryPage />} />
        <Route path="/wholesale" element={<WholesalePage />} />
        <Route path="/account" element={<AccountPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
