import * as React from 'react';
import styled from 'styled-components';

import { WrapperForm } from './containers/Form';
import { WithList } from './containers/List';

export const App = () =>
    (
        <React.Fragment>
            <WithList />
            <WrapperForm />
        </React.Fragment>
    );
