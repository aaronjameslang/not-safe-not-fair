import assert from 'assert'
import { describe, it } from 'mocha'
import * as user from './user'

describe(__filename.split('/').pop(), () => {
  describe('existsWhereEmailAddressEquals', () => {
    it('should return true', () =>
      user.existsWhereEmailAddressEquals('peace_warren@nhs.net').then(assert))
    it('should return false', () =>
      user.existsWhereEmailAddressEquals('not.in.database@nhs.n0t').then(x => assert(!x)))
  })
})
