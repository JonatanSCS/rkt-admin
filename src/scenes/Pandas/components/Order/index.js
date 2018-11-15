// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Utils
import BaseComponent from 'utils/BaseComponent'
import { setBackgroundImage } from 'utils/data'

// Routes
import { reverse } from 'routes'

// Actions
import { setOrderDetail } from 'scenes/Pandas/Order/actions'

// Styles
import './styles.scss'

class Order extends BaseComponent {
  constructor() {
    super()

    this._bind('_handleClick')
  }

  _handleClick() {
    this.props.setOrder(this.props)
    const path = reverse('pandas:order', { id: this.props.id })
    this.context.router.history.push(path)
  }

  render() {
    const {
      ad_id,
      buyer,
      carrier,
      conekta_id,
      created,
      id,
      last_update,
      phone,
      seller,
      isDetail
    } = this.props
    const onClick = isDetail ? () => {} : this._handleClick
    const detailClass = isDetail ? '' : 'Pointer'
    return (
      <div className={`PandasListItem ${detailClass}`} onClick={onClick}>
        <div className="PandasListItem__Image">
          <div
            className="PandasListItem__Image__Element"
            style={setBackgroundImage('https://picsum.photos/200/300')}
          />
        </div>
        <div className="PandasListItem__Data">
          <div className="PandasListItem__Data__Column">
            <p className="PandasListItem__Data__Column__Focus">
              Orden: <span>{id}</span>
            </p>
            <p>
              Creada: <span>{created}</span>
            </p>
            <p>
              Carrier: <span>{carrier}</span>
            </p>
            <p>
              Último cambio: <span>{last_update}</span>
            </p>
          </div>
          <div className="PandasListItem__Data__Column">
            <p className="PandasListItem__Data__Column__Focus">
              Ad ID: <span>{ad_id}</span>
            </p>
            <p>
              Conekta ID: <span>{conekta_id}</span>
            </p>
            <p>
              Vendedor: <span>{seller}</span>
            </p>
            <p>
              Comprador: <span>{buyer}</span>
            </p>
            <p>
              Teléfono del comprador: <span>{phone}</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

Order.propTypes = {
  ad_id: PropTypes.string.isRequired,
  buyer: PropTypes.string.isRequired,
  carrier: PropTypes.string.isRequired,
  conekta_id: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  last_update: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  seller: PropTypes.string.isRequired
}

Order.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    setOrder: (data) => dispatch(setOrderDetail(data))
  }
}

export default connect(null, mapDispatchToProps)(Order)