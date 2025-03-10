import { useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import './Timeline.css';

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });
  
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  
  return (
    <div className="timeline-container" ref={containerRef}>
      <div className="timeline-inner">
        <div ref={ref} className="timeline-relative">
          {data.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot">
                  <div className="timeline-dot-inner"></div>
                </div>
                <h3 className="timeline-year">{item.title}</h3>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-mobile-year">{item.title}</h3>
                {item.content}
              </div>
            </div>
          ))}
          
          <div 
            className="timeline-line"
            style={{ height: `${height}px` }}
          >
            <motion.div 
              className="timeline-progress"
              style={{ 
                height: heightTransform, 
                opacity: opacityTransform 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};