import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
// const jsonServer = require('json-server');
import jsonServer from "json-server";

const router = jsonServer.router("db.json");
const app = express();
const PORT = 8081;

const users = [];

app.use(bodyParser.json());

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
    res.status(201).send("Пользователь успешно зарегистрирован");
  } catch {
    res.status(500).send("Ошибка регистрации пользователя");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (user) {
    try {
      if (await bcrypt.compare(password, user.password)) {
        res.status(200).send("Успешный вход");
      } else {
        res.status(401).send("Некорректный пароль");
      }
    } catch {
      res.status(500).send("Ошибка входа");
    }
  } else {
    res.status(404).send("Пользователь не найден");
  }
});
app.use(router);
app.listen(PORT, () => {
  console.log(`Сервер запущен на ${PORT}`);
});
