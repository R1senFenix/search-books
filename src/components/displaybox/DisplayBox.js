import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ResultsBooks from "./ResultsBooks";
import SavedBooks from "./SavedBooks";

export default () => (
    <Tabs>
        <TabList>
            <Tab>Search Books</Tab>
            <Tab>Saved Books</Tab>
        </TabList>

        <TabPanel>
            <ResultsBooks />
        </TabPanel>
        <TabPanel>
            <SavedBooks />
        </TabPanel>
    </Tabs>
);