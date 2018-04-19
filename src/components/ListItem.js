import React, { Component } from 'react';
import { CardSection } from './common';
import { Text } from 'react-native';

class ListItem extends Component {
    render() {
        const {titleStyle} = styles;
        return (
            <CardSection style={titleStyle}>
                <Text>{this.props.library.title}</Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        padding: 15
    }
}

export default ListItem;