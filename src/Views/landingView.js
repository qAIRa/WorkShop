const landingHtml = `
<h1 class="title-land">Welcome to Local QairaMap</h1>
`;

const graphs= document.getElementById('graphs');
const chart = document.getElementById('chart');
const home = document.getElementById('logo');

const viewLandingPage = () => {
document.getElementById('container').innerHTML = '';
const mainElem = document.createElement('div');
  mainElem.setAttribute('class', 'land-page');
  mainElem.innerHTML = landingHtml;


  graphs.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#/graphs';
  });

  chart.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#/chart';
  });

  home.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#';
  });

  return mainElem;
}

export {viewLandingPage};