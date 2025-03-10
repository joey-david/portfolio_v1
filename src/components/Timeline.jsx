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
      
      // Initialize all dots as active
      setActiveDots(Array.from({ length: data.length }, (_, i) => i));
    }
  }, [ref, data.length]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });
  
  // Transform progress to work in reverse (1 → 0)
  const reverseProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
  const heightTransform = useTransform(reverseProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(reverseProgress, [0, 0.1], [0, 1]);
  
  // Update active dots based on reversed scroll progress
  useMotionValueEvent(heightTransform, "change", (latest) => {
    if (!ref.current) return;
    
    const progressHeight = latest; // Height of the progress line
    const timelineTop = ref.current.getBoundingClientRect().top;
    const timelineHeight = ref.current.getBoundingClientRect().height;
    
    // Top position of the progress line (growing from bottom)
    const progressLineTop = timelineHeight - progressHeight;
    
    // Calculate which dots should be active
    const newActiveDots = [];
    dotRefs.current.forEach((dotRef, index) => {
      if (dotRef.current) {
        const dotRect = dotRef.current.getBoundingClientRect();
        // Calculate the dot's position relative to the timeline container
        const dotPositionInTimeline = dotRect.top - timelineTop;
        
        // Dot is active if the top of the progress line is ABOVE the dot
        // (smaller Y value in the coordinate system)
        if (progressLineTop <= dotPositionInTimeline) {
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
              bottom: 0,
              top: "unset",
            }}
            className="timeline-progress"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;