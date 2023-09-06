import './App.css'
import bookData from './book-data.json'

function App() {
  return (
    <div>
      <h1>Freeshelf</h1>
      {bookData.map((book) => (
        <Book title={book.title} />
      ))}
    </div>
  )
}

function Book({ title }) {
  return <p>{title}</p>
}

export default App
