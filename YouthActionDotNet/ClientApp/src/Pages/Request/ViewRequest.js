
// import React from "react"
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
  import React, { Component } from "react";
  import { Select } from '@chakra-ui/react'
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

import { useState } from "react";
import { Text } from "@chakra-ui/react";



// team 5


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

            Resource Type
            <br/><br/>
            <Select placeholder='- Select a Resource Type -' size='sm' value={selectedOption} onChange={onOptionChange}>
                <option value='option1'>Time</option>
                <option value='option2'>Space</option>
                <option value='option3'>Money</option>
                <option value='option4'>Donor</option>
                <option value='option5'>Volunteer</option>
            </Select>
                
                <br/><br/>

            Status
            <br/><br/>
            <Select placeholder='- Select a Status -' size='sm' value={selectedOption} onChange={onOptionChange}>
                <option value='option1_pending'>Pending</option>
                <option value='option2_read'>Read</option>
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







export default class ViewRequest extends React.Component {
    

    state = {
        selectedOption: "",
      };
    
      handleOptionChange = (event) => {
        this.setState({ selectedOption: event.target.value });
      };
    
      renderTextbox = () => {
        switch (this.state.selectedOption) {
          case "option1":
            return (
                <>
                <Text>Time selected</Text>;
                <Accordion allowToggle>
                    <AccordionItem>
        <h2>
        <AccordionButton style={{ backgroundColor: 'lightblue', border: '1px solid grey' }}>
            <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'lightblue' }}>
            <span style={{ margin: '50px', marginRight: '250px' }}>
            Resource ID	
            </span>
            <span style={{ margin: '50px' }}>
            Project Name	
            </span>
            <span style={{ margin: '50px' }}>
            Resource Type	
            </span>
            <span style={{ margin: '50px' }}>
            Date Time	
            </span>
            <span style={{ margin: '50px' }}>
            Submitted By	
            </span>
            <span style={{ margin: '50px' }}>
            Status
            </span>
            </Box>
        </AccordionButton>
        </h2>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
                            <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
                            <span style={{ margin: '50px' }}>
                            4e2f413a-7c9b-4609-b789-184d2dfda8af  
                            </span>
                            <span style={{ margin: '50px', marginRight: '90px' }}>
                            Lion City Leap
                            </span>
                            <span style={{ margin: '50px' }}>
                            Time
                            </span>
                            <span style={{ margin: '50px' }}>
                            13/03/2023 08:45:23
                            </span>
                            <span style={{ margin: '50px' }}>
                            Guan Lin
                            </span>
                            <span style={{ margin: '50px' }}>
                            Pending
                            </span>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
                        
                        Project Name: Lion City Leap
                        <br/><br/><br/>
                        Type
                        <br/><br/>
                            <SimpleGrid columns={2} spacing={20}>
                                <Box height='200px'>
                                    <Checkbox colorScheme="green" defaultChecked style={{ marginTop: '5px' }}>
                                        Time
                                    </Checkbox>
                                    <Input placeholder="3 More Days" size="sm" style={{ marginLeft: '20px', width: '80%'}} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Space
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Money
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Donor
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Volunteer
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/><br/>
                                </Box>
                                <Box height='200px'>
                                    Description:
                                    <br/><br/>
                                    <Textarea placeholder="Enter your reason here . . ." />
                                    <br/><br/><br/><br/>
                                    
                                </Box>
                            </SimpleGrid>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                </>
            );
          case "option2":
            return (
            <>
            <Text>Space selected</Text>;
            <Accordion allowToggle>
                    <AccordionItem>
        <h2>
        <AccordionButton style={{ backgroundColor: 'lightblue', border: '1px solid grey' }}>
            <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'lightblue' }}>
            <span style={{ margin: '50px', marginRight: '250px' }}>
            Resource ID	
            </span>
            <span style={{ margin: '50px' }}>
            Project Name	
            </span>
            <span style={{ margin: '50px' }}>
            Resource Type	
            </span>
            <span style={{ margin: '50px' }}>
            Date Time	
            </span>
            <span style={{ margin: '50px' }}>
            Submitted By	
            </span>
            <span style={{ margin: '50px' }}>
            Status
            </span>
            </Box>
        </AccordionButton>
        </h2>
                    </AccordionItem>
                    <AccordionItem>
    <h2>
      <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
        <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
        <span style={{ margin: '50px' }}>
        d1f19e25-fb60-44b8-9f9e-6b3f3d3d3a1f	 
        </span>
        <span style={{ margin: '50px' }}>
        Garden State Growth
        </span>
        <span style={{ margin: '50px' }}>
        Space
        </span>
        <span style={{ margin: '50px' }}>
        14/03/2023 15:12:37
        </span>
        <span style={{ margin: '50px' }}>
        Yi Kiat
        </span>
        <span style={{ margin: '50px' }}>
        Pending
        </span>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
      
      Project Name: Garden State Growth
      <br/><br/><br/>
      Type
      <br/><br/>
      <SimpleGrid columns={2} spacing={20}>
            <Box height='200px'>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Time
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%'}} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultChecked style={{ marginTop: '5px' }}>
                    Space
                </Checkbox>
                <Input placeholder="Need 2 more Room" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Money
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Donor
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Volunteer
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/><br/>
            </Box>
            <Box height='200px'>
                Description:
                <br/><br/>
                <Textarea placeholder="Enter your reason here . . ." />
                <br/><br/><br/><br/>
                
            </Box>
        </SimpleGrid>
    </AccordionPanel>
                    </AccordionItem>
            </Accordion>
            </>
            )
          case "option3":
            return (
                <>
                <Text>Money selected</Text>;
                <Accordion allowToggle>
                        <AccordionItem>
            <h2>
            <AccordionButton style={{ backgroundColor: 'lightblue', border: '1px solid grey' }}>
                <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'lightblue' }}>
                <span style={{ margin: '50px', marginRight: '250px' }}>
                Resource ID	
                </span>
                <span style={{ margin: '50px' }}>
                Project Name	
                </span>
                <span style={{ margin: '50px' }}>
                Resource Type	
                </span>
                <span style={{ margin: '50px' }}>
                Date Time	
                </span>
                <span style={{ margin: '50px' }}>
                Submitted By	
                </span>
                <span style={{ margin: '50px' }}>
                Status
                </span>
                </Box>
            </AccordionButton>
            </h2>
                        </AccordionItem>
                        <AccordionItem>
    <h2>
      <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
        <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
        <span style={{ margin: '50px' }}>
        83ec00e3-3b3e-4a56-b7c9-9e03201b620f			 
        </span>
        <span style={{ margin: '50px' }}>
        Island Innovation
        </span>
        <span style={{ margin: '50px' }}>
        Money
        </span>
        <span style={{ margin: '50px' }}>
        16/03/2023 21:30:11
        </span>
        <span style={{ margin: '50px' }}>
        Ai Xin
        </span>
        <span style={{ margin: '50px' }}>
        Read
        </span>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
      
      Project Name: Island Innovation
      <br/><br/><br/>
      Type
      <br/><br/>
      <SimpleGrid columns={2} spacing={20}>
            <Box height='200px'>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Time
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%'}} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Space
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Money
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultChecked style={{ marginTop: '5px' }}>
                    Donor
                </Checkbox>
                <Input placeholder="$5500 more is needed" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Volunteer
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/><br/>
            </Box>
            <Box height='200px'>
                Description:
                <br/><br/>
                <Textarea placeholder="Enter your reason here . . ." />
                <br/><br/><br/><br/>
                
            </Box>
        </SimpleGrid>
    </AccordionPanel>
                        </AccordionItem>
                </Accordion>
                </>
                )
          case "option4":
            return (
                <>
                <Text>Donor selected</Text>;
                <Accordion allowToggle>
                        <AccordionItem>
            <h2>
            <AccordionButton style={{ backgroundColor: 'lightblue', border: '1px solid grey' }}>
                <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'lightblue' }}>
                <span style={{ margin: '50px', marginRight: '250px' }}>
                Resource ID	
                </span>
                <span style={{ margin: '50px' }}>
                Project Name	
                </span>
                <span style={{ margin: '50px' }}>
                Resource Type	
                </span>
                <span style={{ margin: '50px' }}>
                Date Time	
                </span>
                <span style={{ margin: '50px' }}>
                Submitted By	
                </span>
                <span style={{ margin: '50px' }}>
                Status
                </span>
                </Box>
            </AccordionButton>
            </h2>
                        </AccordionItem>
                        <AccordionItem>
    <h2>
      <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
        <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
        <span style={{ margin: '50px' }}>
        624a9865-d24a-4b52-9b2c-5a82b8dcd95d		 
        </span>
        <span style={{ margin: '50px' }}>
        Marina Milestone
        </span>
        <span style={{ margin: '50px' }}>
        Donor
        </span>
        <span style={{ margin: '50px' }}>
        15/03/2023 10:02:54
        </span>
        <span style={{ margin: '50px' }}>
        Jia Xin
        </span>
        <span style={{ margin: '50px' }}>
        Pending
        </span>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
      
      Project Name: Marina Milestone
      <br/><br/><br/>
      Type
      <br/><br/>
        <SimpleGrid columns={2} spacing={20}>
            <Box height='200px'>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Time
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%'}} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Space
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultChecked style={{ marginTop: '5px' }}>
                    Money
                </Checkbox>
                <Input placeholder="4 more is needed" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Donor
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Volunteer
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/><br/>
            </Box>
            <Box height='200px'>
                Description:
                <br/><br/>
                <Textarea placeholder="Enter your reason here . . ." />
                <br/><br/><br/><br/>
                
            </Box>
        </SimpleGrid>
    </AccordionPanel>
                        </AccordionItem>
                </Accordion>
                
                </>
                )
          case "option5":
            return (
                <>
                <Text>Volunteer selected</Text>;
                <Accordion allowToggle>
                        <AccordionItem>
            <h2>
            <AccordionButton style={{ backgroundColor: 'lightblue', border: '1px solid grey' }}>
                <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'lightblue' }}>
                <span style={{ margin: '50px', marginRight: '250px' }}>
                Resource ID	
                </span>
                <span style={{ margin: '50px' }}>
                Project Name	
                </span>
                <span style={{ margin: '50px' }}>
                Resource Type	
                </span>
                <span style={{ margin: '50px' }}>
                Date Time	
                </span>
                <span style={{ margin: '50px' }}>
                Submitted By	
                </span>
                <span style={{ margin: '50px' }}>
                Status
                </span>
                </Box>
            </AccordionButton>
            </h2>
                        </AccordionItem>
                        <AccordionItem>
    <h2>
      <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
        <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
        <span style={{ margin: '50px' }}>
            57b4c4dd-4bb7-4c4e-9fb9-0f0da8b08d1c  
        </span>
        <span style={{ margin: '50px' }}>
        Merlion Momentum
        </span>
        <span style={{ margin: '50px' }}>
        Volunteer
        </span>
        <span style={{ margin: '50px' }}>
        17/03/2023 13:55:48
        </span>
        <span style={{ margin: '50px' }}>
        Jing Yi
        </span>
        <span style={{ margin: '50px' }}>
        Read
        </span>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
      
      Project Name: Merlion Momentum
      <br/><br/><br/>
      Type
      <br/><br/>
      <SimpleGrid columns={2} spacing={20}>
            <Box height='200px'>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Time
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%'}} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Space
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Money
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Donor
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultChecked style={{ marginTop: '5px' }}>
                    Volunteer
                </Checkbox>
                <Input placeholder="10 more volunteers is needed" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/><br/>
            </Box>
            <Box height='200px'>
                Description:
                <br/><br/>
                <Textarea placeholder="Enter your reason here . . ." />
                <br/><br/><br/><br/>
                
            </Box>
        </SimpleGrid>
    </AccordionPanel>
                        </AccordionItem>
                </Accordion>
                </>
                )
          case "option1_pending":
            return (
                <>
                <Text>Pending selected</Text>;
                <Accordion allowToggle>
                        <AccordionItem>
            <h2>
            <AccordionButton style={{ backgroundColor: 'lightblue', border: '1px solid grey' }}>
                <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'lightblue' }}>
                <span style={{ margin: '50px', marginRight: '250px' }}>
                Resource ID	
                </span>
                <span style={{ margin: '50px' }}>
                Project Name	
                </span>
                <span style={{ margin: '50px' }}>
                Resource Type	
                </span>
                <span style={{ margin: '50px' }}>
                Date Time	
                </span>
                <span style={{ margin: '50px' }}>
                Submitted By	
                </span>
                <span style={{ margin: '50px' }}>
                Status
                </span>
                </Box>
            </AccordionButton>
            </h2>
                        </AccordionItem>
                        <AccordionItem>
                        <h2>
                        <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
                            <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
                            <span style={{ margin: '50px' }}>
                            4e2f413a-7c9b-4609-b789-184d2dfda8af  
                            </span>
                            <span style={{ margin: '50px', marginRight: '90px' }}>
                            Lion City Leap
                            </span>
                            <span style={{ margin: '50px' }}>
                            Time
                            </span>
                            <span style={{ margin: '50px' }}>
                            13/03/2023 08:45:23
                            </span>
                            <span style={{ margin: '50px' }}>
                            Guan Lin
                            </span>
                            <span style={{ margin: '50px' }}>
                            Pending
                            </span>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
                        
                        Project Name: Lion City Leap
                        <br/><br/><br/>
                        Type
                        <br/><br/>
                            <SimpleGrid columns={2} spacing={20}>
                                <Box height='200px'>
                                    <Checkbox colorScheme="green" defaultChecked style={{ marginTop: '5px' }}>
                                        Time
                                    </Checkbox>
                                    <Input placeholder="3 More Days" size="sm" style={{ marginLeft: '20px', width: '80%'}} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Space
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Money
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Donor
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Volunteer
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/><br/>
                                </Box>
                                <Box height='200px'>
                                    Description:
                                    <br/><br/>
                                    <Textarea placeholder="Enter your reason here . . ." />
                                    <br/><br/><br/><br/>
                                    
                                </Box>
                            </SimpleGrid>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
    <h2>
      <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
        <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
        <span style={{ margin: '50px' }}>
        d1f19e25-fb60-44b8-9f9e-6b3f3d3d3a1f	 
        </span>
        <span style={{ margin: '50px' }}>
        Garden State Growth
        </span>
        <span style={{ margin: '50px' }}>
        Space
        </span>
        <span style={{ margin: '50px' }}>
        14/03/2023 15:12:37
        </span>
        <span style={{ margin: '50px' }}>
        Yi Kiat
        </span>
        <span style={{ margin: '50px' }}>
        Pending
        </span>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
      
      Project Name: Garden State Growth
      <br/><br/><br/>
      Type
      <br/><br/>
      <SimpleGrid columns={2} spacing={20}>
            <Box height='200px'>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Time
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%'}} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultChecked style={{ marginTop: '5px' }}>
                    Space
                </Checkbox>
                <Input placeholder="Need 2 more Room" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Money
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Donor
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Volunteer
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/><br/>
            </Box>
            <Box height='200px'>
                Description:
                <br/><br/>
                <Textarea placeholder="Enter your reason here . . ." />
                <br/><br/><br/><br/>
                
            </Box>
        </SimpleGrid>
    </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
    <h2>
      <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
        <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
        <span style={{ margin: '50px' }}>
        624a9865-d24a-4b52-9b2c-5a82b8dcd95d		 
        </span>
        <span style={{ margin: '50px' }}>
        Marina Milestone
        </span>
        <span style={{ margin: '50px' }}>
        Donor
        </span>
        <span style={{ margin: '50px' }}>
        15/03/2023 10:02:54
        </span>
        <span style={{ margin: '50px' }}>
        Jia Xin
        </span>
        <span style={{ margin: '50px' }}>
        Pending
        </span>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
      
      Project Name: Marina Milestone
      <br/><br/><br/>
      Type
      <br/><br/>
        <SimpleGrid columns={2} spacing={20}>
            <Box height='200px'>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Time
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%'}} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Space
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultChecked style={{ marginTop: '5px' }}>
                    Money
                </Checkbox>
                <Input placeholder="4 more is needed" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Donor
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Volunteer
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/><br/>
            </Box>
            <Box height='200px'>
                Description:
                <br/><br/>
                <Textarea placeholder="Enter your reason here . . ." />
                <br/><br/><br/><br/>
                
            </Box>
        </SimpleGrid>
    </AccordionPanel>
                        </AccordionItem>
                </Accordion>
                </>
                )
          case "option2_read":
            return (
                <>
                <Text>Read selected</Text>;
                <Accordion allowToggle>
                        <AccordionItem>
            <h2>
            <AccordionButton style={{ backgroundColor: 'lightblue', border: '1px solid grey' }}>
                <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'lightblue' }}>
                <span style={{ margin: '50px', marginRight: '250px' }}>
                Resource ID	
                </span>
                <span style={{ margin: '50px' }}>
                Project Name	
                </span>
                <span style={{ margin: '50px' }}>
                Resource Type	
                </span>
                <span style={{ margin: '50px' }}>
                Date Time	
                </span>
                <span style={{ margin: '50px' }}>
                Submitted By	
                </span>
                <span style={{ margin: '50px' }}>
                Status
                </span>
                </Box>
            </AccordionButton>
            </h2>
                        </AccordionItem>
                        <AccordionItem>
    <h2>
      <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
        <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
        <span style={{ margin: '50px' }}>
        83ec00e3-3b3e-4a56-b7c9-9e03201b620f			 
        </span>
        <span style={{ margin: '50px' }}>
        Island Innovation
        </span>
        <span style={{ margin: '50px' }}>
        Money
        </span>
        <span style={{ margin: '50px' }}>
        16/03/2023 21:30:11
        </span>
        <span style={{ margin: '50px' }}>
        Ai Xin
        </span>
        <span style={{ margin: '50px' }}>
        Read
        </span>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
      
      Project Name: Island Innovation
      <br/><br/><br/>
      Type
      <br/><br/>
      <SimpleGrid columns={2} spacing={20}>
            <Box height='200px'>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Time
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%'}} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Space
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Money
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultChecked style={{ marginTop: '5px' }}>
                    Donor
                </Checkbox>
                <Input placeholder="$5500 more is needed" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/>
                <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                    Volunteer
                </Checkbox>
                <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                <br/><br/><br/>
            </Box>
            <Box height='200px'>
                Description:
                <br/><br/>
                <Textarea placeholder="Enter your reason here . . ." />
                <br/><br/><br/><br/>
                
            </Box>
        </SimpleGrid>
    </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
                                <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
                                <span style={{ margin: '50px' }}>
                                    57b4c4dd-4bb7-4c4e-9fb9-0f0da8b08d1c  
                                </span>
                                <span style={{ margin: '50px' }}>
                                Merlion Momentum
                                </span>
                                <span style={{ margin: '50px' }}>
                                Volunteer
                                </span>
                                <span style={{ margin: '50px' }}>
                                17/03/2023 13:55:48
                                </span>
                                <span style={{ margin: '50px' }}>
                                Jing Yi
                                </span>
                                <span style={{ margin: '50px' }}>
                                Read
                                </span>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
                            
                            Project Name: Merlion Momentum
                            <br/><br/><br/>
                            Type
                            <br/><br/>
                            <SimpleGrid columns={2} spacing={20}>
                                    <Box height='200px'>
                                        <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                            Time
                                        </Checkbox>
                                        <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%'}} />
                                        <br/><br/>
                                        <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                            Space
                                        </Checkbox>
                                        <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                        <br/><br/>
                                        <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                            Money
                                        </Checkbox>
                                        <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                        <br/><br/>
                                        <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                            Donor
                                        </Checkbox>
                                        <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                        <br/><br/>
                                        <Checkbox colorScheme="green" defaultChecked style={{ marginTop: '5px' }}>
                                            Volunteer
                                        </Checkbox>
                                        <Input placeholder="10 more volunteers is needed" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                        <br/><br/><br/>
                                    </Box>
                                    <Box height='200px'>
                                        Description:
                                        <br/><br/>
                                        <Textarea placeholder="Enter your reason here . . ." />
                                        <br/><br/><br/><br/>
                                        
                                    </Box>
                                </SimpleGrid>
                            </AccordionPanel>
                        </AccordionItem>
                </Accordion>
                </>
                )
          default:
            return (
                <>
                <Accordion allowToggle>
                    <AccordionItem>
                    <h2>
                    <AccordionButton style={{ backgroundColor: 'lightblue', border: '1px solid grey' }}>
                        <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'lightblue' }}>
                        <span style={{ margin: '50px', marginRight: '250px' }}>
                        Resource ID	
                        </span>
                        <span style={{ margin: '50px' }}>
                        Project Name	
                        </span>
                        <span style={{ margin: '50px' }}>
                        Resource Type	
                        </span>
                        <span style={{ margin: '50px' }}>
                        Date Time	
                        </span>
                        <span style={{ margin: '50px' }}>
                        Submitted By	
                        </span>
                        <span style={{ margin: '50px' }}>
                        Status
                        </span>
                        </Box>
                    </AccordionButton>
                    </h2>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
                            <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
                            <span style={{ margin: '50px' }}>
                            4e2f413a-7c9b-4609-b789-184d2dfda8af  
                            </span>
                            <span style={{ margin: '50px', marginRight: '90px' }}>
                            Lion City Leap
                            </span>
                            <span style={{ margin: '50px' }}>
                            Time
                            </span>
                            <span style={{ margin: '50px' }}>
                            13/03/2023 08:45:23
                            </span>
                            <span style={{ margin: '50px' }}>
                            Guan Lin
                            </span>
                            <span style={{ margin: '50px' }}>
                            Pending
                            </span>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
                        
                        Project Name: Lion City Leap
                        <br/><br/><br/>
                        Type
                        <br/><br/>
                            <SimpleGrid columns={2} spacing={20}>
                                <Box height='200px'>
                                    <Checkbox colorScheme="green" defaultChecked style={{ marginTop: '5px' }}>
                                        Time
                                    </Checkbox>
                                    <Input placeholder="3 More Days" size="sm" style={{ marginLeft: '20px', width: '80%'}} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Space
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Money
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Donor
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Volunteer
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/><br/>
                                </Box>
                                <Box height='200px'>
                                    Description:
                                    <br/><br/>
                                    <Textarea placeholder="Enter your reason here . . ." />
                                    <br/><br/><br/><br/>
                                    
                                </Box>
                            </SimpleGrid>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
                            <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
                            <span style={{ margin: '50px' }}>
                            d1f19e25-fb60-44b8-9f9e-6b3f3d3d3a1f	 
                            </span>
                            <span style={{ margin: '50px' }}>
                            Garden State Growth
                            </span>
                            <span style={{ margin: '50px' }}>
                            Space
                            </span>
                            <span style={{ margin: '50px' }}>
                            14/03/2023 15:12:37
                            </span>
                            <span style={{ margin: '50px' }}>
                            Yi Kiat
                            </span>
                            <span style={{ margin: '50px' }}>
                            Pending
                            </span>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
                        
                        Project Name: Garden State Growth
                        <br/><br/><br/>
                        Type
                        <br/><br/>
                        <SimpleGrid columns={2} spacing={20}>
                                <Box height='200px'>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Time
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%'}} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultChecked style={{ marginTop: '5px' }}>
                                        Space
                                    </Checkbox>
                                    <Input placeholder="Need 2 more Room" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Money
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Donor
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Volunteer
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/><br/>
                                </Box>
                                <Box height='200px'>
                                    Description:
                                    <br/><br/>
                                    <Textarea placeholder="Enter your reason here . . ." />
                                    <br/><br/><br/><br/>
                                    
                                </Box>
                            </SimpleGrid>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
                            <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
                            <span style={{ margin: '50px' }}>
                            624a9865-d24a-4b52-9b2c-5a82b8dcd95d		 
                            </span>
                            <span style={{ margin: '50px' }}>
                            Marina Milestone
                            </span>
                            <span style={{ margin: '50px' }}>
                            Donor
                            </span>
                            <span style={{ margin: '50px' }}>
                            15/03/2023 10:02:54
                            </span>
                            <span style={{ margin: '50px' }}>
                            Jia Xin
                            </span>
                            <span style={{ margin: '50px' }}>
                            Pending
                            </span>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
                        
                        Project Name: Marina Milestone
                        <br/><br/><br/>
                        Type
                        <br/><br/>
                            <SimpleGrid columns={2} spacing={20}>
                                <Box height='200px'>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Time
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%'}} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Space
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultChecked style={{ marginTop: '5px' }}>
                                        Money
                                    </Checkbox>
                                    <Input placeholder="4 more is needed" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Donor
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Volunteer
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/><br/>
                                </Box>
                                <Box height='200px'>
                                    Description:
                                    <br/><br/>
                                    <Textarea placeholder="Enter your reason here . . ." />
                                    <br/><br/><br/><br/>
                                    
                                </Box>
                            </SimpleGrid>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
                            <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
                            <span style={{ margin: '50px' }}>
                            83ec00e3-3b3e-4a56-b7c9-9e03201b620f			 
                            </span>
                            <span style={{ margin: '50px' }}>
                            Island Innovation
                            </span>
                            <span style={{ margin: '50px' }}>
                            Money
                            </span>
                            <span style={{ margin: '50px' }}>
                            16/03/2023 21:30:11
                            </span>
                            <span style={{ margin: '50px' }}>
                            Ai Xin
                            </span>
                            <span style={{ margin: '50px' }}>
                            Read
                            </span>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
                        
                        Project Name: Island Innovation
                        <br/><br/><br/>
                        Type
                        <br/><br/>
                        <SimpleGrid columns={2} spacing={20}>
                                <Box height='200px'>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Time
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%'}} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Space
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Money
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultChecked style={{ marginTop: '5px' }}>
                                        Donor
                                    </Checkbox>
                                    <Input placeholder="$5500 more is needed" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Volunteer
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/><br/>
                                </Box>
                                <Box height='200px'>
                                    Description:
                                    <br/><br/>
                                    <Textarea placeholder="Enter your reason here . . ." />
                                    <br/><br/><br/><br/>
                                    
                                </Box>
                            </SimpleGrid>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton style={{ backgroundColor: 'white', border: '1px solid grey' }}>
                            <Box as="span" flex='1' textAlign='left' style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white' }}>
                            <span style={{ margin: '50px' }}>
                                57b4c4dd-4bb7-4c4e-9fb9-0f0da8b08d1c  
                            </span>
                            <span style={{ margin: '50px' }}>
                            Merlion Momentum
                            </span>
                            <span style={{ margin: '50px' }}>
                            Volunteer
                            </span>
                            <span style={{ margin: '50px' }}>
                            17/03/2023 13:55:48
                            </span>
                            <span style={{ margin: '50px' }}>
                            Jing Yi
                            </span>
                            <span style={{ margin: '50px' }}>
                            Read
                            </span>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel style={{ backgroundColor: 'white' , border: '1px solid grey', padding: '20px' }}>
                        
                        Project Name: Merlion Momentum
                        <br/><br/><br/>
                        Type
                        <br/><br/>
                        <SimpleGrid columns={2} spacing={20}>
                                <Box height='200px'>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Time
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%'}} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Space
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Money
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultIsChecked style={{ marginTop: '5px' }}>
                                        Donor
                                    </Checkbox>
                                    <Input placeholder="Enter an Amount" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/>
                                    <Checkbox colorScheme="green" defaultChecked style={{ marginTop: '5px' }}>
                                        Volunteer
                                    </Checkbox>
                                    <Input placeholder="10 more volunteers is needed" size="sm" style={{ marginLeft: '20px', width: '80%' }} />
                                    <br/><br/><br/>
                                </Box>
                                <Box height='200px'>
                                    Description:
                                    <br/><br/>
                                    <Textarea placeholder="Enter your reason here . . ." />
                                    <br/><br/><br/><br/>
                                    
                                </Box>
                            </SimpleGrid>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                </>
            )
        }
      };
    
    
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
            title: "ViewRequest",
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
                View All Request Form
            </Heading>


        <div style={{ marginTop: '20px', marginBottom: '20px'}}>
        Search: 
                    <Input placeholder="Enter Something here . . ." size="sm" style={{ marginLeft: '20px', marginRight: '20px', width: '80%'}} />
                    <Button colorScheme="blue">Search</Button>
                    {/* <DrawerExample /> */}
                    <DrawerExample
              selectedOption={this.state.selectedOption}
              onOptionChange={this.handleOptionChange}
            />

                    
                    
        </div>


        
        <br/><br/><br/><br/>
        {this.renderTextbox()}
        <br/><br/><br/><br/>
        



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


