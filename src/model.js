import { DataTypes, Model } from 'sequelize';
import connectToDB from './db.js';
import util from 'util';
import url from 'url';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName() {
    // TODO: Implement this method
    return`${this.fname} ${this.lname}`
  }
}

// TODO: Human.init()
Human.init(
  {
    humanId:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    fname:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {
      modelName: 'human',
      sequelize: db,
    },
);

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

// TODO: Animal.init()

Animal.init(
  {
    animalId:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    species:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthYear:{
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: 'animal',
    sequelize: db,
  },
);

// TODO: Define Relationship
//Establishing an Association table

Human.hasMany(Animal, { foreignKey: 'humanId' })
Animal.belongsTo(Human, { foreignKey: 'humanId' })

if(process.argv[1]===url.fileURLToPath(import.meta.url)){
  console.log("Syncing database")
  await db.sync({force:true});
  console.log("Finished syncing database!")
}


export default db;
