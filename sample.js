const newTechProficiencies = [];
const technologyOptions=['java','python','kotlin'];
const techProficiencies=['java','python'];

for (const techOption of technologyOptions) {
const matchingProficiency = techProficiencies.find(
proficiency => proficiency === techOption.value
);
if (!matchingProficiency) {
newTechProficiencies.push({
language: techOption.value,
});
}
}

console.log(newTechProficiencies);