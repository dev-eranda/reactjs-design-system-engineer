import React from 'react'
import Color, { ColorProps } from './Color'

import { Spacing } from '@test.ds.e/foundation'

// css
import '@test.ds.e/scss/lib/Utilities.css'

export default {
    title: 'Atoms|Color'
}

export const Common = (args: React.JSX.IntrinsicAttributes & ColorProps & { children?: React.ReactNode }) => (
    <Color {...args} />
)
Common.args = {
    primary: true,
    hexCode: 'pink'
}

export const CustomDimensions = (args: React.JSX.IntrinsicAttributes & ColorProps & { children?: React.ReactNode }) => (
    <Color {...args} />
)
  
CustomDimensions.args = {
    primary: true,
    hexCode: 'pink',
    width: 'xxl',
    height: 'xxl',
    }

CustomDimensions.argTypes = {
    width: {
        control: 'select',
        options: Object.values(Spacing),
    },
    height: {
        control: 'select',
        options: Object.values(Spacing),
        },
    hexCode: {
        control: 'color',
    }
}


// export const Common = () => <Color hexCode={text('HexCode', 'pink')} />

// export const CustomDimensions = () => <Color
// hexCode={text('HexCode', 'pink')}
// width={select('Width', Object.values(Spacing), 'xxl')}
// height={select('Height', Object.values(Spacing), 'xxl')}  />
