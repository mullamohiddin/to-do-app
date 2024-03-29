import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import FormContainer from '../../containers/FormContainer';
import FormEditContainer from '../../containers/FormEditContainer';
import FormItemContainer from '../../containers/FormItemContainer';

import './Content.css';

const contentPropTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      title:PropTypes.string.isRequired,
      dueDate:PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  editingItem: PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.string,
    title:PropTypes.string.isRequired,
    completed: PropTypes.bool,
    dueDate:PropTypes.string.isRequired,
  }).isRequired,
  handleReorderItem: PropTypes.func.isRequired,
};

const Content = props => {
  const onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    props.handleReorderItem(result.source.index, result.destination.index);
  };

  return (
    <div className={props.className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Welcome ToDo App!</h5>
                <p className="card-text">Add some todo items to your list:</p>
                <div className="d-inline-block">
                  <FormContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
        {props.items.length ? (
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="content__todos">
                <ul className="list-group content__todos__ul">
                  <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                      {provided => (
                        <div ref={provided.innerRef}>
                          {props.items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {provided => (
                                <div
                                  ref={provided.innerRef}
                                  data-testid="content-draggable-item"
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="content__todos__li">
                                  {props.editingItem.id === item.id ? (
                                    <FormEditContainer item={item} />
                                  ) : (
                                    <FormItemContainer item={item} />
                                  )}
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

Content.propTypes = contentPropTypes;

export default Content;
