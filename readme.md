react-navigation-resolver
====
no more mess inside your `App.js`.
<br>

__This module enables you__
* :heavy_check_mark: adding pages without import statements.
  * this greatly reduces worthless scrolling after you open the `App.js`.
* :heavy_check_mark: creating new stack without typing additional functions.


Without `react-navigation-resolver`
----
```jsx
import HomePage from 'pages/home';
import FriendsPage from 'pages/friends';
import ProfilePage from 'pages/profile';

import ArticlePage from 'pages/article';
import VideoPage from 'pages/video';

import SettingPage from 'pages/setting';
import PushNotificationsPage from 'pages/push-notifications';
import AppVersion from 'pages/app-version';

const HomePages = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomePage}
        />
        <Stack.Screen
          name={'Friend'}
          component={FriendPage}
        />
        <Stack.Screen
          name={'Profile'}
          component={ProfilePage}
        />
      </Stack.Navigator>
    </>
  );
};
const ContentPages = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name={'Article'}
          component={ArticlePage}
        />
        <Stack.Screen
          name={'Video'}
          component={VideoPage}
        />
      </Stack.Navigator>
    </>
  );
};
const SettingPages = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name={'Setting'}
          component={SettingPage}
        />
        <Stack.Screen
          name={'PushNotifications'}
          component={PushNotificationsPage}
        />
        <Stack.Screen
          name={'AppVersion'}
          component={AppVersionPage}
        />
      </Stack.Navigator>
    </>
  );
};

<Drawer.Navigator>
  <Drawer.Screen
    name={'Home'}
    component={HomePages}
  />
  <Drawer.Screen
    name={'Content'}
    component={ContentPages}
  />
  <Drawer.Screen
    name={'Setting'}
    component={SettingPages}
  />
</Drawer.Navigator>
```


With `react-navigation-resolver`
----
```jsx

const AppPages = [
  { name: 'Home', pages: [
    'Home',
    'Friends',
    'Profile',
  ]},
  { name: 'Content', pages: [
    'Article',
    'Video',
  ]},
  { name: 'Setting', pages: [
    'Setting',
    'PushNotifications',
    'AppVersion',
  ]},
];

<Drawer.Navigator>
  <SecondDepthNavigators
    Screen={Drawer.Screen}
    stacks={AppPages}
  />
</Drawer.Navigator>
```