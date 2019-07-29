import React from 'react';
import PropTypes from 'prop-types';
import {ImageBackground} from 'react-native';

const BackgroundImage = props => {
    const {source, children} = props;
    
    return (
        <ImageBackground 
            source = {source}
            style = {{flex:1, width:null, height:null}}
        >
            {children}
        </ImageBackground>
    );
};

BackgroundImage.propTypes = {
    source: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired,
};

export default BackgroundImage;