import React from 'react';

import { useTabs } from './Tabs';

import 'styles/Tab.css';

export interface TabProps {
  key?: number;
  label: string;
  children?: React.ReactNode;
}

const Tab = (props: TabProps) => {
  const { label, key, children } = props;
  const { setActiveTab } = useTabs();

  return (
    <button className="tabStyles" key={key} onClick={() => setActiveTab(label)}>
      {children}
    </button>
  );
};

export default Tab;
