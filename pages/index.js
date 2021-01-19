import React from 'react'

import Layout from '../components/layout'
import Tweet from '../components/tweet'
import useWindowSize from '../hooks/useWindowSize'

function HomePage() {
  const size = useWindowSize()

  return (
    <Layout>
      <Tweet
        name="Gökberk H."
        slug="gokberkh"
        datetime={new Date('2021-01-01')}
        text={`Merhaba ilk tweet  :))
        

NEXT , REACT , STORYBOOK ...`}
      ></Tweet>
      <Tweet
        name="Gökberk H."
        slug="gokberkh"
        datetime={new Date('2021-01-01')}
        text={`Merhaba ikinci tweet  :)
        

NEXT , REACT , STORYBOOK ...`}
      ></Tweet>
    </Layout>
  )
}

export default HomePage
