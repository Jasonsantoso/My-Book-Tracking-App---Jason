import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
            books
          }))

        }).then((res) => console.log(this.state.books))
  }

  shelfUpdate = (addedBook, shelf) => {
    BooksAPI.update(addedBook, shelf)
      .then( response => {
        addedBook.shelf = shelf
      }
    )

    let addedBooks = this.state.books.filter( book => book.id !== addedBook.id)
      addedBooks.push(addedBook);

    this.setState({ books: addedBooks })
      this.setState({ searchedBooks: [] })
    this.componentDidMount()
  }

  search = (query) => {
    if (query.length !== 0) {
      BooksAPI.search(query).then( searchedBooks => {
          let searchResult = [];
          for (const searchedBook of searchedBooks) {
            for (const book of this.state.books)
              if (searchedBook.id === book.id)
                searchedBook.shelf = book.shelf // to avoid books that were on main page shelf
            searchResult.push(searchedBook)
          }
          return searchResult
      }).then((searchedBooks) => {
          this.setState((prevState) => ({ searchedBooks }))
      }).catch(searchedBooks => this.setState ({ searchedBooks: [] }))
    }
    else this.setState({ searchedBooks: [] })
  }

  render() {
    return (
      <div className="app">
        <Route
          path='/search'
          render ={({ history }) => (
            <div>
              <SearchBooks
                search={this.search}
                searchedBooks={this.state.searchedBooks}
              />
            </div>
          )} />

        <Route
          exact path='/'
          render={() => (
            <div>
              <ListBooks
                books={this.state.books}
                shelfUpdate={this.shelfUpdate}
              />
            </div>
          )} />
      </div>
    )
  }
}

export default BooksApp
