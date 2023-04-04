import express from "express";
const app = express();
const PORT = 5000;

app.use(express.json());

let users = []
let tweets = []

app.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body
    try {
        if (typeof username !== "string" ||
            typeof avatar !== "string" ||
            !username ||
            !(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(avatar))) {
            throw "Todos os campos são obrigatórios!"
        }
        const userExists = users.filter(item => item.username === username)
        if (userExists.length > 0) {
            throw "this user already exists, please try another username."
        }
        users.push({ username, avatar })
        res.status(201).send("OK")
    } catch (e) {
        console.log(e)
        res.status(400).json({ message: e })
    }
})

app.listen(PORT, () => console.log(`Server listening at: ${PORT}`))