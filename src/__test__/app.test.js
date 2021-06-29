import {render, screen} from '@testing-library/react'
import App from '../App'

test('Check init display', () => {
  render(<App/>);
  expect(screen.getByRole('alert')).toHaveTextContent('Learn React')
})