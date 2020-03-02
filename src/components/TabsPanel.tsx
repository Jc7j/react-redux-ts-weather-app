import React from 'react';

import { useTabs } from './Tabs';

export interface TabsPanelProps {
  label: string;
  children: React.ReactNode;
}

export const TabsPanel = (props: TabsPanelProps) => {
  const { children, label } = props;
  const { activeTab } = useTabs();
  return activeTab === label ? <div>{children} </div> : null;
};

export default TabsPanel;
