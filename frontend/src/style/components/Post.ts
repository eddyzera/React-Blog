import styled from 'styled-components'

export const Box = styled.div`
  background: ${props => props.theme.background.white};
  max-width: 900px;
  padding: 3.2em;
  min-height: 500px;
  margin: 0 auto 50px;
`

export const HeadBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`

export const TitleBox = styled.h2`
  font-size: 2.6em;
  color: ${props => props.theme.text.black};
  font-weight: 500;
`
export const BoxParagraph = styled.p`
  margin: 10px 0;
  font-size: 1em;
  color: ${props => props.theme.text.grey};
  font-weight: 400;
`
export const BoxDate = styled.p`
  font-size: 0.9em;
  font-weight: 500;
  color: ${props => props.theme.text.black};
  text-align: end;
  margin-bottom: 10px;
`
export const BoxAuthor = styled.p`
  font-size: 1em;
  color: ${props => props.theme.text.light_red};
  font-weight: 400;
  text-align: end;
  font-style: italic;
`
export const MainBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`
export const BoxZoom = styled.div`
  position: relative;
  overflow: hidden;
  margin: 25px 0;
  width: 100%;
`

export const BoxImg = styled.img`
  width: 100%;
  max-height: 368px;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  &:hover {
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`
export const BoxDescription = styled.p`
  font-size: 1.145em;
  font-weight: 300;
  line-height: 30px;
  color: ${props => props.theme.text.grey};
`
export const FooterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Button = styled.a`
  border: 0;
  box-shadow: inset 0 0 0 1px rgba(160, 160, 160, 0.3);
  color: ${props => props.theme.text.black};
  font-size: 1em;
  margin: 13px 0;
  font-weight: 500;
  width: 258px;
  height: 58px;
  cursor: pointer;
  padding: 20px 7px;
  text-transform: uppercase;
  text-align: center;
  -webkit-letter-spacing: 5px;
  -moz-letter-spacing: 5px;
  -ms-letter-spacing: 5px;
  letter-spacing: 5px;
  transition: 0.9s;

  &:hover {
    box-shadow: inset 0 0 0 1px #f32853;
    color: ${props => props.theme.text.light_red};
  }
`
export const Category = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  li {
    margin-left: 0px;
    border-right: 1px solid #cecece;
    font-size: 0.812em;
    font-weight: 200;
    color: ${props => props.theme.text.light_red};
    padding: 0 18px;
  }
`
