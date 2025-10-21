class AuthController {
  static register(req, res) {
    res.json({ message: "Register endpoint" })
  }
  static async login(req, res) {
    res.json({ message: 'Login endpoint' });
  }
}

module.exports = AuthController