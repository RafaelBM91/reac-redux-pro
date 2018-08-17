import * as React from 'react';
import * as PropTypes from 'prop-types';

import { StateModel, DetalleStateModel } from '../models';

const reverse = (vec) => {
    let nVec = [];
    for (let i=(vec.length - 1); i > -1; i--) {
        nVec.push( vec[i] );
    }
    return nVec;
}

const List: React.SFC<StateModel> = (props) => {
    return (
        <React.Fragment>
        {
            reverse( props.repositories ).map( (repo: DetalleStateModel, id: number) => 
                <div key={id}>
                    <h4>{repo.name}</h4>
                    <h5>{repo.email}</h5>
                    <p>{repo.body}</p>
                    <hr />
                </div>
            )
        }
        </React.Fragment>
    );
}

// const repoProp = PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     email: PropTypes.string,
//     body: PropTypes.string
// });

// List.propTypes = {
//     repositories: PropTypes.oneOfType([repoProp]),
//     count: PropTypes.number
// };

export { List };
