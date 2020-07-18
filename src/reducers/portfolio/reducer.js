const initialstate = {
    arr:[
            {
                id:'1',text:'Jeep-Official',img:'jeep',category:'Auto && Moto',link:'https://www.jeep-official.am/'
            },
            {
                id:'2',text:'Miteesocks',img:'naski',category:'Ecommerce',link:'https://miteesocks.com/'
            },
            {
                id:'3',text:'Marcomoratti',img:'Marko',category:'Ecommerce',link: 'https://marcomoratti.com/'
            },
            {
                id:'4',text:'Goldcrest',img:'goldcrest',category:'Art',link: 'https://goldcrest3d.com/'
            },
            {
                id:'5',text:'R2E2',img:'R2E2',category:'Govermental', link: 'https://r2e2.am/am/'
            },
            {
                id:'6',text:'Allhotels',img:'allHotels',category:'Hospitality', link: 'https://allhotels.am/'
            },
            {
                id:'7',text:'Fiat Armenia',img:'542',category:'Auto && Moto', link: 'https://www.fiatprofessional.am/'
            },
            {
                id:'8',text:'Alfa Romeo Armenia',img:'AlfaR',category:'AUto && Moto', link: 'https://www.alfaromeo.am/'
            },
            {
                id:'9',text:'Datanet',img:'Datanet',category:'Telecom', link: 'https://www.alfaromeo.am/'
            },
            {
                id:'10',text:'Forward',img:'',category:'Auto && Moto', link: 'https://forward.am/?lang=en'
            },
            {
                id:'11',text:'VD',img:'VD',category:'', link: 'https://vdcomputers.com/'
            },
            {
                id:'12',text:'SDA',img:'sda',category:'Non-Govermental', link: 'https://sda.finecars.am/'
            },
            {
                id:'13',text:'Finecars',img:'',category:'Auto && Moto', link: 'https://finecars.am/'
            },
            {
                id:'14',text:'Datacom',img:'520',category:'Telecom', link: 'https://datacom.am/'
            },
            {
                id:'15',text:'Thermostyle',img:'thermo',category:'Industrial', link: 'https://www.thermostyle.bg/'
            },
            {
                id:'16',text:'SSpack',img:'',category:'Ecommerce', link: 'https://sspack.ru/'
            },
            {
                id:'17',text:'Chees4you',img:'chees',category:'Ecommerce', link: ''
            },
            {
                id:'18',text:'Prodigi',img:'',category:'Hi Tech', link: 'https://prodigi.am/'
            },
            {
                id:'19',text:'Levishalice',img:'levis',category:'Ecommerce', link: 'https://lavishalice.store/'
            },
            {
                id:'20',text:'Lada Armenia',img:'Lada',category:'Auto && Moto', link: 'https://www.ladaarmenia.am/'
            },
            {
                id:'21',text:'Shoppingian',img:'shoping',category:'Ecommerce', link: 'https://www.shoppingian.com/'
            },
            {
                id:'22',text:'Goris Agrocollege',img:'Goris',category:'Education', link: 'https://gorisagrocollege.am/'
            },
            {
                id:'23',text:'Grandsport',img:'grand',category:'Activity', link: 'http://grandsport.am/'
            },
            {
                id:'24',text:'Armdict',img:'',category:'Education', link: 'http://www.armdict.com/'
            },
            {
                id:'25',text:'AnunnerAM',img:'',category:'Education', link: 'http://www.anunner.com/'
            },
            {
                id:'26',text:'Datanet',img:'',category:'Telecom'
            },
            {
                id:'27',text:'Garaj',img:'garaj',category:'Ecommerce', link: 'http://garaj.am/'
            },
        ],
    all:true,
    nonGov:false,
    tech:false,
    telecom:false,
    education:false,
    auto_moto:false,
    art:false,
    industrial:false,
    ecommerce:false,
    gov:false,
    hospitality:false,
    activity:false,
    load:false

}

const reducer = (state = initialstate, action) => {
    if(action.type === 'filterAll') {
       return{...state,all:action.value,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
           news:false,hospitality:false,activity:false,}
    }
    if(action.type === "filterNonGov"){
        return{...state,all:false,nonGov:action.value,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
            news:false,hospitality:false,activity:false,}
    }
    if(action.type === "filterTech"){
        return{...state,all:false,nonGov:false,tech:action.value,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
            news:false,hospitality:false,activity:false,}
    }
    if(action.type === "filterTelecom"){
        return{...state,all:false,nonGov:false,tech:false,telecom:action.value,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
            news:false,hospitality:false,activity:false,}
    }
    if(action.type === "filterEducation"){
        return{...state,all:false,nonGov:false,tech:false,telecom:false,education:action.value,auto_moto:false,art:false,industrial:false,ecommerce:false,
            news:false,hospitality:false,activity:false,}
    }
    if(action.type === "filterAutoMoto"){
        return{...state,all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:action.value,art:false,industrial:false,ecommerce:false,
            news:false,hospitality:false,activity:false,}
    }
    if(action.type === "filterArt"){
        return{...state,all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:action.value,industrial:false,ecommerce:false,
            news:false,hospitality:false,activity:false,}
    }
    if(action.type === "filterIndustrial"){
        return{...state,all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:action.value,ecommerce:false,
            news:false,hospitality:false,activity:false,}
    }
    if(action.type === "filterEcommerce"){
        return{...state,all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:action.value,
            news:false,hospitality:false,activity:false,}
    }
    if(action.type === "filterGov"){
        return{...state,all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
            news:action.value,hospitality:false,activity:false,}
    }
    if(action.type === "filterHospitality"){
        return{...state,all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
            news:false,hospitality:action.value,activity:false,}
    }
    if(action.type === "filterActivity"){
        return{...state,all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
            news:false,hospitality:false,activity:action.value,}
    }
    return initialstate
}

export default reducer