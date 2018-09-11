/**
 * 
 * 
 * @param {any} imagePixels input matrix of pixels.
 * @returns {Array<Object>} right side 90' degree roatation of image.
 * @description rotateImage function will return 90' rotation image.
*/
const rotateImage = (imagePixels) => {
  // input length is 4...
  let reverseCols = [];
  let finalResults = [];
  let counter = 0;
  for(let j = -1 ; j < counter ; j++){
    for(let i in imagePixels){
      reverseCols.push(imagePixels[i][counter]);
    }
    if(counter <= imagePixels.length - 1) {
      finalResults.push(reverseCols);
      reverseCols = [];
      counter++;
    }
  }
  return finalResults;
}

module.exports = rotateImage;