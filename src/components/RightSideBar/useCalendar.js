import moment from 'moment';
import { useMemo } from 'react';

const useCalendar = ({ allHabits, calendarActualDay, choseActualWeekDay }) => {
  const currentHabitsT = useMemo(() => {
    const currentHabitsTT = [];

    for (let habit of allHabits) {
      const startPlanningTime = habit.planningTime;
      let startPlanningTimeinML = new Date(startPlanningTime).getTime();

      switch (habit.iteration) {
        case 'onceInTwoDays':
          const arrayHabitsOnceInTwoDays = [];

          for (let i = 0; i < 21; i++) {
            arrayHabitsOnceInTwoDays.push(
              moment(startPlanningTimeinML).format('L'),
            );
            startPlanningTimeinML += 86400000 * 2;
          }

          for (let arrayHabit of arrayHabitsOnceInTwoDays) {
            if (arrayHabit.includes(calendarActualDay)) {
              currentHabitsTT.push({
                ...habit,
                day: calendarActualDay,
                arrayDate: [...arrayHabitsOnceInTwoDays],
              });
              // setCurrentHabits(prevState => [...prevState, habit]);
            }
          }

          // console.log(arrayHabitsOnceInTwoDays, 'arrayHabitsOnceInTwoDays!!!!!!!!!');

          break;

        case 'everyday':
          const arrayHabitsEveryDay = [];
          for (let i = 0; i < 21; i++) {
            arrayHabitsEveryDay.push(moment(startPlanningTimeinML).format('L'));
            startPlanningTimeinML += 86400000;
          }
          for (let arrayHabit of arrayHabitsEveryDay) {
            if (arrayHabit.includes(calendarActualDay)) {
              currentHabitsTT.push({
                ...habit,
                day: calendarActualDay,
                arrayDate: [...arrayHabitsEveryDay],
              });
            }
          }
          break;

        case 'TueThuSat':
          const arrayHabitsTueThuSat = [];
          let startСalendarActualDayML = new Date(calendarActualDay).getTime();
          const iterationTueThuSat = habit.iteration
            .replace(/^(.{3})(.{3})(.*)$/, '$1 $2 $3')
            .split(' ');

          for (let iteration of iterationTueThuSat) {
            if (iteration.includes(choseActualWeekDay)) {
              for (let i = 0; i < 21; i++) {
                if (i % 3 === 2) {
                  arrayHabitsTueThuSat.push(
                    moment(startPlanningTimeinML).format('L'),
                  );
                  startPlanningTimeinML += 86400000 * 3;
                } else {
                  arrayHabitsTueThuSat.push(
                    moment(startPlanningTimeinML).format('L'),
                  );
                  startPlanningTimeinML += 86400000 * 2;
                }
              }

              currentHabitsTT.push({
                ...habit,
                day: calendarActualDay,
                arrayDate: [...arrayHabitsTueThuSat],
              });
            }
          }

          break;

        case 'MonWedFri':
          const arrayHabitsMonWedFri = [];

          const iterationMonWedFri = habit.iteration
            .replace(/^(.{3})(.{3})(.*)$/, '$1 $2 $3')
            .split(' ');

          console.log(arrayHabitsMonWedFri, 'arrayHabitsMonWedFri');
          console.log(
            arrayHabitsMonWedFri.length - 1,
            'arrayHabitsMonWedFri.length',
          );
          console.log(startPlanningTimeinML);

          if (
            arrayHabitsMonWedFri.length - 1 <
            moment(startPlanningTimeinML).format('L')
          ) {
            return;
          }

          for (let iteration of iterationMonWedFri) {
            if (iteration.includes(choseActualWeekDay)) {
              for (let i = 0; i < 21; i++) {
                if (i % 3 === 2) {
                  arrayHabitsMonWedFri.push(
                    moment(startPlanningTimeinML).format('L'),
                  );
                  startPlanningTimeinML += 86400000 * 3;
                } else {
                  arrayHabitsMonWedFri.push(
                    moment(startPlanningTimeinML).format('L'),
                  );
                  startPlanningTimeinML += 86400000 * 2;
                }
              }
              console.log(arrayHabitsMonWedFri, 'arrayHabitsMonWedFri');
              currentHabitsTT.push({
                ...habit,
                day: calendarActualDay,
                arrayDate: [...arrayHabitsMonWedFri],
              });
            }
          }

          break;

        default:
          break;
      }
    }

    return currentHabitsTT;
  }, [allHabits, calendarActualDay, choseActualWeekDay]);

  console.log('currentHabitsT', currentHabitsT);

  return { currentHabitsT };
};

export default useCalendar;
