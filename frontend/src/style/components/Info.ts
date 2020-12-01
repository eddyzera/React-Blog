import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeadInfo = styled.div`
  border-bottom: 1px solid #cecece;
  min-width: 355px;
  max-height: 205px;
`

export const Title = styled.h1`
  font-size: 3em;
  font-weight: bold;
  color: ${props => props.theme.text.black};
  text-transform: uppercase;
  margin: 10px 0;
`
export const Phrase = styled.p`
  font-size: 1.2em;
  font-weight: 400;
  color: ${props => props.theme.text.grey};
  margin-bottom: 30px;
`

export const PostOld = styled.div`
  min-height: 303px;
  background: ${props => props.theme.background.white};
  min-width: 410px;
  position: relative;
  margin: 30px 0;
  img {
    max-width: 100%;
    position: absolute;
    max-height: 222px;
    width: 100%;
  }
`
export const TitlePostOld = styled.h2`
  font-size: 0.93em;
  font-weight: 500;
  position: absolute;
  bottom: 27px;
  text-transform: uppercase;
  padding: 12px;
  color: ${props => props.theme.text.black};
`
export const DatePostOld = styled.p`
  font-size: 0.8em;
  font-weight: 500;
  color: ${props => props.theme.text.grey};
  position: absolute;
  bottom: 5px;
  padding: 12px;
`
export const CategoryOld = styled.ul`
  float: right;
  padding: 12px;
  position: absolute;
  display: flex;
  bottom: 6px;
  right: 0;
  flex-direction: row;
  li {
    color: ${props => props.theme.text.light_red};
    border-right: 1px solid #cecece;
    font-size: 0.7em;
    padding-right: 15px;
  }

  li + li {
    margin-left: 15px;
  }
`

export const FooterInfo = styled.footer`
  border-top: 1px solid #cecece;
  min-width: 355px;
  max-height: 205px;

  p {
    font-size: 0.9em;
    color: ${props => props.theme.text.black};
    font-weight: 400;
    margin: 10px 0;
  }
`
export const IconsFlex = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;

  svg + svg {
    margin-left: 12px;
  }
`
