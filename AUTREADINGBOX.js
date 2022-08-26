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
    Molar.ch4 = 0;
    Molar.c2h6 = 0;
    Molar.c2h4 = 0;
    Molar.c3h8 = 0;
    Molar.ic4h10 = 0;
    Molar.nc4h10 = 0;
    Molar.c5h12 = 0;
    Molar.c6h14 = 0;
    Molar.c7h16 = 0;
    Molar.c2h2 = 0;
    Molar.h2 = 0;
    Molar.co = 0;
    Molar.CO2 = 0;
    Molar.n2 = 0;
    Molar.O2 = 0;
    Molar.h2o = 0; 
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
            data[i][j] = data[i][j].replace(',', '.');
        }
    }
    if (NumberOfColumns != 2 && NumberOfRows !=2){console.log('More than 2 rows/columns detected')} //I need the labels and the rows. if there are more data something must go wrong.
    //Check if i need to transpose
    if (NumberOfColumns != 2){
        TransposeTheDataArray();
    }
    for(let i=0; i < NumberOfRows; i++){
        data[i][0] = data[i][0].toUpperCase();
        data[i][0] = data[i][0].replace('[', '');
        data[i][0] = data[i][0].replace(']', '');
        data[i][0] = data[i][0].replace('%', '');
        data[i][0] = data[i][0].replace('_', '');
        data[i][0] = data[i][0].replace('CROMA', '');
        data[i][0] = data[i][0].replace('_', '');
        data[i][0] = data[i][0].replace('Á', 'A');
        data[i][0] = data[i][0].replace('É', 'E');
        data[i][0] = data[i][0].replace('Í', 'I');
        data[i][0] = data[i][0].replace('Ó', 'O');
        data[i][0] = data[i][0].replace('Ú', 'U');

        // 1 - Metano
        if(data[i][0] == 'C1'){Molar.ch4+=parseFloat(data[i][1])}
        if(data[i][0] == 'CH4'){Molar.ch4+=parseFloat(data[i][1])}
        if(data[i][0] == 'METHANE'){Molar.ch4+=parseFloat(data[i][1])}
        if(data[i][0] == 'METANO'){Molar.ch4+=parseFloat(data[i][1])}
        // 2 - Etano
        if(data[i][0] == 'C2'){Molar.c2h6+=parseFloat(data[i][1])}
        if(data[i][0] == 'C2H6'){Molar.c2h6+=parseFloat(data[i][1])}
        if(data[i][0] == 'ETHANE'){Molar.c2h6+=parseFloat(data[i][1])}
        if(data[i][0] == 'ETANO'){Molar.c2h6+=parseFloat(data[i][1])}
        // 3 - Propano
        if(data[i][0] == 'C3'){Molar.c3h8+=parseFloat(data[i][1])}
        if(data[i][0] == 'C3H8'){Molar.c3h8+=parseFloat(data[i][1])}
        if(data[i][0] == 'PROPANE'){Molar.c3h8+=parseFloat(data[i][1])}
        if(data[i][0] == 'PROPANO'){Molar.c3h8+=parseFloat(data[i][1])}
        // 4 - Iso Butano
        if(data[i][0] == 'IC4'){Molar.ic4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'IC4H10'){Molar.ic4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'C4H10'){Molar.ic4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'ISOBUTANE'){Molar.ic4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'ISOBUTANO'){Molar.ic4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'IBUTANE'){Molar.ic4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'IBUTANO'){Molar.ic4h10+=parseFloat(data[i][1])}
        // 5 - Nor Butano
        if(data[i][0] == 'NC4'){Molar.nc4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'C4'){Molar.nc4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'NC4H10'){Molar.nc4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'NORMALBUTANE'){Molar.nc4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'NORMAL BUTANE'){Molar.nc4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'BUTANE'){Molar.nc4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'BUTANO'){Molar.nc4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'NBUTANE'){Molar.nc4h10+=parseFloat(data[i][1])}
        if(data[i][0] == 'NBUTANO'){Molar.nc4h10+=parseFloat(data[i][1])}
        // 6 - Pentano
        if(data[i][0] == 'IC5'){Molar.c5h12+=parseFloat(data[i][1])}
        if(data[i][0] == 'NC5'){Molar.c5h12+=parseFloat(data[i][1])}
        if(data[i][0] == 'C5'){Molar.c5h12+=parseFloat(data[i][1])}
        if(data[i][0] == 'IC5H12'){Molar.c5h12+=parseFloat(data[i][1])}
        if(data[i][0] == 'C5H12'){Molar.c5h12+=parseFloat(data[i][1])}
        if(data[i][0] == 'NC5H12'){Molar.c5h12+=parseFloat(data[i][1])}
        if(data[i][0] == 'ISOPENTANE'){Molar.c5h12+=parseFloat(data[i][1])}
        if(data[i][0] == 'NORMALPENTANE'){Molar.c5h12+=parseFloat(data[i][1])}
        if(data[i][0] == 'NPENTANE'){Molar.c5h12+=parseFloat(data[i][1])}
        if(data[i][0] == 'PENTANE'){Molar.c5h12+=parseFloat(data[i][1])}
        if(data[i][0] == 'ISOPENTANO'){Molar.c5h12+=parseFloat(data[i][1])}
        if(data[i][0] == 'NORMALPENTANO'){Molar.c5h12+=parseFloat(data[i][1])}
        if(data[i][0] == 'NPENTANO'){Molar.c5h12+=parseFloat(data[i][1])}
        if(data[i][0] == 'PENTANO'){Molar.c5h12+=parseFloat(data[i][1])}
        // 7 - Hexano
        if(data[i][0] == 'NC6'){Molar.c6h14+=parseFloat(data[i][1])}
        if(data[i][0] == 'C6'){Molar.c6h14+=parseFloat(data[i][1])}
        if(data[i][0] == 'C6H14'){Molar.c6h14+=parseFloat(data[i][1])}
        if(data[i][0] == 'HEXANE'){Molar.c6h14+=parseFloat(data[i][1])}
        if(data[i][0] == 'HEXANO'){Molar.c6h14+=parseFloat(data[i][1])}
        // 8 - Heptano
        if(data[i][0] == 'NC7'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C7'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C7H16'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'HEPTANE'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'HEPTANO'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'NC8'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C8'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C8H18'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C8H18+'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'OCTANE'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'OCTANO'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'NC9'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C9'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C9H20'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C9H20+'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'NONANE'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'NONANO'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'NC10'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C10'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C10H22'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'C10H22+'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'DECANE'){Molar.c7h16+=parseFloat(data[i][1])}
        if(data[i][0] == 'DECANO'){Molar.c7h16+=parseFloat(data[i][1])}
        // 9 - Acetylene
        if(data[i][0] == 'ACETYLENE'){Molar.c2h4+=parseFloat(data[i][1])}
        if(data[i][0] == 'ACETILENO'){Molar.c2h4+=parseFloat(data[i][1])}
        if(data[i][0] == 'C2H4'){Molar.c2h4+=parseFloat(data[i][1])}
        // 10 - Etileno
        if(data[i][0] == 'ETHYLENE'){Molar.c2h4+=parseFloat(data[i][1])}
        if(data[i][0] == 'ETILENO'){Molar.c2h4+=parseFloat(data[i][1])}
        if(data[i][0] == 'C2H4'){Molar.c2h4+=parseFloat(data[i][1])}
        // 11 - Hidrogeno
        if(data[i][0] == 'H2'){Molar.h2+=parseFloat(data[i][1])}
        if(data[i][0] == 'H'){Molar.h2+=parseFloat(data[i][1])}
        if(data[i][0] == 'HYDROGEN'){Molar.h2+=parseFloat(data[i][1])}
        if(data[i][0] == 'HIDROGENO'){Molar.h2+=parseFloat(data[i][1])}
        // 12 - Monoxido de Carbono
        if(data[i][0] == 'CO'){Molar.co+=parseFloat(data[i][1])}
        if(data[i][0] == 'CARBON MONOXIDE'){Molar.co+=parseFloat(data[i][1])}
        if(data[i][0] == 'MONOXIDO DE CARBONO'){Molar.co+=parseFloat(data[i][1])}
        // 13 - Dioxido de Carbono
        if(data[i][0] == 'CO2'){Molar.CO2+=parseFloat(data[i][1])}
        if(data[i][0] == 'CARBON DIOXIDE'){Molar.CO2+=parseFloat(data[i][1])}
        if(data[i][0] == 'DIOXIDO DE CARBONO'){Molar.CO2+=parseFloat(data[i][1])}
        if(data[i][0] == 'CARBONIC ACID'){Molar.CO2+=parseFloat(data[i][1])}
        // 14 - Nitrogeno
        if(data[i][0] == "N2"){Molar.n2+=parseFloat(data[i][1])}
        if(data[i][0] == "NITROGEN"){Molar.n2+=parseFloat(data[i][1])}
        if(data[i][0] == "NITROGENO"){Molar.n2+=parseFloat(data[i][1])}
        if(data[i][0] == "N"){Molar.n2+=parseFloat(data[i][1])}
        // 15 - Oxígeno
        if(data[i][0] == 'O2'){Molar.O2+=parseFloat(data[i][1])}
        if(data[i][0] == 'O'){Molar.O2+=parseFloat(data[i][1])}
        if(data[i][0] == 'OXYGEN'){Molar.O2+=parseFloat(data[i][1])}
        if(data[i][0] == 'OXIGENO'){Molar.O2+=parseFloat(data[i][1])}
        // 16 - Agua
        if(data[i][0] == 'H2O'){Molar.h2o+=parseFloat(data[i][1])}
        if(data[i][0] == 'OH2'){Molar.h2o+=parseFloat(data[i][1])}
        if(data[i][0] == 'WATER'){Molar.h2o+=parseFloat(data[i][1])}
        if(data[i][0] == 'AGUA'){Molar.h2o+=parseFloat(data[i][1])}
    }
    InputFromXLS.elt.value = '';
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
