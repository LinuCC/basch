import {chai, expect, reactComponentTestSetup} from 'testHelpers/components'
import React from 'react'
import {shallow, mount} from 'enzyme'

import BigNotice from '#/BigNotice'

describe('<BigNotice />', ()=> {

  reactComponentTestSetup()

  it('renders successfully', ()=> {
    // expect(()=> <Alert />).to.throw(/`type` was not specified/)
    const alert = <BigNotice />
    const wrapper = shallow(alert)
  })

  it('accepts & renders children', ()=> {
    // expect(()=> <Alert />).to.throw(/`type` was not specified/)
    const alert = <BigNotice>
      <div id='some-child'>Hi!</div>
      <div id='some-child'>Hi!</div>
    </BigNotice>
    const wrapper = shallow(alert)
    expect(wrapper).to.have.exactly(2).descendants('#some-child')
  })
})

