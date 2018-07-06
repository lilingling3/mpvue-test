import * as wxApi from '../wx-api';

// pageUrl may like: ../logs/main
export default function (pageName) {
  const pageUrl = `../${pageName}/main`;
  wxApi.navigateTo(pageUrl);
}
