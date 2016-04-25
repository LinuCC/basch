import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'

// import css from './Sidebar.scss'

const Sidebar = (props) => {
  return <div className='col-xl-3 card-col'>
    {props.children}
  </div>
}

const SidebaredContent = (props) => {
  return <div className='col-xl-9 card-col'>
    {props.children}
  </div>
}

export {
  Sidebar,
  SidebaredContent
}
