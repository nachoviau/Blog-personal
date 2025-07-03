import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

// Mock the Layout component
jest.mock('../components/Layout', () => {
  return function MockLayout({ children }: { children: React.ReactNode }) {
    return <div data-testid="layout">{children}</div>
  }
})

// Mock fs and path modules
jest.mock('fs', () => ({
  readdirSync: jest.fn(() => []),
  readFileSync: jest.fn(),
}))

jest.mock('path', () => ({
  join: jest.fn(),
}))

jest.mock('gray-matter', () => ({
  __esModule: true,
  default: jest.fn(() => ({ data: {} })),
}))

describe('Home Page', () => {
  beforeEach(() => {
    render(<Home />)
  })

  test('renders the main heading with greeting and emoji', () => {
    const heading = screen.getByText(/¡Hola!/)
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('👋')
  })

  test('uses monospace font class', () => {
    const mainContainer = screen.getByText(/¡Hola!/).closest('div')
    expect(mainContainer).toHaveClass('font-mono')
  })

  test('has orange line under the heading', () => {
    const orangeLine = document.querySelector('.border-orange-500')
    expect(orangeLine).toBeInTheDocument()
    expect(orangeLine).toHaveClass('border-t-2')
  })

  test('displays improved welcome text', () => {
    expect(screen.getByText(/paper por día/)).toBeInTheDocument()
    expect(screen.getByText(/No escribo papers/)).toBeInTheDocument()
    expect(screen.getByText(/desmenuzar conceptos/)).toBeInTheDocument()
  })

  test('has GitHub link with larger icon', () => {
    const githubLink = screen.getByLabelText('GitHub')
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/nachoviau')
    
    const githubIcon = githubLink.querySelector('svg')
    expect(githubIcon).toHaveClass('w-10', 'h-10')
  })

  test('has LinkedIn link with larger icon', () => {
    const linkedinLink = screen.getByLabelText('LinkedIn')
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/nacho-viau-2a47462b8/')
    
    const linkedinIcon = linkedinLink.querySelector('svg')
    expect(linkedinIcon).toHaveClass('w-10', 'h-10')
  })

  test('does not have navigation links at the bottom', () => {
    expect(screen.queryByText('Papers')).not.toBeInTheDocument()
    expect(screen.queryByText('Proyectos')).not.toBeInTheDocument()
    expect(screen.queryByText('Sobre mí')).not.toBeInTheDocument()
  })

  test('has proper spacing and layout', () => {
    const mainContainer = screen.getByText(/¡Hola!/).closest('div')
    expect(mainContainer).toHaveClass('max-w-3xl', 'mx-auto', 'text-center')
  })

  test('social icons have hover effects', () => {
    const githubLink = screen.getByLabelText('GitHub')
    const linkedinLink = screen.getByLabelText('LinkedIn')
    
    expect(githubLink).toHaveClass('hover:text-orange-400', 'transition-colors', 'duration-300')
    expect(linkedinLink).toHaveClass('hover:text-orange-400', 'transition-colors', 'duration-300')
  })
}) 