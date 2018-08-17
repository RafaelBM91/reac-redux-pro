import {
    StateModel,
    ActionModel,
    ActStore
} from '../models';

const Reducers = (state: StateModel, action: ActionModel) => {
    let newState: any = (state) ? copyInnmutable( state ) : copyInnmutable( { repositories: [], count: 0 } );
    switch (action.type) {
        case ActStore.ADD_MSJ:
            newState.repositories.push({...action.repository});
        break;
        case ActStore.COUNT_IMPORT:
            newState.count = action.count;
        break;
    }
    return newState;
}

const copyInnmutable = (original: any) => 
    JSON.parse( JSON.stringify( original ) );

export { Reducers };
