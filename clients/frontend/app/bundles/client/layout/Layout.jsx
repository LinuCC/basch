import React, { PropTypes } from 'react'
import BaseComponent from 'libs/components/BaseComponent'

import TopNavbar from '#/Global/TopNavbar'
import MainSection from '#/Global/MainSection'
import Footer from '#/Global/Footer'
import './Layout.scss';

export default class Layout extends BaseComponent {

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <section>
          <TopNavbar orgName={"Lolcatz"} />
        </section>
        <section>
          <MainSection>
            {this.props.children}
          </MainSection>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    );
  }
}
