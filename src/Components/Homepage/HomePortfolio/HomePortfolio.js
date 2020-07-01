import React,{Component}from "react";
import './HomePortfolio.scss'
import './MediaHomePortfolio.scss'
import { filterAll } from "../../../reducers/portfolio/action";
import {connect} from 'react-redux';

class HomePortfolio extends Component{
    constructor(props) {
        super(props);
        this.toTop = React.createRef()
        this.state = {
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
    }
    all = (prop) =>{
        switch (prop) {

            case 'all' : this.setState({all:true,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
                news:false,hospitality:false,activity:false,}) ;
                break
            case 'nongov' :  this.setState({all:false,nonGov:true,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
                news:false,hospitality:false,activity:false,})
                break
            case 'tech' :  this.setState({all:false,nonGov:false,tech:true,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
                news:false,hospitality:false,activity:false,})
                break
            case 'telecom' :  this.setState({all:false,nonGov:false,tech:false,telecom:true,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
                news:false,hospitality:false,activity:false,})
                break
            case 'education' :  this.setState({all:false,nonGov:false,tech:false,telecom:false,education:true,auto_moto:false,art:false,industrial:false,ecommerce:false,
                news:false,hospitality:false,activity:false,})
                break
            case 'auto_moto' :  this.setState({all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:true,art:false,industrial:false,ecommerce:false,
                news:false,hospitality:false,activity:false,})
                break
            case 'art' :  this.setState({all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:true,industrial:false,ecommerce:false,
                news:false,hospitality:false,activity:false,})
                break
            case 'industrial' :  this.setState({all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:true,ecommerce:false,
                news:false,hospitality:false,activity:false,})
                break
            case 'ecommerce' :  this.setState({all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:true,
                news:false,hospitality:false,activity:false,})
                break
            case 'news' :  this.setState({all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
                news:true,hospitality:false,activity:false,})
                break
            case 'hospitality' :  this.setState({all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
                news:false,hospitality:true,activity:false,})
                break
            case 'activity' :  this.setState({all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
                news:false,hospitality:false,activity:true,})
                break


        }
        // filterAll('hsbgdhyggh')
        // console.log(this.props.all)

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

        return(
           <div className={'port_all'} ref={this.toTop}>
               <div className={`d-flex ${(this.state.load && this.state.all )? 'portfolio_more': 'portfolio'}`}>
                   <div className={'portfolio_filter  '}>
                       <ul className={'d-flex'}>
                           <li className={this.state.all ? 'li_active' : null} onClick={()=>this.all('all')}><a>All</a></li>
                           <li className={this.state.nonGov ? 'li_active' : null} onClick={()=>this.all('nongov')}>Non-Govermental</li>
                           <li className={this.state.tech ? 'li_active' : null} onClick={()=>this.all('tech')}>High Tech</li>
                           <li className={this.state.telecom ? 'li_active' : null} onClick={()=>this.all('telecom')}>Telecom</li>
                           <li className={this.state.education ? 'li_active' : null} onClick={()=>this.all('education')}>Education</li>
                           <li className={this.state.auto_moto ? 'li_active' : null} onClick={()=>this.all('auto_moto')}>Auto & Moto</li>
                           <li className={this.state.art ? 'li_active' : null} onClick={()=>this.all('art')}>Art</li>
                           <li className={this.state.industrial ? 'li_active' : null} onClick={()=>this.all('industrial')}>Industrial</li>
                           <li className={this.state.ecommerce ? 'li_active' : null} onClick={()=>this.all('ecommerce')}>Ecommerce</li>
                           <li className={this.state.news ? 'li_active' : null} onClick={()=>this.all('news')}>Govermental</li>
                           <li className={this.state.hospitality ? 'li_active' : null} onClick={()=>this.all('hospitality')}>Hospitality</li>
                           <li className={this.state.activity ? 'li_active' : null} onClick={()=>this.all('activity')}>Activity</li>

                       </ul>
                   </div>
                   <div className={'d-flex flex-wrap '} style={{position:'relative',width:'70%',margin:'0 auto'}}>
                       {this.props.portfolio.map((e,i)=>{
                           return(
                               <div key={i} className={ `col-lg-4 col-sm-6 main_port bod${e.id} ${this.state.all ? `all${e.id}`: this.state.nonGov ? `nongov${e.id}` :
                                   this.state.tech ? `tech${e.id}`: this.state.telecom ? `tel${e.id}` : this.state.education ? `educate${e.id}` :
                                       this.state.auto_moto ? `auto${e.id}` : this.state.art ? `art${e.id}` : this.state.industrial ? `industrial${e.id}` :
                                           this.state.ecommerce ? `ecom${e.id}` : this.state.news ? `news${e.id}` : this.state.hospitality ? `hosp${e.id}` : 
                                               this.state.activity ? `active${e.id}` :  this.state.load ? `bodo${e.id}` : `bod`
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


// const mapDispatch ={
//     filterAll:filterAll()
// }

const mapState=(state)=>{
    return {
       portfolio:state.reducer.arr,
       all:state.reducer.all
    }
};

export default connect(mapState)(HomePortfolio);