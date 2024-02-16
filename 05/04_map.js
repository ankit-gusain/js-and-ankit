let map = new Map()
map.set("1", "one");
map.set("2", "two");
map.set("3", "three");

console.log(map);

//applying loop on map ----- for of

for (const val of map) {

    console.log(val);
}

//de structuring arrays in maps

for (const [key, value] of map) {
    console.log(key, '-', value);
}

//to be added more -------------------------------------------------------------------
