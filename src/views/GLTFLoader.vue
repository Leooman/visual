<template>
    <div id="container" ref="container"></div>
</template>

<script>
  import * as THREE from 'three'
  import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
  export default {
    name: 'GLTFLoader',
    data () {
      return {
        camera: null,
        scene: null,
        renderer: null,

        gltfLoader:null,
        treeData:null,
        animationMixer:null,
        walkAction:null,
        clock:null,
      }
    },
    methods: {
      async init() {
        const container = this.$refs.container
        const width = container.clientWidth;
        const height = container.clientHeight;
        this.clock = new THREE.Clock()
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
        this.camera.position.set(10,10,10);
        this.camera.lookAt(this.scene.position);//new THREE.Vector3(0, 0, 0)

        // let axesHelper = new THREE.AxesHelper( 50 );
				// this.scene.add( axesHelper );

        this.gltfLoader = new GLTFLoader()
        this.animationMixer = new THREE.AnimationMixer(this.scene)
        this.gltfLoader.load(
            `${process.env.BASE_URL}Soldier.glb`,
            gltf => {
                gltf.scene.name = 'Soldier'
                gltf.scene.rotation.y = -Math.PI/4*5
                gltf.scene.scale.set(5,3,5)
                this.scene.add(gltf.scene)
                this.treeData = [gltf.scene]
                this.scene.add(new THREE.AmbientLight(0xffffff, 2))

                // this.controls.target.set(0, 0, 0)
                const animationClip = gltf.animations.find(
                    animationClip => animationClip.name === 'Run'
                )
                this.walkAction = this.animationMixer.clipAction(
                    animationClip
                )
                this.walkAction.play()
            }
        )

        this.renderer = new THREE.WebGLRenderer({ antialias: true,alpha:true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(width, height);
        this.renderer.setClearAlpha(0.8)
        container.appendChild(this.renderer.domElement);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)

        window.addEventListener("resize", this.onWindowResize, false);
      },
      animate(){
        this.animationMixer.update(this.clock.getDelta())
        requestAnimationFrame(this.animate)
        this.renderer.render(this.scene, this.camera);
      },
      onWindowResize() {
        const width = this.$refs.container.clientWidth;
        const height = this.$refs.container.clientHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
      },
    },
    mounted () {
      this.init()
      this.animate()
    }
  }
</script>
<style scoped>
  #container {
    height: 100%;
  }
</style>
