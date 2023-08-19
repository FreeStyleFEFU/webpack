import '@babel/polyfill';
import 'normalize.css';

import './index.html'; // -_- отслеживаем изменения html
import './index.scss';

import { createMultiplicationFunction, sum } from "./utils/calc";

const multiplicationFour = createMultiplicationFunction(4);

multiplicationFour();
multiplicationFour();
multiplicationFour();

console.log(sum(3, 4))