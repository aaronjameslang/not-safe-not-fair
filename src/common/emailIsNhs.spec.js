import assert from 'assert'
import { describe, it } from 'mocha'
import emailIsNhs from './emailIsNhs'

describe(__filename, () => {
  const itShould = (expected, input) => {
    it(`should ${expected} ${input}`, () => {
      assert.equal(emailIsNhs(input), expected)
    })
  }

  itShould(false, 'adam@hnhs.uk')
  itShould(false, 'adam@hotmail.ca')
  itShould(false, 'adam@hotmail.nhs')
  itShould(false, 'adam@hotmail.nhs.uk.com')
  itShould(true, 'adam@hotmail.nhs.net')
  itShould(true, 'adam@hotmail.nhs.uk')
  itShould(true, 'adam@nhs.uk')
})
