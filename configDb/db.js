import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config();


 const sequelize = new Sequelize("users","root","Deva1@3456",{
    host:process.env.DB_HOST,
    dialect:"mysql",
    logging:false,
    define:{timestamps:true}
})

export default sequelize;