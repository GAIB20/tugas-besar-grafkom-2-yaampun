// export default class HollowHandler{

//     constructor(props, model){
//         this.model = model;
//         this.props = props;
//         // this.factory = null;
//         this.eventListener()
//     }

//     setModel(model){
//         this.model = model;
//     }
    
//     eventListener(){
//         if(this.model == null) return;
//         this.translationHandler();
//         this.rotationHandler();
//         this.scaleHandler();

//     }

//     translationHandler(){
//         let {document} = this.props;

//         //handle translation X slider
//         let translationX = document.getElementById("translation-x-slider");
//         translationX.oninput = () => {
//             let translationXLabel = document.getElementById("translation-x-slider-value");
//             translationXLabel.innerHTML = translationX.value;
//             this.model.transform.translation.x = translationX.value;
//         }

//         //handle translation Y slider
//         let translationY = document.getElementById("translation-y-slider");
//         translationY.oninput = () => {
//             let translationYLabel = document.getElementById("translation-y-slider-value");
//             translationYLabel.innerHTML = translationY.value;
//             this.model.transform.translation.y = translationY.value;
//         }

//         //handle translation Z slider
//         let translationZ = document.getElementById("translation-z-slider");
//         translationZ.oninput = () => {
//             let translationZLabel = document.getElementById("translation-z-slider-value");
//             translationZLabel.innerHTML = translationZ.value;
//             this.model.transform.translation.z = translationZ.value;
//         }

//         //set current translation values
//         let translationXLabel = document.getElementById("translation-x-slider-value");
//         translationXLabel.innerHTML = this.model.transform.translation.x;

//         let translationYLabel = document.getElementById("translation-y-slider-value");
//         translationYLabel.innerHTML = this.model.transform.translation.y;

//         let translationZLabel = document.getElementById("translation-z-slider-value");
//         translationZLabel.innerHTML = this.model.transform.translation.z;
        
//     }

//     rotationHandler(){
//         let {document} = this.props;

//         //handle rotation X slider
//         let rotationX = document.getElementById("rotation-x-slider");
//         rotationX.oninput = () => {
//             let rotationXLabel = document.getElementById("rotation-x-slider-value");
//             rotationXLabel.innerHTML = rotationX.value;
//             this.model.transform.rotation.x = rotationX.value;
//         }

//         //handle rotation Y slider
//         let rotationY = document.getElementById("rotation-y-slider");
//         rotationY.oninput = () => {
//             let rotationYLabel = document.getElementById("rotation-y-slider-value");
//             rotationYLabel.innerHTML = rotationY.value;
//             this.model.transform.rotation.y = rotationY.value;
//         }

//         //handle rotation Z slider
//         let rotationZ = document.getElementById("rotation-z-slider");
//         rotationZ.oninput = () => {
//             let rotationZLabel = document.getElementById("rotation-z-slider-value");
//             rotationZLabel.innerHTML = rotationZ.value;
//             this.model.transform.rotation.z = rotationZ.value;
//         }

//         //set current rotation values
//         let rotationXLabel = document.getElementById("rotation-x-slider-value");
//         rotationXLabel.innerHTML = this.model.transform.rotation.x;

//         let rotationYLabel = document.getElementById("rotation-y-slider-value");
//         rotationYLabel.innerHTML = this.model.transform.rotation.y;

//         let rotationZLabel = document.getElementById("rotation-z-slider-value");
//         rotationZLabel.innerHTML = this.model.transform.rotation.z;
//     }

//     scaleHandler(){
//         let {document} = this.props;

//         //handle scale X slider
//         let scaleX = document.getElementById("scalation-x-slider");
//         scaleX.oninput = () => {
//             let scaleXLabel = document.getElementById("scalation-x-slider-value");
//             scaleXLabel.innerHTML = scaleX.value/10;
//             this.model.transform.scale.x = scaleX.value/10;
//         }

//         //handle scale Y slider
//         let scaleY = document.getElementById("scalation-y-slider");
//         scaleY.oninput = () => {
//             let scaleYLabel = document.getElementById("scalation-y-slider-value");
//             scaleYLabel.innerHTML = scaleY.value/10;
//             this.model.transform.scale.y = scaleY.value/10;
//         }

//         //handle scale Z slider
//         let scaleZ = document.getElementById("scalation-y-slider");
//         scaleZ.oninput = () => {
//             let scaleZLabel = document.getElementById("scalation-y-slider-value");
//             scaleZLabel.innerHTML = scaleZ.value/10;
//             this.model.transform.scale.z = scaleZ.value/10;
//         }

//         //set current scale values
//         let scaleXLabel = document.getElementById("scalation-x-slider-value");
//         scaleXLabel.innerHTML = this.model.transform.scale.x;

//         let scaleYLabel = document.getElementById("scalation-y-slider-value");
//         scaleYLabel.innerHTML = this.model.transform.scale.y;

//         let scaleZLabel = document.getElementById("scalation-y-slider-value");
//         scaleZLabel.innerHTML = this.model.transform.scale.z;
//     }
// }