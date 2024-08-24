export const Logo=require("./pw.png");
export const wallet=require("./wallet.png");
export const Piechart=require("./pie-chart.png");
export const Plans=require("./plans.png");
export const User=require("./user.png");
export const Plus=require("./addplus.png");

type IconName = 'currency-usd' | 'credit-card' | 'piggy-bank-outline';

interface CardData {
  name: string;
  iconLabel: IconName;
  isincrease: boolean;
  amount: number;
  changedAmount: string;
  changedPercent: number;
  navPage:string;
}

export const  CardsData:CardData[]=[
  {
    "name": "Earnings",
    "iconLabel":"currency-usd",
    "isincrease": true,
    "amount": 5000.00,
    "changedAmount": "+$1000.00",
    "changedPercent": 25.00,
    'navPage':'/two'
  },
  {
    "name": "Expenses",
    "iconLabel":"credit-card",
    "isincrease": false,
    "amount": 2000.00,
    "changedAmount": "-$500.00",
    "changedPercent": 20.00,
    'navPage':'/two'
  },
]

;
  