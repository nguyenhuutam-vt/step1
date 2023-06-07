import { css } from "styled-components";

export const mobilee = (props) => {
  return css`
    @media only screen and (max-width: 680px)  {
      ${props}
    }
    
  `;
  
};
