require('dotenv').config();

const EXCHANGE_RATES = Number(process.env.EXCHANGE_RATES) || 70;
const SUM = Number(process.env.SUM) || 1;

console.log(`${SUM}₽ = ${SUM/EXCHANGE_RATES}$`)
console.log(`${SUM}$ = ${SUM*EXCHANGE_RATES}₽`)