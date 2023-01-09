import express, { Request, Response } from 'express'
import cors from 'cors'
import { courses, students } from './database'
import { TCourse, TStudents } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

// app.get('/ping', (req: Request, res: Response) => {
//     res.send('Pong!')
// })

/*
//Requisição GET com query
app.get("/courses", (req: Request, res: Response)=>{
    res.status(200).send(courses)
    //res.send("cursos")
})

//Requisição GET com query
app.get("/courses/search", (req: Request, res: Response)=>{
    const q = req.query.q as string

    const coursesFilter = courses.filter(
    (courses)=>courses.name.toLowerCase().includes(q.toLowerCase())
    )
    res.status(200).send(coursesFilter)
})

//Requisição POST com body
app.post("/courses",(req: Request, res: Response)=>{

    const id = req.body.id
    const name = req.body.name
    const lessons = req.body.lessons
    const stack = req.body.stack

    const newCourse:TCourse = {
        id,
        name,
        lessons,
        stack
    }

    courses.push(newCourse)

    res.status(201).send("Curso criado com sucesso")
})
*/

//testando a prática guiada

//Requisição GET com query
app.get("/students", (req: Request, res: Response)=>{
    res.status(200).send(students)
    //res.send("cursos")
})

//Requisição GET com query
app.get("/students/search", (req: Request, res: Response)=>{
    const q = req.query.q as string

    const studentsFilter = students.filter(
    (students)=>students.name.toLowerCase().includes(q.toLowerCase())
    )
    res.status(200).send(studentsFilter)
})

//Requisição POST com body
app.post("/students",(req: Request, res: Response)=>{

    const id = req.body.id
    const name = req.body.name
    const age = req.body.age

    const newStudent:TStudents = {
        id,
        name,
        age,
    }

    students.push(newStudent)

    res.status(201).send("Estudante cadastrado com sucesso")
})