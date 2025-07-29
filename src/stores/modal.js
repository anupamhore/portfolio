import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpen: false,
  }),
  getters: {
    hiddenClass(state) {
      return state.isOpen ? '' : 'hidden'
    },
  },
})

// export const useModalStore = defineStore("modal", {
//     state: () => ({
//         isOpen: false,
//         component: null,
//         props: {},
//     }),
//     actions: {
//         openModal(component, props = {}) {
//             this.isOpen = true;
//             this.component = component;
//             this.props = props;
//         },
//         closeModal() {
//             this.isOpen = false;
//             this.component = null;
//             this.props = {};
//         },
//     },
//     getters: {
//         isModalOpen: (state) => state.isOpen,
//         modalComponent: (state) => state.component,
//         modalProps: (state) => state.props,
//     },
//     persist: true, // Enable persistence
//     persist: {
//         storage: localStorage, // Use localStorage for persistence
//         paths: ["isOpen", "component", "props"], // Specify which state properties to persist
//     },
// });
