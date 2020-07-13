import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import StylePreferences from '../StylePreferences.js';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
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
    })

    const rootReducer = (state, action) => {
      if (action.type === 'UPDATE_STYLE') {
        state = action.details.stylePreference
      }
      return appReducer(state, action)
    }

    let initialState
        if (typeof window !== 'undefined') {
            initialState = window.__INITIAL_STATE__
            delete window.__INITIAL_STATE__
        }

    store = createStore(rootReducer, applyMiddleware(thunk))

    router =
    <Provider store={store}>
        <MemoryRouter>
          <StylePreferences/>
        </MemoryRouter>
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