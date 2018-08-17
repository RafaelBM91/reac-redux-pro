enum ActStore {
    ADD_MSJ = 'ADD_MSJ',
    COUNT_IMPORT = 'COUNT_IMPORT'
}

interface DetalleStateModel {
    id: number;
    name: string;
    email: string;
    body: string;
}

interface StateModel {
    repositories: [DetalleStateModel];
    count: number;
}

interface ActionModel {
    type: string;
    repository?: DetalleStateModel;
    count?: number;
}

export { ActStore, DetalleStateModel, StateModel, ActionModel };
