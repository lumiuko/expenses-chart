import data from './data.json'

const chart = document.getElementById('chart')

function renderChart() {
  let html = ''

  data.forEach(item => {
    const multiplier = 2.865
    const height = item.amount * multiplier

    html += `
      <div class="chart-item${item.isCurrent ? ' current' : ''}" data-value="$${item.amount}">
        <div class="chart-item-line" style="height: ${height}px"></div>
        <p class="chart-item-text">${item.day}</p>
      </div>
    `
  })

  chart.innerHTML = html
}

renderChart()
