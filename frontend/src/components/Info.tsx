// eslint-disable-next-line no-use-before-define
import React from 'react'
import {
  HeadInfo,
  Title,
  Phrase,
  FooterInfo,
  IconsFlex,
  Flex,
  PostOld,
  TitlePostOld,
  DatePostOld,
  CategoryOld
} from '../style/components/Info'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import Img from '../assets/bg-banner.jpg'

const Info: React.FC = () => {
  return (
    <Flex>
      <HeadInfo>
        <Title>Luke Skywalker</Title>
        <Phrase>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Phrase>
      </HeadInfo>
      <PostOld>
        <img src={Img} alt="Post antigo" />
        <TitlePostOld>Necessitatibus nesciunt omnis cum fuga.</TitlePostOld>
        <DatePostOld>April 23, 2020</DatePostOld>
        <CategoryOld>
          <li>Games</li>
          <li>Books</li>
        </CategoryOld>
      </PostOld>
      <PostOld>
        <img src={Img} alt="Post antigo" />
        <TitlePostOld>Necessitatibus nesciunt omnis cum fuga.</TitlePostOld>
        <DatePostOld>April 23, 2020</DatePostOld>
        <CategoryOld>
          <li>Games</li>
          <li>Books</li>
        </CategoryOld>
      </PostOld>
      <FooterInfo>
        <IconsFlex>
          <FaFacebookSquare size="1.4em" color="#3c3b3b" />
          <FaInstagram size="1.4em" color="#3c3b3b" />
          <HiMail size="1.6em" color="#3c3b3b" />
        </IconsFlex>
        <p>Created by Eddy Silva</p>
      </FooterInfo>
    </Flex>
  )
}

export default Info
