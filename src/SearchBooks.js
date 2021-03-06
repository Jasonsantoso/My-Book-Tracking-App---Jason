import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {
  state = {
    query: ''
  }

  render () {
    const { search } = this.props

    return (
        <div className="search-books">
          <div className="search-books-bar">

            <Link to='/'>
              <button className="close-search">Close</button>
            </Link>

            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={(event) => search(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.props.searchedBooks.length > 0 ? (this.props.searchedBooks.map( book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    shelfUpdate={this.props.shelfUpdate}
                  />
                </li>
              ))) : <li>Books Not Found</li> }
            </ol>
          </div>
        </div>
      )
  }
}

export default SearchBooks
