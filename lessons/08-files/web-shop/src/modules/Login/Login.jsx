import { useCallback, useContext, useState } from 'react'

import { Input, Button } from '../../components'
import './login.css'
import { login } from '../../api'
import { UserContext } from '../../context/UserContext'
import { useHistory } from 'react-router'

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUserRole } = useContext(UserContext)
  const history = useHistory()
  const [error, setError] = useState('')

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()

      try {
        const role = await login(username, password)

        setUserRole(role)

        history.push(role === 'admin' ? '/dashboard' : '/')
      } catch (e) {
        // TODO: use toast
        setError('Please try again')
      }
    },

    [username, password, history, setUserRole]
  )

  const isValid = username.length > 3 && password.length > 3

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome to WebShop</h2>
        <h3>Login</h3>

        <Input autoFocus type="text" placeholder="Username" value={username} onChange={setUsername} />
        <Input type="password" placeholder="Password" value={password} onChange={setPassword} />
        <Button disabled={!isValid}>Submit</Button>

        {error && <p className="login-error">{error}</p>}
      </form>
    </div>
  )
}
