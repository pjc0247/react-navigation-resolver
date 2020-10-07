import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const resolvePath = (stackName, pageName) => {
  // TODO: make this customizable
  return `pages/${stackName}/${pageName}`;
};
const resolvePageComponent = (stackName, pageName) => {
  return require(resolvePath(stackName, pageName));
};

export const SecondDepthNavigators = ({
  Screen,
  stacks,
}) => {
  return (
    <>
      {Object.entries([
        ...stacks,
      ]).map(([_, { stackName, pages }]) => {
        const Nav = useCallback(() => {
          const Stack = createStackNavigator();
          return (
            <Stack.Navigator>
              {pages.map((pageName) => (
                <Stack.Screen
                  name={pageName}
                  component={resolvePageComponent(stackName, pageName)}
                  options={{ headerShown: false }}
                />
              ))}
            </Stack.Navigator>
          );
        }, []);

        return (
          <Screen
            name={stackName}
            component={Nav}
          />
        );
      })}
    </>
  );
};
