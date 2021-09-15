import React, {useRef} from "react";
import "../CSS/ReactHeader.scss";
import { Link } from "react-router-dom";

function Drawer(props){
    return(

        <div id="drawer1" className={props.drawerState}>
            <a className="avatar" data-icon=">"/>
            <ul className="sideList">
                <li className="sideItem">
                    <Link to="/">Home</Link>
                </li>
                <li className="sideItem">
                    <Link to="/about">About</Link>
                </li>
                <li className="sideItem">
                    <Link to="/cv">CV</Link>
                </li>
                <li className="sideItem">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
            </ul>
        </div>

    )

}

class DrawerToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: true,
            isDrawer: this.props.drawerState}
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,

        }));
    }

    render() {

        return (
            <div className="btnWrap">
                <button className="toggleBtn" onClick={this.handleClick}
                ><i data-icon={this.state.isOpen ? 'a' : 'h'} style={{marginRight: 10}}/> {this.state.isOpen ? 'Menu' : 'Close'}
                </button>
                <Drawer drawerState={this.state.isOpen ? 'drawClose' : 'drawOpen'}/>
            </div>
        );
    }
}

const Header = (props) =>{
    return <div className={props.hdrClass}/>
}

class HeaderScroll extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isTop: true
        };
    }
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }
    render() {
        return (
            <div style={{height:'30vh'}}>
                <div id="hdr1" style={{top: 0}} className={this.state.isTop ? 'hdrDown' : 'hdrUp'}>
                </div>
            </div>
        )
    }
};

class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {isOpen: false,
            isDrawer: this.props.drawerState,
            isTop: this.isTop}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,

        }));

    }
    render() {
        return (
            <div>
                <DrawerToggle className={this.state.isTop ? 'togInit' : 'togScroll'}/>
                <HeaderScroll/>
            </div>
        )
    }
}

export default Page;