import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const viewStyle = Object.assign({}, props.style, styles.containerStyle);
    
    return (
        <View style={viewStyle}>
            {props.children}
        </View>
    );
}

const styles = {
    containerStyle: {
        padding: 5,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
};

export { CardSection };