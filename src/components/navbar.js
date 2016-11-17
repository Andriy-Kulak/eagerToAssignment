/* eslint react/jsx-handler-names:0 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import {browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

class NavBar extends Component {
  constructor() {
    super();
    switch (location.pathname) {
      case '/':
        this.state = {initalTab: 0};
        break;
      case '/about':
        this.state = {initalTab: 1};
        break;
      case '/contact':
        this.state = {initalTab: 2};
        break;
      case '/faq':
        this.state = {initalTab: 3};
        break;
      default:
        this.state = {initalTab: 0};
        break;
    }
  }

  componentWillMount() {
    injectTapEventPlugin();
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  hanldleChange(value) {
    switch (value) {
      case 0:
        return browserHistory.push('/');
      case 1:
        return browserHistory.push('/about');
      case 2:
        return browserHistory.push('/contact');
      case 3:
        return browserHistory.push('/faq');
      default:
        return browserHistory.push('/');
    }
  }

  // makes sure when user is looking at datailOverview that
  // s/he can go to dashboard Index component by clicking on the home tab
  activeHome() {
    return browserHistory.push('/');
  }

  render() {
    const styles = {
      appBar: {
        flexWrap: 'wrap'
      },
      tabs: {
        width: '85%'
      }
    };

    return (
      <div className="container">
        <div className="row">
          <AppBar title="Eager.To" showMenuIconButton={false} style={styles.appBar}>
            <Tabs style={styles.tabs} onChange={this.hanldleChange} initialSelectedIndex={this.state.initalTab}>
              <Tab value={0} label="home" onActive={this.activeHome}/>
              <Tab value={1} label="about"/>
              <Tab value={2} label="contact"/>
              <Tab value={3} label="faq"/>
            </Tabs>
          </AppBar>
        </div>
      </div>
    );
  }
}

NavBar.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default NavBar;
