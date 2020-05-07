import UiHelper from './ui-helper.js';
import Ui from './ui.js';
import Api from '../api/api.js';

const main = () => {
  Api.getNews();
  Api.getDataCoronaVirus();
  Ui.setImageToHtml();

  window.onscroll = () => {
    UiHelper.setStickyNavbar();
    UiHelper.setActiveLink();
  };
};

export default main;