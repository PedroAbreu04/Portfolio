window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // Linha Alvo
  const targetLine = scrollY + innerHeight / 2

  // Verificar se a seção passou da linha

  // Topo da seção
  const sectionTop = section.offsetTop
  // Altura da seção
  const sectionHeight = section.offsetHeight

  // O topo da seção chegou na linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // Verificar se a base está abaixo da linha alvo

  // Fim da seção
  const sectionEndsAt = sectionTop + sectionHeight

  // O final da seção passou da linha alvi
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // Limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

}

function showNavOnScroll(){
  if(scrollY > 0)
  navigation.classList.add('scroll')
  else{
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  if(scrollY > 400)
  backToTopButton.classList.add('show')
  else{
    backToTopButton.classList.remove('show')
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home, 
#home img,
 #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`);