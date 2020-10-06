# Caesar cipher CLI tool

Implement CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

### Installation

Caesar cipher CLI tool requires [Node.js](https://nodejs.org/) Node v12.18.0 (LTS) to run.

Open the project:

```sh
$ cd caesar-cli
```

Install the dependencies:

```sh
$ npm install
```

Create symlink:

```sh
$ npm link
```
### Usage

```text
caesar-cli -a ["encode" | "decode"] -s [positive_integer] -i [input_file_path] -o [output_file_path]

Options:
  -a, --action # an action encode/decode
  -s, --shift  # a shift
  -i, --input  # an input file
  -o, --output # an outnput file

Example:
  $ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

License
----

MIT