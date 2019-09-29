import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faCalendar, faCalendarTimes } from '@fortawesome/free-solid-svg-icons';
import './FormItem.css';

import PropertyBarContainer from '../../containers/PropertyBarContainer';
import Checkout from '../Checkout/Checkout';

const formItemPropTypes = {
  item: PropTypes.shape({
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    dueDate: PropTypes.string.isRequired,
  }).isRequired,
  handleItemCompletion: PropTypes.func.isRequired,
};

const FormItem = props => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const updateDisplayMenu = bool => {
    if (displayMenu !== bool) {
      setDisplayMenu(bool);
    }
  };

  let liClass = 'form_item__component list-group-item form-control';
  liClass = props.item.completed ? liClass + ' form_item__component-completed' : liClass;

  return (
    <li
      data-testid="form-item-listitem"
      className={liClass}
      onMouseOver={() => updateDisplayMenu(true)}
      onMouseLeave={() => updateDisplayMenu(false)}>
      <div
        className="text-truncate"
        data-testid="form-item-item-completion"
        onClick={() => props.handleItemCompletion(props.item)}>
        <div className="form_item__checkout d-inline-block">
          <Checkout isCompleted={props.item.completed} />
        </div>
        <div>

        </div>
        <h4 className="form_item__text">{props.item.title}</h4> 
      
        <span className="form_item__text">{props.item.value}</span>
       
        <span className="form_item__text-dueDate">
        <FontAwesomeIcon icon={faCalendarTimes} /> {props.item.dueDate}</span>
      </div>

      {<PropertyBarContainer id={props.item.id} /> }
    </li>
  );
};

FormItem.propTypes = formItemPropTypes;

export default FormItem;
