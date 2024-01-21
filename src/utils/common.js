// 保存文件
export const saveBlobFile = (blobStream, fileName) => {
  const blob = new Blob([blobStream])
  const fileUrl = window.URL.createObjectURL(blob)
  // 如果是ie
  if ('msSaveOrOpenBlob' in navigator) {
    window.navigator.msSaveOrOpenBlob(blob, fileName)
  } else {
    // 其他浏览器用<a>模拟点击
    // 创建一个 <a> 元素
    const link = document.createElement('a')
    // 创建一个对象 URL，将 Blob 对象链接到 <a> 元素上
    link.href = fileUrl
    // 将 <a> 元素添加到 DOM 中
    link.setAttribute('download', fileName)
    // 模拟点击下载链接
    link.click()
  }
  // 从 DOM 中移除 <a> 元素
  window.URL.revokeObjectURL(fileUrl)
}

// 自定义参数版 保存文件方法
export const saveBlobFileCus = (blob, fileName) => {
  // 创建一个 <a> 元素
  const downloadLink = document.createElement('a');
  // 创建一个对象 URL，将 Blob 对象链接到 <a> 元素上
  downloadLink.href = URL.createObjectURL(blob);
  // 设置文件名（你可以根据需要更改文件名）
  downloadLink.download = fileName;
  // 将 <a> 元素添加到 DOM 中
  document.body.appendChild(downloadLink);
  // 模拟点击下载链接
  downloadLink.click();
  // 从 DOM 中移除 <a> 元素
  document.body.removeChild(downloadLink);
}