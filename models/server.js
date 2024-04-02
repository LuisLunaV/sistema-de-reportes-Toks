const express = require("express");
const cors = require("cors");
const hbs = require("hbs");
const path = require("path");

const { dbConnection } = require("../database/config.db.js");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";

    this.pages = {
      notFound: "/",
      login: "/login",
      register: "/register",
      home: "/home",
    };

    this.apiPaths = {
      auth: "/api/v1/auth",
      users: "/api/v1/users",
    };

    // Execute database connection
    this.connectDB();

    this.middlewares();
    this.router();
    this.render();

    this.handlebars();
  }

  handlebars() {
    this.app.set("view engine", "hbs");
    // Set the location of partial files
    const filePath = path.resolve(__dirname, "../views/partials");
    const filePathDate = path.resolve(__dirname, "../views/dateRanges");
    const filePathReport = path.resolve(__dirname, "../views/reports");
    hbs.registerPartials(filePath);
    hbs.registerPartials(filePathDate);
    hbs.registerPartials(filePathReport);
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Body parsing
    this.app.use(express.json());

    // Public directories to serve static files
    this.app.use(express.static("public"));
    this.app.use(express.static("src"));
  }

  render() {
    this.app.use(
      this.pages.login,
      require("../routers/render/login.routes.js")
    );
    this.app.use(
      this.pages.register,
      require("../routers/render/register.routes.js")
    );
    this.app.use(this.pages.home, require("../routers/render/home.routes.js"));
    this.app.use(
      this.pages.notFound,
      require("../routers/render/404.routes.js")
    );
  }

  router() {
    this.app.use(this.apiPaths.auth, require("../routers/auth.routes.js"));
    this.app.use(this.apiPaths.users, require("../routers/users.routes.js"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`);
    });
  }
}

module.exports = {
  Server,
};
