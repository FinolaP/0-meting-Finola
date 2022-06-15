export const state = () => ({
    messages: new Array()
   })

//state houdt dingen bij
export const mutations = {
    addMessage(state, newMessage) {
        state.messages.push(newMessage)
        }
}

export const actions = {
   }
   