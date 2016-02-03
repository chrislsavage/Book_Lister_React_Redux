import React, {Component} from 'react';

export default class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={"book.title"} className="list-group-item">{book.title}</li>
      )
    });
  }

  render () {
    return (
      <ul "list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  };
}

// a container(smart component) (instead of component) is a react compoenent that has a direct connection to the state managed by redux
