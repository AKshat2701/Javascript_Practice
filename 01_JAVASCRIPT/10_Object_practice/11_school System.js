


const school =
{
    schoolName : "CMS International school",
    class :
    [
        {
            className : 10,
            student :
            ["ramesh", "dinesh", "aryan", "ayan", "ansh"]
        },
        {
            className : 11,
            student : 
            ["akshat", "rahul", "ramesh", "dheeraj", "priyam"]
        },
        {
            className : 12,
            student : 
            ["ayushi", "alankrit", "komal", "raju", "harshit"]
        }
    ],


    addstudent(className , stdname)
    {
        const cls = this.class.find(c => c.className === className)

        if(!cls)
        {
            console.log("Class not found")
            return
        }

        cls.student.push(stdname)

        console.log(stdname, "is added to class", className)
    }

}


school.addstudent(10,"mohit")
