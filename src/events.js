import _ from "lodash";
import moment from "moment";

export default function generateEvents(value) {
  return _(value)
    .orderBy(val => moment(val.blockedDates))
    .reduce((events, next) => {
      if (events.length !== 0) {
        const event = events[events.length - 1];
        if (
          event.end
            .clone()
            .add(1, "days")
            .isSame(next.blockedDates, "day")
        ) {
          event.end = moment(next.blockedDates).endOf("day");
          return events;
        }
      }
      events.push({
        title: next.listCalendar ? next.listCalendar.name : "idealhub",
        start: moment(next.blockedDates),
        end: moment(next.blockedDates).endOf("day")
      });
      return events;
    }, []);
}
