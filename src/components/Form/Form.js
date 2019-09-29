import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const formPropTypes = {
  handleAddItem: PropTypes.func.isRequired,
};

const Form = ({ handleAddItem }) => {
  const [item, setItem] = useState({title: '', value: ''});

  const handleSubmitAndResetForm = ev => {
    ev.preventDefault();

    handleAddItem(item);

    // Reset value
    setItem({title: '', value: '',dueDate: ''});
  };

  const handleItemChange = ev => setItem({...item, [ev.target.name]: ev.target.value});

  return (
    <div>
      <form method="POST" autoComplete="off" onSubmit={handleSubmitAndResetForm}>
        <div className="form-row">
          <div className="col">
          <input
              type="text"
              className="form-control"
              id="new-todo-item"
              name="title"
              placeholder="Title"
              aria-label="Todo item title"
              value={item.title}
              onChange={handleItemChange}
              autoFocus
            />
            <input
              type="text"
              className="form-control"
              id="new-todo-item"
              name="value"
              placeholder="Task Description "
              aria-label="Todo item description"
              value={item.value}
              onChange={handleItemChange}
              autoFocus
            />
            <input
              type="date"
              className="form-control"
              id="new-todo-item"
              name="dueDate"
              aria-label="Todo item due date"
              value={item.dueDate}
              onChange={handleItemChange}
              autoFocus
            />
          </div>

          
        </div>
        <div className="col-auto"  style={{padding:'4%'}} >
            <button style={{padding:'4%'},{backgroundColor: '#E74C3C'}}
              type="submit"
              data-testid="form-submit"
              className="btn btn-primary"
              name="Add"
              aria-label="Add todo item">
              <FontAwesomeIcon icon={faPlus} />
               <span>Add</span>
            </button>
          </div>
      </form>
    </div>
  );
};

Form.propTypes = formPropTypes;

export default Form;
