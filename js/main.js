var source = $("#some-template").html(); 
var template = Handlebars.compile(source); 

var data = { 
    users: [ { 
        person: {
            firstName: "John", 
            lastName: "Smith"
        },
        Age: "52",
        Modify: "" 
    }, {
        person: {
            firstName: "Jane", 
            lastName: "Johnson"
        }, 
        Age: "68",
        Modify: ""
    }, {
        person: {
            firstName: "David", 
            lastName: "Anderson"
        }, 
        Age: "24",
        Modify: ""
    } ]
}; 

Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});

$('body').append(template(data));

//HandlebarsFormHelpers.register(Handlebars, {
//  namespace: 'myform'
//})
//
//{{myform-label "name" "Please enter your name"}}