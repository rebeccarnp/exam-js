const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']
for (const i = 0; i < tab.length; i++) {
  console.log(tab[i] + ', lenght:' + [i].length)
}
for (let elem of tab) {
  console.log(elem + ', length:' + elem.length)
}
tab.forEach((elem) => {
  console.log(elem + ', length:' + elem.length)
}