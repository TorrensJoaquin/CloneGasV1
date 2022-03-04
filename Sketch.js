let Background;
let x = Array(15).fill(0);
let SumOfComponents = 100;
function preload(){
    Background = loadImage('Background.png');
}
function setup(){
    createCanvas(488, 291);
    CreateDOMs();
}
function draw() {
    image(Background,0,0);
    FromDOMsToX();
    text(SumOfComponents.toFixed(2),195,250);
}
function FromDOMsToX(){
    x[0]=UpdateComponent(inpCH4);
    x[1]=UpdateComponent(inpC2H6);
    x[2]=UpdateComponent(inpC3H8);
    x[3]=UpdateComponent(inpISOC4H10);
    x[4]=UpdateComponent(inpNC4H10);
    x[5]=UpdateComponent(inpC5H12);
    x[6]=UpdateComponent(inpC6H14);
    x[7]=UpdateComponent(inpC7H16);
    x[8]=UpdateComponent(inpC2H2);
    x[9]=UpdateComponent(inpC2H4);
    x[10]=UpdateComponent(inpH2);
    x[11]=UpdateComponent(inpCO);
    x[12]=UpdateComponent(inpCO2);
    x[13]=UpdateComponent(inpN2);
    x[14]=UpdateComponent(inpO2);
    x[15]=UpdateComponent(inpH2O);
    //Normalization
    SumOfComponents=0;
    for(let i=1; i < 16; i++){
        SumOfComponents+=x[i];
    }
    for(let i=1; i < 16; i++){
        x[i]=x[i]/SumOfComponents;
    }
    function UpdateComponent(ComponentOfDOM){
        if(ComponentOfDOM.value()==''){
            return 0;
        }
        return parseFloat(ComponentOfDOM.value());
    }
}
function CreateDOMs(){
    let InitialX=80;
    let InitialY=45;
    let SeparationX=0;
    let SeparationY=23.75;
    let SizeOfInput=[31,13];
    let aux=[InitialX,InitialY];

    inpCH4=createInput((x[0]*100).toString());
    inpCH4.size(SizeOfInput[0],SizeOfInput[1]);
    inpCH4.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;

    inpC2H6=createInput((x[1]*100).toString());
    inpC2H6.size(SizeOfInput[0],SizeOfInput[1]);
    inpC2H6.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;

    inpC3H8=createInput((x[2]*100).toString());
    inpC3H8.size(SizeOfInput[0],SizeOfInput[1]);
    inpC3H8.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;

    inpISOC4H10=createInput((x[2]*100).toString());
    inpISOC4H10.size(SizeOfInput[0],SizeOfInput[1]);
    inpISOC4H10.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;

    inpNC4H10=createInput((x[3]*100).toString());
    inpNC4H10.size(SizeOfInput[0],SizeOfInput[1]);
    inpNC4H10.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;

    inpC5H12=createInput((x[4]*100).toString());
    inpC5H12.size(SizeOfInput[0],SizeOfInput[1]);
    inpC5H12.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;

    inpC6H14=createInput((x[5]*100).toString());
    inpC6H14.size(SizeOfInput[0],SizeOfInput[1]);
    inpC6H14.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;

    inpC7H16=createInput((x[6]*100).toString());
    inpC7H16.size(SizeOfInput[0],SizeOfInput[1]);
    inpC7H16.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
    
    InitialX=195;
    InitialY=45;
    aux=[InitialX,InitialY];

    inpC2H2=createInput((x[7]*100).toString());
    inpC2H2.size(SizeOfInput[0],SizeOfInput[1]);
    inpC2H2.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
    
    inpC2H4=createInput((x[8]*100).toString());
    inpC2H4.size(SizeOfInput[0],SizeOfInput[1]);
    inpC2H4.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
    
    inpH2=createInput((x[9]*100).toString());
    inpH2.size(SizeOfInput[0],SizeOfInput[1]);
    inpH2.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
    
    inpCO=createInput((x[10]*100).toString());
    inpCO.size(SizeOfInput[0],SizeOfInput[1]);
    inpCO.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
    
    inpCO2=createInput((x[11]*100).toString());
    inpCO2.size(SizeOfInput[0],SizeOfInput[1]);
    inpCO2.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
    
    inpN2=createInput((x[12]*100).toString());
    inpN2.size(SizeOfInput[0],SizeOfInput[1]);
    inpN2.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
    
    inpO2=createInput((x[13]*100).toString());
    inpO2.size(SizeOfInput[0],SizeOfInput[1]);
    inpO2.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
    
    inpH2O=createInput((x[14]*100).toString());
    inpH2O.size(SizeOfInput[0],SizeOfInput[1]);
    inpH2O.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
}