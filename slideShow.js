const images = [
  {
    id: '1',
    url: 'https://lojasaraivanew.vtexassets.com/assets/vtex.file-manager-graphql/images/31c7929f-61b2-4013-80f3-ea118ea053ba___ce1869b3285378bd3ff065eaee6cf085.png'
  },
  {
    id: '2',
    url: 'https://lojasaraivanew.vtexassets.com/assets/vtex.file-manager-graphql/images/c4c180fc-d8c6-4e1f-8cb9-c5d2358abc25___2673ef185d3c965ee1a2bc39dd827426.png'
  },
  {
    id: '3',
    url: 'https://lojasaraivanew.vtexassets.com/assets/vtex.file-manager-graphql/images/62f79e97-17bb-4e69-9608-6bc580f9d1b5___f15e558a8490f37be090baadcfb49f93.png'
  },
  {
    id: '4',
    url: 'https://lojasaraivanew.vtexassets.com/assets/vtex.file-manager-graphql/images/b2337f85-4129-4114-bfdd-67faaf823ea1___2228c2317756af36a5f93ad9b49eebdf.png'
  },
  {
    id: '5',
    url: 'https://lojasaraivanew.vtexassets.com/assets/vtex.file-manager-graphql/images/d2951a33-6fe5-42ff-8215-6bd317f7c508___59c9ed7fd0c623c0d914eb3685c1a30b.png'
  },
  {
    id: '6',
    url: 'https://lojasaraivanew.vtexassets.com/assets/vtex.file-manager-graphql/images/8313bf8b-5113-4c6f-942d-78b75d47861e___e0fd6d711a26ffc24a4f990d1e8dbc99.png'
  }
]

const containerItems = document.querySelector('#container-items')

const loadImages = (images, container) => {
  images.forEach(image => {
    container.innerHTML += `
          <div class='item'>
              <img src='${image.url}'
          </div>
      `
  })
}

loadImages(images, containerItems)

let items = document.querySelectorAll('.item')

const previous = () => {
  containerItems.appendChild(items[0])
  items = document.querySelectorAll('.item')
}

const next = () => {
  const lastItem = items[items.length - 1]
  containerItems.insertBefore(lastItem, items[0])
  items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)
