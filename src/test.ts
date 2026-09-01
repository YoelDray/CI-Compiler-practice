// בדיקות למחשבון - פונקציית assert פשוטה משלנו, בלי תלות חיצונית

import { add, subtract, multiply, divide } from "./calculator";

function assertEqual(actual: number, expected: number, label: string): void {
  if (actual !== expected) {
    throw new Error(`${label}: ציפינו ל-${expected}, קיבלנו ${actual}`);
  }
}

function test(name: string, fn: () => void): void {
  try {
    fn();
    console.log(`✓ ${name}`);
  } catch (err) {
    console.error(`✗ ${name}`);
    throw err;
  }
}

test("add: 2 + 3 = 5", () => {
  assertEqual(add(2, 3), 5, "add");
});

test("subtract: 5 - 3 = 2", () => {
  assertEqual(subtract(5, 3), 2, "subtract");
});

test("multiply: 3 * 4 = 12", () => {
  assertEqual(multiply(3, 4), 12, "multiply");
});

test("divide: 10 / 2 = 5", () => {
  assertEqual(divide(10, 2), 5, "divide");
});

test("divide by zero throws error", () => {
  let threw = false;
  try {
    divide(5, 0);
  } catch {
    threw = true;
  }
  if (!threw) {
    throw new Error("divide by zero: הייתה אמורה לזרוק שגיאה");
  }
});

console.log("\nכל הבדיקות עברו בהצלחה!");

