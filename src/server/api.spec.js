import assert from 'assert'
import { describe, it } from 'mocha'
import ApiBuilder from 'claudia-api-builder'
import api from './api'

describe(__filename.split('/').pop(), () => {
  it('should be an ApiBuilder', () => {
    assert(api instanceof ApiBuilder)
  })
  it('should have an ApiResponse', () => {
    assert(api.ApiResponse instanceof Function)
  })
})
