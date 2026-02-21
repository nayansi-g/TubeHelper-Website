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
  padding: 60px 0px;
  background: black;

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /* important fix */
    gap: 20px; /* better than negative margin */
  }

  .glass {
    --r: 0;
    position: relative;
    width: 250px;
    height: 270px;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;

    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);

    transform: rotate(calc(var(--r) * 1deg));
    transition: all 0.5s ease;
  }

  .container:hover .glass {
    transform: rotate(0deg);
  }

  .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .glass {
      width: 180px;
      height: 220px;
      transform: rotate(0deg); /* remove rotation on mobile */
    }
  }
`;