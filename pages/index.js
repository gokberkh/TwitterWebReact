import React from 'react'

import Layout from '../components/layout'
import Tweet from '../components/tweet'

import fetcher from '../lib/fetch'
import useSWR from 'swr'
import Loading from '../components/loading'
import styles from './index.module.css'

function HomePage() {
  //json-server --watch db.json --port 3004

  const { data } = useSWR(
    'https://my-json-server.typicode.com/gokberkh/TwitterWebReact/data',
    fetcher
  )

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
