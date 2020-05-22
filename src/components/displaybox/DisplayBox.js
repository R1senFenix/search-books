import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./tab-panel.css"
import SearchPanel from "./searchpanel/SearchPanel";
import SavedBooks from "./SavedBooks";



export default () => (
    <Tabs>
        <TabList>
            <Tab>Search Books</Tab>
            <Tab>Saved Books</Tab>
        </TabList>

        <TabPanel>
            <SearchPanel />
        </TabPanel>
        <TabPanel>
            <SavedBooks />
        </TabPanel>
    </Tabs>
);