import React from 'react';
import { Grid } from 'material-ui';
import { Table, Input, Row, Col } from 'reactstrap';
import { RegularCard, ItemGrid } from '../../components';
import styles from './test-B.scss'
import { Link } from "react-router-dom";
import FaPlusSquare from "react-icons/lib/fa/plus-square"
import FaSearch from "react-icons/lib/fa/search"
import { inject, observer } from 'mobx-react'
import moment from 'moment'

@inject("store")
@observer
class TableList extends React.Component{
    componentDidMount(){
        this.props.store.Test_B_Store.testapi()
    }
    checkdays(day){
        let days = moment(day)
        return days.format('dddd')
    }
    render(){

    let {result} = this.props.store.Test_B_Store
        return (
            <Grid container >
                <ItemGrid xs={12} sm={12} md={12} >
                    <RegularCard
                        cardTitle="test_B"
                        cardSubtitle=""
                        content={
                            <div className="table-responsive">
                            <Row style={{marginTop:"2rem"}}>
                                <Col>      
                                <Table hover style={{ tableLayout:"auto"}}>
                                        <thead>
                                        <tr style={{textAlign:"center"}}>
                                            <th>SUN</th>
                                            <th>MON</th>
                                            <th>TUE</th>
                                            <th>WED</th>
                                            <th>THU</th>
                                            <th>FRI</th>
                                            <th>SAT</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                    
                                            <tr>
                                                    <td>
                                                        {result.Sunday.map((item, index ) =>{
                                                            return (
                                                                <div key={index} style={{textAlign: "center"}}>
                                                                    <img src={item.photo} className={styles.sizeimage}/>
                                                                    <br/>
                                                                    <span>{item.name}</span>
                                                                    <br/> <br/>
                                                                </div>
                                                            )
                                                        })}
                                                    </td>
                                                    <td>
                                                    {result.Monday.map((item, index ) =>{
                                                            return (
                                                                <div key={index} style={{textAlign: "center"}}>
                                                                    <img src={item.photo} className={styles.sizeimage}/>
                                                                    <br/>
                                                                    <span>{item.name}</span>
                                                                    <br/> <br/>
                                                                </div>
                                                            )
                                                        })}
                                                    </td>
                                                    <td>
                                                    {result.Tuesday.map((item, index ) =>{
                                                            return (
                                                                <div key={index} style={{textAlign: "center"}}>
                                                                    <img src={item.photo} className={styles.sizeimage}/>
                                                                    <br/>
                                                                    <span>{item.name}</span>
                                                                    <br/> <br/>
                                                                </div>
                                                            )
                                                        })}
                                                    </td>
                                                    <td>
                                                    {result.Wednesday.map((item, index ) =>{
                                                            return (
                                                            <div key={index} style={{textAlign: "center"}}>
                                                                <img src={item.photo} className={styles.sizeimage}/>
                                                                <br/>
                                                                <span>{item.name}</span>
                                                                <br/> <br/>
                                                            </div>
                                                            )
                                                        })}
                                                    </td>
                                                    <td>
                                                    {result.Thursday.map((item, index ) =>{
                                                            return (
                                                                <div key={index} style={{textAlign: "center"}}>
                                                                    <img src={item.photo} className={styles.sizeimage}/>
                                                                    <br/>
                                                                    <span>{item.name}</span>
                                                                    <br/> <br/>
                                                                </div>
                                                            )
                                                        })}
                                                    </td>
                                                    <td>
                                                    {result.Friday.map((item, index ) =>{
                                                            return (
                                                                <div key={index} style={{textAlign: "center"}}>
                                                                    <img src={item.photo} className={styles.sizeimage}/>
                                                                    <br/>
                                                                    <span>{item.name}</span>
                                                                    <br/> <br/>
                                                                </div>
                                                            )
                                                        })}
                                                    </td>
                                                    <td>
                                                    {result.Saturday.map((item, index ) =>{
                                                            return (
                                                                <div key={index} style={{textAlign: "center"}}>
                                                                    <img src={item.photo} className={styles.sizeimage}/>
                                                                    <br/>
                                                                    <span>{item.name}</span>
                                                                    <br/> <br/>
                                                                </div>
                                                            )
                                                        })}
                                                    </td>
                                            </tr>
                                           
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                           </div>   
                        }
                    />
                </ItemGrid>
            </Grid>
        );
    }
}

export default TableList;
