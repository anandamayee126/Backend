// //FAT ARROW FUNCTION

// const product=(a,b)=> a*b;
// console.log(product(3,4));

// //Object

// const student={
//     name: 'Anandamayee Ghosh',
//     department: 'Computer Science'
// }
// console.log(student);

class Student
{
    constructor(name,age,marks)
    {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    setPlacementAge(minAge)
    {
        return(minMarks)=>{
            if(this.marks>=minMarks && this.age>=minAge)
              console.log('eligible');
            else
            console.log('not eligible');
        }
    }
}

const andy= new Student('Anandamayee',19,75);
andy.setPlacementAge(23)(40);

