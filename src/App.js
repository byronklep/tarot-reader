import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import './App.css'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <Header />
      <Container className="my-5">
        <Route path="/" component={HomePage} exact />
      </Container>
    </Router>
  )
}

export default App
