import React from 'react';
import {Survey, StylesManager} from 'survey-react';
import 'survey-react/survey.css';
import './form.css'
import {
    Link
  } from "react-router-dom";
import { render } from '@testing-library/react';
let themeChanges = StylesManager.ThemeColors["default"];

const formCss = {
    container: "table",
    matrix: {
        root: "root"
    },
    navigation: {
        complete: "complete-button"
    }
};

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        themeChanges["$body-background-color"] = "#000"
        themeChanges["$body-container-background-color"] = "#000";
        themeChanges["$text-color"] = "#e0e0e0"
        themeChanges["$border-color"] = "#000";
        StylesManager.applyTheme()
    }

    render() {
        return (
            <div className="individual-form-wrap">
                <Survey json={this.props.formJson} css={formCss}/>
            </div>
        )
    }
}

export default FormInput;