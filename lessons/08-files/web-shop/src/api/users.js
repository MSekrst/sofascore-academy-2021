const users = [
  {
    username: 'user',
    password: 'user',
  },
  {
    username: 'admin',
    password: 'admin',
  },
]

export function login(username, password) {
  const isValidLogin = users.some(u => u.username === username && u.password === password)

  return new Promise((resolve, reject) => {
    if (isValidLogin) {
      return resolve({ isLoggedIn: true, role: username })
    }

    return reject(Error('Invalid credentials!'))
  })
}
