import React from 'react';
import ReactDOM from 'react-dom';
import { getScrollTop, getLink } from '../../../utils';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/button';
import Language from '../../components/language';
import Item from './featureItem';
import FunctionItem from './functionItem';
import homeConfig from '../../../site_config/home';
import './index.scss';

class Home extends Language {

  constructor(props) {
    super(props);
    this.state = {
      headerType: 'primary',
      starCount: 0,
      forkCount: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollTop = getScrollTop();
      if (scrollTop > 66) {
        this.setState({
          headerType: 'normal',
        });
      } else {
        this.setState({
          headerType: 'primary',
        });
      }
    });

    // 写死协议，因github会做协议跳转，这种跳转会被Safari拦截
    fetch('https://api.github.com/repos/openyurtio/openyurt')
        .then(res => res.json())
        .then((data) => {
          this.setState({
            starCount: data.stargazers_count,
            forkCount: data.forks_count,
          });
        });
  }

  render() {
    const { starCount, forkCount } = this.state;
    const language = this.getLanguage();
    const dataSource = homeConfig[language];
    const { headerType } = this.state;
    const headerLogo = headerType === 'primary' ? '/img/OpenYurt.png' : '/img/OpenYurt.png';
    return (
      <div className="home-page">
        <section className="top-section">
          <Header
            currentKey="home"
            type={headerType}
            logo={headerLogo}
            language={language}
            onLanguageChange={this.onLanguageChange}
          />
          <div className="vertical-middle">
            <div className="product-name">
              <h2>{dataSource.brand.brandName}</h2>
            </div>
            <p className="product-desc">{dataSource.brand.briefIntroduction}</p>
            <div className="button-area">
            {
              dataSource.brand.buttons.map(b => <Button type={b.type} key={b.type} link={b.link} target={b.target}>{b.text}</Button>)
            }
            </div>
            <div className="github-buttons">
              <a href="https://github.com/openyurtio/openyurt" target="_blank" rel="noopener noreferrer">
                <div className="star">
                  <img src="https://img.alicdn.com/tfs/TB1FlB1JwHqK1RjSZFPXXcwapXa-32-32.png" />
                  <span className="count">{starCount}</span>
                </div>
              </a>
              <a href="https://github.com/openyurtio/openyurt/fork" target="_blank" rel="noopener noreferrer">
                <div className="fork">
                  <img src="https://img.alicdn.com/tfs/TB1zbxSJwDqK1RjSZSyXXaxEVXa-32-32.png" />
                  <span className="count">{forkCount}</span>
                </div>
              </a>
            </div>
          </div>
          <div className="animation animation1" />
          <div className="animation animation2" />
          <div className="animation animation3" />
          <div className="animation animation4" />
          <div className="animation animation5" />
        </section>
        <section className="introduction-section">
          <div className="introduction-body">
            <div className="introduction">
              <h3>{dataSource.introduction.title}</h3>
              <p>{dataSource.introduction.desc}</p>
            </div>
            <img src={getLink(dataSource.introduction.img)} />
          </div>
        </section>
        <section className="function-section">
            <h3>{dataSource.functions.title}</h3>
            <div>
                {
                    dataSource.functions.list.map((func, i) => (
                        <FunctionItem func={func} key={i} imgFirst={i % 2 === 0} />
                    ))
                }
            </div>
        </section>
        <section className="feature-section">
          <div className="feature-section-body">
            <h3>{dataSource.features.title}</h3>
            <ul>
            {
              dataSource.features.list.map((feature, i) => (
                <Item feature={feature} key={i} />
              ))
            }
            </ul>
          </div>
        </section>
        <Footer language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
