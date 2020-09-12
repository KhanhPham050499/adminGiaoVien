import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Diem from './QuanlyDiem';
import LopPhuTrach from './lopphutrach'
class Menu extends Component {




    // onCancel = () => {
    //     this.setState({
    //         isDisplaySideBar: !this.state.isDisplaySideBar
    //     })
    // }

    render() {


        return (
            <Router>
                <div>
                    <div className='navbar-header'>
                        <h4 className='float-right'>admin</h4>
                    </div>

                    <input type='checkbox' id='check' />
                    <label htmlFor="check">
                        <i className="fas fa-bars" id="btn" onClick={this.onBar}></i>
                        <i className="fas fa-times" id="cancel" onClick={this.onCancel} ></i>
                    </label>


                    <img className="img-bg" alt="Image" />

                    <div className='sidebar'>
                        <header>Quản lý</header>
                        <ul>
                            <li>
                                <NavLink to='/lopphutrach' activeStyle={{ background: '#1a2225' }}>Lịch giảng dạy</NavLink>
                            </li>
                            <li>
                                <NavLink to='/lopchunhiem' activeStyle={{ background: '#1a2225' }}>Lớp chủ nhiệm</NavLink>
                            </li>
                            <li>
                                <a>
                                    <i className="fas fa-sign-out-alt"></i>
                                Đăng xuất</a>
                            </li>
                        </ul>
                    </div>


                    <Route path="/lopchunhiem" component={Diem} />
                    <Route path="/lopphutrach" component={LopPhuTrach} />
                </div>

            </Router>


        );
    }
}



export default Menu;