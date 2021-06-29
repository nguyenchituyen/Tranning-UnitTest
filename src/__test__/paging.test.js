import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import Paging from '../Paging'

test('Check init display', () => {
  // Render component
  render(<Paging/>)

  const itemEle = screen.getByText(/items per page/i)

  // Expectation
  expect(itemEle).toBeInTheDocument()
})

test('Check active button', () => {
  // Render component
  render(<Paging/>)

  const ulEle = document.querySelector('.k-pager-numbers')
  expect(ulEle.firstChild.firstChild).toHaveClass('k-state-selected')
})

test('Check render 5 buttons', () => {
  // Render component
  render(<Paging/>)

  const ulEle = document.querySelector('.k-pager-numbers')
  const { getAllByRole } = within(ulEle)
  const items = getAllByRole('listitem');

  expect(items.length).toBe(6)
})

test('Check user click on go to first page', async() => {
  // Render component
  render(<Paging/>)

  fireEvent.click(screen.getByTitle('Go to the first page'))
  await waitFor(() => {
    const ulElement = document.querySelector('.k-pager-numbers')

    expect(ulElement.firstChild.firstChild).toHaveClass('k-state-selected')
  })
})

test('Check user click on go to last page', async() => {
  // Render component
  render(<Paging/>)

  fireEvent.click(screen.getByTitle('Go to the last page'))
  await waitFor(() => {
    const ulElement = document.querySelector('.k-pager-numbers')

    expect(ulElement.lastChild.firstChild).toHaveClass('k-state-selected')
  })
})