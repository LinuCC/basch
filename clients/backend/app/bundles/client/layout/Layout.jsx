import React, { PropTypes } from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {connect} from 'react-redux'
import sanitizer from 'sanitizer'

import SideNavbar from '#/Global/SideNavbar/SideNavbar'
import TopNavbar from '#/Global/TopNavbar'
import PageTitle from '#/Global/PageTitle'
import MainSection from '#/Global/MainSection'
import Footer from '#/Global/Footer'
import './Layout.scss';

class Layout extends BaseComponent {

  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    const serverHtml = sanitizer.sanitize(this.props.route.serverHtml)
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
          <MainSection >
            <div dangerouslySetInnerHTML={{__html: serverHtml}} />
            {this.props.children}
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
