
/////////////////////// DATA 1

// let averageDolphins = (98 + 108 + 89) / 3;
// let averageKoalas = (88 + 91 + 110) / 3;

/////////////////////// DATA 2

let averageDolphins = (97 + 112 + 101) / 3;
let averageKoalas = (109 + 95 + 123) / 3;

/////////////////////// DATA 3

// let averageDolphins = (97 + 112 + 101) / 3;
// let averageKoalas = (109 + 95 + 106) / 3;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log(`Team Dolphins wins the Trophy with the average of ${Math.round(averageDolphins)}`);
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
    console.log(`Team Koalas wins the Trophy with the average of ${Math.round(averageKoalas)}`);
} else if (averageDolphins == averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
    console.log(`Team Dolphins and Koalas play a tied match`);
} else {
    console.log(`Unfortunately, nobody wins the Trophy 😟`);
}

