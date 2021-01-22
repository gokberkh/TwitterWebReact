import React from 'react'

import Layout from '../components/layout'
import Tweet from '../components/tweet'
import useWindowSize from '../hooks/useWindowSize'
import fetcher from '../lib/fetch'
import useSWR from 'swr'
import Loading from '../components/loading'
import styles from './index.module.css'

function HomePage() {
  const { data } = useSWR('/api/tweet', fetcher)

  /* const [data, dataSet] = React.useState([])
  const [dataLoading, dataLoadingSet] = React.useState(true)*/

  //const size = useWindowSize()

  //FETCH
  /* React.useEffect(() => {
    async function getData() {
      const response = await fetch('http://localhost:3000/api/tweet')
      const data = await response.json()
      dataSet(data)
      dataLoadingSet(false)
      console.log(data)
    }
    getData()
  }, [])*/
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
