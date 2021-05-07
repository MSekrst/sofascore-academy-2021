import { useState } from 'react'

import { Input } from '../../components/Input/Input'
import './login.css'

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <p>Login</p>
      <Input type="text" placeholder="Username" value={username} onChange={setUsername} />
      <Input type="password" placeholder="Password" value={password} onChange={setPassword} />
    </div>
  )
}
