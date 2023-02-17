import { api } from './appApiManager'
import ky from 'ky'

describe('appApiManager', () => {
  it('ok returns', () => {

  })

  it('on error handle', async () => {
    const getFunc = jest.fn(() => { throw new Error('Test Error') })
    jest.spyOn(ky, 'get').mockImplementation(getFunc)

    await expect(api('test', {})).rejects.toThrow('Test Error')
  })
})
