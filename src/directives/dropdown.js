import Load from '../util/load'

export default {
    bind (el, binding, vnode) {
        Load.call(vnode.context, () => {
            const params = binding.expression || {}

            el.setAttribute('data-activates', binding.arg)
            $(el).dropdown(params)
        })
    }
}
