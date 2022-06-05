import fishGame from '@/components/fishGame.vue'
const components = [fishGame]
const install = function(App, options) {
    components.forEach(component => {
        App.component(component.name, component)
    })
}

export default { install }