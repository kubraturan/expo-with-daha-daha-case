import {
  DiscoverIcon,
  MoreWalletIcon,
  PortalIcon,
  //PortalIcon,
} from '@components/Home/TabBarIcons';
import colors from '@constants/colors';
import { TabName } from '@constants/types';
import { useAppDispatch } from '@redux/hooks';
import { useActiveTab } from '@redux/hooks/useTabs';
import { setActiveTab } from '@redux/slices/tabs';
import { Tabs, router } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TabLayout() {
  const dispatch = useAppDispatch();

  function onPressSetActiveTab(tabName: TabName) {
    dispatch(setActiveTab(tabName));
    router.replace(`/(tabs)/${tabName}`);
  }

  function activeTabCheck(tabName: string): boolean {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useActiveTab(tabName);
  }

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          borderWidth: 1.5,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: colors.white,
          borderColor: colors.gray,
          shadowOffset: { width: 100, height: 20 },
          shadowOpacity: 0.5,
          shadowColor: colors.green,
        },
        headerShown: false,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.gray,
      }}>
      <Tabs.Screen
        name="discover/index"
        options={{
          tabBarLabelStyle: {
            fontSize: 10,
            letterSpacing: 0.5,
            textAlign: 'center',
            fontWeight: '700',
          },
          title: 'KEŞFET',
          tabBarIcon: ({ color }) => (
            <DiscoverIcon isFocused={activeTabCheck('discover')} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            onPressSetActiveTab('discover');
          },
        })}
      />
      <Tabs.Screen
        name="portal/index"
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => (
            <TouchableOpacity
              accessibilityRole="button"
              style={{ marginTop: -36 }}>
              <PortalIcon />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="moreWallet/index"
        options={{
          tabBarLabelStyle: {
            fontSize: 10,
            letterSpacing: 0.5,
            textAlign: 'center',
            fontWeight: '700',
          },
          title: 'DAHA CÜZDAN',
          tabBarIcon: ({ color }) => (
            <MoreWalletIcon isFocused={activeTabCheck('moreWallet')} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            onPressSetActiveTab('moreWallet');
          },
        })}
      />
    </Tabs>
  );
}
