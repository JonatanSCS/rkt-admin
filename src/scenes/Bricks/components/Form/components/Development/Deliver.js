// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Internalization
import { withNamespaces } from 'react-i18next'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import FormSelect from 'components/forms/Select'
import FormArea from 'components/forms/Area'

// Constants
import { TYPES, PHASES, DELIVERIES, YEARS } from 'constants/development'

// Actions
import { updateFieldByName } from 'scenes/Bricks/components/Form/redux/actions'

class Deliver extends BaseComponent {
  constructor() {
    super()

    this._bind('_handleFieldChange', '_handleSelectChange')
  }

  _handleFieldChange(e) {
    const { name, value } = e.target
    this.props.updateField(name, value, 'development')
  }

  _handleSelectChange(name, value) {
    this.props.updateField(name, value, 'development')
  }

  render() {
    const { t, errors } = this.props
    const { description } = this.props.development.toJS()
    // TODO: Make Selects in this components update and recive data

    return [
      <FormSelect
        key="bricks-form-develop-unit-type"
        name="unit_type"
        options={TYPES}
        title={t('Unit type')}
        onChange={this._handleSelectChange}
        errors={errors['development.unit_type']}
      />,
      <FormArea
        key="bricks-form-develop-description"
        name="description"
        title={t('Proyect description')}
        value={description}
        onChange={this._handleFieldChange}
        errors={errors['development.description']}
      />,
      <FormSelect
        key="bricks-form-develop-phase"
        name="phase"
        options={PHASES}
        title={t('Develop phase')}
        onChange={this._handleSelectChange}
        errors={errors['development.phase']}
      />,
      <FormSelect
        key="bricks-form-develop-delivery"
        name="delivery"
        options={DELIVERIES}
        title={t('Delivery')}
        onChange={this._handleSelectChange}
        errors={errors['development.delivery']}
      />,
      <FormSelect
        key="bricks-form-develop-year"
        name="year"
        options={YEARS}
        title={t('Year')}
        onChange={this._handleSelectChange}
        errors={errors['development.year']}
      />
    ]
  }
}

const mapStateToProps = state => {
  return {
    development: state.sceneBricksComponentsForm.get('development')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateField: (name, value, group) =>
      dispatch(updateFieldByName(name, value, group))
  }
}

export default withNamespaces()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Deliver)
)
