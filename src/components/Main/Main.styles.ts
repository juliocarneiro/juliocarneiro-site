import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => `
    background-color: ${theme.colors.background};
    color: ${theme.colors.body};
  `}
  video {
    z-index: 0;
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
  a {
    color: ${({ theme }) => theme.colors.body};
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  z-index: 1;
`

export const Description = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  z-index: 1;
`
