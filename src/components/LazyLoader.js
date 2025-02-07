import React, {lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import "./loading.css";



const LazyLoader = ({ component: Component }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="lazy-load-wrapper">
      {inView ? (
        <Suspense fallback={
          <div className="loader-container">
        <div className="loader"></div>
        </div>
        }>
          <Component />
        </Suspense>
      ) : (
        <div className="placeholder"></div> // Placeholder before loading
      )}
    </div>
  );
};

export default LazyLoader;
