import * as React from 'react';
import { connect } from 'react-redux';

import { Commit } from '../actions';

import { DetalleStateModel } from '../models';

import { Form } from '../components/Form';

const DispatchForm = dispatch => 
    ({
        handlerSubmit: ({ ElementName, ElementEmail, ElementBody }) => {
            let values: DetalleStateModel = { id: 0, name : ElementName.value, email: ElementEmail.value, body: ElementBody.value };
            if (values.name.length > 0 && values.email.length > 0 && values.body.length > 0) {
                dispatch( Commit( values ) );
            }
        }
    });

const WrapperForm = connect(
    null,
    DispatchForm
)(Form);

export { WrapperForm };
