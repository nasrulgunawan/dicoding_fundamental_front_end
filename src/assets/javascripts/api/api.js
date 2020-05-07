import Ui from '../views/ui.js';

class Api {
  static getDataCoronaVirus() {
    return fetch('http://api.kawalcorona.com/indonesia/')
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson) {
          Ui.renderCoronaVirusInfo(responseJson);
        } else {
          Ui.showErrorMessage('covid-data');
        }
      });
  }

  static getNews() {
    const apiKey = '635e4e1662a34043a282dc6d29378a2c';
    const country = 'id';
    const category = 'health';

    return fetch(`http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.articles) {
          Ui.renderArticles(responseJson.articles);
        } else {
          Ui.showErrorMessage('articles');
        }
      });
  }
}

export default Api;