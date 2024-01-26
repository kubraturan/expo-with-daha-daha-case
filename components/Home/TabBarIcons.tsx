import Portal from '@assetSVG/portal.svg';
import SvgComponent from '@components/SvgComponent';
import colors from '@constants/colors';
import React from 'react';
import { Path, Svg } from 'react-native-svg';

function fillColor(isFocused: boolean) {
  if (isFocused) return colors.black;

  return colors.gray;
}

export const DiscoverIcon = ({ isFocused }: { isFocused: boolean }) => (
  <Svg width="26" height="26" fill="none" viewBox="0 0 26 26">
    <Path
      fill={fillColor(isFocused)}
      fillRule="evenodd"
      d="M.135 13C.135 5.904 5.905.135 13 .135c7.096 0 12.865 5.77 12.865 12.865 0 7.096-5.77 12.865-12.865 12.865C5.904 25.865.135 20.095.135 13zm16.386 2.274l3.087-7.095c.488-1.137-.65-2.275-1.787-1.787l-7.095 3.087a2.432 2.432 0 00-1.247 1.246l-3.06 7.122c-.515 1.111.65 2.248 1.76 1.76l7.096-3.086a2.433 2.433 0 001.246-1.247zM13 14.76a1.76 1.76 0 100-3.52 1.76 1.76 0 000 3.52z"
      clipRule="evenodd"
    />
  </Svg>
);

export const MoreWalletIcon = ({ isFocused }: { isFocused: boolean }) => (
  <Svg width="24" height="22" viewBox="0 0 24 22" fill="none">
    <Path
      d="M0.490737 9.8105C-0.477091 9.00086 0.0829086 7.45536 1.33125 7.38255L7.49323 6.96576C7.84932 6.94085 8.18055 6.72048 8.33374 6.37747L10.6762 0.858505C10.9308 0.294148 11.466 0 12.0001 0C12.5353 0 13.0694 0.294148 13.324 0.858505L15.6665 6.37747C15.7938 6.69654 16.1251 6.9169 16.507 6.96576L22.669 7.38255C23.9163 7.45633 24.4773 9.00184 23.5095 9.8105L18.6714 13.6125C18.3909 13.8328 18.2636 14.2008 18.3402 14.5687L19.7914 20.3079C19.9953 21.2402 19.2821 22 18.4416 22C18.187 22 17.9323 21.9262 17.7036 21.7796L12.4328 18.6647C12.1274 18.4683 11.7196 18.4683 11.4143 18.6647L6.19417 21.7796C5.96539 21.9272 5.68489 22 5.43026 22C4.58975 22 3.82583 21.2392 4.08047 20.3079L5.5317 14.5687C5.60829 14.2257 5.50584 13.8577 5.20047 13.6364L0.490737 9.8105Z"
      fill={fillColor(isFocused)}
    />
  </Svg>
);

export const PortalIcon = () => <SvgComponent svg={Portal} />;
//   <Svg width="73" height="77" fill="none" viewBox="0 0 73 77">
//     <G filter="url(#filter0_d_0_308)">
//       <Rect width="69" height="69" x="2" y="2" fill="#fff" rx="24" />
//     </G>
//     <Path
//       stroke="#F1DE02"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M60.066 6a21.762 21.762 0 014.455 3.692 22.236 22.236 0 013.273 4.63l.237.454c1.94 3.796 2.97 7.966 2.97 16.856v9.971l-.006 1.044c-.082 8.52-1.19 12.493-3.2 16.266-1.74 3.262-4.154 5.94-7.166 7.957"
//     />
//     <Path
//       stroke="#009639"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M67 12.918a21.748 21.748 0 00-3.68-4.456 22.165 22.165 0 00-4.615-3.273l-.452-.237c-3.784-1.939-7.94-2.969-16.8-2.969h-9.94l-1.04.005c-8.491.082-12.451 1.19-16.212 3.2-3.251 1.74-5.92 4.154-7.93 7.166"
//     />
//     <Path
//       stroke="#F40000"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M8.48 9.663a22.166 22.166 0 00-3.274 4.615l-.237.452C3.029 18.514 2 22.67 2 31.53v9.94l.005 1.04c.082 8.492 1.19 12.452 3.2 16.212 1.74 3.251 4.554 5.921 7.566 7.93"
//     />
//     <Path
//       stroke="#FF8300"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M9.993 64.504a22.161 22.161 0 004.615 3.274l.453.237c3.783 1.938 7.94 2.968 16.8 2.968H41.8l1.04-.005c8.492-.082 12.452-1.19 16.212-3.2.58-.31 1.14-.641 1.681-.993 2.5-1.625 4.398-3.697 6.05-6.173"
//     />
//     <Path
//       stroke="#FFCF08"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M67.794 58.939c-1.738 3.251-4.153 5.92-7.165 7.93"
//     />
//     <Mask
//       id="mask0_0_308"
//       //style={{ maskType: 'luminance' }}
//       width="15"
//       height="16"
//       x="29"
//       y="40"
//       maskUnits="userSpaceOnUse">
//       <Path
//         fill="#fff"
//         fillRule="evenodd"
//         d="M29.009 40.99h14.799v14.799h-14.8v-14.8z"
//         clipRule="evenodd"
//       />
//     </Mask>
//     <G mask="url(#mask0_0_308)">
//       <Path
//         fill="#1D1D1B"
//         fillRule="evenodd"
//         d="M36.408 52.998c2.727 0 4.609-1.776 4.609-4.334V43.78h-9.218v4.884c0 2.558 1.882 4.334 4.61 4.334zm0 2.79c-4.165 0-7.4-3.044-7.4-7.124V40.99h14.8v7.674c0 4.08-3.235 7.125-7.4 7.125z"
//         clipRule="evenodd"
//       />
//     </G>
//     <Mask
//       id="mask1_0_308"
//       //style={{ maskType: 'luminance' }}
//       width="15"
//       height="15"
//       x="29"
//       y="17"
//       maskUnits="userSpaceOnUse">
//       <Path
//         fill="#fff"
//         fillRule="evenodd"
//         d="M29.008 17.1h14.8v14.672h-14.8V17.1z"
//         clipRule="evenodd"
//       />
//     </Mask>
//     <G mask="url(#mask1_0_308)">
//       <Path
//         fill="#1D1D1B"
//         fillRule="evenodd"
//         d="M36.408 19.89c-2.727 0-4.609 1.776-4.609 4.334v4.757h9.218v-4.757c0-2.558-1.882-4.334-4.61-4.334zm0-2.79c4.165 0 7.4 3.044 7.4 7.124v7.548h-14.8v-7.548c0-4.08 3.235-7.124 7.4-7.124z"
//         clipRule="evenodd"
//       />
//     </G>
//     <Mask
//       id="mask2_0_308"
//       //style={{ maskType: 'luminance' }}
//       width="15"
//       height="16"
//       x="17"
//       y="28"
//       maskUnits="userSpaceOnUse">
//       <Path
//         fill="#fff"
//         fillRule="evenodd"
//         d="M17 28.981h14.8v14.8H17v-14.8z"
//         clipRule="evenodd"
//       />
//     </Mask>
//     <G mask="url(#mask2_0_308)">
//       <Path
//         fill="#1D1D1B"
//         fillRule="evenodd"
//         d="M19.79 36.38c0 2.728 1.777 4.61 4.335 4.61h4.884v-9.218h-4.884c-2.558 0-4.334 1.881-4.334 4.609zm-2.79 0c0-4.164 3.044-7.399 7.125-7.399h7.674v14.8h-7.674c-4.08 0-7.125-3.235-7.125-7.4z"
//         clipRule="evenodd"
//       />
//     </G>
//     <Mask
//       id="mask3_0_308"
//       //style={{ maskType: 'luminance' }}
//       width="15"
//       height="16"
//       x="41"
//       y="28"
//       maskUnits="userSpaceOnUse">
//       <Path
//         fill="#fff"
//         fillRule="evenodd"
//         d="M41.017 28.981h14.8v14.8h-14.8v-14.8z"
//         clipRule="evenodd"
//       />
//     </Mask>
//     <G mask="url(#mask3_0_308)">
//       <Path
//         fill="#1D1D1B"
//         fillRule="evenodd"
//         d="M53.026 36.38c0-2.727-1.777-4.608-4.335-4.608h-4.883v9.218h4.883c2.558 0 4.335-1.882 4.335-4.61zm2.79 0c0 4.166-3.044 7.4-7.125 7.4h-7.674V28.981h7.674c4.08 0 7.125 3.235 7.125 7.4z"
//         clipRule="evenodd"
//       />
//     </G>
//     <Path
//       fill="#F1DE02"
//       fillRule="evenodd"
//       d="M53.026 36.38c0-2.727-1.777-4.608-4.335-4.608h-4.883v9.218h4.883c2.558 0 4.334-1.882 4.334-4.61z"
//       clipRule="evenodd"
//     />
//     <Path
//       fill="#009639"
//       fillRule="evenodd"
//       d="M36.408 19.89c-2.727 0-4.609 1.776-4.609 4.334v4.757h9.218v-4.757c0-2.558-1.882-4.334-4.61-4.334z"
//       clipRule="evenodd"
//     />
//     <Path
//       fill="#FF8300"
//       fillRule="evenodd"
//       d="M36.408 52.998c2.727 0 4.609-1.776 4.609-4.334V43.78h-9.218v4.884c0 2.558 1.882 4.334 4.61 4.334z"
//       clipRule="evenodd"
//     />
//     <Path
//       fill="#F40000"
//       fillRule="evenodd"
//       d="M19.79 36.381c0 2.727 1.777 4.609 4.335 4.609h4.883v-9.218h-4.883c-2.558 0-4.334 1.881-4.334 4.609z"
//       clipRule="evenodd"
//     />
//     <Defs>
//       <Filter
//         id="filter0_d_0_308"
//         width="73"
//         height="75"
//         x="0"
//         y="2"
//         colorInterpolationFilters="sRGB"
//         filterUnits="userSpaceOnUse">
//         <feFlood floodOpacity="0" result="BackgroundImageFix" />
//         <feColorMatrix
//           in="SourceAlpha"
//           result="hardAlpha"
//           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//         />
//         <feMorphology
//           in="SourceAlpha"
//           operator="dilate"
//           radius="2"
//           result="effect1_dropShadow_0_308"
//         />
//         <feOffset dy="4" />
//         <feColorMatrix values="0 0 0 0 0.845109 0 0 0 0 0.845109 0 0 0 0 0.845109 0 0 0 0.5 0" />
//         <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0_308" />
//         <feBlend
//           in="SourceGraphic"
//           in2="effect1_dropShadow_0_308"
//           result="shape"
//         />
//       </Filter>
//     </Defs>
//   </Svg>
// );
