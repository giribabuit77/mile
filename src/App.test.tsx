import {describe,test,expect} from 'vitest'
import {render} from '@testing-library/react'
import App from './App'

describe('App test', () => {

  test('render', () => {
    render( <App/>)
    expect(true).toBeTruthy()
  })

})