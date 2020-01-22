import update from 'react-addons-update';

import { 
    START_PROFILE_LOADING,
    SUCCESS_PROFILE_LOADING,
    ERROR_PROFILE_LOADING 
} from '../actions/profileActions';
 

const initialStore = {
    profile: {
        name: '',
        email: '',
    },
    isLoadingProfile: true,
};

export default function profileReducer(store = initialStore, action) {
    switch (action.type) {
        case START_PROFILE_LOADING: {
            return update(store, {
                isLoadingProfile: { $set: true },
            });
       }

        case SUCCESS_PROFILE_LOADING: {
            const { name, email } = action.payload;
            const profile = { name, email };

            return update(store, {
                profile: { $set: profile },
                isLoadingProfile: { $set: false },
            });
        }

        case ERROR_PROFILE_LOADING: {
            return update(store, {
                isLoadingProfile: { $set: false },
            });
       }
        
        default:
            return store;
    }
};