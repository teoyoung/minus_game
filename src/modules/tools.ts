
export class Tools {

    public getJSON(url:string): any {
        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", url, false);
        rawFile.send();
        if (rawFile.status != 200) {
            console.log('getJSON ERROR')
        } else {
            let json = rawFile.responseText
            return JSON.parse(json);
        }
    }

    public readMap(el: string): string {
        let calc: string  = el.charAt(0);
        if(calc === '+'){
            return 'plus';
        }
        if(calc === '-'){
            return 'minus';
        }
        switch (el) {
            case '#':
                return 'wall';
                break;  
            case 'x':
                return 'finish';
                break;       
            default:
                return 'bg';
                break;
        }
        return
    }

}