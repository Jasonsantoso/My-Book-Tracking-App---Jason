import React, { Component } from 'react'
import ModifyBook from './ModifyBook'
import unavailable from './icons/Unavailable.png';

class Book extends Component {
  render() {
    const { book } = this.props
    const author = book.authors ? book.authors : "Unknown";
    const image = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : unavailable;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
          <ModifyBook
            book={book}
            shelfUpdate={this.props.shelfUpdate}
            selectorCheck={this.props.selectorCheck}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{author}</div>
      </div>
    )
  }
}

export default Book
