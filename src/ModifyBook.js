import React, { Component } from 'react'

class ModifyBook extends Component {

  render() {
    const { shelfUpdate, book } = this.props

    return (
      <div className="book-shelf-changer">
        <select
          value={book.shelf}
          onChange={(event) => shelfUpdate(book, event.target.value)}
        >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none" selected>None</option>
        </select>
      </div>
    )
  }
}

export default ModifyBook
