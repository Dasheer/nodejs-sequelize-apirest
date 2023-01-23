import Sequelize from 'sequelize'

export const sequelize = new Sequelize('sequelize_projectdb', 'postgres', '$DPC2104?', {
    host: 'localhost',
    dialect: 'postgres'
})
