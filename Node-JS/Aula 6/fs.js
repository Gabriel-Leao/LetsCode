const fs = require('fs')

const main = async () => {
  const list = await fs.promises.readdir('./docs')
  const textFiles = list.filter(file => file.split('.').pop() === 'txt')

  const files = textFiles.map(async (file) => {
    return (await fs.promises.readFile(`./docs/${file}`)).toString()
  })

  const _files = await Promise.all(files)

  return await fs.promises.writeFile('./docs/allfiles.txt', JSON.stringify(_files), 'utf-8')
}

main()