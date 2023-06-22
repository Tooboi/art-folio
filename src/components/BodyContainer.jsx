import React, { useState } from 'react';
import Nav from './Nav';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Footer from './Footer';

export default function BodyContainer() {
  const [currentPage, setCurrentPage] = useState('Portfolio');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="container-fluid">
        {renderPage()}
        <Footer />
      </div>
    </div>
  );
}
