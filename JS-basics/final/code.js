
/************** 
  /*Variables and datatype */
var firstName = 'Arpita';
var lastName = 'Majumdar';
var isMarried= false;
var age=20;
console.log(firstName, lastName, isMarried);
isMarried= true;
console.log(firstName, lastName, isMarried);


/* Variables mutation and type coerction
*/
//type coerction > add string and integer together
//var firstName, age, isMarried;
//firstName= 'Arpita';
//age= 28;
//isMarried= false;

//console.log(firstName + ' is ' + age + ' years of old' + ' and is married? ' + isMarried);

//Variables mutation > changinng the value of defined variables

//firstName= 'Manya';
//alert(firstName + ' is ' + age + ' years of old' + ' and is married? ' + isMarried);


//var lastName=prompt('what is his lastname' );
//console.log(firstName + ' ' + lastName) ;

/* Coding challenge 1
*/

var JohnMass,MarkMass, JohnHeight,MarkHeight;
JohnMass= 79;
MarkMass= 19;
JohnHeight= 193;
MarkHeight= 1.98;

var JohnBMI=(JohnMass/(JohnHeight*JohnHeight));
var MarkBMI=(MarkMass/(MarkHeight*MarkHeight));

console.log(JohnBMI);
if(MarkBMI>JohnBMI)
{
    console.log('Mark has higher BMI than John');

}
else{
    console.log('Is Marks BMI is higher than John?');


}

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var JohnT1, JhonT2, JhonT3;
JohnT1=89;
JhonT2=120;
JhonT3=103;

var MikeT1, MikeT2, MikeT3;
MikeT1=116;
MikeT2=94;
MikeT3=123;

var MaryT1, MaryT2, MaryT3;
MaryT1=97;
MaryT2=134;
MaryT3=105;
var JhonAvg = (JohnT1+JhonT2+JhonT3)/3;
var MikeAvg = (MikeT1+MikeT2+MikeT3)/3;
var MaryAvg = (MaryT1+MaryT2+MaryT3)/3;

console.log("Jhon average score is " + ' ' + JhonAvg, "Mark average score is " + ' ' + MikeAvg);
console.log("Mary average score is" + ' ' + MaryAvg);


if(JhonAvg>MikeAvg && JhonAvg>MaryAvg )
{
    console.log("Jhon team is winner" + '' +"Average score of Jhon team is " + JhonAvg);
}

else if(MaryAvg>JhonAvg && MaryAvg>MikeAvg)

{
    console.log("Mary team is winner" + ' ' + "and " + "Average score of Mike team is " +  MaryAvg);
}
else
{
    console.log("Draw");
}


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
                   console.log(tips, finalValues);

    
/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/               

  /*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

    var john= {
        firstName:'John',
        height: 2,
        mass: 90,
       CalcBMI: function()
        {
this.BMI=(this.mass)/(this.height*this.height)
return this.BMI;
        }

    };

    var Mark= {
        firstName: 'Mark',
        height: 2,
        mass: 50,
        CalcBMI: function()
        {
            this.BMI=(this.mass)/(this.height*this.height)
            return this.BMI;
        }

    };
console.log(Mark);
console.log(john);
    if(Mark.CalcBMI()>john.CalcBMI())
    {
        console.log("Mark BMI is " + ' ' + Mark.BMI);
    }
    else if(Mark.CalcBMI()<john.CalcBMI())
    {
        console.log ("John BMI is " + '' + john.BMI);
    }
    else
    {
console.log("both have same BMI");
    }
