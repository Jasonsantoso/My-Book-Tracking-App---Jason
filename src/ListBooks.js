import React, { Component } from 'react'
import Book from './Book'

class ListBooks extends Component {
  render() {
    const { books } = this.props
    const currentlyReading = books.filter( book => book.shelf === "currentlyReading");
    const wantToRead = books.filter(book => book.shelf === "wantToRead");
    const read = books.filter(book => book.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {currentlyReading.map( book => (
                    <li>
                      <Book
                        book={book}

                      />
                    </li>
                  ))}
                  </ol>
                </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <Book />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <Book />
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default ListBooks
