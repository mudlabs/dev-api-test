const axios = require("axios");

(async function(){
  try {
    const req = await axios({
      method: "post",
      url: "https://dev.to/api/articles",
      headers: { 
        'Content-Type': "application/json",
        'api-key': process.env.token 
      },
      article: {
        title: "Hello Dev",
        published: false,
        body_markdown: "Helloe Dev.to, this is my first post.",
        tags: ["javascript", "discuss"],
        series: "API"
      }
    });
    console.log(req);
  } catch(error) {
     console.log(error);
  }
})();
