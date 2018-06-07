import generateEvents from "./events";
import moment from "moment";
import { expect } from "chai";

describe("Events generator", () => {
  it("event with range", () => {
    const values = [
      {
        blockedDates: new Date(2018, 5, 15),
        calendar: null
      },
      {
        blockedDates: new Date(2018, 5, 16),
        calendar: null
      },
      {
        blockedDates: new Date(2018, 5, 17),
        calendar: null
      }
    ];

    const actual = generateEvents(values);

    const expectedEvents = [
      {
        title: "idealhub",
        start: moment(new Date(2018, 5, 15)),
        end: moment(new Date(2018, 5, 17)).endOf("day")
      }
    ];

    expect(actual)
      .to.be.an("array")
      .that.have.lengthOf(expectedEvents.length);
    expect(actual).to.have.deep.members(expectedEvents);
  });

  it("multiple events with range", () => {
    const values = [
      {
        blockedDates: new Date(2018, 5, 15),
        calendar: null
      },
      {
        blockedDates: new Date(2018, 5, 16),
        calendar: null
      },
      {
        blockedDates: new Date(2018, 5, 17),
        calendar: null
      },
      {
        blockedDates: new Date(2018, 6, 17),
        calendar: null
      },
      {
        blockedDates: new Date(2018, 6, 18),
        calendar: null
      }
    ];

    const actual = generateEvents(values);

    const expectedEvents = [
      {
        title: "idealhub",
        start: moment(new Date(2018, 5, 15)),
        end: moment(new Date(2018, 5, 17)).endOf("day")
      },
      {
        title: "idealhub",
        start: moment(new Date(2018, 6, 17)),
        end: moment(new Date(2018, 6, 18)).endOf("day")
      }
    ];

    expect(actual)
      .to.be.an("array")
      .that.have.lengthOf(expectedEvents.length)
      .to.have.deep.members(expectedEvents);
  });

  it("end date should be end of the day", () => {
    const values = [
      {
        blockedDates: new Date(2018, 5, 15),
        calendar: null
      },
      {
        blockedDates: new Date(2018, 5, 16),
        calendar: null
      }
    ];

    const actual = generateEvents(values);

    const expectedEvents = [
      {
        title: "idealhub",
        start: moment(new Date(2018, 5, 15)),
        end: moment(new Date(2018, 5, 16)).endOf("day")
      }
    ];

    expect(actual)
      .to.be.an("array")
      .that.have.lengthOf(expectedEvents.length)
      .to.have.deep.members(expectedEvents);
  });
});
