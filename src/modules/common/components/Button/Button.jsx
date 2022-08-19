import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const color_mapping = {
  primary: {
    background: 'green',
    hover: 'pointer',
    text: 'white'
  },
  secondary: {
    background: '#e0e0e0',
    hover: '#e9e9e9',
    text: '#000'
  },
  danger: {
    background: 'red',
    hover: '#050505',
    text: 'white'
  }
}

const size_mapping = {
  large: {
    lineheight: '25px',
    padding: '20px',
    fontsize: '18px'
  },
  medium: {
    lineheight: '20px',
    padding: '15px',
    fontsize: '15px'
  },
  small: {
    lineheight: '15px',
    padding: '10px',
    fontsize: '10px'
  }
}

const StyledButton = styled.button `
  display: inline-block;
  background-color: green;
  border-radius: 15px;
  border: 2px solid #000;
  color: #eeeeee;
  text-align: center;
  width: 150px;
  cursor: pointer;
  margin: 5px;

  ${ ({variant}) => {
      const { background, hover, text } = color_mapping[variant]
      return `
      background: ${ background };
      color: ${ text };
      :hover {
        background: ${ hover };
      }`
    }
  }
  ${ ({size}) => {
      const { lineheight, padding, fontsize } = size_mapping[size]
      return `
        line-height: ${ lineheight };
        padding: ${ padding };
        font-size: ${ fontsize };
      `
    }
  }
`

export const Button = ({ label, variant, size }) => {
  return (
    <StyledButton variant = {variant} size = {size}>{ label }</StyledButton>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf (['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf (['large', 'medium', 'small'])
}
Button.defaultProps = {
  label: 'Placeholder button here',
  variant: 'primary',
  size: 'large'
}
