import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import StylePreferences from '../StylePreferences.js';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, rootReducer, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';