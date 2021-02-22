import React from 'react';
import PropTypes from 'prop-types';
import siteConfig from '../../../site_config/site';
import './index.scss';

const propTypes = {
  language: PropTypes.oneOf(['zh-cn', 'en-us']),
};

class Footer extends React.Component {

  render() {
    const { language } = this.props;
    const dataSource = siteConfig[language];
    return (
      <footer className="footer-container">
        <div className="cloud-native">
          <div className="container">
            <img src="https://d33wubrfki0l68.cloudfront.net/ea0d91fac8683c38ea9a1fb8a4e9914627ac6aae/8efa9/img/logos/cloud-native-computing.svg" />
            <p dangerouslySetInnerHTML={{ __html: dataSource.cloudNative }} />
          </div>
        </div>
        <div className="copyright"><span>{dataSource.copyright}</span></div>
      </footer>
    );
  }
}

Footer.propTypes = propTypes;

export default Footer;
