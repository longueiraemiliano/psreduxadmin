import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store test', () => {
    it('Should handle creating courses', function() {
        const store = createStore(rootReducer, initialState);
        const course = {
            title: "Course Test"
        };

        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);
        const actual = store.getState().courses[0];
        const expected = {
            title: "Course Test"
        };
        expect(actual).toEqual(expected);
    });
});