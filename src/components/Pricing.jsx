import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"

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
      "Not just an agency — they actually care about margins and profitability. Scaling feels controlled and sustainable.",
  },
  {
    name: "Olivia Smith",
    company: "NovaWear",
    review:
      "Email + retargeting flows alone increased our repeat purchases by 38%. Incredible execution.",
  },
  {
    name: "Noah Williams",
    company: "HydraLabs",
    review:
      "Server-side tracking fixed our attribution issues instantly. Finally we can scale confidently.",
  },
  {
    name: "Emma Brown",
    company: "Luxora",
    review:
      "Professional, data-driven, and proactive. Best marketing decision we’ve made.",
  },
];

const Card = () => {
 const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  return (
    <StyledWrapper>
    <motion.h2
          variants={fadeUp}
          className="text-center   tracking-tight "
        >
          <span className="text-3xl md:text-4xl font-semibold lg:text-5xl bg-gradient-to-r from-purple-400 via-white to-blue-400 bg-clip-text text-transparent">
            What Our Clients Say
          </span>
          <p className="text-center text-gray-100 text-lg mt-4">Partnerships built on performance, transparency, and sustainable growth.</p>
        </motion.h2>
      <div className="wrapper mb-10">
        <div
          className="inner"
          style={{ "--quantity": reviews.length }}
        >
          {reviews.map((item, index) => (
            <div
              key={index}
              className="card"
              style={{
                "--index": index,
                "--color-card": "140, 82, 255",
              }}
            >
              <div className="content">
                <div className="stars">★★★★★</div>
                <p className="review">"{item.review}"</p>
                <div className="client">
                  <strong>{item.name}</strong>
                  <span>{item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background: black;


  .wrapper {
    width: 100%;
    height: 650px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .inner {
    --w: 260px;
    --h: 240px;
    --translateZ: 420px;
    --rotateX: -12deg;
    --perspective: 1200px;

    position: absolute;
    width: var(--w);
    height: var(--h);
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 25s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    width: var(--w);
    height: var(--h);
    border-radius: 20px;
    padding: 24px;
    background: linear-gradient(
      145deg,
      rgba(var(--color-card), 0.15),
      rgba(255, 255, 255, 0.05)
    );
    backdrop-filter: blur(12px);
    border: 1px solid rgba(var(--color-card), 0.4);
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
  }

  .content {
    color: white;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .stars {
    color: #ffd700;
    font-size: 18px;
    letter-spacing: 2px;
  }

  .review {
    font-size: 14px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
  }

  .client {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .client strong {
    font-size: 15px;
    font-weight: 600;
  }

  .client span {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

export default Card;