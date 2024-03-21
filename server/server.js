import express from "express";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import jsonServer from "json-server";

const app = express();
const PORT = 8081;
const SECRET_KEY = "qwedfgbhnmzxfghjklp;asdfghjk";
const router = jsonServer.router("db.json");

const users = [];

app.use(bodyParser.json());

// Регистрация нового пользователя
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  // Проверяем, что пользователь с таким именем еще не зарегистрирован
  if (users.some((user) => user.email === email)) {
    return res
      .status(400)
      .json({ message: "Пользователь с таким именем уже существует" });
  }

  // Добавляем нового пользователя в базу данных
  users.push({ email, password });
  res.status(201).json({ message: "Пользователь зарегистрирован" });
});

// Вход пользователя
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Ищем пользователя в базе данных
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return res
      .status(401)
      .json({ message: "Неверное имя пользователя или пароль" });
  }

  // Создаем JWT токен
  const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });

  res.json({ token });
});

// Проверка JWT токена
app.get("/user/:id", (req, res) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Отсутствует токен авторизации" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Неверный токен авторизации" });
    }

    res.json({ email: decoded.email });
  });
});
app.use(router);
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
