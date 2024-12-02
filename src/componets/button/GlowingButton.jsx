import React from 'react';
import styled from 'styled-components';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
const GlowingButton = styled.button`
  position: relative;
  color: var(--glow-color);
  cursor: pointer;
  padding: 0.35em 1em;
  border: 0.15em solid var(--glow-color);
  border-radius: 0.45em;
  background: none;
  perspective: 2em;
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: .5em;

  -webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  -moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  animation: border-flicker 2s linear infinite;

  &:hover {
    color: rgba(0, 0, 0, 0.8);
    text-shadow: none;
    animation: none;
  }

  &:hover::before {
    filter: blur(1.5em);
    opacity: 1;
  }

  &:hover::after {
    opacity: 1;
  }

  @keyframes border-flicker {
    0% {
      opacity: 0.1;
    }
    2% {
      opacity: 1;
    }
    4% {
      opacity: 0.1;
    }

    8% {
      opacity: 1;
    }
    70% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

const GlowingText = styled.span`
  float: left;
  margin-right: -0.8em;
  -webkit-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em var(--glow-color);
  -moz-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em var(--glow-color);
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
  animation: text-flicker 3s linear infinite;

  @keyframes text-flicker {
    0% {
      opacity: 0.1;
    }

    2% {
      opacity: 1;
    }

    8% {
      opacity: 0.1;
    }

    9% {
      opacity: 1;
    }

    12% {
      opacity: 0.1;
    }
    20% {
      opacity: 1;
    }
    25% {
      opacity: 0.3;
    }
    30% {
      opacity: 1;
    }

    70% {
      opacity: 0.7;
    }
    72% {
      opacity: 0.2;
    }

    77% {
      opacity: 0.9;
    }
    100% {
      opacity: 0.9;
    }
  }
`;

const GlowingButtonWrapper = () => {
  return (
    <div>
      <GlowingButton className="glowing-btn">
        <GlowingText className="glowing-txt"><SlowMotionVideoIcon />Watch Late</GlowingText>
      </GlowingButton>
    </div>
  );
};

export default GlowingButtonWrapper;
