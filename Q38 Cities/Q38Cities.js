function describe_city(cityName, countryName) {
    if (countryName === void 0) { countryName = "Pakistan"; }
    console.log(cityName + " is the city of " + countryName);
}
describe_city("Karacchi");
describe_city("Lahore");
describe_city("Paris", "France");
