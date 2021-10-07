/* -----------navigation------------- */
let list = document.querySelectorAll('nav li');

function activeLink() {
  list.forEach(item => item.classList.remove('hovered'));
  this.classList.add('hovered');
}

list.forEach(item => item.addEventListener('mouseover', activeLink));

/* -----------menuToggle-------------- */
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('nav');
let main = document.querySelector('main');

toggle.addEventListener('click',() => {
  navigation.classList.toggle('active');
  main.classList.toggle('active');
});
/* -----------------charts---------------------- */
var ctx = document.getElementById('myChart').getContext('2d');
var earning = document.getElementById('earning').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: [
        'Instagram',
        'Facebook',
        'Одноклассники'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [1200, 2735, 2100],
        backgroundColor: [
          'rgb(255, 125, 20)',
          'rgb(75, 0, 192)',
          'rgb(54, 162, 0)'
        ]
      }]
    },
    options: {
        responsive: true,
    }
});
var myChart1 = new Chart(earning, {
  type: 'bar',
  data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
          label: 'Earning',
          data: [1200, 1920, 3240, 5140, 2980, 3450, 4230, 1370, 4670, 3210, 1120, 3323],
          backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)'
          ],
      }]
  },
  options: {
      responsive: true,
  }
});