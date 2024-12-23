import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

// Geometry
// const vertices = new Float32Array([0, 0, 0, 0, 2, 0, 2, 0, 0]);

// const bufferAttribute = new THREE.BufferAttribute(vertices, 3);

// const geometry = new THREE.BufferGeometry();

// geometry.setAttribute('position', bufferAttribute);

// const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

const geometry = new THREE.SphereGeometry(1, 32, 23);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 'green',
  wireframe: true,
});
const cubeMaterial1 = new THREE.MeshBasicMaterial({
  color: 'red',
  wireframe: true,
});

const cubeMesh = new THREE.Mesh(geometry, cubeMaterial);
// const cubeMesh1 = new THREE.Mesh(cubeGeometry, cubeMaterial1);

scene.add(cubeMesh);
// scene.add(cubeMesh1);

// cubeMesh.position.y = 1;
// cubeMesh1.position.x = 2;
// cubeMesh1.scale.set(1, 1, 1);

// cubeMesh1.rotation.z = Math.PI * 0.5;

const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  200
);

// const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 200);

camera.position.z = 5;

scene.add(camera);

// Rendering
const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio));

// controls animations
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

// making the project responsive to LL SCREENS
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const clock = new THREE.Clock();
let previousTime = 0;
// making the project to rotate
const renderLoop = () => {
  renderer.render(scene, camera);
  // const currentTime = clock.getElapsedTime();
  // const delta = currentTime - previousTime;
  // previousTime = currentTime;

  // cubeMesh1.rotation.y = THREE.MathUtils.degToRad(120);

  // Math.sin(currentTime);

  // cubeMesh1.scale.x = Math.sin(currentTime) + 1;

  controls.update();

  window.requestAnimationFrame(renderLoop);
};
renderLoop();

export default App;
