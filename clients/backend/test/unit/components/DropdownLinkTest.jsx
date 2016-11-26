import {chai, expect, reactComponentTestSetup} from 'testHelpers/components'
import React from 'react'
import {shallow, mount} from 'enzyme'

import DropdownLink from '#/DropdownLink'

describe('<DropdownLink />', ()=> {

  reactComponentTestSetup()

  it('renders successfully', ()=> {
    // expect(()=> <Alert />).to.throw(/`type` was not specified/)
    const link = <DropdownLink id='some-dropdown' />
    const wrapper = shallow(link)
  })

  it('accepts & renders children', ()=> {
    // expect(()=> <Alert />).to.throw(/`type` was not specified/)
    const link = <DropdownLink id='some-dropdown'>
      <div id='some-child'>Hi!</div>
      <div id='some-child'>Hi!</div>
    </DropdownLink>
    const wrapper = shallow(link)
    expect(wrapper).to.have.exactly(2).descendants('#some-child')
  })

  it('prevents event bubbling of toggle', ()=> {
    const link = <DropdownLink id='some-dropdown' />
    const wrapper = mount(link)
    const oldHref = window.location.href
    wrapper.find('a').simulate('click')
    expect(window.location.href).to.equal(oldHref)
  })
})

