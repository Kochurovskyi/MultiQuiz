const data = {
  questions: [
    {
      question: "In Python, strings are…",
      options: ["Str objects", "Char arrays", "Changeable", "None"],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "Python strings have a property called “immutability.” What does this mean?",
      options: [
        "You can update a string in Python with concatenation.",
        "Strings in Python can be represented as arrays of char.",
        "Strings can’t be divided by numbers.",
        "Strings in Python can’t be changed.",
      ],
      correctOption: 3,
      points: 20,
    },
    {
      question:
        "If you want to transform a list of strings input_list into a single string with a comma between each item, which of the following would you give as the input to join()?",
      options: [",", "Input_list", "Str", "String"],
      correctOption: 1,
      points: 20,
    },
    {
      question:
        "Which of the following mathematical operators can be used to concatenate strings:",
      options: ["/", "*", "-", "="],
      correctOption: 1,
      points: 10,
    },
    {
      question:
        "Assume x and y are assigned as follows: x=5, y=-5. What is the effect of this statement: x, y = (y, x)[::-1]",
      options: [
        "Both x and y are 5",
        "The values of x and y are swapped.",
        "The values of x and y are unchanged.",
        "Both x and y are -5",
      ],
      correctOption: 2,
      points: 30,
    },
    {
      question:
        "In regards to separated value files such as .csv and .tsv, what is the delimiter?",
      options: [
        "Any character such as the comma (,) or tab (\\t) that is used to separate the raw data",
        "Delimiters are not used in separated value files.",
        "Anywhere the comma (,) character is used in the file.",
        "Any character such as the comma (,) or tab (\\t) that is used to separate the column data",
      ],
      correctOption: 3,
      points: 20,
    },
    {
      question:
        "In separated value files such as .csv and .tsv what does the first row in the file typically contain?",
      options: [
        "The author of the table data",
        "The column names of the data",
        "The source of the data",
        "Notes about the table data",
      ],
      correctOption: 1,
      points: 10,
    },
    {
      question:
        "Consider this assignment statement: a,b,c = (1,2,3,4,5,6,7,8,9)[1::3]. Following execution of this statement, what is the value of b:",
      options: ["2", "4", "5", "6"],
      correctOption: 2,
      points: 30,
    },
    {
      question:
        "Which of the following is the correct way to open the CSV file hrdata.csv for reading using the pandas package? Assume that the pandas package has already been imported.",
      options: [
        "Pandas.read_csv('hrdata.csv')",
        "Pandas.open('hrdata.csv', 'r')",
        "Pandas.read_table('hrdata.csv')",
        "Pandas.open_csv('hrdata.csv', 'r')",
      ],
      correctOption: 0,
      points: 20,
    },
    {
      question: "What is a correct syntax to output “Hello World” in Python?",
      options: [
        "P('Hello, World')",
        "Echo 'Hello, World'",
        "Echo ('Hello, World')",
        "Print('Hello, World')",
      ],
      correctOption: 3,
      points: 10,
    },
    {
      question: "How do you insert COMMENTS in Python code?",
      options: [
        "<--this is a comment-->",
        "/*this is a comment*/",
        "#this is a comment",
        "//this is a comment//",
      ],
      correctOption: 2,
      points: 10,
    },
    {
      question:
        "Which collection is ordered, changeable, and allows duplicate members?",
      options: ["TUPLE", "SET", "LIST", "DICTIONARY"],
      correctOption: 2,
      points: 20,
    },
    {
      question: "Which of the following are true about python lists?",
      options: [
        "These represent the same list: ['a', 'b', 'c'] ['c', 'a', 'b']",
        "All elements in a list must be of the same type",
        "A given object may appear in a list more than once",
        "There is no conceptual limit to the size of a list",
      ],
      correctOption: 2,
      points: 20,
    },
    {
      question:
        "Assume the following list definition: >>> a = ['foo', 'bar', 'baz', 'qux', 'quux', 'corge'] Several short REPL sessions are shown below. Which display correct output?",
      options: [
        "· >>> print(a[4::-2]) ['quux', 'baz', 'foo']",
        "· >>> a[:] is a True",
        "· >>> print(a[-5:-3]) ['bar', 'baz']",
        "· >>> max(a[2:4] + ['grault']) 'qux'",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question:
        "A collection which is unordered, changeable and does not allow duplicates.",
      options: ["TUPLE", "SET", "LIST", "DICTIONARY"],
      correctOption: 3,
      points: 20,
    },
    {
      question: "A collection which is ordered and unchangeable.",
      options: ["TUPLE", "SET", "LIST", "DICTIONARY"],
      correctOption: 0,
      points: 20,
    },
    {
      question: "How do you start writing a while loop in Python?",
      options: [
        "While x > y:",
        "While (x > y)",
        "X > y while {",
        "While x>y {",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "Select the ones you like List a is defined as follows: a = [1, 2, 3, 4, 5] Select all of the following statements that remove the middle element 3 from a so that it equals [1, 2, 4, 5]:",
      options: [
        "A[2]=[ ]",
        "A[2:3]=[ ]",
        "A.remove(3)",
        "A[2:2]=[ ]",
        "Del a[2]",
      ],
      correctOption: 1,
      points: 30,
    },
    {
      question: "Which statement is used to stop a loop?",
      options: ["Break", "Exit", "Return", "Stop"],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "List a is defined as follows: a = ['a', 'b', 'c'] Which of the following statements adds 'd' and 'e' to the end of a, so that it then equals ['a', 'b', 'c', 'd', 'e']: ",
      options: [
        "A.extend(['d','e'])",
        "A.append(['d','e'])",
        "A += ['d','e']",
        "A[len(a):] = ['d','e']",
        "A +=  'de'",
        "A[-1:] =  ['d','e']",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "Updates the dictionary with the specified key-value pairs",
      options: ["Clear()", "Copy()", "Fromkeys()", "Update()", "Items()"],
      correctOption: 3,
      points: 10,
    },
    {
      question: "Returns a list of all the values in the dictionary",
      options: ["Clear()", "Copy()", "Fromkeys()", "Values()", "Items()"],
      correctOption: 3,
      points: 10,
    },
    {
      question: "List is:",
      options: [
        "Is a collection which is ordered and unchangeable. Allows duplicate members.",
        "Is a collection which is ordered and changeable. Allows duplicate members.",
        "Is a collection which is unordered and unindexed. No duplicate members.",
        "Is a collection which is unordered and changeable. No duplicate members.",
      ],
      correctOption: 1,
      points: 10,
    },
    {
      question: "Tuple is",
      options: [
        "Is a collection which is ordered and unchangeable. Allows duplicate members.",
        "Is a collection which is ordered and changeable. Allows duplicate members.",
        "Is a collection which is unordered and unindexed. No duplicate members.",
        "Is a collection which is unordered and changeable. No duplicate members.",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "Set is",
      options: [
        "Is a collection which is ordered and unchangeable. Allows duplicate members.",
        "Is a collection which is unordered and unindexed. No duplicate members.",
        "Is a collection which is ordered and changeable. Allows duplicate members.",
        "Is a collection which is unordered and changeable. No duplicate members.",
      ],
      correctOption: 1,
      points: 10,
    },
  ],
};

export default data;
