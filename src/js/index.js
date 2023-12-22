import * as THREE from 'three'

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1, 1, 1)
const greenMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const redMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const blueMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff })
const greenCube = new THREE.Mesh(geometry, greenMaterial)

scene.add(greenCube)

const redCube = new THREE.Mesh(geometry, redMaterial)
const blueCube = new THREE.Mesh(geometry, blueMaterial)

redCube.position.x = -1
redCube.position.y = 1
blueCube.position.x = 1
blueCube.position.y = -1

scene.add(redCube)
scene.add(blueCube)

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({
  canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  renderer.render(scene, camera)
})

window.addEventListener('click', () => {
  
  // Move camera
  const position = camera.position.z < 2 ? 5 : camera.position.z-1
  camera.position.z = position

  camera.updateProjectionMatrix()
  renderer.render(scene, camera)
})