class HomeController {
  static index(req, res) {
    res.json({ message: "Server ready to serve" })
  }
}

module.exports = HomeController