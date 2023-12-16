/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  sunday = 'sunday',
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday',
  saturday = 'saturday',
};

function isWeekend(day: Week) {
  return day === Week.saturday || day === Week.sunday;
};

const res = isWeekend(Week.friday);
const res1 = isWeekend(Week.sunday);
console.log(res);
console.log(res1);

//---------

const Weekend = (day: Week):boolean => {
 return day === Week.saturday || day === Week.sunday
};
