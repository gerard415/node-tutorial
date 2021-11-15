const {readFileSync} = require('fs')

readFileSync('./','', (err, result) =>{
    if(err){
        console.log(err)
        return  
    }
    const firsttext = result
    readFileSync
}
)