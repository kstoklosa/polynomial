# polynomial

I've decided to aprroach the solution using linked list data structure. It allows to add or remove elements easily, and we can expand it if needed.

My solution is based on assumption that polynomial is an expression being the some of several terms containing different powers of the same variables.

## Expression parsing

You can pass strings to the polynomial class constructor in the following format:


```
"2x^5+3x^2+2x-1"
```

Make sure your string does not contain any white spaces or brackets and your polynomial is inserted in its simplest format.

## Usage

Initializing the polynomial
```js
const p = new Polynomial("5x^3+4x^-1-2");
```
Adding two polynomials
```js
const p1 = new Polynomial("5x^3+4x^-1-2");
const p2 = new Polynomial("-2x^4+4x+12");

p1.add(p2);
```

## Instalation

Please clone the following repo.
```bash
yarn install
```

## Testing

```bash
yarn test
```

## Complexity

Time complexity of my solution is O(m*log(m)+n*log(n)), where m and n are the number of nodes in first and second list. It is because ofusing Array.sort.function.
Time complexity of addition, assuming the data is already sorted, is O(m+n).

Space complexity of my solution is also O(m+n), where m and n are the number of nodes in first and second list.
