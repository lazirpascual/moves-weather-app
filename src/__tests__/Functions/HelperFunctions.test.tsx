import helperFunction from "../../Functions/helper";

describe("test the functionality of", () => {
  test("getDay function", () => {
    const dateTime = 1640970000;
    const result = helperFunction.getDay(dateTime);
    expect(result).toBe("Friday");
  });

  test("getDate function", () => {
    const dateTime = 1640970000;
    const result = helperFunction.getDate(dateTime);
    expect(result).toBe("2021-12-31");
  });

  test("getTime function", () => {
    const dateTime = 1640955282;
    const result = helperFunction.getTime(dateTime);
    expect(result).toBe("7:54 AM");
  });
});
