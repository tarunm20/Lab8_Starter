// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber
test('Valid phone number with parentheses should return true', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});
  
test('Valid phone number without parentheses should return true', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('Invalid phone number with missing digits should return false', () => {
    expect(functions.isPhoneNumber('123-456')).toBe(false);
});
  
test('Invalid phone number with wrong format should return false', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

//isEmail
test('Valid email address should return true', () => {
    expect(functions.isEmail('tmurugan@ucsd.edu')).toBe(true);
});

test('Valid email address with numbers should return true', () => {
    expect(functions.isEmail('tmurugan24@gmail.com')).toBe(true);
});
  
test('Invalid email address without domain should return false', () => {
    expect(functions.isEmail('test@')).toBe(false);
});
  
test('Invalid email address without @ symbol should return false', () => {
    expect(functions.isEmail('test.example.com')).toBe(false);
});

//isStrongPassword
test('Strong password with valid criteria should return true', () => {
    expect(functions.isStrongPassword('Password123_')).toBe(true);
});

test('Strong password with maximum length should return true', () => {
    expect(functions.isStrongPassword('Abc123xyz')).toBe(true);
});

test('Password that starts with numbers should return false', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});

test('Extra long password should return false', () => {
    expect(functions.isStrongPassword('thispasswordisextralong')).toBe(false);
});
  
//isDate
test('Valid date with single-digit month and day should return true', () => {
    expect(functions.isDate('4/2/2023')).toBe(true);
});

test('Valid date with double-digit month and day should return true', () => {
    expect(functions.isDate('04/02/2002')).toBe(true);
});

test('Invalid date with missing year should return false', () => {
    expect(functions.isDate('04/02')).toBe(false);
});

test('Invalid date with incorrect format should return false', () => {
    expect(functions.isDate('2002-04-02')).toBe(false);
});

//isHexColor
test('Valid 3-digit hex color code with # prefix should return true', () => {
    expect(functions.isHexColor('#F00')).toBe(true);
});

test('Valid 6-digit hex color code without # prefix should return true', () => {
    expect(functions.isHexColor('00FF00')).toBe(true);
});

test('Invalid hex color code with incorrect length should return false', () => {
    expect(functions.isHexColor('#F')).toBe(false);
});

test('Invalid hex color code with invalid characters should return false', () => {
    expect(functions.isHexColor('GHIJKL')).toBe(false);
});
  