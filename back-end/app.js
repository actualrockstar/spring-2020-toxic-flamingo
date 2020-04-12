// import and instantiate express
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object
// we will put some server logic here later...
// export the express app we created to make it available to other modules


app.get('/callback', function(req, res){
    res.send('Hello i have the token');
})

app.get('/login', function(req, res) {
    var scopes = 'user-read-private user-read-email';
    let my_client_id = '691936c2acfc4bad82db2fe642f023ec';
    let redirect_uri = 'http://localhost:7000/callback'
    res.redirect('https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' + my_client_id +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(redirect_uri));
    });

// mock post database
const posts = [
  {
    id: 1,
    artist_name: "Waiyu",
    song_title: "Imagine",
    username: "username123",
    post_title: "Cool song!",
    post_comment: "Very cool, thanks for sharing",
    post_commenter: "commentMan23",
    hashtag: "nyc"
  },
  {
    id: 2,
    artist_name: "Ace Frehley",
    song_title: "New York Groove",
    username: "username745",
    post_title: "Nice",
    post_comment: "Nice, thanks",
    post_commenter: "commentMan23",
    hashtag: "nyc"
  },
  {
    id: 3,
    artist_name: "Dumb artist",
    song_title: "Dumb song",
    username: "username82",
    post_title: "Dumb song!",
    post_comment: "That was pretty dumb",
    post_commenter: "commentMan23",
    hashtag: "dumbsongs"
  }
];


app.get('/hashtagFeed/:hashtag', (req, res) => {

  const hashtag = req.params.hashtag; 

  res.json(getHashtagData(hashtag));
});

function getHashtagData(hashtag) {

  let postsResponse = [];

  console.log(hashtag);

  for (let i=0; i<posts.length; i++) {
    const post = posts[i];
    console.log(post.hashtag);
    if (post.hashtag != hashtag) {
      continue;
    }
    
    postsResponse.push(post);
  }

  return postsResponse;
}

module.exports = app;
