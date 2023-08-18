import 'normalize.css';

import './index.html'; // -_- отслеживаем изменения html
import './index.scss';

const createCalcFunction = (n) => () => console.log(2 * n);

const calcFour = createCalcFunction(4);
const calcTwo = createCalcFunction(2);

calcFour();
calcFour();
calcFour();

calcTwo();
calcTwo();
calcTwo();