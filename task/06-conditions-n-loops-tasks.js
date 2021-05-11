'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
    if (num % 5 == 0 && num % 3 == 0) {
        return "FizzBuzz";
    } else if (num % 3 == 0) {
        return "Fizz";
    } else if (num % 5 == 0) {
        return "Buzz";
    } else {
        return num;
    }
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * getFactorial(n - 1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
    if ((a + b) > c && (b + c) > a && (a + c) > b) {
        return true;
    } else {
        return false;
    }
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object 
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 * 
 *  (5;5)
 *     -------------  
 *     |           | 
 *     |           |  height = 10
 *     ------------- 
 *        width=20    
 * 
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 * 
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 * 
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *  
 */
function doRectanglesOverlap(rect1, rect2) {
    if (rect1.left == rect1.left + rect1.width || rect1.top + rect1.height == rect2.top ||
        rect2.left == rect2.left + rect2.width || rect2.top + rect2.height == rect2.top) {
        return false;
    }

    if (rect1.left >= rect2.left + rect2.width || rect2.left >= rect1.left + rect1.width)
        return false;

    if (rect1.top + rect1.height <= rect2.top || rect2.top + rect2.height <= rect1.top)
        return false;

    return true;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of 
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 * 
 * Point is object of 
 *  {
 *     x: 5,
 *     y: 5
 *  }
 * 
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *   
 */
function isInsideCircle(circle, point) {
    if ((Math.pow(point.x - circle.center.x, 2) + Math.pow(point.y - circle.center.y, 2)) < Math.pow(circle.radius, 2)) {
        return true;
    }
    return false;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    let charIsFound = false;
    for (let i = 0; i < str.length; i++) {
        charIsFound = false;
        let char1 = str[i];
        let j = 0;
        for (; j < str.length; j++) {
            if (j == i) {
                continue;
            }
            if (char1 == str[j]) {
                charIsFound = true;
                break;
            }
        }
        if (!charIsFound) {
            return char1;
        }
    }
    return null;
}

/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    let result = "";
    if (isStartIncluded) {
        result = "[";
    } else {
        result = "(";
    }
    if (a < b) {
        result = result + a + ", " + b;
    } else {
        result = result + b + ", " + a;
    }
    if (isEndIncluded) {
        result = result + "]";
    } else {
        result = result + ")";
    }
    return result;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }
    return result;
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    let numString = "" + num;
    let result = "";
    for (let i = numString.length - 1; i >= 0; i--) {
        result = result + numString[i];
    }
    return new Number(result);
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
    let sum = 0;
    let ccnString = "" + ccn;
    let size = Math.trunc(ccnString.length / 2);
    let array = new Array(size);
    for (let i = ccnString.length - 2, j = 0; i >= 0 && j < array.length; i -= 2, j++) {
        array[j] = ccnString[i] * 2;
    }
    for (let i = ccnString.length - 1, j = 0; i >= 0 && j < array.length; i -= 2, j++) {
        let num;
        if (Math.trunc(array[j] / 10) == 1) {
            num = 1 + array[j] % 10;
        } else {
            num = array[j];
        }

        sum = sum + Number(ccnString[i]) + num;
    }
    if ((ccnString.length - 2 * size) != 0) {
        sum = sum + Number(ccnString[0]);
    }
    return sum % 10 == 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
    let numStr = "" + num;
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        sum = sum + Number(numStr[i]);
    }
    if (sum > 9) {
        sum = getDigitalRoot(sum);
    }
    return sum;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */
function isBracketsBalanced(str) {
    let array = new Array(0);
    for (let i = 0; i < str.length; i++) {
        if ((str[i] == "]" || str[i] == "}" || str[i] == ")" || str[i] == ">") && array.length == 0) {
            return false;
        } else {
            if (str[i] == "]" || str[i] == "}" || str[i] == ")" || str[i] == ">") {
                let current = array.pop();
                if (str[i] == "]" && current != "[") {
                    return false;
                }
                if (str[i] == "}" && current != "{") {
                    return false;
                }
                if (str[i] == ")" && current != "(") {
                    return false;
                }
                if (str[i] == ">" && current != "<") {
                    return false;
                }
            } else {
                array.push(str[i]);
            }
        }
    }

    return array.length == 0;
}

/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
    let difference = (new Date(endDate) - new Date(startDate)) / 1000;
    if (difference >= 0 && difference <= 45) {
        return "a few seconds ago";
    } else if (difference > 45 && difference <= 90) {
        return "a minute ago";
    } else if (difference > 90 && difference <= 45 * 60) {
        return "" + roundNumber(difference / 60) + " minutes ago";
    } else if (difference > 45 * 60 && difference <= 90 * 60) {
        return "an hour ago";
    } else if (difference > 90 * 60 && difference <= 22 * 60 * 60) {
        return "" + roundNumber(difference / 60 / 60) + " hours ago";
    } else if (difference > 22 * 60 * 60 && difference <= 36 * 60 * 60) {
        return "a day ago";
    } else if (difference > 36 * 60 * 60 && difference <= 25 * 60 * 60 * 24) {
        return "" + roundNumber(difference / 60 / 60 / 24) + " days ago";
    } else if (difference > 25 * 60 * 60 * 24 && difference <= 45 * 60 * 60 * 24) {
        return "a month ago";
    } else if (difference > 45 * 60 * 60 * 24 && difference <= 345 * 60 * 60 * 24) {
        return "" + roundNumber(difference / 60 / 60 / 24 / 30) + " months ago";
    } else if (difference > 345 * 60 * 60 * 24 && difference <= 545 * 60 * 60 * 24) {
        return "a year ago";
    } else if (difference > 545 * 60 * 60 * 24) {
        return "" + roundNumber(difference / 60 / 60 / 24 / 30 / 12) + " years ago";
    }
}

function roundNumber(num) {
    if (num - Math.trunc(num) <= 0.5) {
        return Math.trunc(num);
    } else {
        return Math.round(num);
    }
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
    let result = "";
    let resultReverse = "";
    while (Math.trunc(num / n) != 0) {
        result = result + num % n;
        num = Math.trunc(num / n);
    }
    result = result + num;
    for (let i = result.length - 1; i >= 0; i--) {
        resultReverse = resultReverse + result[i];
    }
    return resultReverse;
}

/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {

    const splitStrings = (a, sep = '/') => a.map(i => i.split(sep));
    const elAt = i => a => a[i];
    const rotate = a => a[0].map((e, i) => a.map(elAt(i)));
    const allElementsEqual = arr => arr.every(e => e === arr[0]);
    let sep = '/';
    let sepEnd = "";
    for (let i = 1; i < pathes.length; i++) {
        if (pathes[i][0] == pathes[i - 1][0]) {
            sepEnd = "/";
        } else {
            sepEnd = "";
        }
    }
    return rotate(splitStrings(pathes, sep)).filter(allElementsEqual).map(elAt(0)).join(sep) + sepEnd;
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {

    let rowsA = m1.length,
        colsA = m1[0].length,
        rowsB = m2.length,
        colsB = m2[0].length,
        C = [];
    if (colsA != rowsB) return false;
    for (let i = 0; i < rowsA; i++) C[i] = [];
    for (let k = 0; k < colsB; k++) {
        for (let i = 0; i < rowsA; i++) {
            let t = 0;
            for (let j = 0; j < rowsB; j++) t += m1[i][j] * m2[j][k];
            C[i][k] = t;
        }
    }
    return C;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    for (let i = 0; i < 3; i++) {
        if ((position[i][0] === position[i][1]) && (position[i][1] === position[i][2]) && (position[i][0] != undefined)) {
            return position[i][2];
        }
    }
    for (let i = 0; i < 3; i++) {
        if ((position[0][i] === position[1][i]) && (position[1][i] === position[2][i]) && (position[0][i] != undefined)) {
            return position[2][i];
        }
    }
    if ((position[0][0] === position[1][1]) && (position[1][1] === position[2][2]) && (position[0][0] != undefined)) {
        return position[2][2];
    }
    if ((position[0][2] === position[1][1]) && (position[1][1] === position[2][0]) && (position[2][0] != undefined)) {
        return position[2][0];
    }
}

module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString: getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString: timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition: evaluateTicTacToePosition
};