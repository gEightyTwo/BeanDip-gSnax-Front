import React from 'react';

const AddReview = ({toggleReview, handleReview}) => {
  return (
    <form className="form-horizontal well" onSubmit={event => {
      event.preventDefault();
      handleReview(event.target.title.value, event.target.description.value, event.target.rating.value);
      toggleReview();
    }}>
      <div className="form-group">
          <h4>Write Review</h4>
      </div>
      <div className="review-form"> Rating:
        <select name="rating">
          <option value="1">One Star</option>
          <option value="2">Two Stars</option>
          <option value="3">Three Stars</option>
          <option value="4">Four Stars</option>
          <option value="5">Five Stars</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="title" className="control-label">Title</label>
          <input type="text" className="form-control" id="subject" placeholder="Title" name="title" required/>
      </div>
      <div className="form-group">
        <label htmlFor="description" className="control-label">Description</label>
          <textarea name="description" id="description" className="form-control" required></textarea>
      </div>
      <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
      </div>
    </form>
  );
}

export default AddReview;
