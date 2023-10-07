import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { HeaderRightTabs, TabBarIcon } from "./_components";
import Colors from "../../constants/Colors";
import Languages from "../../constants/Languages";
import { useLanguageStore } from "../../store/LanguageStore";
import { useCounterStore } from "../../store/CounterStore";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const handleRefresh = useCounterStore((state) => state.handleRefresh);
  const languageApp = useLanguageStore((state) => state.languageApp);
  const changeLanguageApp = useLanguageStore(
    (state) => state.changeLanguageApp
  );
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: `${Languages[languageApp].tab} 1`,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <HeaderRightTabs
              color={Colors[colorScheme ?? "light"].text}
              onChangeLanguage={changeLanguageApp}
              onRefreshCounter={handleRefresh}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: `${Languages[languageApp].tab} 2`,
          tabBarIcon: ({ color }) => <TabBarIcon name="bus" color={color} />,
          headerRight: () => (
            <HeaderRightTabs
              color={Colors[colorScheme ?? "light"].text}
              onChangeLanguage={changeLanguageApp}
              onRefreshCounter={handleRefresh}
            />
          ),
        }}
      />
    </Tabs>
  );
}
