import React, { PropTypes } from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {connect} from 'react-redux'
import purify from 'dompurify'

import SideNavbar from '#/Global/SideNavbar/SideNavbar'
import TopNavbar from '#/Global/TopNavbar'
import PageTitle from '#/Global/PageTitle'
import MainSection from '#/Global/MainSection'
import Footer from '#/Global/Footer'
import './Layout.scss';

class Layout extends BaseComponent {

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    const serverRenderedHtml = this.props.route.serverHtml
    if(serverRenderedHtml.length && this.props.children) {
      console.warn('Layout was given serverRenderedHtml as well as children!')
    }
    const children = (this.props.children) ? this.props.children : serverRenderedHtml
    return (
      <div id='wrapper'>
        <SideNavbar allowedItems={this.props.allowedResources} />
        <section>
          <TopNavbar orgName={this.props.orgName} />
        </section>
        <section>
          <PageTitle />
        </section>
        <section>
          <MainSection>
            {children}
          </MainSection>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    orgName: state.meta.get('orgName'),
    allowedResources: state.meta.getIn(['access', 'resources'])
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
