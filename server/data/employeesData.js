import bcrypt from 'bcryptjs';

const employees = [
  {
    firstName: 'Matin',
    lastName: 'Sadeghi',
    nationalCode: 2900346460,
    permissions: ['کتابخانه', 'خدمات آموزشی'],
    admin: true,
    password: bcrypt.hashSync('123123', 10),
  },
  {
    firstName: 'Ali',
    lastName: 'Ahmadi',
    nationalCode: 290909090,
    permissions: ['امور اداری'],
    admin: false,
    password: bcrypt.hashSync('112233', 10),
  },
];

export default employees;