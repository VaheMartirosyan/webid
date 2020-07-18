import React,{Component}from "react";
import './HomePortfolio.scss'
import './MediaHomePortfolio.scss'
import { filterAll,filterNonGov,filterTech,
    filterTelecom,filterEducation,filterAutoMoto,
    filterArt,filterIndustrial,filterEcommerce,
    filterGov,filterHospitality,filterActivity

} from "../../../reducers/portfolio/action";
import {connect} from 'react-redux';

class HomePortfolio extends Component{
    constructor(props) {
        super(props);
        this.toTop = React.createRef()
        this.state = {
            load:false
        }
    }
    all = (prop) =>{
        switch (prop) {
            case 'all' : this.props.filterAll(true);
                break
            case 'nongov' :  this.props.filterNonGov(true)
                break
            case 'tech' : this.props.filterTech(true)
                break
            case 'telecom' : this.props.filterTelecom(true)
                break
            case 'education' :  this.props.filterEducation(true)
                break
            case 'auto_moto' :  this.props.filterAutoMoto(true)
                break
            case 'art' :  this.props.filterArt(true)
                break
            case 'industrial' : this.props.filterIndustrial(true)
                break
            case 'ecommerce' : this.props.filterEcommerce(true)
                break
            case 'news' : this.props.filterGov(true)
                break
            case 'hospitality' :  this.props.filterHospitality(true)
                break
            case 'activity' :  this.props.filterActivity(true)
                break
        }
    }
    loadMore = () =>{
        this.setState({load:!this.state.load})
       if(this.state.load){
           window.scrollTo({behavior:'smooth',top:this.toTop.current.offsetTop -130})
       }
        if(!this.state.load){
            window.scrollTo({behavior:'smooth',top:this.toTop.current.offsetTop +200000})
        }

    }
    render() {
       const allFilters = this.props.allFilters
        return(
           <div className={'port_all'} ref={this.toTop}>
               <div className={`d-flex ${(this.state.load && allFilters.all )? 'portfolio_more': 'portfolio'}`}>
                   <div className={'portfolio_filter  '}>
                       <ul className={'d-flex'}>
                           <li className={allFilters.all ? 'li_active' : null} onClick={()=>this.all('all')}><a>All</a></li>
                           <li className={allFilters.nonGov ? 'li_active' : null} onClick={()=>this.all('nongov')}>Non-Govermental</li>
                           <li className={allFilters.tech ? 'li_active' : null} onClick={()=>this.all('tech')}>High Tech</li>
                           <li className={allFilters.telecom ? 'li_active' : null} onClick={()=>this.all('telecom')}>Telecom</li>
                           <li className={allFilters.education ? 'li_active' : null} onClick={()=>this.all('education')}>Education</li>
                           <li className={allFilters.auto_moto ? 'li_active' : null} onClick={()=>this.all('auto_moto')}>Auto & Moto</li>
                           <li className={allFilters.art ? 'li_active' : null} onClick={()=>this.all('art')}>Art</li>
                           <li className={allFilters.industrial ? 'li_active' : null} onClick={()=>this.all('industrial')}>Industrial</li>
                           <li className={allFilters.ecommerce ? 'li_active' : null} onClick={()=>this.all('ecommerce')}>Ecommerce</li>
                           <li className={allFilters.news ? 'li_active' : null} onClick={()=>this.all('news')}>Govermental</li>
                           <li className={allFilters.hospitality ? 'li_active' : null} onClick={()=>this.all('hospitality')}>Hospitality</li>
                           <li className={allFilters.activity ? 'li_active' : null} onClick={()=>this.all('activity')}>Activity</li>

                       </ul>
                   </div>
                   <div className={'d-flex flex-wrap '} style={{position:'relative',width:'70%',margin:'0 auto'}}>
                       {this.props.portfolio.map((e,i)=>{
                           return(
                               <div key={i} className={ `col-lg-4 col-sm-6 main_port bod${e.id} ${allFilters.all ? `all${e.id}`: allFilters.nonGov ? `nongov${e.id}` :
                                  allFilters.tech ? `tech${e.id}`:allFilters.telecom ? `tel${e.id}` :allFilters.education ? `educate${e.id}` :
                                      allFilters.auto_moto ? `auto${e.id}` :allFilters.art ? `art${e.id}` :allFilters.industrial ? `industrial${e.id}` :
                                          allFilters.ecommerce ? `ecom${e.id}` :allFilters.news ? `news${e.id}` :allFilters.hospitality ? `hosp${e.id}` : 
                                              allFilters.activity ? `active${e.id}` :  this.state.load ? `bodo${e.id}` : `bod`
                               }`

                               }>
                                    <a className='port_hovered' href={e.link} target="_blank">
                                        <div className='portfolio_hovered1'>
                                            <div>
                                                <p>{e.text}</p>
                                            </div>
                                        </div>
                                        <div className='portfolio_hovered2'>
                                            <div>
                                                <p>{e.category}</p>
                                            </div>
                                        </div>
                                    </a>
                                  
                               </div>
                           )
                       })}
                   </div>
                   <div className={'load_more'}>
                       <button id={'btn'} onClick={this.loadMore} ><span>{!this.state.load ? 'Show All' : "No More Works "}</span></button>
                   </div>
               </div>
           </div>
        )

    }
}


const mapDispatch ={
    filterAll,
    filterNonGov,
    filterTech,
    filterTelecom,
    filterEducation,
    filterAutoMoto,
    filterArt,
    filterIndustrial,
    filterEcommerce,
    filterGov,
    filterHospitality,
    filterActivity
}

const mapState=(state)=>{
    return {
       portfolio:state.reducer.arr,
       allFilters:state.reducer,

    }
};

export default connect(mapState,mapDispatch)(HomePortfolio);