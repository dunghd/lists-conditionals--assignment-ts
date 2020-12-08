import React from 'react';

export interface IValidationProps {
    inputLength: number;
};

const validation = (props: IValidationProps) => {
    let validationMessage = 'Text long enough';

    if (props.inputLength <= 5) {
        validationMessage = 'Text too short'
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default validation;