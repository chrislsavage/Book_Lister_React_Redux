import React, {Component} from 'react';
import { connect } from 'react-redux';  //lowercase function


class BookList extends Component {
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


function mapStateToProps(){
  //what ever is return will show up as props inside of BookLIst
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList)
// a container(smart component) (instead of component) is a react compoenent that has a direct connection to the state managed by redux
