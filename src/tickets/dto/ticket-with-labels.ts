import { Label } from 'src/labels/entities/label.entity';
import { Ticket } from '../entities/ticket.entity';

export interface TicketWithLabels extends Ticket {
  labels: Label[];
}
