// Wallet
let walletBalance = 100000; // initial wallet balance
document.getElementById('wallet-balance').textContent = walletBalance + 'RW';

// Currency info
let currencyInfo = {
  name: 'Bitcoin',
  symbol: 'BTC',
  price: 10000,
  amount: 0
};
document.getElementById('current-price').textContent = currencyInfo.price + 'RW';
document.getElementById('currency-amount').textContent = currencyInfo.amount + ' + currencyInfo.symbol;

// Chart
let chartData = [];
for (let i = 0; i < 10; i++) {
  chartData.push({ x: i, y: Math.random() * 10000 });
}
let chart = new Chart(document.getElementById('chart'), {
  type: 'line',
  data: {
    labels: chartData.map(d => d.x),
    datasets: [{
      label: 'Price',
      data: chartData.map(d => d.y),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Trading functionality
function tradeCurrency(amount) {
  // Update wallet balance
  walletBalance -= amount * currencyInfo.price;
  document.getElementById('wallet-balance').textContent = walletBalance + 'RW';
  
  // Update currency amount
  currencyInfo.amount += amount;
  document.getElementById('currency-amount').textContent = currencyInfo.amount + ' + currencyInfo.symbol;
  
  // Update chart
  chartData.push({ x: chartData.length, y: currencyInfo.price });
  chart.update();
  
  // Update current price
  currencyInfo.price += (Math.random() - 0.5) * 100;
  document.getElementById('current-price').textContent = currencyInfo.price + 'RW';
}

document.getElementById('buy-btn').addEventListener('click', () => {
  tradeCurrency(1);
});

document.getElementById('sell-btn').addEventListener('click', () => {
  tradeCurrency(-1);
});