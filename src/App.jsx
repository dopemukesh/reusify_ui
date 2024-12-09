// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Components from './pages/Components';
import UIKit from './pages/UIKit';
import Icons from './pages/Icons';
import Footer from './components/Footer';
// Layout Component
const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet /> {/* This renders the child routes dynamically */}
        </main>
        <Footer />
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define a parent route with Layout */}
        <Route path="/" element={<Layout />}>
          {/* Child routes */}
          <Route index element={<Home />} /> {/* Default route */}
          <Route path="icons" element={<Icons />} />
          <Route path="docs/*" element={<Docs />} />
          <Route path="components/*" element={<Components />} />
          <Route path="ui-kit" element={<UIKit />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
