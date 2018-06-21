// Code your solution in this file.
let studentArray = ['Adele', 'Beyoncé', 'Lady', 'Madonna', 'Rihanna', 'Taylor']

function other(students) {
  return students.toLowerCase()
}

function lowerCaseStudentNames(names) {
  return names.map(other)
}

const fullNames = ['Amy Adams', 'Cate Blanchett', 'Emma Stone', 'Jennifer Lawrence', 'Natalie Portman']

  function nameToAttributes(fullNames) {
    return fullNames.map(function (person) {
    const personFirst = person.split(' ')[0]
    const personLast = person.split(' ')[1]
    return {firstName:personFirst, lastName:personLast}
  })
  }
  
  /*
  let name = names[0];
  return name.toLowerCase();
  */
