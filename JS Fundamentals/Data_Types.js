    // Data Types in JavaScript
    // 1. String
    let name = "Prajwol";
    console.log(typeof name);

    // 2. Number
    let age = 25;
    console.log(typeof age);

    // 3. Boolean
    let isStudent = true;
    console.log(typeof isStudent);

    // 4. Undefined
    let address;
    console.log(typeof address);

    // 5. Null
    let job = null;
    console.log(typeof job);

    // 6. Symbol
    let id = Symbol('hello');
    console.log(typeof id);

    // 7. BigInt
    let bigNumber = BigInt(123456789012345678901234567890);
    console.log(typeof bigNumber);

    //Non Primitive Data Types
    // 1. Object
    const student = {
        firstname: "Prajwol",
        age: 20,
        lastname: "Shrestha",
        address: "Bhaktapur, Naya Thimi",
        isPass: true,
    };

    //both of the options are correct to access the properties of an object.
    console.log(student["age"]);
    console.log(student.firstname);

    student.age = student.age + 1;
    console.log(Before = student.age);
    student["age"] = student["age"] + 2;
    console.log(After = student.age);

    