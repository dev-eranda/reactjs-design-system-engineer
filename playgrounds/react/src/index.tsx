import React from 'react'
import ReactDOM from 'react-dom'

import { Select } from '@test.ds.e/react'

import '@test.ds.e/scss/lib/Utilities.css'
import '@test.ds.e/scss/lib/Text.css'
import '@test.ds.e/scss/lib/Margin.css'
import '@test.ds.e/scss/lib/Select.css'
import '@test.ds.e/scss/lib/global.css'

const options = [{
    label: 'Strict Black',
    value: 'strict-black'
}, {
    label: 'Heavenly Green',
    value: 'heavenly-green'
}, {
    label: 'Sweet Pink',
    value: 'pink'
}]

ReactDOM.render(
    <div style={{ padding: '40px' }}>
        <Select options={options} />
    </div>,
    document.querySelector('#root')
)

// <Select label='Please select a size' onOptionSelected={console.log} options={[{ label: '', value: '' }]} />
