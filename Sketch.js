let Background;
let ch4 = 0.01;
let c2h6 = 0;
let c2h4 = 0;
let c3h8 = 0;
let ic4h10 = 0;
let nc4h10 = 0;
let c5h12 = 0;
let c6h14 = 0;
let c7h16 = 0;
let c2h2 = 0;
let h2 = 0;
let co = 0;
let CO2 = 0;
let n2 = 0;
let O2 = 0;
let h2o = 0; 
let Results = {
    air2fuel: 0,
    Density : 0,
    CalorificValue : 0,
    MethaneNumber : 0,
    SumOfComponents : 1,
}
function preload(){
    Background = loadImage('Background.png');
}
function setup(){
    createCanvas(488, 258);
    CreateDOMs();
}
function draw(){
    image(Background,0,0);
    FromDOMsToX();
    text(Results.SumOfComponents.toFixed(2),195,250);
    text(Results.air2fuel.toFixed(2) + ' [l/l]',390,68);
    text(Results.Density.toFixed(1) + ' [g/Nm3]',390,100);
    text(Results.CalorificValue.toFixed(2) + ' [kWh/Nm3]',390,131);
    text(Results.MethaneNumber.toFixed(1) + ' []',390,161);
}
function FromDOMsToX(){
    ch4=UpdateComponent(inpCH4);
    c2h6=UpdateComponent(inpC2H6);
    c3h8=UpdateComponent(inpC3H8);
    ic4h10=UpdateComponent(inpISOC4H10);
    nc4h10=UpdateComponent(inpNC4H10);
    c5h12=UpdateComponent(inpC5H12);
    c6h14=UpdateComponent(inpC6H14);
    c7h16=UpdateComponent(inpC7H16);
    c2h2=UpdateComponent(inpC2H2);
    c2h4=UpdateComponent(inpC2H4);
    h2=UpdateComponent(inpH2);
    co=UpdateComponent(inpCO);
    CO2=UpdateComponent(inpCO2);
    n2=UpdateComponent(inpN2);
    O2=UpdateComponent(inpO2);
    h2o=UpdateComponent(inpH2O);
    Results.SumOfComponents=ch4+c2h6+c3h8+ic4h10+nc4h10+c5h12+c6h14+c7h16+c2h2+h2+co+CO2+n2+O2+h2o;
    function UpdateComponent(ComponentOfDOM){
        if(ComponentOfDOM.value()==''){
            return 0;
        }
        return parseFloat(ComponentOfDOM.value());
    }
}
function FromXToDOMs(){
    inpCH4.value((ch4*100).toString());
    inpC2H6.value((c2h6*100).toString());
    inpC3H8.value((c3h8*100).toString());
    inpISOC4H10.value((ic4h10*100).toString());
    inpNC4H10.value((nc4h10*100).toString());
    inpC5H12.value((c5h12*100).toString());
    inpC6H14.value((c6h14*100).toString());
    inpC7H16.value((c7h16*100).toString());    
    inpC2H2.value((c2h2*100).toString());
    inpC2H4.value((c2h4*100).toString());
    inpH2.value((h2*100).toString());
    inpCO.value((co*100).toString());
    inpCO2.value((CO2*100).toString());
    inpN2.value((n2*100).toString());
    inpO2.value((O2*100).toString());
    inpH2O.value((h2o*100).toString());
}
function CreateDOMs(){
    let InitialX=80;
    let InitialY=45;
    let SeparationX=0;
    let SeparationY=23.75;
    let SizeOfInput=[31,13];
    let aux=[InitialX,InitialY];
 
    inpCH4=createInput((ch4*100).toString());
    inpCH4.size(SizeOfInput[0],SizeOfInput[1]);
    inpCH4.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;

    inpC2H6=createInput((c2h6*100).toString());
    inpC2H6.size(SizeOfInput[0],SizeOfInput[1]);
    inpC2H6.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;

    inpC3H8=createInput((c3h8*100).toString());
    inpC3H8.size(SizeOfInput[0],SizeOfInput[1]);
    inpC3H8.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;

    inpISOC4H10=createInput((ic4h10*100).toString());
    inpISOC4H10.size(SizeOfInput[0],SizeOfInput[1]);
    inpISOC4H10.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;

    inpNC4H10=createInput((nc4h10*100).toString());
    inpNC4H10.size(SizeOfInput[0],SizeOfInput[1]);
    inpNC4H10.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;

    inpC5H12=createInput((c5h12*100).toString());
    inpC5H12.size(SizeOfInput[0],SizeOfInput[1]);
    inpC5H12.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;

    inpC6H14=createInput((c6h14*100).toString());
    inpC6H14.size(SizeOfInput[0],SizeOfInput[1]);
    inpC6H14.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;

    inpC7H16=createInput((c7h16*100).toString());
    inpC7H16.size(SizeOfInput[0],SizeOfInput[1]);
    inpC7H16.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
    
    InitialX=195;
    InitialY=45;
    aux=[InitialX,InitialY];

    inpC2H2=createInput((c2h2*100).toString());
    inpC2H2.size(SizeOfInput[0],SizeOfInput[1]);
    inpC2H2.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
    
    inpC2H4=createInput((h2*100).toString());
    inpC2H4.size(SizeOfInput[0],SizeOfInput[1]);
    inpC2H4.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
    
    inpH2=createInput((h2*100).toString());
    inpH2.size(SizeOfInput[0],SizeOfInput[1]);
    inpH2.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
    
    inpCO=createInput((co*100).toString());
    inpCO.size(SizeOfInput[0],SizeOfInput[1]);
    inpCO.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
    
    inpCO2=createInput((CO2*100).toString());
    inpCO2.size(SizeOfInput[0],SizeOfInput[1]);
    inpCO2.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
    
    inpN2=createInput((n2*100).toString());
    inpN2.size(SizeOfInput[0],SizeOfInput[1]);
    inpN2.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
    
    inpO2=createInput((O2*100).toString());
    inpO2.size(SizeOfInput[0],SizeOfInput[1]);
    inpO2.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
    
    inpH2O=createInput((h2o*100).toString());
    inpH2O.size(SizeOfInput[0],SizeOfInput[1]);
    inpH2O.position(aux[0],aux[1]);
    aux[0]=aux[0]+SeparationX;
    aux[1]=aux[1]+SeparationY;
}
function mousePressed(){
    if(mouseX > 307 && mouseX < 482 &&
       mouseY > 215 && mouseY < 251){
        //Normalization
        ch4/=Results.SumOfComponents;
        c2h6/=Results.SumOfComponents;
        c2h4/=Results.SumOfComponents;
        c3h8/=Results.SumOfComponents;
        ic4h10/=Results.SumOfComponents;
        nc4h10/=Results.SumOfComponents;
        c5h12/=Results.SumOfComponents;
        c6h14/=Results.SumOfComponents;
        c7h16/=Results.SumOfComponents;
        c2h2/=Results.SumOfComponents;
        h2/=Results.SumOfComponents;
        co/=Results.SumOfComponents;
        CO2/=Results.SumOfComponents;
        n2/=Results.SumOfComponents;
        O2/=Results.SumOfComponents;
        h2o/=Results.SumOfComponents;
        //
        Results.air2fuel = airfuel(ch4,c2h6,c3h8,ic4h10,nc4h10,c5h12,c6h14,c7h16,c2h2,c2h4,h2,co,CO2,n2,O2,h2o);
        Results.Density = density(ch4,c2h6,c3h8,ic4h10,nc4h10,c5h12,c6h14,c7h16,c2h2,c2h4,h2,co,CO2,n2,O2,h2o);
        Results.CalorificValue = CalorificValue(ch4,c2h6,c3h8,ic4h10,nc4h10,c5h12,c6h14,c7h16,c2h2,c2h4,h2,co,CO2,n2,O2,h2o);
        Results.MethaneNumber = MethaneNumberAVLSECCO(ch4,c2h6 + c2h2 + c2h4, c3h8, ic4h10+nc4h10+c5h12+c6h14+c7h16);
        FromXToDOMs();
    }
    if(mouseX > 307 && mouseX < 482 &&
        mouseY > 178 && mouseY < 211){
        //Normalization
        ch4=0.01;
        c2h6=0;
        c2h4=0;
        c3h8=0;
        ic4h10=0;
        nc4h10=0;
        c5h12=0;
        c6h14=0;
        c7h16=0;
        c2h2=0;
        h2=0;
        co=0;
        CO2=0;
        n2=0;
        O2=0;
        h2o=0;
        FromXToDOMs();
    } 
}
function airfuel(ch4 , c2h6 , c3h8 , ic4h10 , nc4h10 , c5h12 , c6h14 , c7h16 , c2h2 , C2H4 , h2 , co , CO2 , n2 , O2 , h2o ){
    let sum = ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + c5h12 + c6h14 + c7h16 + c2h2 + C2H4 + h2 + co + CO2 + n2 + O2 + h2o;
    ch4 = ch4 / sum * 100;
    c2h6 = c2h6 / sum * 100;
    c3h8 = c3h8 / sum * 100;
    ic4h10 = ic4h10 / sum * 100;
    nc4h10 = nc4h10 / sum * 100;
    c5h12 = c5h12 / sum * 100;
    c6h14 = c6h14 / sum * 100;
    c7h16 = c7h16 / sum * 100;
    c2h2 = c2h2 / sum * 100;
    C2H4 = C2H4 / sum * 100;
    h2 = h2 / sum * 100;
    co = co / sum * 100;
    CO2 = CO2 / sum * 100;
    n2 = n2 / sum * 100;
    O2 = O2 / sum * 100;
    h2o = h2o / sum * 100;
    return ch4 * 0.0956 + c2h6 * 0.1686 + c3h8 * 0.2437 + ic4h10 * 0.3232 + nc4h10 * 0.3785 + c5h12 * 0.3785 + c6h14 * 0.4494 + c7h16 * 0.5222 + c2h2 * 0.119 + C2H4 * 0.1442 + h2 * 0.0238 + co * 0.0239 + CO2 * 0 + n2 * 0 + O2 * 0 + h2o * 0;
}
function density(ch4 , c2h6 , c3h8 , ic4h10 , nc4h10 , c5h12 , c6h14 , c7h16 , c2h2 , C2H4 , h2 , co , CO2 , n2 , O2 , h2o ){
    let sum = ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + c5h12 + c6h14 + c7h16 + c2h2 + C2H4 + h2 + co + CO2 + n2 + O2 + h2o;
    ch4 = ch4 / sum * 100;
    c2h6 = c2h6 / sum * 100;
    c3h8 = c3h8 / sum * 100;
    ic4h10 = ic4h10 / sum * 100;
    nc4h10 = nc4h10 / sum * 100;
    c5h12 = c5h12 / sum * 100;
    c6h14 = c6h14 / sum * 100;
    c7h16 = c7h16 / sum * 100;
    c2h2 = c2h2 / sum * 100;
    C2H4 = C2H4 / sum * 100;
    h2 = h2 / sum * 100;
    co = co / sum * 100;
    CO2 = CO2 / sum * 100;
    n2 = n2 / sum * 100;
    O2 = O2 / sum * 100;
    h2o = h2o / sum * 100;
    return ch4 * 7.175 + c2h6 * 13.55 + c3h8 * 20.11 + ic4h10 * 26.89 + nc4h10 * 27.01 + c5h12 * 34.54 + c6h14 * 42.04 + c7h16 * 44.6 + c2h2 * 11.71 + C2H4 * 12.611 + h2 * 8.99 + co * 12.505 + CO2 * 19.768 + n2 * 12.504 + O2 * 14.289 + h2o * 8.54;
}
function CalorificValue(ch4,c2h6,c3h8,ic4h10,nc4h10,c5h12,c6h14,c7h16,c2h2,C2H4,h2,co,CO2,n2,O2,h2o){
    let sum = ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + c5h12 + c6h14 + c7h16 + c2h2 + C2H4 + h2 + co + CO2 + n2 + O2 + h2o;
    ch4 = ch4 / sum * 100;
    c2h6 = c2h6 / sum * 100;
    c3h8 = c3h8 / sum * 100;
    ic4h10 = ic4h10 / sum * 100;
    nc4h10 = nc4h10 / sum * 100;
    c5h12 = c5h12 / sum * 100;
    c6h14 = c6h14 / sum * 100;
    c7h16 = c7h16 / sum * 100;
    c2h2 = c2h2 / sum * 100;
    C2H4 = C2H4 / sum * 100;
    h2 = h2 / sum * 100;
    co = co / sum * 100;
    CO2 = CO2 / sum * 100;
    n2 = n2 / sum * 100;
    O2 = O2 / sum * 100;
    h2o = h2o / sum * 100;
    return (ch4 * 9.97 + c2h6 * 17.87 + c3h8 * 25.89 + ic4h10 * 34.05 + nc4h10 * 34.3 + c5h12 * 43.51 + c6h14 * 52.67 + c7h16 * 54.67 + c2h2 * 15.36 + C2H4 * 16.52 + h2 * 2.99 + co * 3.51 + CO2 * 0 + n2 * 0 + O2 * 0 + h2o * 0) / (ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + c5h12 + c6h14 + c7h16 + c2h2 + h2 + co + CO2 + n2 + O2 + h2o)
}