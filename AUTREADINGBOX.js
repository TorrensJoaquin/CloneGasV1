function CreateTheMagicBox(){
    InputFromXLS=select('#PasteXLS');
    InputFromXLS.input(InputIsActivated);
    InputFromXLS.position(525,60);
}
function InputIsActivated(){
    if(InputFromXLS.elt.value != ''){
        generateTable(InputFromXLS.elt.value);
    };
}
function generateTable(data) {
    ch4 = 0;
    c2h6 = 0;
    c2h4 = 0;
    c3h8 = 0;
    ic4h10 = 0;
    nc4h10 = 0;
    c5h12 = 0;
    c6h14 = 0;
    c7h16 = 0;
    c2h2 = 0;
    h2 = 0;
    co = 0;
    CO2 = 0;
    n2 = 0;
    O2 = 0;
    h2o = 0; 
    data = data.split("\n");
    let NumberOfRows = data.length;
    DeleteEmptySpaces();
    for(let i=0; i < NumberOfRows; i++){
        data[i] = data[i].split('\t');
    }
    let NumberOfColumns = data[0].length;
    for(let i=0; i < NumberOfRows; i++){
        for(let j=0; j < NumberOfColumns; j++){
            if(NumberOfColumns != data[i].length){console.log('Error reading the row/column '+ j + 1)}
            data[i][j] = data[i][j].replace(' ', ''); //Delete black spaces if presents.
        }
    }
    if (NumberOfColumns != 2 && NumberOfRows !=2){console.log('More than 2 rows/columns detected')} //I need the labels and the rows. if there are more data something must go wrong.
    //Check if i need to transpose
    if (NumberOfColumns != 2){
        TransposeTheDataArray();
    }
    for(let i=0; i < NumberOfRows; i++){
        data[i][0] = data[i][0].toUpperCase();
        data[i][0] = data[i][0].replace('PC', '');
        data[i][0] = data[i][0].replace('_', '');
        data[i][0] = data[i][0].replace('CROMA', '');
        data[i][0] = data[i][0].replace('_', '');
        data[i][0] = data[i][0].replace('Á', 'A');
        data[i][0] = data[i][0].replace('É', 'E');
        data[i][0] = data[i][0].replace('Í', 'I');
        data[i][0] = data[i][0].replace('Ó', 'O');
        data[i][0] = data[i][0].replace('Ú', 'U');

        // 1 - Metano
        if(data[i][0] == 'C1'){ch4+=parseFloat(data[i][1])}
        if(data[i][0] == 'CH4'){ch4+=parseFloat(data[i][1])}
        if(data[i][0] == 'METHANE'){ch4+=parseFloat(data[i][1])}
        if(data[i][0] == 'METANO'){ch4+=parseFloat(data[i][1])}
        // 2 - Etano
        if(data[i][0] == 'C2'){c2h6+=parseFloat(data[i][1])}
        if(data[i][0] == 'C2H6'){c2h6+=parseFloat(data[i][1])}
        if(data[i][0] == 'ETHANE'){c2h6+=parseFloat(data[i][1])}
        if(data[i][0] == 'ETANO'){c2h6+=parseFloat(data[i][1])}
        // 3 - Propano
        if(data[i][0] == 'C3'){c3h8+=parseFloat(data[i][1])}
        if(data[i][0] == 'C3H8'){c3h8+=parseFloat(data[i][1])}
        if(data[i][0] == 'PROPANE'){c3h8+=parseFloat(data[i][1])}
        if(data[i][0] == 'PROPANO'){c3h8+=parseFloat(data[i][1])}
        // 4 - Iso Butano
        if(data[i][0] == 'IC4'){ic4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'IC4H10'){ic4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'ISOBUTANE'){ic4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'ISOBUTANO'){ic4h10+=parseFloat(data[i][1])}
        // 5 - Nor Butano
        if(data[i][0] == 'NC4'){nc4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'C4'){nc4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'NC4H10'){nc4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'NORMALBUTANE'){nc4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'NORMAL BUTANE'){nc4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'BUTANE'){nc4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'BUTANO'){nc4h10+=parseFloat(data[i][1])}
        // 6 - Pentano
        if(data[i][0] == 'IC5'){c5h12+=parseFloat(data[i][1])}
        if(data[i][0] == 'IC5H12'){c5h12+=parseFloat(data[i][1])}
        if(data[i][0] == 'ISOPENTANE'){c5h12+=parseFloat(data[i][1])}
        if(data[i][0] == 'ISOPENTANO'){c5h12+=parseFloat(data[i][1])}
        // 7 - Hexano
        if(data[i][0] == 'NC6'){c6h14+=parseFloat(data[i][1])}
        if(data[i][0] == 'C6'){c6h14+=parseFloat(data[i][1])}
        if(data[i][0] == 'C6H14'){c6h14+=parseFloat(data[i][1])}
        if(data[i][0] == 'HEXANE'){c6h14+=parseFloat(data[i][1])}
        if(data[i][0] == 'HEXANO'){c6h14+=parseFloat(data[i][1])}
        // 8 - Heptano
        if(data[i][0] == 'NC7'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C7'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C7H16'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'HEPTANE'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'HEPTANO'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'NC8'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C8'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C8H18'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C8H18+'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'OCTANE'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'OCTANO'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'NC9'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C9'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C9H20'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C9H20+'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'NONANE'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'NONANO'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'NC10'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C10'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C10H22'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C10H22+'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'DECANE'){c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'DECANO'){c7h16+=parseFloat(data[i][1])}
        // 9 - Acetylene
        if(data[i][0] == 'ACETYLENE'){c2h4=parseFloat(data[i][1])}
        if(data[i][0] == 'ACETILENO'){c2h4=parseFloat(data[i][1])}
        if(data[i][0] == 'C2H4'){c2h4=parseFloat(data[i][1])}
        // 10 - Etileno
        if(data[i][0] == 'ETHYLENE'){c2h4+=parseFloat(data[i][1])}
        if(data[i][0] == 'ETILENO'){c2h4+=parseFloat(data[i][1])}
        if(data[i][0] == 'C2H4'){c2h4+=parseFloat(data[i][1])}
        // 11 - Hidrogeno
        if(data[i][0] == 'H2'){h2+=parseFloat(data[i][1])}
        if(data[i][0] == 'H'){h2+=parseFloat(data[i][1])}
        if(data[i][0] == 'HYDROGEN'){h2+=parseFloat(data[i][1])}
        if(data[i][0] == 'HIDROGENO'){h2+=parseFloat(data[i][1])}
        // 12 - Monoxido de Carbono
        if(data[i][0] == 'CO'){co+=parseFloat(data[i][1])}
        if(data[i][0] == 'CARBON MONOXIDE'){co+=parseFloat(data[i][1])}
        if(data[i][0] == 'MONOXIDO DE CARBONO'){co+=parseFloat(data[i][1])}
        // 13 - Dioxido de Carbono
        if(data[i][0] == 'CO2'){CO2+=parseFloat(data[i][1])}
        if(data[i][0] == 'CARBON DIOXIDE'){CO2+=parseFloat(data[i][1])}
        if(data[i][0] == 'DIOXIDO DE CARBONO'){CO2+=parseFloat(data[i][1])}
        if(data[i][0] == 'CARBONIC ACID'){CO2+=parseFloat(data[i][1])}
        // 14 - Nitrogeno
        if(data[i][0] == "N2"){n2+=parseFloat(data[i][1])}
        if(data[i][0] == "NITROGEN"){n2+=parseFloat(data[i][1])}
        if(data[i][0] == "NITROGENO"){n2+=parseFloat(data[i][1])}
        if(data[i][0] == "N"){n2+=parseFloat(data[i][1])}
        // 15 - Oxígeno
        if(data[i][0] == 'O2'){O2+=parseFloat(data[i][1])}
        if(data[i][0] == 'O'){O2+=parseFloat(data[i][1])}
        if(data[i][0] == 'OXYGEN'){O2+=parseFloat(data[i][1])}
        if(data[i][0] == 'OXIGENO'){O2+=parseFloat(data[i][1])}
        // 16 - Agua
        if(data[i][0] == 'H2O'){h2o+=parseFloat(data[i][1])}
        if(data[i][0] == 'OH2'){h2o+=parseFloat(data[i][1])}
        if(data[i][0] == 'WATER'){h2o+=parseFloat(data[i][1])}
        if(data[i][0] == 'AGUA'){h2o+=parseFloat(data[i][1])}
    }
    InputFromXLS.elt.value = '';
    //Normalization
    let SumOfComponents=ch4+c2h6+c2h4+c3h8+ic4h10+nc4h10+c5h12+c6h14+c7h16+c2h2+h2+co+CO2+n2+O2+h2o;
    if(SumOfComponents < 0.01){return}
    SumOfComponents = 1/SumOfComponents;
    if(ch4 > 0.0001){ch4 = ch4*SumOfComponents}
    if(c2h6 > 0.0001){c2h6 = c2h6*SumOfComponents}
    if(c3h8 > 0.0001){c3h8 = c3h8*SumOfComponents}
    if(ic4h10 > 0.0001){ic4h10 = ic4h10*SumOfComponents}
    if(nc4h10 > 0.0001){nc4h10 = nc4h10*SumOfComponents}
    if(c5h12 > 0.0001){c5h12 = c5h12*SumOfComponents}
    if(c6h14 > 0.0001){c6h14 = c6h14*SumOfComponents}
    if(c7h16 > 0.0001){c7h16 = c7h16*SumOfComponents}

    if(c2h2 > 0.0001){c2h2 = c2h2*SumOfComponents}
    if(c2h4 > 0.0001){c2h4 = c2h4*SumOfComponents}
    if(h2 > 0.0001){h2 = h2*SumOfComponents}
    if(co > 0.0001){co = co*SumOfComponents}
    if(CO2 > 0.0001){CO2 = CO2*SumOfComponents}
    if(n2 > 0.0001){n2 = n2*SumOfComponents}
    if(O2 > 0.0001){O2 = O2*SumOfComponents}
    if(h2o > 0.0001){h2o = h2o*SumOfComponents}
    FromXToDOMs();

    function TransposeTheDataArray(){
        let Auxiliary=Array(NumberOfColumns).fill(0);
        for(let i=0; i < NumberOfColumns; i++){
            Auxiliary[i]=Array(NumberOfRows).fill(0);
            for(let j=0; j < NumberOfRows; j++){
                Auxiliary[i][j]=data[j][i];
            }
        }
        data=Auxiliary;
        NumberOfRows=NumberOfColumns;
    }
    function DeleteEmptySpaces(){
        for(let i=0; i < NumberOfRows; i++){
            if(data[i] == ''){data.splice(i,i)}
        }
        NumberOfRows = data.length;
    }
}
let TextAreaBoxVariables={
    PossibleLabel:Array(64).fill(0),
    ColumnBoxLabels:Array(12).fill(0),
    ColumnBoxValues:Array(12).fill(0),
    RowBoxLabels:Array(8).fill(0),
    RowBoxValues:Array(8).fill(0),
}
function SetupTheTextAreaAnimation(){
    TextAreaBoxVariables.PossibleLabel[0]='C1';
    TextAreaBoxVariables.PossibleLabel[1]='CH4';
    TextAreaBoxVariables.PossibleLabel[2]='Methane'; 
    TextAreaBoxVariables.PossibleLabel[3]='N2';
    TextAreaBoxVariables.PossibleLabel[4]='Nitrogen';
    TextAreaBoxVariables.PossibleLabel[5]='N';
    TextAreaBoxVariables.PossibleLabel[6]='CO2';
    TextAreaBoxVariables.PossibleLabel[7]='C2';
    TextAreaBoxVariables.PossibleLabel[8]='C2H6';
    TextAreaBoxVariables.PossibleLabel[9]='ETHANE';
    TextAreaBoxVariables.PossibleLabel[10]='C3';
    TextAreaBoxVariables.PossibleLabel[11]='C3H8';
    TextAreaBoxVariables.PossibleLabel[12]='Propane';
    TextAreaBoxVariables.PossibleLabel[13]='IC4';
    TextAreaBoxVariables.PossibleLabel[14]='IC4H10';
    TextAreaBoxVariables.PossibleLabel[15]='NC4';
    TextAreaBoxVariables.PossibleLabel[16]='C4';
    TextAreaBoxVariables.PossibleLabel[17]='NC4H10';
    TextAreaBoxVariables.PossibleLabel[18]='BUTANE';
    TextAreaBoxVariables.PossibleLabel[19]='IC5';
    TextAreaBoxVariables.PossibleLabel[20]='IC5H12';
    TextAreaBoxVariables.PossibleLabel[21]='NC5';
    TextAreaBoxVariables.PossibleLabel[22]='C5';
    TextAreaBoxVariables.PossibleLabel[23]='NC5H12';
    TextAreaBoxVariables.PossibleLabel[24]='PENTANE';
    TextAreaBoxVariables.PossibleLabel[25]='NC6';
    TextAreaBoxVariables.PossibleLabel[26]='C6';
    TextAreaBoxVariables.PossibleLabel[27]='C6H14';
    TextAreaBoxVariables.PossibleLabel[28]='HEXANE';
    TextAreaBoxVariables.PossibleLabel[29]='NC7';
    TextAreaBoxVariables.PossibleLabel[30]='C7';
    TextAreaBoxVariables.PossibleLabel[31]='C7H16';
    TextAreaBoxVariables.PossibleLabel[32]='HEPTANE';
    TextAreaBoxVariables.PossibleLabel[33]='NC8';
    TextAreaBoxVariables.PossibleLabel[34]='C8';
    TextAreaBoxVariables.PossibleLabel[35]='C8H18';
    TextAreaBoxVariables.PossibleLabel[36]='C8H18+';
    TextAreaBoxVariables.PossibleLabel[37]='OCTANE';
    TextAreaBoxVariables.PossibleLabel[38]='NC9';
    TextAreaBoxVariables.PossibleLabel[39]='C9';
    TextAreaBoxVariables.PossibleLabel[40]='C9H20';
    TextAreaBoxVariables.PossibleLabel[41]='C9H20+';
    TextAreaBoxVariables.PossibleLabel[42]='NONANE';
    TextAreaBoxVariables.PossibleLabel[43]='NC10';
    TextAreaBoxVariables.PossibleLabel[44]='C10';
    TextAreaBoxVariables.PossibleLabel[45]='C10H22';
    TextAreaBoxVariables.PossibleLabel[46]='C10H22+';
    TextAreaBoxVariables.PossibleLabel[47]='DECANO';        
    TextAreaBoxVariables.PossibleLabel[48]='H2';
    TextAreaBoxVariables.PossibleLabel[49]='H';
    TextAreaBoxVariables.PossibleLabel[50]='Hydrogen';
    TextAreaBoxVariables.PossibleLabel[51]='O2';
    TextAreaBoxVariables.PossibleLabel[52]='O';
    TextAreaBoxVariables.PossibleLabel[53]='OXYGEN';
    TextAreaBoxVariables.PossibleLabel[54]='CO';
    TextAreaBoxVariables.PossibleLabel[55]='H2O';
    TextAreaBoxVariables.PossibleLabel[56]='OH2';
    TextAreaBoxVariables.PossibleLabel[57]='WATER';
    TextAreaBoxVariables.PossibleLabel[58]='H2S';
    TextAreaBoxVariables.PossibleLabel[59]='SH2';
    TextAreaBoxVariables.PossibleLabel[60]='HE';
    TextAreaBoxVariables.PossibleLabel[61]='HELIUM';
    TextAreaBoxVariables.PossibleLabel[62]='AR';
    TextAreaBoxVariables.PossibleLabel[63]='ARGON';
    RandomizeTheTextAreaAnimation();
    function RandomizeTheTextAreaAnimation(){
        let SizeOfPossibleLabel=TextAreaBoxVariables.PossibleLabel.length;
        let num
        for(i=0; i < 12; i++){
            num = int(random(0, SizeOfPossibleLabel));
            TextAreaBoxVariables.ColumnBoxLabels[i]=TextAreaBoxVariables.PossibleLabel[num];
            num = random(30, 90).toFixed(3);
            TextAreaBoxVariables.ColumnBoxValues[i]=num;
        }
        for(i=0; i < 8; i++){
            num = int(random(0, SizeOfPossibleLabel));
            TextAreaBoxVariables.RowBoxLabels[i]=TextAreaBoxVariables.PossibleLabel[num];
            num = random(30, 90).toFixed(3);
            TextAreaBoxVariables.RowBoxValues[i]=num;
        }
    }
}
