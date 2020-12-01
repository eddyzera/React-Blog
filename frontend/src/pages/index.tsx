// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Post from '../components/Post'
import { Container } from '../style/global'
import { GridTwoColuns } from '../style/pages/Home'
import Info from '../components/Info'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>React Blog</title>
      </Head>
      <Nav />
      <section>
        <Container>
          <GridTwoColuns>
            <Info />
            <Post />
          </GridTwoColuns>
        </Container>
      </section>
    </div>
  )
}

export default Home
