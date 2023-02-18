//#region clnstr test

const assert = require("assert");
const dropsuit_clnarr = require("../index.js");

//#region Testing data

let inputArray = [
  ,
  "       ,,hello ,world, ",

  "world     .,-  ",

  "hello      ,   world  .,..",
  "world",
  "",
  undefined,
  "        ",
  null,
  ,
  ,
  ,
  ,
  true,
  "⬤",
  "~!@#$%^off   worlDs><'}{][|🌢*\\//()_  +*___/",
  NaN,
  "\n\n\n\n",
  " heLLO",
  "",
  "  ",
  " ",
  "    .       ,",
  "   ",
  "abc",

  "hello_world   ",
  ,
  "",
  "Hello .,   ",
  false,
  "?",
  "",
  "hello",
  "hello",
  "hello  !",
  "hello  !",
  "hello!",
  "... /",
  1234,
  -1,
  ,
  ,
  ,
  "  hello$world ?,.",
];

let expected_output_clnarr_0 = [
  "hello, world",
  "world.",
  "hello, world.",
  "world",
  "~ off worlds> _ + _/",
  "hello",
  "abc",
  "hello_world",
  "hello.",
  "hello",
  "hello",
  "hello !",
  "hello !",
  "hello!",
  "hello$world?",
];

let expected_output_clnarr_1 = [
  "hello, world",
  "world.",
  "hello, world.",
  "world",
  "~ off worlds> _ + _/",
  "hello",
  "abc",
  "hello_world",
  "hello.",
  "hello !",
  "hello!",
  "hello$world?",
];

let expected_output_clnarr_2 = [
  "hello world",
  "world",
  "off worlds",
  "hello",
  "abc",
];

//#endregion

describe("dropsuit-clnarr", () => {
  describe("clnarr()", () => {
    it("should return the cleaned array with parameter argument 0", () => {
      let dsclnarr = new dropsuit_clnarr(true);
      let clnarr_0_output = dsclnarr.clnarr(inputArray, 0);
      assert.deepEqual(clnarr_0_output, expected_output_clnarr_0);
      /// console.log('\nOutput clnarr(inputArray, 0):', clnarr_0_output.sort(), '\n');
    });
    it("should return the cleaned array with parameter argument 1", () => {
      let dsclnarr = new dropsuit_clnarr(true);
      let clnarr_1_output = dsclnarr.clnarr(inputArray, 1);
      assert.deepEqual(clnarr_1_output, expected_output_clnarr_1);
      /// console.log('\nOutput clnarr(inputArray, 1):', clnarr_1_output.sort(), '\n');
    });
    it("should return the cleaned array with parameter argument 2", () => {
      let dsclnarr = new dropsuit_clnarr(true);
      let clnarr_2_output = dsclnarr.clnarr(inputArray, 2);
      assert.deepEqual(clnarr_2_output, expected_output_clnarr_2);
      /// console.log('\nOutput clnarr(inputArray, 2):', clnarr_2_output.sort(), '\n');
    });
  });
});

//#endregion
