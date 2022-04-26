import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Project from "../Pages/Projects";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Project">
                <Project/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;