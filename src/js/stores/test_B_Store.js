import { observable, action, computed } from "mobx";
import axios from "axios";
import {observer} from 'mobx-react';
import index from "jss";
import moment from 'moment'




export default class TEST_B {
    @observable result

    constructor() {
        this.result = {
            "Sunday" : [],
            "Monday" : [],
            "Tuesday": [],
            "Wednesday":[],
            "Thursday":[],
            "Friday":[],
            "Saturday":[]
        }
        // this.result = {}
      }

      @action 
      testapi(){
          axios.get(`http://uinames.com/api/?ext&amount=25`)
          .then(respons => {
              if(respons.status ===200){
                let checkday =  ''
               
                respons.data.map((item, index) => {
                    checkday = moment(item.birthday.raw)
                    switch (checkday.format('dddd')) {
                        case "Sunday":
                            this.result.Sunday.push({'name':item.name, "photo":item.photo}) 
                            break;
                        case "Monday":
                            this.result.Monday.push({'name':item.name, "photo":item.photo}) 
                            break;
                        case "Tuesday":
                            this.result.Tuesday.push({'name':item.name, "photo":item.photo}) 
                            break;
                        case "Wednesday":
                            this.result.Wednesday.push({'name':item.name, "photo":item.photo}) 
                            break;
                        case "Thursday":
                            this.result.Thursday.push({'name':item.name, "photo":item.photo}) 
                            break;
                        case "Friday":
                            this.result.Friday.push({'name':item.name, "photo":item.photo}) 
                            break;
                        case  "Saturday":
                            this.result.Saturday.push({'name':item.name, "photo":item.photo}) 
                            break;
                        
                      }
                })
              }
          })
      }

}