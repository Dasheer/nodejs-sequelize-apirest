import Sequelize from 'sequelize'

export const sequelize = new Sequelize('postgres_projectdb', 'postgres', '$DPC2104?', {
    host: 'localhost',
    dialect: 'postgres'
})
