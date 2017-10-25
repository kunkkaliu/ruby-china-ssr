/**
 * Created by liudonghui on 17/7/5.
 */
import configureStore from '../store/configureStore';

const store = configureStore(window.INITIAL_STATE || {});
export default store;
