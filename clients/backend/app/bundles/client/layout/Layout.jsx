import React, { PropTypes } from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {connect} from 'react-redux'

import SideNavbar from '#/Global/SideNavbar/SideNavbar'
import TopNavbar from '#/Global/TopNavbar'
import PageTitle from '#/Global/PageTitle'
import MainSection from '#/Global/MainSection'
import Footer from '#/Global/Footer'
import css from './Layout.scss';

class Layout extends BaseComponent {

  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    console.warn(this.props.routes)
    // HERE BE DRAGONS! Only render sanitized Html from the server!
    const serverHtml = this.props.route.serverHtml
    return (
      <div className={css.page}>
        <SideNavbar allowedItems={this.props.allowedResources} />
        <div className={css.content}>
          <section>
            <TopNavbar orgName={this.props.orgName} />
          </section>
          <section>
            <PageTitle routes={this.props.routes} />
          </section>
          <section className={css.mainSection}>
            <MainSection >
              <div dangerouslySetInnerHTML={{__html: serverHtml}} />
              {this.props.children}
            </MainSection>
          </section>
          <section className={css.footerSection}>
            <Footer />
          </section>
        </div>
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
