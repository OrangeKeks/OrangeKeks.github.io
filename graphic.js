const ctx = document.getElementById('myChart');

  
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    datasets: [{
      label: '- Выполненных работ в день',
      borderColor: '#FF2400',
      backgroundColor: '#000000',
      
      data: [7, 19, 17, 16, 17, 3],
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