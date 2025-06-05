import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './footer/bawah';
import Header from './navbar/navbar';
import Register from './pendaftaran/body';
import Payment from './checkout/Checkout';

const Beranda = () => (
  <div className="bg-gradient-to-r from-blue-100 to-green-100 min-h-screen flex items-center justify-center">
    <div className="w-full px-4 text-center space-y-6 max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        Bergabung Bersama Kami
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mx-auto">
        Temukan berbagai kursus untuk mengembangkan keahlian dan mencapai tujuan karier Anda.
      </p>

      <div className="flex justify-center pt-6">
        <div className="flex flex-col items-center gap-4 w-full max-w-xs">
          <Link to="/daftar" className="w-full">
            <button className="w-full px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition duration-200 shadow-md">
              Mulai Daftar
            </button>
          </Link>
          <Link to="/checkout" className="w-full">
            <button className="w-full px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition duration-200 shadow-md">
              Lanjut ke Pembayaran
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/daftar" element={<Register />} />
            <Route path="/checkout" element={<Payment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;