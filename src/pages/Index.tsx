
import React from 'react';
// Removed: import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategorySection from '@/components/CategorySection';
import NewArrivals from '@/components/NewArrivals';
import TrustIndicators from '@/components/TrustIndicators';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header is now only rendered via Layout */}
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
      <NewArrivals />
      <TrustIndicators />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
