                       //Javascript Assignment 5

/*
1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.
Create classes for volumes for each geometric shape which returns the
output using the getVolume() method.

eg- to get volume of cylinder-
let obj= new Cylinder(radius,height);

obj.getVolume();

Formulas for volumes of the shapes-
1) Cylinder- Volume = πr

2h

where r is the radius and h is the height of the cylinder.
2)Sphere- Volume= 4/3πr
3
where r is the radius
3) Cone- Volume= πr
2h/3

where r is the radius and h is the height of the cone.
*/


class cylinder
{
    constructor(radius,height)
    {
        this.radius=radius;
        this.height=height;
    }
    getVolume()
    {
        let result = (22/7)*((this.radius)*(this.radius))*(this.height);
        result= result.toFixed(4);
        console.log(result);
    }
}
class sphere extends cylinder
{
    constructor(radius)
    {
        super(radius);
    }
    getVolume()
    {
        let result = (4/3)*(22/7)*((this.radius)*(this.radius)*(this.radius));
        result= result.toFixed(4);
        console.log(result);
    }
}
class cone extends cylinder
{
    constructor(radius,height)
    {
        super(radius,height);
    }
    getVolume()
    {
        let result = (22/7)*(this.radius)*(this.radius)*((this.height)/3)
        result= result.toFixed(4);
        console.log(result);
    }
}
let obj1=new cylinder(5,2);
obj1.getVolume();
let obj2=new sphere(5,2);
obj2.getVolume();
let obj3=new cone(5,2);
obj3.getVolume();
