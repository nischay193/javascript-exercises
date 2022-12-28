const getAge = function(person) {
    if ("yearOfDeath" in person) {
        return person.yearOfDeath - person.yearOfBirth;
    }
    return 2022 - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((prev, cur) => {
        return getAge(prev) > getAge(cur) ? prev : cur;
    });
};



// Do not edit below this line
module.exports = findTheOldest;
