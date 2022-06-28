
import Modal from './Modal';
class Page{
    constructor(){
        this.init()
    }
    init(){ 
        // const options = {
        //     modalActiveClass: 'b--modal-a--is-active',
        //     backdrop: 'b--modal-backdrop-a',
        //     backdropActiveClass: 'b--modal-backdrop-a--is-active',
        // };
        const modal = new Modal({
            backdrop: 'b--modal-backdrop-a',
            backdropActiveClass: 'b--modal-backdrop-a--is-active',
            modal:'b--modal-a',
            modalIdTarget : 'modal-1',
            modalActiveClass:'b--modal-a--is-active',
            transitionTime:2500
        });
        modal.show()
        setTimeout(()=>{
            modal.hide()
        },3000)
        // // document.querySelector("[tf-ds-element='modal']")
        // console.log(document.querySelector("[tf-ds-element='modal']"))

     


    }
}
export default Page;

new Page()
