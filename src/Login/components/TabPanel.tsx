import React from 'react';

interface TabPanelProps{
    children?: React.ReactNode;
    value: number;
    index: number;
}

export default class TabPanel extends React.Component<TabPanelProps> {
    render(){
        const { children, value, index } = this.props;
        return value === index ? children : null;
    }
}
