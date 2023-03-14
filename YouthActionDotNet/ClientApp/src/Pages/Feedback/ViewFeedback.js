
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


export default class ViewFeedback extends React.Component {
    
    state = {
        selectedOption: "",
      };
    
      handleOptionChange = (event) => {
        this.setState({ selectedOption: event.target.value });
      };
    
      renderTextbox = () => {
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
                <br/><br/>
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
    2
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
            <Select placeholder='2' size='sm'>
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
</AccordionItem></Accordion>
                </>
            )
            case "sc3":
            return (
                <>
                <Text>SC3</Text>
                <br/><br/>
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
    3
    </span>
    <span style={{ margin: '50px', marginRight: '90px' }}>
    Fair
    </span>
    <span style={{ margin: '40px', marginRight: '70px' }}>
    Q2
    </span>
    <span style={{ margin: '50px' }}>
    2021
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
            <Select placeholder='3' size='sm'>
            </Select>
            <br/><br/><br/>
            Performance
            <br/><br/>
            <Select placeholder='Fair' size='sm'>
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
</AccordionItem></Accordion>
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
                <br/><br/>
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
    5
    </span>
    <span style={{ margin: '50px', marginRight: '90px' }}>
    Bad
    </span>
    <span style={{ margin: '40px', marginRight: '70px' }}>
    Q3
    </span>
    <span style={{ margin: '50px' }}>
    2022
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
            <Select placeholder='5' size='sm'>
            </Select>
            <br/><br/><br/>
            Performance
            <br/><br/>
            <Select placeholder='Bad' size='sm'>
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
</AccordionItem></Accordion>
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
                <br/><br/>
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
    Q4
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
</AccordionItem></Accordion>
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
                <br/><br/>
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
    2
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
            <Select placeholder='2' size='sm'>
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
    Q4
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
</AccordionItem></Accordion>
                </>
            )
            case "Fair":
            return (
                <>
                <Text>Fair</Text>
                <br/><br/>
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
    3
    </span>
    <span style={{ margin: '50px', marginRight: '90px' }}>
    Fair
    </span>
    <span style={{ margin: '40px', marginRight: '70px' }}>
    Q2
    </span>
    <span style={{ margin: '50px' }}>
    2021
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
            <Select placeholder='3' size='sm'>
            </Select>
            <br/><br/><br/>
            Performance
            <br/><br/>
            <Select placeholder='Fair' size='sm'>
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
</AccordionItem></Accordion>
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
                <br/><br/>
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
    5
    </span>
    <span style={{ margin: '50px', marginRight: '90px' }}>
    Bad
    </span>
    <span style={{ margin: '40px', marginRight: '70px' }}>
    Q3
    </span>
    <span style={{ margin: '50px' }}>
    2022
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
            <Select placeholder='5' size='sm'>
            </Select>
            <br/><br/><br/>
            Performance
            <br/><br/>
            <Select placeholder='Bad' size='sm'>
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
</AccordionItem></Accordion>
                </>
            )


            case "Q1":
            return (
                <>
                <Text>Q1</Text>
                <br/><br/>
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
    2
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
            <Select placeholder='2' size='sm'>
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
</AccordionItem></Accordion>
                </>
            )
            case "Q2":
            return (
                <>
                <Text>Q2</Text>
                <br/><br/>
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
    3
    </span>
    <span style={{ margin: '50px', marginRight: '90px' }}>
    Fair
    </span>
    <span style={{ margin: '40px', marginRight: '70px' }}>
    Q2
    </span>
    <span style={{ margin: '50px' }}>
    2021
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
            <Select placeholder='3' size='sm'>
            </Select>
            <br/><br/><br/>
            Performance
            <br/><br/>
            <Select placeholder='Fair' size='sm'>
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
</AccordionItem></Accordion>
                </>
            )
            case "Q3":
            return (
                <>
                <Text>Q3</Text>
                <br/><br/>
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
    5
    </span>
    <span style={{ margin: '50px', marginRight: '90px' }}>
    Bad
    </span>
    <span style={{ margin: '40px', marginRight: '70px' }}>
    Q3
    </span>
    <span style={{ margin: '50px' }}>
    2022
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
            <Select placeholder='5' size='sm'>
            </Select>
            <br/><br/><br/>
            Performance
            <br/><br/>
            <Select placeholder='Bad' size='sm'>
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
</AccordionItem></Accordion>
                </>
            )
            case "Q4":
            return (
                <>
                <Text>Q4</Text>
                <br/><br/>
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
    Q4
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
</AccordionItem></Accordion>
                </>
            )



            case "2021":
            return (
                <>
                <Text>2021</Text>
                <br/><br/>
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
    3
    </span>
    <span style={{ margin: '50px', marginRight: '90px' }}>
    Fair
    </span>
    <span style={{ margin: '40px', marginRight: '70px' }}>
    Q2
    </span>
    <span style={{ margin: '50px' }}>
    2021
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
            <Select placeholder='3' size='sm'>
            </Select>
            <br/><br/><br/>
            Performance
            <br/><br/>
            <Select placeholder='Fair' size='sm'>
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
</AccordionItem></Accordion>
                </>
            )
            case "2022":
            return (
                <>
                <Text>2022</Text>
                <br/><br/>
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
    5
    </span>
    <span style={{ margin: '50px', marginRight: '90px' }}>
    Bad
    </span>
    <span style={{ margin: '40px', marginRight: '70px' }}>
    Q3
    </span>
    <span style={{ margin: '50px' }}>
    2022
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
            <Select placeholder='5' size='sm'>
            </Select>
            <br/><br/><br/>
            Performance
            <br/><br/>
            <Select placeholder='Bad' size='sm'>
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
</AccordionItem></Accordion>
                </>
            )
            case "2023":
            return (
                <>
                <Text>2023</Text>
                <br/><br/>
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
    2
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
            <Select placeholder='2' size='sm'>
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
    Q4
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
</AccordionItem></Accordion>
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
    2
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
            <Select placeholder='2' size='sm'>
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
    3
    </span>
    <span style={{ margin: '50px', marginRight: '90px' }}>
    Fair
    </span>
    <span style={{ margin: '40px', marginRight: '70px' }}>
    Q2
    </span>
    <span style={{ margin: '50px' }}>
    2021
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
            <Select placeholder='3' size='sm'>
            </Select>
            <br/><br/><br/>
            Performance
            <br/><br/>
            <Select placeholder='Fair' size='sm'>
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
    5
    </span>
    <span style={{ margin: '50px', marginRight: '90px' }}>
    Bad
    </span>
    <span style={{ margin: '40px', marginRight: '70px' }}>
    Q3
    </span>
    <span style={{ margin: '50px' }}>
    2022
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
            <Select placeholder='5' size='sm'>
            </Select>
            <br/><br/><br/>
            Performance
            <br/><br/>
            <Select placeholder='Bad' size='sm'>
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
    Q4
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



            <div style={{ marginTop: '40px', marginBottom: '20px'}}>
        Search: 
                    <Input placeholder="Enter Something here . . ." size="sm" style={{ marginLeft: '20px', marginRight: '20px', width: '80%'}} />
                    <Button colorScheme="blue">Search</Button>
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


