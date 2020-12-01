import styled from 'styled-components'

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 12px;
  min-height: 50px;
  border-bottom: 1px solid #cccccc4f;
  background: ${props => props.theme.background.white};
`

export const Logo = styled.a`
  color: ${props => props.theme.text.black};
  font-size: 2.6em;
  font-weight: 400;
  margin: auto;
`

export const Navigation = styled.nav`
  margin: auto;
  ul {
    display: flex;
    align-items: center;
  }
`
export const Li = styled.li`
  margin-left: 15px;
  font-size: 1.3em;
  color: ${props => props.theme.text.black};
`
export const Search = styled.input`
  border: none;
  background: #f3f3f3;
  width: 261px;
  height: 47px;
  font-size: 0.95em;
  padding: 12px;
  margin-left: 16px;
  &:focus {
    outline-style: none;
    border: none;
  }
`
