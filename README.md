
## 📖 What are Some Differences Between Interfaces and Types in TypeScript?

### What is `type` in TypeScript?

Type in TypeScript is a common name that we can use for multiple arrays, objects, or functions.  
For example — if we want to declare some variables and the type of their value is `boolean`, we can do this:

```ts
const hasAccess: boolean = false;
const isAdmin: boolean = true;
```

But instead of doing this every time, we can declare a `type` like this:

```ts
type IsAdmin = boolean;
```

Now we can use this type for any boolean-type variable:

```ts
const hasAccess: IsAdmin = false;
const isAdmin: IsAdmin = true;
```

We can also declare object shapes using `type`.  
For example:

```ts
type Student = {
  name: string;
  roll: number;
};
```

Now we can make as many students as we want:

```ts
const student1: Student = {
  name: 'Shawn',
  roll: 2211027121
};

const student2: Student = {
  name: 'Rayhan',
  roll: 2211027122
};

const student3: Student = {
  name: 'Karim',
  roll: 2211027123
};

const student4: Student = {
  name: 'Momin',
  roll: 2211027124
};
```

### What is `interface` in TypeScript?

Interface is almost like `type` but it is used for defining the structure of an object.  
It works like the blueprint of an object.

We can declare the same student object using `interface`:

```ts
interface Student {
  name: string;
  roll: number;
}
```

And use it like this:

```ts
const student1: Student = {
  name: 'Shawn',
  roll: 2211027121
};
```

### Key Differences Between `type` and `interface`

**Type:**
- Can describe primitives, unions, intersections, objects, and functions.
- Can extend via intersections (`&`).
- Declaration Merging is **not possible**.
- Cannot create instances with `new` for classes.

**Interface:**
- Mostly used for describing object shapes.
- Can extend other interfaces via `extends`.
- Declaration Merging is **possible**.
- Can be implemented by classes.

### When to use `type`?
- Combining multiple types (union or intersection).
- Defining tuple, function, or primitive type aliases.
- When you need flexibility beyond object structures.

### When to use `interface`?
- Defining object shapes.
- Working with classes (like `implements`).
- When you expect your type to be extended or merged.
