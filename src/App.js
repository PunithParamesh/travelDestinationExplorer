import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { WishlistProvider } from './context.js';
import Home from './pages/home/home.js';
import Wishlist from './pages/wishlist/wishlist.js';
import DestinationDetails from './pages/destinationdetails/destinationdetails.js';
import Navbar from './components/navbar/navbar';
import NotFound from './pages/notfound/notfound.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <WishlistProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </WishlistProvider>
    </BrowserRouter>      
    </>
  );
}

export default App;
