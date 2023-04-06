import React from "react";
import styled from "styled-components";

const StyledTxt = styled.span``;

interface TxtProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
}

export function Text({ tag, children, ...props }: TxtProps) {
  return (
    <StyledTxt as={tag} {...props}>
      {children}
    </StyledTxt>
  );
}
