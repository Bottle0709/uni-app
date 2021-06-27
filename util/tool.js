import { compressAccurately } from 'image-conversion';
export function compressImg(file) {
  return new Promise(resolve => {
    compressAccurately(file, 170).then(res => {
      // The res in the promise is a compressed Blob type (which can be treated as a File type) file;
      const currentFile = new File([res], file.name, { type: file.type });
      resolve(currentFile);
    });
  });
}