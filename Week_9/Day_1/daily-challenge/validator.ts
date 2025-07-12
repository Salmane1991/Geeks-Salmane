function validateUnionType(value: any, allowedTypes: string[]): boolean {
  for (const type of allowedTypes) {
    if (typeof value === type) return true;
  }
  return false;
}
console.log(validateUnionType(123, ["string", "number"])); // true
console.log(validateUnionType(true, ["string", "number"])); // false