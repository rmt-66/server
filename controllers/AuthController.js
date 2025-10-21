module.exports = class AuthController {
  static async login(req, res) {
    res.json({ message: 'Login endpoint' });
  }
}