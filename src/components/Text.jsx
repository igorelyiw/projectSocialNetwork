import styled from 'styled-components';

export const ButtonText = styled.span`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.75px;
 `;
export const H1 = styled.span`
  font-style: normal;
  ${({ isBold }) => isBold && 'font-weight: bold'};
  font-size: 34px;
  line-height: 44px;
`;
export const H2 = styled.span`
  font-style: normal;
  ${({ isBold }) => isBold && 'font-weight: bold'};
  font-size: 28px;
  line-height: 42px;
`;
export const H3 = styled.span`
  ${({ isBold }) => isBold && 'font-weight: bold'};
  font-size: 22px;
  line-height: 29px;
  letter-spacing: 0.0025em;
`;
export const H4 = styled.span`
  font-style: normal;
  ${({ isBold }) => isBold && 'font-weight: bold'};
  font-size: 20px;
  line-height: 26px;
`;
export const TextGradient = styled.p`
font-size: 2em;
background: linear-gradient(135deg, #12BCB0 20%, #FABE0E 70%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
display: inline-block;
padding: 0.3em 0.6em ;
border: 3px solid transparent;
border-image: linear-gradient(135deg, #12BCB0 20%, #FABE0E 70%);
border-image-slice: 1;  
`
