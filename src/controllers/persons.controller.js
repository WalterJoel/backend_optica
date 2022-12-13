import {db2} from '../db.js'

export const getAllPersons = async (req, res) => {
    try {
        //res.json(rows);
//        const User = db.mongoose.model("dni", Personas);
        //console.log(db);
        //console.log(db.mongoose);
        //const users = await User.find({});
        /*db.once("open", function () {
            console.log("Connected successfully");
          });*/

        res.send('ok')
        //


    } catch (error) {
        return res.status(500).json({
            message:'Algo anda mal en la consulta get all modelos and colors'
        })
        
    }
};