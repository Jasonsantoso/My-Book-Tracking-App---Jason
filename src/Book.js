import React, { Component } from 'react'
import ModifyBook from './ModifyBook'

class Book extends Component {
  render() {
    const { book } = this.props
    const author = book.authors ? book.authors : "Unknown";

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <ModifyBook
            book={book}
            shelfUpdate={this.props.shelfUpdate}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{author}</div>
      </div>
    )
  }
}

export default Book
