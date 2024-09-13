import { IPagBankHolder } from './i-holder';
import { IPagBankInstructionLines } from './i-instruction-lines';

export interface IPagBankBoleto {
  due_date: string;
  instruction_lines: IPagBankInstructionLines;
  holder: IPagBankHolder;
}
