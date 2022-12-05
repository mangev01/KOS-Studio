
const aboutDevelopers = require ('./developers')
const numberOfdevelopers = require ('./developers')

//Unit Test using jest
test ('Number of Devs', () => { 
    expect(numberOfdevelopers()).not.toBe(3)
})

//Integration test using jest
test ('About the Developers', () => { //
    expect(aboutDevelopers()).not.toBe("")
})
