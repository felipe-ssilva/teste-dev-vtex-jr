/**
 * Libs
 */
import React from 'react'
import ReactDom from 'react-dom'
import '../scss/app.scss'

// Routes
import Routes from '~/Routes'

ReactDom.render(<Routes />, document.getElementById('app'))
