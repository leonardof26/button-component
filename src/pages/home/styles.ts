import styled from 'styled-components'

export const Container = styled.div`
  padding: 5%;

  h1 {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  > div {
    padding: 20px;

    display: flex;

    > div {
      width: 25%;
      min-width: 250px;

      code {
        font-weight: 400;
        font-size: 0.75rem;
      }

      button {
        margin-top: 0.5rem;
      }
    }
  }
`
