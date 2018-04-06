import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'


const quotes = document.querySelector('#quotes')
ReactDOM.render(<App startingQuoteId={quotes.CDATA_SECTION_NODE.startingQuoteId}/>, quotes)