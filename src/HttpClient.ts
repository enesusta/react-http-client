declare type afterPostCallback = (param: any) => void;

/**
 * Simply HTTP Client
 * @type {number | string}
 */

export default class HttpClient {
  envUrl: string;

  constructor(url: string, env: string = 'API') {
    if (env) this.envUrl = `${process.env[`REACT_APP_${env}`]}${url}`;
    else this.envUrl = url;
  }

  /**
   * You can post any object to any webservice via this method.
   * @param body Body must be Object
   */

  post(body: any): void {
    //setState: afterPostCallback, setLoading: afterPostCallback) {
    fetch(this.envUrl, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) return res.text();
        else throw new Error(res.status.toString());
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
