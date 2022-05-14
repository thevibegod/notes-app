import { DataTypes, Model } from "sequelize";
import { getSequelize } from "../../../../db/db";



export interface INoteAttributes {
  id: String;
  text: Text;
  completed: Boolean;
}

export class NoteModel extends Model<INoteAttributes> {}

let initialized = false;

const initModel = async () => {
  if (initialized) {
    return;
  }
  NoteModel.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    }, {
    tableName: "note",
    sequelize: getSequelize(),
  });
  initialized = true;
};

initModel();