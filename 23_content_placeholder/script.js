const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML =
        '<img src="https://www.siteware.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/04/investimento-tecnologia-empresas.jpg.webp" alt="" />'
    title.innerHTML = 'Programção Front-End'
    excerpt.innerHTML =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    profile_img.innerHTML =
        '<img src="https://avatars.githubusercontent.com/u/78602574?s=400&u=5f5274839d952c6297f6973661a4c4458887e08d&v=4" alt="" />'
    name.innerHTML = 'Renato Sampaio'
    date.innerHTML = 'May 17, 2022'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}