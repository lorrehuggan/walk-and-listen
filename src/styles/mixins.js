import { css } from 'styled-components';

export const flex = css`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'column')};
  align-items: ${({ align }) => (align ? align : 'center')};
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
`;

export const noDisplay = css`
  opacity: 0;
  pointer-events: none;
  transition: opacity 1.5s ease;
`;

export const FontSize = {
  body: '16px',
  bodyBig: '18px',
  subHeader: '24px',
  header: '38px',
  headline: '56px',
  heroHeadline: '68px',
};

export const media = {
  smallMobile: `@media screen and (max-width: 320px)`,
  mediumMobile: `@media screen and (max-width: 375px)`,
  largeMobile: `@media screen and (max-width: 425px)`,
  tablet: `@media screen and (max-width: 768px)`,
  laptop: `@media screen and (max-width: 1024px)`,
  large: `@media screen and (max-width: 1440px)`,
  desktop: `@media screen and (max-width: 2560px)`,
};
