function zfactorSECCO(ch4 , c2h6 , c3h8 , ic4h10 , nc4h10 , ic5h12 , nc5h12 , c6h14 , c7h16 , c8h18 , n2 , CO2 , O2 ){
    //Concentraciones molares * Z / suma de concentraciones molares (100)
    return (ch4 * 0.998 + c2h6 * 0.9915 + c3h8 * 0.9821 + ic4h10 * 0.968 + nc4h10 * 0.965 + ic5h12 * 0.948 + nc5h12 * 0.937 + c6h14 * 0.913 + c7h16 * 0.866 + c8h18 * 0.802 + n2 * 0.9997 + CO2 * 0.9944) / (ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + ic5h12 + nc5h12 + c6h14 + c7h16 + c8h18n + n2 + CO2 + O2);
}
function MWSECCO(ch4 , c2h6 , c3h8 , ic4h10 , nc4h10 , ic5h12 , nc5h12 , c6h14 , c7h16 , c8h18 , n2 , CO2 , O2 ){
    //Concentraciones molares * PMi / suma de concentraciones molares (100)
    return (ch4 * 16.0428 + c2h6 * 30.0696 + c3h8 * 44.0965 + ic4h10 * 58.1234 + nc4h10 * 58.1234 + ic5h12 * 72.1503 + nc5h12 * 72.1503 + c6h14 * 86.1772 + c7h16 * 100.204 + c8h18 * 114.231 + n2 * 28.0135 + CO2 * 44.0098) / (ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + ic5h12 + nc5h12 + c6h14 + c7h16 + c8h18n + n2 + CO2 + O2);
}
function DensitySECCO(ch4 , c2h6 , c3h8 , ic4h10 , nc4h10 , ic5h12 , nc5h12 , c6h14 , c7h16 , c8h18 , n2 , CO2 , O2 ){
    let zfactorSECCO = (ch4 * 0.998 + c2h6 * 0.9915 + c3h8 * 0.9821 + ic4h10 * 0.968 + nc4h10 * 0.965 + ic5h12 * 0.948 + nc5h12 * 0.937 + c6h14 * 0.913 + c7h16 * 0.866 + c8h18 * 0.802 + n2 * 0.9997 + CO2 * 0.9944) / (ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + ic5h12 + nc5h12 + c6h14 + c7h16 + c8h18n + n2 + CO2 + O2);
    let MWSECCO  = (ch4 * 16.0428 + c2h6 * 30.0696 + c3h8 * 44.0965 + ic4h10 * 58.1234 + nc4h10 * 58.1234 + ic5h12 * 72.1503 + nc5h12 * 72.1503 + c6h14 * 86.1772 + c7h16 * 100.204 + c8h18 * 114.231 + n2 * 28.0135 + CO2 * 44.0098) / (ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + ic5h12 + nc5h12 + c6h14 + c7h16 + c8h18n + n2 + CO2 + O2)
    return MWSECCO * 0.044614779 / zfactorSECCO;
}
function PCISECCO(ch4 , c2h6 , c3h8 , ic4h10 , nc4h10 , ic5h12 , nc5h12 , c6h14 , c7h16 , c8h18 , n2 , CO2 , O2 ){
    let zfactorSECCO = (ch4 * 0.998 + c2h6 * 0.9915 + c3h8 * 0.9821 + ic4h10 * 0.968 + nc4h10 * 0.965 + ic5h12 * 0.948 + nc5h12 * 0.937 + c6h14 * 0.913 + c7h16 * 0.866 + c8h18 * 0.802 + n2 * 0.9997 + CO2 * 0.9944) / (ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + ic5h12 + nc5h12 + c6h14 + c7h16 + c8h18n + n2 + CO2 + O2); 
    let MWSECCO = (ch4 * 16.0428 + c2h6 * 30.0696 + c3h8 * 44.0965 + ic4h10 * 58.1234 + nc4h10 * 58.1234 + ic5h12 * 72.1503 + nc5h12 * 72.1503 + c6h14 * 86.1772 + c7h16 * 100.204 + c8h18 * 114.231 + n2 * 28.0135 + CO2 * 44.0098) / (ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + ic5h12 + nc5h12 + c6h14 + c7h16 + c8h18n + n2 + CO2 + O2); 
    let DensitySECCO = MWSECCO * 0.044614779 / zfactorSECCO;
    //Concentraciones molares * PCIi / suma de concentraciones molares (100)
    return (ch4 * 802.69 + c2h6 * 1428.84 + c3h8 * 2043.37 + ic4h10 * 2648.42 + nc4h10 * 2657.6 + ic5h12 * 3265.08 + nc5h12 * 3272 + c6h14 * 3887.21 + c7h16 * 4501.72 + c8h18 * 5116.11) / (ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + ic5h12 + nc5h12 + c6h14 + c7h16 + c8h18n + n2 + CO2 + O2) / MWSECCO * DensitySECCO;
}
function AFSECCO(ch4 , c2h6 , c3h8 , ic4h10 , nc4h10 , ic5h12 , nc5h12 , c6h14 , c7h16 , c8h18 , n2 , CO2 , O2 ){
    return (ch4 * 9.5484 + c2h6 * 16.71 + c3h8 * 23.871 + ic4h10 * 31.032 + nc4h10 * 31.032 + ic5h12 * 38.193 + nc5h12 * 38.193 + c6h14 * 45.355 + c7h16 * 52.516 + c8h18 * 59.677) / (ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + ic5h12 + nc5h12 + c6h14 + c7h16 + c8h18n + n2 + CO2 + O2);
}
function HuSECCO(ch4 , c2h6 , c3h8 , ic4h10 , nc4h10 , ic5h12 , nc5h12 , c6h14 , c7h16 , c8h18 , n2 , CO2 , O2 ){
    let zfactorSECCO  = (ch4 * 0.998 + c2h6 * 0.9915 + c3h8 * 0.9821 + ic4h10 * 0.968 + nc4h10 * 0.965 + ic5h12 * 0.948 + nc5h12 * 0.937 + c6h14 * 0.913 + c7h16 * 0.866 + c8h18 * 0.802 + n2 * 0.9997 + CO2 * 0.9944) / (ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + ic5h12 + nc5h12 + c6h14 + c7h16 + c8h18n + n2 + CO2 + O2);
    let MWSECCO  = (ch4 * 16.0428 + c2h6 * 30.0696 + c3h8 * 44.0965 + ic4h10 * 58.1234 + nc4h10 * 58.1234 + ic5h12 * 72.1503 + nc5h12 * 72.1503 + c6h14 * 86.1772 + c7h16 * 100.204 + c8h18 * 114.231 + n2 * 28.0135 + CO2 * 44.0098) / (ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + ic5h12 + nc5h12 + c6h14 + c7h16 + c8h18n + n2 + CO2 + O2);
    let DensitySECCO  = MWSECCO * 0.044614779 / zfactorSECCO;
    //Concentraciones molares * PCIi / suma de concentraciones molares (100)
    return (ch4 * 802.69 + c2h6 * 1428.84 + c3h8 * 2043.37 + ic4h10 * 2648.42 + nc4h10 * 2657.6 + ic5h12 * 3265.08 + nc5h12 * 3272 + c6h14 * 3887.21 + c7h16 * 4501.72 + c8h18 * 5116.11) / (ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + ic5h12 + nc5h12 + c6h14 + c7h16 + c8h18n + n2 + CO2 + O2) / MWSECCO * DensitySECCO * 0.277777777778;
}
function HuSSECCO(ch4 , c2h6 , c3h8 , ic4h10 , nc4h10 , ic5h12 , nc5h12 , c6h14 , c7h16 , c8h18 , n2 , CO2 , O2 ){
    let zfactorSECCO = (ch4 * 0.998 + c2h6 * 0.9915 + c3h8 * 0.9821 + ic4h10 * 0.968 + nc4h10 * 0.965 + ic5h12 * 0.948 + nc5h12 * 0.937 + c6h14 * 0.913 + c7h16 * 0.866 + c8h18 * 0.802 + n2 * 0.9997 + CO2 * 0.9944) / (ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + ic5h12 + nc5h12 + c6h14 + c7h16 + c8h18n + n2 + CO2 + O2);
    let MWSECCO  = (ch4 * 16.0428 + c2h6 * 30.0696 + c3h8 * 44.0965 + ic4h10 * 58.1234 + nc4h10 * 58.1234 + ic5h12 * 72.1503 + nc5h12 * 72.1503 + c6h14 * 86.1772 + c7h16 * 100.204 + c8h18 * 114.231 + n2 * 28.0135 + CO2 * 44.0098) / (ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + ic5h12 + nc5h12 + c6h14 + c7h16 + c8h18n + n2 + CO2 + O2);
    let DensitySECCO = MWSECCO * 0.044614779 / zfactorSECCO;
    //Concentraciones molares * PCSi / suma de concentraciones molares (100)
    return (ch4 * 891.56 + c2h6 * 1562.14 + c3h8 * 2221.1 + ic4h10 * 2870.58 + nc4h10 * 2879.76 + ic5h12 * 3531.68 + nc5h12 * 3538.6 + c6h14 * 4198.24 + c7h16 * 4857.18 + c8h18 * 5516.01) / (ch4 + c2h6 + c3h8 + ic4h10 + nc4h10 + ic5h12 + nc5h12 + c6h14 + c7h16 + c8h18n + n2 + CO2 + O2) / MWSECCO * DensitySECCO * 0.277777777778;
}