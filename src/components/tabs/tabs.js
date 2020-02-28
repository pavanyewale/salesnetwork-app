import React, {useState} from 'react';
import {AppRegistry} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import {Home} from '../../screens/home';
import {Profile} from '../../screens/profile';
import {Search} from '../../screens/search';
import styles from './style';
import {PrimaryColor, SecondaryColor} from '../../assets/color';

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

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  return (
    <TabNavigator style={styles.container}>
      <TabNavigator.Item
        selected={selectedTab === 'home'}
        selectedTitleStyle={styles.selectedTitleStyle}
        title="HOME"
        renderIcon={() => <RenderIcon name="home" />}
        renderSelectedIcon={() => <RenderSelectedIcon name="home" />}
        badgeText={''}
        onPress={() => {
          setSelectedTab('home');
        }}>
        <Home />
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={selectedTab === 'search'}
        selectedTitleStyle={styles.selectedTitleStyle}
        title="SEARCH"
        renderIcon={() => <RenderIcon name="search" />}
        renderSelectedIcon={() => <RenderSelectedIcon name="search" />}
        badgeText=""
        onPress={() => {
          setSelectedTab('search');
        }}>
        <Search />
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={selectedTab === 'account'}
        title="ACCOUNT"
        badgeText={undefined}
        selectedTitleStyle={styles.selectedTitleStyle}
        renderIcon={() => <RenderIcon name="user" />}
        renderSelectedIcon={() => <RenderSelectedIcon name="user" />}
        onPress={() => {
          setSelectedTab('account');
        }}>
        <Profile />
      </TabNavigator.Item>
    </TabNavigator>
  );
};

AppRegistry.registerComponent('salesnetwork', () => Tabs);
