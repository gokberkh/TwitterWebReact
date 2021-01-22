import React from 'react'

import Layout from '../components/layout'
import Tweet from '../components/tweet'

import fetcher from '../lib/fetch'
import useSWR from 'swr'
import Loading from '../components/loading'
import styles from './index.module.css'

function HomePage() {
  const { data } = useSWR('/api/tweet', fetcher)

  return (
    <Layout>
      {!data && (
        <div className={styles.loading}>
          <Loading></Loading>
        </div>
      )}

      {data?.map((tweet) => {
        return <Tweet key={tweet.id} {...tweet} />
      })}
    </Layout>
  )
}

export default HomePage
