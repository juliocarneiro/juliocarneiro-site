import { screen, render } from '@testing-library/react'
import { defaultTheme } from 'theme/defaultTheme'
import Home from 'pages/index'
import { ThemeProvider } from 'styled-components'

describe('HomePage', () => {
  it('should render the index page', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>
    )
    const heading = screen.getByText(/juliocarneiro.dev/i)
    expect(heading).toBeInTheDocument()
  })
})
