import fs from 'fs'
const path = 'src/date time'

let time = Date.now();
const readWriteFile = async(req,res)=>{
    try {
        let date = new Date().toISOString().slice(0,10)
        let times = new Date().toISOString().slice(11,22)
        let dateTime=`Date : ${date}   Time : ${times}`
        
        fs.writeFileSync(`${path}/${time}.txt`,dateTime,'utf-8')

       let content = fs.readFileSync(`${path}/${time}.txt`,'utf-8')

        res.status(200).send({
            status:200,
            message:"Success",
            dateTime:content
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error
        })
    }
}

export default {
    readWriteFile
}