
const data = [
  {
    "id": "111111",
    "first_name": "John",
    "last_name": "Doe",
    "date_of_birth": "01/2000",
    "gender": "M",
    "entry_academic_period": "Fall 2008",
    "exclusion_type": "",
    "sat_combined": 749,
    "sat_math": 108,
    "sat_verbal": 209,
    "sat_reading": 302,
    "hs_gpa": 2.71,
    "hs_city": "Albuquerque",
    "hs_state": "New Mexico",
    "hs_zip": 87112,
    "email": "jdoe@example.com",
    "entry_age": 17.9,
    "ged": false,
    "english_2nd_language": false,
    "first_generation": true
  },
  {
    "id": "111112",
    "first_name": "Jane",
    "last_name": "Smith",
    "date_of_birth": "05/2001",
    "gender": "F",
    "entry_academic_period": "Fall 2006",
    "exclusion_type": "",
    "sat_combined": 209,
    "sat_math": 200,
    "sat_verbal": 504,
    "sat_reading": 308,
    "hs_gpa": 3.73,
    "hs_city": "New York",
    "hs_state": "New York",
    "hs_zip": 10009,
    "email": "jsmith@example.com",
    "entry_age": 18.1,
    "ged": false,
    "english_2nd_language": false,
    "first_generation": true
  },
  {
    "id": "111113",
    "first_name": "Sarah",
    "last_name": "Thomas",
    "date_of_birth": "21/2002",
    "gender": "M",
    "entry_academic_period": "Fall 2006",
    "exclusion_type": "",
    "sat_combined": 463,
    "sat_math": 391,
    "sat_verbal": 109,
    "sat_reading": 231,
    "hs_gpa": 2.64,
    "hs_city": "Pheonix",
    "hs_state": "Arizona",
    "hs_zip": 85006,
    "email": "sthomas@example.com",
    "entry_age": 17.6,
    "ged": false,
    "english_2nd_language": false,
    "first_generation": false
  },
  {
    "id": "111114",
    "first_name": "Frank",
    "last_name": "Brown",
    "date_of_birth": "13/2002",
    "gender": "M",
    "entry_academic_period": "Fall 2006",
    "exclusion_type": "",
    "sat_combined": 450,
    "sat_math": 520,
    "sat_verbal": 510,
    "sat_reading": 210,
    "hs_gpa": 3.68,
    "hs_city": "Pheonix",
    "hs_state": "Arizona",
    "hs_zip": 85015,
    "email": "fbrown@example.com",
    "entry_age": 19,
    "ged": true,
    "english_2nd_language": false,
    "first_generation": true
  },
  {
    "id": "111115",
    "first_name": "Mike",
    "last_name": "Davis",
    "date_of_birth": "31/2001",
    "gender": "F",
    "entry_academic_period": "Fall 2007",
    "exclusion_type": "",
    "sat_combined": 589,
    "sat_math": 301,
    "sat_verbal": 110,
    "sat_reading": 290,
    "hs_gpa": 3.46,
    "hs_city": "Seattle",
    "hs_state": "Washington",
    "hs_zip": 98106,
    "email": "mdavis@example.com",
    "entry_age": 18.2,
    "ged": false,
    "english_2nd_language": true,
    "first_generation": false
  },
  {
    "id": "111116",
    "first_name": "Jennifer",
    "last_name": "Wilson",
    "date_of_birth": "01/2002",
    "gender": "M",
    "entry_academic_period": "Fall 2006",
    "exclusion_type": "",
    "sat_combined": 721,
    "sat_math": 189,
    "sat_verbal": 209,
    "sat_reading": 308,
    "hs_gpa": 4.24,
    "hs_city": "Denver",
    "hs_state": "Colorado",
    "hs_zip": 80012,
    "email": "jwilsonexample.com",
    "entry_age": 18.5,
    "ged": true,
    "english_2nd_language": false,
    "first_generation": true
  },
  {
    "id": "111117",
    "first_name": "Jessica",
    "last_name": "Garcia",
    "date_of_birth": "01/2000",
    "gender": "F",
    "entry_academic_period": "Fall 2007",
    "exclusion_type": "",
    "sat_combined": 683,
    "sat_math": 201,
    "sat_verbal": 367,
    "sat_reading": 190,
    "hs_city": "Austin",
    "hs_gpa": 2.13,
    "hs_city": "Denver",
    "hs_state": "Colorado",
    "hs_state": "Texas",
    "hs_zip": 78703,
    "email": "jgarcia@example.com",
    "entry_age": 18.8,
    "ged": false,
    "english_2nd_language": false,
    "first_generation": false
  },
  {
    "id": "111118",
    "first_name": "Fred",
    "last_name": "Clark",
    "date_of_birth": "17/1999",
    "gender": "F",
    "entry_academic_period": "Fall 2010",
    "exclusion_type": "",
    "sat_combined": 265,
    "sat_math": 109,
    "sat_verbal": 468,
    "sat_reading": 241,
    "hs_gpa": 2.54,
    "hs_city": "Denver",
    "hs_state": "Colorado",
    "hs_zip": 80033,
    "email": "fclarkexample.com",
    "entry_age": 19.2,
    "ged": false,
    "english_2nd_language": true,
    "first_generation": true
  },
  {
    "id": "111119",
    "first_name": "Bob",
    "last_name": "Lopez",
    "date_of_birth": "04/1998",
    "gender": "F",
    "entry_academic_period": "Fall 2007",
    "exclusion_type": "",
    "sat_combined": 720,
    "sat_math": 110,
    "sat_verbal": 400,
    "sat_reading": 220,
    "hs_gpa": 3.24,
    "hs_city": "Denver",
    "hs_state": "Colorado",
    "hs_zip": 80122,
    "email": "blopez@example.com",
    "entry_age": 18.5,
    "ged": false,
    "english_2nd_language": false,
    "first_generation": true
  }
 ];
 
 const studentsName = data.map(function(student){
     return student.first_name +" "+ student.last_name;
 });
 const malestudents = data.filter(function(student){
     return student.gender === "M";
 });
 
 const femalestudents = data.filter(function(student){
     return student.gender === "F";
 });
 
 const validateEmail = (email) => {
   return String(email)
     .toLowerCase()
     .match(
       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     );
 };
 
 data.forEach(function (student) {
   if( !validateEmail(student.email) ) console.log (`studend id: ${student.id} email not valid`);
 });
 
 
 data.sort((a, b) =>{
     const Ayear= parseInt( a.date_of_birth.slice(-4));
     const Amonth= parseInt( a.date_of_birth.slice(0,2));
     const Byear= parseInt( b.date_of_birth.slice(-4));
     const Bmonth= parseInt( b.date_of_birth.slice(0,2));
     if(Ayear > Byear) return 1;
     if(Ayear < Byear) return -1;
     if(Amonth > Bmonth) return 1;
     return -1;
     });
 
 data1=[...data];
 
 data1.sort((a,b)=> {
     
     return (b.sat_combined + b.sat_math + b.sat_verbal+ b.sat_reading) - (a.sat_combined + a.sat_math + a.sat_verbal + a.sat_reading);
 });
 const topThreeStudents = data1.slice(0,3);
     