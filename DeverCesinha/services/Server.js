const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const PORT = 3000
const Path = path.join(`${__dirname}`)



app.use(express.json())


app.post('/dados', (req, res) => {
    const dados = JSON.stringify(req.body)
    fs.writeFile(`${Path}/${req.body.name}.json`, dados, (err) => {
        res.send({message: "Dados criados" })
    })
})

app.get('/dados/:name', (req, res) => {
    const existe = fs.existsSync(req.params.name + '.json')
    if (existe) {
        fs.readFile(`${Path}/${req.params.name}.json`, (err, data) => {
            const dados = JSON.parse(data)
            res.send({ message: "Aqui seus dados:", dados })
        })
    }
    else {
        res.send({ message: "Essa conta não existe!" })
    }

})

app.put('/dados/:name', (req, res) => {
    const data = JSON.stringify(req.body)
    const existe = fs.existsSync(req.params.name + '.json')
    if (existe) {
        fs.writeFileSync(`${__dirname}/${req.params.name}.json`, data, { flag: 'w' })
        res.send({ message: "Dados atualizados!" })
    }
    else {
        res.send({ message: 'Essa Conta não Existe!' })
    }
})

app.delete('/dados/:name', (req, res) => {
    const existe = fs.existsSync(req.params.name + '.json')
    if (existe) {
        fs.unlinkSync(`${Path}/${req.params.name}.json`)
        res.send({ message: "dado deletado!" })
    }
    else {
        res.send({ message: "Essa Conta não Existe!" })
    }
})

app.use((req, res) => {
    res.send({ err: true, message: "Err, Rota não Existente!" })
})

app.listen(PORT, () => {
    console.log(`Server Rodando na porta ${PORT}`);
})