import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    li {
        list-style: none
    }

    a {
        text-decoration: none
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: ${props => props.theme.background.beige};
    }
`

export const Container = styled.div`
  max-width: 1400px;
  margin: auto;
  min-width: 500px;
  min-height: 500px;
`
