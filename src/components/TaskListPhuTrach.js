import React, { Component } from 'react';
// import TaskItemStudents from './TaskItemStudents'


class TaskListPhuTrach extends Component {
    

        render(){

        return (
               <div>
                    <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className = "text-center" rowSpan='2' style={{paddingBottom:'25px'  }}>LỚP</th>
                            <th className = "text-center" rowSpan='2' style={{paddingBottom:'25px'  }}>GIỜ GIẢNG DẠY</th>
                            <th className = 'text-center' colSpan='6'>THỨ/LỚP GIẢNG DẠY</th>
                        </tr>
                        <tr>
                            <th className = "text-center" >Thứ 2</th>
                            <th className = "text-center" >Thứ 3</th>
                            <th className = "text-center" >Thứ 4</th>
                            <th className = "text-center" >Thứ 5</th>
                            <th className = "text-center" >Thứ 6</th>
                            <th className = "text-center" >Thứ 7</th>
                        </tr>
                        <tr>
                            <th className = "text-center" rowSpan='3' style={{paddingBottom:'50px'  }}>Lớp 10</th>
                            <th className = "text-center" >7g00</th>
                            <th className = "text-center" ><a>Lớp 10B3</a></th>
                            <th className = "text-center" ><a>Lớp 10B1</a></th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ><a>Lớp 10B2</a></th>
                            <th className = "text-center" ></th>
                        </tr>
                        <tr>
                            <th className = "text-center" >7g50</th>
                            <th className = "text-center" ><a>Lớp 10B2</a></th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ><a>Lớp 10B3</a></th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ></th>
                        </tr>
                        <tr>
                            <th className = "text-center" >8g35</th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ><a>Lớp 10B1</a></th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ><a>Lớp 10B4</a></th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ></th>
                        </tr>
                        <tr>
                            <th className = "text-center" rowSpan='1' >Lớp 11</th>
                            <th className = "text-center" >13g00</th>
                            <th className = "text-center" ><a>Lớp 11B5</a></th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ><a>Lớp 11B2</a></th>
                        </tr>
                        <tr>
                            <th className = "text-center" rowSpan='1' >Lớp 12</th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ></th>
                            <th className = "text-center" ></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        
                    </tbody>
                    </table>
                    </div>      
                
            
        );
    }
}



export default TaskListPhuTrach;