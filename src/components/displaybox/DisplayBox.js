import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./tab-panel.css"
import ResultsBooks from "./ResultsBooks";
import SavedBooks from "./SavedBooks";
import SearchBar from "./searchbar/SearchBar";

export default () => (
    <Tabs>
        <TabList>
            <Tab>Search Books</Tab>
            <Tab>Saved Books</Tab>
        </TabList>

        <TabPanel>
            <SearchBar />
            <ResultsBooks />
        </TabPanel>
        <TabPanel>
            <SavedBooks />
        </TabPanel>
    </Tabs>
);