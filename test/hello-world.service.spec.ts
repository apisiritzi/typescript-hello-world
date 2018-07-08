import { sayHi } from '../src/hello-world.service'

describe('hello-world', () => {
  it('should say hi', () => {
    expect(sayHi()).toBe('Hi!')
  })
})
