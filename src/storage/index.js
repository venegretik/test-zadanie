import { createStore } from 'vuex';
import {formChildren} from './FormChildren';
import {formParent} from './FormParent';
export default createStore({
    modules: {
        formChildren:formChildren,
        formParent:formParent
    }
});