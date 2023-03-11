
import React from "react"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import { Box } from '@chakra-ui/react'
  import { Checkbox, CheckboxGroup } from "@chakra-ui/react"
  import { Input } from "@chakra-ui/react"
  import { Textarea } from "@chakra-ui/react"
  import { Button, ButtonGroup } from "@chakra-ui/react"
  import { SimpleGrid } from '@chakra-ui/react'
  import { ChakraProvider } from "@chakra-ui/react";
  import { Heading } from "@chakra-ui/react"
  import { Select } from '@chakra-ui/react'




// team 5

export default class ViewFeedback extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            content: null,
            myEmployeeList: [],
            myDonorList: [],
            myVolunteerList: [],
            headers: [],
            loading: true,
            settings: {},
            error: ""
        }
        this.settings = {
            title: "ViewFeedback",
            primaryColor: "#a6192e",
            accentColor: "#94795d",
            textColor: "#ffffff",
            textColorInvert: "#606060",
            apiEmployee: "/api/Employee/",
            apiDonor: "/api/Donor/",
            apiVolunteer: "/api/Volunteer/"
        }
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
            return res.json();
        });
    }
    
    update = async (data) =>{
        console.log(data);
        return fetch(this.settings.api + "UpdateAndFetch/" + data.RequestId , {
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
        var updateData = data;
        var fileUploadFields = [];
        const fieldSettings = this.state.settings.data.FieldSettings;
        for(const field of Object.keys(fieldSettings)){
            if (fieldSettings[field].type === "file") {
                fileUploadFields.push(field);
            }
        }
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
        return (
            

            <ChakraProvider>

            <div style={{ marginTop: '80px', marginBottom: '30px' }}> 


            <Heading as="h3" size="lg" style={{ marginTop: '10px', marginBottom: '20px' }}>
                View All Performance Evaluation Form
            </Heading>

    <Accordion allowToggle>


    <AccordionItem>
    <h2>
      <AccordionButton style={{ backgroundColor: 'lightblue', border: '1px solid grey' }}>
        <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'lightblue' }}>
        <span style={{ margin: '50px', marginRight: '250px' }}>
        Form ID	
        </span>
        <span style={{ margin: '50px' }}>
        Service Center	
        </span>
        <span style={{ margin: '50px' }}>
        Performance	
        </span>
        <span style={{ margin: '50px' }}>
        Quater	
        </span>
        <span style={{ margin: '50px' }}>
        Year	
        </span>
        <span style={{ margin: '50px' }}>
        DateTime Submitted
        </span>
        </Box>
      </AccordionButton>
    </h2>
  </AccordionItem>


    <AccordionItem>
    <h2>
      <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
        <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
        <span style={{ margin: '50px', marginRight: '80px' }}>
        4e2f413a-7c9b-4609-b789-184d2dfda8af  
        </span>
        <span style={{ margin: '50px', marginRight: '120px' }}>
        8
        </span>
        <span style={{ margin: '50px', marginRight: '90px' }}>
        Good
        </span>
        <span style={{ margin: '40px', marginRight: '70px' }}>
        Q1
        </span>
        <span style={{ margin: '50px' }}>
        2023
        </span>
        <span style={{ margin: '50px' }}>
        13/03/2023 08:45:23
        </span>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
      
      
      <br/><br/><br/>
        <SimpleGrid columns={2} spacing={20}>
            <Box height='500px'>
                Service Center
                <br/><br/>
                <Select placeholder='8' size='sm'>
                </Select>
                <br/><br/><br/>
                Performance
                <br/><br/>
                <Select placeholder='Good' size='sm'>
                </Select>
                <br/><br/><br/>
                Areas Done Well:
                <br/><br/>
                <Textarea placeholder="Completed all tasks on time" />
                <br/><br/><br/>
                Areas of Improve:
                <br/><br/>
                <Textarea placeholder="Exceeded Budget" />
            </Box>
            <Box height='500px'>
                
                <div style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>

                <Heading as="h6" size="md" style={{ marginTop: '10px', marginBottom: '20px' }}>
                Status
                </Heading>
                
                Expenses (Out): <u>$1 Million</u>

                <br/><br/>

                Donation (In): <u>$1.5 Million</u>

                <br/><br/>

                Man Hour: <u>33h</u>

                <br/><br/>

                Progress: 40% - 45%

                </div>
                <br/><br/><br/><br/>
            </Box>
        </SimpleGrid>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
        <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
        <span style={{ margin: '50px', marginRight: '80px' }}>
        4e2f413a-7c9b-4609-b789-184d2dfda8af  
        </span>
        <span style={{ margin: '50px', marginRight: '120px' }}>
        8
        </span>
        <span style={{ margin: '50px', marginRight: '90px' }}>
        Good
        </span>
        <span style={{ margin: '40px', marginRight: '70px' }}>
        Q1
        </span>
        <span style={{ margin: '50px' }}>
        2023
        </span>
        <span style={{ margin: '50px' }}>
        13/03/2023 08:45:23
        </span>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
      
      
      <br/><br/><br/>
        <SimpleGrid columns={2} spacing={20}>
            <Box height='500px'>
                Service Center
                <br/><br/>
                <Select placeholder='8' size='sm'>
                </Select>
                <br/><br/><br/>
                Performance
                <br/><br/>
                <Select placeholder='Good' size='sm'>
                </Select>
                <br/><br/><br/>
                Areas Done Well:
                <br/><br/>
                <Textarea placeholder="Enter here . . ." />
                <br/><br/><br/>
                Areas of Improve:
                <br/><br/>
                <Textarea placeholder="Enter here . . ." />
            </Box>
            <Box height='500px'>
                
                <div style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>

                <Heading as="h6" size="md" style={{ marginTop: '10px', marginBottom: '20px' }}>
                Status
                </Heading>
                
                Expenses (Out): <u>$1 Million</u>

                <br/><br/>

                Donation (In): <u>$1.5 Million</u>

                <br/><br/>

                Man Hour: <u>33h</u>

                <br/><br/>

                Progress: 40% - 45%

                </div>
                
                

                <br/><br/><br/><br/>
            </Box>
        </SimpleGrid>
    </AccordionPanel>
  </AccordionItem>




  <AccordionItem>
    <h2>
      <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
        <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
        <span style={{ margin: '50px', marginRight: '80px' }}>
        4e2f413a-7c9b-4609-b789-184d2dfda8af  
        </span>
        <span style={{ margin: '50px', marginRight: '120px' }}>
        8
        </span>
        <span style={{ margin: '50px', marginRight: '90px' }}>
        Good
        </span>
        <span style={{ margin: '40px', marginRight: '70px' }}>
        Q1
        </span>
        <span style={{ margin: '50px' }}>
        2023
        </span>
        <span style={{ margin: '50px' }}>
        13/03/2023 08:45:23
        </span>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
      
      
      <br/><br/><br/>
        <SimpleGrid columns={2} spacing={20}>
            <Box height='500px'>
                Service Center
                <br/><br/>
                <Select placeholder='8' size='sm'>
                </Select>
                <br/><br/><br/>
                Performance
                <br/><br/>
                <Select placeholder='Good' size='sm'>
                </Select>
                <br/><br/><br/>
                Areas Done Well:
                <br/><br/>
                <Textarea placeholder="Enter here . . ." />
                <br/><br/><br/>
                Areas of Improve:
                <br/><br/>
                <Textarea placeholder="Enter here . . ." />
            </Box>
            <Box height='500px'>
                
                <div style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>

                <Heading as="h6" size="md" style={{ marginTop: '10px', marginBottom: '20px' }}>
                Status
                </Heading>
                
                Expenses (Out): <u>$1 Million</u>

                <br/><br/>

                Donation (In): <u>$1.5 Million</u>

                <br/><br/>

                Man Hour: <u>33h</u>

                <br/><br/>

                Progress: 40% - 45%

                </div>
                
                

                <br/><br/><br/><br/>
            </Box>
        </SimpleGrid>
    </AccordionPanel>
  </AccordionItem>




  <AccordionItem>
    <h2>
      <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
        <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
        <span style={{ margin: '50px', marginRight: '80px' }}>
        4e2f413a-7c9b-4609-b789-184d2dfda8af  
        </span>
        <span style={{ margin: '50px', marginRight: '120px' }}>
        8
        </span>
        <span style={{ margin: '50px', marginRight: '90px' }}>
        Good
        </span>
        <span style={{ margin: '40px', marginRight: '70px' }}>
        Q1
        </span>
        <span style={{ margin: '50px' }}>
        2023
        </span>
        <span style={{ margin: '50px' }}>
        13/03/2023 08:45:23
        </span>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
      
      
      <br/><br/><br/>
        <SimpleGrid columns={2} spacing={20}>
            <Box height='500px'>
                Service Center
                <br/><br/>
                <Select placeholder='8' size='sm'>
                </Select>
                <br/><br/><br/>
                Performance
                <br/><br/>
                <Select placeholder='Good' size='sm'>
                </Select>
                <br/><br/><br/>
                Areas Done Well:
                <br/><br/>
                <Textarea placeholder="Enter here . . ." />
                <br/><br/><br/>
                Areas of Improve:
                <br/><br/>
                <Textarea placeholder="Enter here . . ." />
            </Box>
            <Box height='500px'>
                
                <div style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>

                <Heading as="h6" size="md" style={{ marginTop: '10px', marginBottom: '20px' }}>
                Status
                </Heading>
                
                Expenses (Out): <u>$1 Million</u>

                <br/><br/>

                Donation (In): <u>$1.5 Million</u>

                <br/><br/>

                Man Hour: <u>33h</u>

                <br/><br/>

                Progress: 40% - 45%

                </div>
                
                

                <br/><br/><br/><br/>
            </Box>
        </SimpleGrid>
    </AccordionPanel>
  </AccordionItem>


  


</Accordion>





            </div>
            </ChakraProvider>

          


            )
        }



    // render(){
    //     if(this.state.loading){
    //         return <Loading></Loading>
    //     }else{
            
    //     return(
    //         <DatapageLayout 
    //             settings={this.settings}
    //             fieldSettings={this.state.settings.data.FieldSettings} 
    //             headers={this.state.settings.data.ColumnSettings} 
    //             data={this.state.content.data}
    //             updateHandle = {this.handleUpdate}
    //             requestRefresh = {this.requestRefresh}
    //             error={this.state.error}
    //             requestError = {this.requestError}
    //             permissions={this.props.permissions}
    //             >
    //         </DatapageLayout>

    //         )
    //     }
    // }




}


