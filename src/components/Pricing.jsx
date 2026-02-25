 "use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Aarav Mehta",
    company: "EcomVibe",
    review:
      "Within 90 days, our ROAS increased from 2.1x to 4.8x. The team rebuilt our funnel and scaled profitably without increasing wasted spend.",
  },
  {
    name: "Sophia Carter",
    company: "GlowSkin Co.",
    review:
      "Their creative testing framework completely changed our ad performance. CTR improved by 63% in the first month.",
  },
  {
    name: "Daniel Brooks",
    company: "UrbanFit",
    review:
      "We finally understand our numbers. Tracking, reporting, attribution — everything is clean and accurate now.",
  },
  {
    name: "Maya Kapoor",
    company: "Velora Beauty",
    review:
      "Our conversion rate jumped from 1.7% to 3.4%. Small CRO changes made a massive revenue impact.",
  },
  {
    name: "Liam Johnson",
    company: "PeakSupps",
    review:
      "Not just an agency — they actually care about margins and profitability.",
  },
  {
    name: "Olivia Smith",
    company: "NovaWear",
    review:
      "Email + retargeting flows alone increased our repeat purchases by 38%.",
  },
];

const Card = () => {
  const fadeUp = { hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const duplicated = [...reviews, ...reviews]; // infinite loop trick

  return (
    <StyledWrapper>
      <motion.h2 variants={fadeUp} className="text-center tracking-tight " >
         <span className="text-3xl md:text-4xl font-semibold lg:text-5xl bg-gradient-to-r from-purple-400 via-white to-blue-400 bg-clip-text text-transparent "> What Our Clients Say </span> 
         <p className="text-center text-gray-100 text-lg mt-4 mb-16">Partnerships built on performance, transparency, and sustainable growth.
          </p> </motion.h2>

      <div className="slider">
        <div className="slide-track">
          {duplicated.map((item, index) => (
            <div className="card" key={index}>
              <div className="stars">★★★★★</div>
              <p className="review">&quot;{item.review}&quot;</p>
              <div className="client">
                <strong>{item.name}</strong>
                <span>{item.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  background: black;
  padding: 50px 2px 50px 2px;
  overflow: hidden;

  .heading {
    text-align: center;
    margin-bottom: 60px;
  }

  .heading span {
    font-size: 42px;
    font-weight: 600;
    background: linear-gradient(
      to right,
      #a855f7,
      #ffffff,
      #3b82f6
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .heading p {
    margin-top: 15px;
    color: rgba(255, 255, 255, 0.7);
  }

  .slider {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .slide-track {
    display: flex;
    gap: 30px;
    width: max-content;
    animation: scroll 35s linear infinite;
  }

  .slider:hover .slide-track {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .card {
    min-width: 320px;
    max-width: 320px;
    padding: 30px;
    border-radius: 20px;
    background: linear-gradient(
      145deg,
      rgba(168, 85, 247, 0.15),
      rgba(255, 255, 255, 0.05)
    );
    backdrop-filter: blur(10px);
    border: 1px solid rgba(168, 85, 247, 0.4);
    color: white;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .stars {
    color: #ffd700;
    letter-spacing: 2px;
  }

  .review {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }

  .client {
    margin-top: auto;
    display: flex;
    flex-direction: column;
  }

  .client strong {
    font-size: 15px;
  }

  .client span {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

export default Card;
