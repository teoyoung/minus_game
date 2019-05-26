export class EventsConvert {

    keyboard(e){
        return e.keyCode;
    }

    touch(e){        
        if(e.target){
            let target = e.target;
            let keyCode = target.getAttribute('keyCode');
            if(keyCode){
                return +target.getAttribute('keyCode');
            }
        }
    }

}