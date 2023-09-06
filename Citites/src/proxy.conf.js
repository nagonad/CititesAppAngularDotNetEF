const PROXY_CONFIG = [
  //{
  //  context: [
  //    "/weatherforecast",
  //  ],
  //  target: "https://localhost:40443",
  //  secure: false
  //},
  //{
  //  context: [
  //    "/city",
  //  ],
  //  target: "https://localhost:40443",
  //  secure: false
  //},
  {
    context: [
      "/*",
    ],
    target: "https://localhost:40443",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
