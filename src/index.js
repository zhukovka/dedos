import 'core-js'
import React, {StrictMode} from 'react'
import {hydrate} from 'react-dom'
import {loadableReady} from '@loadable/component'
import {BrowserRouter} from "react-router-dom";
import App from "./App";

loadableReady(() => {
    hydrate(<StrictMode>
                <BrowserRouter><App/></BrowserRouter>
            </StrictMode>, document.getElementById('root'))
})