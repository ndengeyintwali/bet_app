export default {
  params: {
    executablePath: "/opt/google/chrome-unstable/google-chrome",
    headless: true,
    devtools: false,
    ignoreHTTPSErrors: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--disable-extensions",
      "--disable-dev-tools",
      "--disable-infobars",
      "--ignore-certificate-errors"
      // debug logging
      //   "--enable-logging",
      //   "--v=1"
      //       '--proxy-server=127.0.0.1:9876',
    ]
  },
  domain: "mobile.288365.com",
  intervalTimes: {
    list: 1, // 1 sec.
    reload: 1200, // 60*20 = 20 min.
    proxy: 60 // 1 min.
  },
  proxyListAddr: "" // proxy list addr. http://blabla/proxy.json
};
[
  {
    host: "172.17.0.1",
    port: "6000",
    type: "http",
    username: "userr",
    password: "pwd"
  },
  {
    host: "172.17.0.2",
    port: "6002",
    type: "http",
    username: "userr",
    password: "pwd"
  }
];
