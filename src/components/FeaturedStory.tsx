import React, { useEffect, useState } from "react";
import Container from "@/components/ui/Container";

const bannerImages = [
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1494790108755-2616c0763ba5?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1200&h=400&fit=crop"
];

const AUTO_ADVANCE_INTERVAL = 4000; // 4 seconds

const FeaturedStory = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length);
    }, AUTO_ADVANCE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-6 lg:py-10 flex justify-center">
      <Container className="px-0">
        <div className="relative w-full h-[180px] sm:h-[260px] md:h-[320px] lg:h-[400px] rounded-2xl overflow-hidden">
          {bannerImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt="Banner"
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              style={{ borderRadius: '1rem' }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedStory;