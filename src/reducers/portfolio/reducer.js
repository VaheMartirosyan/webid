const initialstate = {
    arr:[
        {
            id:'1',text:'Jeep-Official',img:'',class:''
        },
        {
            id:'2',text:'Alfaromeo',img:'',class:''
        },
        {
            id:'3',text:'marcomoratti',img:'',class:''
        },
        {
            id:'4',text:'goldcrest3d',img:'',class:''
        },
        {
            id:'5',text:'SSpack',img:'',class:''
        },
        {
            id:'6',text:'allhotels',img:'',class:''
        },
        {
            id:'7',text:'Fiat',img:'',class:''
        },
        {
            id:'8',text:'miteesocks',img:'',class:''
        },
        {
            id:'9',text:'datanet',img:'',class:''
        },
        {
            id:'10',text:'formward',img:'',class:''
        },
        {
            id:'11',text:'vd',img:'',class:''
        },
        {
            id:'12',text:'sda',img:'',class:''
        },
        {
            id:'13',text:'finecars',img:'',class:''
        },
        {
            id:'14',text:'datacom',img:'',class:''
        },
        {
            id:'15',text:'thermostyle',img:'',class:''
        },
        {
            id:'16',text:'r2e2',img:'',class:''
        },
        {
            id:'17',text:'chees4you',img:'',class:''
        },
        {
            id:'18',text:'prodigi',img:'',class:''
        },
        {
            id:'19',text:'levishalice',img:'',class:''
        },
        {
            id:'20',text:'ladaarmenia',img:'',class:''
        },
        {
            id:'21',text:'shoppingian',img:'',class:''
        },
        {
            id:'22',text:'gorisagro',img:'',class:''
        },
        {
            id:'23',text:'grandsport',img:'',class:''
        },
        {
            id:'24',text:'armdict',img:'',class:''
        },
        {
            id:'25',text:'anunner',img:'',class:''
        },
        {
            id:'26',text:'datanet',img:'',class:''
        },
        {
            id:'27',text:'garaj',img:'',class:''
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