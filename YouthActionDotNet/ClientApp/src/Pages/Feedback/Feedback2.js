import React from "react"
import { Loading } from "../../Components/appCommon"
import DatapageLayout from "../PageLayout"
import { Box } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { Textarea } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { SimpleGrid } from '@chakra-ui/react'
import { ChakraProvider } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react"
import { Select } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { useState } from "react";
import { Collapse } from "@chakra-ui/react";
import { StdButton } from "../../Components/common"
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure
    } from "@chakra-ui/react";
    import {
        Accordion,
        AccordionItem,
        AccordionButton,
        AccordionPanel,
        AccordionIcon,
      } from '@chakra-ui/react'
        import { Text } from "@chakra-ui/react";



function DrawerExample({ selectedOption, onOptionChange }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    const reset = () => {
      onOptionChange({ target: { value: '' } });
      onClose();
    }
  
    return (
      <>
        <Button ref={btnRef} onClick={onOpen} colorScheme="blue" style={{ marginLeft: '20px'}}>Filter</Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Filter Option</DrawerHeader>
  
            <DrawerBody>
              
              Choose a Filter Option:
              <br/><br/><br/><br/>
  
              Service Center
              <br/><br/>
              <Select placeholder='- Select a Service Center -' size='sm' value={selectedOption} onChange={onOptionChange}>
                  <option value='sc1'>1</option>
                  <option value='sc2'>2</option>
                  <option value='sc3'>3</option>
                  <option value='sc4'>4</option>
                  <option value='sc5'>5</option>
                  <option value='sc6'>6</option>
                  <option value='sc7'>7</option>
                  <option value='sc8'>8</option>
              </Select>
                  
                  <br/><br/>
  
              Performance
              <br/><br/>
              <Select placeholder='- Select a Performance -' size='sm' value={selectedOption} onChange={onOptionChange}>
                  <option value='Excellent'>Excellent</option>
                  <option value='Good'>Good</option>
                  <option value='Fair'>Fair</option>
                  <option value='Poor'>Poor</option>
                  <option value='Bad'>Bad</option>
                  </Select>

                  <br/><br/>
  
              Quater
              <br/><br/>
              <Select placeholder='- Select a Quater -' size='sm' value={selectedOption} onChange={onOptionChange}>
                  <option value='Q1'>Q1</option>
                  <option value='Q2'>Q2</option>
                  <option value='Q3'>Q3</option>
                  <option value='Q4'>Q4</option>
                  </Select>


                  <br/><br/>
  
              Year
              <br/><br/>
              <Select placeholder='- Select a Year -' size='sm' value={selectedOption} onChange={onOptionChange}>
                  <option value='2021'>2021</option>
                  <option value='2022'>2022</option>
                  <option value='2023'>2023</option>
                  </Select>
  
            </DrawerBody>
  
            <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="blue" onClick={() => {
              onClose();
              reset();
              }}>
              Reset
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }


export default class Feedback extends React.Component {

    
    // manually added the table
    state={
        content:null,
        headers:[],
        loading:true,
        settings: {},
        error: "",
        selectedOption: "",

        columnSettings: {
            FormID: {displayHeader: 'Form ID'},
            ServiceCenter: {displayHeader: 'Service Center'},
            Performance: {displayHeader: 'Performance'},
            Quater: {displayHeader: 'Quater'},
            Year: {displayHeader: 'Year'},
            DateTimeSubmitted: {displayHeader: 'DateTime Submitted'}
        },
        data: [
            {FormID: '4e2f413a-7c9b-4609-b789-184d2dfda8af', ServiceCenter: '2', Performance: 'Good', Quater: 'Q1', Year: '2023', DateTimeSubmitted: '13/03/2023 08:45:23', AreaDoneWell: 'Completed all task on time.', AreaOfImprovement: 'Exceeded Budget', ExpenseOut: '$3000', DonationIn: '$500', ManHour: '30h', Progression: '40% - 45%'},
            {FormID: '2e2f413a-7c9b-4609-b789-184d2dfda8aa', ServiceCenter: '3', Performance: 'Fair', Quater: 'Q2', Year: '2021', DateTimeSubmitted: '14/03/2023 08:45:23', AreaDoneWell: 'Completed all task on time.', AreaOfImprovement: 'Exceeded Budget', ExpenseOut: '$3500', DonationIn: '$1500', ManHour: '33h', Progression: '50% - 55%'},
            {FormID: 'te2f413a-7c9b-4609-b789-184d2dfda8as', ServiceCenter: '5', Performance: 'Bad', Quater: 'Q3', Year: '2022', DateTimeSubmitted: '15/03/2023 08:45:23', AreaDoneWell: 'Completed all task on time.', AreaOfImprovement: 'Exceeded Budget', ExpenseOut: '$4000', DonationIn: '$800', ManHour: '40h', Progression: '60% - 65%'},
            {FormID: 'ye2f413a-7c9b-4609-b789-184d2dfda8ad', ServiceCenter: '8', Performance: 'Good', Quater: 'Q4', Year: '2023', DateTimeSubmitted: '16/03/2023 08:45:23', AreaDoneWell: 'Completed all task on time.', AreaOfImprovement: 'Exceeded Budget', ExpenseOut: '$4500', DonationIn: '$9200', ManHour: '130h', Progression: '90% - 95%'},
        ],
        fieldSettings: {
            FormID: {type: "text", displayLabel: "Form ID", editable: "false", primaryKey: "false", tooltip: "null"},
            ServiceCenter: {type: "text", displayLabel: "Service Center", editable: "false", primaryKey: "false", tooltip: "null"},
            Performance: {type: "text", displayLabel: "Performance", editable: "false", primaryKey: "false", tooltip: "null"},
            Quater: {type: "text", displayLabel: "Quater", editable: "false", primaryKey: "false", tooltip: "null"},
            Year: {type: "text", displayLabel: "Year", editable: "false", primaryKey: "false", tooltip: "null"},
            DateTimeSubmitted: {type: "text", displayLabel: "DateTime Submitted", editable: "false", primaryKey: "false", tooltip: "null"},
            AreaDoneWell: {type: "text", displayLabel: "Area Done Well: ", editable: "false", primaryKey: "false", tooltip: "null"},
            AreaOfImprovement: {type: "text", displayLabel: "Area of Improvement: ", editable: "false", primaryKey: "false", tooltip: "null"},
            ExpenseOut: {type: "text", displayLabel: "Expense Out: ", editable: "false", primaryKey: "false", tooltip: "null"},
            DonationIn: {type: "text", displayLabel: "Donation In: ", editable: "false", primaryKey: "false", tooltip: "null"},
            ManHour: {type: "text", displayLabel: "Man Hour: ", editable: "false", primaryKey: "false", tooltip: "null"},
            Progression: {type: "text", displayLabel: "Progression: ", editable: "false", primaryKey: "false", tooltip: "null"}
        }
    }

    
      handleOptionChange = (event) => {
        this.setState({ selectedOption: event.target.value });
      };
    
      renderTextbox = () => {
        const {columnSettings, data, fieldSettings} = this.state
        if (this.state.loading)
        {
            return <loading></loading>
        }
        else
        {
            switch (this.state.selectedOption) {
            case "sc1":
            return (
                <>
                <Text>SC1: Nothing</Text>
                <br/><br/>
                </>
            )
            case "sc2":
            return (
                <>
                <Text>SC2</Text>
                </>
            )
            case "sc3":
            return (
                <>
                <Text>SC3</Text>
                </>
            )
            case "sc4":
            return (
                <>
                <Text>SC4: Nothing</Text>
                <br/><br/>
                </>
            )
            case "sc5":
            return (
                <>
                <Text>SC5</Text>
                </>
            )
            case "sc6":
            return (
                <>
                <Text>SC6: Nothing</Text>
                <br/><br/>
                </>
            )
            case "sc7":
            return (
                <>
                <Text>SC7: Nothing</Text>
                <br/><br/>
                </>
            )
            case "sc8":
            return (
                <>
                <Text>SC8</Text>
                </>
            )


            case "Excellent":
            return (
                <>
                <Text>Excellent: Nothing</Text>
                <br/><br/>
                </>
            )
            case "Good":
            return (
                <>
                <Text>Good</Text>
                </>
            )
            case "Fair":
            return (
                <>
                <Text>Fair</Text>
                </>
            )
            case "Poor":
            return (
                <>
                <Text>Poor: Nothing</Text>
                <br/><br/>
                </>
            )
            case "Bad":
            return (
                <>
                <Text>Bad</Text>
                </>
            )


            case "Q1":
            return (
                <>
                <Text>Q1</Text>
                </>
            )
            case "Q2":
            return (
                <>
                <Text>Q2</Text>
                </>
            )
            case "Q3":
            return (
                <>
                <Text>Q3</Text>
                </>
            )
            case "Q4":
            return (
                <>
                <Text>Q4</Text>
                </>
            )



            case "2021":
            return (
                <>
                <Text>2021</Text>
                </>
            )
            case "2022":
            return (
                <>
                <Text>2022</Text>
                </>
            )
            case "2023":

                    return (
                        <>
                        <Text>2023</Text>
                        <DatapageLayout 
                        settings={this.settings}
                        fieldSettings={fieldSettings} 
                        headers={columnSettings} 
                        data={data}
                        hasFields = {false}

                        updateHandle = {this.handleUpdate}
                        requestRefresh = {this.requestRefresh}
                        error={this.state.error}
                        permissions={this.props.permissions}
                        requestError={this.requestError}
                        >       

                        {[0, 3].map((index) => { 
                            return(
                                <div className="volunteer-extended">
                                    
                                    <SimpleGrid columns={2} spacing={20}>
                                    <Box height='500px'>

                                    
                                            <b>Service Center:</b>
                                            <br/><br/>
                                            <Select placeholder={data[index].ServiceCenter} size='sm'>
                                            </Select>
                                            <br/><br/><br/>
                                            <b>Performance:</b>
                                            <br/><br/>
                                            <Select placeholder={data[index].Performance} size='sm'>
                                            </Select>
                                            <br/><br/><br/>
                                            <b>Areas Done Well:</b>
                                            <br/><br/>
                                            <Textarea placeholder={data[index].AreaDoneWell} />
                                            <br/><br/><br/>
                                            <b>Areas of Improve:</b>
                                            <br/><br/>
                                            <Textarea placeholder={data[index].AreaOfImprovement} />
                                        
                                    </Box>
                                    <Box height='500px'>
                                        
                                        <div style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>

                                        <Heading as="h6" size="md" style={{ marginTop: '10px', marginBottom: '20px' }}>
                                        Status
                                        </Heading>
                                        
                                        Expenses (Out): {data[index].ExpenseOut}

                                        <br/><br/>

                                        Donation (In): {data[index].DonationIn}

                                        <br/><br/>

                                        Man Hour: {data[index].ManHour}

                                        <br/><br/>

                                        Progress: {data[index].Progression}

                                        </div>
                                        <br/><br/><br/><br/>
                                    </Box>
                                </SimpleGrid>

                                
                                </div>
                            )
                        })}

                        </DatapageLayout>
                        </>
                    )
                

            default:
                    return (
                        <>
                        
                        <Text>default</Text>

                        <DatapageLayout 
                        settings={this.settings}
                        fieldSettings={fieldSettings} 
                        headers={columnSettings} 
                        data={data}
                        hasFields = {false}

                        updateHandle = {this.handleUpdate}
                        requestRefresh = {this.requestRefresh}
                        error={this.state.error}
                        permissions={this.props.permissions}
                        requestError={this.requestError}
                        >       


                        {this.state.content.data.map((item, index) => {


                            return(
                                <div className="volunteer-extended">
                                    
                                    <SimpleGrid columns={2} spacing={20}>
                                    <Box height='500px'>

                                    
                                            <b>Service Center:</b>
                                            <br/><br/>
                                            <Select placeholder={data[index].ServiceCenter} size='sm'>
                                            </Select>
                                            <br/><br/><br/>
                                            <b>Performance:</b>
                                            <br/><br/>
                                            <Select placeholder={data[index].Performance} size='sm'>
                                            </Select>
                                            <br/><br/><br/>
                                            <b>Areas Done Well:</b>
                                            <br/><br/>
                                            <Textarea placeholder={data[index].AreaDoneWell} />
                                            <br/><br/><br/>
                                            <b>Areas of Improve:</b>
                                            <br/><br/>
                                            <Textarea placeholder={data[index].AreaOfImprovement} />
                                        
                                    </Box>
                                    <Box height='500px'>
                                        
                                        <div style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>

                                        <Heading as="h6" size="md" style={{ marginTop: '10px', marginBottom: '20px' }}>
                                        Status
                                        </Heading>
                                        
                                        Expenses (Out): {data[index].ExpenseOut}

                                        <br/><br/>

                                        Donation (In): {data[index].DonationIn}

                                        <br/><br/>

                                        Man Hour: {data[index].ManHour}

                                        <br/><br/>

                                        Progress: {data[index].Progression}

                                        </div>
                                        <br/><br/><br/><br/>
                                    </Box>
                                </SimpleGrid>

                                
                                </div>
                            )
                        })}

                        </DatapageLayout>
                        
                        </>
                    )
                
                

            }
        }

        
      };


    settings ={
        title:"Feedback",
        primaryColor: "#a6192e",
        accentColor: "#94795d",
        textColor: "#ffffff",
        textColorInvert: "#606060",
        api: "/api/Feedback/",
    }

    async componentDidMount(){
        await this.getContent().then((content)=>{
            console.log(content);
            this.setState({
                content:content,
            });
        })

        await this.getSettings().then((settings)=>{
            console.log(settings);
            this.setState({
                settings:settings,
            });
        })

        this.setState({
            loading:false,
        })
    }

    getSettings = async () => {
        // fetches http://...:5001/api/User/Settings
        return fetch(this.settings.api + "Settings" , {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => {
            console.log(res);
            return res.json();
        })
    }

    getContent = async () =>{
        return fetch( this.settings.api + "All" , {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => {
            console.log(res);
            //Res = {success: true, message: "Success", data: Array(3)}
            return res.json();
        });
    }

    update = async (data) =>{
        console.log(data);
        return fetch(this.settings.api + "UpdateAndFetch/" + data.FeedbackId , {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(async res => {
            return res.json();
        });
    }

    handleUpdate = async (data) =>{
        await this.update(data).then((content)=>{
            if(content.success){
                this.setState({
                    error:"",
                })
                return true;
            }else{
                this.setState({
                    error:content.message,
                })
                return false;
            }
        })
    }

    requestRefresh = async () =>{
        this.setState({
            loading:true,
        })
        await this.getContent().then((content)=>{
            console.log(content);
            this.setState({
                content:content,
                loading:false,
            });
        })
    }
    
    requestError = async (error) =>{
        this.setState({
            error:error,
        })
    }


    render() {

        const {columnSettings, data, fieldSettings} = this.state
        if (this.state.loading)
        {
            return <loading></loading>
        }
        else
        {
            console.log(data)

            return (

                <ChakraProvider>

            
            {/* <StdButton className={"secondary"}>Filter Option</StdButton> */}

            <div style={{ marginTop: '40px', marginBottom: '30px', width: '94%' }}> 

            

            {/* <DatapageLayout 
                settings={this.settings}
                fieldSettings={fieldSettings} 
                headers={columnSettings} 
                data={data}
                
                updateHandle = {this.handleUpdate}
                requestRefresh = {this.requestRefresh}
                error={this.state.error}
                permissions={this.props.permissions}
                requestError={this.requestError}
                >       


                {this.state.content.data.map((item, index) => {


                    return(
                        <div className="volunteer-extended">
                            
                            <SimpleGrid columns={2} spacing={20}>
                            <Box height='500px'>

                            
                                    <b>Service Center:</b>
                                    <br/><br/>
                                    <Select placeholder={data[index].ServiceCenter} size='sm'>
                                    </Select>
                                    <br/><br/><br/>
                                    <b>Performance:</b>
                                    <br/><br/>
                                    <Select placeholder={data[index].Performance} size='sm'>
                                    </Select>
                                    <br/><br/><br/>
                                    <b>Areas Done Well:</b>
                                    <br/><br/>
                                    <Textarea placeholder={data[index].AreaDoneWell} />
                                    <br/><br/><br/>
                                    <b>Areas of Improve:</b>
                                    <br/><br/>
                                    <Textarea placeholder={data[index].AreaOfImprovement} />
                                
                            </Box>
                            <Box height='500px'>
                                
                                <div style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>

                                <Heading as="h6" size="md" style={{ marginTop: '10px', marginBottom: '20px' }}>
                                Status
                                </Heading>
                                
                                Expenses (Out): {data[index].ExpenseOut}

                                <br/><br/>

                                Donation (In): {data[index].DonationIn}

                                <br/><br/>

                                Man Hour: {data[index].ManHour}

                                <br/><br/>

                                Progress: {data[index].Progression}

                                </div>
                                <br/><br/><br/><br/>
                            </Box>
                        </SimpleGrid>

                        
                        </div>
                    )
                })}

                </DatapageLayout> */}


                <DrawerExample
              selectedOption={this.state.selectedOption}
              onOptionChange={this.handleOptionChange}
            />    
            <br/><br/><br/><br/>
        {this.renderTextbox()}
        <br/><br/><br/><br/>

            </div>
            </ChakraProvider>

                

            )
        }

        
    }


    



}