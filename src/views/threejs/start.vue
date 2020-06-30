<template>
    <div id="container" ref="container"></div>
</template>

<script>
  import * as THREE from 'three'
  export default {
    name: 'start',
    data () {
      return {
        camera: null,
        scene: null,
        renderer: null,
        clock:null,
        cube:null
      }
    },
    methods: {
      init() {
        const container = this.$refs.container
        const width = container.clientWidth;
        const height = container.clientHeight;

        this.scene = new THREE.Scene();
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshNormalMaterial();
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);

        this.clock = new THREE.Clock();

        this.camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(width, height);

        container.appendChild(this.renderer.domElement);
        
        this.render()
      },
      render(){
        requestAnimationFrame(this.render);
        let delta = this.clock.getDelta();
        this.cube.rotation.x += 3.2 * delta;
        this.cube.rotation.y += 3.2 * delta;
        this.renderer.render(this.scene, this.camera);
      },
    },
    mounted () {
      this.init()
    }
  }
</script>
<style scoped>
  #container {
    height: 100%;
  }
</style>
