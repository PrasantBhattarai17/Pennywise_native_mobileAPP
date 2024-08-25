export const Logo=require("./pw.png");
export const wallet=require("./wallet.png");
export const Piechart=require("./pie-chart.png");
export const Plans=require("./plans.png");
export const User=require("./user.png");
export const Plus=require("./addplus.png");
export const BalanceBg=require("./balanceBG.jpg");

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

export const financialCategories = [
  {
    isIncome: true,
    category: 'Salary',
    amount: 5000
  },
  {
    isIncome: true,
    category: 'Investment',
    amount: 1500
  },
  {
    isIncome: true,
    category: 'Real Estate',
    amount: 3000
  },
  {
    isIncome: true,
    category: 'Others',
    amount: 1000
  },
  {
    isIncome: false,
    category: 'Groceries',
    amount: 600
  },
  {
    isIncome: false,
    category: 'Bills',
    amount: 800
  },
  {
    isIncome: false,
    category: 'Entertainment',
    amount: 400
  },
  {
    isIncome: false,
    category: 'Others',
    amount: 200
  }
];

  