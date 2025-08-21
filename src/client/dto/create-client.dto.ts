export class CreateClientDto {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  notes?: string;
  status?: string; // optional field for client status
  salesOwnerId: number; // required for relation
}
