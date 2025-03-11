import React from "react";
import "./CardsLayouts.css";

/**
 * Card layout with one small square image on the right
 */
export const CardLayoutSquareRight = ({ title, subtitle, period, description, image = "/placeholder.png" }) => (
  <div className="timeline-card">
    <div className="card-square-right">
      <div className="card-square-right-content">
        <div className="timeline-role">{title}</div>
        <div className="timeline-company">{subtitle}</div>
        <div className="timeline-period">{period}</div>
        <div className="timeline-description">{description}</div>
      </div>
      <div className="card-square-right-image">
        <div className="timeline-image-container">
          <img 
            src={image} 
            alt={title} 
            className="timeline-image-square"
          />
        </div>
      </div>
    </div>
  </div>
);

/**
 * Card layout with two small rectangular images side by side under the text
 */
export const CardLayoutDualUnder = ({ title, subtitle, period, description, images = ["/placeholder.png", "/placeholder.png"] }) => (
  <div className="timeline-card">
    <div className="timeline-role">{title}</div>
    <div className="timeline-company">{subtitle}</div>
    <div className="timeline-period">{period}</div>
    <div className="timeline-description mb-4">{description}</div>
    
    <div className="card-dual-under-image-row">
      <div className="card-dual-under-image-container timeline-image-container">
        <img 
          src={images[0]} 
          alt={`${title} 1`} 
          className="timeline-image-rectangle"
        />
      </div>
      <div className="card-dual-under-image-container timeline-image-container">
        <img 
          src={images[1] || images[0]} 
          alt={`${title} 2`} 
          className="timeline-image-rectangle"
        />
      </div>
    </div>
  </div>
);

/**
 * Card layout with one banner image above the text
 */
export const CardLayoutBannerTop = ({ title, subtitle, period, description, image = "/placeholder.png" }) => (
  <div className="timeline-card">
    <div className="card-banner-top-image timeline-image-container">
      <img 
        src={image} 
        alt={title} 
        className="timeline-image-rectangle"
      />
    </div>
    <div className="timeline-role">{title}</div>
    <div className="timeline-company">{subtitle}</div>
    <div className="timeline-period">{period}</div>
    <div className="timeline-description">{description}</div>
  </div>
);

/**
 * Card layout with one small square image on the left below the title, 
 * one rectangle on its side
 */
export const CardLayoutSquareLeftRectangleRight = ({ 
  title, 
  subtitle, 
  period, 
  description,
  imageBackground = "#f0f0f0",
  images = ["/placeholder.png", "/placeholder.png"] 
}) => (
  <div className="timeline-card">
    <div className="timeline-role">{title}</div>
    <div className="timeline-company">{subtitle}</div>
    <div className="timeline-period">{period}</div>
    
    <div className="card-square-left-rect-right">
      <div className="card-square-left-container">
        <div className="timeline-image-container">
          <img 
            src={images[0]} 
            alt={title} 
            className="timeline-image-square"
          />
        </div>
      </div>
      <div className="card-rect-right-container">
        <div className="timeline-image-container">
          <img 
            src={images[1] || images[0]} 
            alt={`${title} side`} 
            className="timeline-image-rectangle"
            style={{ backgroundColor: imageBackground }} 
          />
        </div>
      </div>
    </div>
    
    <div className="timeline-description mt-4">{description}</div>
  </div>
);

/**
 * Card layout with circular image on left and text on right (bonus layout)
 */
export const CardLayoutCircleLeft = ({ title, subtitle, period, description, image = "/placeholder.png" }) => (
  <div className="timeline-card">
    <div className="card-circle-left">
      <div className="card-circle-image-container">
        <img 
          src={image} 
          alt={title}
        />
      </div>
      <div className="card-circle-content">
        <div className="timeline-role">{title}</div>
        <div className="timeline-company">{subtitle}</div>
        <div className="timeline-period">{period}</div>
        <div className="timeline-description mt-2">{description}</div>
      </div>
    </div>
  </div>
);