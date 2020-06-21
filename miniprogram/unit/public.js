function subjectSingle(se){
  //演员
  var nameList = ''
  for (let index of se.casts) {
    nameList += index.name + "/"
  }
  if (nameList != '') {
    nameList = nameList.substring(0, nameList.length - 1)
  }
  //类型
  var genresList = ''
  for (let index of se.genres) {
    genresList += index + "/"
  }
  if (genresList != '') {
    genresList = genresList.substring(0, genresList.length - 1)
  }
  var directors=''
  if (se.directors.length>0){
    directors=se.directors[0].name
  }
  let a = '导演：' + directors + "\n演员：" + nameList + '\n片长：' + se.durations[0] + '\n类型：' + genresList
  se.text = a;

}
function subject(sub){
  for (let index of sub) {
   subjectSingle(index)
  }
}
module.exports={
  subjectSingle: subjectSingle,
  subject: subject
}