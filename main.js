import * as THREE from "three";

// we need three things: scene, camera and renderer, so that we can render the scene with camera
// for creating the scene
const scene = new THREE.Scene(); //using for creating the new object
// for createing the camera
const camera = new THREE.PerspectiveCamera(
  60, //fov (field of view)
  //   passing the aspect ratio of camera
  window.innerWidth / window.innerHeight,
  //   near cliping  value
  0.1,
  //   far cliping value
  1000
);
// for render the
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// for the html page rendering
document.body.appendChild(renderer.domElement);
window.addEventListener("resize", () => {
  const width = innerWidth;
  const height = innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
// const textureLoader = new THREE.TextureLoader();

// const texture = new THREE.TextureLoader.load("./image/image.jpg");
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
