import { Sequelize } from 'sequelize';

let sequelize : Sequelize;


export function getSequelize(){ 
    if(!sequelize){
        sequelize = new Sequelize(
            {
                dialect: 'sqlite',
                storage: 'database.sqlite',
                define: {
                    timestamps: false
                }
            }
        );
    }
    return sequelize;
}



