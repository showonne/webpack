import Ajax from './ajax';

export default {
    greet() {
        return Ajax.get('/greet');
    }
};
