
        // JavaScript Code Starts Here

        /* JavaScript Code Starts Here
        JavaScript Code Starts Here
        JavaScript Code Starts Here */


         //alert("Hello World");

        /*
        A system with two parameters
        function num1(name,level){
            document.write("My name is " + name +" and i'm presently in level " + level);
         }

        num1("Wilfried","200");
        */

        /*

        A system that take marks as input and povides total, average and percentage as output


        var physics;
        var chem;
        var bio;
        var maths;
        var fmaths;

        var total;
        var avg;
        var percentage;

        physics=90;
        chem=80;
        bio=70;
        fmaths=90;
        maths=90;

        total= physics+chem+bio+fmaths+maths;

        avg= total/5;

        percentage= (total/500)*100;


         function results(){
            document.write("My total is " +total+ " average is " +avg+ " and my percentage is " +percentage);
         }


        results();
        */
         
         var age=19;
         var gender="female";

         if(age<18 && gender=="male"){
                 document.write("I am an adolescent Male");
        }
        else if(age>=18 && gender=="male"){
                
            document.write("I am an adult Male");
            
        }
        else if(age<18 && gender=="female"){
                
            document.write("I am an adolescent Female");
        }
        else if(age>=18 && gender=="female"){
               
            document.write("I am an adult Female");
 
        }
        else{
            document.write("unkwown name or gender");
        }
