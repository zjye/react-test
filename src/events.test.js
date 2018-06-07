import generateEvents from "events";

describe("events generator", () => {
  it("combine to range", () => {
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

    expect(actual).arrayContaining(expectedEvents);
  });
});
