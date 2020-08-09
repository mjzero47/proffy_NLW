const Database = require('./db')
const createProffy = require('./createProffy')

Database.then( async (db) => {
    //inserir dados 

    proffyValue = {
        name: "Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "987766434",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.</p>"
    }
    classValue = {
        subject: 1,
        cost: "20"
        //o proffy id virá pelo banco de dados
    }
      
    classScheduleValues = [
        //class id virá pelo banco de dados depois que cadastrar a aula
        {
        weekday: 1, 
        time_from: 720,
        time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520,
            time_to: 1220
            }
        ]

        //await createProffy(db, {proffyValue, classValue, classScheduleValues })

    //consultar dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado proffy
    //e trazer junto os dados do professor
    const selectedClassesandProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffy_id)
        WHERE classes.proffy_id = 1;

    `)
    //console.log(selectedClassesandProffys)

    // o horario que a pessoa trabalha é, por exemplo, as 8h as 18h
    //o horario do time_from deve ser menor ou igual ao horario solicitado
    // o time_to tem que ser maior
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "1200"
    `)
    //console.log(selectClassesSchedules)

})