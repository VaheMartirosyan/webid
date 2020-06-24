import React,{Component}from "react";
import './HomePortfolio.scss'
import './MediaHomePortfolio.scss'
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
            load:false

        }
    }
    all = (prop) =>{
        switch (prop) {

            case 'all' : this.setState({all:true,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
                news:false,entertaiment:false})
                break
            case 'nongov' :  this.setState({all:false,nonGov:true,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
                news:false,entertaiment:false})
                break
            case 'tech' :  this.setState({all:false,nonGov:false,tech:true,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
                news:false,entertaiment:false})
                break
            case 'telecom' :  this.setState({all:false,nonGov:false,tech:false,telecom:true,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
                news:false,entertaiment:false})
                break
            case 'education' :  this.setState({all:false,nonGov:false,tech:false,telecom:false,education:true,auto_moto:false,art:false,industrial:false,ecommerce:false,
                news:false,entertaiment:false})
                break
            case 'auto_moto' :  this.setState({all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:true,art:false,industrial:false,ecommerce:false,
                news:false,entertaiment:false})
                break
            case 'art' :  this.setState({all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:true,industrial:false,ecommerce:false,
                news:false,entertaiment:false})
                break
            case 'industrial' :  this.setState({all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:true,ecommerce:false,
                news:false,entertaiment:false})
                break
            case 'ecommerce' :  this.setState({all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:true,
                news:false,entertaiment:false})
                break
            case 'news' :  this.setState({all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
                news:true,entertaiment:false})
                break
            // case 'entertaiment' :  this.setState({all:false,nonGov:false,tech:false,telecom:false,education:false,auto_moto:false,art:false,industrial:false,ecommerce:false,
            //     news:false,entertaiment:true})
            //     break
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
        console.log(this.state.mzxncbzbc)

        return(
           <div className={'port_all'} ref={this.toTop}>
               <div className={`d-flex ${(this.state.load && this.state.all )? 'portfolio_more': 'portfolio'}`}>
                   <div className={'portfolio_filter  '}>
                       <ul className={'d-flex'}>
                           <li onClick={()=>this.all('all')}>All</li>
                           <li onClick={()=>this.all('nongov')}>Non-Govermental</li>
                           <li onClick={()=>this.all('tech')}>Tech</li>
                           <li onClick={()=>this.all('telecom')}>Telecom</li>
                           <li onClick={()=>this.all('education')}>Education</li>
                           <li onClick={()=>this.all('auto_moto')}>Auto & Moto</li>
                           <li onClick={()=>this.all('art')}>Art</li>
                           <li onClick={()=>this.all('industrial')}>Industrial</li>
                           <li onClick={()=>this.all('ecommerce')}>Ecommerce</li>
                           <li onClick={()=>this.all('news')}>Govermental</li>
                           {/*<li onClick={()=>this.all('entertaiment')}>Entertaiment</li>*/}

                       </ul>
                   </div>
                   <div className={'d-flex flex-wrap '} style={{position:'relative',width:'70%',margin:'0 auto'}}>
                       {this.props.portfolio.map((e,i)=>{
                           return(
                               <div key={i} className={ `col-lg-4 col-md-6 bod${e.id} ${this.state.all ? `all${e.id}`: this.state.nonGov ? `nongov${e.id}` :
                                   this.state.tech ? `tech${e.id}`: this.state.telecom ? `tel${e.id}` : this.state.education ? `educate${e.id}` :
                                       this.state.auto_moto ? `auto${e.id}` : this.state.art ? `art${e.id}` : this.state.industrial ? `industrial${e.id}` :
                                           this.state.ecommerce ? `ecom${e.id}` : this.state.news ? `news${e.id}` : this.state.entertaiment ? `enter${e.id}` :  this.state.load ? `bodo${e.id}` : `bod${e.id}`
                               }`

                               }>{e.text}</div>
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




const mapState=(state)=>{
    return {
       portfolio:state.reducer.arr
    }
};

export default connect(mapState)(HomePortfolio);