import { Model, Optional } from "sequelize";
import {
  Column,
  DataType,
  Default,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { PaymentType } from "./payment.model";
import { UserType } from "./user.model";

export interface InvoiceType {
  id: string;
  payment: PaymentType;
  user: UserType;
  invoiceNo: string;
}

interface InvoiceCreationAttributes extends Optional<InvoiceType, "id"> {}

@Table({ timestamps: true })
class Invoice extends Model<InvoiceType, InvoiceCreationAttributes> {
  @Column(DataType.UUID)
  @PrimaryKey
  @Default(uuidv4)
  id!: string;

  @Column(DataType.STRING)
  invoiceNo!: string;
}

export default Invoice;
