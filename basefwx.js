class basefwx{
    static pb512encode(string, code) {
        function mdcode(string) {
            let st = String(string);
            let binaryvals = Array.from(st, char => char.charCodeAt(0)).map(byte => byte.toString(2));
            let end = "";
            for (let bb of binaryvals) {
                end += String(parseInt(bb,2)).length + String(parseInt(bb,2));
            }
            return String(end);
        }

        function mainenc(string) {
            return String(BigInt(mdcode(string)) - BigInt(mdcode(code))).replace("-", "0");
        }

        return mainenc(string);
    };
    static pb512decode(string, code) {
        function mcode(strin) {
            let end = strin;
            let eand = Array.from(end);
            let finish = "";
            let ht = 0;
            let len = 0;
            let oht = 0;
            for (let een of eand) {
                ht += 1;
                if (een !== "") {
                    if (ht === 1) {
                        len = parseInt(een);
                        finish += String.fromCharCode(parseInt(end.slice(ht, len + ht)));
                        oht = ht;
                    }
                    if (ht !== 1 && len + oht + 1 === ht) {
                        len = parseInt(een);
                        finish += String.fromCharCode(parseInt(end.slice(ht, len + ht)));
                        oht = ht;
                    }
                }
            }
            return finish;
        }

        function mdcode(string) {
            let st = String(string);
            let binaryvals = Array.from(st, char => char.charCodeAt(0)).map(byte => byte.toString(2));
            let end = "";
            for (let bb of binaryvals) {
                end += String(String(parseInt(bb,2)).length + String(parseInt(bb, 2)));
            }
            return String(end);
        }

        function maindc(string) {
            let result = "";
            let string2 = string;
            if (string2[0] === "0") {
                string2 = "-" + string2.slice(1,string2.length);
            }
            result = mcode(String(BigInt(string2) + BigInt(mdcode(code))));
            return result;
        }
        return maindc(string);
    };
    static b512encode(string){
        let mapping = new Map();
        mapping = [['a','e*1'],['b','&hl'],['c','*&Gs'],['d','*YHA'],['e','K5a{'],['f','(*HGA('],['g','*&GD2'],['h','+*jsGA'],['i','(aj*a'],['j','g%'],['k','&G{A'],['l','/IHa'],['m','*(oa'],['n','*KA^7'],['o',')i*8A'],['p','*H)PA-G'],['q','*YFSA'],['r','O.-P[A'],['s','{9sl'],['t','*(HARR'],['u','O&iA6u'],['v','n):u'],['w','&^F*GV'],['x','(*HskW'],['y','{JM'],['z','J.!dA'],['A','(&Tav'],['B','t5'],['C','*TGA3'],['D','*GABD'],['E','{A'],['F','pW'],['G','*UAK('],['H','&GH+'],['I','&AN)'],['J','L&VA'],['K','(HAF5'],['L','&F*Va'],['M','^&FVB'],['N','(*HSA$i'],['O','*IHda&gT'],['P','&*FAl'],['Q',')P{A]'],['R','*Ha$g'],['S','G)OA&'],['T','|QG6'],['U','Qd&^'],['V','hA'],['W','8h^va'],['X','_9xlA'],['Y','*J'],['Z','*;pY&'],[' ','R7a{'],['-','}F'],['=','OJ)_A'],['+','}J'],['&','%A'],['%','y{A3s'],['#','.aGa!'],['@','l@'],['!','/A'],['^','OIp*a'],['*','(U'],['(','I*Ua]'],[')','{0aD'],['{','Av['],['}','9j'],['[','[a)'],[']','*&GBA'],['|',']Vc!A'],['/',')*HND_'],['~','(&*GHA'],[';','K}N=O'],[':','YGOI&Ah'],['?','Oa'],['.','8y)a'],['>','0{a9'],['<','v6Yha'],[',','I8ys#'],['0','(HPA7'],['1','}v'],['2','*HAl%'],['3','_)JHS'],['4','IG(A'],['5','(*GFD'],['6','IU(&V'],['7','(JH*G'],['8','*GHBA'],['9','U&G*C'],['\"','I(a-s']]
        function code(string) {
            for (let i = 0; i < mapping.length; i++) {
                string = string.replaceAll(mapping[i][0], mapping[i][1])
            }
            return string;
        }
        return code(string)}
    static b512decode(string){
        const mapping = {"I(a-s":"\"","U&G*C":"9","*GHBA":"8","(JH*G":"7","IU(&V":"6","(*GFD":"5","IG(A":"4","_)JHS":"3","*HAl%":"2","}v":"1","(HPA7":"0","I8ys#":",","v6Yha":"<","0{a9":">","8y)a":".","Oa":"?","YGOI&Ah":":","K}N=O":";","(&*GHA":"~",")*HND_":"/","]Vc!A":"|","*&GBA":"]","[a)":"[","9j":"}","Av[":"{","{0aD":")","I*Ua]":"(","(U":"*","OIp*a":"^","/A":"!","l@":"@",".aGa!":"#","y{A3s":"%","%A":"&","}J":"+","OJ)_A":"=","}F":"-","R7a{":" ","*;pY&":"Z","*J":"Y","_9xlA":"X","8h^va":"W","hA":"V","Qd&^":"U","|QG6":"T","G)OA&":"S","*Ha$g":"R",")P{A]":"Q","&*FAl":"P","*IHda&gT":"O","(*HSA$i":"N","^&FVB":"M","&F*Va":"L","(HAF5":"K","L&VA":"J","&AN)":"I","&GH+":"H","*UAK(":"G","pW":"F","{A":"E","*GABD":"D","*TGA3":"C","t5":"B","(&Tav":"A","J.!dA":"z","{JM":"y","(*HskW":"x","&^F*GV":"w","n):u":"v","O&iA6u":"u","*(HARR":"t","{9sl":"s","O.-P[A":"r","*YFSA":"q","*H)PA-G":"p",")i*8A":"o","*KA^7":"n","*(oa":"m","/IHa":"l","&G{A":"k","g%":"j","(aj*a":"i","+*jsGA":"h","*&GD2":"g","(*HGA(":"f","K5a{":"e","*YHA":"d","*&Gs":"c","&hl":"b","e*1":"a"};

        function decode(sttr) {
            for (const [key, value] of Object.entries(mapping)) {
                sttr = sttr.replaceAll(key, value);
            }
            return sttr;
        }

        return decode(string);
    }
    static complex(string,code) {
        let e=basefwx.pb512encode(string,code)
        function out(int){
            let e=int
        let ng= ""
        let ng2= ""
        for (let i in e){
            if (i%2===0){
                ng+=e[i]}
        }
        for (let i in e){
            if (i%2!==0){
                ng2+=e[i]}
        }
        return ng+"87828310"+ng2
        }


        return btoa(basefwx.b512encode(btoa(String(out(e))),btoa(code)))

    }
    static decomplex(string,code) {
        function redo(str){

            let ng=str.split("87828310")[0]
            let ng2=str.split("87828310")[1]
            let png=0
            let png2=0
            var g =""
            for (let i in String(ng)+String(ng2)){
                if (i%2===0){
                    g+=ng[png]
                    png+=1}else{

                    g+=ng2[png2]
                    png2+=1}}
            return g}
        return basefwx.pb512decode(redo(atob(basefwx.b512decode(atob(string),btoa(code)))),code)
    }
}
