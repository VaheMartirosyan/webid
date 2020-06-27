const initialstate = {
    arr:[
        {
            id:'1',text:'Jeep-Official',img:'jeep',category:'Auto && Moto'
        },
        {
            id:'2',text:'Miteesocks',img:'naski',category:'Ecommerce'
        },
        {
            id:'3',text:'Marcomoratti',img:'Marko',category:'Ecommerce'
        },
        {
            id:'4',text:'Goldcrest',img:'goldcrest',category:'Art'
        },
        {
            id:'5',text:'R2E2',img:'R2E2',category:'Govermental'
        },
        {
            id:'6',text:'Allhotels',img:'allHotels',category:'Hospitality'
        },
        {
            id:'7',text:'Fiat Armenia',img:'542',category:'Auto && Moto'
        },
        {
            id:'8',text:'Alfa Romeo Armenia',img:'AlfaR',category:'AUto && Moto'
        },
        {
            id:'9',text:'Datanet',img:'Datanet',category:'Telecom'
        },
        {
            id:'10',text:'Forward',img:'',category:'Auto && Moto'
        },
        {
            id:'11',text:'VD',img:'VD',category:''
        },
        {
            id:'12',text:'SDA',img:'sda',category:'Non-Govermental'
        },
        {
            id:'13',text:'Finecars',img:'',category:'Auto && Moto'
        },
        {
            id:'14',text:'Datacom',img:'520',category:'Telecom'
        },
        {
            id:'15',text:'Thermostyle',img:'thermo',category:'Industrial'
        },
        {
            id:'16',text:'SSpack',img:'',category:'Ecommerce'
        },
        {
            id:'17',text:'Chees4you',img:'chees',category:'Ecommerce'
        },
        {
            id:'18',text:'Prodigi',img:'',category:'Hi Tech'
        },
        {
            id:'19',text:'Levishalice',img:'levis',category:'Ecommerce'
        },
        {
            id:'20',text:'Lada Armenia',img:'Lada',category:'Auto && Moto'
        },
        {
            id:'21',text:'Shoppingian',img:'shoping',category:'Ecommerce'
        },
        {
            id:'22',text:'Goris Agrocollege',img:'Goris',category:'Education'
        },
        {
            id:'23',text:'Grandsport',img:'grand',category:'Activity'
        },
        {
            id:'24',text:'Armdict',img:'',category:'Education'
        },
        {
            id:'25',text:'AnunnerAM',img:'',category:'Education'
        },
        {
            id:'26',text:'Datanet',img:'',category:'Telecom'
        },
        {
            id:'27',text:'Garaj',img:'garaj',category:'Ecommerce'
        },

    ],

}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'GOODS_LOADED':
            return {
                goods: action.payload
            };

        default:
            return state
    }

}

export default reducer