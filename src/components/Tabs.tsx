import React from 'react';

import Tab, { TabProps } from './Tab';
import TabsPanel, { TabsPanelProps } from './TabsPanel';

interface TabsContext {
  activeTab: string;
  setActiveTab: (label: string) => void;
}

interface TabsProps {
  Tab?: TabProps;
  TabsPanel?: TabsPanelProps;
  children: React.ReactNode;
}

const TabsContext = React.createContext<TabsContext | undefined>(undefined);

const Tabs = (props: TabsProps) => {
  const { children } = props;

  const [activeTab, setActiveTab] = React.useState('a');

  /**
   * Memoize the context to prevent unecessary renders.
   */
  const memoizedContextValue = React.useMemo(
    () => ({
      activeTab,
      setActiveTab
    }),
    [activeTab, setActiveTab]
  );

  return (
    <TabsContext.Provider value={memoizedContextValue}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = (): TabsContext => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('This component must be used within a <Tabs> component.');
  }
  return context;
};

Tabs.Tab = Tab;
Tabs.TabsPanel = TabsPanel;

export default Tabs;
