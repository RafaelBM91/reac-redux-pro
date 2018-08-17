import axios from 'axios';

import { DetalleStateModel, ActionModel, ActStore, StateModel } from '../models';

const Commit = (repository: DetalleStateModel): Function => 
    (dispatch, getState) => {
        dispatch ( UpdateRepositoryToStore(repository, ActStore.ADD_MSJ) );
        const { repositories, count }: StateModel = getState();
        if ((repositories.length - count) === 2) {
            LoadTwoPlus(dispatch, count);
        }
    }

const LoadTwoPlus = (dispatch: any, count: number) => {
    for (let a=0; a<2; a++) {
        count++;
        axios.get('https://jsonplaceholder.typicode.com/comments/' + count)
            .then(({ data }) => {
                dispatch( UpdateRepositoryToStore(data, ActStore.ADD_MSJ) );
            });
    }
    dispatch( UpdateCountToStore((count + 2), ActStore.COUNT_IMPORT) );
}

const UpdateRepositoryToStore = (repository: DetalleStateModel, type: String) =>
    ({ type, repository });

const UpdateCountToStore = (count: number, type: String) =>
    ({ type, count });

export { Commit };
