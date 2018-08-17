import * as React from 'react';
import { connect } from 'react-redux';

import { List } from '../components/List';

import { StateModel } from '../models';

const WithProps = (state: StateModel): StateModel =>
    ({
        repositories: state.repositories,
        count: state.count
    });

const WithList = connect(
    WithProps,
    null // Dispatch
)(List);

export { WithList };
