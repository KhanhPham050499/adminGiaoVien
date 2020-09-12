import React, { Component } from 'react';
import './App.css';
import TaskListPhuTrach from './components/TaskListPhuTrach'

class LopPhuTrach extends Component {
 
    render() {

        return (
            <div className='Form-app-diem'>
                <div className="abc">
                    <div className="row">
                        <h1>Danh sách giảng dạy các lớp</h1>

               
                            <div className="panel panel-primary panel-diem" style={{marginTop:'60px'}}>
                                <div className="panel-heading">
                                    <h3 className="panel-title"></h3>
                                </div>
                                <div className="panel-body">

                                    {/* Task List*/}
                                    <TaskListPhuTrach/>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

        );
    }
}



export default LopPhuTrach;