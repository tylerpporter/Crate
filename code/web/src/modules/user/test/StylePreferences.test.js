import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import StylePreferences from '../StylePreferences.js';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, rootReducer, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

describe("StylePreference", () => {
  let user;
  let router;
  let store;
  let mockUpdateStylePreference;
  beforeEach(() => {
  mockUpdateStylePreference = jest.fn()
    user = () => {
      return {
        error: null,
        isLoading: false,
        isAuthenticated: true,
        details: {
            id: 1,
            name:"Sarah",
            email:"sarah@crate.com",
            role: "USER",
            stylePreference: null,
          }
        }
    }
    const appReducer = combineReducers({
      user,
      // logout
    })
  //   // Root Reducer
    const rootReducer = (state, action) => {
      if (action.type === 'UPDATE_STYLE') {
        state = action.details.stylePreference
      }
      return appReducer(state, action)
    }
    // Load initial state from server side
    // let initialState =  Object.assign(user())
    let initialState
        if (typeof window !== 'undefined') {
            initialState = window.__INITIAL_STATE__
            delete window.__INITIAL_STATE__
        }
    // store = createStore(rootReducer, initialState)
    store = createStore(rootReducer, applyMiddleware(thunk))
    // store.dispatch = jest.fn()
    router =
    <Provider store={store}>
        {/* <BrowserRouter> */}
        <MemoryRouter>
          <StylePreferences/>
        </MemoryRouter>
        {/* </BrowserRouter> */}
    </Provider>
    })

    it("Should render the correct Labels", () => {
      const { getByText } = render(router)

      const dressesTitleElement = getByText("Dresses");
      const topsTitleElement = getByText("Tops");
      const bottomsTitleElement = getByText("Bottoms");
      const shoesTitleElement = getByText("Shoes");
    
      expect(dressesTitleElement).toBeInTheDocument();
      expect(topsTitleElement).toBeInTheDocument();
      expect(bottomsTitleElement).toBeInTheDocument();
      expect(shoesTitleElement).toBeInTheDocument();
    })
  })