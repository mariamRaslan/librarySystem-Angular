import { Book } from './book';
import { EmployeeRequest } from './employee';
import { Member } from './member';

export class BookOperation {
  _id: number = 0;
  bookId: Book = new Book();
  memberId: Member = new Member();
  employeeId: EmployeeRequest = {};
  return: boolean = false;
  type: string = '';
  deadlineDate?: Date;
  returnDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
