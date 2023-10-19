import { Optional } from "sequelize";
import { UserType } from "./user.model";
import {
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

import { v1 as uuidv4 } from "uuid";
export interface ProductLogType {
  id: string;
  activity: string;
  user: UserType;
}

interface ProductLogCreationAttributes extends Optional<ProductLogType, "id"> {}

@Table({ timestamps: true })
export default class ProductLog extends Model<
  ProductLogType,
  ProductLogCreationAttributes
> {
  @Column(DataType.UUID)
  @PrimaryKey
  @Default(uuidv4)
  id!: string;

  @Column(DataType.STRING)
  activity!: string;
}
