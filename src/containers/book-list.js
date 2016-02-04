import React, {Component} from 'react';
import { connect } from 'react-redux';  //lowercase function
import  { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
        </li>
      );
    });
  }

  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  };
}

// anything returned from this functin will end up as props on the Booklist container
function mapStateToProps(state){
  //what ever is return will show up as props inside of BookLIst
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all our reducers (dispatch)
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
// promote bookLIst from a component to a container - it needs to know about this new dispatch method, selectBook
// this makes it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// a container(smart component) (instead of component) is a react compoenent that has a direct connection to the state managed by redux
