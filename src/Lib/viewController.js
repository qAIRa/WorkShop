import { viewLandingPage } from '../Views/landingView.js';
import { viewChartPage } from '../Views/chartView.js';
import { viewGraphPage } from '../Views/graphView.js';

const container = document.getElementById('container');

export const changeView = (router) => {

  switch (router) {
    case '':
    {
      return container.appendChild(viewLandingPage());
    }
    case '#/':
    {
      return container.appendChild(viewLandingPage());
    }
    case '#/chart':
    {
      return container.appendChild(viewChartPage());
    }
    case '#/graphs':
    {
      return container.appendChild(viewGraphPage());
    }
    default:
    {
      return container.appendChild(viewLandingPage());
    }
  }
};