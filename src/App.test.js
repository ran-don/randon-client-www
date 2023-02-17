import { act, render, screen } from '@testing-library/react'
import App from './App'
// eslint-disable-next-line import/no-duplicates
import React from 'react'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

// eslint-disable-next-line
import { useState } from 'react'

describe('Testing component App', () => {
  beforeEach(() => {
    useState.mockImplementation(jest.requireActual('react').useState)
  })

  it('Must update state value', () => {
    const setState = jest.fn()
    useState.mockImplementation(v => [v, setState])

    act(() => {
      render(<App />)
    })

    const button = screen.getByTestId('button')

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    expect(setState).toBeCalledWith(12)
  })
})
