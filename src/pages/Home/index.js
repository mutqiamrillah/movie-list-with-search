import { Header } from 'ui-kit'
import Main from 'domain/Home/Main'

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="FinProH8" />
        <Main />
      </header>
    </div>
  )
}

export default HomePage