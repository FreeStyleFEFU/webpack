import '@babel/polyfill';
import 'normalize.css';

import './index.html'; // -_- отслеживаем изменения
import './index.scss';

import code from './img/webpack.png'

import { createMultiplicationFunction, sum } from "./utils/calc";

const multiplicationFour = createMultiplicationFunction(4);

const imagePngContainer = document.querySelector('.imagePngContainer');

const image = new Image();
image.src = code;
image.className = 'imagePng';
imagePngContainer.append(image);

multiplicationFour(2);
multiplicationFour(4);

console.log(sum(3, 4))
