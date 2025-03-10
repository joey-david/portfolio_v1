import React, { useEffect, useRef, useState } from "react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import "./Timeline.css";

/**
 * Timeline component that displays a list of entries with animation
 * @param {Object} props - Component props
 * @param {Array} props.data - Array of timeline entries
 */
export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [activeDots, setActiveDots] = useState([]);
  const dotRefs = useRef([]);
  
  // Initialize dot refs
  useEffect(() => {
    dotRefs.current = Array(data.length).fill().map((_, i) => dotRefs.current[i] || React.createRef());
  }, [data]);
  
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
  
  // Check which dots the line has passed
  useMotionValueEvent(heightTransform, "change", (latest) => {
    if (!ref.current) return;
    
    const newActiveDots = [];
    dotRefs.current.forEach((dotRef, index) => {
      if (dotRef.current) {
        const dotRect = dotRef.current.getBoundingClientRect();
        const dotTop = dotRect.top - ref.current.getBoundingClientRect().top;
        if (latest >= dotTop) {
          newActiveDots.push(index);
        }
      }
    });
    
    setActiveDots(newActiveDots);
  });
  
  return (
    <div className="timeline-container" ref={containerRef}>
      <div ref={ref} className="timeline-content">
        {data.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <div className="timeline-dot-container">
                <div 
                  ref={dotRefs.current[index]} 
                  className={`timeline-dot ${activeDots.includes(index) ? 'timeline-dot-active' : ''}`}
                />
              </div>
              <h3 className="timeline-item-title-desktop">
                {item.title}
              </h3>
            </div>
            <div className="timeline-item-content">
              <h3 className="timeline-item-title-mobile">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="timeline-line"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="timeline-progress"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;