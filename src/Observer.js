import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";

const ObserverContainer = styled.div`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "20px")});
  transition: opacity 0.5s, transform 0.5s;
  transition-delay: ${(props) => (props.delay ? `${props.delay}s` : "0.5s")};
`;

function Observer({ children, delay }) {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <ObserverContainer ref={observerRef} isVisible={isVisible} delay={delay}>
      {children}
    </ObserverContainer>
  );
}

export default Observer;
