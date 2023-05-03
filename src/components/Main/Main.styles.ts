import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  height: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: start;
  background-color: transparent;
  > div:last-child {
    justify-self: end;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
    height: 80px;
    max-width: 100%;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 1;
  font-weight: 900;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const Description = styled.div`
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 400;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
  svg {
    width: 20px;
    height: 20px;
    color: black;
  }
`
