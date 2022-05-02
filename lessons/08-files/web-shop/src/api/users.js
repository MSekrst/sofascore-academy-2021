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
      // call resolve with role -> role is equal to username!
      return resolve(username)
    }

    return reject(Error('Invalid credentials!'))
  })
}
