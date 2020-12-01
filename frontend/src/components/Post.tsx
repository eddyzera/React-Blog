// eslint-disable-next-line no-use-before-define
import React from 'react'
import {
  Box,
  HeadBox,
  TitleBox,
  BoxParagraph,
  BoxDate,
  BoxAuthor,
  MainBox,
  BoxImg,
  BoxDescription,
  BoxZoom,
  FooterBox,
  Button,
  Category
} from '../style/components/Post'
import Img from '../assets/bg-banner.jpg'

const Post: React.FC = () => {
  return (
    <div>
      <Box>
        <HeadBox>
          <div>
            <TitleBox>MAGNA SED ADIPISCING</TitleBox>
            <BoxParagraph>
              LOREM IPSUM DOLOR AMET NULLAM CONSEQUAT ETIAM FEUGIAT
            </BoxParagraph>
          </div>
          <div>
            <BoxDate>Novembro 1, 2020</BoxDate>
            <BoxAuthor>Eddy Sila</BoxAuthor>
          </div>
        </HeadBox>
        <MainBox>
          <BoxZoom>
            <BoxImg src={Img} />
          </BoxZoom>
          <BoxDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            explicabo error, numquam, perspiciatis nobis nihil magni deleniti
            laborum illum eligendi itaque eveniet blanditiis, debitis quia.
            Doloribus dolorum rem atque numquam.
          </BoxDescription>
        </MainBox>
        <FooterBox>
          <Button>Continue Reading</Button>
          <Category>
            <li>Games</li>
            <li>Movies</li>
            <li>TV</li>
          </Category>
        </FooterBox>
      </Box>

      <Box>
        <HeadBox>
          <div>
            <TitleBox>MAGNA SED ADIPISCING</TitleBox>
            <BoxParagraph>
              LOREM IPSUM DOLOR AMET NULLAM CONSEQUAT ETIAM FEUGIAT
            </BoxParagraph>
          </div>
          <div>
            <BoxDate>Novembro 1, 2020</BoxDate>
            <BoxAuthor>Eddy Sila</BoxAuthor>
          </div>
        </HeadBox>
        <MainBox>
          <BoxZoom>
            <BoxImg src={Img} />
          </BoxZoom>
          <BoxDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            explicabo error, numquam, perspiciatis nobis nihil magni deleniti
            laborum illum eligendi itaque eveniet blanditiis, debitis quia.
            Doloribus dolorum rem atque numquam.
          </BoxDescription>
        </MainBox>
        <FooterBox>
          <Button>Continue Reading</Button>
          <Category>
            <li>Games</li>
            <li>Movies</li>
            <li>TV</li>
          </Category>
        </FooterBox>
      </Box>
    </div>
  )
}

export default Post
