import profile from '../../images/profile.svg';
import playstore from '../../images/playstore.png';
import appstore from '../../images/appstore.png';
import headerImage from '../../images/header.svg';
import mapsImage from '../../images/maps.svg';

class Ui {
  static renderArticles(articles) {
    const articleContainerElement = document.querySelector('#articles');
    articleContainerElement.innerHTML = "";

    articles.forEach(article => {
      articleContainerElement.innerHTML += `
          <article class="card-post">
            <div class="post-img">
              <img src="${article.urlToImage}" alt="${article.title}">
            </div>
            <div class="post-content">
              <div class="post-text">
                <h2 class="post-title">${article.title}</h2>
                <p>${article.content}</p>
              </div>
              <div class="post-footer">
                <img src="${profile}" alt="Foto Profile">
                <p>${article.publishedAt}</p>
              </div>
            </div>
          </article>
      `;
    });
  }

  static renderCoronaVirusInfo(data) {
    document.getElementById('covid-positive').innerHTML = data[0].positif;
    document.getElementById('covid-recovered').innerHTML = data[0].sembuh;
    document.getElementById('covid-deaths').innerHTML = data[0].meninggal;
  }

  static showErrorMessage(id) {
    document.getElementById(id).innerHTML = "<h3>Data gagal diload.</h3>";
  }

  static setImageToHtml() {
    document.getElementById('playstore-img').src = playstore;
    document.getElementById('appstore-img').src = appstore;
    document.getElementById('header-img').src = headerImage;
    document.getElementById('maps-img').src = mapsImage;
  }
}

export default Ui;