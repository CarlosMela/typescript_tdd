This project was created just for learning TypeScript and practicing TDD with jasmine in this case.

After cloning the project execute from the command line on the project directory:

`npm install`

`tsd install jasmine`


All libraries are installed locally. To compile the code and run the tests (in Windows) execute:

To compile:
`node_modules\.bin\tsc spec\NumbersSpec.ts --module commonjs`

To run:
`node node_modules\.bin\jasmine` or `npm run test`

Or both together with `npm run run`

But the best way to work with it is you use Atom IDE with the package 'atom-typescript'. In this way the typescript files
will compile automatically.

To see the solutions to some problems at http://static.projecteuler.net/ run (after compiling): `node index`
