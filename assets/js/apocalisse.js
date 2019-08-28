
////VARIABILI CONTENUTI RANDOM
var pickedProtoClade;
var pickedClade;
var pickedFenotipoUno;
var pickedFenotipoDue;
var pickedFenotipoTre;
var pickedCarnagione;
var pickedCapelli;
var pickedOcchi;
var pickedCorporatura;
var pickedStatura;
var pickedAltezza;
var pickedEta;
var pickedFenotipo;
var pickedInsediamento;
var pickedStatus;
var pickedClasseSociale;
var mutazione1;
var mutazione2;
var mutazione3;
var mutazione4;
var mutazioneClade1;
var mutazioneClade2;
var pickedSex;
var pickedAttribuzione;
var pickedPronome;
var pickedStatusGenitori;
var pickedFratelliSorelle;
var pickedPrimoNome;


//CREAZIONE ARRAY WEIGHTED + PICK RANDOM

function pickRandom (obj) {

	var weightedArray = [];

	for (var i = 0; i < obj.length; i++) {
		for (var n = 0; n < obj[i].weight; n++){
			weightedArray.push(i);
		}
	}

	return(obj[weightedArray[Math.floor(Math.random() * weightedArray.length)]]);
}

//FUNZIONAMENTO PULSANTE

$("#pulsanteGenera").click(function () {
	$("#generato").slideDown(1000);

	var toggle = 1;

$(".fa-plus").click(function () {
	if (toggle == 1) {
		$(".perChiNarra").fadeIn();
		toggle = 0;
	} else {
		$(".perChiNarra").fadeOut();
		toggle = 1;
	}
	});

	printProtoClade();
	printClade();
	printFenotipo();
	printCarnagione();
	printCapelli();
	printOcchi();
	printCorporatura();
	printEta();
	printStatura();
	printAltezza();
	printStatus();
	printClasseSociale();
	printInsediamento();
	printMutazioni();
	printSex();
	printSessoGenitori();
	printStatusGenitori();
	printFratelliSorelle();
	printCarte();
	printPronome();
	printPrimoNome();
});

$("#pulsanteStampa").click(function () {
	window.print()
});

//DEFINIZIONE CARTE

function printCarte() {
	$("#fanteCuori").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#fanteQuadri").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#fanteFiori").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#fantePicche").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#donnaCuori").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#donnaQuadri").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#donnaFiori").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#donnaPicche").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#reCuori").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#reQuadri").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#reFiori").text(carte[Math.floor(Math.random() * carte.length)]);
	$("#rePicche").text(carte[Math.floor(Math.random() * carte.length)]);
}


//DEFINIZIONE CLADE

function printProtoClade () {
	pickedProtoClade = pickRandom(protoClade).name;
	$("#protoClade").text(pickedProtoClade);
}

//DEFINIZIONE PROTOCLADE

function printClade () {
	if (pickedProtoClade === 'Nuova Milano') {
		pickedClade = pickRandom(cladeNuovaMilano).name;
		$("#clade").text(pickedClade);
	} else {
		$("#clade").text("");
	}
}

//DEFINIZIONE FENOTIPO

function printFenotipo () {
	pickedFenotipoUno = pickRandom(fenotipo).name;
	$("#fenotipoUno").text(pickedFenotipoUno);
	pickedFenotipoDue = pickRandom(fenotipo).name;
	$("#fenotipoDue").text(pickedFenotipoDue);
	pickedFenotipoTre = pickRandom(fenotipo).name;
	$("#fenotipoTre").text(pickedFenotipoTre);
}

//DEFINIZIONE CARNAGIONE

function printCarnagione () {
	if (pickedFenotipoUno === 'Afroamericano-Afroeuropeo') {
		pickedCarnagione = pickRandom(carnagioneAfroamericanoAfroeuropeo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Anglosassone') {
		pickedCarnagione = pickRandom(carnagioneAnglosassone).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Arabo') {
		pickedCarnagione = pickRandom(carnagioneArabo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Bantu') {
		pickedCarnagione = pickRandom(carnagioneBantu).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Basotho') {
		pickedCarnagione = pickRandom(carnagioneBasotho).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Berbero') {
		pickedCarnagione = pickRandom(carnagioneBerbero).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Bisaya (Filippine)') {
		pickedCarnagione = pickRandom(carnagioneBisaya).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Cafuzo-Lobo-Garifuna') {
		pickedCarnagione = pickRandom(carnagioneCafuzo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Centroamericano Nativo') {
		pickedCarnagione = pickRandom(carnagioneCentroamericano).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Creolo') {
		pickedCarnagione = pickRandom(carnagioneCreolo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Curdo-Armeno') {
		pickedCarnagione = pickRandom(carnagioneCurdoArmeno).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Germanico-Tedesco') {
		pickedCarnagione = pickRandom(carnagioneGermanicoTedesco).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Giapponese') {
		pickedCarnagione = pickRandom(carnagioneGiapponese).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Franco-Catalano') {
		pickedCarnagione = pickRandom(carnagioneFrancoCatalano).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Gaelico-Gallego') {
		pickedCarnagione = pickRandom(carnagioneGaelicoGallego).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Han-Zhuang') {
		pickedCarnagione = pickRandom(carnagioneHanZhuang).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Kazako-Uzbeko') {
		pickedCarnagione = pickRandom(carnagioneKazakoUzbeko).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Lao') {
		pickedCarnagione = pickRandom(carnagioneLao).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Manciù') {
		pickedCarnagione = pickRandom(carnagioneManciu).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Malese') {
		pickedCarnagione = pickRandom(carnagioneMalese).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Mediterraneo-Anatolico-Semitico') {
		pickedCarnagione = pickRandom(carnagioneMediterraneo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Oromo (Kenya e Etiopia)') {
		pickedCarnagione = pickRandom(carnagioneOromo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Pashtun') {
		pickedCarnagione = pickRandom(carnagionePashtun).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Persiano') {
		pickedCarnagione = pickRandom(carnagionePersiano).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Rom Sinti') {
		pickedCarnagione = pickRandom(carnagioneRomSinti).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Scandinavo') {
		pickedCarnagione = pickRandom(carnagioneScandinavo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Sahrawi') {
		pickedCarnagione = pickRandom(carnagioneSahrawi).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Pashtun') {
		pickedCarnagione = pickRandom(carnagionePashtun).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Slavo Occidentale') {
		pickedCarnagione = pickRandom(carnagioneSlavoOccidentale).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Slavo Orientale') {
		pickedCarnagione = pickRandom(carnagioneSlavoOrientale).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Slavo Meridionale') {
		pickedCarnagione = pickRandom(carnagioneSlavoMeridionale).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Siberiano') {
		pickedCarnagione = pickRandom(carnagioneSiberiano).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Somalo') {
		pickedCarnagione = pickRandom(carnagioneSomalo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Sudamericano Nativo') {
		pickedCarnagione = pickRandom(carnagioneSudamericanoNativo).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Thai') {
		pickedCarnagione = pickRandom(carnagioneThai).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Tigrino (Eritrea)') {
		pickedCarnagione = pickRandom(carnagioneTigrino).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Việt') {
		pickedCarnagione = pickRandom(carnagioneViet).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Tamil') {
		pickedCarnagione = pickRandom(carnagioneTamil).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Tibeto-Birmano') {
		pickedCarnagione = pickRandom(carnagioneTibetoBirmano).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Turco-Oghuz') {
		pickedCarnagione = pickRandom(carnagioneTurcoOghuz).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Uralico') {
		pickedCarnagione = pickRandom(carnagioneUralico).name;
		$("#carnagione").text(pickedCarnagione);
	} else if (pickedFenotipoUno === 'Wolof') {
		pickedCarnagione = pickRandom(carnagioneWolof).name;
		$("#carnagione").text(pickedCarnagione);
	} else {
		$("#carnagione").text("");
	}
}

//DEFINIZIONE CAPELLI

function printCapelli () {
	if (pickedFenotipoDue === 'Afroamericano-Afroeuropeo') {
		pickedCapelli = pickRandom(capelliAfroamericanoAfroeuropeo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Anglosassone') {
		pickedCapelli = pickRandom(capelliAnglosassone).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Arabo') {
		pickedCapelli = pickRandom(capelliArabo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Bantu') {
		pickedCapelli = pickRandom(capelliBantu).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Basotho') {
		pickedCapelli = pickRandom(capelliBasotho).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Berbero') {
		pickedCapelli = pickRandom(capelliBerbero).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Bisaya (Filippine)') {
		pickedCapelli = pickRandom(capelliBisaya).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Cafuzo-Lobo-Garifuna') {
		pickedCapelli = pickRandom(capelliCafuzo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Centroamericano Nativo') {
		pickedCapelli = pickRandom(capelliCentroamericanoNativo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Creolo') {
		pickedCapelli = pickRandom(capelliCreolo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Curdo-Armeno') {
		pickedCapelli = pickRandom(capelliCurdoArmeno).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Germanico-Tedesco') {
		pickedCapelli = pickRandom(capelliGermanicoTedesco).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Giapponese') {
		pickedCapelli = pickRandom(capelliGiapponese).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Franco-Catalano') {
		pickedCapelli = pickRandom(capelliFrancoCatalano).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Gaelico-Gallego') {
		pickedCapelli = pickRandom(capelliGaelicoGallego).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Han-Zhuang') {
		pickedCapelli = pickRandom(capelliHanZhuang).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Kazako-Uzbeko') {
		pickedCapelli = pickRandom(capelliKazakoUzbeko).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Lao') {
		pickedCapelli = pickRandom(capelliLao).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Manciù') {
		pickedCapelli = pickRandom(capelliManciu).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Malese') {
		pickedCapelli = pickRandom(capelliMalese).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Mediterraneo-Anatolico-Semitico') {
		pickedCapelli = pickRandom(capelliMediterraneo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Oromo (Kenya e Etiopia)') {
		pickedCapelli = pickRandom(capelliOromo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Pashtun') {
		pickedCapelli = pickRandom(capelliPashtun).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Persiano') {
		pickedCapelli = pickRandom(capelliPersiano).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Rom Sinti') {
		pickedCapelli = pickRandom(capelliRomSinti).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Scandinavo') {
		pickedCapelli = pickRandom(capelliScandinavo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Sahrawi') {
		pickedCapelli = pickRandom(capelliSahrawi).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Pashtun') {
		pickedCapelli = pickRandom(capelliPashtun).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Slavo Occidentale') {
		pickedCapelli = pickRandom(capelliSlavoOccidentale).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Slavo Orientale') {
		pickedCapelli = pickRandom(capelliSlavoOrientale).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Slavo Meridionale') {
		pickedCapelli = pickRandom(capelliSlavoMeridionale).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Siberiano') {
		pickedCapelli = pickRandom(capelliSiberiano).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Somalo') {
		pickedCapelli = pickRandom(capelliSomalo).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Sudamericano Nativo') {
		pickedCapelli = pickRandom(capelliSudamericano).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Thai') {
		pickedCapelli = pickRandom(capelliThai).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Tigrino (Eritrea)') {
		pickedCapelli = pickRandom(capelliTigrino).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Việt') {
		pickedCapelli = pickRandom(capelliViet).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Tamil') {
		pickedCapelli = pickRandom(capelliTamil).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Tibeto-Birmano') {
		pickedCapelli = pickRandom(capelliTibetoBirmano).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Turco-Oghuz') {
		pickedCapelli = pickRandom(capelliTurcoOghuz).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Uralico') {
		pickedCapelli = pickRandom(capelliUralico).name;
		$("#capelli").text(pickedCapelli);
	} else if (pickedFenotipoDue === 'Wolof') {
		pickedCapelli = pickRandom(capelliWolof).name;
		$("#capelli").text(pickedCapelli);
	} else {
		$("#capelli").text("");
	}
}

//DEFINIZIONE OCCHI

function printOcchi () {
	if (pickedFenotipoTre === 'Afroamericano-Afroeuropeo') {
		pickedOcchi = pickRandom(occhiAfroamericanoAfroeuropeo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Anglosassone') {
		pickedOcchi = pickRandom(occhiAnglosassone).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Arabo') {
		pickedOcchi = pickRandom(occhiArabo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Bantu') {
		pickedOcchi = pickRandom(occhiBantu).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Basotho') {
		pickedOcchi = pickRandom(occhiBasotho).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Berbero') {
		pickedOcchi = pickRandom(occhiBerbero).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Bisaya (Filippine)') {
		pickedOcchi = pickRandom(occhiBisaya).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Cafuzo-Lobo-Garifuna') {
		pickedOcchi = pickRandom(occhiCafuzo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Centroamericano Nativo') {
		pickedOcchi = pickRandom(occhiCentroamericanoNativo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Creolo') {
		pickedOcchi = pickRandom(occhiCreolo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Curdo-Armeno') {
		pickedOcchi = pickRandom(occhiCurdoArmeno).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Germanico-Tedesco') {
		pickedOcchi = pickRandom(occhiGermanicoTedesco).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Giapponese') {
		pickedOcchi = pickRandom(occhiGiapponese).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Franco-Catalano') {
		pickedOcchi = pickRandom(occhiFrancoCatalano).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Gaelico-Gallego') {
		pickedOcchi = pickRandom(occhiGaelicoGallego).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Han-Zhuang') {
		pickedOcchi = pickRandom(occhiHanZhuang).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Kazako-Uzbeko') {
		pickedOcchi = pickRandom(occhiKazakoUzbeko).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Lao') {
		pickedOcchi = pickRandom(occhiLao).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Manciù') {
		pickedOcchi = pickRandom(occhiManciu).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Malese') {
		pickedOcchi = pickRandom(occhiMalese).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Mediterraneo-Anatolico-Semitico') {
		pickedOcchi = pickRandom(occhiMediterraneo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Oromo (Kenya e Etiopia)') {
		pickedOcchi = pickRandom(occhiOromo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Pashtun') {
		pickedOcchi = pickRandom(occhiPashtun).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Persiano') {
		pickedOcchi = pickRandom(occhiPersiano).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Rom Sinti') {
		pickedOcchi = pickRandom(occhiRomSinti).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Scandinavo') {
		pickedOcchi = pickRandom(occhiScandinavo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Sahrawi') {
		pickedOcchi = pickRandom(occhiSahrawi).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Pashtun') {
		pickedOcchi = pickRandom(occhiPashtun).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Slavo Occidentale') {
		pickedOcchi = pickRandom(occhiSlavoOccidentale).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Slavo Orientale') {
		pickedOcchi = pickRandom(occhiSlavoOrientale).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Slavo Meridionale') {
		pickedOcchi = pickRandom(occhiSlavoMeridionale).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Siberiano') {
		pickedOcchi = pickRandom(occhiSiberiano).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Somalo') {
		pickedOcchi = pickRandom(occhiSomalo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Sudamericano Nativo') {
		pickedOcchi = pickRandom(occhiSudamericanoNativo).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Thai') {
		pickedOcchi = pickRandom(occhiThai).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Tigrino (Eritrea)') {
		pickedOcchi = pickRandom(occhiTigrino).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Việt') {
		pickedOcchi = pickRandom(occhiViet).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Tamil') {
		pickedOcchi = pickRandom(occhiTamil).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Tibeto-Birmano') {
		pickedOcchi = pickRandom(occhiTibetoBirmano).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Turco-Oghuz') {
		pickedOcchi = pickRandom(occhiTurcoOghuz).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Uralico') {
		pickedOcchi = pickRandom(occhiUralico).name;
		$("#occhi").text(pickedOcchi);
	} else if (pickedFenotipoTre === 'Wolof') {
		pickedOcchi = pickRandom(occhiWolof).name;
		$("#occhi").text(pickedOcchi);
	} else {
		$("#occhi").text("");
	}
}

//DEFINIZIONE CORPORATURA

function printCorporatura () {
	if  (
		(pickedFenotipoUno === 'Anglosassone') ||
		(pickedFenotipoUno === 'Bantu') ||
		(pickedFenotipoUno === 'Berbero') ||
		(pickedFenotipoUno === 'Cafuzo-Lobo-Garifuna') ||
		(pickedFenotipoUno === 'Curdo-Armeno') ||
		(pickedFenotipoUno === 'Germanico-Tedesco') ||
		(pickedFenotipoUno === 'Franco-Catalano') ||
		(pickedFenotipoUno === 'Gaelico-Gallego') ||
		(pickedFenotipoUno === 'Mediterraneo-Anatolico-Semitico') ||
		(pickedFenotipoUno === 'Scandinavo') ||
		(pickedFenotipoUno === 'Slavo Occidentale') ||
		(pickedFenotipoUno === 'Slavo Orientale') ||
		(pickedFenotipoUno === 'Slavo Meridionale')) {
		pickedCorporatura = pickRandom(corporaturaA).name;
		$("#corporatura").text(pickedCorporatura);

	} else if (
		(pickedFenotipoUno === 'Afroamericano-Afroeuropeo') ||
		(pickedFenotipoUno === 'Creolo') ||
		(pickedFenotipoUno === 'Wolof')) {
		pickedCorporatura = pickRandom(corporaturaB).name;
		$("#corporatura").text(pickedCorporatura);

	} else if (
		(pickedFenotipoUno === 'Arabo') ||
		(pickedFenotipoUno === 'Bisaya (Filippine)') ||
		(pickedFenotipoUno === 'Kazako-Uzbeko') ||
		(pickedFenotipoUno === 'Pashtun') ||
		(pickedFenotipoUno === 'Persiano') ||
		(pickedFenotipoUno === 'Rom Sinti') ||
		(pickedFenotipoUno === 'Turco-Oghuz'))  {
		pickedCorporatura = pickRandom(corporaturaC).name;
		$("#corporatura").text(pickedCorporatura);

	} else if (
		(pickedFenotipoUno === 'Basotho') ||
		(pickedFenotipoUno === 'Oromo (Kenya e Etiopia)') ||
		(pickedFenotipoUno === 'Sahrawi') ||
		(pickedFenotipoUno === 'Somalo') ||
		(pickedFenotipoUno === 'Tigrino (Eritrea)'))  {
		pickedCorporatura = pickRandom(corporaturaD).name;
		$("#corporatura").text(pickedCorporatura);

	} else if (
		(pickedFenotipoUno === 'Centroamericano Nativo') ||
		(pickedFenotipoUno === 'Siberiano') ||
		(pickedFenotipoUno === 'Sudamericano Nativo') ||
		(pickedFenotipoUno === 'Uralico'))  {
		pickedCorporatura = pickRandom(corporaturaE).name;
		$("#corporatura").text(pickedCorporatura);

	} else if (
		(pickedFenotipoUno === 'Anglosassone') ||
		(pickedFenotipoUno === 'Giapponese') ||
		(pickedFenotipoUno === 'Han-Zhuang') ||
		(pickedFenotipoUno === 'Lao') ||
		(pickedFenotipoUno === 'Manciù') ||
		(pickedFenotipoUno === 'Malese') ||
		(pickedFenotipoUno === 'Thai') ||
		(pickedFenotipoUno === 'Việt') ||
		(pickedFenotipoUno === 'Tamil') ||
		(pickedFenotipoUno === 'Tibeto-Birmano'))  {
		pickedCorporatura = pickRandom(corporaturaF).name;
		$("#corporatura").text(pickedCorporatura);
	} else {
		$("#corporatura").text("");
	}
}

//DEFINIZIONE STATURA

function printStatura () {
	pickedStatura = pickRandom(statura).name;
	$("#statura").text(pickedStatura);
}

//DEFINIZIONE ALTEZZA

function printAltezza () {
	if (pickedStatura === 'Molto Alta')			{pickedAltezza = 186}
	else if (pickedStatura === 'Alta')			{pickedAltezza = 176}
	else if (pickedStatura === 'Media')			{pickedAltezza = 166}
	else if (pickedStatura === 'Bassa')			{pickedAltezza = 156}
	else if (pickedStatura === 'Molto Bassa')	{pickedAltezza = 146}

	// + un numero da 0 a 9
	pickedAltezza = pickedAltezza + Math.floor(Math.random() * 10);
	// - 4 per le femmine
	if (pickedSex === 'Femmina')				{pickedAltezza = pickedAltezza - 4};
	if (pickedEta === 'Infanzia (8-13)')				{pickedAltezza = pickedAltezza - 40};
	if (pickedEta === 'Adolescenza (14-20)')				{pickedAltezza = pickedAltezza - 15};

	//variazioni per clade
	if (pickedFenotipoUno === 'Afroamericano-Afroeuropeo')					{pickedAltezza = pickedAltezza + 8}
	else if (pickedFenotipoUno === 'Anglosassone')							{pickedAltezza = pickedAltezza + 0}
	else if (pickedFenotipoUno === 'Arabo')									{pickedAltezza = pickedAltezza - 2}
	else if (pickedFenotipoUno === 'Bantu')									{pickedAltezza = pickedAltezza + 1}
	else if (pickedFenotipoUno === 'Basotho')								{pickedAltezza = pickedAltezza + 0}
	else if (pickedFenotipoUno === 'Berbero')								{pickedAltezza = pickedAltezza - 1}
	else if (pickedFenotipoUno === 'Bisaya (Filippine)')					{pickedAltezza = pickedAltezza - 8}
	else if (pickedFenotipoUno === 'Cafuzo-Lobo-Garifuna')					{pickedAltezza = pickedAltezza + 0}
	else if (pickedFenotipoUno === 'Centroamericano Nativo')				{pickedAltezza = pickedAltezza - 6}
	else if (pickedFenotipoUno === 'Creolo')								{pickedAltezza = pickedAltezza + 2}
	else if (pickedFenotipoUno === 'Curdo-Armeno')							{pickedAltezza = pickedAltezza - 2}
	else if (pickedFenotipoUno === 'Germanico-Tedesco')						{pickedAltezza = pickedAltezza + 3}
	else if (pickedFenotipoUno === 'Giapponese')							{pickedAltezza = pickedAltezza - 6}
	else if (pickedFenotipoUno === 'Franco-Catalano')						{pickedAltezza = pickedAltezza + 0}
	else if (pickedFenotipoUno === 'Gaelico-Gallego')						{pickedAltezza = pickedAltezza - 2}
	else if (pickedFenotipoUno === 'Han-Zhuang')							{pickedAltezza = pickedAltezza - 8}
	else if (pickedFenotipoUno === 'Kazako-Uzbeko')							{pickedAltezza = pickedAltezza - 5}
	else if (pickedFenotipoUno === 'Lao')									{pickedAltezza = pickedAltezza - 8}
	else if (pickedFenotipoUno === 'Manciù')								{pickedAltezza = pickedAltezza - 8}
	else if (pickedFenotipoUno === 'Malese')								{pickedAltezza = pickedAltezza - 8}
	else if (pickedFenotipoUno === 'Mediterraneo-Anatolico-Semitico')		{pickedAltezza = pickedAltezza - 2}
	else if (pickedFenotipoUno === 'Oromo (Kenya e Etiopia)')				{pickedAltezza = pickedAltezza - 2}
	else if (pickedFenotipoUno === 'Pashtun')								{pickedAltezza = pickedAltezza - 3}
	else if (pickedFenotipoUno === 'Persiano')								{pickedAltezza = pickedAltezza - 3}
	else if (pickedFenotipoUno === 'Rom Sinti')								{pickedAltezza = pickedAltezza - 2}
	else if (pickedFenotipoUno === 'Scandinavo')							{pickedAltezza = pickedAltezza + 7}
	else if (pickedFenotipoUno === 'Sahrawi')								{pickedAltezza = pickedAltezza - 2}
	else if (pickedFenotipoUno === 'Slavo Occidentale')						{pickedAltezza = pickedAltezza + 4}
	else if (pickedFenotipoUno === 'Slavo Orientale')						{pickedAltezza = pickedAltezza + 0}
	else if (pickedFenotipoUno === 'Slavo Meridionale')						{pickedAltezza = pickedAltezza - 2}
	else if (pickedFenotipoUno === 'Siberiano')								{pickedAltezza = pickedAltezza - 8}
	else if (pickedFenotipoUno === 'Somalo')								{pickedAltezza = pickedAltezza - 3}
	else if (pickedFenotipoUno === 'Sudamericano Nativo')					{pickedAltezza = pickedAltezza - 8}
	else if (pickedFenotipoUno === 'Thai')									{pickedAltezza = pickedAltezza - 6}
	else if (pickedFenotipoUno === 'Tigrini (Eritrea)')						{pickedAltezza = pickedAltezza - 2}
	else if (pickedFenotipoUno === 'Việt')									{pickedAltezza = pickedAltezza - 8}
	else if (pickedFenotipoUno === 'Tamil')									{pickedAltezza = pickedAltezza - 6}
	else if (pickedFenotipoUno === 'Tibeto-Birmano')						{pickedAltezza = pickedAltezza - 8}
	else if (pickedFenotipoUno === 'Turco-Oghuz')							{pickedAltezza = pickedAltezza - 2}
	else if (pickedFenotipoUno === 'Uralico')								{pickedAltezza = pickedAltezza - 8}
	else if (pickedFenotipoUno === 'Wolof')									{pickedAltezza = pickedAltezza + 8};
	$("#altezza").text(pickedAltezza);
}

//DEFINIZIONE ETà

function printEta () {
	pickedEta = pickRandom(eta).name;
	$("#eta").text(pickedEta);
}

//DEFINIZIONE INSEDIAMENTO

function printInsediamento () {
	if ((pickedClasseSociale === 'Borghesia') || (pickedClasseSociale === 'Classe Dominante')) {
		$("#insediamento").text('Gae Aulenti');
	} else {
		$("#insediamento").text("Periferia");
	}
}

//DEFINIZIONE STATUS ECONOMICO

function printStatus () {
	pickedStatus = pickRandom(status1).name;
	$("#status").text(pickedStatus);
}

//DEFINIZIONE CLASSE SOCIALE

function printClasseSociale () {
	pickedClasseSociale = pickRandom(classeSociale1).name;
	$("#classeSociale").text(pickedClasseSociale);
}

//DEFINIZIONE MUTAZIONI

function printMutazioni () {
		mutazione1 = pickRandom(mutazioniLivello1).name;
		$('#mutazione1').text(mutazione1);
		$('#mutazione2').text("nope");
		$('#mutazione3').text("nope");
		$('#mutazione4').text("nope");

	//disturbi gravi

	if (mutazione1 === 'Disturbi Gravi') {
		mutazione1 = pickRandom(disturbiGravi).name;
		$('#mutazione1').text(mutazione1);
	}

	//mutazioni albinismo neri

	if ((mutazione1 === 'Albinismo') && (pickedCarnagione === 'Nera')) {
		$('#mutazione1').text('Albinismo Rubio');
	}

	// mutazione albinismo scuri

	if ((mutazione1 === 'Albinismo') && (pickedCarnagione === 'Scura')) {
		$('#mutazione1').text('Albinismo Rubio');
	}


	//colori slot

	$(".slot").addClass('slotSemiAccesa')
	$(".slot").addClass('slotAccesa')
	$("td:contains('Nessuna Mutazione') .cerchio").removeClass('slotAccesa')
	$("td:contains('Nessuna Mutazione') .cerchio").addClass('slotSemiAccesa')
	$("td:contains('nope') .cerchio").removeClass('slotAccesa')
	$("td:contains('nope') .cerchio").removeClass('slotSemiAccesa')
	$("p1:contains('nope')").html(' &nbsp ')
}

//DEFINIZIONE SESSO

function printSex () {

	if ((mutazione1 === "Ermafrodita") || (mutazione2 === "Ermafrodita") || (mutazione3 === "Ermafrodita") || (mutazione4 === "Ermafrodita")) {
		pickedAttribuzione = pickRandom(attribuzione).name;
		$("#sex").text(pickedAttribuzione);
		pickedSex = false;
	} else {
		pickedSex = pickRandom(sex).name;
		$("#sex").text(pickedSex);
		pickedAttribuzione = false;
	}
}

//DEFINIZIONE PRONOME

function printPronome () {
		if ((pickedSex === 'Femmina') || (pickedAttribuzione === 'Attribuita Femmina')) {
			pickedPronome = 'Femminile'
			$("#pronome").text(pickedPronome);
		} else if ((pickedSex === 'Maschio') || (pickedAttribuzione === 'Attribuito Maschio')) {
			pickedPronome = 'Maschile'
			$("#pronome").text(pickedPronome);
		} else {
			pickedPronome = ''
			$("#pronome").text(pickedPronome);
		}
}

//DEFINIZIONE SESSO GENITORI
function printSessoGenitori () {
		var pickedSessoGenitore1 = pickRandom(sessoGenitore1).name;
		$("#sessoGenitore1").text(pickedSessoGenitore1);

		var pickedSessoGenitore2 = pickRandom(sessoGenitore2).name;
		$("#sessoGenitore2").text(pickedSessoGenitore2);

		var pickedSessoGenitore3 = pickRandom(sessoGenitore3).name;
		$("#sessoGenitore3").text(pickedSessoGenitore3);

		if (pickedSessoGenitore3 !== 'Falso') {
			var pickedSessoGenitore4 = pickRandom(sessoGenitore4).name;
			$("#sessoGenitore4").text(pickedSessoGenitore4);
		} else {
			var pickedSessoGenitore4 = 'Falso';
		}

		if (pickedSessoGenitore4 !== 'Falso') {
			var pickedSessoGenitore5 = pickRandom(sessoGenitore5).name;
			$("#sessoGenitore5").text(pickedSessoGenitore5);
		} else {
			var pickedSessoGenitore5 = 'Falso';
		}

		if (pickedSessoGenitore5 !== 'Falso') {
			var pickedSessoGenitore6 = pickRandom(sessoGenitore6).name;
			$("#sessoGenitore6").text(pickedSessoGenitore6);
		} else {
			var pickedSessoGenitore6 = 'Falso';
		}

	if (pickedSessoGenitore3 === 'Falso') {
		$('#casellaGenitore3').fadeOut(0);
	} else {
		$('#casellaGenitore3').fadeIn(0);
	}

	if (pickedSessoGenitore4 === 'Falso') {
		$('#casellaGenitore4').fadeOut(0);
	} else {
		$('#casellaGenitore4').fadeIn(0);
	}

	if (pickedSessoGenitore5 === 'Falso') {
		$('#casellaGenitore5').fadeOut(0);
	} else {
		$('#casellaGenitore5').fadeIn(0);
	}

	if (pickedSessoGenitore6 === 'Falso') {
		$('#casellaGenitore6').fadeOut(0);
	} else {
		$('#casellaGenitore6').fadeIn(0);
	}
}

//DEFINIZIONE STATUS GENITORI

function printStatusGenitori () {
	pickedStatusGenitori = pickRandom(statusGenitore).name;
	$("#statusGenitore1").text(pickedStatusGenitori);
	pickedStatusGenitori = pickRandom(statusGenitore).name;
	$("#statusGenitore2").text(pickedStatusGenitori);
	pickedStatusGenitori = pickRandom(statusGenitore).name;
	$("#statusGenitore3").text(pickedStatusGenitori);
	pickedStatusGenitori = pickRandom(statusGenitore).name;
	$("#statusGenitore4").text(pickedStatusGenitori);
	pickedStatusGenitori = pickRandom(statusGenitore).name;
	$("#statusGenitore5").text(pickedStatusGenitori);
	pickedStatusGenitori = pickRandom(statusGenitore).name;
	$("#statusGenitore6").text(pickedStatusGenitori);
}


//DEFINIZIONE FRATELLI E SORELLE



function printFratelliSorelle () {
	pickedFratelliSorelle = pickRandom(fratelliSorelle).name;
	$("#fratelliSorelle").text(pickedFratelliSorelle);
}

//DEFINIZIONE NOME

var nomi = [];
function printPrimoNome () {

	if (pickedPronome === 'Femminile') {
		nomi = nomi.concat(nome30femminile, nome30femminile, nome30femminile, nome30femminile, nome70femminile);

		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;

	} else 	if (pickedPronome === 'Maschile') {
		nomi = nomi.concat(nome30maschile, nome30maschile, nome30maschile, nome30maschile, nome70maschile);
		pickedPrimoNome = nomi[Math.floor(Math.random() * nomi.length)];
		$("#primoNome").text(pickedPrimoNome);

		nomi = [];
		pickedPrimoNome = false;
	}	else {
		$("#primoNome").text('');
	}
}
