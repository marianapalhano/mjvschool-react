import { Button } from './components/Button'
import { Input } from './components/Input'
import { List } from './components/List'
import { MdEmail } from 'react-icons/md'
import GlobalStyle from './styles/GlobalStyle'

function App() {
  return (
    <div>
      <GlobalStyle />
      <h1>Teste</h1>
      <List />

      <Input label='Nome:' id='name' type='text' name='name'>
      </Input>
      <Input label='E-mail:' id='email' type='email' name='email'>
        <MdEmail />
      </Input>
      <Input label='Senha:' id='password' type='password' name='password'>
      </Input>

      <Button>
        Teste
      </Button>
    </div>
  )
}

export default App
