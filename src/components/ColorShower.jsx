import React from 'react';
import { upperFirst } from 'lodash';

export const ColorShower = ({ baseColor }) =>
  <section style={{width: '100px', margin: '50px'}}>
    <h2>{upperFirst(baseColor)}</h2>
    <div style={{border: '2px solid black'}}>
      <div style={{width: '100%', height: '20px', backgroundColor: `var(--${baseColor}-20)`}}></div>
      <div style={{width: '100%', height: '20px', backgroundColor: `var(--${baseColor}-30)`}}></div>
      <div style={{width: '100%', height: '20px', backgroundColor: `var(--${baseColor}-40)`}}></div>
      <div style={{width: '100%', height: '20px', backgroundColor: `var(--${baseColor}-50)`}}></div>
      <div style={{width: '100%', height: '20px', backgroundColor: `var(--${baseColor}-60)`}}></div>
      <div style={{width: '100%', height: '20px', backgroundColor: `var(--${baseColor}-70)`}}></div>
      <div style={{width: '100%', height: '20px', backgroundColor: `var(--${baseColor}-80)`}}></div>
    </div>
  </section>;

export default ColorShower;