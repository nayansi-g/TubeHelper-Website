"use client";
import styled from "styled-components";

const GlassImageCards = () => {
  return (
    <Wrapper>
      <div className="container">

        <div
          className="glass"
          data-text="Strategy"
          style={{ "--r": "-15" }}
        >
          <img src="/slide1.jpg" alt="Strategy" className="card-img" />
        </div>

        <div
          className="glass"
          data-text="Development"
          style={{ "--r": "5" }}
        >
          <img src="/slide2.jpg" alt="Development" className="card-img" />
        </div>

        <div
          className="glass"
          data-text="Growth"
          style={{ "--r": "25" }}
        >
          <img src="/slide3.jpg" alt="Growth" className="card-img" />
        </div>

      </div>
    </Wrapper>
  );
};

export default GlassImageCards


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 0;
  background: transparent;

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 14px;
    max-width: 520px;
  }

  .glass {
    --r: 0;
    position: relative;
    width: 220px;
    height: 260px;
    border-radius: 24px;
    overflow: hidden;
    cursor: pointer;

    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);

    transform: rotate(calc(var(--r) * 1deg));
    transition: transform 0.45s ease, box-shadow 0.45s ease, border-color 0.45s ease;
  }

  .glass::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(155deg, rgba(255, 255, 255, 0.2) 0%, transparent 35%, rgba(0, 0, 0, 0.25) 100%);
    pointer-events: none;
  }

  .container:hover .glass {
    transform: rotate(0deg) translateY(-4px);
    border-color: rgba(122, 162, 255, 0.5);
    box-shadow: 0 24px 48px rgba(10, 15, 38, 0.55);
  }

  .glass::before {
    content: attr(data-text);
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 12px;
    height: 38px;
    border-radius: 999px;
    background: rgba(8, 10, 22, 0.72);
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    letter-spacing: 0.4px;
    z-index: 2;
  }

  .card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .container {
      max-width: 100%;
      gap: 12px;
    }

    .glass {
      width: 165px;
      height: 210px;
      transform: rotate(0deg);
    }
  }
`;
