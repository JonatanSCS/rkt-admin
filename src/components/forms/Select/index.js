// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Select from 'react-select'

// Styles
import './styles.scss'

export default class FormSelect extends BaseComponent {
  constructor() {
    super()

    this._bind('_handleChange')
  }

  _renderErrors(error) {
    return (
      <p key={error} className="FormField__Error">
        {`* ${error}`}
      </p>
    )
  }

  _handleChange(option) {
    this.props.onChange(this.props.name, option.value, option.label)
  }

  render() {
    const { title, name, disabled, errors } = this.props
    return (
      <div className="FormSelect">
        <p className="FormSelect__Title">{title}</p>
        <Select
          value={this.props.value}
          onChange={this._handleChange}
          options={this.props.options}
          className="FormSelect__Select"
          classNamePrefix="FormSelect__Select"
          name={name}
          isDisabled={disabled}
        />
        {errors.map(this._renderErrors)}
      </div>
    )
  }
}

FormSelect.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  errors: PropTypes.array,
  value: PropTypes.shape({
    value: PropTypes.isRequired,
    label: PropTypes.isRequired
  })
}

FormSelect.defaultProps = {
  disabled: false,
  errors: []
}
