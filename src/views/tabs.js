import React, {Component} from 'react';
import {AppRegistry, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import {PrimaryColor, SecondaryColor} from '../assets/color';
import {Home} from './home';
import {Profile} from './profile';
import {Search} from './search';
const deviceW = Dimensions.get('window').width;
const basePx = 375;

function px2dp(px) {
  return (px * deviceW) / basePx;
}

const RenderIcon = props => {
  return <Icon name={props.name} size={px2dp(22)} color={SecondaryColor} />;
};

const RenderSelectedIcon = props => {
  return <Icon name={props.name} size={px2dp(22)} color={PrimaryColor} />;
};
export default class Tabs extends Component {
  state = {
    selectedTab: 'home',
  };

  render() {
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          selectedTitleStyle={styles.tabTitle}
          title="HOME"
          renderIcon={() => <RenderIcon name="home" />}
          renderSelectedIcon={() => <RenderSelectedIcon name="home" />}
          badgeText={''}
          onPress={() => this.setState({selectedTab: 'home'})}>
          <Home />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'search'}
          selectedTitleStyle={styles.tabTitle}
          title="SEARCH"
          renderIcon={() => <RenderIcon name="search" />}
          renderSelectedIcon={() => <RenderSelectedIcon name="search" />}
          badgeText=""
          onPress={() => this.setState({selectedTab: 'search'})}>
          <Search />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'account'}
          title="ACCOUNT"
          badgeText={undefined}
          selectedTitleStyle={styles.tabTitle}
          renderIcon={() => <RenderIcon name="user" />}
          renderSelectedIcon={() => <RenderSelectedIcon name="user" />}
          onPress={() => this.setState({selectedTab: 'account'})}>
          <Profile />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  tabTitle: {
    color: PrimaryColor,
  },
});

AppRegistry.registerComponent('salesnetwork', () => Tabs);
