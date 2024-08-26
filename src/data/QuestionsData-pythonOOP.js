const data = {
  questions: [
    {
      question: "Which keyword is used to create a class in Python?",
      options: ["class", "def", "struct", "object"],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "What is the output of the following code?\n\nclass MyClass:\n    def __init__(self, value):\n        self.value = value\n\nobj = MyClass(10)\nprint(obj.value)",
      options: ["None", "10", "value", "MyClass"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "Which method is called when an object is created in Python?",
      options: ["__start__", "__create__", "__init__", "__new__"],
      correctOption: 2,
      points: 10,
    },
    {
      question: "What is inheritance in Python?",
      options: [
        "A way to create new classes from existing classes",
        "A way to create new functions from existing functions",
        "A way to create new modules from existing modules",
        "A way to create new variables from existing variables",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "What is the purpose of the 'self' parameter in Python class methods?",
      options: [
        "It refers to the class itself",
        "It refers to the instance of the class",
        "It is a placeholder for a value",
        "It is used to define a static method",
      ],
      correctOption: 1,
      points: 10,
    },
  ],
};

export default data;
