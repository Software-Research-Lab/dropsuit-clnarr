//#region Info

/**
 * @file <h3>DropSuit</h3>
 * <p>
 *   DropSuit is a JavaScript(ES6) and Node.js(v14.x) module library
 *   created by Lado Oniani that offers a diverse collection of functions
 *   for natural language processing (NLP) and data manipulation.
 *   It provides a curated collection of original and classic techniques and methods
 *   for tasks such as text analysis, language understanding and generation,
 *   as well as for data manipulation tasks. Additionally,
 *   it includes unique tools and features for chatbot dialog flow logic
 *   and other specific use cases.
 *   The library is open-source and available under the Apache License 2.0.
 *   Whether you're a researcher, developer, or data scientist,
 *   DropSuit offers a range of tools to enhance your work,
 *   with a focus on diversity and experimentation.
 * </p>
 * @author Lado Oniani
 * {@link https://github.com/ladooniani GitHub}
 * @see mailto:ladooniani@gmail.com
 * @version 1.0.2
 * @see https://github.com/ladooniani/DropSuit#readme
 * @copyright 2016-2023 Lado Oniani - DropSuit. All Rights Reserved.
 * @license Apache License 2.0
 */

//#endregion

//#region Constructor

function Constructor(dsout) {
  this.dsout = dsout;
}

//#endregion

//#region clnarr

/**
 * @class clnarr
 * @description clnarr(array, 0-2) function -
 * Duplicate and empty element free trimmed lower case strings array.
 * Processes any input array.
 * @param {array} arr - Raw array input.
 * @param {number} type  - Return option parameter arguments
 * (0) keep duplicate, (1) remove duplicate, (2) remove duplicate and extra marks.
 * Note: Number out of range returns 0 option result.
 * @returns {array} - Duplicate, empty element and extra punctuation marks
 * free trimmed lower case strings array.
 * @example let out = clnarr.clnarr(myArray, 2); console.log(out);
 */

Constructor.prototype.clnarr = function (arr, type) {
  let out = clnarr_f(arr, type, this.dsout);
  return out;
};

//#endregion

//#region clnarr_f

const dropsuit_clnstr = require("../dropsuit-clnstr/index.js");
var ds_clnstr = new dropsuit_clnstr(null, false);

/**
 * Duplicate, empty element and extra punctuation marks free trimmed lower case strings array.
 * @function
 * @param {array} arr - Raw array input.
 * @param {number} type - Return option parameter arguments (0) keep duplicate (1) remove duplicate
 * (2) remove duplicate and extra marks.
 * @param {boolean} dispout - (true/false) Display processing output results in terminal.
 * @returns {array}  - Duplicate, empty element and extra punctuation marks free trimmed lower case strings array.
 * @example clnarr(myArray, 2, false)
 */

function clnarr_f(arr, type, dispout) {
  let array = [];
  type = checkType(type, 2);
  let ar = avoidMarks(arr);
  array = removeEmptyElementAndDuplicateFromArray(ar, type);
  for (let s = 0; s < array.length; s++) {
    var str = array[s].toString().replace(/\s\s+/g, " ").trim().toLowerCase();
    if (str) {
      if (type == 2) {
        str = ds_clnstr.clnstr(str).txt();
      } else if (type == 0 || type == 1) {
        let containsLetters = /[a-zA-Z]/.test(str);
        if (containsLetters) {
          str = ds_clnstr.clnstr(str).pnc();
        }
      }
      array[s] = str;
    }
  }
  array = removeEmptyElementAndDuplicateFromArray(array, type);

  display(dispout, arr, array, type); /// DISPLAY >>
  return array;
}

function avoidMarks(inputArray) {
  let filteredArray = inputArray.filter((str) => {
    return !/^[^a-zA-Z]+$/.test(str);
  });
  return filteredArray;
}

function removeEmptyElementAndDuplicateFromArray(arr, type) {
  arr = arr.filter((e) => e);
  if (type == 1 || type == 2) {
    arr = [...new Set(arr)];
  }
  arr = arr.filter((val) => val !== "true" && val !== "false");
  return arr;
}

function checkType(type, range) {
  if (range == 1) {
    if (type == 0 || type == 1) {
      return type;
    } else {
      return (type = 0);
    }
  }
  if (range == 2) {
    if (type == 0 || type == 1 || type == 2) {
      return type;
    } else {
      return (type = 0);
    }
  }
}

//#endregion

//#region console log

const getdt = require("./infodt.js");
let fnctit = getdt.displayInfoData();
const line = fnctit.line;
var description = fnctit.descript;

function display(dispout, arr, array, type) {
  let return_type;
  if (type == 0) {
    return_type = "Keep duplicate:\n\n";
  } else if (type == 1) {
    return_type = "Remove duplicate:\n\n";
  } else if (type == 2) {
    return_type = "Remove duplicate and extra marks:\n\n";
  }
  if (dispout == true) {
    console.log(
      description,
      "\nInput:\n\n",
      arr,
      "\n\nReturn type (",
      type,
      ") -->",
      return_type,
      array,
      "\n",
      line
    );
  }
}

//#endregion

//#region Export Module Constructor

module.exports = Constructor;

//#endregion
