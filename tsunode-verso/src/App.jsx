import { Input } from './components/Input'
import { List } from './components/List'

function App() {
  return (
    <div>
      <h1>Teste</h1>
      <List />
      <Input label='Nome:' id='name' type='text' name='name' />
      <Input label='E-mail:' id='email' type='email' name='email' />
      <Input label='Senha:' id='password' type='password' name='password' />
    </div>
  )
}

export default App
