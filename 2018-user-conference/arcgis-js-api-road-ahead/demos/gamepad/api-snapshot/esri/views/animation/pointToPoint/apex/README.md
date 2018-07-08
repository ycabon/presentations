# Apex distance path planning

[Path](./Path.ts) is used to represent a piecewise camera transition path that
optimizes for minimal animation time by transitioning to and from an optimal
apex height. Intuitively, larger zoom distances allow for faster pan transitions
because the flow caused by panning is smaller at larger distances.

## Modules

- [functions.ts](./functions.ts): a set of (generated) functions to compute
  required transition time and its first and second order derivatives. These
  functions may be used in optimization routines to find the optimal apex
  height which minimizes animation time.
- [Path.ts](./Path.ts): a subclass of the base [Path](../Path.ts) class which
  computes a piecewise path including ascension and descension to an optimal
  apex height (if it lowers the amount of time required to complete the
  transition).
- [planning.ts](./planning.ts): a module which optimizes the apex height for
  minimizing required transition time using Newtons Method.
- [scripts/](scripts/): contains Julia scripts that symbolically derive and
  generate JavaScript code for the time functions and their derivatives.
