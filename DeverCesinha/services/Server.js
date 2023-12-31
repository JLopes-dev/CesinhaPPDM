const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1/PPDM')
    .then(() => console.log('mongoose conectado...'))
    .catch(err => console.log(' Error ' + err))

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

mongoose.model('users', UserSchema)

const User = new mongoose.model('users')

app.post('/dados', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    User.create({
        name,
        email,
        password,
    })
    res.send({ message: 'dados criados!' })
})

app.get('/dados/:name/:password', async (req, res) => {
    const showData = await User.findOne({ name: req.params.name, password: req.params.password })
    console.log(req.params.name, req.params.password);
    if (!showData) return res.send({ message: 'Usuário Inválido!' });
    const finalResultArray = [showData.name, showData.email, showData.password]
    const finalResult = finalResultArray.map((e) => {
        return e + '\n'
    })
    
    return res.send({ message: finalResult })
    
})

app.put('/dados/:name', async (req, res) => {
    const put = await User.findOneAndUpdate({ name: req.params.name }, req.body)
    if (!put) return res.send({ message: 'Usuário Inválido!' })
    res.send({ message: 'Usuário atualizado com sucesso!' })

})

app.delete('/dados/:name', async (req, res) => {
    const delet = await User.deleteMany({ name: req.params.name })
    if (!delet) return res.send({ message: 'Usuário Inválido!' })
    res.send({ message: 'Usuário deletado com Sucesso!' })
})

app.use((req, res) => {
    res.send({ err: true, message: "Err, Rota não Existente!" })
})

app.listen(PORT, () => {
    console.log(`Server Rodando na porta ${PORT}`);
})