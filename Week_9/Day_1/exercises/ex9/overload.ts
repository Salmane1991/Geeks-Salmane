function greet(): string;
function greet(name: string): string;
function greet(name?: string): string {
  return name ? `Hello, ${name}!` : "Hello!";
}
console.log(greet());
console.log(greet("Alice"));