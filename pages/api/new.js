import { data } from './tweet'

export default (req, res) => {
  console.log('data burada' + data)
  const { tweet } = req.body

  let test = JSON.stringify(tweet)
  if (!tweet) return res.status(400).json({ message: 'Tweet boş olamaz!' })

  data.push({
    favorite_count: '1',
    retweet_count: '11',
    favorited: 'true',
    retweet: 'true',
    created_at: 'Mon Jan 25 23:23:16 +0000 2021',
    id_str: '850006245121695744',
    text: test,
    user: {
      id: '2244994945',
      name: 'Gokberk H',
      screen_name: 'gokberkh',
      profile_image_url_https:
        'https://avatars0.githubusercontent.com/u/25930033?s=400&u=b4daefc78faea6f9d8a6bfdb7bdc1ed566453fd5&v=4',
      location: 'Internet',
      url: 'https://dev.twitter.com/',
      description:
        'Your official source for Twitter Platform news, updates & events. Need technical help? Visit https://twittercommunity.com/ \u2328\ufe0f #TapIntoTwitter'
    }
  })
}
