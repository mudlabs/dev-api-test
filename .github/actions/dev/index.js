const axios = require("axios");
const unirest = require("unirest");
const fetch = require("node-fetch");

(async function(){
  try {
    const axiosPost = await axios({
      method: "post",
      url: "https://dev.to/api/articles",
      headers: { 
        'Content-Type': "application/json",
        'api-key': process.env.token 
      },
      data: {
        article: {
          title: "Hello Dev 1",
          published: false,
          body_markdown: "Helloe Dev.to, this is my first post.",
          tags: ["api", "post"],
          series: "API"
        }
      }
    });
    console.log(axiosPost);
    const unirestPost = await unirest
      .post("https://dev.to/api/articles")
      .headers({ 'Content-Type': "application/json", 'api-key': process.env.token })
      .send({
        article:{
          title: "Hello Dev 2",
          published: false,
          body_markdown: "Hello Dev.to, this is my second post.",
          tags: ["api", "post"],
          series: "API"
        }
      });
    console.log(unirestPost);
    
    const fetchPost = await fetch(
      "https://dev.to/api/articles",
      {
        method: "post",
        headers: {
          'Content-Type': "application/json",
          'api-key': process.env.token
        },
        body: {
          article: {
            title: "Hello Dev 3",
            published: false,
            body_markdown: "Hello Dev.to, this in my second post.",
            tags: ["api", "post"],
            series: "API"
          }
        }
      }
    );
    console.log(fetchPost);
  } catch(error) {
     console.log(error);
  }
})();
