import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

const reactComponentTestSetup = ()=> {
  // Console errors should fail tests (For example when propTypes are wrong)
  before(()=> {
    sinon.stub(console, 'error', (error)=> { throw new Error(error) })
  })
  after(()=> { console.error.restore() })
}

const fakeClockSetup = ()=> {
  let clock = null
  beforeEach(()=> { clock = sinon.useFakeTimers() })
  afterEach(()=> { clock.restore() })
  return ()=> clock
}

export {
  chai, expect, reactComponentTestSetup, fakeClockSetup
}
