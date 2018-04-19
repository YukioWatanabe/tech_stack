import React, { Component } from 'react';
import { 
    Text,
    View,
    TouchableWithoutFeedback,
    LayoutAnimation
} from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
    
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return ( 
                <CardSection style={styles.cardStyle}>
                    <Text style={{ flex: 1, padding: 10 }}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const {titleStyle} = styles;
        const { id , title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={ () => this.props.selectLibrary(id) }
            >
                <View>
                    <CardSection style={styles.cardStyle}>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        padding: 15,
    },
    cardStyle: {
        borderBottomWidth: 0.5, 
        borderBottomColor: '#CCC'
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);