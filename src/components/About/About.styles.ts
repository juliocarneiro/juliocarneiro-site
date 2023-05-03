import styled from 'styled-components'

export const Wrapper = styled.section`
  max-width: 580px;
  margin: 0 auto;
  padding: 0 1rem;
  p,
  li {
    line-height: 1.5;
    font-size: 14px;
  }
  span {
    color: #ff0000;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
  }
`
export const OpenSource = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  a {
    line-height: 1.5;
    font-size: 14px;
    &:hover {
      color: #ff0000;
      text-decoration: none;
    }
  }
  span {
    color: #ff0000;
    cursor: pointer;
  }
`
export const Clients = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  a {
    line-height: 1.5;
    font-size: 14px;
    &:hover {
      color: #ff0000;
      text-decoration: none;
    }
  }
  span {
    color: #ff0000;
    cursor: pointer;
  }
`
