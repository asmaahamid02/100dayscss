const menu = document.querySelector('.menu')

const handleClick = () => {
  menu.classList.toggle('active')
  menu.classList.remove('initial')
}

menu.addEventListener('click', handleClick)
