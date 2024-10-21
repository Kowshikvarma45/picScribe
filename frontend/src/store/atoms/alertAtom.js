import { atom } from 'recoil';

export const alertState = atom({
    key: 'alertState',
    default: {
        showAlert: false,
        message: '',
        statusCode: 0,
    },
});
