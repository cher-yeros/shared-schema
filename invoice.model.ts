import { PaymentType } from "./payment.model";
import { Model, Optional } from "sequelize";
import { UserType } from "./user.model";
import { Column, DataType, Table } from "sequelize-typescript";

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
  id!: string;

  @Column(DataType.STRING)
  invoiceNo!: string;
}

export default Invoice;
