import React from 'react';
import { Grid } from 'material-ui';
import { Table, Input, Row, Col } from 'reactstrap';
import { RegularCard, ItemGrid } from '../../components';
import styles from './test-A.scss'
import { Link } from "react-router-dom";
import FaPlusSquare from "react-icons/lib/fa/plus-square"
import FaSearch from "react-icons/lib/fa/search"
import { inject, observer } from 'mobx-react'


@inject("store")
@observer
class TableList extends React.Component{
    render(){
        return (
            <Grid container >
                <ItemGrid xs={12} sm={12} md={12} >
                    <RegularCard
                        cardTitle="test_A"
                        cardSubtitle=""
                        content={
                            <div>
                                <div className={styles.test_A}>
                                        coffee cup!
                                </div>   
                           </div>
                        }
                    />
                </ItemGrid>
            </Grid>
        );
    }
}

export default TableList;
