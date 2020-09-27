const unirest = require("unirest");

(async function(){
  try {

    const post = await unirest
      .post("https://dev.to/api/articles")
      .headers({
        'Content-Type': "application/json",
        'api-key': process.env.token
      })
      .send({
        "title": "Hello, World!",
        "published": true,
        "body_markdown": "Hello DEV, this is my first post",
        "tags": [
          "discuss",
          "help"
          ],
        "series": "Hello series",
      });
    console.log(post.body);
  } catch(error) {
    console.log(error);
  }
})();
