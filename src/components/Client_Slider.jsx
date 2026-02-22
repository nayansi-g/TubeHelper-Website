"use client";

import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Case Study #1",
    subtitle: "D2C Skincare Brand (Shopify)",
    image: "casestudy1.jpg",
    challenge:
      "The brand was generating traffic but struggling with low ROAS (2.1x) and high customer acquisition costs. Their funnel lacked structure and creatives were not optimized for performance.",
    whatWeDid: [
      "Rebuilt full-funnel ad structure (TOF / MOF / BOF)",
      "Launched creative testing framework (10+ hooks per week)",
      "Implemented server-side tracking",
      "Optimized product pages & checkout flow",
    ],
    results: [
      "ROAS increased from 2.1x → 4.8x",
      "Revenue up 162%",
      "CAC reduced by 37%",
      "Conversion rate improved 1.9% → 3.3%",
    ],
    impact:
      "The brand scaled ad spend confidently while increasing profitability — not just revenue.",
  },
  {
    title: "Case Study #2",
    subtitle: "Fitness Supplement Brand",
    image: "casestudy2.jpg",
    challenge:
      "High ad spend but unstable profitability. Poor retention and heavy dependence on cold traffic.",
    whatWeDid: [
      "Restructured Meta & Google campaigns",
      "Built lifecycle email + SMS automation",
      "Implemented upsell & subscription offers",
      "Optimized landing page messaging",
    ],
    results: [
      "Revenue grew from $120K → $310K/month",
      "Repeat purchase rate increased 38%",
      "AOV increased 22%",
      "Blended ROAS improved to 5.1x",
    ],
    impact:
      "The brand transitioned from aggressive scaling to sustainable growth with higher margins.",
  },
  {
    title: "Case Study #3",
    subtitle: "Fashion Ecommerce Brand",
    image: "casestudy3.jpg",
    challenge:
      "Strong social presence but poor conversion rates and inconsistent tracking.",
    whatWeDid: [
      "Fixed GA4 & pixel attribution",
      "Ran A/B testing on product pages",
      "Launched retargeting segmentation strategy",
      "Improved creative messaging & hooks",
    ],
    results: [
      "Conversion rate doubled (1.5% → 3.1%)",
      "Cost per purchase reduced by 41%",
      "Tracking accuracy improved by 90%",
      "Monthly profit increased by 74%",
    ],
    impact:
      "The brand unlocked profitable scaling by fixing fundamentals first.",
  },
];

export default function ClientSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  // 🔥 Auto slide every 1 second
 useEffect(() => {
  if (isPaused) return;

  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 8000);

  return () => clearInterval(interval);
}, [isPaused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  return (
    <div className="bg-white">
        <div className="text-center py-2">
        <span className="px-4 py-1 text-sm rounded-full bg-purple-50 text-purple-600 border border-purple-200">
          ✨ Business Case Studies
        </span>
      </div>
        <Wrapper>
      <div className=" bg-white text-center pb-5  md:pb-10">
        <h2 className="text-gray-900 text-3xl md:text-5xl font-semibold">Proof Over Promises</h2>
        <p className="text-gray-600">We don’t just talk about growth — we deliver it.</p>
      </div>

      <div
        className="slider"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
  onTouchStart={(e) => {
    setIsPaused(true);
    handleTouchStart(e);
  }}
  onTouchEnd={(e) => {
    handleTouchEnd(e);
    setIsPaused(false);
  }}
      >
        <div
          className="slides"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="left ">
                <img src={slide.image} className="h-auto px-10 border border-gray-300 shadow-sm" alt={slide.subtitle} />
              </div>

              <div className="right">
                <h3 className="text-gray-800 font-semibold">{slide.title}</h3>
                <h4>{slide.subtitle}</h4>

                <div className="section text-gray-800">
                  <strong>The Challenge</strong>
                  <p className="text-gray-600">{slide.challenge}</p>
                </div>

                <div className="section text-gray-800">
                  <strong>What We Did</strong>
                  <ul>
                    {slide.whatWeDid.map((item, i) => (
                      <li className="text-gray-500" key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="section text-gray-800">
                  <strong>Results</strong>
                  <ul>
                    {slide.results.map((item, i) => (
                      <li className="text-gray-500" key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="section text-gray-800">
                  <strong>Impact</strong>
                  <p className="text-gray-500">{slide.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="nav text-gray-800">
        <button onClick={prevSlide}>
          <ArrowLeft size={18} />
        </button>
        <button onClick={nextSlide}>
          <ArrowRight size={18} />
        </button>
      </div>
    </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  background: white;
  padding: 40px 20px 60px;
  max-width: 1200px;
  margin: auto;

  .slider {
    overflow: hidden;
    position: relative;
  }

  .slides {
    display: flex;
    transition: transform 0.6s ease-in-out;
  }

  .slide {
    min-width: 100%;
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .left {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .left img {
    width: 100%;
    max-width: 420px;
    height: auto;
    border-radius: 16px;
    object-fit: cover;
  }

  .right {
    flex: 1.2;
  }

  .right h3 {
    font-size: 20px;
    margin-bottom: 6px;
  }

  .right h4 {
    color: #666;
    margin-bottom: 16px;
    font-size: 14px;
  }

  .section {
    margin-bottom: 14px;
  }

  .section strong {
    font-size: 14px;
  }

  .section p,
  .section li {
    font-size: 13px;
    line-height: 1.5;
  }

  ul {
    padding-left: 18px;
  }

  .nav {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 16px;
  }

  .nav button {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid #ddd;
    background: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
  }

  .nav button:hover {
    background: black;
    color: white;
  }

  /* Tablet */
  @media (max-width: 992px) {
    .slide {
      flex-direction: column;
      gap: 30px;
    }

    .right {
      text-align: left;
    }

    .left img {
      max-width: 380px;
    }
  }

  /* Mobile */
  @media (max-width: 600px) {
    padding: 30px 15px 50px;

    .right h3 {
      font-size: 18px;
    }

    .section p,
    .section li {
      font-size: 12px;
    }

    .left img {
      max-width: 100%;
    }
  }
`;
