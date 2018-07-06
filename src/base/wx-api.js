function promisifyWxApi(apiName){
  return new Promise((resolve, reject) => {
    wx[apiName]({
      success: (res) => {
        console.log(`call promisifyWxApi ${apiName}`);
        resolve(res);
      },
      fail: () => {
        reject();
      },
    });
  });
}

export const navigateTo = url => wx.navigateTo({ url });

export const login = () => promisifyWxApi('login');

export const getUserInfo = () => promisifyWxApi('getUserInfo');
