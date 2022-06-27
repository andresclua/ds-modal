// // import JSUTIL from '@andresclua/jsutil/src/js_helper';
// // class Modal{
// //     constructor(config){
// //         this
// //         this.modal = document.querySelectorAll('[data-ds-element="modal"]');
// //         this.JSUTIL = new JSUTIL();
// //         // this.events();
// //     }
// //     events(){ 
// //         this.modal.forEach(element => {
// //             console.log('no va')
// //             if(element.getAttribute('data-onload')=='true'){
// //                 var collapseArg = {

// //                     /*
// //                     * targetID // Name of the Modal - usually ID // id="modal-1"
// //                     * targetClass Name of the class in order to activate the modal|| ex: "b--modal-X--is-active"
// //                     */
// //                     targetID: element.getAttribute('data-target'),
// //                     targetClass : element.getAttribute('data-target-class'),

// //                     /*
// //                     * objectId // Modal trigger element  
// //                     */
// //                     objectId : element,

// //                     // backdrop
// //                     backdropClass : element.getAttribute('data-backdrop'),

// //                 };
// //                 this.openModal(collapseArg);
// //             }
// //             element.addEventListener('click', event => {
// //                 event.preventDefault(); 
// //                 var collapseArg = {

// //                     /*
// //                     * targetID // Name of the Modal - usually ID // id="modal-1"
// //                     * targetClass Name of the class in order to activate the modal|| ex: "b--modal-X--is-active"
// //                     */
// //                     targetID: element.getAttribute('data-target'),
// //                     targetClass : element.getAttribute('data-target-class'),

// //                     /*
// //                     * objectId // Modal trigger element  
// //                     */
// //                     objectId : element,

// //                     // backdrop
// //                     backdropClass : element.getAttribute('data-backdrop'),

// //                 };
// //                 /* @ NEED TO VALIDATE ARGUMENTS AT SOME POINT */
// //                 this.openModal(collapseArg);
// //                 this.closeModal(collapseArg);
// //             })
// //         })
// //     }
// //     /*
// //      * targetID
// //      * targetClass
// //      * objectTrigger
// //      */
// //     openModal(payload){
// //         //apply class to modal


// //         //create Backdrop div with class
// //         var div = document.createElement('div');
// //         div.className = payload.backdropClass;
// //         document.body.appendChild(div);

// //         setTimeout(()=>{
// //             this.JSUTIL.toggleClass(document.querySelector(payload.targetID),payload.targetClass);
// //         },600)
// //     }
// //     // Closes Modal
// //     closeModal(payload){
// //         // close modal on X
// //         var closeBtn = document.querySelectorAll('[data-dismiss]');
// //         closeBtn.forEach(element => {
// //             element.addEventListener('click', event => {
// //                 event.preventDefault(); 
// //                 this.JSUTIL.removeClass(document.querySelector(payload.targetID),payload.targetClass);
// //                 setTimeout(()=>{
// //                     this.removeBackdrop(payload);
// //                 },600)
// //             });
// //         });

// //         // close modal on Bakcdrop Click
// //         var backdrop = document.querySelectorAll("." + payload.backdropClass);
// //         backdrop.forEach(element => {
// //             element.addEventListener('click', event => {
// //                 event.preventDefault(); 
// //                 this.JSUTIL.removeClass(document.querySelector(payload.targetID),payload.targetClass);
// //                 setTimeout(()=>{
// //                     this.removeBackdrop(payload);
// //                 },600)

// //             });
// //         });
// //     }
// //     // removes backdrop HTML
// //     removeBackdrop (payload){
// //         if(document.querySelector('.' + payload.backdropClass)){
// //             var div = document.querySelector('.' + payload.backdropClass);
// //             div.parentNode.removeChild(div);
// //         }
// //     }

// // }
// // export default Modal;   

// import JSUTIL from '@andresclua/jsutil/src/js_helper';
// class Modal{
//     constructor(config){
//         this.config = config
//         this.modal = document.querySelectorAll('[tf-ds-element="modal"]');
//         this.JSUTIL = new JSUTIL();
//         this.events();
//     }
//     events(){ 
//         this.pepe = 3;
//         this.modal.forEach(element => {
//             element.addEventListener('click', event => {
//                 this.modalArgs = {
//                     modalActiveClass : this.config.modalActiveClass,
//                     backdrop : this.config.backdrop,
//                     backdropActiveClass:this.config.backdropActiveClass,
//                     target: element.getAttribute('tf-ds-modal-target')
//                 };
//                 this.openModal(this.modalArgs)
//                 this.closeModal(this.modalArgs)
//             })

//         })
//     }
//     async openModal(payload){
//         // Create Divs with Backdrop & animate it
//         var div = document.createElement('div');
//         div.className = payload.backdrop;
//         document.body.appendChild(div);
//         await this.tf_sto(300)
//         this.JSUTIL.toggleClass(document.querySelector(`.${payload.backdrop}`),payload.backdropActiveClass);

//         // Show modal
//         await this.tf_sto(300)
//         this.JSUTIL.addClass(document.querySelector(`${payload.target}`),payload.modalActiveClass);
//     }
//     closeModal(payload){
//         console.log(payload)
//     }
//     async  tf_sto(time){
//         return new Promise((resolve,reject)=>{
//             if(isNaN(time))
//                 reject( new Error ('is not a number') )
//             else
//                 setTimeout(resolve,time)    
//         });
//     }
// }
// export default Modal;   

import JSUTIL from '@andresclua/jsutil/src/js_helper';
class Modal {
    constructor(config) {
        this.backdrop = config.backdrop;
        this.backdropActiveClass = config.backdropActiveClass;
        this.modal = config.modal;
        this.modalActiveClass = config.modalActiveClass;
        this.time = parseInt(config.transitionTime)
        this.JSUTIL = new JSUTIL();
        this.init()
        this.events()
    }
    init() {
        // empty for now
    }
    events() {

        document.querySelectorAll("[tf-ds-modal-target='modal-1']").forEach((element) => {
            element.addEventListener('click', event => this.showModal(element));
        })
        document.querySelectorAll("[tf-ds-modal-close='modal-1']").forEach((element) => {
            element.addEventListener('click', event => this.hideModal(element));
        })
    }
    async hideModal(element){
        // Start Modal
        await this.tf_sto(this.time)
        this.JSUTIL.removeClass(document.querySelector(`.${this.modal}`), this.modalActiveClass);
        // End Modal

        // Backdrop
        await this.tf_sto(this.time);
        this.JSUTIL.removeClass(document.querySelector(`.${this.backdrop}`), this.backdropActiveClass);
        await this.tf_sto(this.time);

        if (document.querySelector(`.${this.backdrop}`)) {
            var backdropHTML = document.querySelector(`.${this.backdrop}`);
            backdropHTML.parentNode.removeChild(backdropHTML);
        }
        // End Backdrop
    }
    async showModal(element) {

        // Backdrop
        var backdropHTML = document.createElement('div');
        backdropHTML.className = this.backdrop;
        document.body.appendChild(backdropHTML);
        await this.tf_sto(this.time);
        this.JSUTIL.toggleClass(document.querySelector(`.${this.backdrop}`), this.backdropActiveClass);

        await this.tf_sto(300);
        this.JSUTIL.toggleClass(document.getElementById(element.getAttribute('tf-ds-modal-target')), this.modalActiveClass)
    }

    async tf_sto(time) {
        return new Promise((resolve, reject) => {
            if (isNaN(time))
                reject(new Error('is not a number'))
            else
                setTimeout(resolve, time)
        });
    }
    async show() {
        // Backdrop
        var backdropHTML = document.createElement('div');
        backdropHTML.className = this.backdrop;
        document.body.appendChild(backdropHTML);
        await this.tf_sto(this.time);
        this.JSUTIL.toggleClass(document.querySelector(`.${this.backdrop}`), this.backdropActiveClass);

        await this.tf_sto(this.time)
        this.JSUTIL.addClass(document.querySelector(`.${this.modal}`), this.modalActiveClass);

    }
    async hide() {
        // Start Modal
        await this.tf_sto(this.time)
        this.JSUTIL.removeClass(document.querySelector(`.${this.modal}`), this.modalActiveClass);
        // End Modal

        // Backdrop
        await this.tf_sto(this.time);
        this.JSUTIL.removeClass(document.querySelector(`.${this.backdrop}`), this.backdropActiveClass);
        await this.tf_sto(this.time);

        if (document.querySelector(`.${this.backdrop}`)) {
            var backdropHTML = document.querySelector(`.${this.backdrop}`);
            backdropHTML.parentNode.removeChild(backdropHTML);
        }
        // End Backdrop
    }
}
export default Modal;