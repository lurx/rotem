import { CSSProperties } from 'react';
import { HTMLColors } from '../enums';
import { HexLengths } from '../enums/colors.enum';
import { numberBetween } from './number-between.types';
import { stringOfLength } from './strings-length.types';

// Now we can use our type constructor function
const isHex3 = stringOfLength('RGB', HexLengths.HEX3, HexLengths.HEX3); // isHex3 has type StringOfLength<4,4>
const isHex3WithAlpha = stringOfLength('RGBA', HexLengths.HEX4, HexLengths.HEX4); // isHex3WithAlpha has type StringOfLength<4,4>
const isHex6 = stringOfLength('RRGGBB', HexLengths.HEX6, HexLengths.HEX6); // isHex6 has type StringOfLength<6,6>
const isHex6WithAlpha = stringOfLength('RRGGBBAA', HexLengths.HEX8, HexLengths.HEX8); // isHex6WithAlpha has type StringOfLength<8,8>

// cast into types
type Hex3 = typeof isHex3;
type Hex3WithAlpha = typeof isHex3WithAlpha;
type Hex6 = typeof isHex6;
type Hex6WithAlpha = typeof isHex6WithAlpha;

// union of all hex types
type Hex = Hex3 | Hex3WithAlpha | Hex6 | Hex6WithAlpha;

const isNumberBetween0And255 = numberBetween(0, 0, 255); // has type NumberBetween<0,255>
const isNumberBetween0And1 = numberBetween(0, 0, 1); // has type NumberBetween<0,1>

const isNumberBetween0And100 = numberBetween(0, 0, 100); // has type NumberBetween<0,100>

type RGBValue = typeof isNumberBetween0And255;

type Alpha = typeof isNumberBetween0And1;
type Opacity = typeof isNumberBetween0And1;

type Percentage = typeof isNumberBetween0And100;
//////////////////////

export type HtmlColorName = keyof typeof HTMLColors;
export type HEXColor = `#${Hex}`;
export type RGBColor = `rgb(${RGBValue}, ${RGBValue}, ${RGBValue})`;
export type RGBAColor = `rgba(${RGBValue}, ${RGBValue}, ${RGBValue}, ${Alpha})`;
export type HSLColor = `hsl(${number}, ${number}%, ${number}%)`;
export type HSLAColor = `hsla(${number}, ${number}%, ${number}%, ${Alpha})`;
export type HSVColor = `hsv(${number}, ${number}, ${number})`;
export type HSVAColor = `hsva(${number}, ${number}, ${number}, ${Alpha})`;

export type TColor = HEXColor | RGBColor | RGBAColor | HSLColor | HSLAColor | HSVColor | HSVAColor | HtmlColorName;
export type TTColor = CSSProperties['color'];
////////////////////////

let tColorTest: TColor = '#ff';
let ttColorTest: TTColor = 'rgba(1, 2, 3, 1453.3)';
